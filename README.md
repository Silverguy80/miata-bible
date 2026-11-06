# Modified Miata Bible

Modified Miata Bible is a source-aware workshop companion for NA, NB, NC, and ND owners. This rebuild uses a Japanese workshop / enthusiast-magazine direction: a manual-reader workbench, fitment stamps, generation imagery, structured procedures, a garage profile, build ledger, budget planner, and append-only service history.

## Run locally

```bash
cd /home/ubuntu/miata-bible-site-live
python3 -m http.server 4174
```

Open `http://127.0.0.1:4174`.

The current first rebuild checkpoint is dependency-light and uses ES modules served by a static HTTP server. Content lives in `content.js`, persistence is isolated in `garage-store.js`, presentation is in `styles.css`, and UI behavior is in `app.js`.

## Manual architecture

The repair library is organized as a 14-book, uncapped publication plan. It is not presented as a factory service manual. Each procedure record carries generation applicability, symptoms, difficulty, time, tools, safety language, steps, verification, common mistakes, and source guidance. The troubleshooting volume now includes symptom-first paths for no-crank, crank/no-start, rough idle, overheating, charging faults, parasitic drain, brake pull, NVH, and water leaks. The remaining books will be expanded in editorial tranches rather than padded with repetitive copy.

## Persistence

The product model is **Free Garage first**: the manual, local vehicle record, future-build planner, installed-parts ledger, history, and JSON export work without a paid account. The garage currently saves a local copy in browser storage through `garage-store.js`. Optional **Sync** is the future paid tier for authenticated account storage, encrypted cross-device backup, conflict handling, and restore history. That service boundary is isolated in `garage-store.js`, so adding Sync will not require rewriting the manual or build features. Export the garage JSON before changing devices.

## Copyright and safety

Repair guidance is independently written educational material. It does not reproduce Mazda, Haynes, Chilton, or other commercial service-manual text or diagrams. Always verify exact year, trim, market, engine, transmission, fastener specifications, fluid requirements, and safety procedures in authorized service information before working on a vehicle.

Generation photos are locally hosted with source and license credits in `assets/credits.md`.

## Generation field manual expansion

The `Generation repair` workbench now contains separate NA, NB, NC, and ND field-manual files. The NA and NB sets cover electrical starting/charging/grounds/lighting, engine/fuel/ignition/no-start diagnosis, cooling and overheating, plus driveline, brakes, suspension, corrosion, and top systems. NC and ND add networked electrical diagnosis, ABS/DSC/SRS boundaries, PRHT/RF roof cautions, low-voltage cascades, cooling, driveline, and chassis procedures.

The circuit maps in the UI are original functional abstractions. They are intentionally not factory schematics: they omit proprietary pinouts, connector cavities, wire colors, fuse artwork, and copied service-manual illustrations. The underlying research notes retain source URLs and generation caveats in `docs/research/na-nb/` and `docs/research/nc-nd/`.

The canonical editorial architecture is documented in `docs/master-manual-editorial-system.md`. Its core rule is one full explanation per technical task, generation-specific overlays for differences, symptom-index cross-references, and original writing rather than disguised copies of commercial manuals.
