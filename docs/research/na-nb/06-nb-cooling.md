# NB Miata cooling, heating, belts, hoses, and overheating diagnosis

## Scope and evidence

This note covers the 1998–2005 MX-5/Miata NB family, with emphasis on safe diagnosis rather than replacing parts by guesswork. Mazda owner manuals are the safety baseline. A 2002 manual gives the same emergency sequence as the later 2005 manual; the 2005 manual adds explicit warnings about an unexpectedly running fan and hose condition. The 949 Racing article is a useful enthusiast/technical interpretation of NA/NB airflow and coolant-routing behavior, but it is not factory documentation and includes track-use opinions. The wiring observations below are simplified circuit logic, not a reproduced factory diagram or pinout.

## Generation and market caveats

- “NB” generally means 1998–2005, but the fan hardware, relay layout, connector details, engine (1.6 or 1.8), emissions package, transmission, and market can vary. Confirm the vehicle by VIN, engine, and the under-hood fuse/relay labels before probing.
- NB1 (roughly 1998–2000) and NB2 (roughly 2001–2005) should not be assumed to share relay locations, fan-control details, or wire colors. The 1999–2000 enthusiast modification reference is specifically not a universal NB procedure.
- The dashboard gauge is an indication of coolant temperature, not proof that coolant is circulating correctly. A normal gauge does not rule out a localized air pocket, poor flow, or a sensor/gauge fault.
- The 949 Racing source is especially relevant to modified or track-driven cars. Its airflow conclusions should not be treated as a diagnosis for every stock street car.

## Diagnostic procedures

### 1. Immediate response to an overheating indication

**Symptom:** Gauge moves toward H, loss of power, or abnormal pinging/knocking.

**Safety:** Stop driving hard. Steam and pressurized coolant can burn; do not remove the radiator/cooling-system cap while hot. The fan may start unexpectedly with the ignition on, so keep hands, clothing, and tools clear.

**Tools:** Gloves and eye protection; flashlight; phone or roadside assistance. No tool is required for the first stop.

**Steps:**
1. Reduce load, pull safely off the road, select Park or Neutral, and apply the parking brake.
2. Turn the A/C off. Look for steam or active coolant escaping without putting your face or hands near the front of the car.
3. If steam is present, stop the engine and wait until steam dissipates before opening the hood. If there is no steam or visible leak, allow the engine to idle only while monitoring it and stop the engine if temperature does not fall.
4. Once cool, inspect the belt, hose connections, radiator area, and reservoir. Do not add coolant to a hot engine. If a belt is broken, coolant is leaking, or the fan is not operating, do not continue driving; arrange recovery.

**Tests:** Compare the cold reservoir level with the marked range; inspect for wet trails, dried coolant residue, split hose ends, and belt damage. A cooling fan that does not operate during an overheating event is a stop condition, not an invitation to bypass the control circuit.

**Verify:** After the root cause is repaired, refill with the correct coolant mixture, bleed air using the vehicle-specific service method, and confirm stable temperature during idle and a controlled road test.

**Mistakes:** Opening the cap hot, standing over the radiator, continuing because the gauge later falls, or treating a temporary cool-down as a repair.

### 2. Separate coolant loss, circulation, and airflow faults

**Symptom:** Repeated overheating, low reservoir, gurgling, a cold heater, or temperature that rises at idle versus at speed.

**Safety:** Work cold. Support the car securely if inspecting underneath. Keep the belt and fan clear during any running test.

**Tools:** Flashlight; cooling-system pressure tester with the correct adapter if available; thermometer or scan tool; drain pan; inspection mirror.

**Steps:**
1. With the engine cold, establish the baseline: radiator/cooling-system level if accessible, reservoir level, hose condition, belt condition, and evidence of external leaks.
2. Pressure-test only on a cold system and look for leaks at the radiator, hose joints, thermostat housing, heater hoses, water-pump area, and reservoir/cap interfaces.
3. If level is correct and no external leak appears, check for circulation and trapped air. A heater that stays cold while the engine overheats suggests low coolant, air, or inadequate flow; it is not proof of a bad thermostat by itself.
4. Compare symptom conditions. Overheating mainly at idle points toward fan operation, airflow, or an obstructed radiator; overheating mainly under sustained load or speed points toward heat rejection, restriction, coolant flow, combustion-gas intrusion, or vehicle modifications.
5. If coolant disappears without an external leak, stop escalating parts replacement and test for combustion-gas intrusion or have a qualified shop perform that test.

