import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const distClient = path.join(rootDir, "dist", "client");
const vercelOutputDir = path.join(rootDir, ".vercel", "output");
const vercelStaticDir = path.join(vercelOutputDir, "static");
const vercelFunctionDir = path.join(vercelOutputDir, "functions", "index.func");

// 1. Ensure clean .vercel/output directory
if (fs.existsSync(vercelOutputDir)) {
  fs.rmSync(vercelOutputDir, { recursive: true, force: true });
}

fs.mkdirSync(vercelStaticDir, { recursive: true });
fs.mkdirSync(vercelFunctionDir, { recursive: true });

// 2. Copy dist/client static assets to .vercel/output/static
if (fs.existsSync(distClient)) {
  fs.cpSync(distClient, vercelStaticDir, { recursive: true });
  console.log("✓ Copied dist/client to .vercel/output/static");
} else {
  console.error("❌ Error: dist/client does not exist. Run vite build first.");
  process.exit(1);
}

// 3. Write .vercel/output/config.json
const vercelConfig = {
  version: 3,
  routes: [
    { handle: "filesystem" },
    { src: "/(.*)", dest: "/index" },
  ],
};
fs.writeFileSync(
  path.join(vercelOutputDir, "config.json"),
  JSON.stringify(vercelConfig, null, 2)
);

// 4. Write .vc-config.json for index.func
const vcConfig = {
  runtime: "nodejs20.x",
  handler: "index.mjs",
  launcherType: "Nodejs",
};
fs.writeFileSync(
  path.join(vercelFunctionDir, ".vc-config.json"),
  JSON.stringify(vcConfig, null, 2)
);

// 5. Write index.mjs wrapper for index.func
const indexMjsContent = `import server from '../../../dist/server/server.js';

export default async function handler(req, res) {
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
  const url = new URL(req.url, \`\${protocol}://\${host}\`);

  const headers = new Headers();
  for (const [k, v] of Object.entries(req.headers)) {
    if (v) {
      if (Array.isArray(v)) {
        v.forEach((val) => headers.append(k, val));
      } else {
        headers.set(k, v);
      }
    }
  }

  let body = null;
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    body = req;
  }

  const request = new Request(url.href, {
    method: req.method,
    headers,
    body,
    duplex: body ? 'half' : undefined,
  });

  try {
    const response = await server.fetch(request);
    res.statusCode = response.status;
    response.headers.forEach((v, k) => {
      res.setHeader(k, v);
    });
    const arrayBuffer = await response.arrayBuffer();
    res.end(Buffer.from(arrayBuffer));
  } catch (err) {
    console.error('Server function error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}
`;

fs.writeFileSync(path.join(vercelFunctionDir, "index.mjs"), indexMjsContent);

console.log("✓ Successfully generated .vercel/output for Vercel Output API v3!");
