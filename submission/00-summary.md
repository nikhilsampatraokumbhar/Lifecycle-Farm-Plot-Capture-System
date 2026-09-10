# Lifecycle Farm Plot Capture

**A geo-capture system for field technicians working with no signal, across the whole crop cycle.**
Product exercise · Senior Product Manager (Technical) · Nikhil Sampatrao Kumbhar

---

## The short version

The brief highlights its own answer: **plot capture is not a one-time activity.** So the thing to build is not a boundary-drawing app. It is a **plot that keeps a history**, with every visit adding a record and nothing ever overwritten. That one rule answers comparison, disputes, settlement and insurance claims from the same place.

The second thing that shaped every decision is arithmetic. Two hundred farmers, visited twice a month, is fifteen to twenty farms a day, which leaves **about eleven minutes per farmer**. Walking the boundary of a ten-acre plot takes sixteen to eighteen. So the boundary gets walked properly **once**, at onboarding, and every visit after that marks only what changed. Ninety seconds instead of eight minutes.

Everything else follows from those two: never block a technician standing in a field, design the common case down to twenty-five seconds, and let the app measure a field without ever pretending it can settle who owns it.

---

## The problem

| | |
|---|---|
| **15 to 25%** | The gap between contracted area and actual cultivated area today, because technicians estimate by eye |
| **300 to 400** | Farm visits per technician per month, which is what any solution has to survive |
| **6** | Times a plot needs capturing across one crop cycle, because area changes all season |

The area gap is the one worth chasing, because the other three problems in the brief are symptoms of it. Disputes at settlement, seed and fertiliser sent against land that was never sown, and yield forecasts built on a number nobody measured all trace back to not knowing the real area. Fix the cause and the symptoms improve without being worked on separately.

---

## The two main ideas

### 1 · A plot keeps a history

Every visit adds a record. Old records are never edited or deleted. A wrong capture gets a correction added beneath it, not applied to it.

It sounds almost too simple to be a design decision, but it is the reason the hard questions have answers. Contracted against sown is two records side by side. A dispute five months later is a dated, photographed, signed history. Two technicians capturing the same plot is not a conflict to resolve in software, it is two records and a person deciding. At settlement, an overwritten record proves nothing.

### 2 · Everything has to fit inside eleven minutes

Not as a target. As the constraint that decides what gets built.

Anything that does not fit in the day does not get done, it gets faked, and a faked capture is worse than no capture because it is wrong **and** it looks official. So the design earns the technician's time rather than spending it: walk once and then mark only the difference, one tap for the farmer who sowed everything, a spoken note instead of a typed one, and a download that happens at nine at night rather than at 6:40 in the morning.

---

## Contents

| | Page |
|---|---|
| **A day with Ramesh** · sowing visit, one club of 20 farmers, no signal all day | 3 |
| **The screens** · fifteen, covering that day end to end | 5 |
| **How it works underneath** · syncing, accuracy, disputes, the data model, planning the month | 9 |
| **What the data is worth after the visit** · seven uses of the same record | 14 |
| **What I would build first** · the plan, the numbers, and how technicians get paid | 15 |


---

## The decision log

This document is the answer. The choices behind it are recorded separately, in a companion decision log: sixteen decisions, the options weighed against each other, the call, and **what each one cost.** No decision is recorded without the thing it gave up, because a choice with no downside is not a choice, it is a preference.

Three of the fifteen, as a sample of the kind of call being made:

**Walk the full boundary only once, at the start. After that, only mark what changed.** Costs a slow and strict onboarding visit, and means one bad first capture spoils a farmer's whole season. Pays that back at every visit for the rest of the year.

**Small area gaps pass, medium ones go to a supervisor, large ones freeze input release.** Automatic amendment would hand legally binding authority to a GPS reading and an unsupervised person in a field. Reviewing everything would create three hundred tasks a month, and they would be rubber-stamped within two weeks.

**Buy the map, build the rules.** Nobody pays us for having drawn a map. And crops do not wait: buying puts us in a real field in three months, building puts us there in twelve, and missing a sowing window costs a year rather than a quarter.
