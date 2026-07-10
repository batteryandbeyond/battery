---
title: 'Dry Electrode Processing: PTFE Fibrillation, Process Engineering, and Industry Adoption (2026)'
date: 2026-07-10T08:17
category:
  - General
summary: A technical deep dive into dry electrode manufacturing — PTFE fibrillation physics, wet vs. dry process comparison, and where Tesla, LG Energy Solution, Samsung SDI, SK On, Panasonic, CATL, and BYD stand in 2026.
image: ''
---

# Dry Electrode Processing for Lithium-Ion Batteries

Dry electrode processing is the most consequential manufacturing shift in lithium-ion cell production since roll-to-roll slurry coating became the industry standard. It eliminates solvent from electrode fabrication, replacing slurry-based coating with a solvent-free powder-to-film manufacturing process built on mechanical binder fibrillation. As of 2026, it has evolved from a Tesla-led manufacturing approach into an industry-wide area of development, with most major cell manufacturers pursuing pilot programs, evaluation projects, or process research.

This article breaks down what dry electrode processing actually is, the physics that make it work, how it compares mechanically to conventional wet coating, and exactly where each major manufacturer stands today.

## What Is Dry Electrode Processing?

In conventional ("wet") electrode manufacturing, active material powder, conductive carbon, and a polymer binder are mixed into a liquid slurry — NMP solvent for cathodes, water for anodes — cast onto metal foil, and passed through a long multi-zone oven to evaporate the solvent before calendering.

Dry electrode processing eliminates the liquid phase, making it a genuinely solvent-free electrode manufacturing method. Active material, conductive additive, and a PTFE-based binder are blended as dry powders, then mechanically processed under controlled shear until the PTFE binder fibrillates into a fibrous network strong enough to hold the powder together as a free-standing, self-supporting film — without any solvent, casting, or oven drying step.

## The Two Process Flows, Step by Step

**Wet route (conventional):** Powders → Slurry Mixing → Coating (slurry cast onto foil) → Solvent Drying (oven) → Calendering

**Dry route (emerging):** Powders → High-Shear Dry Mixing → PTFE Fibrillation (film formation) → Film Lamination (heated rollers, onto foil) → Calendering

The infographic below![](/images/drywet%20electrode.png)

 summarizes the full wet-vs-dry comparison covered in this article — process flow, binder cohesion physics, and where each major manufacturer currently stands.

The critical distinction is at the film-formation stage. In the wet route, the film only becomes solid once the solvent evaporates during oven drying — the coating is liquid right up until that point. In the dry route, the film is already a solid, cohesive, free-standing sheet _before_ it ever touches the current collector foil. It is then laminated onto the foil under heat and pressure, not cast as a liquid.

This is a common point of confusion worth stating precisely: dry electrode processing does not involve powder being sprayed, dusted, or poured directly onto a moving foil web. By the time the electrode material contacts the foil, it has already been consolidated into a solid film through fibrillation.

## The Physics: What "Fibrillation" Actually Means

PTFE (polytetrafluoroethylene) behaves differently under mechanical shear than most polymers. Rather than melting or dissolving, sufficient shear and extensional deformation induce PTFE fibrillation, producing a network of microscopic fibrils — thin, thread-like strands that physically enmesh the surrounding active material and conductive carbon particles, similar in concept to how fiberglass strands reinforce a resin matrix, except here the "resin" is absent entirely. The particles are held together by mechanical interlocking of these fibrils, not by adhesive film formation.

This is the fundamental cohesion difference between the two processes:

**Wet processing (binder in solution):** binder dissolves in solvent → forms a continuous film as solvent evaporates during drying → capillary forces during drying pull particles into contact → adhesion occurs through the binder film itself, including adhesion to the current collector.

**Dry processing (binder fibrillation):** binder fibrillates under mixing and shear → particles rearrange under compaction → the fibril network creates mechanical interlocking between particles → adhesion to the current collector is achieved primarily through mechanical interlocking generated during lamination, although local binder contact and surface interactions also contribute depending on the process.

This matters beyond terminology. It changes what actually controls electrode quality. In wet processing, drying rate, binder solubility, and capillary migration during evaporation are the dominant process variables — get the drying profile wrong and binder migrates to the coating surface, causing non-uniform conductivity. In dry processing, the dominant variables are shear energy input, fibrillation uniformity, and calendering pressure profile. It is not "wet processing minus the oven" — particle mechanics, powder engineering, and solid-state process mechanics become the dominant process-control disciplines instead of slurry rheology and solvent evaporation, with different failure modes and different process control levers.

