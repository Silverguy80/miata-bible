# NA engine mechanical, fuel, ignition, emissions, and no-start diagnosis

This note covers first-generation MX-5/Miata (NA, roughly 1989–1997) diagnosis without reproducing factory manual language, diagrams, or proprietary connector pinouts. The safest order is to prove the failure mode before replacing parts: battery/cranking, ECU power and codes, mechanical timing, spark, fuel delivery/injection, then emissions-control faults. A “new coil,” “pump noise,” or wet plug is not proof that the complete subsystem works.

## Model-year and market caveats

- NA cars use more than one engine/control configuration. Early cars are commonly 1.6 L B6; later cars commonly 1.8 L BP. Harness routing, sensors, relay logic, emissions equipment, and test values vary by year, market, transmission, and California/non-California specification. Use the VIN/year-specific service information for any numerical limit or connector identification.
- The public Miata fault-code reference describes two-digit self-diagnosis for 1990–1993 and a different 1994–1995 code set; it also says 1996-on cars use OBD and need a scanner. Treat that as a strong model-year guide, not a substitute for confirming the car’s market and ECU. [1]
- The public 1991 wiring reference is useful for circuit relationships, but it is explicitly a 1991 diagram. Do not transfer its wire colors, terminal numbers, or relay details to every NA. [2]
- Mazda’s owner information is newer than NA, but its general safety point remains relevant: ignition, fuel, and emissions systems are interdependent and should not be tampered with; inspect fuel lines/hoses, battery, air filter, evaporative equipment, and exhaust as applicable to the actual car. [3]

## Procedure 1 — Establish the symptom and make the car safe

**Symptom:** “Won’t start” is ambiguous: no crank, slow crank, crank/no-fire, starts then stalls, or runs badly. Separate it before testing.

**Safety:** Work outdoors or with strong ventilation. Keep sparks, cigarettes, and hot lamps away from fuel vapour. Disable ignition/fuel as appropriate before extended cranking. Support the hood and keep hands, clothing, and test leads clear of belts and fans.

**Tools:** Charged battery or approved jump pack, multimeter, insulated hand tools, eye protection, scan/code-reading equipment appropriate to year.

**Steps:** Confirm fuel level and battery condition; observe whether the starter turns the engine at a normal, even speed. Note whether the check-engine lamp illuminates with key ON. Inspect for loose grounds, disconnected intake hoses, damaged wiring, blown fuses, rodent damage, and obvious timing-belt debris. Do not use repeated starting-fluid tests as a repair strategy.

**Tests:** If there is no crank, test battery voltage under load, starter control, and starter current path before investigating fuel or spark. If it cranks, stop treating the starter circuit as the primary fault and proceed to the engine-control checks.

**Verify:** The symptom is recorded as one precise state, with key-ON lamp behavior and any recent work or event documented.

**Mistakes:** Replacing plugs, wires, coil, pump, or ECU because the engine “sounds like” a fuel or ignition fault; continuing to crank with a flooded cylinder or a weak battery.

## Procedure 2 — Check ECU power, diagnostic status, and mechanical timing

**Symptom:** Cranks but does not fire, or the check-engine lamp is absent when it should be on.

**Safety:** Disconnect battery power before disturbing fuses or major connectors; reconnect only when the work area is safe. Never bridge random diagnostic terminals. A paper clip method is only for the specific diagnostic procedure and terminal labels verified for that car.

**Tools:** Year-appropriate code reader or a verified NA self-diagnosis procedure, multimeter, timing-light or inspection tools, helper.

**Steps:** Record codes before clearing them. For early NA self-diagnosis, the published procedure uses the under-hood diagnostic connector and the car’s GND/TEN positions; later configurations require the applicable procedure or scanner. [1] If the check-engine lamp does not illuminate at key ON, check the relevant fuses, main relay/ECU supply, grounds, lamp circuit, and ignition-switch feed rather than assuming the ECU has failed. Remove the oil filler cap and observe cam movement while cranking; absent cam motion strongly indicates a broken timing belt or valvetrain drive fault. If the cam turns, verify crank/cam timing marks before pursuing sensors.

**Tests:** Confirm battery voltage remains adequate during cranking. Confirm ECU power and grounds with a voltage-drop test under load. Retrieve and document codes; a no-code result does not prove the system is healthy. A moving cam does not prove correct valve timing.

