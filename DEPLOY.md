# Deploying Vibe Quest to Vercel

This project is a TanStack Start app. On Vercel it builds with the Nitro
**Vercel** preset (configured in `vite.config.ts`) and is served via Vercel's
Build Output API.

## Quick deploy

1. Unzip this archive.
2. From inside the folder, run the Vercel CLI:
   ```bash
   npm i -g vercel
   vercel          # preview deployment
   vercel --prod   # production deployment
   ```
3. When prompted, accept the defaults (framework: Other, build command
   `bun run build`, install command `bun install`).

## Or: import from Git

Push the folder to a GitHub/GitLab repo, then in Vercel dashboard →
**Add New → Project → Import**. Vercel reads `vercel.json`, so no extra
config is needed.

## Notes

- `vercel.json` sets `framework: null` so Vercel deploys the Nitro-generated
  `.vercel/output` directory instead of applying its own framework preset.
- The Lovable preview/publish path is unaffected — the Lovable build sandbox
  always targets Cloudflare, overriding the `vercel` preset.
- SEO files reference the Lovable preview URL
  (`https://insight-spark-studio-93.lovable.app`) in `src/routes/sitemap[.]xml.ts`
  and `public/robots.txt`. After deploying, update these to your Vercel domain.
- Requires Bun (Vercel installs deps with `bun install`). Vercel supports Bun
  out of the box; no extra setup needed.
