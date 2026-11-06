# NB engine mechanical, fuel, ignition, emissions, and no-start diagnosis

## Scope and model caveats

This note covers the second-generation MX-5/Miata (NB, broadly 1999–2005 in North America) and is intentionally a diagnostic outline rather than a reproduction of a workshop manual. The exact engine-control hardware varies by year, market, transmission, emissions package, and special model. In particular, 1999–2000 NB1 cars use a different intake strategy from 2001–2005 NB2 cars: the earlier cars use VICS, while NB2 uses intake-cam VVT and a revised ECU. The 2004–2005 Mazdaspeed is turbocharged and has a different calibration and hardware set; do not apply naturally aspirated assumptions to it. These generation changes are documented in the enthusiast buyer’s guide [4].

Mazda’s owner information is useful for operating warnings and safe starting/maintenance behavior, but it is not a complete fault-isolation manual. The owner manuals state that the check-engine lamp can indicate an emissions-control problem and warn against repeated long starter operation; they also emphasize that equipment descriptions can vary by model and option [1] [2].

## Safe diagnostic sequence

A crank/no-start should be treated as a missing requirement, not as a reason to replace parts. Establish: adequate cranking speed and stable battery voltage; correct mechanical timing and compression; a valid engine-speed signal; ignition spark at the correct time; injector command and fuel pressure/volume; then air, exhaust restriction, and emissions-control faults. Record fault codes and freeze-frame data before clearing anything. Keep fuel away from ignition sources, depressurize fuel lines safely, use an approved spark tester, and never probe an airbag/immobilizer circuit with improvised jumpers.

## Procedures

### 1. Classify the failure and capture baseline evidence

**Symptom:** The engine does not crank, cranks slowly, cranks normally but never fires, or starts and immediately stalls.

**Safety:** Neutral/park, parking brake set, wheels chocked. Do not crank continuously; Mazda’s owner guidance limits starter attempts and calls for a pause to protect the starter and battery [2].

**Tools:** Battery tester or multimeter, scan tool, compression gauge, inspection light, notebook/camera.

**Steps:**
1. Confirm the complaint and distinguish no-crank from crank/no-start. Note whether the immobilizer/security indicator behaves normally for the car’s market and equipment.
2. Check battery state, terminal tightness, engine/body grounds, and cranking speed. A weak battery can create misleading ignition and injector symptoms.
3. With key ON, confirm the warning lamps perform their normal bulb check. A missing check-engine lamp or absent scan communication is evidence of a power, ground, fuse, connector, or module problem—not proof that the PCM is bad.
4. Scan for stored and pending codes without erasing them. Treat an emissions code as a lead; it does not automatically explain a no-start.
5. Inspect for recent work, water intrusion, rodent damage, disconnected grounds, loose intake ducting, and timing-belt history before testing individual components.

**Tests:** Battery voltage at rest and during crank; scan-tool communication; visual fuse/ground/connector inspection; code capture.

**Verify:** The failure mode and baseline electrical condition are documented before any part is substituted.

**Mistakes:** Repeatedly cranking a weak battery, clearing codes before recording them, or assuming the most prominent code is the root cause.

### 2. Check mechanical timing, compression, and engine-speed input

**Symptom:** Strong cranking with no ignition, very low/uneven compression, a sudden loss of compression, or an intermittent hot no-start.

**Safety:** Disable fuel/ignition as appropriate for the test plan; keep hands and clothing clear of belts and fans. Follow the exact engine-specific timing procedure for the installed engine.

**Tools:** Compression gauge, remote starter switch or assistant, timing-mark light/inspection mirror, scan tool with live RPM if available, oscilloscope or back-probe tools where trained.

**Steps:**
1. Observe cranking sound and compare cylinder compression using the same test method on all cylinders. A uniform low result suggests test conditions, throttle position, valve timing, or battery speed; one or two low cylinders suggest a localized mechanical issue.
2. Confirm cam-to-crank relationship at the timing marks. Do not infer belt integrity from the fact that the engine turns.
3. During cranking, check whether the scan tool sees a plausible engine-speed signal. No RPM can point toward crank/cam sensing, wiring, power, or PCM input problems, but the exact sensor arrangement differs between NB variants.
4. If timing is suspect, stop spraying fuel or repeatedly cranking until valve-train and belt condition are understood.

