# Decision Log
### Lifecycle Farm Plot Capture System — the thinking behind the submission

---

## Why this document exists

The submission is the answer. This is how I got there.

Designing this system was really a series of choices, and every single choice meant giving something up. This document is the record: what I decided, why I decided it, and what I knowingly left on the table.

I'm sharing it because I think the choices are more revealing than the design. Anyone can draw screens. The job is deciding which screens shouldn't exist.

---

## A note on how these are written

Every decision in this document is mine to make. None of them are locked until I say so.

Each one is written the same way: the question, the options I weighed, what I'd lean towards, and — the part that matters — what that choice costs me.

---
---

# Part 1 — Three things I worked out before I drew anything

## 1.1 The brief hands you the answer in one line

> *"Agriplotting is NOT a one-time activity."*

That line changes what I'm building. I'm not building a tool that draws a boundary around a farm. I'm building something that tracks **how one farm's boundary changes over a whole crop season** — six times, across roughly five months.

Which leads to the one rule everything else hangs off:

> ### We never overwrite an old boundary. Every visit adds a new record. The old ones stay forever.

That sounds almost too simple to be a design decision. But look at what it quietly solves:

| Hard question from the brief | How the rule answers it |
|---|---|
| Compare contracted area vs. actually sown area | Two records. Put them side by side. |
| A farmer disputes his settlement | Pull up six dated records with photos. The argument ends. |
| Two technicians captured the same plot | Keep both. Neither is destroyed. A person decides which is right. |
| Yield per acre at harvest | You know the real area at every stage, not one guessed number from five months ago. |
| Insurance claim for a pest-hit patch | You have a dated, photographed boundary of exactly the affected area. |

One rule, five problems gone. That's the spine of the whole submission.

---

## 1.2 The workload math breaks the obvious design

**This is the most important thing I found, and I think it's what separates a real answer from a plausible one.**

The obvious design is: technician walks around the edge of the field, phone records the path, you get a boundary. Simple, accurate, easy to explain.

Let me check whether it fits in a working day.

**What the brief tells us about the workload:**
- 150-200 farmers per technician
- Each visited **twice a month**
- So: 300-400 farm visits a month
- Working month is about 20-22 days
- That's **15 to 20 farm visits every single day**

**What a day actually holds:**
- A realistic field day is about 6 hours of productive time = 360 minutes
- Take out travel between farms and between villages — realistically a third of the day
- You're left with roughly **12 to 15 minutes per farmer**
- And that has to cover: greeting him, talking to him, the capture, notes, photos, and moving on

**Now, how long does walking a boundary actually take?**

| Plot size | Roughly how much boundary | Walking time on soft field soil |
|---|---|---|
| 2 acres | ~360 metres | **7-8 minutes** |
| 5 acres | ~570 metres | **11-13 minutes** |
| 10 acres | ~800 metres | **16-18 minutes** |

And that's *just the walking.* Add waiting for the phone's location to settle, walking around a tree or a water channel, restarting after a mistake.

### So here's the problem

**On a 10-acre plot, walking the boundary uses more than the entire time budget for that farmer.** On a 2-acre plot it uses over half of it.

If I design "walk around the plot" as the method for all six visits, the app demos beautifully and dies in month two. Not because it's broken — because technicians will quietly start standing at the gate and drawing a rough shape on the screen to get through their day. And then the data is *worse* than the manual estimates they have now, because now it's wrong **and** it looks official.

### What I take from this

The design has to earn the technician's time, not spend it.

My answer is: **walk the boundary properly once, at onboarding. After that, don't re-walk — start from the saved boundary and only mark what changed.**

Sown only two-thirds of the field? Mark the two-thirds. Pest hit one corner? Mark the corner. You're not re-measuring the farm every fortnight, you're recording the difference.

That takes a 12-minute job down to about 2-3 minutes, and it fits in the day. Full reasoning in decision **D3**.

---

## 1.3 What the scoring is actually rewarding

The brief publishes its own marking scheme, so I read it as instructions:

