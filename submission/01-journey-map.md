# A day with Ramesh

*Sowing visit · Bhagwati Club, Ambegaon village · 20 farmers, no signal all day*

{{fig:the-day}}

---

## Six moments that matter

### 1 · 9:10 pm the night before. The download.

The app asks one thing while he is at home with his phone charging: *tomorrow is Bhagwati Club, 20 farmers, download now?* One tap, four minutes, done while he eats.

**Why not the morning?** At 6:40 in the morning he wants to be on his bike, and a progress bar is something he will skip. At 9pm he has nothing else to do. Same download, completely different chance of it happening. **If this did not happen, nothing else in this document matters**, so a missed download shows as a red screen in the morning, not a warning.

In the morning he gets one line, not a checklist: **Ready. 20 farmers. Everything downloaded.**

### 2 · 7:34 am. The plan is already wrong.

Two minutes with Sarpanch Patil, who runs the club: three farmers have gone to the market, one has not sown at all, one has had a death in the family.

He taps the three who are away. They drop to the bottom, the order reshuffles, thirty seconds.

**I originally designed a clever route planner here and cut it.** The plan made at 9pm survives about four minutes of contact with the village. What he needs is not a better plan, it is **a plan that is cheap to change**. The club leader already knows who is home, so the app should ask him rather than out-guess him.

### 3 · 7:43 am. One question, usually one tap.

Suresh Jadhav. Contract 2.4 acres, cotton, boundary walked on 12 November. The app asks him one thing, in words, big:

> **Has Suresh sown the whole field?**   ·   **[ Yes, all of it ]**   **[ No, only part ]**

Yes is one tap. Confirmed, saved, **twenty-five seconds**, no map and no walking.

**This matters more than it looks.** Most farmers sow most of their field. If the common answer takes twenty-five seconds the day works; if it takes four minutes the day does not exist. Everything clever in this app is for the five farmers a day who need it. **Design for the boring answer.**

### 4 · 7:46 am. He walks 92 metres, not 380.

Suresh's answer is no. The eastern strip is dry, the borewell did not recharge in December.

The outer boundary was walked in November and has not moved, so he does not re-walk it. He walks **only the line between sown and unsown**, and the app closes the shape against the boundary it already holds. Ninety seconds instead of eight minutes.

One number stays large on screen as he walks: **1.8 acres sown, of 2.4 contracted, 75%**.

He is not doing arithmetic next week in an office. He knows now, standing in the field, with Suresh next to him. That turns *"we will let you know"* into *"you have sown three quarters, Suresh, what happened to the east side?"*

The gap is over 20%, so the app asks for a reason. Six icons, one tap: **no water**. Two photos, which carry their own time and place. Then he holds a button and says eight seconds of Marathi, because typing that sentence in the sun with a farmer waiting takes two minutes and would happen exactly once.

### 5 · 7:52 am. The farmer signs.

Suresh sees his own field, the shape and the number, in Marathi. He signs with his finger. A photo of him standing at his plot.

**Sixty seconds, and here is what it buys.** The dispute does not happen today. It happens five months from now at settlement, with money on the table, when Suresh says that was never my land, and it is his word against a technician who has since visited four hundred farms. You lose that argument every time.

The quieter effect is probably the bigger one: **if the farmer is watching, the capture cannot be faked.** That does more for honest data than any check I could build in software.

Saved. *19 farmers left, about 3 hours.* **Total for a difficult farmer: 3 minutes 40 seconds.**

### 6 · 8:34 pm. Sending the day.

Twenty captures, one tap. **Details go first, photos follow**, because photos are large and if a record needed its photos to count, one weak connection would hold up all twenty. *18 sent. 2 waiting for a better connection. Nothing is lost.*

Then, while he still remembers: **3 need a note from you before the office can act.** Suresh's dry strip, the overlap at farmer 12, the over-planted plot at farmer 9. He writes them tonight, not next week, when the day has blurred into the other nineteen.

And finally: *Tomorrow is Shivneri Club, 22 farmers. Download now?* The loop closes.

---

## Moving between twenty farmers

The brief calls this a club visit, and the app should treat it as one thing rather than twenty unrelated ones.

**Saving a farmer opens the next one.** He never returns to a home screen between captures. Twenty round trips through a menu is four or five minutes of the day spent navigating.

**Flagged farmers come early in the order.** Anything carried over from last visit, or any plot the office has queried, is scheduled while there is still daylight and patience left, not at farm nineteen.

**The day's common answer floats to the top.** When the borewells fail they fail for the whole village, so once three farmers have said *no water*, that becomes the first option in the picker rather than the fourth.

**Progress is counted in farmers and hours, never percentages.** *16 farmers left, about 3 hours* tells him whether to speed up. A progress bar tells him nothing he can act on.

**And the day ends with one number he can report.** *Bhagwati Club: 17 of 20 done, 81% of contracted area sown, 4 flagged.* That is exactly the unit his supervisor asks about, so he does not have to assemble it himself from twenty separate visits.

---

## When it goes wrong, which is five or six times a day

| What happens | What the app does | The rule behind it |
|---|---|---|
| Farmer is at the market | Captures anyway, defers his confirmation. The club leader can witness instead | A missing person must never cost us the capture |
| GPS weak at 14 m under a tree line | Saves it, marks it weak, tells him the office will check | Never block a man alone in a field with no signal |
| Sown area is larger than the contract | Hard flag, photo required, input release pauses | The app records. It does not decide |
| Plot overlaps the neighbour's | Both saved, neither deleted, sent to a supervisor | The app never judges a land dispute |
| Battery at 18%, five farmers left | Satellite off, GPS checked less often. *"5 farmers left, about 25 minutes"* | Tell him in the only unit he thinks in |
| Two crops on one plot | Mark two areas. Three or more, tap *this one is unusual* | A good escape hatch beats a bad automatic answer |
| He mis-walks a corner | Undo the last point, or start again. Both one tap, both always visible | Mistakes are normal at farm 14 of 20 |
| The app dies mid-walk | Every point is written as it is taken. Reopening asks *carry on with Anita's plot?* | Mid-range phones die. Losing his work must not follow |

---

## What this told me

**The most important moment of a field day is not in the field.** It is the download the night before, and everything else rests on it.

**Design for the boring answer.** Most farmers sow most of their field, and that path has to be twenty-five seconds.

**The plan is worth less than the ability to change it.** Any minute spent making the route smarter is worth less than a second spent making it easier to redo.

**Never block him.** Weak GPS, missing farmer, dead battery, overlapping claim: in every case the app records honestly and lets him carry on. An app that says no, to a man alone in a field with thirteen farmers left, is an app that gets worked around. And a worked-around app produces data that is confidently wrong, which is worse than no data at all.

**Know where the app's authority ends.** It can measure a field. It cannot settle who owns it. Confusing those two is how a technician gets blamed for a land dispute, and how you lose him.
