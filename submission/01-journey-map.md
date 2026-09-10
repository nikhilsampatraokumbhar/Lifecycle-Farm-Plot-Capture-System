# A day with Ramesh

### Sowing visit — Bhagwati Club, Ambegaon village — 20 farmers, no signal all day

*This is the journey the brief asks for. I've written it as one real day rather than as a diagram, because the interesting parts are the small frictions, and diagrams hide those.*

---

## The shape of the day

| Time | What's happening | Signal? |
|---|---|---|
| **Last night, 9:10 PM** | Phone downloads tomorrow | WiFi at home |
| 6:40 AM | Leaves home | — |
| 7:30 AM | Reaches Ambegaon, meets club leader | **None** |
| 7:45 AM – 12:15 PM | Farmers 1–12 | **None** |
| 12:15 – 1:00 PM | Rest. It's 38°C. | **None** |
| 1:00 – 4:40 PM | Farmers 13–20 | **None** |
| 5:30 PM | Home | Mobile data |
| 8:30 PM | Evening sync, and tomorrow's download | WiFi |

**The budget he's working inside:** ~6 hours of usable field time, minus roughly 2 hours of walking between farms, leaves about **11 minutes per farmer** — and that includes greeting him, asking after his family, the capture, and getting to the next field. The capture itself has to fit in **three minutes.** Every decision below is downstream of that number.

---

## Phase 1 — Last night, 9:10 PM (this is the important one)

He's at home. Phone is charging. The app pushes a quiet notification:

> **Tomorrow: Bhagwati Club, Ambegaon. 20 farmers. Download now?**

One tap. It downloads while he eats.

**Why the night before, and not the morning?**

Because at 6:40 AM he wants to be on his bike, and a progress bar is something to be skipped. At 9 PM he's sitting down with nothing to do and a good connection. Same download, entirely different chance of it actually happening.

This is the single highest-leverage decision in the whole day. Everything that follows — the whole offline day — works only if this one thing happened. So it gets a notification, a badge on the app icon, and a red banner in the morning if it didn't.

**What lands on the phone:** all 20 farmers, their contracts, the boundary walked at onboarding, everything captured since, any open flags from last visit, satellite pictures for Ambegaon only, and tomorrow's club as a spare.

**In the morning he opens the app and sees one line:**

> **Ready. 20 farmers. Everything downloaded.**

That's all he needs. Not a checklist — a verdict.

**If he skipped it:** a red screen, not a warning. *"You have not downloaded today. You will not be able to work in Ambegaon."* With a button to do it now over mobile data, and an honest estimate of how long that will take.

---

## Phase 2 — 7:30 AM, arriving at the club

He meets Sarpanch Patil, who runs the club. Two minutes of conversation, and the day he planned last night is already wrong:

- Three farmers have gone to the weekly market
- One hasn't sown at all yet — waiting for water
- One had a death in the family

**So the club screen's most important feature is not the route. It's being able to fix the plan in thirty seconds.**

Tap the three absent farmers → *Not available today.* They drop to the bottom and get flagged for the next visit. The order re-shuffles. Done.

**What I learned writing this:** I originally designed a clever route-planning screen. It's nearly useless. The plan made at 9 PM survives about four minutes of contact with the village. What the technician needs isn't a better plan — it's a plan that's **cheap to change.** So the route is a suggestion he can drag, not an instruction he has to follow.

The club leader also turns out to be the most useful person in the system — he knows who's home, who's sown, who's in trouble. Worth designing around rather than ignoring.

---

## Phase 3 — Farmer 1. The loop that repeats 20 times.

**Suresh Jadhav. Contract: 2.4 acres. Cotton. Boundary walked 12 November.**

He opens Suresh's card and sees the plot's whole life so far in one strip:

> **Onboarding** ✓ 2.4 acres · 12 Nov
> **Sowing** — today

Then the app asks him one question, in words, big:

> ### Has Suresh sown the whole field?
> **[ Yes, all of it ]**  **[ No, only part ]**

**If yes:** one tap. Confirmed, saved, done. **Twenty-five seconds.**

This matters more than it looks. Most farmers sow most of their field. If the common case takes twenty-five seconds, the day works. If the common case takes four minutes, the day doesn't exist. **Design for the boring answer.**

**Suresh's answer is no.** The eastern strip is dry — the borewell didn't recharge.

### Marking what changed

The field's outer boundary is already on the phone — walked in November, and it hasn't moved. So he doesn't re-walk it. He walks **only the line between sown and unsown** — about 90 metres instead of 380.

He taps *Start walking*, walks the dividing line, taps *Done*. The app closes the shape against the boundary it already knows.

**Ninety seconds instead of eight minutes.** This is the mechanic the whole product rests on: *you only ever walk the new edge.*

As he walks, one number stays large on screen:

> **1.8 acres sown**
> *of 2.4 contracted — 75%*

He's not doing arithmetic later. He knows now, standing in the field, with the farmer next to him. That changes the conversation from *"we'll let you know"* to *"you've sown three-quarters, Suresh — what happened to the east side?"*

### The gap is 25%, so the app pushes back

> **This is a big difference.**
> Add a photo and tell us why.

Not an error. Not a block. A request, with a reason.

Reason is a picker — icons and words, six options: **no water · no seed · land dispute · kept for another crop · no labour · something else.** He taps *no water*. Two seconds.

Two photos. They carry their own location and time, so nobody has to trust anybody later.

Then he holds a button and says, in Marathi: *"Borewell failed in December, he says he'll sow if it rains by the 20th."* Eight seconds.

