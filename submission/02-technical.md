# How it works underneath

*The parts that decide whether this survives contact with a real village.*

---

## 1. Working with no signal

Everything rests on one rule: **a capture is written once and never changed.** The phone only adds records. It never edits or deletes one.

That single choice removes most of what makes offline systems hard. No merging, no "who wrote last", no half-updated records. There is a queue on the phone, and the queue drains.

**How a capture gets home.** The phone gives every capture its own ID as it is made, built from the device and the time, so no network is needed and two phones can never collide. The queue sends in capture order, and nothing is deleted until the server confirms.

{{fig:sync}}

**One thing about duplicates that matters more than it sounds.** The common failure here is not a lost record, it is a record that arrived while the acknowledgement got lost coming back. The phone will send it again, so the server has to ignore an ID it has already seen.

**Reference data comes down the other way** (farmers, contracts, boundaries, open flags), and the phone asks only for what changed since it last asked.

**Two failures worth naming rather than hiding.**

**A lost or broken phone before the evening sync loses that day's work.** There is no clever fix for a queue on one device. It is why the evening sync is built as a nightly habit with a prompt, and why the phone shows an unmissable count of unsent work.

**The phone's clock can be wrong, and offline nothing corrects it.** So every capture stores both the phone's time and the time the server received it. If they disagree by more than a few hours, it is flagged. A wrong clock quietly corrupts the entire history of a plot and is invisible unless you look for it.

---

## 2. When two technicians capture the same plot

The brief says technicians often visit clubs together, so this is not a rare event. It will happen most weeks.

**It is not a merging problem, and treating it as one is the mistake.** So: **keep both, pick neither, ask a person.** The usual shortcut is "whichever synced last wins", which really means "whoever reached WiFi first is right". That is not a rule, it is a coin toss with extra steps.

{{fig:conflict}}

**A second kind of clash, easier to miss.** The office amends a contract while the technician is out of signal, so his "12% short" verdict may be wrong by the time it lands. Every capture therefore records which version of the contract it was measured against. Nothing is rewritten. The comparison is recalculated on arrival, and if the verdict changed it goes to review rather than quietly correcting itself.

---

## 3. How accurate is accurate enough

**Most people get this wrong: the same GPS error is far more damaging on a small plot than a big one.**

{{fig:accuracy}}

Real error is smaller than the full band shown above, because errors in different directions partly cancel. But the ratio is what matters. So the requirement is written as how much *area* error we can live with, and the phone works backwards from the plot size to decide how careful it needs to be.

| Stage | 2 acres and above | Under 2 acres | Why |
|---|---|---|---|
| Onboarding | within 5 m | within 3 m, or walk twice | A contract is written against this |
| Sowing | within 8 m | within 5 m | Seed reconciliation, contract amendments |
| Germination, pest, pre-harvest | within 15 m | within 12 m | Spotting trends, not paying anyone |
| Post-harvest | within 5 m | within 3 m, or walk twice | Final settlement. Money again |

*Starting numbers, not settled ones. They need a season of real captures behind them before anybody's payment depends on them.*

**The accuracy figure alone is not enough, because it is only the phone's opinion of itself.** So we also check the walk: enough points and closely enough spaced; the loop closes; the shape does not cross itself; the walk took a believable time (a five-acre plot "walked" in forty seconds was not walked); the speed looks like a person, not a motorbike.

**One cheap thing that beats any threshold:** pause three to five seconds at each corner and average the readings. It cuts error at exactly the points that define the shape, and costs nothing.

**And the rule that overrides all of it: never block the capture.** He is in a field with no signal, no supervisor to call and thirteen farmers left. If the app refuses his work he learns it is an obstacle to get around. Save it, mark it weak, let the office deal with it.

---

## 4. Catching things that look wrong

{{fig:checks}}

---

## 5. What satellite pictures can and cannot do

Being precise here is worth more than being enthusiastic.

{{fig:satellite}}

So it does three useful things. It tells you **whether the field is a field**, because a shape sitting on a road or a pond is badly wrong, which catches fabrication and costs nothing to run. It tells you **when a crop actually started growing**, which is the strongest use by a distance. And it shows **when part of a field is doing worse than the rest**: a pest report covering 0.6 acres is roughly twenty-five pixels, enough to see a real difference if the effect is strong. Supporting evidence, not proof.

