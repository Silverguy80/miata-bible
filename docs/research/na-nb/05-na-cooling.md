# NA Miata cooling, heating, belts, hoses, and overheating diagnosis

## Scope and model caveats

This note covers first-generation NA MX-5/Miata cooling and heater diagnosis, with emphasis on safe sequencing rather than parts swapping. NA cars are commonly divided into 1.6 L cars (roughly 1990–1993) and 1.8 L cars (roughly 1994–1997), but production dates, engines, emissions equipment, A/C fitment, and fan control details vary by market. Confirm the VIN, engine, market, and any cooling reroute, aftermarket radiator, fan, or A/C modification before using a component location or test. Public electrical references here are location/circuit summaries, not a substitute for the correct year-specific wiring diagram.

A hot gauge or steam is a stop-and-cool event, not a reason to keep driving. Mazda owner guidance says to confirm fan operation, shut down after temperature falls, and, when cool, check coolant level and look for leaks at the radiator and hoses [1]. The public 1990–95 reference warns that the fan can start with the key off and that the radiator cap must not be removed hot [2].

## Procedure 1: Triage an active overheat safely

**Symptom:** Gauge higher than its normal position, steam/sweet coolant smell, coolant loss, or fan not heard during a hot idle.

**Safety:** Pull off safely, switch off the engine if temperature continues to rise or coolant is escaping, keep hands away from the fan, and never open the cap hot. Let the system cool fully. Do not use the heater as a license to continue driving; it is only a temporary heat-load reduction and diagnostic clue.

**Tools:** Gloves and eye protection; flashlight; absorbent cloth; coolant-safe catch pan; infrared thermometer if available.

**Steps:** (1) Record whether the fault occurred in traffic, with A/C on, at speed, on a hill, or immediately after service. (2) Once cool, inspect the radiator, cap/neck, upper and lower hoses, heater hoses, water-pump area, and belt path for wetness, dried deposits, split rubber, collapse, or rubbing. (3) Check the radiator and reservoir levels only when cold; do not infer a full radiator from the reservoir alone. (4) Look for a missing shroud/ducting or debris blocking the radiator. (5) If the engine was run low on coolant, treat air entry and possible head-gasket damage as unresolved until tested.

**Tests:** Compare the gauge with an independent temperature measurement at the thermostat housing/radiator inlet, recognizing that infrared readings depend on surface emissivity. Pressure-test the cold system and cap with appropriate equipment if a leak is not visible. A combustion-gas test or leak-down/compression test is warranted when coolant is repeatedly expelled, bubbles persist after proper bleeding, or overheating returns without an external leak.

**Verify:** After repair, refill and bleed using the correct coolant procedure for the installed layout, warm from cold while monitoring level and hose temperature, confirm stable gauge behavior, and recheck for leaks after a complete cool-down.

**Mistakes:** Opening a hot cap; trusting a normal-looking reservoir; continuing after the gauge rises; replacing a thermostat before proving coolant level, air, fan operation, and leaks.

## Procedure 2: Distinguish airflow/fan faults from circulation faults

**Symptom:** Overheats mainly while idling or in traffic, or fan does not run when temperature rises; alternatively, overheats at road speed where fan airflow should be less decisive.

**Safety:** Disconnect the fan connector before working near the blades; the fan may start unexpectedly, including after key-off [2]. Keep jumper leads fused and away from belts.

**Tools:** Multimeter or test lamp; fused 12 V jumper; wiring diagram for the exact year/market; infrared thermometer; basic hand tools.

**Steps:** (1) With the engine cold and key off, inspect fan blades, shroud, connector, grounds, and wiring for damage. (2) Verify the relevant fuses before condemning a motor. The public 1990–95 listing identifies a 30 A main cooling-fan fuse, a 15 A interior engine-cooling-fan fuse, and a separate A/C additional-fan fuse, but fuse assignments can vary by year/market [3]. (3) Test the fan motor directly with a fused battery feed and confirm it spins freely without abnormal current draw. (4) If the motor works, trace the control side through the thermoswitch, relay, power, and ground. (5) If the fan runs but the car overheats at speed, inspect radiator blockage, missing duct seals/undertray, collapsed hose, incorrect thermostat, pump circulation, and combustion-gas symptoms before adding a manual fan switch.

