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

- `vercel.json` sets `framework: null` so Vercel deploys the Nitro-generated `.vercel/output` directory instead of applying its own framework preset.
- SEO files reference `https://vibequest.vercel.app` in `src/routes/sitemap[.]xml.ts`. After deploying, update this to your production domain if needed.