| What they score | Weight | What I read into it |
|---|---|---|
| Field user empathy | 25% | The single biggest bucket. Do I actually understand a technician's day? |
| Technical depth | 25% | Can I talk about syncing, GPS accuracy and checking data without hand-waving? |
| Product scoping | 20% | Have I said clearly what I'm *not* building? Most people skip this. |
| Platform thinking | 15% | Do I see the collected data as an asset in itself? |
| Communication clarity | 15% | Is it simple to read? |

Two things I take from this:

**One — half the marks are field empathy and technical depth.** So those get the most pages. Not equal pages for equal deliverables.

**Two — the screens are worth zero marks on their own.** There is no "wireframes" line in the scoring. They're scored *inside* field empathy — meaning the screens only earn marks if they prove I understand the field. So every screen has to show a real field problem being handled, not just a pretty layout.

---
---

# Part 2 — The calls I made

---

## Group A — What we're actually optimising for

### D1. What's the one number we're trying to move?
**Status: DECIDED**

> **The call: Cut the gap between contracted and actual cultivated area from 15-25% to under 5%. Time per plot is the number that must not get worse.**

**The question:** The brief lists four problems — area variance, settlement disputes, wrong input allocation, bad yield forecasts. I can't chase all four. Which one is the headline?

**What I'd recommend:** Cut the gap between contracted area and actual cultivated area from **15-25% down to under 5%.**

**Why:** It's the only one in the list that's a *cause*. The other three are symptoms of it. Fix the area number and disputes, input waste and yield forecasts all improve without being worked on separately. It's also the one the brief gives us a hard current number for, which means it's already being measured and someone already cares.

**But — and this matters — a second number has to be watched alongside it:** the **time a technician spends per plot.** Because there's an easy way to get area accuracy to 99%: make the capture so thorough that technicians can only finish half their farms. I'd have won the metric and broken the operation. So accuracy is the goal, and time-per-plot is the thing that must not get worse.

**What I'm giving up:** Leading with settlement disputes would probably get a louder "yes" from a commercial head, because disputes are painful and visible. Area variance is the less emotional pitch. I'm accepting a duller headline for a more honest one.

---

### D2. Whose time do we protect?
**Status: DECIDED**

> **The call: The technician's time wins, every time.**

**The question:** The technician uses the app. The agri-company pays for it. When their interests pull apart — and they do, constantly, because the company always wants one more field, one more photo, one more confirmation — who wins?

**What I'd recommend:** The technician's time wins. Every time.

**Why:** The company can't get its accurate data without the technician, and the technician has a completely free and invisible way to opt out — guess the boundary and move on. Nobody will catch him for weeks. So any feature that costs him time without visibly helping him is a feature that gets worked around, and every workaround poisons the data.

I'd rather have five fields captured honestly than eight captured under pressure.

**What I'm giving up:** Some things the company would genuinely like — richer notes, more photos, more confirmation taps — don't make it into v1. I'll have to defend that in a room where someone says "it's only ten extra seconds." Ten seconds × 20 farmers × 22 days is over an hour a month, per technician.

---

## Group B — The field method

### D3. How do we actually capture the boundary?
**Status: DECIDED**

> **The call: Walk the boundary properly once at onboarding. After that, never re-walk — start from the saved boundary and only mark what changed.**

**The question:** Six visits per farmer per season. What physically happens at each one?

**The options I considered:**

**Option 1 — Walk the boundary every visit.**
Most accurate, one method to train, easy to explain.
Doesn't fit in the day (see 1.2). Would get quietly faked within weeks.

**Option 2 — Never walk. Tap the corners on a satellite photo.**
Fast, almost no training, no walking in the sun.
Two problems. The satellite imagery we're told to assume is 10-metre resolution — one pixel is 10m × 10m. A half-acre plot is about 45m across, so it's four or five pixels wide. You physically cannot see where the boundary is. And it can be done from the office, so it's the easiest thing in the world to fake.

**Option 3 — Walk once properly, then only mark what changed.** ← where I land
Walk the full boundary once, at onboarding, with proper accuracy checks. That becomes the farm's permanent baseline. Every later visit opens that saved boundary and the technician marks only the *difference* — the part that got sown, the corner the pest hit, the block that's been harvested. He walks only when the difference itself needs walking.