**Tests:** Pressure loss with no external wetness, repeated air return, bubbling after proper filling, oil/coolant contamination, or exhaust-gas evidence materially changes the diagnosis. Do not infer head-gasket failure from a single bubble or a single gauge event.

**Verify:** No unexplained pressure loss; heater produces stable heat; fan and radiator airflow are adequate; temperature remains stable after warm-up, idle, and a measured road test.

**Mistakes:** Replacing the thermostat before confirming coolant level and leaks; using only the reservoir as proof the radiator is full; ignoring a damaged undertray or blocked radiator fins; adding a thicker radiator before fixing airflow or leaks.

### 3. Belt, hose, thermostat, and radiator inspection

**Symptom:** Overheating after belt noise, visible hose deterioration, slow warm-up, rapid temperature rise, or unexplained coolant loss.

**Safety:** Engine off and cold for contact inspections. Keep fingers away from the belt path. Use only the specified coolant chemistry and do not mix incompatible products.

**Tools:** Flashlight; belt-tension/deflection reference for the exact engine; straightedge; cooling-system pressure tester; infrared thermometer; replacement clamps only after diagnosis.

**Steps:**
1. Inspect the alternator/water-pump drive belt for breakage, looseness, glazing, cracking, contamination, and misalignment. Mazda explicitly warns that a loose or broken belt can stop water-pump drive and lead to overheating.
2. Inspect every accessible cooling and heater hose for swelling, soft spots, hardening, cracks, chafing, and leaking connections. Replace deteriorated hoses rather than tightening a clamp onto damaged rubber.
3. Check the radiator core and fins for blockage, bent fins, external contamination, and evidence that air can bypass the core. Check that shrouds, seals, and the undertray are present where applicable.
4. Test the thermostat and radiator cap against exact-vehicle specifications if symptoms support them. A thermostat swap without confirming the symptom pattern can hide a leak, air pocket, fan fault, or restriction.
5. Refill and bleed with a compatible ethylene-glycol coolant mixture and demineralized/soft water as specified by Mazda’s owner information; do not exceed the owner-manual mixture limits.

**Tests:** Belt condition and drive must be confirmed before blaming the pump. Pressure-test for hose/radiator leaks. Use temperature comparison across the radiator only as a clue; an infrared reading is not a substitute for the correct service test.

**Verify:** Cold level is stable over repeated heat cycles, hoses remain dry, belt tracks correctly, heater output is stable, and operating temperature is repeatable.

**Mistakes:** Running with a loose belt, using plain water or an unsuitable coolant, over-tightening hose clamps, or assuming a new radiator fixes poor airflow.

### 4. Cooling-fan electrical diagnosis without guessing

**Symptom:** Overheats in traffic or at idle; fan never runs; fan runs only with A/C; intermittent operation; blown fuse or melted connector.

**Safety:** The fan can start with ignition on and the engine stopped. Use fused test leads, back-probe carefully, and never short unknown terminals. Disconnect the battery only when the test requires it, because some checks need ignition power.

**Tools:** Wiring diagram for the exact year/market; digital multimeter; fused jumper leads; test light; current clamp if available; serviceable fuse of the specified rating.

**Steps:**
1. Confirm the symptom with the engine cold-to-warm while monitoring temperature; do not intentionally overheat the engine.
2. Check the fan blade for obstruction and the motor connector for corrosion, heat damage, loose terminals, or broken ground. A brief direct motor test uses a fused supply and ground, with hands clear.
3. Check the fan fuse for continuity and verify power at the supply side. A visually good fuse is not enough if the socket or terminal is heat-damaged.
4. Check relay feed and ignition/control supply, then check continuity from the relay output toward the fan. A voltage-drop test under load is better than an open-circuit voltage check alone.
5. Check the control side: the ECU/temperature-switch command path and the diagnostic-box fan test point vary by year and market. Use the correct diagram; do not transplant NB1 wire colors or relay positions into an NB2 car.
6. Test the A/C request path separately. A/C fan operation can prove part of the fan-power path but does not prove that the temperature-triggered control path works.

**Tests:** The enthusiast wiring reference describes a useful logical sequence: supply at fuse, fuse continuity, relay feed, relay-switched output continuity, motor ground, and control-path continuity. Treat its wire-color examples as model-specific clues only. If a motor runs directly but not through the car, move upstream to fuse, relay, connector, ground, and command—not to another motor.

