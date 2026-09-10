# Lifecycle Farm Plot Capture System

Take-home exercise. Senior Product Manager (Technical), AgriTech.

## What's here

| File | What it is |
|---|---|
| `docs/decision-log.md` | **The main working document.** Every choice, why I made it, what I gave up. Goes to them alongside the submission. |
| `docs/how-we-work.md` | Ground rules I set for building this: no jargon, proper screens, show the thinking. |
| `docs/the-brief.txt` | The original exercise, as plain text, so we quote it exactly instead of from memory. |

## What still has to be built

1. ~~**User journey map.**~~ Done. `submission/01-journey-map.md`.
2. ~~**Screens.**~~ Done. `submission/screens/screens.html`, 15 screens.
3. ~~**Technical write-up.**~~ Done. `submission/02-technical.md`, 3 pages.
4. **What the data is good for.** 1 page. At least 4 of the 7 uses listed in the brief.

All of it inside 15 pages, screens included.

## The submission

`python3 submission/assemble.py` builds every section and merges them into
`build/Lifecycle-Farm-Plot-Capture-Nikhil-Kumbhar.pdf`, reporting page counts as it goes.

| Section | Pages | From |
|---|---|---|
| Lifecycle Farm Plot Capture (summary, problem, the two ideas) | 1 | 1 |
| The six stages, what ships first, the design rules, the constraints | 1 | 2 |
| A day with Ramesh (journey map) | 2 | 3 |
| The screens (15, four to a page) | 4 | 5 |
| How it works underneath (technical, 9 diagrams) | 5 | 9 |
| What the data is worth after the visit | 1 | 14 |
| What I would build first, and what I would not build at all | 1 | 15 |
| **Total** | **15** | |

Exactly the fifteen page limit. Every count is measured by the build, not estimated.

`python3 submission/build.py <file.md> "<title>"` renders one section on its own while drafting.

## Where we are

All fifteen decisions settled and all seven sections written. The submission assembles to 15 pages.

Still to do: produce the slide and document versions, per decision D15, now that the content is settled.