**Option 4 — Give the technician all three methods and let him choose per visit.**
Most flexible. But it hands a judgement call to someone the brief describes as having basic smartphone literacy and limited training, and it triples what I have to build in v1.

**Why Option 3:**

- It's the only one that survives the workload math
- It matches how the farm actually behaves — the field's outer edge doesn't move during the season, what changes is *how much of it is being used.* So re-measuring the outer edge every fortnight is measuring the thing that didn't change
- It makes the comparison view almost free. You're literally always working on top of the previous boundary, so "sown area vs contracted area" is on screen without anyone asking for it
- It concentrates the expensive, careful work at onboarding — which is exactly where you want it, because that's the number the contract is written against

**What I'm giving up:**
- The baseline had better be right, because everything sits on top of it. One bad onboarding capture corrupts a farmer's entire season. That means onboarding needs stricter checks and probably a supervisor spot-check, and I need to accept that onboarding is slow
- If a farmer genuinely extends his field mid-season — leases the neighbouring strip — the baseline is wrong and needs a proper re-walk. I need an explicit "re-measure the whole farm" escape hatch, and I need to detect when it should be used
- It's a harder idea to explain in one line than "walk around your field," which has a real training cost

---

### D4. What GPS accuracy is good enough — and what happens when it isn't?
**Status: DECIDED**

> **The call: Different accuracy standards per visit. Never block a capture — save it, mark it as weak, let the office check.**

**The question:** A mid-range Android phone knows where it is to within about 3 to 10 metres on a good day. Under trees, near a wall, or on a cloudy morning, worse. What's acceptable?

**What I'd recommend:** Different standards for different visits, because the visits carry different consequences.

| Visit | How accurate it must be | Why |
|---|---|---|
| Onboarding | Strict | A contract gets written against this number. Money depends on it. |
| Sowing | Strict-ish | Seed reconciliation and contract amendments hang off it. |
| Germination, pest, pre-harvest | Relaxed | These are for spotting trends and problems, not for paying anyone. Roughly right, on time, beats precisely right, next week. |
| Post-harvest | Strict | Final settlement. Money again. |

**The more important half of this decision:** what happens when the phone can't reach the required accuracy.

**Never block the capture.** The technician is standing in a field with no signal, no supervisor to call, and eighteen more farmers to see. If the app refuses to save his work, he has no path forward — and I've just taught him the app is a wall to be climbed rather than a tool.

Instead: save it, mark it clearly as low-accuracy, show him what's wrong in plain words ("GPS is weak here — this is saved but the office will check it"), and let the office deal with it. He keeps moving. The data carries an honest warning label.

**What I'm giving up:** Some low-quality records enter the system. I'm accepting that, because the alternative isn't clean data — it's a technician who stops using the app.

---

### D5. Does the farmer confirm the boundary on the spot?
**Status: DECIDED**

> **The call: Yes. Farmer sees the shape and the number in his own language, signs on screen, photo of him at the plot.**

**The question:** After the boundary is captured, does the farmer see it and agree to it before the technician leaves?

**What I'd recommend:** Yes. He sees the shape and the area on screen, and confirms — with his signature on the screen, plus a photo of him standing at the plot.

**Why:** Look at where disputes actually happen. Not at capture time — five months later, at settlement, when there's money on the table and the farmer says "that was never my land." At that point it's your technician's word against his, and you always lose that argument, because he was there and your technician has since visited four hundred other farms.

Sixty seconds of confirmation at capture time is the cheapest dispute prevention available. And there's a second effect that's harder to measure but probably bigger: if the farmer is watching, the technician can't fake it. This does more for data honesty than any technical check I could build.

**What I'm giving up:** Sixty seconds per farmer, which is real (twenty minutes a day) and directly contradicts D2 if I'm not careful. My defence is that this one is *visibly* for the technician too — it protects him from being blamed later. And the harder problem: the farmer isn't always there. So I need a proper "farmer not present" path that doesn't just get used every time as the easy option.