**Verify:** There is a documented power/ground result, code result, and mechanical-timing result before parts are replaced.

**Mistakes:** Treating an old stored code as the current cause; using a 1991 wiring diagram or 1990–1993 blink-code procedure on a different year/market without verification; assuming a spinning cam means the belt has not jumped.

## Procedure 3 — Prove ignition output and engine-position signaling

**Symptom:** Crank/no-fire with dry plugs, no visible spark, intermittent spark, or a sudden stall.

**Safety:** Use an approved adjustable spark tester or an insulated test method; do not hold a plug wire by hand. Keep the tester away from fuel vapour. Do not repeatedly crank with disconnected high-tension leads.

**Tools:** Spark tester, multimeter, service data for the exact coil/igniter/CAS configuration, timing light if the engine can run.

**Steps:** Test for spark at more than one cylinder, not just by fitting a new plug. If all cylinders lack spark, work upstream: ignition-switch/relay/fuse power, coil feed, igniter control, engine-position/CAS signal, ECU grounds, and the ECU’s ignition command. If one cylinder differs, inspect that lead, plug, coil tower, and mechanical condition. If spark is present but badly timed, return to belt alignment and position-signal checks. Use resistance checks only as a screen; a component can pass an ohms test and fail under heat or load.

**Tests:** Compare coil supply voltage during crank with battery voltage; perform voltage-drop checks on grounds; observe spark strength and consistency during repeated cranking. Do not infer spark from a new coil or wires. The 1991 public wiring reference shows the ECU, igniter, coil, crank-angle signal, injectors, airflow meter, and circuit-opening relay as connected parts of one control system, which is why a single “bad ignition part” assumption is unsafe. [2]

**Verify:** A repeatable spark result is recorded for each tested cylinder, and timing is verified if spark exists.

**Mistakes:** Testing only one plug; confusing an ignition-power fault with an ECU-command fault; declaring a CAS or igniter bad before checking power, ground, connectors, and timing.

## Procedure 4 — Prove fuel-pump power, pressure, and injector operation

**Symptom:** Cranks with strong spark but does not run; plugs remain dry; starts briefly only with enrichment.

**Safety:** Relieve fuel pressure using the exact vehicle procedure. Use a rated fuel-pressure gauge and catch fuel safely. Do not clamp old or brittle hoses aggressively. Wipe spills and wait for vapour to clear before sparking or cranking.

**Tools:** Fuel-pressure gauge and adapters, multimeter, noid light or injector test equipment, mechanic’s stethoscope, fused jumper only where the verified diagnostic procedure calls for it.

**Steps:** Listen for the pump only as an initial clue. Prove power at the pump with the correct diagnostic test and verify the circuit-opening relay, fuse, grounds, and harness. The enthusiast no-start guide describes an FP-to-ground diagnostic test for applicable NA layouts; verify terminal labels and year before using it. [4] Measure pressure while cranking/running against the exact engine’s service specification. Check injector electrical feed and listen for consistent injector operation; a wet plug proves fuel reached that cylinder but not that pressure, pulse width, or spray quality is correct.

**Tests:** If pump power is present but pressure is low, distinguish pump/filter/line restriction from regulator or return-path faults using the service procedure. If pressure is correct but injectors do not pulse, check injector power, ECU ground, engine-position signal, and ECU control. If one cylinder differs, compare injector resistance and pulse with the others rather than replacing the whole rail.

**Verify:** Pressure, hold/decay behavior, injector power, and injector pulse are each recorded; the engine responds consistently to a controlled fuel test only if it is safe and permitted by the service information.

**Mistakes:** Equating pump noise with correct pressure; bypassing a relay and leaving the pump powered; using starting fluid near an intake backfire risk; replacing the pump before testing voltage drop and pressure.

## Procedure 5 — Diagnose emissions and mixture faults after basic operation is proven

**Symptom:** Starts but stalls, runs rich/lean, has unstable idle, fails emissions, or logs sensor/evaporative/EGR/oxygen-related faults.

**Safety:** Exhaust gas is toxic; run only outdoors or with extraction. Do not defeat emissions equipment as a “test.” Avoid probing sealed connectors with oversized probes.

**Tools:** Year/market-appropriate scanner or blink-code method, multimeter, vacuum gauge or smoke tester, fuel-pressure gauge, exhaust-gas analyzer if available, service information.

