# What I would build first, and what I would not build at all

## The plan

| | What ships | What it proves |
|---|---|---|
| **Season 1** | Onboarding, sowing and post-harvest. One district, twenty technicians, roughly four thousand farmers. Flags are recorded and reviewed, but they do not yet hold anything up | That the area gap is real, measurable and closing. And that technicians are still using it in month four |
| **Season 2** | The remaining three stages switched on as settings. Flags start holding input release. Farmer area-compliance history begins | That multi-stage capture sharpens the yield forecast, and that the flag queue can be worked without drowning anyone |
| **Season 3** | The data products: claims evidence for insurers, standing-area feeds for procurement, plot-level traceability | That the record is worth something to people who were never going to visit a farm |

**Season 1 deliberately does not let the system stop anything.** It watches, records and flags, and a person decides. A system earns the right to hold up a farmer's fertiliser by first showing a season of numbers that turned out to be right.

---

## How I would know it is working

**The number we are trying to move**
Gap between contracted and actual cultivated area, from 15 to 25% down to under 5%. Settlement disputes per hundred farmers, falling season on season.

**The numbers that must not get worse.** There is an easy way to reach 99% accuracy: make capture so thorough that technicians finish half their farms. That wins the metric and breaks the operation. So these are watched just as closely:

| Guard rail | Why |
|---|---|
| Median time per plot capture | If it creeps up, we are spending his day rather than earning it |
| Farms visited per technician per day | The whole design exists to protect this |
| Captures synced within 24 hours | If this falls, the evening sync is too painful and needs fixing, not enforcing |
| Share of captures flagged low quality | Climbing means either the thresholds are wrong or something changed in the field |

**And the one that tells the truth: are technicians still using it properly in month four?** Adoption at launch means nothing, because everyone uses a new tool for a fortnight. I would measure month four by time-per-plot and the share of captures walked rather than drawn, not by logins.

---

## What I am deliberately not building

Anything can be added to a product. Deciding what stays out is the harder half.

| Not building | Why not |
|---|---|
| **Support for proper GPS devices** | They cost money, get lost, need charging, and are one more thing to carry. Phone-only forces the design to be honest about accuracy instead of hiding behind hardware |
| **Drones** | Better data, and also a pilot, a licence, a battery and a person who now flies drones instead of visiting farmers |
| **Crop health analysis inside the app** | Genuinely valuable and the natural next thing, but it is a different product with a different team. The data model supports adding it later, and that is enough for now |
| **A farmer-facing app** | Different user, different literacy, different phone. It would double the work and halve the focus |
| **Live sync in the field** | There is no network there. Building for one is how you get an app that only works in the demo |
| **Automatic contract amendment at launch** | The system should watch and flag for a season before it is allowed to move money |
| **Every possible field shape** | Plots with holes, plots in two pieces, three crops on one plot: all real, all rarer than the basic case. v1 handles the common case properly and gives a clear way to say *this one is unusual, please look* |

---

## The three things that would actually kill this

**Technicians work around it.** The real failure is not rejection, it is quiet accommodation: he keeps using the app but starts drawing boundaries from under a tree, and the data is then wrong **and** official. This is why time per plot is measured weekly from day one, and why every screen answers to an eleven minute budget.

**The baseline turns out to be wrong.** Everything sits on the onboarding walk, so one bad capture corrupts a farmer's whole season. Mitigated by stricter onboarding rules, a supervisor spot-check on a sample in season one, and an explicit path to re-measure a farm when a boundary genuinely changes.

**The office does not act on the flags.** This is the one people miss. If a technician adds a photo, a reason and a note and nothing visibly happens, he learns that careful work goes nowhere. So the flag queue needs a named owner and a response time from the first week, and **he needs to see what happened to the ones he raised.** A field tool with no return path becomes a data-entry chore within a season.