---

## Group C — Scope

### D6. Which of the six stages ship first?
**Status: DECIDED**

> **The call: Build the machinery for all six stages, switch on three at launch — onboarding, sowing, post-harvest. The three where money moves.**

**The question:** Build all six lifecycle stages for launch, or start narrower?

**What I'd recommend:** Build the machinery for all six, but switch on three at launch — **onboarding, sowing, and post-harvest.**

**Why those three:** They're the three where money changes hands. Onboarding writes the contract. Sowing decides seed reconciliation and whether the contract gets amended. Post-harvest decides what the farmer is actually paid. The other three — germination, pest, pre-harvest — are about forecasting and intervention. Enormously valuable, but nobody's payment is blocked on them.

Starting with the three money stages also gives the cleanest possible proof: contracted area at the start, actual area at the end, and the gap between them measured properly for the first time. That's a number the business can feel.

**What I'm giving up:** The full-season story is more impressive and it's what the brief describes. I'm choosing a narrower launch that proves the model works, and I have to be able to defend that as prioritisation rather than as not finishing the assignment. That's a real risk with this call and I know it.

---

### D7. Six different screens, or one screen with settings?
**Status: YOUR CALL — not decided yet**

**The question:** Do I build six separate capture flows, one per stage? Or one capture flow that behaves differently depending on which visit it is?

**What I'd recommend:** One flow. What changes per stage is just settings — how accurate it needs to be, whether a photo is required, what it compares itself against, what warnings it raises.

**Why:** Three reasons.

The technician learns *one* thing. Given the brief explicitly says limited training budget, that alone might decide it.

Adding stage seven, or a client-specific stage, becomes a settings change instead of a development project.

And it means the same code is used six times a season instead of six pieces of code used once each — so bugs surface fast and get fixed once.

**What I'm giving up:** More work upfront than hard-coding three flows, and slower to a first demo. Also each stage's screen will be slightly less tailored than a purpose-built one. I think that's a good trade, but it is a trade.

---

### D8. Are we building it or buying it?
**Status: DECIDED**

> **The call: Buy the map and the satellite imagery. Build the capture, the rules, the lifecycle history and the office side.**

**The question:** Maps, offline map storage, satellite imagery, storing and comparing shapes — all of this can be bought off the shelf. What do we build ourselves?

**What I'd recommend:** Buy the map and the imagery. Build the capture and the rules.

Buy: the map that works without signal, the satellite pictures, the machinery for storing and comparing shapes.

Build: everything the technician touches, and every rule about what's acceptable.

**Why:** Nobody is going to pay us for having drawn a map. The thing that's actually ours — the thing a competitor can't buy — is knowing that a sowing visit needs to take under three minutes, that you never block a technician in a field, and that a 25% gap needs a photo and a reason. That's the product. The map underneath it is a commodity and we should treat it like one.

**What I'm giving up:** We're dependent on someone else's pricing and someone else's uptime for the map layer, and switching later is painful. Worth it — building our own offline mapping would eat the first six months and we'd end up with a worse version of something that already exists.

**Caveat I'd want to close:** if the company already has a mapping stack in place, this decision changes. I'd check that before spending a rupee.

---

## Group D — Trust, conflict and authority

### D9. When the sown area doesn't match the contracted area, who decides what happens?
**Status: DECIDED**

> **The call: Banded. Under 5% passes. 5-20% goes to a supervisor with photos attached. Over 20%, or sown larger than contracted, freezes input release.**

**The question:** Contract says 5 acres. Technician measures 3.8 acres sown. Now what? Does the contract change automatically?

**The options:**

**Automatic.** Clean data, no backlog, fast. But it hands legally binding commercial authority to a GPS reading and an unsupervised person in a field. One bad capture and a farmer's contract silently changes. I don't think anyone signs off on this, and I don't think they should.

**Always a person checks.** Safe, easy to explain. But it creates a review task on nearly every visit — that's 300-400 a month per technician's book. It'll be rubber-stamped within a fortnight, which is worse than not having it, because now there's a fake approval on the record.