**Tests:** A direct motor test separates motor failure from control failure. Voltage-drop testing across the fan ground and supply while loaded is more useful than continuity alone. Observe whether the fan-control circuit is being commanded as temperature rises; do not substitute a permanent ground as a repair.

**Verify:** Fan starts at the expected operating condition for the exact configuration, runs quietly, and cycles off after temperature falls. Confirm A/C operation does not create a second-fan or relay fault where fitted.

**Mistakes:** Bridging random terminals; using an unfused jumper; assuming a fan that spins freely has a healthy electrical load; fitting a lower-temperature switch to mask poor airflow or low coolant.

## Procedure 3: Check belts, hoses, thermostat, cap, and water-pump circulation in a logical order

**Symptom:** Overheating, weak/no cabin heat, squeal, coolant smell, unexplained level loss, or an upper hose that warms too early or stays cold after the engine is hot.

**Safety:** Inspect belts with the engine off and cold. Keep clear of moving pulleys and the fan during any running test. Coolant can burn and is toxic to people and animals.

**Tools:** Flashlight; belt-tension method or gauge appropriate to the belt; cooling-system pressure tester; cap tester; infrared thermometer; drain pan; correct replacement clamps/hoses; service information for the exact engine.

**Steps:** (1) Inspect accessory and timing-belt service history; look for glazing, cracking, oil contamination, fraying, slack, pulley misalignment, and bearing noise. A belt failure can stop an accessory and, on some engine designs, coolant circulation; establish the NA engine-specific drive arrangement rather than assuming from a generic belt diagram [4]. (2) Cold-squeeze radiator and heater hoses. Cracks, abrasion, dried deposits, hard/crunchy rubber, excessive softness, swelling, or oil soak are replacement findings, consistent with AAA inspection guidance [4]. (3) Pressure-test the system cold and inspect hose ends, radiator tanks, cap/neck, heater circuit, and pump area. (4) From cold, monitor hose temperatures: an upper hose warming immediately suggests thermostat leakage/opening too early; an upper hose remaining cold while the engine is genuinely hot suggests a closed thermostat, air pocket, or absent circulation. This is a screening test, not a substitute for removing and testing the thermostat. (5) If thermostat and fill/bleed are correct, assess pump circulation, impeller condition, belt timing, radiator restriction, and internal blockage.

**Tests:** Test the thermostat in heated water with a thermometer against its specified opening behavior for the installed engine; do not rely on a generic temperature. Check cap pressure with a tester. Compare heater-hose temperatures with the heater valve open: a large difference suggests restricted heater-core flow or trapped air, while similar hot hoses with cold cabin air points toward HVAC door/valve/blower issues. Gates identifies the radiator, heater core, fan, thermal switch, hoses, thermostat, pump, and caps as interdependent parts of heat absorption, transport, and rejection [5].

**Verify:** No pressure loss or external seepage; belt tracks correctly; thermostat behavior is plausible; heater produces stable heat; radiator has an even temperature pattern after warm-up; gauge remains stable through idle and road test.

**Mistakes:** Replacing a thermostat without testing for trapped air; tightening clamps onto damaged hose necks; over-tensioning belts; treating an old brown/yellow plastic radiator tank as merely cosmetic. The last point is a clearly labeled enthusiast warning, not an official Mazda interval: 949 Racing describes aged discolored NA/NB plastic tanks as brittle and high-risk [6].

## Procedure 4: Diagnose “overheats with no heat” and rule out internal engine damage

**Symptom:** Engine overheats while cabin heater stays cold, coolant disappears, reservoir overflows, hoses become abnormally hard soon after cold start, or the system repeatedly traps air.

**Safety:** Do not run an engine with an empty radiator. Avoid opening any pressurized system hot. Stop if coolant sprays, the belt is damaged, or oil/coolant cross-contamination is suspected.

**Tools:** Cooling-system pressure tester; combustion-gas/block tester; compression or leak-down tester; spark-plug tools; cooling-system fill/bleed equipment; service data for the exact engine.

**Steps:** (1) Confirm coolant level cold and verify the heater-control valve/air-mix controls before concluding there is no heater flow. (2) Compare heater-hose temperatures and inspect for kinked hoses or restricted core. (3) Pressure-test cold and inspect for external loss. (4) If pressure falls without an external leak, or if the system pressurizes unusually quickly from cold, test for combustion gases and perform compression/leak-down testing. (5) Inspect oil for coolant contamination and coolant for oil contamination, but treat visual checks as screening only. (6) If the engine has overheated severely, do not assume a new radiator or thermostat cured it; repeat the pressure and combustion-gas tests after the first complete heat cycle.