**Tests:** Relative or cylinder compression; cam/crank correlation; live-RPM observation; continuity/power/ground checks against the correct year/market diagram.

**Verify:** Compression and valve timing are adequate before condemning fuel or ignition control.

**Mistakes:** Treating a sensor code as proof the sensor itself failed, using an unverified pinout, or timing the wrong engine variant.

### 3. Separate ignition loss from fuel delivery and injector control

**Symptom:** Cranks normally but does not even briefly fire, or runs only on a combustible spray (use only a controlled, manufacturer-safe method).

**Safety:** Ignition produces high voltage; use an approved spark tester and keep fuel vapors away. Do not spray flammable liquid into an intake near an ignition source. Depressurize the rail before disconnecting fuel plumbing.

**Tools:** Adjustable spark tester, noid light or injector current probe, multimeter, fuel-pressure gauge rated for the system, scan tool.

**Steps:**
1. Test for spark at a coil output/plug lead using the correct NB ignition arrangement. Check spark strength and repeatability while cranking; a single visible spark is not enough.
2. If spark is absent, work backward through ignition power, coil/plug-lead condition, engine-speed input, grounds, and PCM control. Verify timing of the spark rather than only its presence.
3. Check injector command with a noid light/current probe and confirm injector power supply. No command with valid RPM shifts attention to PCM power/grounds, immobilizer where fitted, sensor inputs, or wiring.
4. If injector command exists, check whether plugs are dry, wet, or fuel-fouled. Wet plugs do not prove correct pressure or mixture; dry plugs do not prove a dead pump.
5. Avoid a parts-swapping loop. Change one controlled variable and retest.

**Tests:** Spark under cranking, injector pulse, injector supply, plug condition, and code/live-data correlation.

**Verify:** The fault is assigned to ignition, injector control, or neither before proceeding to fuel-pressure diagnosis.

**Mistakes:** Testing spark by holding a plug against random metal, using starting fluid as a substitute for pressure testing, or condemning the ECU before checking its power, grounds, and timing inputs.

### 4. Test fuel-pump control, pressure/volume, and mixture/emissions causes

**Symptom:** No fuel pressure, pressure that collapses during crank, lean start-and-stall, flooding, or an engine that runs but has a check-engine/emissions complaint.

**Safety:** No smoking/open flame. Capture fuel in approved containers and use eye protection. Do not leave a diagnostic-box jumper installed while driving. Verify terminal identity for the specific year before applying any jumper.

**Tools:** Fuel-pressure gauge and safe adapter, multimeter/test light, scan tool, vacuum gauge where useful, smoke tester for EVAP/intake leaks.

**Steps:**
1. Verify pump power and ground at the pump while it is commanded. On many Miata diagnostic boxes, an FP-to-ground test is used by owners to force the pump circuit for testing; the public reference explicitly warns that confusing battery-positive and ground can blow a fuse [5]. Treat this as a circuit-isolation test, not a factory universal procedure.
2. If the pump runs, measure pressure and observe retention after shutdown. Low pressure can result from restricted filtration, weak pump, poor pump wiring, regulator problems, or a leak; pressure alone does not prove correct volume.
3. If the pump does not run, test fuse, relay command, relay output, harness continuity, rear connector condition, and pump ground in that order. The public 2003 wiring reference shows the pump relay, PCM, fuse feeds, and rear fuel-pump circuit as separate parts of the system [3].
4. Once the engine runs, investigate vacuum/intake leaks, coolant-temperature plausibility, MAF/air-meter signal, oxygen-sensor behavior, purge/EVAP faults, EGR where equipped, and exhaust restriction. A check-engine lamp is a prompt to diagnose the emissions system, not to replace the oxygen sensor automatically [2].
5. For a suspected flooded engine, stop adding fuel, dry/replace fouled plugs as appropriate, verify oil is not fuel-diluted, and follow the year-specific clear-flood strategy rather than holding the throttle open blindly.

**Tests:** Pump voltage drop, pressure and decay, fuel volume, injector leak/fueling evidence, smoke test, scan data, and code correlation.

