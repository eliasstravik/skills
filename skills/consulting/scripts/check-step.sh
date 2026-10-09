#!/bin/sh

# Static check of one step page. Exit 0 and no output on pass; exit 1 with one line per
# failed rule otherwise. The rules are the "Static" list in references/page-contract.md.

set -u

if [ "$#" -ne 2 ]; then
  echo "Usage: check-step.sh <step-file> <recommended-key>" >&2
  exit 2
fi

if [ ! -f "$1" ]; then
  echo "file: step page does not exist: $1"
  exit 1
fi

exec python3 -c 'import re, sys
from html.parser import HTMLParser

path, key = sys.argv[1], sys.argv[2]
text = open(path, encoding="utf-8", errors="replace").read()
MEDIA = ("png", "jpg", "jpeg", "gif", "webp", "avif", "mp4", "webm", "mp3", "wav", "ogg")
MEDIA_TAGS = ("img", "video", "audio", "source")
failed = []

def fail(rule, detail):
    line = "%s: %s" % (rule, detail)
    if line not in failed:
        failed.append(line)

def media_ok(value):
    return re.fullmatch(r"\.\./media/[A-Za-z0-9._-]+\.(%s)" % "|".join(MEDIA), value, re.I) is not None

def check_url(value, where, tag=None, attr=None):
    value = value.strip()
    if not value or value.startswith("#"):
        return
    if value.lower().startswith("data:image/"):
        return
    if value == "../fonts/InterVariable.woff2":
        if where != "css":
            fail("external", "%s uses the font outside an @font-face rule" % where)
        return
    if value.startswith("../media/"):
        if not media_ok(value):
            fail("media", "%s points at a media file with a disallowed name or extension: %s" % (where, value))
        elif where == "css" or not (tag in MEDIA_TAGS and attr in ("src", "srcset", "poster")):
            fail("media", "only img, video, audio and source may load media, not %s: %s" % (where, value))
        return
    fail("external", "%s points outside the file: %s" % (where, value[:80]))

def check_css(css):
    for match in re.finditer(r"@import\b", css, re.I):
        fail("external", "CSS @import is not allowed")
    for match in re.finditer(r"url\(\s*([\x22\x27]?)(.*?)\1\s*\)", css, re.I | re.S):
        check_url(match.group(2), "css")

class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.html_tags = 0
        self.root = None
        self.viewport = False
        self.h1 = 0
        self.inside = None
        self.scripts = []
        self.styles = []
    def handle_starttag(self, tag, attrs):
        values = dict((name, value or "") for name, value in attrs)
        if tag == "html":
            self.html_tags += 1
            if self.root is None:
                self.root = values
        if tag == "meta" and values.get("name", "").lower() == "viewport":
            self.viewport = True
        if tag == "h1":
            self.h1 += 1
        if tag in ("script", "style"):
            self.inside = tag
            (self.scripts if tag == "script" else self.styles).append("")
        where = "<%s>" % tag
        for attr in ("src", "href", "poster", "action", "formaction", "data", "xlink:href"):
            if attr in values:
                check_url(values[attr], "%s %s" % (where, attr), tag, attr)
        if "srcset" in values:
            for part in values["srcset"].split(","):
                bits = part.split()
                if bits:
                    check_url(bits[0], "%s srcset" % where, tag, "srcset")
        if "style" in values:
            check_css(values["style"])
    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
    def handle_endtag(self, tag):
        if tag == self.inside:
            self.inside = None
    def handle_data(self, data):
        if self.inside == "script":
            self.scripts[-1] += data
        elif self.inside == "style":
            self.styles[-1] += data

page = Page()
page.feed(text)
page.close()

if not re.match(r"\s*<!doctype html", text, re.I) or page.html_tags != 1:
    fail("document", "the file must be one HTML document starting with <!doctype html> and one <html> tag")
if not page.viewport:
    fail("viewport", "the viewport meta tag is missing")
for css in page.styles:
    check_css(css)
script = "\n".join(page.scripts)
for token in ("fetch(", "new XMLHttpRequest", "new WebSocket", "new EventSource", "import("):
    if token in script:
        fail("network", "script text contains %s" % token)
if re.search(r"^\s*import\s", script, re.M):
    fail("network", "script text has a line starting with import")
expected = "data-recommended=\x22%s\x22" % key
if page.root is None or page.root.get("data-recommended") != key or expected not in text:
    fail("recommended", "the <html> tag must carry %s" % expected)
if "document.documentElement.dataset.option" not in text:
    fail("option", "the token document.documentElement.dataset.option is missing")
if "hashchange" not in text:
    fail("hashchange", "the token hashchange is missing")
if page.h1 and "window.top" not in text:
    fail("heading", "the page has an <h1> but no window.top test to hide it when embedded")

if failed:
    print("\n".join(failed))
    sys.exit(1)' "$1" "$2"