## Why the Industry Is Pursuing It

- **Eliminates solvent drying** — removes one of the most energy-intensive unit operations in electrode production
- **Reduces manufacturing energy demand** — no oven means substantially lower energy use and associated emissions
- **Simplifies solvent handling and recovery** — NMP-based cathode lines require solvent storage, distillation, and recovery infrastructure for cost and environmental compliance; dry processing removes this system entirely
- **Enables higher active-material loading** — wet coatings are constrained by drying-rate limits (coat too thick and binder migration or cracking risk rises during oven drying); dry processing substantially relaxes these drying-related thickness limitations, enabling higher-loading electrodes when powder packing, fibrillation, and lamination are properly controlled, which improves the active-material-to-inert-mass ratio, a direct lever on energy density
- **Potentially smaller factory footprint** — fewer unit operations and no oven infrastructure simplifies the line and reduces both capital cost and floor space, though the precise footprint reduction varies significantly by manufacturer and line design and shouldn't be treated as a fixed industry-wide figure

## Why Cathode Dry-Coating Took Years Longer Than Anode

Anode dry-coating (graphite-based) reached production maturity faster than cathode. Graphite-based anodes generally tolerate PTFE fibrillation and densification more readily than brittle oxide cathodes. Cathode active material — NMC, NCA, or LFP — is harder, more brittle, and more chemically reactive at the particle surface, and early cathode dry-coating trials showed three characteristic failure modes:

1. **Film cracking under compression** — brittle particle-to-particle contacts fracture rather than deform under roll pressure, initiating microcracks that propagate during calendering
2. **Delamination at winding speed** — insufficient fibrillation leaves weak film cohesion, and the tensile stress of high-speed winding pulls the film apart from the foil
3. **Pinholing from incomplete PTFE fibrillation** — uneven shear energy input during dry mixing leaves some regions without a continuous fibril network, creating local non-uniformity in porosity, electronic pathways, and mechanical integrity

Early reports indicated very low manufacturing yields during Tesla's cathode dry-coating development, well below the sub-2% reject rates typical of mature wet-coating lines. Closing that gap took roughly eight years from Tesla's 2019 acquisition of Maxwell Technologies to what public reporting describes as full dual-electrode dry production. Maxwell originally developed dry-electrode manufacturing for ultracapacitor electrodes, providing the technological foundation that was later adapted for lithium-ion battery production. What changed over those years was overwhelmingly process control — shear uniformity in mixing, multi-pass roll compression staging instead of single-step consolidation, and a narrower, better-controlled lamination pressure/temperature window — not the underlying active material chemistry.

## Industrial Adoption Landscape (2026)

Development status varies significantly by manufacturer, electrode chemistry, and production line, and evolves quickly. As of mid-2026:

**Commercial deployment (dry route):** Tesla has publicly stated it is running full dual-electrode (anode and cathode) dry processing for the 4680 cell at Gigafactory Texas, with public reporting indicating significant improvements in manufacturing yield as the process has matured since trial production reportedly began in 2024. Industry reports suggest Gigafactory Berlin has run a partial configuration (dry cathode, wet anode) on Model Y lines, with full dual-dry production reportedly still catching up to Austin's maturity. These figures come from public statements and industry reporting rather than independently audited production data.

**Pilot and scale-up stage:** LG Energy Solution has completed a pilot line at its Ochang plant in Korea and is targeting dry-process LFP mass production in the 2028–2029 timeframe, aiming to close the cost gap with Chinese LFP manufacturers. Samsung SDI and SK On are each operating pilot lines and coordinating mass production timing. Panasonic is operating a dry electrode pilot line for 4680-format cells at its Wakayama facility in Japan. CATL is reviewing application of dry-process technology to large-format cells, a step behind active piloting.

**Evaluation / early development:** BYD is reported to be considering dry electrode processing specifically for solid-state battery applications — an earlier stage than the active pilot lines above, and worth distinguishing rather than grouping together.

**Technology developers and enablers:** AM Batteries, a Massachusetts-based startup backed by Toyota Ventures and Porsche Ventures, has shipped pilot-line electrode film samples to at least one major cell manufacturer and is developing dry-coating equipment and process know-how for sale to other battery producers, targeting full production capability around 2026.