**Tests:** A cold pressure test finds external leaks; a combustion-gas test addresses an internal leak. Leak-down bubbles in the cooling system or consistently abnormal compression support head-gasket/head/crack investigation, but results must be interpreted with engine-specific test conditions. A cold heater with a hot engine can reflect low coolant/air, restricted core, closed heater valve, or HVAC control trouble; it does not by itself prove a head gasket.

**Verify:** Stable cold level after several heat/cool cycles, no unexplained reservoir rise, no external seepage, normal heater output, and repeatable temperature behavior under both idle and road-load conditions.

**Mistakes:** Using cabin heat as the primary cooling strategy; declaring “head gasket” from bubbles alone; ignoring a leaking heater hose or radiator cap; bleeding repeatedly without finding why air entered.

## Simplified electrical notes

- **NA fan control is a switched-power circuit, not a single sensor-to-motor wire.** In the public 1991 component locator, the cooling-fan relay is in the engine-compartment fuse/relay block and the cooling-fan thermoswitch is on the thermostat housing [7]. Conceptually: battery/fused supply → relay contacts → fan motor → ground; a temperature switch/control path energizes the relay. Exact polarity, connector cavities, and A/C interaction vary; use the year-specific diagram and test loaded circuits rather than copying a pinout.

- **There are separate protection paths worth checking.** The public 1990–95 reference lists a 30 A cooling-fan fuse in the main block, a 15 A engine-cooling-fan fuse in the interior panel, and a 20 A A/C additional-fan fuse [3]. These labels are useful for triage, not permission to install a larger fuse. A blown fuse is evidence of overload, short, seized motor, or wiring damage; find the cause.

- **Fan operation is a safety hazard during diagnosis.** The public reference says the thermostatic fan may start or continue for up to about 15 minutes after shutdown [2]. Treat the fan as live whenever the system is connected; disconnect the motor before hands-on work and restore the connector before functional testing.

## Differences and uncertainty

- NA 1.6 and 1.8 engines, A/C-equipped and non-A/C cars, and different markets can use different fuse labels, relay logic, connector routing, and component locations. The cited locator is explicitly a 1991 reference; do not transfer its locations or colors blindly to 1994–1997 cars.
- 949 Racing’s airflow, OEM coolant-routing, and plastic-tank observations are enthusiast/aftermarket technical commentary. They are useful hypotheses for a modified or track-driven car, but they do not establish a Mazda service interval or prove that every stock NA will overheat.
- Temperature-gauge position is not a precision measurement. Confirm with an independent measurement and compare behavior over time. Infrared readings are affected by surface finish and location.
- Public owner information available through Mazda’s current manual site is for newer MX-5 generations, so the safe “cool, then check level/leaks/fan” principle is transferable, but NA-specific procedures and specifications must come from the correct NA manual or equivalent service data.

## References

[1]: https://owners-manual.mazda.com/gen/en/mx-5/mx-5_8gu7ee18/contents/08050100.html "Mazda MX-5 owner information, overheating"
[2]: https://www.mellens.net/mazda/Mazda-Miata-1991-1993/fuses.pdf "1990–95 Mazda Miata fuses and safety cautions"
[3]: https://www.mellens.net/mazda/Mazda-Miata-1991-1993/fuses.pdf "1990–95 Mazda Miata fuse assignments"
[4]: https://exchange.aaa.com/wp-content/uploads/2012/09/AAA-Car-Care-Belts-Hoses.pdf "AAA Car Care: belts and hoses"
[5]: https://www.gatestechzone.com/content/dam/documents-library/operating-manuals/cooling-system-troubleshooting-guide-gb-en.pdf "Gates Cooling System Troubleshooting Guide"
[6]: https://949racing.com/supermiata/tech-info/na-nb-cooling-system-performance/ "949 Racing: 90–05 NA/NB Miata cooling system performance"
[7]: https://www.mellens.net/mazda/Mazda-Miata-1991-1993/electrical_component_locations.pdf "1991 Mazda Miata electrical component locations"
