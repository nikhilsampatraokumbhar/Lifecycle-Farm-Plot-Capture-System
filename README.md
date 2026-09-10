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

## Page budget

Measured, not estimated. `submission/build.py` reports real page counts.

| Section | Pages | State |
|---|---|---|
| Cover, the short version, problem and principles | 1 | to write |
| The six stages and what ships first | 1 | to write |
| A day with Ramesh (journey map) | 2 | **done** |
| The screens (15, at 4 per page) | 4 | **done** |
| How it works underneath (technical, 9 diagrams) | 5 | **done** |
| What the data is good for | 1 | to write |
| Plan, metrics, what we are not building | 1 | to write |
| **Total** | **15** | at the limit |

The technical section runs to 5 rather than 3 because it carries a diagram per point. That page came out of the journey map, which was 4 pages of flowing prose and is now 2 pages of timeline plus the six moments that matter. Tighter and better, not just shorter.

## Building it

`python3 submission/build.py <file.md> "<title>"` turns a section into HTML and a PDF in `build/`.

## Where we are

All fifteen decisions settled. Journey map, screens and technical write-up written. Still to do: the page on what the data is good for, and the front and back matter (summary, scope, metrics, what we are not building).
