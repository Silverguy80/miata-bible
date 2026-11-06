# Modified Miata Bible Master Manual Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace shallow inspection content with an original, source-backed master repair manual that gives Miata owners real removal, diagnosis, repair, reassembly, and verification procedures across NA, NB, NC, and ND.

**Architecture:** Keep the existing reader UI, but move repair content into focused generation/system modules instead of one oversized data file. Each procedure will carry fitment, prerequisites, tools, safety gates, removal sequence, inspection criteria, reassembly sequence, verification, common failure modes, and source notes. The manual will clearly label factory-verified facts, enthusiast practice, and unresolved/variant-dependent items.

**Tech Stack:** Existing dependency-light HTML/CSS/ES modules, Markdown research notes, JavaScript content modules, GitHub Pages-compatible static output.

**Spec:** User request in chat: actual in-depth Miata repair knowledge, synthesized into one original Modified Miata Bible master manual, with professional enthusiast tone and full NA/NB/NC/ND coverage.

## Global Constraints

- Do not copy or closely paraphrase Haynes, Bentley, Mazda, Rod Grainger, or other copyrighted manuals.
- Synthesize facts into original explanations and sequences; link to source material rather than reproducing proprietary diagrams, tables, pinouts, or exact wording.
- Never present a universal specification where year, market, trim, engine, transmission, brake package, or modification changes the answer.
- Safety-critical work must include a stop condition and a verification step.
- The reader must distinguish established facts, enthusiast practice, and uncertain or variant-dependent information.
- The manual is a companion reference, not a substitute for authorized service information.

## Review Focus

- Fitment drift across NA/NB/NC/ND, including engine, transmission, brake, RF/PRHT, and market differences.
- Procedures that describe inspection but never give a repair or reassembly path.
- Torque, fluid, electrical, and calibration values that require exact-year verification.
- Safety-critical jobs where an incomplete verification step could send an unsafe car onto the road.
- Copyright risk from mirroring commercial-manual wording or diagrams.

---

### Task 1: Build the repair-procedure schema and editorial labels

**Files:**
- Create: `manual-schema.js`
- Modify: `app.js`
- Modify: `styles.css`

- [ ] Add a procedure schema with `id`, `generation`, `system`, `job_type`, `difficulty`, `time`, `symptoms`, `fitment`, `parts`, `tools`, `safety`, `remove`, `inspect`, `repair`, `reassemble`, `verify`, `mistakes`, `facts_status`, and `sources`.
- [ ] Add visible labels for `Factory-verified`, `Common enthusiast practice`, and `Variant-dependent` content.
- [ ] Add reader controls for generation, system, job type, and difficulty.
- [ ] Keep the current search and saved-procedure behavior working.
- [ ] Verify the module parses and the reader renders procedures with missing optional fields safely.

### Task 2: NA and NB engine / cooling / driveline repair volume

**Files:**
- Create: `manual-na-nb.js`
- Modify: `content.js`
- Create: `docs/manual/na-nb-engine-driveline.md`

- [ ] Add original procedures for timing-belt service, water-pump replacement, cam/crank seal strategy, front-cover reseal, cooling-system flush and bleed, radiator/fan diagnosis, clutch master/slave replacement, clutch hydraulic bleeding, shifter turret service, differential fluid service, axle seal diagnosis, and wheel-bearing replacement.
- [ ] For each job, describe access, removal order, inspection decisions, reassembly order, and verification rather than only inspection.
- [ ] Separate 1.6 and 1.8 differences where they materially change the work.
- [ ] Record source links and mark exact torque/fluid values for VIN/year verification.
- [ ] Verify at least 12 procedures render and filter correctly for NA and NB.

### Task 3: NC engine / chassis / PRHT repair volume

**Files:**
- Create: `manual-nc.js`
- Create: `docs/manual/nc-repair.md`

- [ ] Add procedures for NC cooling-system service, belt/tensioner work, clutch hydraulics, transmission/differential service, front and rear suspension refresh, wheel bearing/hub diagnosis, brake caliper service, alignment preparation, PRHT drains and roof troubleshooting, and common corrosion/sealing work.
- [ ] Include NC-specific cautions for geometry, weight, PRHT hardware, and electronic diagnostics.
- [ ] Mark procedures that require scan-tool calibration or post-repair checks.
- [ ] Verify at least 12 procedures render and filter correctly for NC.

### Task 4: ND engine / electrical / RF repair volume

**Files:**
- Create: `manual-nd.js`
- Create: `docs/manual/nd-repair.md`

- [ ] Add procedures for ND battery/charging diagnosis, cooling service, brake service, clutch and shifter work, suspension replacement, wheel-bearing diagnosis, RF roof interlock diagnosis, window/roof coordination, sensor and low-voltage troubleshooting, and safe modification wiring.
- [ ] Separate ND1/ND2/ND3 and soft-top/RF caveats where applicable.
- [ ] Include a clear boundary around SRS, immobilizer, CAN, and calibration work that should be referred to qualified service.
- [ ] Verify at least 12 procedures render and filter correctly for ND.

### Task 5: Track setup and forced-induction engineering volume

**Files:**
- Create: `manual-track.js`
- Create: `docs/manual/track-and-power.md`
- Modify: `app.js`
- Modify: `styles.css`

- [ ] Add original track setup workflows for ride height, corner weighting, alignment, tire temperature reading, brake pad/rotor selection, fluid planning, track inspection, and post-session diagnosis.
- [ ] Add suspension tuning charts that explain symptom → adjustment → tradeoff rather than pretending one setup fits every car.
- [ ] Add forced-induction preparation and wiring diagrams as conceptual block diagrams only: power distribution, relay control, fuel pump, wideband, boost control, intercooler/charge-air, and engine protection.
- [ ] Include safe tuning gates, fuel-system sizing caveats, heat management, and “do not drive” conditions.
- [ ] Verify charts and diagrams are responsive and accessible.

### Task 6: Manual reader redesign for real depth

**Files:**
- Modify: `app.js`
- Modify: `styles.css`

- [ ] Add a procedure “job card” that shows fitment, parts, tools, safety, removal, repair, reassembly, verification, and sources in a stable order.
- [ ] Add “Before buying parts” and “After the repair” checklists.
- [ ] Add related procedures and a “save to service queue” action.
- [ ] Add printable job-sheet output that includes the current vehicle record and blank measurement fields.
- [ ] Verify mobile readability, keyboard access, and no horizontal overflow.

### Task 7: Research ledger, copyright review, and publication

**Files:**
- Create: `docs/manual/source-ledger.md`
- Modify: `README.md`
- Modify: `preview.html`

- [ ] Record source URL, source type, covered generations, and what was independently synthesized for each manual volume.
- [ ] Review every procedure for copied phrasing, reproduced proprietary diagrams, unsupported exact values, and missing safety gates.
- [ ] Rebuild the bundled preview and run JavaScript syntax, HTTP smoke, and content-count checks.
- [ ] Publish the completed tranche to the existing repository and keep the app name as Modified Miata Bible.

## Delivery Strategy

Ship in three reviewed tranches rather than padding the app with repetitive text: (1) NA/NB engine and driveline, (2) NC/ND repair systems, and (3) track, forced induction, and reader upgrades. Each tranche must add real jobs and remain usable before the next tranche is merged.
