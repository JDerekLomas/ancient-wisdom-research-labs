# Latin Master Bibliography (1450-1900)

A comprehensive, deduplicated master bibliography of Latin printed works from 1450-1900, created by combining data from multiple major bibliographic catalogues.

## Project Goal

To produce a single, research-grade CSV file (`data/processed/final/latin_master_bibliography.csv`) that answers:

1. **What Latin works/editions exist across USTC, VD16/17/18, ESTC, etc.?**
2. **Which catalogs attest each work?**
3. **Is there any known digital facsimile?**

## Source Catalogues

- **USTC** (Universal Short Title Catalogue) - Comprehensive coverage of early printed works
- **VD16** (Verzeichnis der im deutschen Sprachraum erschienenen Drucke des 16. Jahrhunderts)
- **VD17** (Verzeichnis der im deutschen Sprachraum erschienenen Drucke des 17. Jahrhunderts)
- **VD18** (Verzeichnis der im deutschen Sprachraum erschienenen Drucke des 18. Jahrhunderts)
- **ESTC** (English Short Title Catalogue)
- **Additional catalogues** as identified

## Project Structure

```
latinclaude/
├── data/
│   ├── raw/                    # Raw data from each catalogue
│   │   ├── ustc/
│   │   ├── vd16/
│   │   ├── vd17/
│   │   ├── vd18/
│   │   ├── estc/
│   │   └── other/
│   └── processed/
│       ├── intermediate/       # Intermediate processing results
│       └── final/             # Final outputs
├── scripts/                   # Data collection and processing scripts
├── notebooks/                 # Jupyter notebooks for analysis
├── docs/                      # Documentation and methodology
└── config/                    # Configuration files
```

## Main Output

**`data/processed/final/latin_master_bibliography.csv`**

Each row represents a deduplicated Latin work/edition, including:
- Bibliographic information (title, author, date, place, printer)
- Source catalogue attestations
- Digital facsimile links where available
- Deduplication confidence scores

## Methodology

1. **Data Collection**: Harvest Latin-language records from each source catalogue
2. **Normalization**: Standardize bibliographic data across different catalog formats
3. **Deduplication**: Identify and merge duplicate entries across catalogues
4. **Enrichment**: Add digital facsimile information and other metadata
5. **Validation**: Quality control and confidence scoring

## Current Status

🚧 **Project in initial setup phase**

- [x] Project structure created
- [ ] Data source research and access setup
- [ ] Data collection scripts
- [ ] Deduplication implementation
- [ ] Output generation

## Usage

Once complete, the main bibliography CSV can be:
- Analyzed for statistical research on Latin printing
- Used as a reference for scholarly work
- Integrated into digital humanities projects
- Extended with additional catalogues or metadata

## Contributing

This project is designed for academic research use. Documentation of methodology and data processing transparency are priorities for research reproducibility.

## License

[License to be determined based on source catalogue terms of use]