**Verify:** Both the normal temperature-triggered behavior and the A/C-related behavior match the exact vehicle’s wiring information, with no overheated terminals and no repeat fuse failure.

**Mistakes:** Installing a larger fuse, jumping unknown relay terminals, permanently paralleling fans as a “fix,” or assuming the A/C fan logic is identical to the engine-cooling-fan logic.

### 5. Modified or track-driven NB: diagnose airflow before adding parts

**Symptom:** Stock-like street driving is acceptable but temperature climbs on track, in hot weather, with A/C, or after intake/intercooler/undertray changes.

**Safety:** Validate the street cooling system first. Do not use a manual fan switch as a substitute for automatic protection. Secure all test wiring away from hot and moving parts.

**Tools:** Temperature logger or scan tool; inspection light; anemometer only if available; checklist of ducting, undertray, radiator, fan shroud, and intercooler changes.

**Steps:**
1. Confirm coolant level, pressure integrity, belt, thermostat, fan operation, radiator condition, and correct bleeding before evaluating modifications.
2. Inspect whether air is forced through the radiator rather than around it. Missing seals, a damaged undertray, and intercooler openings can pressurize the engine bay and reduce radiator pressure differential.
3. Check that the radiator is not over-thick for the available airflow. Improving ducting and extraction can be more effective than simply adding core thickness.
4. Compare temperature versus speed, load, A/C state, and ambient temperature. Record conditions instead of relying on memory.
5. Restore a known-good configuration before changing one item at a time.

**Tests:** The 949 Racing technical article attributes common NA/NB track problems to airflow leakage and the OEM coolant path, while noting that conclusions are based on enthusiast testing and consensus. Use it to form hypotheses, then verify with repeatable temperature data.

**Verify:** The car remains stable in the intended duty cycle with automatic fan control intact and no coolant loss.

**Mistakes:** Adding larger intake openings that bypass the radiator, removing the undertray, stacking modifications, or accepting a fan-parallel modification that overloads a relay.

## Simplified wiring notes

### Fan power and control are separate paths

**Diagram:** `battery/fusible supply → fan fuse → relay contacts → fan motor → ground`; `temperature/ECU or A/C request → relay coil/control → relay contacts`

**Explanation:** A fan can be electrically healthy yet not run because its fuse feed, relay contacts, connector, ground, or control command is open. A direct motor test checks only the motor and part of its ground/supply path. A/C operation may exercise a different request or relay path than temperature-triggered cooling.

**Limits:** This is a conceptual circuit, not a year-specific pinout. Relay locations, fan count, control strategy, and colors differ across NB1/NB2 and markets.

### Use voltage drop under load, not continuity alone

**Diagram:** `loaded supply → meter across each connection → unexpectedly high drop identifies the restriction`

**Explanation:** A corroded fuse socket, relay contact, crimp, or ground can show continuity and near-battery voltage with no load, then fail when the fan draws current. Measure across the fuse, relay path, connector, and ground while the fan is commanded on.

**Limits:** Exact acceptable voltage-drop limits depend on the circuit and test setup. Follow the exact service information and use a fused test lead.

### Diagnostic-box or relay jump tests are conditional

**Diagram:** `approved test point → control/relay command → fan circuit`

**Explanation:** Some enthusiast references describe grounding a designated diagnostic-box point to command the fan. This can isolate the control side from the motor/fuse/relay side, but only when the exact year/market diagram confirms the terminal. If the fan still does not run, continue downstream testing rather than repeatedly swapping relays.

**Limits:** Do not copy a terminal name or wire color from an NA, NB1, NB2, or different-market diagram without verification. Never jumper unknown terminals or bypass the specified fuse.

## References

[1]: https://www.mazdausa.com/siteassets/pdf/owners-optimized/2002/mx5-miata/2002-mx-5-miata-owners-manual.pdf "2002 Mazda MX-5 Miata Owner's Manual"
[2]: https://www.mazdausa.com/siteassets/pdf/owners-optimized/2005/mx5-miata/2005-mx-5-miata-owners-manual.pdf "2005 Mazda MX-5 Miata Owner's Manual"
[3]: https://949racing.com/supermiata/tech-info/na-nb-cooling-system-performance/ "90-05 NA/NB Miata Cooling System Performance, 949 Racing"
[4]: https://www.miata.net/garage/parallel_fan.html "Parallel Fan Operation - '99-2000, Miata.net Garage"
[5]: https://forum.miata.net/vb/showthread.php?t=607253 "General Wiring Question - Cooling Fan, MX-5 Miata Forum"
