# NB electrical: starting, charging, grounds, lighting, and fuse strategy

The NB (roughly 1998–2005) is best diagnosed from the symptom outward: first separate **no crank**, **slow crank**, and **normal crank/no fire**; then prove battery state, cable integrity, grounds, fuse feeds, and control signals before condemning a starter, alternator, relay, or ECU. The owner manual confirms 12-volt jump-start limits and warns against working around SRS wiring; the public Mazda service reference emphasizes voltage testing, continuity checks only on de-energized circuits, and replacing a fuse with the specified rating rather than increasing it [1] [2].

## Procedures

### 1. Establish battery, cable, and ground integrity before deeper testing

**Symptom:** Multiple electrical systems are weak, intermittent, dim, or reset; starter clicks or cranks slowly.

**Safety:** Wear eye protection. Keep sparks and flames away from the battery. Do not probe SRS/airbag connectors or add test power to them. Disable ignition and secure the car in neutral/park with the parking brake set.

**Tools:** Digital multimeter; battery charger or known-good 12 V source; test light; small wire brush; insulated hand tools; optional carbon-pile/electronic load tester.

**Steps:**
1. Inspect battery case, terminals, hold-down, positive cable, negative cable, engine/chassis bonding strap, and the high-current connection at the under-hood fuse box. Look for looseness, white/green corrosion, heat discoloration, or aftermarket add-ons.
2. With the car rested and loads off, measure directly across the battery posts, not on cable clamps. A low reading must be charged and retested; open-circuit voltage alone does not prove cranking capacity.
3. Clean and retighten only after disconnecting the negative terminal. Recheck the battery-to-body and engine-to-body return paths.
4. During a crank attempt, measure voltage at the battery posts and separately across each cable path. A large positive-side or ground-side drop points to a cable/connection fault rather than automatically to a bad starter.
5. If symptoms change when headlights, blower, brake lamps, or indicators are switched on, measure at the battery and at the affected load while reproducing the fault. A convenient accessory or radio feed can show a drop that is not present at the battery.

**Tests:** Rested battery voltage; crank-voltage observation; positive cable drop from battery positive post to starter feed; ground drop from starter case/engine metal to battery negative post; voltage at the under-hood fuse-box supply.

**Verify:** The battery is charged and load-capable, the high-current path remains stable during cranking, and added accessories are isolated before further diagnosis.

**Mistakes:** Treating “12 V” as proof of a healthy battery; measuring only at a remote ground; replacing an alternator when the real fault is a corroded high-current joint; using an ohmmeter on a live circuit.

### 2. No-crank or single-click diagnosis

**Symptom:** Turning the key to START produces no crank, a single click, or a slow/erratic crank.

**Safety:** Keep hands and clothing clear of belts and fans. Do not bypass a starter or interlock unless the vehicle is secured and the bypass is used only as a controlled diagnostic test.

**Tools:** Multimeter; test light; wiring reference for the exact year/market; remote starter switch only when safe; socket set.

**Steps:**
1. Confirm the battery/cable checks above and observe what other lamps do when START is selected.
2. Check the relevant high-current and ignition/start feeds at both fuse boxes using a test light or meter on both sides of the fuse. A fuse that has power on only one side is open; a fuse with no power may be downstream of the ignition switch and not itself faulty.
3. Confirm that the START command reaches the starter-control side only when the ignition switch is in START. Manual-transmission cars include a clutch interlock; automatic-market cars use a transmission/range interlock. Do not assume the same circuit or switch arrangement across markets.
4. If the control command is present at the starter solenoid but the motor does not operate, recheck ground drop and the high-current positive path, then test the starter/solenoid. If the command is absent, trace backward through the ignition switch, interlock, relay/fuse feed, and connectors.
5. If the starter spins without turning the engine, stop treating it as an electrical no-crank and inspect the starter drive/flywheel interface.

**Tests:** Battery voltage during crank; voltage at starter main terminal; voltage at the starter control terminal only while START is selected; positive and ground voltage-drop tests; interlock input/output checks.

**Verify:** The fault is assigned to battery/cabling, control-side command, interlock, or starter motor by a measured missing voltage or excessive drop—not by sound alone.

**Mistakes:** Repeatedly jumping the starter, substituting a relay because it clicks, or assuming a clutch/range switch is the same on every NB. The 2003 public wiring reference shows separate start-feed, ignition, and interlock paths [3].

### 3. Cranks normally but will not fire: prove ECU power and engine-control feeds

**Symptom:** The engine turns at normal speed but does not start; the check-engine lamp or other key-on indicators may be absent.

