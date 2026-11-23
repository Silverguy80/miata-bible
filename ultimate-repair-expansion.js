/**
 * Ultimate Miata Bible — coverage expansion
 * Original workshop procedures filling remaining master-manual gaps.
 * Independently written; not a reproduction of Mazda, Haynes, Chilton, or other commercial manuals.
 * Exact torque, pinout, fluid capacity, and calibration values remain VIN/year verification points.
 */

const common = {
  tools: ['Floor jack and stands', 'Torque wrench', 'Inspection light', 'Nitrile gloves'],
  sources: ['Mazda owner/service information for the exact VIN and market', 'OEM parts catalog or verified supplier fitment'],
  related: []
};

/**
 * @param {object} p
 * @returns {object}
 */
function proc(p) {
  return {
    ...common,
    difficulty: 'Advanced',
    time: '2–6 hr',
    tips: '',
    ...p,
    tools: p.tools || common.tools,
    sources: p.sources || common.sources,
    related: p.related || []
  };
}

export const expansionProcedures = [
  proc({
    id: 'rear-main-seal-service',
    book: 'engine',
    system: 'Engine sealing',
    title: 'Decide and replace a rear main seal without creating a second leak',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['rear main seal', 'crank seal', 'oil leak', 'transmission'],
    difficulty: 'Advanced',
    time: '8–18 hr',
    symptoms: 'Oil at the bellhousing, clutch contamination, oil smell after heat, or a wet rear cover after clutch work.',
    tools: ['Transmission support', 'Seal driver or approved installation method', 'Torque wrench', 'Parts cleaner', 'New seal and sealing compound only if specified'],
    safety: 'Support the car and transmission independently. Do not hang the gearbox on the input shaft. Keep oil off clutch friction faces.',
    tips: 'A wet clutch disc is not automatically a rear-main failure. Trace whether oil is coming from the rear cover, cam-cover path, oil-filter sandwich, or transmission input seal before ordering the seal.',
    steps: [
      'Photograph the leak path with the car cold and again after a short run so you can see whether oil is migrating from above the bellhousing or originating at the crank seal.',
      'Confirm generation, engine, transmission, and whether the clutch, flywheel, and pilot bearing are already scheduled for service. Rear-main access usually means transmission removal.',
      'Inspect the rear cover, crank flange, seal track, and any prior sealant mess. A scored seal track or a seal driven too deep will defeat a new seal.',
      'Remove the transmission using the generation clutch/transmission workflow. Support the powertrain; do not let the gearbox rest on the clutch fingers.',
      'Remove the flywheel or flexplate with the crank locked. Inspect for heat checks, oil contamination, and correct friction-surface height before reassembly.',
      'Extract the old seal without scratching the crank. Clean the bore and crank sealing surface; measure or compare the original seal depth before installing the replacement.',
      'Install the new seal squarely to the verified depth using the correct driver. Do not cock the seal or pack the cavity with random grease unless the seal design requires a specified lubricant.',
      'Reseal the rear cover only with the material and thickness specified for that engine. Excess sealant in oil passages creates new failures.',
      'Reinstall the flywheel with new fasteners or sealing compound where required, then the clutch or flexplate, pilot support, and transmission.',
      'Refill fluids, road-test through a full heat cycle, and reinspect the bellhousing area and clutch odor before calling the leak fixed.'
    ],
    verify: 'The leak source is identified before parts are bought, the seal is seated squarely at the correct depth, and the area stays dry after a heat cycle and road test.',
    mistakes: 'Replacing the rear main because the clutch smelled oily without tracing the path; driving a seal crooked; contaminating a new clutch; using NA depth assumptions on NC/ND.',
    related: ['na-nb-clutch-lightweight-flywheel', 'transmission-remove-install', 'oil-pan-pickup-service']
  }),

  proc({
    id: 'front-cover-crank-cam-seals',
    book: 'engine',
    system: 'Engine sealing / front cover',
    title: 'Service front cover, crank seal, and cam seals as one oil-control job',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['front cover', 'crank seal', 'cam seal', 'oil leak', 'timing'],
    difficulty: 'Advanced',
    time: '4–12 hr',
    symptoms: 'Oil at the timing cover, belt contamination on NA/NB, damp cam towers, or unexplained oil loss without a pan leak.',
    tools: ['Pulley holding method', 'Seal puller/driver', 'Timing references for the engine', 'Gasket/sealant specified for the cover', 'Cooling-system fill gear if coolant is disturbed'],
    safety: 'Do not rotate the engine casually with the timing drive disturbed. Keep oil off a timing belt. Support accessories and the radiator shroud so nothing falls into the fan.',
    tips: 'On belt engines, treat every front-cover oil leak as a timing-belt risk. Replace contaminated belts and tension hardware; do not wipe oil off an old belt and call it done.',
    steps: [
      'Map the leak with UV dye or careful cleaning so you know whether oil is coming from the cam seal, crank seal, cover joint, valve cover, or oil-filter area.',
      'Record engine family and whether the job coincides with timing-belt, water-pump, or chain-cover service. Buy seals and gaskets for that exact cover design.',
      'Remove accessory drive parts, pulley, and covers required for access. Bag fasteners by location and photograph belt or chain routing.',
      'If timing components must come off, set the engine to the verified reference marks before disassembly and protect the new belt or chain from oil.',
      'Remove the old seals without gouging aluminum or the crank/cam journals. Inspect seal tracks for grooves that require sleeves or machining.',
      'Clean sealing surfaces carefully. Install new seals squarely to the correct depth and assemble the cover with the specified gasket or sealant pattern—not a smear of whatever is on the bench.',
      'Reinstall the timing drive, set tension by the engine method, and hand-rotate at least two crank revolutions while confirming marks.',
      'Refill oil, restore coolant if disturbed, run to temperature, and recheck for seepage at idle and after shutdown.'
    ],
    verify: 'Leak path is documented, timing references return correctly, and the front cover stays dry after a heat cycle.',
    mistakes: 'Replacing only the cheapest seal while leaving a wet cover gasket; contaminating a timing belt; guessing seal depth; over-applying sealant into oil galleries.',
    related: ['timing-belt-na-nb', 'timing-chain-boundary-nc-nd', 'oil-service']
  }),

  proc({
    id: 'valve-seal-replacement',
    book: 'engine',
    system: 'Valve train',
    title: 'Replace valve stem seals when oil use and plug fouling point there',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['valve seals', 'oil consumption', 'blue smoke', 'plug fouling'],
    difficulty: 'Advanced',
    time: '6–16 hr',
    symptoms: 'Blue smoke after sitting, oily plugs, oil use with decent compression, or wet valve stems found during top-end work.',
    tools: ['Valve-spring compressor suitable for on-head or head-off work', 'Air-hold or rope method as specified', 'New seals matched to stem size', 'Torque wrench', 'Assembly lube'],
    safety: 'Keep springs and keepers under control. Do not drop hardware into the engine. If the head must come off, follow the head-gasket workflow.',
    tips: 'Valve seals fix oil past the guides. They do not fix rings, PCV faults, or a turbo that is pushing oil. Prove the smoke timing and compression story first.',
    steps: [
      'Separate cold-start puff, continuous smoke under load, and oil burning only on overrun. Record oil consumption, plug condition, and compression or leak-down results.',
      'Confirm engine design: some cars allow on-head seal service with compressed air holding the valves; others are safer as a head-off job.',
      'Gain access by removing the valve cover, cams if required, and rocker or bucket hardware using the engine sequence.',
      'Compress springs carefully, remove keepers, and replace seals one valve at a time unless the service method says otherwise.',
      'Lubricate stems, seat the new seals fully, reinstall springs and keepers, and confirm keeper engagement before releasing the compressor.',
      'Reassemble the valvetrain, set clearance where adjustable, and restore covers with the correct gasket.',
      'Change oil if diluted, then road-test for smoke, idle quality, and new noises. Recheck for cover leaks.'
    ],
    verify: 'The oil-smoke pattern that justified the job is reduced or gone, keepers are seated, and valve clearance is within the engine specification after reassembly.',
    mistakes: 'Doing seals because the internet said so after a PCV failure; mixing seal sizes; leaving a keeper half-seated; skipping a compression check that would have shown ring failure.',
    related: ['valve-train-service', 'valve-clearance', 'compression-plan', 'head-gasket-service']
  }),

  proc({
    id: 'bottom-end-rebuild-plan',
    book: 'engine',
    system: 'Engine mechanical',
    title: 'Plan a bottom-end inspection or rebuild before tearing the block apart',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['bottom end', 'bearings', 'rings', 'crankshaft', 'rebuild'],
    difficulty: 'Expert',
    time: 'Planning 4–8 hr · machine work varies',
    symptoms: 'Knock, low oil pressure, metal in oil, severe oil use with low compression, spun bearing suspicion, or a forced-induction engine being opened for margin.',
    tools: ['Plastigage or micrometers as appropriate', 'Torque wrench', 'Parts trays', 'Machine-shop measurement sheet', 'Camera'],
    safety: 'A bottom-end teardown is not a weekend curiosity project. Stop driving if oil pressure is genuinely low or a rod knock is confirmed.',
    tips: 'Write the failure hypothesis before the pan comes off. “Maybe bearings” is not a plan. Decide what measurements will prove reuse, polish, or machine work.',
    steps: [
      'Capture oil-pressure readings, knock location, metal evidence, compression/leak-down, and boost or tune history if modified.',
      'Budget for machine shop time, new bearings, rings, gaskets, fasteners, and the downtime of a car without an engine. Do not start teardown with half a gasket set.',
      'Remove the oil pan and inspect the pickup screen, windage tray, and bearing debris before declaring a rebuild.',
      'If rods and mains must come out, mark caps, measure clearances, and photograph journals. Do not mix caps.',
      'Send the block, crank, and rods for measurement when wear exceeds service limits or heat damage is obvious. Reuse decisions belong to measured data.',
      'Plan ring end-gap, piston clearance, bearing grade, and torque/angle methods from the exact engine data—not a forum spreadsheet.',
      'Reassemble with clean oiling passages, correct sealant, primed oiling, and a documented first-fire procedure.',
      'After first start, verify oil pressure immediately, check for leaks, and follow a break-in plan appropriate to the ring and cam package.'
    ],
    verify: 'Every reuse-or-replace decision is backed by a measurement, and the first-fire checklist includes oil pressure, leaks, and abnormal noise.',
    mistakes: 'Plastigaging once and calling it done; mixing rod caps; ignoring a clogged pickup; assembling a boosted engine on tired rings because “it still had compression.”',
    related: ['oil-pan-pickup-service', 'oil-pressure-test', 'engine-remove-install']
  }),

  proc({
    id: 'engine-mount-service',
    book: 'engine',
    system: 'Engine mounts',
    title: 'Replace engine and transmission mounts and verify alignment',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['engine mount', 'transmission mount', 'vibration', 'clunk'],
    difficulty: 'Intermediate',
    time: '2–6 hr',
    symptoms: 'Clunk on throttle tip-in, vibration at idle, shifter harshness, exhaust contact, or cracked/oil-soaked mounts.',
    tools: ['Engine support or jack with wood block', 'Torque wrench', 'Inspection light', 'Paint marker'],
    safety: 'Support the engine or transmission before removing a mount. Never leave the powertrain hanging on a single remaining mount or a hose.',
    tips: 'Soft race mounts feel “connected” until they crack the exhaust, fan shroud, or clutch hydraulics. Match mount stiffness to how you actually drive the car.',
    steps: [
      'Inspect each mount for cracks, collapsed rubber, oil soak, and metal-to-metal contact. Record which corner moves under load.',
      'Support the engine or gearbox, remove the failed mount, and compare the replacement to the original before installation.',
      'Install mounts with the powertrain roughly centered. Snug fasteners, then torque with the car at ride height if the service method requires unloaded bushings.',
      'Check exhaust, intake, clutch line, radiator hose, and fan clearance after the mount change.',
      'Road-test for clunk, idle shake, and gearshift feel. Reinspect fastener witness marks after the first heat cycle.'
    ],
    verify: 'Idle and tip-in behavior improve without new contact noises, and every mount fastener is torqued and marked.',
    mistakes: 'Replacing one mount while leaving its partner collapsed; torquing bushings at full droop when the method forbids it; using poly mounts without checking clutch and exhaust clearance.',
    related: ['trouble-noise-vibration', 'transmission-remove-install']
  }),

  proc({
    id: 'accessory-drive-balancer',
    book: 'engine',
    system: 'Accessory drive',
    title: 'Inspect accessory drive, pulleys, and crank balancer before chasing noise',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['serpentine belt', 'pulley', 'balancer', 'harmonic damper', 'squeal'],
    difficulty: 'Intermediate',
    time: '1–3 hr',
    symptoms: 'Belt squeal, chirp, visible wobble, charging instability with belt slip, or front-of-engine vibration.',
    tools: ['Belt tool or wrench for tensioner', 'Straightedge', 'Inspection light', 'Puller if balancer removal is required'],
    safety: 'Keep hands clear of belts and fans. Support the engine if the balancer bolt requires serious crank holding.',
    tips: 'Spray tests lie. A belt that quiets with water is not diagnosed. Check pulley alignment, tensioner damping, and balancer rubber before buying another belt.',
    steps: [
      'With the engine off, inspect belt ribs, cracks, glazing, and correct routing for the accessory package on that car.',
      'Spin each idler and tensioner by hand feeling for roughness. Check tensioner travel and damping.',
      'Sight along pulleys for misalignment. A stacked aftermarket pulley or missing spacer is a common noise source.',
      'Inspect the crank balancer for rubber separation, forward walk, and outer-ring shift. A failing balancer is a stop-and-repair item on many engines.',
      'Replace worn belts, pulleys, or balancers as a matched set when wear is shared. Torque the crank bolt to the engine-specific method only.',
      'Run the engine and recheck noise at idle, with A/C load, and during a brief rev. Confirm charging voltage if slip was part of the complaint.'
    ],
    verify: 'Belt tracks true, pulleys run quietly, balancer shows no separation, and the original noise is gone under the same loads.',
    mistakes: 'Belt dressing as a repair; ignoring a wobbling balancer; mixing pulley diameters that change accessory speed; overtightening a manual tensioner.',
    related: ['charging-check', 'timing-belt-na-nb', 'water-pump-thermostat']
  }),

  proc({
    id: 'timing-verification-after-jump',
    book: 'engine',
    system: 'Engine timing',
    title: 'Verify cam and crank timing after a suspected jump or botched prior repair',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['timing', 'jumped belt', 'chain', 'no start', 'verification'],
    difficulty: 'Advanced',
    time: '2–8 hr',
    symptoms: 'Sudden no-start after noise, bent-valve suspicion, correlation codes, or a car that “had the belt done” and never ran right afterward.',
    tools: ['Engine locking or marking tools for the exact engine', 'Compression or leak-down gear', 'Scan tool where supported', 'Inspection mirror'],
    safety: 'Do not force the engine through a bind. If valves may contact pistons, stop and plan a careful inspection.',
    tips: 'Paint marks from the last shop are not proof. Return to factory reference marks and prove two full crank revolutions before you celebrate.',
    steps: [
      'Record whether the engine cranks normally, cranks unevenly, or stopped suddenly. Retrieve codes and freeze-frame data.',
      'Remove the covers needed to see the timing references for that engine. Do not rotate until you understand the current mark relationship.',
      'Bring the crank to the specified reference and compare cam marks. Document any offset in teeth or degrees.',
      'If marks disagree, correct the belt or chain position using the official tension and locking method for the engine.',
      'Hand-rotate two full crank revolutions and reconfirm marks. Any binding stops the job for valve/piston inspection.',
      'Perform compression or leak-down if a jump or breakage may have bent valves. A pretty timing job on a bent valve is still a no-start.',
      'Reassemble, clear adaptive data only when appropriate, and verify start quality and correlation data.'
    ],
    verify: 'Cam and crank references agree after two revolutions, compression is credible, and the original no-start or misfire complaint is resolved.',
    mistakes: 'Trusting old paint; turning the crank backward as a shortcut; ignoring a bent valve; using NA belt logic on an NC/ND chain engine.',
    related: ['timing-belt-na-nb', 'timing-chain-boundary-nc-nd', 'trouble-crank-no-start', 'compression-plan']
  }),

  proc({
    id: 'maf-map-diagnosis',
    book: 'fuel',
    system: 'Air metering',
    title: 'Diagnose MAF or MAP faults without throwing sensors at trim codes',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['MAF', 'MAP', 'airflow', 'fuel trim', 'sensor'],
    difficulty: 'Intermediate',
    time: '1–3 hr',
    symptoms: 'Lean or rich trims, hesitation, surge, codes for airflow or manifold pressure, or a recent intake modification.',
    tools: ['Scan tool', 'Multimeter', 'Smoke tester or soapy water', 'MAF cleaner only if the sensor design allows it'],
    safety: 'Do not soak a hot-wire MAF in random cleaners. Support the battery and avoid shorting sensor reference circuits.',
    tips: 'Unmetered air after the MAF looks like a bad MAF. Smoke the intake and check the airbox lid seal before you spend money on a sensor.',
    steps: [
      'Confirm which metering strategy the car uses: vane/flap, hot-wire MAF, MAP, or a combination with throttle position.',
      'Record fuel trims at idle and cruise, MAF grams/sec or voltage, MAP, RPM, and whether the fault is cold-only or hot-only.',
      'Inspect ducts, clamps, airbox seals, PCV hoses, and throttle-body joints for unmetered air.',
      'Check sensor power, ground, and signal with the diagram. A reference-ground problem can mimic a failed sensor.',
      'Clean only if the manufacturer method allows it. Otherwise replace with the correct calibration sensor—not a random “performance” unit.',
      'After repair, clear codes if appropriate, road-test, and confirm trims move toward normal under the same conditions.'
    ],
    verify: 'Trims and metering data make sense together, and the repair changes the measured evidence rather than just clearing a code.',
    mistakes: 'Replacing a MAF for a vacuum leak; installing an undersize aftermarket housing; ignoring a crushed intake tube; cleaning a MAP sensor like a MAF.',
    related: ['trouble-rough-idle', 'smoke-test-intake', 'throttle-body-iac-service', 'scan-code-workflow']
  }),

  proc({
    id: 'egr-emissions-diagnosis',
    book: 'fuel',
    system: 'Emissions',
    title: 'Diagnose EGR and emissions-control faults where the equipment is fitted',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['EGR', 'emissions', 'purge', 'idle', 'ping'],
    difficulty: 'Intermediate',
    time: '1–3 hr',
    symptoms: 'Ping under load, rough idle, emissions failure, EGR codes, or a stuck valve after carbon buildup.',
    tools: ['Scan tool or year-appropriate code method', 'Vacuum gauge or smoke tester', 'Multimeter', 'Carbon cleaner suitable for the valve design'],
    safety: 'Do not defeat emissions equipment as a “test.” Exhaust and catalytic converters get hot enough to burn.',
    tips: 'Not every Miata has the same EGR hardware. Confirm the valve, solenoid, and passages exist on your market and year before buying parts.',
    steps: [
      'Identify the emissions package for the VIN: EGR, purge, secondary air, or none of the above.',
      'Record codes and whether the complaint is idle quality, surge, or detonation under load.',
      'Inspect vacuum/electrical control to the EGR valve and verify commanded versus actual operation with the service method.',
      'Check passages for carbon restriction. Clean only with methods safe for the valve and gasket surfaces.',
      'Verify related items: coolant temp sensor plausibility, ignition timing authority, and fuel quality that can mimic EGR ping.',
      'Repair the proven fault, then retest under the load condition that created the complaint.'
    ],
    verify: 'Commanded EGR behavior matches observed valve/passage function, and the idle or ping complaint is gone under the original conditions.',
    mistakes: 'Blanking an EGR valve to “fix” ping; cleaning one passage while leaving the control solenoid failed; applying California-spec assumptions to a federal car without checking.',
    related: ['evap-diagnosis', 'trouble-rough-idle', 'spark-plug-service']
  }),

  proc({
    id: 'o2-af-sensor-diagnosis',
    book: 'fuel',
    system: 'Oxygen / A/F sensing',
    title: 'Diagnose oxygen and air-fuel sensors after ruling out exhaust and fuel faults',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['O2 sensor', 'A/F sensor', 'wideband', 'fuel trim', 'catalyst'],
    difficulty: 'Intermediate',
    time: '1–3 hr',
    symptoms: 'Persistent fuel-trim codes, lazy closed-loop, catalyst efficiency codes, or a sensor that looks “stuck.”',
    tools: ['Scan tool', 'Multimeter', 'Exhaust inspection tools', 'Penetrating oil and correct sensor socket'],
    safety: 'Sensors and exhaust are hot. Support the car securely for underside access. Do not contaminate a new sensor with anti-seize on the tip.',
    tips: 'An exhaust leak upstream of the sensor makes a “lean” story. Fix the leak and fuel pressure before condemning the sensor.',
    steps: [
      'Capture upstream and downstream sensor data, trims, and whether the engine is actually in closed loop.',
      'Inspect for exhaust leaks at the manifold, flex section, and collector before the sensor.',
      'Verify sensor heater power and ground. A cold sensor will not switch or report correctly.',
      'Compare fuel pressure, injector condition, and intake leaks against the trim direction.',
      'Replace only the sensor that failed the evidence test, using the correct thread and torque method. Protect wiring from exhaust heat.',
      'Road-test through warm-up and confirm closed-loop behavior and code status.'
    ],
    verify: 'Sensor data responds plausibly, heater circuits are intact, and trims stabilize after related mechanical faults are cleared.',
    mistakes: 'Replacing both sensors because of one code; ignoring an exhaust manifold leak; contaminating a new tip with RTV or oil; using a universal sensor with a hacked connector on a networked car.',
    related: ['fuel-pressure-test', 'smoke-test-intake', 'scan-code-workflow']
  }),

  proc({
    id: 'ignition-coil-wire-service',
    book: 'fuel',
    system: 'Ignition',
    title: 'Service coils, plug wires, and ignition control by generation',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['coil', 'plug wires', 'igniter', 'misfire', 'spark'],
    difficulty: 'Intermediate',
    time: '1–3 hr',
    symptoms: 'Misfire under load, damp-weather stumble, visible arc, coil codes, or brittle plug wires on older cars.',
    tools: ['Approved spark tester', 'Multimeter', 'Dielectric grease only where specified', 'Correct coil or wire set'],
    safety: 'High voltage can injure. Keep testers away from fuel vapor. Do not puncture wires as a “test.”',
    tips: 'A coil that fails when hot may pass a cold ohms check. Reproduce the heat condition before you declare the coil good.',
    steps: [
      'Identify the ignition architecture: distributor/coil-and-wires, wasted-spark packs, or coil-on-plug.',
      'Inspect boots, towers, ground straps, and wire routing away from hot manifolds and sharp brackets.',
      'Test for spark with an approved tester under crank or run conditions. Compare cylinders rather than testing only one.',
      'Check coil primary supply and control signal. On early cars, include the igniter and CAS path in the thinking.',
      'Replace damaged wires or coils as a set when age and heat have cooked the companions. Gap plugs to the engine requirement.',
      'Clear misfire counts if needed and road-test under the load that previously failed.'
    ],
    verify: 'Spark is consistent across tested cylinders, no arcing is visible at night, and the misfire complaint does not return under load.',
    mistakes: 'Holding a plug against the block by hand; mixing coil-on-plug boots between banks; ignoring a cracked valve cover that oil-soaks boots; replacing coils while plugs are worn out.',
    related: ['spark-plug-service', 'no-start', 'trouble-crank-no-start']
  }),

  proc({
    id: 'crank-cam-sensor-service',
    book: 'fuel',
    system: 'Engine position sensing',
    title: 'Replace and verify crank or cam sensors after proving the signal path',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['crank sensor', 'cam sensor', 'CAS', 'correlation', 'no start'],
    difficulty: 'Advanced',
    time: '1–4 hr',
    symptoms: 'Sudden stall, intermittent no-start when hot, correlation codes, or missing RPM signal while cranking.',
    tools: ['Scan tool', 'Multimeter or scope if available', 'Correct sensor', 'Torque tools'],
    safety: 'Disable fuel when extended cranking is required. Do not drop metal debris onto a tone wheel.',
    tips: 'A correlation code after a timing job is often timing, not a sensor. Verify mechanical timing before swapping sensors.',
    steps: [
      'Confirm whether RPM registers while cranking and whether the fault is heat-related or immediate.',
      'Inspect connectors, harness chafe points, and sensor mounting air gap or alignment for the design.',
      'Test power, ground, and signal against the service information. Scope the pattern if the tool is available.',
      'Inspect the reluctor or tone wheel for missing teeth, debris, or incorrect installation after prior work.',
      'Replace the sensor only after wiring and mechanical timing are credible. Use the correct fastener torque and routing clips.',
      'Verify start, idle, and a hot-soak restart that matches the original failure mode.'
    ],
    verify: 'RPM and cam/crank correlation remain stable hot and cold, and the original intermittent stall is gone.',
    mistakes: 'Replacing sensors in pairs from fear; ignoring a damaged tone wheel; leaving the harness against the exhaust; skipping the hot-soak retest.',
    related: ['timing-verification-after-jump', 'trouble-crank-no-start', 'scan-code-workflow']
  }),

  proc({
    id: 'ecu-replacement-relearn',
    book: 'electrical',
    system: 'ECU / immobilizer',
    title: 'Replace an ECU only with immobilizer, key, and relearn boundaries understood',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['ECU', 'PCM', 'immobilizer', 'relearn', 'keys'],
    difficulty: 'Expert',
    time: '2–8 hr plus programming',
    symptoms: 'Confirmed ECU internal failure, water-damaged module, or a required calibration change that the current unit cannot support.',
    tools: ['Scan/programming tools appropriate to year', 'Battery support', 'Correct ECU part number', 'Key set'],
    safety: 'Immobilizer and SRS work can leave a car stranded or unsafe. Stop and use qualified service when programming or key matching is required beyond your tools.',
    tips: 'On NC/ND especially, a used ECU is not a plug-and-play spare. Matching keys, immobilizer data, and module coding matters more than the board looking identical.',
    steps: [
      'Prove power, grounds, sensor inputs, and network health before condemning the ECU. Most “bad computer” cars are wiring or voltage problems.',
      'Record the exact part numbers, software IDs, immobilizer type, transmission, and market. Order only a compatible unit.',
      'Support battery voltage during any programming. Interruptions brick modules.',
      'Install the ECU with clean connectors and restored grounds. Do not force mismatched connectors.',
      'Perform the required key, immobilizer, or adaptive relearn procedure for that generation—or hand the car to a shop that can.',
      'Verify start, warning lamps, network communication, and a road test before sealing the job.'
    ],
    verify: 'The car starts with the intended keys, no immobilizer or network faults remain, and basic drivability matches a known-good baseline.',
    mistakes: 'Swapping a junkyard ECU into a coded car; programming on a weak battery; skipping proof of power/ground; treating early NA blink-code ECUs like modern coded modules without checking.',
    related: ['immobilizer-keyless-boundaries', 'can-network-diagnosis', 'module-water-recovery']
  }),

  proc({
    id: 'ecu-calibration-fi-boundary',
    book: 'builds',
    system: 'Calibration / forced induction',
    title: 'Set safe boundaries for ECU calibration and forced-induction tuning',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['tune', 'ECU', 'wideband', 'boost', 'fail-safe'],
    difficulty: 'Expert',
    time: 'Planning 4–10 hr',
    symptoms: 'Installing a turbo or supercharger, changing injectors, or moving beyond a conservative base map.',
    tools: ['Wideband with logged data', 'Fuel-pressure evidence', 'Knock monitoring strategy', 'Boost leak tester', 'Qualified calibration path'],
    safety: 'A wrong fuel or ignition map can destroy an engine quickly. Do not “guess rich” without measurement, and do not street-tune without a safety plan.',
    tips: 'Calibration is not a part you bolt on. Fuel system, knock control, cooling, oil control, and clutch capacity have to be ready before boost targets rise.',
    steps: [
      'Baseline compression, leak-down, fuel pressure/volume, charging voltage, grounds, and cooling before any aggressive map.',
      'Confirm injector size, dead times, pump capacity, regulator type, and return/line design match the power goal.',
      'Place the wideband where it reads real mixture, not a collector dead spot. Log AFR, boost, oil pressure, and coolant together.',
      'Set fail-safes: boost cut, fuel cut, over-temp strategies, and a limp plan the driver understands.',
      'Increase load in stages on a dyno or controlled road with a tuner who understands the platform.',
      'Recheck plugs, oil, leaks, and fasteners after the first heat cycles. Retune if fuel, altitude, or hardware changes.'
    ],
    verify: 'Logged AFR and knock behavior stay inside the agreed limits, fuel pressure holds under load, and fail-safes are demonstrated—not assumed.',
    mistakes: 'Copying someone else’s map; ignoring fuel pressure while chasing AFR; grounding the wideband poorly; raising boost before the clutch and cooling are ready.',
    related: ['forced-induction-plan', 'fuel-pressure-test', 'aftermarket-wiring']
  }),

  proc({
    id: 'smoke-test-crankcase-booster',
    book: 'fuel',
    system: 'Vacuum / crankcase',
    title: 'Smoke-test crankcase ventilation and brake-booster circuits',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['PCV', 'crankcase', 'brake booster', 'smoke test', 'vacuum leak'],
    difficulty: 'Intermediate',
    time: '1–2 hr',
    symptoms: 'Oil leaks that worsen with load, whistling, hard brake pedal assist faults, high idle, or unexplained crankcase pressure.',
    tools: ['Low-pressure smoke tester', 'Caps and adapters', 'Scan/idle notes', 'Inspection light'],
    safety: 'Use low pressure only. Keep smoke away from hot exhaust and fuel vapor. Do not pressurize a sealed crankcase beyond the approved method.',
    tips: 'A blocked PCV system pushes oil past seals. If you keep replacing cam seals, smoke the crankcase and check the PCV valve and hoses.',
    steps: [
      'Record idle, fuel trims, brake assist feel, and any oil-leak locations before testing.',
      'Isolate the intake and crankcase paths as the engine design allows. Introduce low-pressure smoke to one circuit at a time.',
      'Inspect PCV valve operation, valve-cover baffles, hose cracks, and the brake-booster check valve and diaphragm path.',
      'Repair leaks and restrictions, then confirm idle and assist feel. Recheck oil-leak points after a drive.',
      'If booster assist is weak with a tight vacuum system, test the booster itself and the check valve rather than guessing at master-cylinder faults.'
    ],
    verify: 'Smoke no longer escapes from unintended paths, idle stabilizes, and brake assist matches a known-good vacuum supply.',
    mistakes: 'Pressurizing with shop air; replacing seals while PCV is clogged; blaming a master cylinder for a dead booster check valve.',
    related: ['smoke-test-intake', 'master-cylinder-booster', 'trouble-rough-idle']
  }),

  proc({
    id: 'cooling-pressure-cap-combustion',
    book: 'cooling',
    system: 'Cooling diagnosis',
    title: 'Pressure-test the cooling system, cap, and combustion-gas intrusion',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['pressure test', 'radiator cap', 'combustion gas', 'head gasket'],
    difficulty: 'Intermediate',
    time: '1–3 hr',
    symptoms: 'Unexplained coolant loss, overflows, heater issues, overheating without an external leak, or suspected head-gasket failure.',
    tools: ['Cooling-system pressure tester', 'Cap tester', 'Combustion-gas tester or approved alternative', 'Infrared thermometer'],
    safety: 'Never pressure-test a hot system. Wear eye protection. Coolant and steam burn.',
    tips: 'A weak cap can look like a head gasket. Test the cap and the system separately before you commit to tearing the engine down.',
    steps: [
      'Cool the car completely. Inspect level, concentration, and visible leaks first.',
      'Pressure-test the system to the specification for that cooling package and watch where it loses pressure.',
      'Test the cap on a cap tester. Replace a weak or incorrect-pressure cap with the right rating—not a random higher number.',
      'If external leaks are absent but loss continues, perform a combustion-gas check or equivalent evidence test under controlled conditions.',
      'Correlate with compression, leak-down, oil condition, and exhaust smell before declaring a head gasket.',
      'After any repair, retest hold pressure and verify stable temperature on a road test.'
    ],
    verify: 'Cap and system hold the specified pressure, or a clear combustion-gas/external-leak result explains the loss.',
    mistakes: 'Skipping the cap test; over-pressurizing; calling every sweet smell a head gasket; using a “racing” cap that opens at the wrong pressure.',
    related: ['cooling-triage', 'head-gasket-service', 'radiator-remove-install']
  }),

  proc({
    id: 'cooling-refill-bleed',
    book: 'cooling',
    system: 'Cooling service',
    title: 'Refill and bleed the cooling system the way each chassis actually needs',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['coolant bleed', 'air lock', 'refill', 'heater'],
    difficulty: 'Foundational',
    time: '45–120 min',
    symptoms: 'After radiator, pump, hose, or heater work: rising temperature, cold heater, gurgling, or overflow.',
    tools: ['Correct coolant', 'Bleed funnel or chassis-specific bleed method', 'Infrared thermometer', 'Catch pan'],
    safety: 'Keep the engine from overheating during bleed. Never open a hot pressurized cap.',
    tips: 'Air likes to hide in the heater core. Set the heater to full hot during refill on most Miatas so the core becomes part of the flow path.',
    steps: [
      'Confirm the exact coolant type and capacity for the engine and market. Flush residue if the old fluid was contaminated.',
      'Open the bleed path specified for the chassis—funnel at the filler, bleed screw, or vacuum-fill—rather than inventing a method.',
      'Fill slowly with heater on hot and the front of the car elevated if the procedure calls for it.',
      'Run to thermostat open while watching temperature and squeezing upper/lower hoses to move pockets. Top up as level drops.',
      'Shut down, cool, recheck level, and inspect for leaks. Road-test including idle in traffic if that was the original failure mode.'
    ],
    verify: 'Temperature is stable, heater output is hot, level holds after cool-down, and no large air pocket remains.',
    mistakes: 'Burping with the heater on cold; mixing coolant chemistries; declaring the job done after one short idle without a drive cycle.',
    related: ['water-pump-thermostat', 'radiator-remove-install', 'heater-core-valve-service']
  }),

  proc({
    id: 'prht-rf-thermal-body',
    book: 'body',
    system: 'Roof / thermal interaction',
    title: 'Account for NC PRHT and ND RF thermal and body interactions during mechanical work',
    applies: ['NC', 'ND'],
    tags: ['PRHT', 'RF', 'heat', 'clearance', 'roof'],
    difficulty: 'Intermediate',
    time: '1–3 hr inspection',
    symptoms: 'Roof faults after cooling or exhaust work, water near modules after heat cycling, or panel contact when the roof moves.',
    tools: ['Inspection light', 'Thermometer', 'Scan tool for roof modules where supported', 'Soft rags for panel protection'],
    safety: 'Keep hands clear of powered roof mechanisms. Support panels per the service method. Disconnect power before intrusive roof work.',
    tips: 'Hardtops change airflow and heat soak. After radiator, header, or exhaust changes, cycle the roof and recheck clearances before the first long drive.',
    steps: [
      'Identify soft-top versus PRHT versus RF before ordering seals, drains, or motors.',
      'Inspect drains, seals, and latch switches after any job that disturbed the rear parcel, package tray, or harness routing.',
      'Cycle the roof through a full open/close and listen for binding. Stop on first pinch or motor strain.',
      'Check for exhaust or cooling heat effects on nearby plastic, wiring, and hydraulic/electric roof components.',
      'Verify window drop, interlocks, and warning messages on RF/PRHT cars after battery or cooling service.',
      'Water-test drains after mechanical work if seals or trays were moved.'
    ],
    verify: 'The roof completes a cycle without strain, drains flow, and no new heat or clearance issue appears after a drive.',
    mistakes: 'Treating PRHT like a soft top; ignoring RF interlocks after a battery disconnect; routing an aftermarket exhaust into the roof well.',
    related: ['prht-service', 'rf-roof-service', 'soft-top-drains', 'cooling-triage']
  }),

  proc({
    id: 'automatic-transmission-service',
    book: 'driveline',
    system: 'Automatic transmission',
    title: 'Service and diagnose automatic or electronically controlled Miata drivelines',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['automatic', 'AT', 'torque converter', 'shift', 'fluid'],
    difficulty: 'Advanced',
    time: '2–6 hr diagnosis/service',
    symptoms: 'Harsh shifts, flare, delayed engagement, slip, overheating AT fluid, or electronic shift complaints on equipped cars.',
    tools: ['Correct AT fluid', 'Scan tool where supported', 'Drain pan', 'Level-check method for the exact transmission'],
    safety: 'Hot AT fluid burns. Support the car securely. Do not misidentify a manual car procedure for an automatic.',
    tips: 'Many enthusiast Miatas are manuals, but automatics exist and they are not “just add any red fluid.” Use the exact fluid and level procedure for that gearbox.',
    steps: [
      'Confirm the transmission family, fluid specification, and whether the complaint is hydraulic, electronic, or engine-load related.',
      'Scan for transmission and engine codes. Record shift timing, TCC behavior, and temperature data where available.',
      'Inspect fluid condition and level using the exact hot/cold and running/stopped method for that unit.',
      'Check mounts, cooler lines, cooler flow, and external leaks before opening the pan.',
      'Service fluid and filter only with the approved method. Some units need staged fills and temperature-based level checks.',
      'Road-test shifts cold and hot. If slip persists with correct fluid and pressure evidence, plan professional internal diagnosis.'
    ],
    verify: 'Fluid spec and level are correct, shifts match expected behavior, and electronic codes are addressed—not merely cleared.',
    mistakes: 'Using manual-transmission fluid in an AT; checking level with the wrong temperature procedure; ignoring engine misfires that feel like shift flare.',
    related: ['transmission-fluid-service', 'scan-code-workflow', 'engine-mount-service']
  }),

  proc({
    id: 'lsd-torsen-identification',
    book: 'driveline',
    system: 'Differential',
    title: 'Identify open, Torsen, and clutch-type LSDs and match fluid correctly',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['Torsen', 'LSD', 'differential', 'fluid', 'fitment'],
    difficulty: 'Intermediate',
    time: '45–120 min',
    symptoms: 'Inside-wheel spin, unexpected lockup feel, chatter on tight turns, or unknown differential after a used purchase.',
    tools: ['Safe open-area test space', 'Correct differential fluid', 'Inspection light', 'Build record'],
    safety: 'Do not perform aggressive wheel-spin tests on public roads. Support the car properly for underside inspection.',
    tips: 'Torsen units want the fluid they were designed for. Friction-modifier choices that quiet a clutch LSD can be wrong for a Torsen.',
    steps: [
      'Document year, market, and option package. Some 1.8 NA/NB cars and later packages introduced Torsen or clutch LSDs that earlier cars lack.',
      'Perform a controlled traction test in a safe area: inside-wheel spin suggests open; both wheels driving with a different feel suggests LSD.',
      'Listen for chatter on parking-lot locksteer. Clutch-type LSDs can complain with the wrong fluid; Torsens usually do not chatter the same way.',
      'Inspect for aftermarket differential tags, weld marks, or prior builder notes when the car is raised.',
      'Service fluid using the exact specification for the installed differential—not a generic “gear oil.”',
      'Record the identification in the garage profile so future fluid changes stay correct.'
    ],
    verify: 'The differential type is written in the build record and the fluid matches that type’s requirements.',
    mistakes: 'Adding friction modifier to every diff; assuming every 1.8 has a Torsen; diagnosing a tire or brake drag as an open differential.',
    related: ['differential-fluid-service', 'differential-remove-seals']
  }),

  proc({
    id: 'abs-hydraulic-unit-boundary',
    book: 'chassis',
    system: 'ABS hydraulics',
    title: 'Diagnose ABS hydraulic unit faults and know when to stop',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['ABS', 'hydraulic unit', 'HCU', 'tone ring', 'bleed'],
    difficulty: 'Expert',
    time: '2–6 hr diagnosis',
    symptoms: 'ABS lamp that returns after sensor repairs, pump that runs endlessly, no ABS assist, or contaminated ABS hydraulics after a crash or botched bleed.',
    tools: ['Scan tool with ABS capability', 'Correct bleed procedure', 'Multimeter', 'Brake fluid'],
    safety: 'ABS hydraulic units and SRS share no DIY “tap it with a hammer” fixes. Incorrect bleeding can leave a soft pedal. Stop for professional service when the unit itself has failed.',
    tips: 'Most ABS lamps are sensors, tone rings, wiring, or voltage problems. Condemn the hydraulic unit only after those are proven good.',
    steps: [
      'Record codes, freeze-frame, and whether the pump runs at key-on. Note recent wheel-bearing, hub, or brake work.',
      'Verify battery voltage and grounds. Low voltage creates ghost ABS faults on many cars.',
      'Test each wheel-speed sensor and tone ring per the chassis procedure before opening hydraulic lines.',
      'Inspect the hydraulic unit connectors for corrosion or water intrusion, especially on cars with drain or convertible leaks.',
      'If a bleed is required, use the generation-correct ABS bleed sequence. Do not treat it like a simple two-person pedal bleed if the service info says otherwise.',
      'When evidence points to an internal HCU failure, document the codes and hand off for replacement/programming rather than improvising.'
    ],
    verify: 'Sensor and wiring faults are eliminated, or the handoff package clearly shows why the hydraulic unit is the remaining failure.',
    mistakes: 'Replacing the ABS unit for a cracked tone ring; bleeding only one corner; ignoring water in the connector; driving with a soft pedal after an incomplete ABS bleed.',
    related: ['abs-dsc-warning', 'abs-sensor-ring', 'brake-fluid-bleed']
  }),

  proc({
    id: 'ride-height-corner-balance',
    book: 'chassis',
    system: 'Suspension setup',
    title: 'Measure ride height and corner-balance a Miata with repeatable references',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['ride height', 'corner balance', 'coilovers', 'setup'],
    difficulty: 'Advanced',
    time: '2–6 hr',
    symptoms: 'New coilovers, uneven stance, diagonal weight bias, or preparing for autocross/HPDE setup.',
    tools: ['Ride-height gauge or tape with fixed references', 'Corner-weight scales', 'Tire gauge', 'Notebook'],
    safety: 'Confirm spring seats and lock rings are secure before driving. Check tire, brake-line, and fender clearance at full lock and compression.',
    tips: 'Corner balance after tire pressures, fuel load, and driver weight assumptions are set. Changing fuel later undoes the scale work.',
    steps: [
      'Pick fixed body reference points and measure left/right and front/rear ride height on level ground.',
      'Set tire pressures to the intended cold baseline and record fuel level and driver ballast plan.',
      'Adjust spring perches to hit the height target while preserving usable bump travel. Do not screw the car into the bump stops.',
      'Place the car on calibrated scales with the driver or ballast. Record corner weights and totals.',
      'Adjust to the target cross-weight for the use case without destroying the ride-height balance you just set.',
      'Align the car after height and balance changes. Save the full setup sheet in the garage history.'
    ],
    verify: 'Height, pressures, corner weights, and alignment values are written down and repeatable on a second measurement.',
    mistakes: 'Balancing with empty fuel then filling the tank; chasing perfect cross-weight on street tires with binding suspension; lowering until the car rides on bump stops.',
    related: ['suspension-tuning', 'alignment-baseline', 'damper-spring-topmount']
  }),

  proc({
    id: 'alignment-windows-by-use',
    book: 'chassis',
    system: 'Alignment',
    title: 'Choose OEM, street, autocross, and track alignment windows on purpose',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['alignment', 'camber', 'toe', 'caster', 'track'],
    difficulty: 'Intermediate',
    time: '1–3 hr plus shop time',
    symptoms: 'Uneven tire wear, wandering, understeer/oversteer, or switching a street car between road and event setups.',
    tools: ['Alignment printout', 'Tire wear notes', 'Ride-height record', 'Use-case definition'],
    safety: 'Inspect for worn joints before aligning. Extreme camber without clearance checks can destroy tires or inner fenders.',
    tips: 'There is no single “Miata alignment.” OEM comfort, street sport, autocross, and HPDE want different windows. Write the use case on the printout.',
    steps: [
      'Define the primary use: OEM restore, daily street, canyon, autocross, or track. Do not mix targets.',
      'Confirm tire size, wheel offset, ride height, and suspension hardware before requesting numbers.',
      'Start from a trusted baseline for that generation and use case, then adjust based on wear and driver feedback—not internet absolutism.',
      'Record before/after toe, camber, caster, and thrust angle. Photograph the printout into the build history.',
      'Recheck tire wear at 500–1000 miles or after the first event and refine one variable at a time.',
      'If the car returns to street duty after a track alignment, restore a street window before highway miles chew the tires.'
    ],
    verify: 'The alignment printout matches the stated use case, and tire wear or handling feedback confirms the direction of the change.',
    mistakes: 'Running full track camber on a daily driver; aligning over worn bushings; changing camber and toe together then guessing which helped.',
    related: ['alignment-baseline', 'ride-height-corner-balance', 'suspension-tuning']
  }),

  proc({
    id: 'brake-duct-pad-bedding',
    book: 'chassis',
    system: 'Track brakes',
    title: 'Install brake ducting and bed pads/rotors without glazing the corners',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['brake ducts', 'pad bedding', 'rotors', 'track', 'heat'],
    difficulty: 'Advanced',
    time: '3–8 hr',
    symptoms: 'Track fade, cracked rotors, glazed pads, or adding ducting for sustained sessions.',
    tools: ['Duct hose and secure mounts', 'Temperature method', 'Torque wrench', 'Compatible pads and fluid'],
    safety: 'Keep ducting clear of steering, suspension, and hot exhaust. A loose hose in a wheel well is a hazard.',
    tips: 'Bedding is a controlled heat cycle, not a single panic stop. Follow the pad maker’s bed-in script, then let the brakes cool without holding the pedal.',
    steps: [
      'Confirm pad compound, rotor condition, fluid, and tire grip before adding ducting. Ducts do not fix a soft pedal from old fluid.',
      'Route ducts to the rotor or bell as designed, with secure clamps and no steering lock interference.',
      'Install fresh or compatible pads/rotors and torque hardware. Verify hose and caliper clearance.',
      'Perform the manufacturer bedding sequence: progressive stops, cool-down laps or street cool-down, no full ABS events unless instructed.',
      'After bedding, inspect for even transfer film, cracks, and fluid boil evidence. Log temperatures if you have the tools.',
      'For events, start with conservative duct open area and pressures; adjust from data, not vibes.'
    ],
    verify: 'Pedal stays consistent through a heat cycle, pads show even bedding, ducting stays clear of moving parts, and no new vibration appears.',
    mistakes: 'Bedding on the way to the track in traffic; pointing ducts at the dust shield instead of the rotor; mixing street and race pads on one axle.',
    related: ['track-brake-thermal', 'brake-pad-rotor-service', 'brake-fluid-bleed']
  }),

  proc({
    id: 'windshield-cowl-water-path',
    book: 'body',
    system: 'Water management',
    title: 'Diagnose windshield, cowl, and scuttle water paths before replacing carpet',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['windshield', 'cowl', 'scuttle', 'water leak', 'drains'],
    difficulty: 'Intermediate',
    time: '1–3 hr',
    symptoms: 'Wet passenger footwell, damp kick panels, misting at the glass base, or leaks only in car washes.',
    tools: ['Low-pressure water', 'Trim tools', 'Inspection light', 'Dry towels', 'Seal inspection tools'],
    safety: 'Protect airbags and electronics from water. Do not high-pressure wash the cowl.',
    tips: 'Start at the highest wet point and work uphill. Carpet is the last place water arrives, not the first place it enters.',
    steps: [
      'Dry the cabin and map the wettest trim. Note whether the top was up or down during the leak.',
      'Inspect windshield perimeter, cowl panel seals, leaf screens, and scuttle drains for debris.',
      'Remove the cowl or access panels as needed to watch water while a helper applies a gentle stream to one zone at a time.',
      'Check grommets, wiring boots, and HVAC intake paths that can route water inside.',
      'Clear drains, reseal only where a replaceable seal belongs, and dry insulation completely.',
      'Retest in the same wash or rain condition that originally failed.'
    ],
    verify: 'Water exits the intended drains and the previously wet cabin area stays dry on retest.',
    mistakes: 'Silicone over a clogged cowl; replacing carpet while the windshield seal still leaks; testing every panel at once.',
    related: ['trouble-water-leak', 'soft-top-drains']
  }),

  proc({
    id: 'weatherstrip-hood-trunk',
    book: 'body',
    system: 'Seals / body',
    title: 'Replace hood, trunk, and convertible weatherstrips with correct alignment',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['weatherstrip', 'trunk seal', 'hood seal', 'wind noise', 'water'],
    difficulty: 'Intermediate',
    time: '2–5 hr',
    symptoms: 'Wind noise, trunk moisture, dust intrusion, or flattened seals that no longer contact.',
    tools: ['Plastic trim tools', 'Adhesive only if specified', 'Soapy water', 'Masking tape for alignment marks'],
    safety: 'Support the hood and trunk lids. Avoid cutting wiring in the trunk harness while prying seals.',
    tips: 'New seals often look “too tall” until the lid compresses them. Do not trim aggressively on day one—check contact with chalk or paper after install.',
    steps: [
      'Photograph the original seal routing and joint locations before removal.',
      'Remove old seals and clean channels of adhesive, rust scale, and debris. Treat surface rust before sealing over it.',
      'Install the new seal fully seated in the channel with joints at the intended locations.',
      'Close the lid or top carefully and check even contact. Adjust latch or striker only after seal seating is confirmed.',
      'Water-test and road-test for noise. Recheck after a few heat cycles as the seal takes a set.'
    ],
    verify: 'Contact is even, water stays out of the tested area, and latches still close without slamming.',
    mistakes: 'Stretching a seal to fit; sealing over rust; adjusting the latch to hide a poorly seated strip.',
    related: ['soft-top-remove-install', 'trouble-water-leak', 'rust-triage']
  }),

  proc({
    id: 'paint-trim-interior-repair',
    book: 'body',
    system: 'Paint / trim / interior',
    title: 'Repair paint, plastic, trim, and interior panels without making it worse',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['paint', 'plastic weld', 'trim', 'interior', 'fasteners'],
    difficulty: 'Intermediate',
    time: '1–8 hr depending on damage',
    symptoms: 'Stone chips, cracked bumper covers, broken clips, faded interior plastics, or rattling trim after prior work.',
    tools: ['Trim tools', 'Correct clips', 'Plastic repair materials as appropriate', 'Touch-up or refinish plan'],
    safety: 'Airbag modules and pretensioners are not trim. Stop before disturbing SRS components.',
    tips: 'Most “broken” Miata interiors are missing clips. Buy the clip assortment before you buy a whole new panel.',
    steps: [
      'Identify whether the issue is cosmetic paint, flexible bumper plastic, rigid interior plastic, or a structural metal panel.',
      'For chips, clean, treat bare metal, and apply touch-up in thin layers. For larger paint work, plan proper prep rather than brushing over oxidation.',
      'For bumper covers, decide between plastic weld/epoxy repair and replacement based on crack location and mounting tab condition.',
      'For interior panels, remove with trim tools, replace broken clips, and reinstall without forcing alignments that crack aged plastic.',
      'Keep a bag of generation-correct fasteners. Reusing one brittle clip is how rattles return.',
      'Photograph airbag covers and seat-belt towers before any interior disassembly near restraints.'
    ],
    verify: 'Panels sit flush without forced fasteners, paint repairs are sealed against bare metal, and no SRS component was disturbed casually.',
    mistakes: 'Prising airbag covers; painting over rust bloom; heat-gunning vinyl until it shiny-melts; reusing exploded push clips.',
    related: ['bumper-undertray-service', 'srs-escalation', 'door-lock-latch']
  }),

  proc({
    id: 'grounding-emi-sensor-reference',
    book: 'electrical',
    system: 'Grounds / noise',
    title: 'Troubleshoot grounding, shielding, and sensor-reference noise',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['grounds', 'EMI', 'shielding', 'sensor reference', 'noise'],
    difficulty: 'Advanced',
    time: '1–4 hr',
    symptoms: 'Erratic sensor readings, radio whine, false codes after accessory installs, or intermittent faults that move when harnesses are touched.',
    tools: ['Multimeter with voltage-drop capability', 'Wiring diagram', 'Dielectric grease sparingly', 'Star washers / ground eyelets'],
    safety: 'Disconnect the battery before major ground refurbishment. Avoid drilling into airbag, fuel, or brake lines.',
    tips: 'Sensor grounds are not audio grounds. Do not tie a wideband, ECU shield, and amplifier to one painted bolt and expect clean data.',
    steps: [
      'List the symptom and whether it started after welding, amplifier installs, coil relocation, or battery work.',
      'Voltage-drop test major battery, engine, and chassis grounds under load.',
      'Clean and resecure factory ground eyelets to bare metal. Restore any missing straps you find in photos or diagrams.',
      'Separate noisy high-current cables from sensor harnesses. Cross at right angles when they must meet.',
      'For aftermarket sensors, follow the manufacturer’s grounding and shielding instructions exactly—especially widebands and knock sensors.',
      'Retest the original fault. If codes remain, prove sensor supply/reference voltage before replacing parts.'
    ],
    verify: 'Voltage drop on primary grounds is low under load, accessory noise is reduced, and sensor data stabilizes.',
    mistakes: 'Stacking five grounds on one paint-covered bolt; cutting shields short; using the ECU case as an amplifier ground; ignoring a corroded battery negative cable.',
    related: ['aftermarket-wiring', 'charging-check', 'ecu-calibration-fi-boundary']
  }),

  proc({
    id: 'cruise-horn-steering-switches',
    book: 'electrical',
    system: 'Steering wheel / switches',
    title: 'Diagnose cruise, horn, and steering-wheel switch circuits',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['cruise control', 'horn', 'steering switches', 'clock spring'],
    difficulty: 'Advanced',
    time: '1–4 hr',
    symptoms: 'Dead horn, cruise that will not set, intermittent stalk functions, or airbag-lamp concerns after wheel work.',
    tools: ['Multimeter', 'Scan tool where supported', 'Wiring diagram', 'SRS-safe procedures'],
    safety: 'Airbag systems can injure. Disconnect and wait per the service information before removing a steering wheel or airbag module. If the airbag lamp is part of the complaint, escalate when required.',
    tips: 'A horn that dies after a steering-wheel swap is often the clock spring or a ground, not the horn button itself.',
    steps: [
      'Confirm which functions fail together: horn, cruise, radio controls, or airbag lamp. Shared failures point upstream.',
      'Check fuses, horn relay, and cruise inhibit inputs such as brake-switch and clutch-switch state.',
      'Inspect the clock spring/cable reel area only after SRS-safe power-down. Look for broken flex circuits or pinched harnesses.',
      'Test switch continuity and ground paths with the diagram for that wheel and year.',
      'Repair the proven open or short, restore SRS connectors correctly, and verify the airbag lamp cycles normally.',
      'Road-test horn and cruise only after restraint warnings are resolved.'
    ],
    verify: 'Horn and cruise operate as designed and the airbag lamp shows normal bulb-check behavior without stored critical faults.',
    mistakes: 'Pulling an airbag with the battery connected; bypassing the clock spring; blaming cruise for a brake-light switch that is stuck on.',
    related: ['srs-escalation', 'lighting-fault', 'wiper-washer-horn']
  }),

  proc({
    id: 'tips-workshop-method',
    book: 'orientation',
    system: 'Tips & tricks',
    title: 'Workshop tips that keep Miata jobs from turning into second repairs',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['tips', 'tricks', 'workshop', 'method'],
    difficulty: 'Foundational',
    time: '15 min read',
    symptoms: 'Before any significant repair, or when a job is starting to sprawl.',
    tools: ['Notebook', 'Zip bags', 'Label maker or tape', 'Phone camera'],
    safety: 'Tips do not override safety stands, fuel vapor rules, or SRS boundaries.',
    tips: 'If you cannot explain the failure mode in one sentence, you are not ready to order parts.',
    steps: [
      'Photograph every connector and bracket before it comes off. Future-you will not remember the fourth ground strap.',
      'Change one variable at a time. A new clutch, fluid, mounts, and exhaust in one weekend teaches you nothing when a vibration remains.',
      'Bag fasteners by location, not in one heroic pile. Soft-top and undertray hardware looks interchangeable until it is not.',
      'Write torque sources on the job sheet. “Internet said 80 ft-lb” is how aluminum threads die.',
      'After electrical work, do a key-on lamp check and a short drive before you put every undertray back.',
      'Stop for the day when you are guessing. Fresh eyes beat forced progress on convertible drains, timing marks, and clutch hydraulics.'
    ],
    verify: 'The job has photos, labeled hardware, a written hypothesis, and a verification test planned before reassembly.',
    mistakes: 'Parts-cannon diagnosis; skipping the retest; using impact guns for final torque on critical fasteners.',
    related: ['fitment-id', 'maintenance-baseline', 'post-repair-signoff']
  }),

  proc({
    id: 'tips-na-nb-field',
    book: 'generation',
    system: 'Tips & tricks',
    title: 'NA/NB field tips: grounds, belts, drains, and rust realities',
    applies: ['NA', 'NB'],
    tags: ['tips', 'NA', 'NB', 'rust', 'timing belt', 'grounds'],
    difficulty: 'Foundational',
    time: '20 min read',
    symptoms: 'Owning or wrenching an NA/NB and wanting the habits that prevent repeat failures.',
    tools: ['Inspection light', 'Multimeter', 'Drain tool', 'Notebook'],
    safety: 'Structural rust at lift points is a stop condition. Do not lift on metal you can compress with a screwdriver.',
    tips: 'Blocked soft-top drains create rocker rust. Clean drains on a schedule even when the carpet looks dry.',
    steps: [
      'Voltage-drop test battery cables before condemning starters and alternators. These cars punish dirty grounds.',
      'Treat timing-belt service as a front-of-engine refresh: seals, pump decision, and tension hardware belong in the same plan when oil is present.',
      'On 1.6 versus 1.8, verify clutch diameter, differential type, and brake package before ordering “NA” parts.',
      'Pop-up lamp and NB fixed-lamp lighting faults still start at grounds and connectors, not bulbs alone.',
      'Map sill, rail, and front chassis leg rust before modifying suspension or adding power.',
      'Keep a bottle of the correct brake/clutch fluid in the garage; hydraulic complaints are as common as worn discs.'
    ],
    verify: 'You have a written note on belt history, drain service, ground condition, and rust hotspots for the car.',
    mistakes: 'Assuming every NA part fits every NB; ignoring drains; lifting on thinned pinch welds.',
    related: ['timing-belt-na-nb', 'soft-top-drains', 'rust-triage', 'charging-check']
  }),

  proc({
    id: 'tips-nc-nd-field',
    book: 'generation',
    system: 'Tips & tricks',
    title: 'NC/ND field tips: voltage, networks, roofs, and scan-first habits',
    applies: ['NC', 'ND'],
    tags: ['tips', 'NC', 'ND', 'CAN', 'RF', 'PRHT', 'battery'],
    difficulty: 'Foundational',
    time: '20 min read',
    symptoms: 'Weird electrical behavior, roof warnings, or post-battery-work oddities on NC/ND.',
    tools: ['Quality battery support', 'Scan tool', 'Multimeter', 'Notebook'],
    safety: 'Do not probe CAN lines randomly. Roof mechanisms can pinch. SRS remains a professional-handoff zone.',
    tips: 'Low voltage creates cascade warnings on these cars. Charge and test the battery before replacing modules.',
    steps: [
      'Scan before parts. Network, ABS, and body faults often share a power/ground root.',
      'After a battery change, cycle windows and roofs and clear sleeping-module oddities with a controlled drive and rescan.',
      'On PRHT and RF cars, verify drains and interlocks before condemning motors.',
      'Separate ND1/ND2/ND3 and soft-top/RF before ordering engine, clutch, or ECU parts.',
      'When adding accessories, fuse at the source and keep high-current cables away from sensor harnesses.',
      'Treat transmission complaints on early ND manuals as a documented pattern check, not a fluid-and-hope exercise.'
    ],
    verify: 'Battery health, scan data, roof cycle, and generation/revision notes are recorded before major spend.',
    mistakes: 'Module swapping on a weak battery; ignoring RF messages after jump-starts; applying NA belt folklore to chain engines.',
    related: ['can-network-diagnosis', 'rf-roof-service', 'prht-service', 'battery-storage-tender']
  }),

  proc({
    id: 'tips-parts-buying',
    book: 'index',
    system: 'Tips & tricks',
    title: 'Parts-buying tips that protect the build budget',
    applies: ['NA', 'NB', 'NC', 'ND'],
    tags: ['tips', 'parts', 'budget', 'fitment', 'OEM'],
    difficulty: 'Foundational',
    time: '15 min read',
    symptoms: 'Ordering parts for a repair or modification and wanting fewer returns.',
    tools: ['VIN', 'Old part photos', 'Supplier fitment notes'],
    safety: 'Safety parts—brakes, steering, suspension, seat belts—are the wrong place to gamble on unlabeled generics.',
    tips: 'The cheapest listing is often the third repair. Pay for the correct diameter, sensor calibration, and return policy.',
    steps: [
      'Match generation, engine code, transmission, market, brake package, and body style before clicking buy.',
      'Photograph the old part number and connector shape. Compare to the replacement listing.',
      'For wear items, prefer kits that include the one-time hardware you will otherwise reuse badly: clips, seals, cotters, crush washers.',
      'For performance parts, read the companion requirements—fuel, clutch, tuning, cooling—before the shiny component arrives.',
      'Keep receipts and batch numbers in the garage history for warranty and future diagnosis.',
      'If fitment is conditional, order from a seller who understands Miatas and will accept a verified return.'
    ],
    verify: 'Every ordered part has a written fitment reason and a plan for the companion hardware it needs.',
    mistakes: 'Buying by generation nickname alone; mixing clutch and flywheel brands blindly; skipping the sensor calibration note on “universal” parts.',
    related: ['fitment-id', 'prepurchase-inspection', 'forced-induction-plan']
  })
];