## Engineering Trade-Offs: Wet vs. Dry Solvent-Free Electrode Manufacturing

![](20260710-084316.png)

Neither route is universally superior — the right choice depends on target chemistry, cell format, production scale, and how much process-control risk a manufacturer is willing to absorb during ramp-up.

## Remaining Engineering Challenges

**Wet processing** still carries solvent recovery infrastructure cost, high drying energy consumption, binder migration and non-uniformity risk during drying, long oven line footprint, and solvent emissions/environmental compliance burden.

**Dry processing** still faces open challenges in powder flowability and handling at production speed, fibrillation consistency across a continuous feed (rather than batch-to-batch), uniform powder deposition at high throughput, dust generation, powder containment, explosion mitigation, and industrial hygiene, adhesion reliability to current collector foil (particularly aluminum), edge quality, particle loss, and defect formation during slitting of thick dry electrodes, and scale-up to high-throughput, high-yield continuous processing.

## Active Research Directions

Current R&D effort in dry electrode processing is concentrated in a few areas: alternative dry binder systems, including PTFE-free and hybrid chemistries (motivated partly by PTFE's persistence as a "forever chemical" under increasing regulatory scrutiny); deeper mechanistic understanding of fibrillation and its process windows; high-speed dry deposition and lamination equipment; thick, high-loading electrode architectures for energy density gains; interface engineering for stronger adhesion and long-term cycling stability; in-line process monitoring and metrology for quality control; machine-learning-assisted process monitoring and control for fibrillation consistency and continuous manufacturing; optimization of PTFE binder loading to balance cohesion, electronic conductivity, electrode density, and long-term cycle life; and continuous-processing scale-up more broadly. Powder engineering, binder chemistry, equipment design, process control, and material-process co-optimization are the key enabling disciplines cited across the industry's public roadmaps.

## The Bottom Line

Dry electrode processing is not "wet processing without the solvent" — it's a mechanically distinct manufacturing approach where particle mechanics, binder fibrillation, and powder engineering replace slurry rheology and solvent drying as the dominant process variables. The physics has been understood since Maxwell's original ultracapacitor dry-coating process; what took the better part of a decade to solve was industrializing it — shear uniformity, multi-pass calendering, and lamination process windows at production line speed. That's the honest scope of the engineering problem for any manufacturer now entering this race, and it's why timelines across the industry, from Tesla's already-running lines to LG's 2028–2029 target, span such a wide range despite everyone chasing the same underlying mechanism.

## References and Further Reading

- Tesla Battery Day (September 2020) — original public disclosure of dry electrode ambitions
- Tesla's acquisition of Maxwell Technologies (May 2019)
- LG Energy Solution, ["LG Energy Solution Unlocks New Value for Customers with Cutting-Edge Dry Electrode Process"](https://news.lgensol.com/company-news/supplementary-stories/4168/), and ["A Better Life with Batteries: The Dry Electrode Process"](https://inside.lgensol.com/en/2026/06/a-better-life-with-batteries-the-dry-electrode-process-electrodes-without-drying/)
- Seoul Economic Daily, ["Dry Electrode Race Heats Up as Battery Makers Vie for Patents"](https://en.sedaily.com/finance/2026/04/27/dry-electrode-race-heats-up-as-battery-makers-vie-for) — coverage of Samsung SDI, SK On, Panasonic, CATL, and BYD program status
- BigGo Finance, ["LG Energy Solution to Mass-Produce Dry Electrode LFP Batteries by 2029"](https://finance.biggo.com/news/0eptzp0B-PfaobXfMv4J)
- Benchmark Minerals, ["Revolutionising Battery Production: How Dry Electrode Manufacturing Promises to Cut Costs"](https://source.benchmarkminerals.com/article/revolutionising-battery-production-how-dry-electrode-manufacturing-promises-to-cut-costs) — AM Batteries program details
- Peer-reviewed and industry literature on PTFE fibrillation mechanics in dry electrode processing
- U.S. Department of Energy / Argonne National Laboratory battery manufacturing reports
- Relevant papers from _Nature Energy_, _Joule_, _Advanced Energy Materials_, and the _Journal of Power Sources_ on dry electrode processing and PTFE binder systems
- Key dry-electrode patents filed by Tesla, LG Energy Solution, and Maxwell Technologies

_This article synthesizes publicly available industry reporting and company statements as of mid-2026. Manufacturing yield figures, timelines, and production status are based on public disclosures_
