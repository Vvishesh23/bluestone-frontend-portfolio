# Vishesh · Frontend Engineering

An independent portfolio built with Vite, React and TypeScript. The landing page links to three case studies at `/work/finn`, `/work/ocrflow` and `/work/quoteguard`.

## Build

Use Node 22.12+ or Node 24. Run `npm ci`, `npm run typecheck` and `npm run build`. Use `npm run dev` for development or `npm run preview` to serve the production output. The project requires zero runtime environment variables.

## Publish on GitHub Pages

1. Create the public repository `Vvishesh23/bluestone-frontend-portfolio` and commit this project's contents to `main`, including `.github/workflows/pages.yml`.
2. In the repository, open **Settings → Pages** and set the source to **GitHub Actions**.
3. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow** and select `main`. Later pushes to `main` deploy automatically.
4. Open the URL reported by the deployment. Check the home page, a direct case-study URL and the résumé.

The workflow gets the site base path from GitHub Pages. To reproduce the project-site build, run `PAGES_BASE=/bluestone-frontend-portfolio/ npm run build`.

## Publish on Vercel

Create the GitHub repository `Vvishesh23/bluestone-frontend-portfolio` and populate it with these source files. Import it at https://vercel.com/new. Select the Vite preset, root directory `.`, build command `npm run build`, install command `npm ci`, and output directory `dist`. The included `vercel.json` rewrites direct case-study requests to the SPA. Test each case study by opening its URL in a fresh tab.

## Résumé and contact

The PDF in `public/vishesh-vishwakarma-resume.pdf` is a public copy with the phone and email removed. Update the résumé, education and experience together when the approved source changes.

## Sources and media

- FINN frontend `1230e01`, backend `8813759`.
- OCRFlow `6b08d2f`. Screenshots adapted from the MIT-licensed project documentation. See `public/projects/ocrflow-license.txt`.
- QuoteGuard `b324733`. The original holdout figure comes from `reports/frozen-holdout/holdout.png`.
- The project schematics illustrate source behavior. The OCRFlow images show its actual demo.

The FINN explorer uses a small selection of dated filing metadata from the backend’s bundled snapshot. It links out to the original filings and requires no API.
