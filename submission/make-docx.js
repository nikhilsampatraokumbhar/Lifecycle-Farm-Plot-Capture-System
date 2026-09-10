// Turn the markdown sections into one editable Word document.
// Section markers are kept so edits can be merged straight back into the .md files.
const fs = require('fs'), path = require('path');
const D = require('docx');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell,
        WidthType, BorderStyle, ShadingType, AlignmentType, PageBreak } = D;

const ROOT = __dirname, REPO = path.join(ROOT, '..');
const CONTENT_W = 9026;   // A4 minus 1in margins, in DXA

const SECTIONS = [
  ['00-summary.md',     'Page 1 · Summary, the problem, the two ideas'],
  ['00b-stages.md',     'Page 2 · The six stages, the rules, the constraints, what we are not building'],
  ['01-journey-map.md', 'Pages 3 to 4 · A day with Ramesh'],
  [null,                'Pages 5 to 8 · The screens'],
  ['02-technical.md',   'Pages 9 to 13 · How it works underneath'],
  ['03-downstream.md',  'Page 14 · What the data is worth after the visit'],
  ['04-plan.md',        'Page 15 · What I would build first'],
];

const FIGS = {
  'the-day':'the day as a timeline, with the eleven minute arithmetic',
  'sync':'the sync pipeline, details and photos on separate lanes',
  'conflict':'two captures of one plot going to a person, not being merged',
  'accuracy':'the uncertainty band on a half-acre plot against a ten-acre one',
  'checks':'which checks fire on the phone and which fire on the server',
  'satellite':'a plot on a 10 metre pixel grid, beside a greenness curve',
  'disputes':'overlap against measurement error, and the season stepping down',
  'datamodel':'captures hanging off a permanent plot ID, with a correction',
  'month':'ten clubs filling twenty working days',
  'preload':'the 25 MB download, four fifths of it satellite imagery',
  'uses':'seven downstream uses against the six lifecycle stages',
  'incentives':'three pay models and the behaviour each one produces',
};

// ---------- inline formatting ----------
function runs(text, base = {}) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(new TextRun({ ...base, text: text.slice(last, m.index) }));
    const t = m[0];
    if (t.startsWith('**')) out.push(new TextRun({ ...base, text: t.slice(2, -2), bold: true }));
    else if (t.startsWith('`')) out.push(new TextRun({ ...base, text: t.slice(1, -1), font: 'Consolas' }));
    else out.push(new TextRun({ ...base, text: t.slice(1, -1), italics: true }));
    last = re.lastIndex;
  }
  if (last < text.length) out.push(new TextRun({ ...base, text: text.slice(last) }));
  return out.length ? out : [new TextRun({ ...base, text: '' })];
}

const cellPara = (txt, bold) => new Paragraph({
  children: runs(txt, bold ? { bold: true, size: 18 } : { size: 18 }),
  spacing: { before: 40, after: 40 },
});

function makeTable(rows) {
  const cols = rows[0].length;
  const w = Math.floor(CONTENT_W / cols);
  const widths = Array(cols).fill(w);
  widths[cols - 1] = CONTENT_W - w * (cols - 1);
  const border = { style: BorderStyle.SINGLE, size: 2, color: 'D6D9D2' };
  return new Table({
    columnWidths: widths,
    width: { size: CONTENT_W, type: WidthType.DXA },
    rows: rows.map((cells, i) => new TableRow({
      tableHeader: i === 0,
      children: cells.map((c, j) => new TableCell({
        width: { size: widths[j], type: WidthType.DXA },
        shading: i === 0 ? { type: ShadingType.CLEAR, fill: 'EFEFEA' } : undefined,
        borders: { top: border, bottom: border, left: border, right: border },
        margins: { top: 60, bottom: 60, left: 100, right: 100 },
        children: [cellPara(c, i === 0)],
      })),
    })),
  });
}

// ---------- markdown -> paragraphs ----------
function convert(md) {
  const out = [];
  const lines = md.split('\n');
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) { i++; continue; }

    if (line.trim() === '<div class="pagebreak"></div>') {
      out.push(new Paragraph({ children: [new PageBreak()] })); i++; continue;
    }

    if (line.trim() === '---') {
      out.push(new Paragraph({ text: '', border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: 'C9CDC3' } },
                               spacing: { before: 120, after: 160 } }));
      i++; continue;
    }

    const fig = line.match(/^\{\{fig:([a-z0-9-]+)\}\}$/);
    if (fig) {
      out.push(new Paragraph({
        shading: { type: ShadingType.CLEAR, fill: 'EAF4EE' },
        spacing: { before: 120, after: 120 },
        children: [new TextRun({ text: `[ FIGURE — ${fig[1]} ]  ${FIGS[fig[1]] || ''}`, italics: true, size: 18, color: '0A4F2C' }),
                   new TextRun({ text: '   Leave this line in place. To change the figure, tell me what to change.', size: 16, color: '5B6159' })],
      }));
      i++; continue;
    }

    if (line.startsWith('|')) {
      const rows = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        const cells = lines[i].split('|').slice(1, -1).map(s => s.trim());
        if (!/^[-: ]+$/.test(cells.join(''))) rows.push(cells);
        i++;
      }
      if (rows.length) out.push(makeTable(rows));
      out.push(new Paragraph({ text: '', spacing: { after: 120 } }));
      continue;
    }

    const h = line.match(/^(#{1,4})\s+(.*)$/);
    if (h) {
      const lvl = [HeadingLevel.HEADING_1, HeadingLevel.HEADING_2, HeadingLevel.HEADING_3, HeadingLevel.HEADING_4][h[1].length - 1];
      out.push(new Paragraph({ heading: lvl, spacing: { before: 240, after: 100 }, children: runs(h[2]) }));
      i++; continue;
    }

    if (line.startsWith('> ')) {
      out.push(new Paragraph({
        shading: { type: ShadingType.CLEAR, fill: 'F2F1EC' },
        spacing: { before: 100, after: 100 }, indent: { left: 240, right: 240 },
        children: runs(line.slice(2)),
      }));
      i++; continue;
    }

    const li = line.match(/^[-*]\s+(.*)$/);
    if (li) { out.push(new Paragraph({ bullet: { level: 0 }, spacing: { after: 60 }, children: runs(li[1]) })); i++; continue; }

    const ol = line.match(/^(\d+)\.\s+(.*)$/);
    if (ol) { out.push(new Paragraph({ numbering: { reference: 'nums', level: 0 }, spacing: { after: 60 }, children: runs(ol[2]) })); i++; continue; }

    out.push(new Paragraph({ spacing: { after: 120 }, children: runs(line) }));
    i++;
  }
  return out;
}

