# The Miata Bible Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild The Miata Bible into a serious, mobile-first Miata ownership platform with a deeply organized, generation-aware workshop manual, cloud-saved garages, interactive builds, and a strong Japanese workshop / enthusiast-magazine identity.

**Architecture:** Replace the single-file prototype with a componentized web application. The front end will use a typed content model for generations, systems, procedures, parts, builds, and history; a service layer will isolate authentication and cloud persistence from UI components; and the manual will render structured article units instead of one giant page. The deployed product must support anonymous/local preview mode plus authenticated cloud garages when the managed backend is available.

**Tech Stack:** React + TypeScript + Vite-compatible web app; CSS design tokens and responsive layout; structured JSON/TS manual content; managed authentication/database through the Webdev project when enabled; GitHub as source control and publishing fallback; Vitest or browser-native smoke checks for content and state logic.

**Spec:** This plan implements the user brief in the conversation: choose direction 1 (Japanese workshop / enthusiast magazine), build for all Miata generations, provide cloud-saved builds, make the repair manual extremely extensive and organized/easy to navigate, and keep the name The Miata Bible.

## Global Constraints

- The product name is **The Miata Bible**.
- Visual direction is **Japanese workshop / enthusiast magazine** rather than a generic SaaS dashboard.
- Coverage includes **NA, NB, NC, and ND**, with generation-specific fitment warnings.
- Cloud-saved builds are required; local-only persistence is a fallback mode, not the product goal.
- The repair manual must be extensive, structured, searchable, and generation-aware, targeting a 300-page-equivalent digital publication rather than a list of short tips.
- Manual content must be original and copyright-safe; do not copy Mazda, Haynes, Chilton, or other commercial service-manual wording or diagrams.
- Safety-critical work must carry clear warnings and direct users to the correct factory information for VIN/market-specific limits.
- The interface must be keyboard accessible, readable at 200% zoom, have visible focus states, descriptive labels, useful alt text, and respect reduced motion.
- No fake community claims, fake testimonials, invented user counts, generic AI filler, or vague “unlock your potential” copy.

## Review Focus

- Generation and market mismatch must be visible before a procedure or part is applied; test NA/NB/NC/ND fitment filtering and warning states.
- Manual navigation must remain usable with hundreds of structured entries; test search, chapter filtering, breadcrumbs, saved procedures, and direct deep links.
- Cloud save failure must not erase a user’s garage; test offline/local fallback, retry state, conflict messaging, and export backup.
- Build history must be append-only and explain changes; test add, replace, archive, undo/display, and export flows.
- The manual must not overstate certainty; test procedures with missing exact torque/spec data and ensure “verify in factory information” language appears.

---

## Design Decisions

### Design Read

```yaml
artifact: mobile-first enthusiast ownership workspace + digital workshop manual
 audience: Miata owners, DIY mechanics, restorers, modifiers, and track-day enthusiasts
visual-language: Japanese workshop notebook fused with premium automotive editorial
mode: redesign · overhaul
visual-variance: 8/10
motion-intensity: 3/10
information-density: 8/10
asset-dependence: 8/10
brand-fidelity: 7/10
```

### Movement

**Japanese service-bay print culture meets modern motorsport data sheets.** The product should feel like a trusted notebook that has been used, annotated, and improved—not a glossy “AI car app.”

### Core principles

1. **Evidence before decoration:** specs, fitment, sources, and warnings are primary content.
2. **Workshop hierarchy:** strong section labels, numbered procedures, checklists, and visible state.
3. **Editorial breathing room:** large generation photography and story-led entry points keep dense information human.
4. **Earned color:** one signature vermilion accent, muted metal neutrals, and warning colors used only for meaning.

### Color philosophy

- Ink: near-black blue charcoal for the workbench surface.
- Paper: warm bone/off-white for manual reading surfaces.
- Steel: cool gray-blue for panels and rules.
- Vermilion: ownable red-orange used for active states, section markers, and key actions.
- Safety amber and signal green are semantic only, never decoration.

### Layout paradigm

Use a **split workbench** rather than centered dashboard cards: a persistent rail for manual chapters or garage context, a wide reading/work surface, and a narrow metadata rail for fitment, tools, budget, and save state. On mobile, the rail becomes a bottom sheet or stacked context bar.

