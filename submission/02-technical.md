# How it works underneath

*The parts that decide whether this survives contact with a real village.*

---

## 1. Working with no signal

Everything rests on one rule: **a capture is written once and never changed.** The phone only adds records. It never edits or deletes one.

That single choice removes most of what makes offline systems hard. No merging, no "who wrote last", no half-updated records. There is a queue on the phone, and the queue drains.

**How a capture gets home.** The phone gives every capture its own ID as it is made, built from the device and the time, so no network is needed and two phones can never collide. The queue sends in capture order, and nothing is deleted until the server confirms it.

**Details go first, photos follow.** A capture record is a few kilobytes; its photos are hundreds of times larger, so they upload separately afterwards, each pointing back at its capture. **A visit is therefore complete and usable the moment its details land.** If a record needed its photos to count, one weak connection would hold up the whole day. Photos upload in chunks so a dropped connection resumes rather than restarts, which on 2G is the difference between arriving and never arriving.

**If the same record arrives twice it is ignored**, because it carries an ID the server has already seen. This matters more than it sounds. The common failure is not a lost record, it is a record that arrived while the acknowledgement got lost coming back. The phone will send it again, and the server has to shrug.

**Reference data comes down the other way** (farmers, contracts, boundaries, open flags), and the phone asks only for what changed since it last asked.

**Two failures worth naming rather than hiding.**

**A lost or broken phone before the evening sync loses that day's work.** There is no clever fix for a queue on one device. It is why the evening sync is built as a nightly habit with a prompt, and why the phone shows an unmissable count of unsent work.

**The phone's clock can be wrong, and offline nothing corrects it.** So every capture stores both the phone's time and the time the server received it. If they disagree by more than a few hours, it is flagged. A wrong clock quietly corrupts the entire history of a plot and is invisible unless you look for it.

---

## 2. When two technicians capture the same plot

The brief says technicians often visit clubs together, so this is not a rare event. It is a Tuesday.

**It is not a merging problem, and treating it as one is the mistake.** With text you can sometimes merge two versions. With two shapes on a map you cannot: averaging them produces a third shape nobody walked, matching no field on earth.

So **keep both, pick neither, ask a person.** The usual shortcut is "whichever synced last wins", which really means "whoever reached WiFi first is right". That is not a rule, it is a coin toss with extra steps.

The supervisor sees both side by side with what is needed to judge them: who, when, the accuracy each phone reported, walked or drawn by hand, both sets of photos, and how far apart the shapes are. Three ways out: accept one, accept the other, send someone back.

**A second kind of clash, easier to miss.** The office amends a contract while the technician is out of signal, so his "12% short" verdict may be wrong by the time it lands. Every capture therefore records which version of the contract it was measured against. Nothing is rewritten. The comparison is recalculated on arrival, and if the verdict changed it goes to review rather than quietly correcting itself.

---

## 3. How accurate is accurate enough

**Most people get this wrong: the same GPS error is far more damaging on a small plot than a big one.** Uncertainty runs around the *edge*. Big fields are mostly middle. Small fields are almost all edge.

| Plot size | Boundary length | Uncertain band at 5 m | As a share of the plot |
|---|---|---|---|
| 0.5 acre | about 180 m | about 900 m² | **44%** |
| 2 acres | about 360 m | about 1,800 m² | **22%** |
| 10 acres | about 805 m | about 4,025 m² | **10%** |

Real error is smaller than this, because errors in different directions partly cancel. But the ratio holds, and that is the point: **the same phone on the same day is roughly four times worse on a half-acre plot than a ten-acre one.** The brief says plots run from 0.5 to 10 acres, so one flat accuracy number is wrong for most of that range. The requirement has to be written as how much area error we can live with, and the phone works backwards from plot size to decide how careful to be.

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

Checks run in two places. **On the phone, immediately, while he is still standing there**, which is the only moment a mistake is cheap to fix.