// ---------- assemble ----------
const LOG_MODE = process.argv[2] === 'log';
const children = [];
function buildLog() {
  children.push(...convert(fs.readFileSync(path.join(ROOT, '05-decisions.md'), 'utf8')));
  const out = path.join(REPO, 'build', 'Lifecycle-Farm-Plot-Capture-DECISIONS.docx');
  const doc = new Document({
    numbering: { config: [{ reference: 'nums', levels: [{ level: 0, format: 'decimal', text: '%1.', alignment: AlignmentType.START }] }] },
    styles: { default: {
      document: { run: { font: 'Calibri', size: 21 }, paragraph: { spacing: { line: 288 } } },
      title:    { run: { font: 'Calibri', size: 40, bold: true, color: '141613' } },
      heading1: { run: { font: 'Calibri', size: 30, bold: true, color: '141613' } },
      heading2: { run: { font: 'Calibri', size: 25, bold: true, color: '141613' } },
      heading3: { run: { font: 'Calibri', size: 22, bold: true, color: '0A4F2C' } },
      heading4: { run: { font: 'Calibri', size: 21, bold: true, color: '0A4F2C' } },
    } },
    sections: [{ properties: { page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } }, children }],
  });
  Packer.toBuffer(doc).then(b => { fs.writeFileSync(out, b); console.log('wrote', path.basename(out), (b.length/1024).toFixed(0)+'KB'); });
}
if (LOG_MODE) { buildLog(); } else {
children.push(new Paragraph({ heading: HeadingLevel.TITLE, children: runs('Lifecycle Farm Plot Capture') }));
children.push(new Paragraph({ spacing: { after: 200 }, children: runs('*Editable text of the 15 page submission. Nikhil Sampatrao Kumbhar.*') }));
children.push(new Paragraph({ spacing: { after: 100 }, children: runs('**How to use this file.** Edit the words freely. Keep the grey section markers and the green figure lines exactly where they are, because I use them to merge your edits back into the source. The screens and the twelve figures are drawn separately and are not editable here, so if you want something changed in one of those, just say so.') }));
children.push(new Paragraph({ spacing: { after: 100 }, children: runs('Page counts shift as text changes. I will re-measure and re-fit to 15 pages after your edits, so do not worry about length while you write.') }));

SECTIONS.forEach(([file, label], idx) => {
  children.push(new Paragraph({ children: [new PageBreak()] }));
  children.push(new Paragraph({
    shading: { type: ShadingType.CLEAR, fill: 'E4E6E0' },
    spacing: { before: 60, after: 160 },
    children: [new TextRun({ text: `SECTION ${idx + 1} OF 7  ·  ${label}  ·  source: ${file || 'screens/screens.html'}`,
                             bold: true, size: 17, color: '3C423A' })],
  }));
  if (!file) {
    children.push(new Paragraph({ spacing: { after: 100 }, children: runs('*Fifteen mobile screens with their annotations. These are drawn in HTML rather than written, so they are not editable here. The annotation text under each screen can be changed on request.*') }));
    return;
  }
  children.push(...convert(fs.readFileSync(path.join(ROOT, file), 'utf8')));
});

const doc = new Document({
  numbering: { config: [{ reference: 'nums', levels: [{ level: 0, format: 'decimal', text: '%1.', alignment: AlignmentType.START }] }] },
  styles: {
    default: {
      document: { run: { font: 'Calibri', size: 21 }, paragraph: { spacing: { line: 276 } } },
      title:     { run: { font: 'Calibri', size: 40, bold: true, color: '141613' } },
      heading1:  { run: { font: 'Calibri', size: 30, bold: true, color: '141613' } },
      heading2:  { run: { font: 'Calibri', size: 25, bold: true, color: '141613' } },
      heading3:  { run: { font: 'Calibri', size: 22, bold: true, color: '0A4F2C' } },
      heading4:  { run: { font: 'Calibri', size: 21, bold: true, color: '0A4F2C' } },
    },
  },
  sections: [{ properties: { page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } }, children }],
});

const out = path.join(REPO, 'build', 'Lifecycle-Farm-Plot-Capture-EDITABLE.docx');
Packer.toBuffer(doc).then(b => { fs.writeFileSync(out, b); console.log('wrote', path.basename(out), (b.length/1024).toFixed(0)+'KB'); });

}