### Signature elements

- **Section tabs:** narrow vermilion index tabs labeled `01`, `02`, `03`, like a printed workshop binder.
- **Fitment stamps:** compact badges such as `NA · 1.8 · US` and `VERIFY YEAR`.
- **Service annotations:** margin notes, torque/spec callouts, and “before you begin” strips that look like marked-up shop literature.

### Interaction philosophy

Interactions should feel deliberate and reversible. Adding a part should show what it changes, which prior part it supersedes, cost impact, and a history event. Filters should explain exclusions. Cloud saving should expose status (`Saved`, `Saving`, `Offline copy`) rather than silently failing.

### Animation

Use short opacity/translate transitions (160–240ms) for tab changes, procedure expansion, and toast states. Avoid floating card choreography and parallax. Honor `prefers-reduced-motion` by removing transitions and animated counters.

### Typography system

- Display: `Barlow Condensed` or a similarly narrow industrial sans for chapter titles and labels.
- Body: `Inter` or system sans for long-form reading and forms.
- Technical: `IBM Plex Mono` for fitment strings, measurements, part numbers, and status labels.
- Use uppercase sparingly for metadata and section tabs; body copy remains normal case for legibility.

### Brand essence

**The Miata Bible is the practical, source-aware workshop companion for people who actually own, maintain, and modify their roadster.** Personality: exacting, warm, opinionated.

### Brand voice

- Headline: “Know what changed. Know what fits. Know what happens next.”
- Microcopy: “This part replaces the stock sway bar. Your previous setup stays in history.”

### Wordmark / mark concept

A compact `MB` monogram built from a service-manual index tab and a simplified roadster profile; use the full wordmark in the header and the monogram for app/favicon contexts. Do not use a generic shield, wrench, or checkmark logo.

### Signature brand color

**Workshop Vermilion `#D5533D`** — warm, physical, and legible against the ink surface without looking like a generic SaaS blue.

---

## Product structure

- `src/app/` — app shell, routing, session state, responsive navigation.
- `src/design/` — tokens, typography, common primitives, responsive layout utilities.
- `src/features/garage/` — vehicle profile, installed parts, build snapshots, cloud-save status.
- `src/features/manual/` — manual reader, chapter rail, filters, search, procedure renderer, print view.
- `src/features/builds/` — mod catalog, compatibility, budget planner, replace/archive/history logic.
- `src/features/facts/` — generation gallery, timelines, specifications, source cards.
- `src/content/` — generation data, manual taxonomy, original procedure records, safety language, citations.
- `src/services/` — auth, garage repository, content search, export/import, local fallback.
- `src/types/` — shared domain types and discriminated unions.
- `public/assets/` — locally hosted credited generation imagery and future diagrams.
- `docs/manual/` — editorial outline, source register, and content production notes.
- `tests/` — content integrity, fitment logic, state transitions, and smoke tests.

## Manual architecture

The manual is a structured publication with approximately 14 major books and 300-page-equivalent coverage, not one HTML document:

1. Orientation, safety, tools, lifting, and workshop practice.
2. Vehicle identification, model-year decoding, trim, market, and fitment.
3. Maintenance schedules, inspection sheets, fluids, belts, hoses, and storage.
4. Diagnostics: symptom trees, scan data, voltage-drop tests, grounds, and test strategy.
5. Engine mechanical systems for each generation family.
6. Intake, fuel, ignition, emissions, sensors, and ECU fundamentals.
7. Cooling, heating, air conditioning, and climate controls.
8. Clutch, transmission, differential, axles, hubs, and driveline.
9. Brakes, ABS, steering, suspension, alignment, and chassis setup.
10. Body, soft tops, water leaks, rust inspection, glass, and trim.
11. Electrical, lighting, instruments, switches, windows, and accessories.
12. Generation books: NA, NB, NC, and ND with known issues and fitment deltas.
13. Modification engineering: wheels/tires, suspension, brakes, power, cooling, safety, and track preparation.
14. Diagnostic index, specifications index, forms, logs, and printable job sheets.

Each procedure record contains: `id`, `chapter`, `system`, `title`, `appliesTo`, `symptoms`, `difficulty`, `time`, `tools`, `parts`, `safety`, `steps`, `verification`, `commonMistakes`, `relatedProcedures`, `sources`, and `lastReviewed`.

