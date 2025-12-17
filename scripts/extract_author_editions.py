#!/usr/bin/env python3
"""Extract year-by-year edition counts for authors from USTC data."""

import csv
import json
from collections import defaultdict

# Authors we want to track (normalized names to match USTC)
TARGET_AUTHORS = {
    # Classical Authors
    "Cicero": ["Cicero, Marcus Tullius"],
    "Aristotle": ["Aristoteles", "Aristotle"],
    "Ovid": ["Ovidius Naso, Publius", "Ovid"],
    "Virgil": ["Vergilius Maro, Publius", "Virgil"],
    "Terence": ["Terentius Afer, Publius", "Terence"],
    "Horace": ["Horatius Flaccus, Quintus", "Horace"],
    "Seneca": ["Seneca, Lucius Annaeus", "Seneca the Younger"],
    "Pliny the Elder": ["Plinius Secundus, Gaius", "Pliny the Elder"],

    # Church Fathers & Medieval
    "Thomas Aquinas": ["Thomas, Aquinas, Saint", "Thomas Aquinas"],
    "Augustine": ["Augustinus, Aurelius, Saint", "Augustine of Hippo"],
    "Bonaventure": ["Bonaventura, Saint"],
    "Duns Scotus": ["Duns Scotus, Johannes", "John Duns Scotus"],
    "Bartolus": ["Bartolus de Saxoferrato"],

    # Renaissance Humanists
    "Erasmus": ["Erasmus, Desiderius", "Erasmus"],
    "Josse Bade": ["Badius Ascensius, Jodocus"],
    "Justus Lipsius": ["Lipsius, Justus"],
    "Poliziano": ["Poliziano, Angelo", "Politian"],

    # Reformers
    "Melanchthon": ["Melanchthon, Philipp"],
    "Luther": ["Luther, Martin"],
    "Calvin": ["Calvin, Jean", "Calvin, John"],
    "Beza": ["Bèze, Théodore de", "Beza, Theodore"],

    # Scientists & Physicians
    "Galen": ["Galenus", "Galen"],
    "Hippocrates": ["Hippocrates"],
    "Avicenna": ["Avicenna", "Ibn Sina"],
    "Euclid": ["Euclides", "Euclid"],
}

# Reverse mapping for lookup
author_lookup = {}
for display_name, variants in TARGET_AUTHORS.items():
    for variant in variants:
        author_lookup[variant.lower()] = display_name

def normalize_author(author_name):
    """Try to match author name to our target list."""
    if not author_name:
        return None
    author_lower = author_name.lower().strip()

    # Direct match
    if author_lower in author_lookup:
        return author_lookup[author_lower]

    # Partial match
    for variant, display_name in author_lookup.items():
        if variant in author_lower or author_lower in variant:
            return display_name

    return None

def main():
    # Count editions by author and year
    author_year_counts = defaultdict(lambda: defaultdict(int))
    author_total_counts = defaultdict(int)

    with open('/Users/dereklomas/secondrenaissance/data/ustc/ustc_editions.csv', 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            # Check if it's Latin
            lang = row.get('language_1', '').lower()
            if 'latin' not in lang:
                continue

            # Get author and year
            author = row.get('author_name_1', '')
            year_str = row.get('year', '')

            # Try to parse year
            try:
                year = int(year_str)
                if year < 1450 or year > 1700:
                    continue
            except (ValueError, TypeError):
                continue

            # Normalize author
            display_name = normalize_author(author)
            if display_name:
                author_year_counts[display_name][year] += 1
                author_total_counts[display_name] += 1

    # Build output structure
    output = {}
    for author, year_counts in author_year_counts.items():
        years = sorted(year_counts.keys())
        output[author] = {
            "total": author_total_counts[author],
            "start": min(years),
            "end": max(years),
            "years": {str(y): c for y, c in sorted(year_counts.items())}
        }

    # Sort by total count
    sorted_output = dict(sorted(output.items(), key=lambda x: -x[1]["total"]))

    # Write output
    with open('/Users/dereklomas/secondrenaissance/viz/public/author_editions_by_year.json', 'w') as f:
        json.dump(sorted_output, f, indent=2)

    print(f"Processed {len(sorted_output)} authors")
    for author, data in list(sorted_output.items())[:10]:
        print(f"  {author}: {data['total']} editions ({data['start']}-{data['end']})")

if __name__ == "__main__":
    main()
