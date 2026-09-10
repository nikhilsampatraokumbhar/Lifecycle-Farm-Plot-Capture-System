## The six stages, and what each one is really for

A stage is not a feature. It is a set of rules the same capture screen reads: how accurate it has to be, whether a photo is required, what it compares itself against, and what it should warn about. Adding a seventh stage is a row in a table, not a development project.

| Stage | What gets captured | The decision it feeds | Ships in v1 |
|---|---|---|---|
| **1 · Onboarding** | The full plot boundary, walked properly, once | The contract is written against this number. Everything later sits on top of it | **Yes** |
| **2 · Sowing** | The part actually sown, marked against the saved boundary | Seed reconciliation, revised forecast, whether the contract needs amending | **Yes** |
| 3 · Germination | Healthy crop area, and roughly what share came up | Early yield forecast, and whether re-sowing is worth it | v1.1 |
| 4 · Pest or disease | The affected area only, photographed | Targeted spraying, insurance claim, revised forecast | v1.1 |
| 5 · Pre-harvest | Standing crop area and maturity | Harvest scheduling, transport and warehouse booking | v1.1 |
| **6 · Post-harvest** | Area actually harvested | Final settlement, yield per acre, farmer scoring | **Yes** |

### Why three at launch, not six

**Onboarding, sowing and post-harvest are the three where money changes hands.** Onboarding writes the contract. Sowing decides seed reconciliation and whether the contract gets amended. Post-harvest decides what the farmer is paid. The other three matter, but nobody's payment is blocked on them.

Those three also give the cleanest possible proof in a single season: contracted area at the start, actual area at the end, and the gap between them measured properly for the first time. That is a number the business can feel by April.

**The machinery is built for all six from day one.** Germination, pest and pre-harvest are switched on as settings, not shipped as new software. That matters more than it sounds when an app update has to reach two hundred phones in villages with poor signal, which realistically takes a month.

---

## Five rules the design holds to

**Never block him.** Weak GPS, farmer not home, dead battery, overlapping claim: in every case the app records honestly and lets him carry on. An app that says no to a man alone in a field with thirteen farmers left is an app that gets worked around.

**Design for the boring answer.** Most farmers sow most of their field. That path is one tap and twenty-five seconds. Everything clever is for the five farmers a day who need it.

**The plan is worth less than the ability to change it.** The order set the night before is wrong by four minutes after the technician reaches the village, so the route is a suggestion he can redo in thirty seconds, not an instruction.

**Know where the app's authority stops.** It can measure a field. It cannot settle who owns it. Asking a technician to judge a boundary dispute between two neighbours is how you lose the technician.

**Say it in his units.** Sixteen farmers left, about three hours. Not 80% complete. A percentage tells him nothing he can act on.


---

## Every constraint in the brief, and what it forced

Listing them is easy. What matters is that each one changed something.

| The constraint | What it forced in the design |
|---|---|
| No connectivity in the field | Everything works offline, and the download happens at nine at night rather than twenty to seven in the morning |
| Mid-range Android, no external GPS | Accuracy standards written as how much area error we can live with, then worked backwards from plot size |
| Basic smartphone literacy, limited training | One capture screen for all six stages, pictures before words, spoken notes instead of typed ones |
| Plots from 0.5 to 10 acres, irregular shapes | A flat accuracy number is wrong across that range, because a small plot is almost all edge |
| Twice a month, per farmer, all season | Re-walking every visit does not fit in a day, so walk once and mark only what changed |
| 150 to 200 farmers per technician | Eleven minutes per farmer, which is the number every other decision answers to |
| Clubs of 15 to 25, visited together | The club is a real record and the unit of a day's work, not a label on a farmer |
| 10 metre imagery, every 5 to 10 days | Cannot verify a boundary. Can verify timing, and works far better across a whole club than one plot |
| Multiple crops on one plot | Two areas can be marked. Three or more is tagged unusual and reviewed, rather than badly automated |

---

## And what I still do not know

Listed rather than guessed at. Each one could change a decision in here.

1. What accuracy these phones actually reach in these villages. Every threshold rests on assumed numbers.
2. How large the map files really are for one village, and how much free storage a technician's phone really has.
3. How often the farmer is actually present when the technician arrives. If it is 40%, the signature step needs rethinking.
4. Whether 5% and 20% are the right flag thresholds. I made them up. They need a season of real captures.
5. What happens today when contracted and actual area disagree, and who currently decides. I would design around the existing process before proposing a new one.
6. What a technician's day really looks like. My model comes from the brief's numbers, not from watching anyone. I would spend two days walking with one before locking any of this.