**Safety:** Do not back-probe airbag circuits. Avoid grounding power feeds with jumper wires. Disconnect the battery before removing a main fuse or unplugging major harnesses.

**Tools:** Multimeter/test light; scan tool appropriate to the car; fuse puller; wiring reference; noid/spark tester as appropriate.

**Steps:**
1. With key ON, note whether the check-engine lamp and normal warning lamps illuminate. Their absence is a power/feed clue, not proof of a failed ECU.
2. Check the cabin ROOM and ENGINE-related feeds and the under-hood fuel-injection/main feeds against the vehicle’s own lid label or exact-year reference. Inspect both sides of each fuse and the relay socket supply/control sides.
3. Verify ECU/PCM constant and switched power and its ground at the harness using the exact year/market wiring information. Do not use a generic online pinout as a substitute for the correct diagram.
4. If ECU power is good, move to independent engine requirements: crank/cam signal, ignition output, injector pulse, fuel pressure, and immobilizer/security behavior where fitted. Use scan data or fault codes as evidence, not as a parts list.
5. Clear stale codes only after recording them, then retest the symptom and read the resulting codes again. The service reference identifies generator/PCM voltage-related codes, but code presence still requires circuit confirmation [2].

**Tests:** Key-on lamp behavior; fuse voltage on both sides; relay feed and command; ECU constant/switched power and ground; scan communication; crank signal; spark/injector/fuel checks.

**Verify:** The no-fire branch is narrowed to missing ECU power/ground, missing engine-speed reference, fuel/ignition delivery, or immobilizer/control logic.

**Mistakes:** Copying an NA procedure onto an NB; treating a forum terminal label as authoritative; replacing the ECU because the MIL is dark without checking ROOM/ENGINE/main feeds; disconnecting the battery before recording codes.

### 4. Charging-system and battery-lamp diagnosis under load

**Symptom:** Battery/charge lamp stays on or flickers; battery repeatedly goes flat; lights dim or voltage changes with engine speed.

**Safety:** Keep clear of the belt and rotating pulley. Never disconnect the battery with the engine running. Stop if the battery is hot, swollen, leaking, or frozen. The owner manual limits jump starting to a 12 V source [1].

**Tools:** Multimeter; belt-tension/condition inspection tools; clamp ammeter if available; scan tool or data logger optional.

**Steps:**
1. Fully charge and test the battery first. A weak battery can imitate charging trouble and can be damaged by repeated deep discharge.
2. Measure voltage at the battery posts with the engine off, idling, and at a modest raised speed. Repeat with headlights, blower, and rear defogger where equipped. The result should rise above resting voltage and remain stable; exact values vary with temperature, load, regulator strategy, and meter accuracy.
3. Compare alternator output-terminal-to-case voltage with battery-post voltage. A meaningful difference identifies the positive cable/fuse-box path; compare alternator case/engine metal to battery negative to identify the ground path.
4. Inspect belt slip, alternator connector, charge-lamp circuit, main fuse link, and high-current fuse-box joints before condemning the alternator.
5. If the car is an early 1999–2000 variant, treat regulator architecture as a model-specific question: enthusiast reports disagree about how much regulation is internal versus ECU-associated. Verify by the exact alternator/wiring reference, not by a year-only assumption [4].

**Tests:** Resting battery voltage; charging voltage at battery under load; alternator-to-battery voltage drop; charge-lamp behavior; belt and connector inspection; ripple test if charging voltage is abnormal.

**Verify:** Charging failure is demonstrated by low/unstable output or excessive cable drop after the battery and belt are known good.

**Mistakes:** Replacing the battery because the charge lamp is on; using a fixed “14.5 V” pass/fail rule in all conditions; testing only at idle with no load; disconnecting the battery to “test” the alternator.

### 5. Lighting and fuse strategy: branch from the symptom

**Symptom:** One headlamp, both headlamps, tail/park lamps, turn signals, brake lamps, or dash illumination fail; a fuse opens repeatedly.

**Safety:** Use the specified fuse rating only. If a replacement opens again, stop and find the short/overload. Do not probe an SRS circuit or install higher-rated protection. Replace bulbs with the lamp circuit off and allow hot bulbs to cool.

**Tools:** Test light or fused jumper for controlled short-finding; multimeter; fuse puller; correct bulb; wiring reference.

