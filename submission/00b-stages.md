## The six stages

A stage is just a set of rules that the same capture screen reads: how accurate it must be, whether a photo is required, what it compares against, what it warns about. Adding a seventh stage is a row in a table, not a development project.

| Stage | What gets captured | The decision it feeds | v1 |
|---|---|---|---|
| **1 · Onboarding** | The full plot boundary, walked properly, once | The contract is written against this. Everything later sits on top of it | **Yes** |
| **2 · Sowing** | The part actually sown, marked against the saved boundary | Seed reconciliation, revised forecast, contract amendment | **Yes** |
| 3 · Germination | Healthy crop area, and roughly what share came up | Early yield forecast, and whether re-sowing is worth it | v1.1 |
| 4 · Pest or disease | The affected area only, photographed | Targeted spraying, insurance claim, revised forecast | v1.1 |
| 5 · Pre-harvest | Standing crop area and maturity | Harvest scheduling, transport and warehouse booking | v1.1 |
| **6 · Post-harvest** | Area actually harvested | Final settlement, yield per acre, farmer scoring | **Yes** |

### Why three at launch, not six

**Onboarding, sowing and post-harvest are the three where money changes hands.** The other three drive forecasting, but nobody's payment is blocked on them. Those three also give the cleanest proof in one season: contracted area at the start, actual area at the end, and the gap between them measured properly for the first time.

**The machinery is built for all six from day one**, so the rest are switched on as settings, not shipped as new software. That matters when an app update has to reach two hundred phones in villages with poor signal.

## The constraints, and what each one changed

| The constraint | What it forced |
|---|---|
| No connectivity in the field | Everything offline, and the download happens at nine at night rather than at 6:40 in the morning |
| Mid-range Android, no external GPS | Accuracy written as how much area error we can live with, worked backwards from plot size |
| Basic smartphone literacy, limited training | One capture screen for all six stages, pictures before words, spoken notes not typed ones |
| Plots from 0.5 to 10 acres, irregular | A flat accuracy number is wrong, because a small plot is almost all edge |
| Twice a month, all season | Re-walking does not fit in a day, so walk once and mark only what changed |
| 150 to 200 farmers per technician | Eleven minutes per farmer, which every other decision answers to |
| Clubs of 15 to 25, visited together | The club is a real record and the unit of a day's work |
| 10 metre imagery, every 5 to 10 days | Cannot verify a boundary. Can verify timing, and works best across a whole club |
| Multiple crops on one plot | Two areas can be marked. Three or more is tagged unusual and reviewed |

---

## What I am not building

Anything can be added to a product. Deciding what stays out is the harder part.

| Not building | Why not |
|---|---|
| **External hardware: GPS units, drones** | They cost money, get lost, need charging, and need someone who now flies a drone instead of visiting farmers |
| **Crop health analysis in the app** | The natural next thing, but a different product with a different team. The data model supports adding it later |
| **A farmer-facing app** | Different user, literacy and phone. Doubles the work, halves the focus |
| **Live sync in the field** | There is no network there. Building for one is how you get an app that only works in the demo |
| **Automatic contract amendment at launch** | The system should watch and flag for a season before it is allowed to move money |
| **Every possible field shape** | Plots with holes, plots in two pieces, three crops on one: all real, all rarer. v1 handles the common case and gives a clear way to say *this one is unusual* |
