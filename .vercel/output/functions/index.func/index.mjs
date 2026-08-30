import server from '../../../dist/server/server.js';

export default async function handler(req, res) {
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
  const url = new URL(req.url, `${protocol}://${host}`);

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