**Not typed.** Typing that sentence, on a phone, in the sun, with a farmer waiting, takes two minutes and won't happen twice. It'll happen once, on the first day, and never again.

### Suresh confirms it himself

The screen turns to face him. His field, the shape, the number — in Marathi:

> **तुमच्या शेतातील 1.8 एकर पेरणी झाली आहे**
> *(1.8 acres of your field have been sown)*
> Contract: 2.4 acres

He signs with his finger. A photo of him at his plot.

**Sixty seconds. Here's what it buys:**

The dispute doesn't happen at capture time. It happens five months later at settlement, with money on the table, when Suresh says *"that was never my land."* At that point it's his word against a technician who has since visited four hundred other farms. You lose that argument every time.

And the quieter effect, which is probably the bigger one: **if the farmer is watching, the capture can't be faked.** That does more for honest data than any check I could build in software.

**Saved.** *"19 farmers left. About 3 hours."*

**Total: 3 minutes 40 seconds.**

---

## Phase 4 — What actually goes wrong

Twenty farmers means the unusual case happens five or six times a day. It isn't unusual. It's the job.

### Farmer 4 — nobody home

Ganesh is at the market. But the field is right there and it doesn't need him.

So: capture normally, and **defer the confirmation** rather than blocking it. Two ways out — the club leader witnesses it instead, or it goes to a *needs confirming* list that surfaces on the next visit.

*The one thing the app must not do is throw the capture away because a person wasn't standing there.*

### Farmer 7 — the phone can't find itself

A line of big trees on the west edge, and cloud. Accuracy is 14 metres — well outside what a sowing visit needs.

The app says, plainly:

> **Location is weak here.** Saved anyway. The office will check this one.

**It does not stop him.** He is standing in a field, with no signal, no supervisor to phone, and thirteen farmers left. If the app refuses his work he has no route forward — and I've just taught him that the app is an obstacle to be got around. He'll find a way around it, and everything he captures after that is worth less.

Save it. Label it honestly. Let the office deal with it. **A record with a warning on it beats no record and a lost technician.**

### Farmer 9 — sown *more* than the contract

2.9 acres, against a 2.4 acre contract. That's not measurement noise, that's a question.

Hard flag. Photo required. Input release held until someone in the office looks at it. Ramesh isn't asked to judge it — he's asked to record it and move on.

### Farmer 12 — his plot overlaps his neighbour's

Both plots are on the phone, so the app spots it on save: 0.3 acres claimed by two people.

> **This overlaps with Bhau Shinde's plot.**
> Marked for boundary check. Both are saved.

And then **the app stops talking.**

**This is the most important restraint in the design.** Two neighbours, a disputed strip, and a technician holding a phone. If the app asks him *"which one is correct?"*, it has just made a man with a smartphone the judge of a land dispute between two people who will still be neighbours in twenty years, and who will both blame him.

That is not a software problem. It is a village problem, and it needs a person with authority, both parties, and probably a land record. The app's entire job here is to **notice it, record both claims, and escalate.** Nothing else.

### Farmer 15 — 18% battery, five farmers left

> **Battery saver on.** Satellite pictures off, location checked less often.
> 5 farmers left — about 25 minutes.

Not a warning. An adjustment, already made, with the consequence stated in the only unit he cares about: farmers remaining.

### Farmer 17 — two crops on one plot

Real, and not rare. v1 lets him mark two areas with different crops. Three or more, and he taps *this one is unusual* — a note, photos, and someone looks at it later.

**A good escape hatch beats a bad automatic answer.** Handling every possible field shape in v1 means shipping late and still missing one.

### Farmer 20 — he makes a mistake

He mis-walks a corner. Two ways back: undo the last point, or start over. Both one tap, both always visible.

And if the app dies mid-walk — it happens on mid-range phones — every point is written down as it's taken. Reopening says: *"You were capturing Anita Pawar's plot. Carry on?"*

---

## Phase 5 — 8:30 PM, back on WiFi

Twenty captures waiting. He taps sync once.

> **Sending 20 visits.**
> Details first. Photos take longer.

**Details before photos, deliberately.** Photos are large and slow. If the record can't be complete until the photo arrives, one weak connection blocks twenty visits. So each visit is complete and usable the moment the details land — the photos catch up behind it, on their own, whenever there's signal.

> **18 sent. 2 waiting for a better connection.**
> Nothing is lost. They'll go on their own.

Then, while he still remembers:

> **3 need a note from you before the office can act.**

Suresh's dry strip, the overlap at Farmer 12, the over-planted plot at Farmer 9. He adds a line to each. **Tonight**, not next week, when the day has blurred into the other nineteen.

And finally:

> **Tomorrow: Shivneri Club, 22 farmers. Download now?**

The loop closes. Tomorrow is already ready.

---

## What the day taught me

Five things I only saw by writing it out hour by hour:

**1. The most important moment of the field day happens the night before.** It isn't in the field at all. If the download didn't happen, nothing else in this document matters.

**2. Design for the boring answer.** Most farmers sow most of their field. That path is twenty-five seconds. The clever features are for the five cases that need them.

**3. The plan is worth less than the ability to change it.** Three farmers were at the market. Any minute spent making the route smarter is worth less than a second spent making it easier to redo.

**4. Never block him.** Weak GPS, missing farmer, dead battery, overlap — in every case the app records honestly and lets him continue. An app that says no, to a man alone in a field with no signal and thirteen farmers left, is an app that gets worked around. And a worked-around app produces data that is confidently wrong, which is worse than no data at all.

**5. Know where the app's authority ends.** It can measure a field. It cannot settle who owns it. Confusing those two is how you get a technician blamed for a land dispute — and how you lose him.