| What we look for | What happens |
|---|---|
| Sown area larger than contracted area | Hard flag, photo required, input release pauses |
| Area differs from contract by more than the band for that stage | A reason and a photo are required |
| Shape crosses itself, or the loop does not close | Redo it now |
| Shape overlaps a neighbour's plot | Flag both. Do not attempt to resolve |
| Capture is happening far from where this plot should be | Hard flag. Usually the wrong farmer was selected |
| The walk looks impossible: too fast, too few points | Flag |

**On the server, where there is context the phone does not have.**

| What we look for | Why it matters |
|---|---|
| Same plot captured twice for the same stage | Goes to the conflict queue |
| A whole day that looks too tidy: every plot exactly 100% sown, every capture four minutes apart | Not proof of anything, but worth a look |
| Area moved the wrong way between two stages | Standing crop does not grow back |
| One club far out of line with its neighbours | Either something real is happening there, or our data is wrong |

The day-pattern check is the one I would not skip. Individual captures can each look fine while the day as a whole is clearly not real work.

---

## 5. What satellite pictures can and cannot do

Being precise here is worth more than being enthusiastic.

At 10 metre imagery, one pixel covers 100 square metres. A half-acre plot is about twenty pixels in total. **So satellite imagery cannot verify a boundary.** It cannot see where the edge is, and anyone claiming otherwise at this resolution is selling something.

Here is what it genuinely does.

**It tells you whether the field is a field.** A shape sitting on a road, a rooftop or a pond is badly wrong. Catches fabrication and costs nothing to run.

**It tells you whether something is growing, and roughly when it started.** Satellites produce a greenness score which, tracked over weeks, draws a curve. This is the strongest use by a distance: if a plot is recorded as sown on 14 December but greenness does not lift until late January, either the sowing date is wrong or the crop failed.

**It shows when part of a field is doing worse than the rest.** A pest report covering 0.6 acres is roughly twenty-five pixels, enough to see a real difference if the effect is strong. Supporting evidence, not proof.

**It works far better on a whole club than one plot.** Twenty plots is a few hundred pixels. If a club reports 95% sown and half the village looks bare, that is a question worth asking, and one you could not ask from the ground without visiting twenty farms.

**The limit that decides how we use it is cloud.** Imagery refreshes every five to ten days, but in monsoon you may get one usable picture in three weeks. So satellite can never gate anything. It runs weekly on the server, produces a "worth a look" list for supervisors, and never appears in the field app. It raises questions later. It does not answer them now.

---

## 6. Overlapping claims, and areas that jump

### Two farmers claiming the same strip

First, separate two things that look identical on screen.

**An overlap smaller than the combined uncertainty of the two captures is probably not a dispute.** Two neighbouring plots each captured at 8 metre accuracy can appear to overlap by a fifth of an acre when the real boundary is one shared line and both are simply imprecise. Treating that as a land dispute manufactures conflict between two people who have to keep farming next to each other.

- **Overlap smaller than the combined uncertainty:** measurement noise. Propose one shared line, both farmers confirm it at the next visit.
- **Overlap larger than that:** a real claim conflict. Both captures kept, neither deleted, escalated to someone with authority to settle it, which may mean pulling the land record.

**The app never asks the technician which farmer is right.** That question makes a man with a smartphone the judge of a land dispute between two people who will still be neighbours in twenty years. Knowing where the app's authority stops is a design decision, not an omission.

### Areas that change dramatically between stages

A season has a natural shape, and stating it makes the checks obvious:

> Contracted area → area actually sown → area that germinated → area still standing → area harvested

**Each step should be the same or smaller than the one before.** Crops do not spread on their own, so any increase is either an error or one of three real events: he re-sowed after a failure, the earlier capture was wrong, or he took on extra land. Each is recorded as what it is rather than silently absorbed. A step of more than about 15% either way puts both shapes into the supervisor's queue with the reason and photos attached.

