#!/usr/bin/env python3
"""Build every section, then merge them into one submission PDF."""
import sys, pathlib, subprocess

ROOT = pathlib.Path(__file__).resolve().parent
REPO = ROOT.parent
sys.path.insert(0, str(REPO / '.pdfstub'))

SECTIONS = [
    ('00-summary.md',    'Lifecycle Farm Plot Capture'),
    ('00b-stages.md',    'The six stages'),
    ('01-journey-map.md','A day with Ramesh'),
    (None,               'The screens'),          # screens/screens.html
    ('02-technical.md',  'How it works underneath'),
    ('03-downstream.md', 'What the data is worth'),
    ('04-plan.md',       'What I would build first'),
]
CHROME = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome"

def run(md, title):
    if md is None:
        out = REPO / 'build' / 'screens.pdf'
        subprocess.run([CHROME, "--headless", "--no-sandbox", "--disable-gpu",
                        "--no-pdf-header-footer", f"--print-to-pdf={out}",
                        str(ROOT / 'screens' / 'screens.html')], capture_output=True, check=True)
        return out
    subprocess.run([sys.executable, str(ROOT / 'build.py'), str(ROOT / md), title],
                   capture_output=True, check=True)
    return REPO / 'build' / f'{pathlib.Path(md).stem}.pdf'

from pypdf import PdfWriter, PdfReader
w = PdfWriter()
print(f'{"section":<26}{"pages":>6}   running')
total = 0
for md, title in SECTIONS:
    pdf = run(md, title)
    n = len(PdfReader(pdf).pages)
    w.append(str(pdf))
    w.add_outline_item(title, total)
    total += n
    print(f'{title:<26}{n:>6}   {total}')
out = REPO / 'build' / 'Lifecycle-Farm-Plot-Capture-Nikhil-Kumbhar.pdf'
w.write(str(out))
print(f'\n{out.name}  ->  {total} pages'
      f'{"  ✓ within the 15 page limit" if total <= 15 else "  ✗ OVER the limit"}')