**The limit that decides how we use it is cloud.** Imagery refreshes every five to ten days, but in monsoon you may get one usable picture in three weeks. So satellite can never gate anything. It runs weekly on the server, produces a "worth a look" list for supervisors, and never appears in the field app. It raises questions later. It does not answer them now.

---

## 6. Overlapping claims, and sudden changes in area

### Two farmers claiming the same strip

{{fig:disputes}}

**The app never asks the technician which farmer is right.** That question makes a man with a smartphone the judge of a land dispute between two people who will still be neighbours in twenty years. Knowing where the app's authority stops is a design decision, not an omission.

### Areas that change dramatically between stages

A step of more than about 15% either way between consecutive stages puts both shapes into the supervisor's queue with the reason and photos attached, as shown on the right above.

**When an earlier capture turns out to be wrong, we do not fix it.** We add a correction that points at it and says what was wrong and who decided so. The original stays exactly as captured. At settlement five months later an overwritten record proves nothing, while a record with a dated correction attached proves everything.

---

## 7. How the data is organised

Four things exist, and one is doing all the work.

**Farmer** belongs to a **Club**. **Club** is a real record with its own village, members and visit history, not a label on a farmer. **Plot** belongs to a farmer and has an ID that never changes for as long as that plot exists. **Capture** belongs to a plot, is written once, and is never edited.

Each capture carries its plot and stage, the shape and area, when and by whom and on which device, how it was made (walked, adjusted or drawn), how good it was (accuracy, point count, walk duration, whether the loop closed), what it was compared against, its flags and reason, links to photos and voice note and signature, and which contract version was current at the time.

{{fig:datamodel}}

**We keep the raw walk as well as the finished shape**, every point with its own time and accuracy. It is the only way to tell later whether a boundary was walked or drawn with a finger, and if we improve how shapes are built from walks we can rebuild every historical boundary instead of losing them.

**What the club being real buys us.** Totals roll up for free: contracted area, sown area, percentage, number flagged, per club then village then region. A club visit is itself a record, so we know who was done and who was skipped and why.

**The messy cases, honestly.** A farmer with plots in two villages counts under his own club, which is right for managing work and wrong for agronomy, so land questions get grouped by plot location instead. Club membership is dated, so a farmer changing club mid-season does not corrupt last month's numbers. A split or merged plot becomes a new plot pointing back at the old one, and an ID is never reused.

---

## 8. Planning the month, not the day

**The routing problem is not the one it looks like.**

200 farmers visited twice a month is 300 to 400 visits, or 15 to 20 a day. That sounds like a hard daily routing problem across 200 scattered farms. It is not, because of the clubs. 200 farmers in clubs of 20 is **ten clubs**, and twice a month is **twenty club-days**, which is essentially the whole working month.

{{fig:month}}

So the app offers a sensible default order for the day and makes it take thirty seconds to change, and nothing more. That restraint matters, because route optimisation is the feature everyone builds first. Here is what actually saves time:

| What saves time | How much |
|---|---|
| Not re-walking boundaries at every visit | Hours per day |
| One tap for "he sowed all of it" | About an hour per day |
| Downloading the night before | 20 minutes, and prevents whole lost days |
| The club leader saying who is home | Several wasted walks |
| Optimising the order of the farms | About 10 minutes |

**The most obvious feature is the least valuable one on the list.**

**What the club structure genuinely buys:** one check-in at the start of the day instead of twenty; the day's common answer floated to the top of the reason picker, because when the borewells fail they fail for the whole village; and one club summary at the end of the day, which is exactly the unit his supervisor asks about.

---

## 9. What goes on the phone before he leaves

Today's club and tomorrow's, both of them: farmers, contracts, plots, phone numbers, every saved boundary and capture for those plots, open flags from last visit, photo thumbnails rather than full-size photos, and satellite pictures for those two villages only, at the zoom levels he actually uses.

{{fig:preload}}

Villages are kept seven days then cleared, so about 150 MB is in use at a time.
