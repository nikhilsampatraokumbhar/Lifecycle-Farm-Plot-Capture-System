#!/usr/bin/env python3
"""Turn the markdown sections into HTML, then into a PDF."""
import sys, subprocess, pathlib, markdown

ROOT = pathlib.Path(__file__).resolve().parent
REPO = ROOT.parent
CHROME = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome"

def inject_figures(html):
    """Swap {{fig:name}} placeholders for the SVG in assets/figures/name.html."""
    import re
    def sub(m):
        f = ROOT / 'assets' / 'figures' / f'{m.group(1)}.html'
        return f.read_text() if f.exists() else f'<p><b>missing figure: {m.group(1)}</b></p>'
    return re.sub(r'<p>\{\{fig:([a-z0-9-]+)\}\}</p>', sub, html)

def to_html(md_path, out_path, title):
    md = markdown.Markdown(extensions=['tables', 'attr_list', 'sane_lists'])
    body = inject_figures(md.convert(pathlib.Path(md_path).read_text()))
    css = (ROOT / 'assets' / 'doc.css').read_text()
    html = (f"<title>{title}</title>\n<style>\n{css}\n</style>\n"
            f'<div class="sheet">\n{body}\n</div>\n')
    pathlib.Path(out_path).write_text(html)
    return out_path

def to_pdf(html_path, pdf_path):
    subprocess.run([CHROME, "--headless", "--no-sandbox", "--disable-gpu",
                    "--no-pdf-header-footer", f"--print-to-pdf={pdf_path}",
                    str(html_path)], capture_output=True, check=True)
    return pdf_path

def pages(pdf_path):
    sys.path.insert(0, str(REPO / '.pdfstub'))
    from pypdf import PdfReader
    return len(PdfReader(pdf_path).pages)

if __name__ == '__main__':
    src, title = sys.argv[1], sys.argv[2]
    stem = pathlib.Path(src).stem
    (REPO / 'build').mkdir(exist_ok=True)
    h = to_html(src, REPO / 'build' / f'{stem}.html', title)
    p = to_pdf(h, REPO / 'build' / f'{stem}.pdf')
    print(f'{stem}: {pages(p)} pages')