**When an earlier capture turns out to be wrong, we do not fix it.** We add a correction that points at it and says what was wrong and who decided so. The original stays exactly as captured. At settlement five months later an overwritten record proves nothing, while a record with a dated correction attached proves everything.

---

## 7. How the data is organised

Four things exist, and one is doing all the work.

**Farmer** belongs to a **Club**. **Club** is a real record with its own village, members and visit history, not a label on a farmer. **Plot** belongs to a farmer and has an ID that never changes for as long as that plot exists. **Capture** belongs to a plot, is written once, and is never edited.

Each capture carries: plot, stage, shape, area, when and by whom and on which device, how it was made (walked, adjusted or drawn), how good it was (accuracy, point count, walk duration, whether the loop closed), what it was compared against, flags and reason, links to its photos, voice note and signature, and which contract version was current at the time.

**We keep the raw walk as well as the finished shape**, every point with its own time and accuracy. It is the only way to tell later whether a boundary was walked or drawn with a finger, and if we improve how shapes are built from walks we can rebuild every historical boundary instead of losing them.

**Comparing across stages needs no special machinery.** Every capture sits on the same plot ID with a stage and a date, so comparison is just reading the list in order. The comparison screen is a consequence of the model, not a feature bolted on. That is the test of whether the model is right.

**What the club being real buys us.** Totals roll up for free: contracted area, sown area, percentage, number flagged, per club then village then region. A club visit is itself a record, so we know who was done and who was skipped and why.

**The messy cases, honestly.** A farmer with plots in two villages counts under his own club, which is right for managing work and wrong for agronomy, so land questions get grouped by plot location instead. Club membership is dated, so a farmer changing club mid-season does not corrupt last month's numbers. A split or merged plot becomes a new plot pointing back at the old one, and an ID is never reused.

---

## 8. Planning the month, not the day

**The routing problem is not the one it looks like.**

200 farmers visited twice a month is 300 to 400 visits, or 15 to 20 a day. That sounds like a hard daily routing problem across 200 scattered farms. It is not, because of the clubs. 200 farmers in clubs of 20 is **ten clubs**, and twice a month is **twenty club-days**, which is essentially the whole working month.

So he is not choosing between 200 farmers each morning. He is choosing which club to do, out of ten. That is a monthly calendar built once in the office, not a hard problem solved daily on a phone, and its real constraints are agronomic rather than geographic: two visits twelve to fifteen days apart, and the sowing visit landing within a few days of the village actually sowing, which the club leader can tell us in advance.

**Within a day, twenty farms sit in one village a few hundred metres apart.** Perfect ordering saves maybe ten minutes, so the app offers a sensible default and makes it take thirty seconds to change, and nothing more. That restraint matters, because route optimisation is the feature everyone builds first. Here is what actually saves time:

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

Downloaded **the night before**, not in the morning, for the reason given in the journey: at 6:40am a progress bar is something to skip, and at 9pm it is not.

| What | Rough size |
|---|---|
| Today's club and tomorrow's: farmers, contracts, plots, phone numbers | under 1 MB |
| Every saved boundary and capture for those plots | small, a few hundred points each |
| Photo thumbnails from previous visits, not full size | 1 to 2 MB |
| Open flags from last visit | negligible |
| Satellite pictures for those two villages only, at the zoom levels he uses | 15 to 20 MB |
| **Total** | **about 25 MB a night** |

*Sizes are estimates. Real tile sizes and real phone storage are the first two numbers I would check on day one, and satellite pictures are the only line that would force a rethink.* Villages are kept seven days then cleared, so about 150 MB is in use at a time.

**If something is missing when he arrives, the app degrades rather than dies.** GPS needs no network and a shape needs no map, so he can still capture. He loses the satellite background and the previous boundary, which makes the job harder but not impossible. The app says plainly what is missing and what still works.

An app that stops working because a download failed turns one bad night into one lost day for twenty farmers.