**Banded — small gaps pass, medium gaps go to a person, large gaps freeze things.** ← where I lean
Under 5%, accept it — that's measurement noise. Between 5% and 20%, raise it for a supervisor with the photos and the map attached. Over 20%, or if the sown area is somehow *bigger* than the contracted area, flag it hard and hold input disbursement until someone looks.

**Why banded:** It puts human attention only where there's real money at risk, which keeps the review queue small enough that people actually read it. And critically — none of this blocks the technician in the field. He captures, he moves on, the flag travels with the data when it syncs.

**What I'm giving up:** Those thresholds are guesses. 5% and 20% sound reasonable but I made them up. They need to be tuned against real captures, and I'd want to run the system in observe-only mode for a season before letting it hold anyone's fertiliser.

---

### D10. Two technicians capture the same plot. What happens?
**Status: DECIDED**

> **The call: Keep both captures. No automatic winner. A supervisor decides, with both technicians, times and accuracy shown.**

**The question:** The brief tells us technicians often visit clubs together. So two people capturing the same farm on the same day is not an edge case, it's a Tuesday.

**Why this is harder than it looks:** With text, when two people edit the same thing you can often merge it. With a shape on a map, you can't. Two boundaries for the same field aren't merged into a truer boundary — you just get a third shape that nobody walked.

**What I'd recommend:** Keep both. Don't pick a winner automatically. Show them both to a supervisor with who captured them, when, how accurate each was, and how far apart they are, and let a person decide.

**Why:** Falls straight out of the rule in 1.1 — we never overwrite. The common shortcut is "whichever synced last wins," which quietly means "whoever got to WiFi first is right." That's not a rule, that's a coin toss with extra steps.

**What I'm giving up:** A queue of conflicts someone has to work through. I'd expect it to be small, and I'd watch the number — if it's not small, the real problem is how work is being allocated, and the app has just made that visible, which is useful in itself.

---

### D11. Can a technician fake a capture from the office?
**Status: DECIDED**

> **The call: Make honest capture the fastest path, then add light checks that cost the technician nothing.**

**The question:** How much do we design against someone gaming this?

I want to be careful about tone here. The point isn't that technicians are dishonest. It's that we're about to give a person twenty farms a day and six hours to do it in, and if the honest path doesn't fit in the day, we've *designed* the shortcut. That's on the product, not on him.

**What I'd recommend:** Make honest capture the fastest path (that's what D3 is for), and add light checks that cost the technician nothing:
- Photos carry their own location and time, so a photo taken at the office doesn't match a boundary claimed in a village
- A walked boundary leaves a walking pattern — real walking has a rhythm, a finger drawing on a screen doesn't
- Every so often, compare the captured shape against the satellite image. Not precise enough to verify a boundary, but very good at catching a field that isn't a field
- The farmer confirming on the spot (D5) — the strongest check by a distance

**What I'm giving up:** None of it is airtight and I'm not trying to make it airtight. I'm trying to make faking harder than doing it properly. And I have to be careful how this gets presented internally, because building a surveillance tool for your own field staff is a good way to lose them.

---

## Group E — The practical stuff

### D12. What gets downloaded before a day with no signal?
**Status: DECIDED**

> **The call: Today's club plus tomorrow's, plus map pictures for that village only. Downloaded the night before, not in the morning.**

**The question:** The technician syncs at home in the morning and then has no connectivity all day. What has to be on the phone?

**The tension:** Download everything and you've got a mid-range phone with limited storage and a sync that takes twenty minutes on a slow home connection — so it gets skipped. Download too little and he hits a farm he can't work on, and the whole day's plan collapses.

**What I'd recommend:** Today's club, plus the next club, plus map pictures for that village only. One button, done the night before.

Specifically what goes on the phone:
- Every farmer in today's club — name, contract, plot, phone number
- Their saved boundary from onboarding, and every capture since
- Any open flags from last visit, so he isn't surprised
- Satellite pictures for that village at the zoom levels he'll actually use — not the whole district
- Tomorrow's club too, as a buffer