**Steps:** First repair vacuum leaks, intake restrictions, poor grounds, and ignition misfire. Then use codes as direction, not verdict: the published NA list includes airflow, coolant-temperature, intake-temperature, throttle-position, oxygen, purge, EGR, and idle-control faults depending on year. [1] Compare sensor plausibility cold and warm; check wiring and reference/ground circuits before condemning a sensor. Inspect purge and EGR hoses/solenoids for routing, leaks, and stuck valves. Check fuel pressure and ignition timing under the condition that creates the complaint.

**Tests:** Clear codes only after recording them, reproduce the symptom, and rescan. Verify closed-loop behavior only after the engine reaches operating temperature and has a stable ignition/fuel base. Confirm exhaust leaks near the oxygen sensor before interpreting oxygen readings.

**Verify:** The repair changes the measured condition (mixture, vacuum, pressure, sensor plausibility, or code state) and the vehicle completes a cold/warm road test without the original symptom.

**Mistakes:** Replacing an oxygen sensor for every emissions code; adjusting the airflow meter or ignition timing to hide a vacuum/fuel fault; applying modern OBD-II assumptions to an earlier NA.

## Simplified wiring notes

### 1. ECU power and ground are prerequisites, not a diagnosis

**Diagram:** `Battery → fuses/main relay/ignition switch → ECU + engine-control loads; engine/body grounds → battery negative`

**Explanation:** The ECU, igniter, injectors, sensors, and relays need both stable supply and low-resistance grounds. A relay click or a static 12 V reading does not prove usable voltage during cranking; measure voltage drop under load. The 1991 public diagram shows the ECU in the same control network as the main relay, injector feed, ignition switch, and diagnostic connector. [2]

**Limits:** This is a functional block diagram, not a pinout. Wire colours, terminal numbers, fuses, and relay layouts vary by year and market.

### 2. The fuel-pump path is conditional

**Diagram:** `Key/ECU logic + safety inputs → circuit-opening relay → pump → fuel rail → regulator/return`

**Explanation:** Pump operation is controlled through a relay and safety/airflow logic on applicable NA configurations; the public NA guide uses a verified diagnostic jumper to separate relay/control faults from pump and wiring faults. [4] Use pressure measurement to confirm delivery rather than listening for a brief prime.

**Limits:** Do not assume every NA has identical relay logic or diagnostic-terminal behavior. Never leave a bypass jumper installed for normal driving.

### 3. Ignition is a chain from position signal to spark

**Diagram:** `Crank/CAS signal → ECU timing decision → igniter/coil → plug wires → plugs → cylinder`

**Explanation:** No spark can originate from missing position information, ECU power/ground, igniter control, coil supply, high-tension hardware, or mechanical timing. The public 1991 diagram identifies these functional links without making them interchangeable across all NA years. [2]

**Limits:** The diagram intentionally omits proprietary connector pinouts and does not provide resistance/voltage limits; use exact service data.

### 4. Emissions sensors influence mixture but do not replace fundamentals

**Diagram:** `Airflow/throttle/temperature inputs → ECU → injector/ignition commands; oxygen feedback + purge/EGR status → corrections/diagnostics`

**Explanation:** NA self-diagnostics can report sensor and actuator circuits, but a code can be caused by wiring, vacuum leaks, exhaust leaks, or a real mechanical/mixture problem. Mazda’s owner guidance reinforces treating ignition, fuel, and emissions as linked systems. [1] [3]

**Limits:** California and export cars may have additional emissions hardware. Confirm equipment by VIN and under-hood labels before testing or deleting anything.

## References

[1]: https://www.miata.net/garage/faultcodes.html "Miata Engine Computer Self Diagnostics"
[2]: https://www.mellens.net/mazda/Mazda-Miata-1991-1993/1991_wiring.pdf "1991 Mazda MX-5 Miata Wiring Diagrams"
[3]: https://owners-manual.mazda.com/gen/en/mx-5/mx-5_8gu7ee18e/contents/07020100.html "Mazda MX-5 Scheduled Maintenance and Emission Control Guidance"
[4]: https://forum.miata.net/vb/showthread.php?t=279746 "Miata No-Start Troubleshooting Guide"
[5]: https://forum.miata.net/vb/showthread.php?p=9468381 "Miata Forum No-Start Diagnostic Discussion"
[6]: https://archive.org/details/1990-mazda-mx-5-miata-workshop-manual "1990 Mazda MX-5 Miata Workshop Manual scan listing"