**Steps:**
1. Identify whether the failure is one side, one function, or an entire branch. This separates a bulb/socket/ground fault from a shared feed, switch, relay, or fuse fault.
2. Check the cabin and under-hood fuse boxes at the fuse and load side. For 2002–2005 US references, the secondary fuse index groups left/right headlamps separately, while tail/parking/side-marker and turn/hazard functions use their own branches; exact equipment and ratings vary by year, market, DRL, ABS, fog lamps, and Mazdaspeed trim [3] [5].
3. If a fuse is open, inspect the harness near lamp housings, bumper/quarter-panel transitions, trunk-lid movement, aftermarket lamps, trailer wiring, and wet/corroded sockets before fitting another fuse.
4. If a fuse is good but the load is dead, test for power at the socket and test the return path to body ground. A shared ground can make several lamps dim or backfeed.
5. For headlights, remember that the switch/relay/fuse arrangement differs between DRL and non-DRL diagrams. Use the exact-market diagram and trace the circuit from supply to switch/relay to left/right branch to ground [3].

**Tests:** Both sides of fuse; voltage at lamp socket; continuity only with power removed; voltage drop on supply and ground under load; wiggle test at harness/socket; current draw if a fuse repeatedly opens.

**Verify:** The repair restores the affected branch without an oversized fuse, and all lamps remain stable with other electrical loads operating.

**Mistakes:** Copying a 2002–2003 fuse assignment to a 2004–2005 Mazdaspeed; assuming a good fuse proves power reaches the bulb; replacing a fuse repeatedly without finding the short; using a chassis ground far from the lamp and missing a bad local ground.

## Wiring notes

### Battery, main fuse, and distribution

**Diagram:** `Battery + → high-current cable/main fuse link → under-hood fuse/relay box → ignition/start, engine-control, lighting, and cabin branches; battery − → body/engine bonding paths → component returns.`

**Explanation:** The high-current distribution point is common to many apparently unrelated faults. A bad main connection can cause dimming, resets, no-crank, or low charging even when individual small fuses look intact. The 2003 public diagram shows a large main fuse and separate ignition/start and charging paths [3].

**Limits:** This is a simplified topology, not a pinout or a substitute for the exact year/market schematic.

### Start command path

**Diagram:** `Ignition switch START → start/interlock logic (clutch or range, market-dependent) → starter control terminal → solenoid/motor; high-current battery feed supplies the starter separately.`

**Explanation:** Testing the control terminal and the high-current terminal separately distinguishes an open command path from a bad starter or cable. A click proves movement/noise, not adequate contact or motor current.

**Limits:** Automatic/manual, immobilizer, and market equipment change the control path; do not infer wire colors or terminal numbers from another NB.

### Lighting branches

**Diagram:** `Protected supply → light switch/relay or control module → function fuse → left/right lamp branch → local body ground; tail/park, turn/hazard, brake, and headlamp functions are separate branches.`

**Explanation:** One dead side suggests socket, bulb, branch wire, or local ground; both sides suggest shared supply, switch/relay, or fuse feed. DRL-equipped diagrams add control logic and can change where the headlamp feed is switched [3].

**Limits:** Fuse labels and ratings shown in secondary indexes are useful orientation only. Confirm the lid label and exact-market/year documentation before repair [5].

## Model-year and market caveats

The NB spans 1998–2005, but the public 1999–2001 service reference, 2002 US owner manual, and 2003 wiring diagrams are not interchangeable as complete manuals. US 2002–2003 and 2004–2005 fuse assignments are broadly similar in the secondary index, but equipment differs, including Mazdaspeed fan/ABS/audio/fog options [5]. Headlight DRL versus non-DRL wiring, manual versus automatic transmission interlocks, immobilizer/security equipment, California/emissions controls, and non-US lighting rules can change circuit details. Use this note for test order and circuit logic only; use the car’s fuse-cover legend and exact-market wiring documentation for ratings, connector locations, and terminal identification.

## References

[1]: https://www.mazdausa.com/siteassets/pdf/owners-optimized/2002/mx5-miata/2002-mx-5-miata-owners-manual.pdf "2002 Mazda MX-5 Miata Owner's Manual"
[2]: https://www.mellens.net/mazda/Mazda-Miata-1999-2001.pdf "Mazda Miata 1999–2001 public service reference"
[3]: https://www.mellens.net/mazda/mazda_miata_extra_manual/2003_wiring.pdf "2003 Mazda MX-5 Miata system wiring diagrams"
[4]: https://forum.miata.net/vb/showthread.php?t=767251 "Miata.net NB charging-voltage discussion"
[5]: https://fuse-box.info/mazda/mazda-mx-5-miata-nb-1999-2005-fuses "Secondary NB fuse index, 2002–2005 coverage"
[6]: https://forum.miata.net/vb/archive/index.php/t-279746.html "Miata.net enthusiast no-start troubleshooting discussion"
[7]: https://forum.miata.net/vb/showthread.php?t=472045 "Miata.net enthusiast voltage-supply and ground discussion"