**Verify:** Fuel delivery is proven at the rail and the post-start mixture/emissions fault is separated from the original no-start.

**Mistakes:** Assuming the pump must prime on key-ON, replacing the pump because it is quiet, trusting a pressure number without checking volume/voltage drop, or jumping an unlabeled diagnostic connector.

## Wiring notes (simplified, not pinouts)

### Fuel-pump control is a chain, not one component

**Diagram:** `battery/fuse → main/engine relay feed → fuel-pump relay → rear harness/connector → pump → chassis ground`, with the PCM controlling the relay side.

**Explanation:** The public 2003 system diagram presents the pump relay, PCM, fuse feeds, and pump unit as distinct elements [3]. Therefore, “no pump sound” should lead to voltage-at-pump and voltage-drop tests, not immediately to a pump replacement. An FP diagnostic-box test, where applicable, can bypass part of normal control for isolation [5].

**Limits:** Connector location and terminal labeling vary by year/market. Use a verified diagram for the exact car and do not reproduce or rely on an unverified pinout.

### Ignition and injector power share system dependencies

**Diagram:** `ignition switch → fuse/relay feeds → coils/injectors and PCM power`, while `crank/cam signals → PCM → coil/injector control`.

**Explanation:** A crank/no-start can remove both spark and injector pulse when a shared power, ground, engine-speed signal, or PCM input is missing. Test for supply and control separately. The 2003 wiring reference shows engine-performance circuits for crankshaft/camshaft position sensing, MAF, coils, injectors, and PCM connections [3].

**Limits:** NB1/NB2, naturally aspirated/Mazdaspeed, LHD/RHD, and market emissions packages can change sensor/actuator hardware. Do not infer exact wire colors or connector cavities from another year.

### Immobilizer is market/equipment dependent

**Diagram:** `key/transponder (where fitted) → immobilizer coil/module → PCM authorization → normal engine-control operation`.

**Explanation:** The 2003 wiring reference includes an immobilizer circuit, while owner manuals state that equipment descriptions vary by model and option [1] [2]. A security-indicator anomaly can inhibit starting on equipped cars, but it should be checked alongside PCM power, grounds, and engine-speed input.

**Limits:** Do not assume every NB has the same immobilizer arrangement; early North American cars and other markets differ. Never jumper security wiring as a first-line test.

## Model-year and market differences

- North American 1999–2000 cars are generally NB1; 2001–2005 are NB2, with the VICS-to-VVT and ECU/intake/exhaust changes noted above [4].
- 2004–2005 Mazdaspeed cars use turbo-specific engine management and hardware; naturally aspirated test assumptions may be unsafe or misleading [4].
- Immobilizer, emissions equipment, diagnostic-box labeling, and OBD behavior can vary by market and equipment. Confirm the VIN, engine code, model year, and market before using a wiring diagram.
- The enthusiast no-start discussion is useful only as anecdotal support for checking pump power, relay/harness condition, and sensor intermittency; it is not a specification source [6].

## References

[1]: https://www.mazdausa.com/siteassets/pdf/owners-optimized/2001/mx5-miata/2001-mx-5-miata-owners-manual.pdf "2001 Mazda MX-5 Miata Owner's Manual"
[2]: https://www.mazdausa.com/siteassets/pdf/owners-optimized/2005/mx5-miata/2005-mx-5-miata-owners-manual.pdf "2005 Mazda MX-5 Miata Owner's Manual"
[3]: https://www.mellens.net/mazda/mazda_miata_extra_manual/2003_wiring.pdf "2003 Mazda MX-5 Miata System Wiring Diagrams"
[4]: https://www.onallcylinders.com/2025/02/13/1999-2005-mazda-miata-nb-buyers-guide-year-by-year-changes/ "1999-2005 Mazda MX-5 Miata NB Buyer’s Guide: Year-by-Year Changes"
[5]: https://www.miataforumz.com/how-40/diagnostic-port-pinouts-349/ "Miata Forumz Diagnostic Port Pinouts"
[6]: https://www.reddit.com/r/Miata/comments/ykes74/my_2000_nb_suddenly_wont_start_cranks_but_doesnt/ "r/Miata: 2000 NB crank/no-start discussion"