**The one design decision that matters more than the list:** the download happens **the night before, not in the morning.** At 6:30 AM he wants to leave, and a progress bar is the enemy. At 9 PM he's at home on WiFi with his phone charging and nothing to do. Same download, completely different experience — and a much higher chance it actually happens.

**What I'm giving up:** If the day changes completely — he gets redirected to a different village — the buffer doesn't cover it and he's stuck. I'm accepting that, because it should be rare, and the alternative is downloading the whole district every night.

**Numbers I've assumed and would check on day one:** how big the map pictures actually are for one village, how much free space is really on these phones, and what home internet speed looks like. If any of those are worse than I think, the buffer is the first thing to go.

---

### D13. Is a Club a real thing in the system, or just a way of grouping farmers?
**Status: DECIDED**

> **The call: A real record, with its own history and its own numbers.**

*(Plainly: does the system store a Club as its own record with its own history and its own numbers — or is "club" just a label on each farmer that you can filter a list by?)*

**Why it matters:** If it's just a label, you can sort farmers by club and that's all. If it's a real record, a club can have its own visit, its own progress, its own totals, its own history — and you can compare clubs against each other.

**What I'd recommend:** Real record.

**Why:** Because the brief keeps describing the *work* as club-shaped, not farmer-shaped. Technicians visit clubs together. A club is 15-25 farmers, which is roughly a day. The whole rhythm of the job is "today I'm doing this club" — so the app should be built around a club visit, not around 20 unrelated farm visits that happen to be near each other.

And it opens up things you can't do otherwise: this club has sown 80% of contracted area while that one has done 95% — go find out why. That's a genuinely useful thing for the business and it costs almost nothing extra if clubs are real records from day one.

**What I'm giving up:** A bit more complexity in how data is organised, and I have to handle the messy cases — a farmer with plots in two villages, a farmer who moves clubs mid-season, a club that gets split.

---

### D14. Language and training
**Status: DECIDED**

> **The call: Two languages at launch — one local, plus English for the office. Pictures before words, spoken notes instead of typed ones, no settings screen.**

**The question:** The brief says basic smartphone literacy and limited training budget. What does that force?

**What I'd recommend:** The app has to be learnable in under thirty minutes, by watching someone do it once.

Which means, concretely:
- **Pictures before words.** Every action has an icon that means something on its own. Words are the label, not the instruction.
- **Numbers big.** The area is the point. It should be the largest thing on the screen, always.
- **Spoken notes, not typed ones.** Typing on a phone, in the sun, in a local language, with a farmer waiting — nobody will do it. Hold a button and talk. Two seconds versus two minutes.
- **Two languages at launch:** the local language of the first region, and English for the office. Not more. Every extra language is a translation to maintain and a place for the meaning to drift.
- **No settings screen.** A settings screen is a place for the app to get broken by its own user. Anything that needs configuring gets configured by the office, not in the field.

**Why:** The training budget being small isn't a constraint to work around, it's a design brief. If the app needs training, the app is wrong. Twenty farmers a day means the technician does this four hundred times a month — he'll learn it by repetition or not at all, and only if it's simple enough to learn by repetition.

**What I'm giving up:** Icon-led design with few words means some things will be ambiguous the first time, and I'll only find out which ones by watching people. I'd want to sit with five technicians and a paper version before writing any code.

---
---

# Part 3 — What I am deliberately NOT building, and why

I think this list matters as much as the design. Anything can be added to a product. Deciding what stays out is the harder half of the job.

