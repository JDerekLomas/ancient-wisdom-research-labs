#!/bin/bash
# sample_incunabula.sh - Sample Latin incunabula (1450-1500) from multiple sources
# Run locally where network access is available

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BASE_DIR="$(dirname "$SCRIPT_DIR")"
SAMPLES_DIR="$BASE_DIR/samples"

mkdir -p "$SAMPLES_DIR"

echo "=== Latin Incunabula Sampler ==="
echo "Sampling from 1450-1500 period"
echo ""

# ============================================
# SOURCE 1: Internet Archive
# ============================================
echo "--- Internet Archive ---"

if command -v ia &> /dev/null; then
    echo "Searching IA for Latin incunabula..."

    # Get full list first
    ia search 'language:lat AND date:[1450 TO 1500]' --itemlist > "$SAMPLES_DIR/ia_full.txt" 2>/dev/null || true
    IA_TOTAL=$(wc -l < "$SAMPLES_DIR/ia_full.txt")
    echo "  Found: $IA_TOTAL items"

    # Random sample of 100
    if [ "$IA_TOTAL" -gt 0 ]; then
        shuf -n 100 "$SAMPLES_DIR/ia_full.txt" > "$SAMPLES_DIR/sample_ia.txt"
        echo "  Sampled: 100 items -> sample_ia.txt"
    fi
else
    echo "  Skipped: 'ia' CLI not found (pip install internetarchive)"
fi

# ============================================
# SOURCE 2: HathiTrust
# ============================================
echo ""
echo "--- HathiTrust ---"

# HathiTrust Bibliographic API
# Note: Their API is limited; may need to use bulk data download instead
# https://www.hathitrust.org/hathifiles

echo "Querying HathiTrust API..."

# Try the bib API (limited functionality)
curl -s "https://catalog.hathitrust.org/api/volumes/brief/json/oclc:1234567" \
    -o "$SAMPLES_DIR/hathi_test.json" 2>/dev/null || true

if [ -s "$SAMPLES_DIR/hathi_test.json" ]; then
    echo "  API accessible"
    echo "  Note: HathiTrust API doesn't support date-range search"
    echo "  Recommendation: Use HathiFiles bulk download for full coverage"
    echo "  https://www.hathitrust.org/hathifiles"
else
    echo "  API not accessible or returned empty"
fi

# Alternative: Use their hathifiles (monthly TSV dumps)
echo ""
echo "  For bulk access, download HathiFiles:"
echo "  wget https://www.hathitrust.org/filebrowser/download/269069"

# ============================================
# SOURCE 3: Google Books (via BigQuery public dataset)
# ============================================
echo ""
echo "--- Google Books ---"
echo "  Google Books metadata available via BigQuery:"
echo "  Dataset: bigquery-public-data.google_books.gdelt_books"
echo "  Or use: https://storage.googleapis.com/books/ngrams/books/datasetsv3.html"

# ============================================
# SOURCE 4: WorldCat (via OCLC API)
# ============================================
echo ""
echo "--- WorldCat ---"
echo "  WorldCat Search API requires OCLC API key"
echo "  https://www.oclc.org/developer/api/oclc-apis/worldcat-search-api.en.html"
echo "  Query: srw.la=lat AND srw.yr=1450-1500"

# ============================================
# SUMMARY
# ============================================
echo ""
echo "=== Sample Files Created ==="
ls -la "$SAMPLES_DIR"/*.txt 2>/dev/null || echo "No sample files yet"

echo ""
echo "=== Next Steps ==="
echo "1. Run: ia search '...' --itemlist to get full IA list"
echo "2. Download HathiFiles for comprehensive HathiTrust data"
echo "3. For each item ID, fetch metadata:"
echo "   ia metadata <id> > metadata/<id>.json"
