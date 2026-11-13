"""Update local script and stylesheet URLs to use a shared asset revision."""

import argparse
import hashlib
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ASSET = re.compile(r'(?P<prefix><(?:script src|link rel="stylesheet" href)=")'
                   r'(?P<path>[\w./-]+\.(?:js|css))(?:\?v=[0-9a-f]+)?"')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="report outdated references without writing")
    args = parser.parse_args()
    pages = {page: page.read_text(encoding="utf-8") for page in sorted(ROOT.glob("*.html"))}
    assets = {match["path"] for html in pages.values() for match in ASSET.finditer(html)}
    digest = hashlib.sha256()
    for path in sorted(assets):
        digest.update(path.encode() + b"\0")
        digest.update(hashlib.sha256((ROOT / path).read_bytes()).digest())
    version = digest.hexdigest()[:12]
    outdated = []
    for page, html in pages.items():
        updated = ASSET.sub(lambda match: f'{match["prefix"]}{match["path"]}?v={version}"', html)
        if updated == html:
            continue
        if args.check:
            outdated.append(page.name)
        else:
            page.write_text(updated, encoding="utf-8")
    if outdated:
        parser.exit(1, f"Run python3 scripts/version_assets.py to update: {', '.join(outdated)}\n")


if __name__ == "__main__":
    main()
