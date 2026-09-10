# How it works underneath

*The parts that decide whether this survives contact with a real village.*

---

## 1. Working with no signal

Everything rests on one rule: **a capture is written once and never changed.** That removes most of what makes offline systems hard: no merging, no "who wrote last", no half-updated records. Every capture gets its own ID as it is made, so two phones can never collide, and nothing is deleted until the server confirms.

{{fig:sync}}

**On duplicates.** The common failure is not a lost record, it is a record that arrived while the acknowledgement got lost coming back. The phone sends it again, so the server has to ignore an ID it has already seen.

**Two failures worth naming rather than hiding.** A lost phone before the evening sync loses that day's work, which is why the sync is built as a nightly habit with a prompt. And the phone's clock can be wrong with nothing offline to correct it, so every capture stores both the phone's time and the server's. A wrong clock corrupts a plot's whole history invisibly.

---

## 2. When two technicians capture the same plot

The brief says technicians often visit clubs together, so this happens most weeks.

**It is not a merging problem, and treating it as one is the mistake.** So: **keep both, pick neither, ask a person.** The usual shortcut is "whichever synced last wins", which really means "whoever reached WiFi first is right".

{{fig:conflict}}

**A second clash, easier to miss.** The office amends a contract while he is out of signal, so his "12% short" verdict may be wrong by the time it lands. Every capture records which contract version it was measured against, and a changed verdict goes to review rather than quietly correcting itself.

---

## 3. How accurate is accurate enough

**Most people get this wrong: the same GPS error is far more damaging on a small plot than a big one.**

{{fig:accuracy}}

Real error is smaller than the full band shown, because errors in different directions partly cancel, but the ratio is what matters. So the requirement is written as how much *area* error we can live with, and the phone works backwards from plot size.

| Stage | 2 acres and above | Under 2 acres | Why |
|---|---|---|---|
| Onboarding | within 5 m | within 3 m, or walk twice | A contract is written against this |
| Sowing | within 8 m | within 5 m | Seed reconciliation, contract amendments |
| Germination, pest, pre-harvest | within 15 m | within 12 m | Spotting trends, not paying anyone |
| Post-harvest | within 5 m | within 3 m, or walk twice | Final settlement. Money again |

*Starting numbers, not settled ones. They need a season of real captures before anybody's payment depends on them.*

**The accuracy figure alone is not enough, because it is only the phone's opinion of itself.** So we also check the walk: enough points, the loop closes, the shape does not cross itself, and the time taken is believable. A five-acre plot "walked" in forty seconds was not walked.

**And the rule that overrides all of it: never block the capture.** If the app refuses his work he learns it is an obstacle to get around. Save it, mark it weak, let the office deal with it.

---

## 4. Catching things that look wrong

{{fig:checks}}

---

## 5. What satellite pictures can and cannot do

Being precise here is worth more than being enthusiastic.

{{fig:satellite}}

So it does three things. It tells you **whether the field is a field**, which catches fabrication and costs nothing. It tells you **when a crop actually started growing**, the strongest use by a distance. And it shows **when part of a field is doing worse than the rest**, as supporting evidence rather than proof.

**The limit that decides how we use it is cloud.** Imagery refreshes every five to ten days, but in monsoon you may get one usable picture in three weeks. So it never gates anything. It runs weekly on the server, produces a "worth a look" list, and never appears in the field app.

---

## 6. Overlapping claims, and sudden changes in area

{{fig:disputes}}

**The app never asks the technician which farmer is right.** That question makes a man with a smartphone the judge of a land dispute between two people who will still be neighbours in twenty years. Knowing where the app's authority stops is a design decision, not an omission.

**And when an earlier capture turns out to be wrong, we do not fix it.** We add a correction that points at it and says what was wrong and who decided so. At settlement five months later, an overwritten record proves nothing while a record with a dated correction proves everything.

---

## 7. How the data is organised

**Farmer** belongs to a **Club**, which is a real record with its own village, members and visit history. **Plot** belongs to a farmer and has an ID that never changes. **Capture** belongs to a plot, is written once, and is never edited.

{{fig:datamodel}}

Each capture carries its plot and stage, the shape and area, when and by whom and on which device, how it was made and how good it was, its flags and reason, its photos and signature, and which contract version was current.

**We keep the raw walk as well as the finished shape.** It is the only way to tell later whether a boundary was walked or drawn with a finger.

**What the club being real buys us.** Totals roll up for free, per club then village then region, and a club visit is itself a record, so we know who was skipped and why. A farmer with plots in two villages counts under his own club, which is right for managing work and wrong for agronomy, so land questions group by plot location instead.

---

## 8. Planning the month, not the day

**The routing problem is not the one it looks like.** 200 farmers twice a month is 15 to 20 visits a day, which sounds like a hard daily route across 200 scattered farms. It is not, because of the clubs: 200 farmers in clubs of 20 is **ten clubs**, and twice a month is **twenty club-days**, which is the whole working month.

{{fig:month}}

So the app offers a sensible default order and makes it take thirty seconds to change, and nothing more. That restraint matters, because route optimisation is the feature everyone builds first:

| What saves time | How much |
|---|---|
| Not re-walking boundaries at every visit | Hours per day |
| One tap for "he sowed all of it" | About an hour per day |
| Downloading the night before | 20 minutes, and prevents whole lost days |
| The club leader saying who is home | Several wasted walks |
| Optimising the order of the farms | About 10 minutes |

**The most obvious feature is the least valuable one on the list.**

---

## 9. What goes on the phone before he leaves

Today's club and tomorrow's: farmers, contracts, plots, every saved boundary and capture, open flags, photo thumbnails, and satellite pictures for those two villages only.

{{fig:preload}}

*Sizes are estimates. Real tile sizes and phone storage are the first two numbers I would check on day one.* Villages are kept seven days then cleared, so about 150 MB is in use at a time.
