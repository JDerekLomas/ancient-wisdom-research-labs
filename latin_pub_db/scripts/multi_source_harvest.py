#!/usr/bin/env python3
"""
multi_source_harvest.py - Harvest Latin publications from multiple sources

Supports:
- Internet Archive (via ia CLI or API)
- HathiTrust (via HathiFiles bulk download)
- Google Books (via metadata exports)
- WorldCat (via OCLC API, requires key)
"""

import csv
import json
import os
import subprocess
import time
from dataclasses import dataclass, asdict
from pathlib import Path
from typing import Iterator, Optional, List
import urllib.request
import urllib.error

SCRIPT_DIR = Path(__file__).parent
BASE_DIR = SCRIPT_DIR.parent
SAMPLES_DIR = BASE_DIR / "samples"
METADATA_DIR = BASE_DIR / "metadata"


@dataclass
class Publication:
    """Unified publication record across sources."""
    source: str
    source_id: str
    title: str
    creator: Optional[str]
    date: Optional[str]
    year: Optional[int]
    publisher: Optional[str]
    language: str
    place: Optional[str]
    url: Optional[str]


def harvest_internet_archive(
    query: str = 'language:lat AND date:[1450 TO 1500]',
    limit: Optional[int] = None
) -> Iterator[Publication]:
    """
    Harvest from Internet Archive using ia CLI.

    Args:
        query: IA search query
        limit: Max items to return (None for all)
    """
    print(f"[IA] Searching: {query}")

    # Get item list
    cmd = ['ia', 'search', query, '--itemlist']
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=300)
        items = result.stdout.strip().split('\n')
        items = [i for i in items if i]
    except (subprocess.SubprocessError, FileNotFoundError) as e:
        print(f"[IA] Error: {e}")
        return

    print(f"[IA] Found {len(items)} items")

    if limit:
        items = items[:limit]

    for i, item_id in enumerate(items):
        if i % 100 == 0:
            print(f"[IA] Processing {i}/{len(items)}...")

        # Rate limit
        time.sleep(0.1)

        try:
            cmd = ['ia', 'metadata', item_id]
            result = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
            data = json.loads(result.stdout)
            metadata = data.get('metadata', data)

            yield Publication(
                source='internet_archive',
                source_id=item_id,
                title=_get_field(metadata, 'title'),
                creator=_get_field(metadata, 'creator'),
                date=_get_field(metadata, 'date'),
                year=_parse_year(_get_field(metadata, 'date')),
                publisher=_get_field(metadata, 'publisher'),
                language=_get_field(metadata, 'language') or 'lat',
                place=None,
                url=f"https://archive.org/details/{item_id}"
            )
        except Exception as e:
            print(f"[IA] Error fetching {item_id}: {e}")


def parse_hathifiles(filepath: Path, limit: Optional[int] = None) -> Iterator[Publication]:
    """
    Parse HathiTrust HathiFiles TSV export.

    Download from: https://www.hathitrust.org/hathifiles
    Format: htid, access, rights, ht_bib_key, description, source,
            source_bib_num, oclc_num, isbn, issn, lccn, title, imprint,
            rights_reason_code, rights_timestamp, us_gov_doc_flag,
            rights_date_used, pub_place, lang, bib_fmt, collection_code,
            content_provider_code, responsible_entity_code, digitization_agent_code,
            access_profile_code, author
    """
    print(f"[HathiTrust] Parsing: {filepath}")

    count = 0
    with open(filepath, 'r', encoding='utf-8') as f:
        reader = csv.reader(f, delimiter='\t')

        for row in reader:
            if len(row) < 26:
                continue

            htid, access, rights, ht_bib_key, description, source, \
            source_bib_num, oclc_num, isbn, issn, lccn, title, imprint, \
            rights_reason_code, rights_timestamp, us_gov_doc_flag, \
            rights_date_used, pub_place, lang, bib_fmt, collection_code, \
            content_provider_code, responsible_entity_code, digitization_agent_code, \
            access_profile_code, author = row[:26]

            # Filter for Latin
            if lang.lower() not in ('lat', 'la', 'latin'):
                continue

            # Parse year from imprint
            year = _parse_year(imprint)

            # Filter by date range if needed
            if year and not (1450 <= year <= 1900):
                continue

            count += 1
            if limit and count > limit:
                break

            yield Publication(
                source='hathitrust',
                source_id=htid,
                title=title,
                creator=author if author else None,
                date=imprint,
                year=year,
                publisher=None,  # Extract from imprint if needed
                language='lat',
                place=pub_place if pub_place else None,
                url=f"https://babel.hathitrust.org/cgi/pt?id={htid}"
            )

    print(f"[HathiTrust] Yielded {count} Latin records")


def _get_field(data: dict, field: str) -> Optional[str]:
    """Extract field, handling lists."""
    value = data.get(field)
    if value is None:
        return None
    if isinstance(value, list):
        return '; '.join(str(v) for v in value if v)
    return str(value) if value else None


def _parse_year(date_str: Optional[str]) -> Optional[int]:
    """Extract 4-digit year from date string."""
    if not date_str:
        return None
    import re
    match = re.search(r'\b(1[4-9]\d{2})\b', str(date_str))
    if match:
        year = int(match.group(1))
        if 1450 <= year <= 1900:
            return year
    return None


def save_to_csv(publications: Iterator[Publication], output_path: Path):
    """Save publications to CSV."""
    output_path.parent.mkdir(parents=True, exist_ok=True)

    with open(output_path, 'w', newline='', encoding='utf-8') as f:
        writer = None
        count = 0

        for pub in publications:
            if writer is None:
                writer = csv.DictWriter(f, fieldnames=list(asdict(pub).keys()))
                writer.writeheader()

            writer.writerow(asdict(pub))
            count += 1

            if count % 1000 == 0:
                print(f"  Saved {count} records...")

    print(f"  Total: {count} records -> {output_path}")


def main():
    """Run multi-source harvest."""
    print("=== Multi-Source Latin Publications Harvester ===\n")

    SAMPLES_DIR.mkdir(parents=True, exist_ok=True)

    # Sample from Internet Archive
    print("--- Internet Archive (sample) ---")
    ia_pubs = harvest_internet_archive(
        query='language:lat AND date:[1450 TO 1500]',
        limit=100
    )
    save_to_csv(ia_pubs, SAMPLES_DIR / "ia_incunabula_sample.csv")

    # If HathiFiles exist, parse them
    hathi_file = BASE_DIR / "hathi_full_20231101.txt"  # Example filename
    if hathi_file.exists():
        print("\n--- HathiTrust (from HathiFiles) ---")
        hathi_pubs = parse_hathifiles(hathi_file, limit=1000)
        save_to_csv(hathi_pubs, SAMPLES_DIR / "hathi_latin_sample.csv")
    else:
        print(f"\n[HathiTrust] No HathiFiles found at {hathi_file}")
        print("  Download from: https://www.hathitrust.org/hathifiles")


if __name__ == "__main__":
    main()
