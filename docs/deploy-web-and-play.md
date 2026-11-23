# Deploy path: website + Play Store

The Bible is a static ES-module web app (`index.html` + `app.js` + `styles.css`) with a standalone public bundle (`preview.html`).

## Website (now)

1. Serve the repo root over HTTPS (GitHub Pages, Cloudflare Pages, Netlify, S3+CloudFront, or your MMG domain path such as `/bible`).
2. Prefer the modular app (`index.html`) for ongoing work; publish `preview.html` only when you need a single-file drop.
3. After CSS/JS edits, keep `styles.css` and the styles inlined in `preview.html` in sync.
4. Open `https://your-domain/` and verify Garage → Manual → Fitment on phone width.

## Play Store (later)

Recommended wrap: **Capacitor** around the same static build (not a rewrite).

1. Keep the web app installable as a PWA first (`manifest.webmanifest` + service worker + icons).
2. Add Capacitor Android when you want store listing, push, and Play billing later.
3. Package icons from MMG black/white/red marks; use `#000000` status/nav bars.
4. Play requirements that matter for this app: privacy policy (local garage data), content rating, target API level, and a clear distinction that repair guidance is educational / not OEM factory data.
5. Optional alternate: Trusted Web Activity (TWA) if the production site already meets PWA installability and you want a thinner Android shell.

## Brand on both surfaces

Website hosting and the Android shell should use the same MMG sibling tokens documented in `docs/brand-system.md` so the shop and Bible stay related but distinguishable.