## Implementation tasks

### Task 1: Replace the single-file prototype with the app shell and design tokens

**Files:** Create `src/app`, `src/design`, `src/types`; modify package/build files.

- [ ] Define the domain types for vehicle profiles, generations, parts, builds, history events, manual procedures, source citations, and sync status.
- [ ] Implement the workbench shell with responsive rail, reading surface, metadata rail, skip link, landmarks, and route-level titles.
- [ ] Implement the design tokens, typography, section tabs, fitment stamps, safety callouts, and focus states.
- [ ] Remove generic card-grid-first layout patterns from the active application surface.
- [ ] Check TypeScript/build diagnostics and render shell at mobile and desktop widths.

### Task 2: Build the cloud-ready garage data layer

**Files:** `src/services/auth`, `src/services/garage`, `src/features/garage`, backend/schema migrations as supported by the managed project.

- [ ] Implement anonymous local mode with explicit `Offline copy` status.
- [ ] Implement authenticated account/session flow when the managed backend is available.
- [ ] Persist vehicle profile, installed parts, plan items, history events, and snapshots to the cloud repository.
- [ ] Add optimistic updates with retry and export backup; never discard local changes on sync failure.
- [ ] Add conflict-safe append-only history records.

### Task 3: Implement the manual reader and navigation system

**Files:** `src/features/manual`, `src/content/manual`, `docs/manual/outline.md`.

- [ ] Create the 14-book taxonomy and chapter metadata.
- [ ] Build chapter rail, breadcrumbs, previous/next controls, table of contents, saved procedure state, and print view.
- [ ] Add search by title, symptom, component, generation, engine, and tag.
- [ ] Add fitment filtering that shows applicable, conditional, and excluded procedures with explanations.
- [ ] Add procedure renderer with tools, parts, warnings, numbered steps, verification, mistakes, sources, and related procedures.

### Task 4: Produce the first serious manual content tranche

**Files:** `src/content/manual/books/*.ts`, `docs/manual/source-register.md`.

- [ ] Write original, source-aware content for the safety/orientation, identification/fitment, maintenance, diagnostics, and generation-overview books.
- [ ] Add at least 60 fully structured procedures before expanding the remaining books.
- [ ] Keep exact torque values and model-specific specifications behind fitment labels and source citations; where not verified, state that factory information must be checked.
- [ ] Add authoring metadata so each procedure can be reviewed and revised without rewriting UI code.

### Task 5: Rebuild interactive parts, budgets, and build history

**Files:** `src/features/builds`, `src/features/garage`, `src/content/parts`.

- [ ] Add part catalog entries by generation/system with compatibility and prerequisites.
- [ ] Make an upgrade change the vehicle’s current configuration while retaining the replaced component in history.
- [ ] Show before/after setup, estimated cost, budget delta, and compatibility warnings.
- [ ] Add build snapshots and named build paths (reliability, street, autocross, track, turbo support, restoration).
- [ ] Add export/import for complete garage history.

### Task 6: Rebuild generation facts and visual browsing

**Files:** `src/features/facts`, `src/content/generations`, `public/assets`.

- [ ] Create visual NA/NB/NC/ND landing panels with source credits and timeline context.
- [ ] Add generation-specific “watch first” maintenance and known-difference notes.
- [ ] Connect generation panels to filtered manual chapters and compatible parts.

### Task 7: Verification, accessibility, and publication

**Files:** tests, route manifest, README, deployment config.

- [ ] Verify build, content schema integrity, fitment filtering, cloud/local save transitions, history append behavior, and export/import.
- [ ] Run accessibility checks for labels, landmarks, focus visibility, contrast, 200% zoom behavior, and reduced motion.
- [ ] Verify the manual is navigable by keyboard and readable on a phone.
- [ ] Publish through the managed web project when available; retain a GitHub-backed source and a clear deployment status.

## Execution order

Implement Tasks 1–3 as the first vertical slice, then pause for a design/interaction review before writing the full manual content tranche. Tasks 4–6 can proceed in parallel only after the content schema and reader are stable. Task 7 is required before calling the rebuild launch-ready.