| Not building | Why not |
|---|---|
| **Support for proper GPS devices** | The brief rules them out, and it's the right call — they cost money, they get lost, they need charging, and they're one more thing for a technician to carry. Phone-only forces the design to be honest about accuracy instead of hiding behind hardware. |
| **Drones** | Better data, obviously. Also a pilot, a licence, a battery, and a person who now does drone flying instead of farmer visits. Wrong problem for this stage. |
| **Crop health analysis from satellite imagery in the app** | Genuinely valuable and it's the natural next thing. But it's a different product with a different team, and putting it in v1 means shipping two half-built things instead of one working one. The data model supports adding it later — that's enough for now. |
| **An app for farmers** | Different user, different literacy, different phone, different everything. It'd double the work and halve the focus. Later. |
| **Live sync in the field** | There's no connectivity. Building for a network that isn't there is how you get an app that only works in the demo. Everything assumes offline first; sync is something that happens later, at home. |
| **Automatic contract changes at launch** | See D9. The system should watch and flag for a season before it's allowed to move money. Trust is earned with a track record, not with a launch. |
| **Handling every possible field shape** | Plots with holes in them, plots in two separate pieces, three crops on one plot — all real, all rarer than the basic case. v1 handles the common case properly and gives the technician a clear way to say "this one's odd, someone please look." A good escape hatch beats a bad automatic answer. |

---

# Part 4 — How I'd know it's working

Not vanity numbers. Numbers that would tell me to stop and change something.

**The goal:**
- Gap between contracted and actual area: from 15-25% down to under 5%
- Settlement disputes per hundred farmers: down, season on season

**The guard rails — if these move the wrong way, the goal doesn't matter:**
- Time per plot capture: must not creep up
- Farms actually visited per technician per day: must not drop
- Captures synced within 24 hours: should be high, and if it isn't, the sync is too painful and needs fixing
- Share of captures flagged as low quality: if this climbs, either the accuracy rules are too strict or something in the field has changed

**The one that tells the truth:**
- Are technicians still using it in month four? Adoption at launch means nothing — everyone uses a new tool for a fortnight. Month four is the honest test.

---

# Part 5 — Things I still need to understand

Listing these rather than guessing. Every one of them could change a decision above.

1. What accuracy do these phones *actually* get in these villages? Everything in D4 rests on numbers I've assumed.
2. How big are the map files for one village, and how much free storage does a technician's phone really have? (Blocks D12.)
3. How often does a day's plan actually change once the technician is out? (Also blocks D12.)
4. What happens today when contracted and actual area don't match — who currently decides, and how long does it take? I should design around the existing process before proposing a new one.
5. How often is the farmer actually present when the technician visits? If it's 40%, D5 needs rethinking.
6. Is 5% / 20% right for the flag thresholds in D9? Made up. Needs real data.
7. What does a technician's day *really* look like? My 6-hour, 15-20-visit model is built from the brief's numbers, not from watching anyone. I'd want to spend two days walking with one before I locked anything.
8. What's already in the company's tech stack? Blocks D8, and possibly changes several others.

---

# Part 6 — Words I'm avoiding

Kept deliberately, because plain words are a choice, not a limitation.

| Instead of | I say |
|---|---|
| North-star metric | The one number we're trying to move |
| Guardrail metric | The number that must not get worse |
| First-class entity | A real record in the system, with its own history |
| Append-only / immutable log | We never overwrite. Every visit adds a record, old ones stay |
| Delta capture | Only mark what changed since last time |
| Source of truth | Which number wins when two disagree |
| Human in the loop | A person checks it |
| Conflict resolution | Two people captured the same farm — who's right |
| Throughput | How many farms a technician gets through in a day |
| Downstream use case | What else this data is good for |
| Offline-first architecture | It works with no signal, and syncs later |
| Eventual consistency | Everything catches up once there's a connection |
| Data asset | The data is worth something on its own |
| Onboarding funnel | Signing a farmer up |
| Edge case | The unusual ones |

If a sentence in the submission can't be said out loud in a meeting without sounding rehearsed, it gets rewritten.

---
---

# Part 7 — One more decision, about the submission itself

### D15. What form does the submission take?
**Status: DECIDED**

> **The call: build it as a PDF from source I can keep editing. At the very end, once the content is settled, also produce a slide version and an editable document version.**

**Why this order:** the content is going to change a dozen times before it's right. Locking it into a slide deck early means every edit costs three times as much, and I'd start avoiding edits — which is how documents end up worse than they should be. So: one source, edited freely until it's finished, then packaged three ways at the end.

**What I'm giving up:** the packaging work all lands at the end, in one block, which is where time pressure usually is. Worth it — I'd rather be under pressure to format than under pressure to think.
