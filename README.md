# Rafael Marques — Portfolio

French and English portfolio for freelance web development. Static pages, project case studies, experience, contact links and a downloadable CV.

## Development

Requires Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Open `http://localhost:4321/portfolio/`.

```sh
npm run check
npm run build
npx playwright install chromium
npm test
npm run format:check
```

## Structure

- `src/content/`: typed project, experience and profile content. French and English versions share the same schema.
- `src/lib/`: content selection and base-aware URL helpers.
- `src/components/`: navigation, page sections and shared presentation elements.
- `src/layouts/`: page composition, metadata and common structure.
- `src/pages/`: static routes, sitemap, robots.txt and the 404 page.
- `src/scripts/`: native browser enhancements, including the entrance motion controller.
- `src/assets/`: AloneLab website capture, optimised during the build, and the editable SVG for the social preview.
- `src/styles/`: design tokens, layout, components and responsive rules in explicit CSS layers.
- `public/documents/`: downloadable CV.
- `public/social-preview.png`: 1200 × 630 image for shared links.
- `tests/`: browser checks for navigation, languages, downloads, contact feedback, mobile layout and accessibility.

Astro generates the HTML at build time. Small native scripts enhance the mobile navigation, email copy button and entrance reveals. Content and navigation work without JavaScript. Motion respects the system preference for reduced motion, plays once per element and stops when an element receives keyboard focus. Content starts visible; animations never gate access to it. Fonts are self-hosted; there are no analytics, tracking scripts or external font requests.

Manrope and IBM Plex Mono are distributed under the SIL Open Font License. Their license notices are included in `public/fonts/licenses/`.

## Updating content

Edit `src/content/fr.ts` and `src/content/en.ts` together. Contact details and shared skills are in `src/content/profile.ts`. Replace the CV at `public/documents/rafael-marques-cv.pdf`. Client projects are described without fabricated screenshots, client identities or numerical results.

## Hosting

The default configuration targets `https://mrafael1.github.io/portfolio/`. In GitHub, select **Settings → Pages → Source → GitHub Actions**, then run **Deploy to GitHub Pages** from the Actions tab. Deployment is manual; opening or merging a pull request does not publish the site.

For a root domain, set the build environment:

```sh
SITE_URL=https://your-domain.example
BASE_PATH=/
```

Run `npm run build` and publish `dist/` on any static host. The configured origin is also used for canonical URLs, language alternates and the sitemap. For GitHub Pages with a custom domain, configure the domain in Pages settings and add the corresponding `public/CNAME` file.

The CV contains professional contact information. Project previews belong to their respective projects. Do not reuse these assets for other people’s portfolios.
