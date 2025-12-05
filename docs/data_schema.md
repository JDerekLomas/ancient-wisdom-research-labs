# Data Schema for Latin Master Bibliography

## Overview

This document defines the comprehensive data schema for the Latin Master Bibliography CSV file, ensuring compatibility across source catalogues while maintaining scholarly research standards.

## Main Output Schema

### File: `latin_master_bibliography.csv`

#### Core Fields

| Field Name | Data Type | Description | Example | Source |
|------------|-----------|-------------|---------|--------|
| `master_id` | String | Unique identifier for this master record | `LATIN_001234567` | Generated |
| `title` | String | Full title in original language | `De Revolutionibus Orbium Coelestium` | All |
| `title_normalized` | String | Normalized title for matching | `de revolutionibus orbium coelestium` | Processed |
| `author` | String | Author name as commonly cited | `Copernicus, Nicolaus` | All |
| `author_normalized` | String | Normalized author name for matching | `copernicus nicolaus` | Processed |
| `author_dates` | String | Author birth-death dates | `1473-1543` | Authority |
| `author_viaf` | String | VIAF identifier for author | `71418834` | Authority |
| `publication_year` | Integer | Publication year (estimated if uncertain) | `1543` | All |
| `publication_year_uncertainty` | Boolean | True if year is estimated | `FALSE` | Processed |
| `publication_place` | String | Place of publication as printed | `Nuremberg` | All |
| `publication_place_modern` | String | Modern place name | `Nuremberg, Germany` | Processed |
| `publication_place_geo` | String | Geographic coordinates | `49.4542,11.0775` | Geo lookup |

#### Physical Description

| Field Name | Data Type | Description | Example | Source |
|------------|-----------|-------------|---------|--------|
| `printer` | String | Printer/publisher name | `Johannes Petreius` | All |
| `printer_normalized` | String | Normalized printer name | `petreius johannes` | Processed |
| `format` | String | Physical format | `Folio` | MARC/300 |
| `collation` | String | Collation formula | `[*]⁴ A-2Z⁴ 2A-2O⁴` | MARC/300 |
| `pagination` | String | Pagination | `[200] p.` | MARC/300 |
| `illustrations` | Boolean | Contains illustrations | `TRUE` | MARC/300 |
| `illustration_note` | String | Description of illustrations | `Woodcut diagrams` | MARC/300 |
| `language` | String | ISO 639-2 language code | `lat` | All |
| `language_note` | String | Additional language information | `Latin with some Greek` | All |

#### Content Classification

| Field Name | Data Type | Description | Example | Source |
|------------|-----------|-------------|---------|--------|
| `genre` | String | Genre/form | `Treatise` | Subject |
| `subject_lcc` | String | Library of Congress classification | `QB6` | Authority |
| `subject_ddc` | String | Dewey Decimal classification | `521` | Authority |
| `keywords` | String | Subject keywords | `Astronomy;Helioscentrism` | Subject |
| `latinity_level` | String | Quality/style of Latin | `Classical` | Processed |
| `target_audience` | String | Intended audience | `Scholarly` | Analysis |

#### Source Catalogue Identifiers

| Field Name | Data Type | Description | Example | Source |
|------------|-----------|-------------|---------|--------|
| `ustc_id` | String | Universal STC identifier | `001234567` | USTC |
| `vd16_id` | String | VD16 identifier | `234567` | VD16 |
| `vd17_id` | String | VD17 identifier | `1:234567` | VD17 |
| `vd18_id` | String | VD18 identifier | `1234567` | VD18 |
| `estc_id` | String | ESTC identifier | `S123456` | ESTC |
| `worldcat_id` | String | OCLC control number | `123456789` | WorldCat |
| `bnf_id` | String | Bibliothèque nationale identifier | `cb123456789` | BnF |
| `gviaf_id` | String | Group VIAF work identifier | `123456789` | VIAF |

#### Digital Facsimile Information

| Field Name | Data Type | Description | Example | Source |
|------------|-----------|-------------|---------|--------|
| `digital_facsimile_url` | String | URL to digitized version | `https://gallica.bnf.fr/ark:/12148/...` | Multiple |
| `digital_source` | String | Source of digital version | `Gallica` | Metadata |
| `digital_access` | String | Access level | `Open` | Metadata |
| `digital_quality` | String | Quality of digitization | `High` | Assessment |
| `digital_format` | String | Digital format(s) | `PDF;JPEG` | Metadata |
| `digital_iiif` | String | IIIF manifest URL | `https://gallica.bnf.fr/iiif/...` | Metadata |

#### Holdings Information

| Field Name | Data Type | Description | Example | Source |
|------------|-----------|-------------|---------|--------|
| `holding_institutions` | String | Institutions holding copies | `British Library;BnF;Bayerische Staatsbibliothek` | Multiple |
| `holding_count` | Integer | Number of known holding institutions | `15` | Processed |
| `unique_holdings` | Boolean | Known unique copy | `FALSE` | Research |

#### Deduplication Metadata

| Field Name | Data Type | Description | Example | Source |
|------------|-----------|-------------|---------|--------|
| `deduplication_group` | String | Group ID for duplicate records | `GROUP_001234` | Processed |
| `deduplication_confidence` | Float | Confidence score (0-1) | `0.95` | Algorithm |
| `source_catalogues` | String | List of source catalogues | `USTC;VD16` | Processed |
| `primary_source` | String | Primary source for merged record | `VD16` | Processed |
| `record_status` | String | Status of this record | `Validated` | Manual |

#### Quality and Research Metadata

| Field Name | Data Type | Description | Example | Source |
|------------|-----------|-------------|---------|--------|
| `completeness_score` | Float | Data completeness (0-1) | `0.85` | Calculated |
| `verification_status` | String | Manual verification status | `Verified` | Manual |
| `notes` | String | General notes | `Author's main work; includes dedication` | Various |
| `processing_notes` | String | Machine processing notes | `Automated date normalization applied` | Processed |
| `research_interest` | String | Notable research significance | `Foundational work of modern astronomy` | Manual |
| `bibliographic_references` | String | References to standard bibliographies | `Houzeau-Lancaster 1342` | Manual |

#### Administrative Fields

| Field Name | Data Type | Description | Example | Source |
|------------|-----------|-------------|---------|--------|
| `date_created` | Date | Record creation date | `2024-01-15` | System |
| `date_modified` | Date | Last modification date | `2024-01-20` | System |
| `created_by` | String | Record creation source | `System_USTC_import` | System |
| `modified_by` | String | Last modification source | `Manual_Review` | System |
| `version` | String | Record version | `1.2` | System |

## CSV Format Specifications

### File Encoding
- **Encoding**: UTF-8 with BOM
- **Line endings**: LF (Unix)
- **Quote character**: Double quotes (")
- **Field separator**: Comma (,)

### Field Quoting Rules
- Fields containing commas, quotes, or newlines must be quoted
- Embedded quotes are escaped by doubling them ("")
- Empty fields are represented by empty strings

### Data Type Specifications

#### Text Fields
- Most fields are variable-length text
- No arbitrary length limits (within CSV specifications)
- Unicode characters fully supported
- Leading/trailing whitespace trimmed

#### Numeric Fields
- **Integer fields**: Whole numbers without decimal points
- **Float fields**: Decimal numbers with standard decimal notation
- Missing values represented by empty strings

#### Date Fields
- **Format**: ISO 8601 (YYYY-MM-DD)
- **Date precision**: Day, month, or year level as available
- Missing components omitted (YYYY or YYYY-MM)

#### Boolean Fields
- **TRUE values**: "TRUE", "true", "1", "yes"
- **FALSE values**: "FALSE", "false", "0", "no"
- Empty string for unknown/null values

## Data Validation Rules

### Required Fields
These fields must have non-null values:
- `master_id`
- `title`
- `language`

### Conditional Requirements
- If `publication_year` has value, `publication_year_uncertainty` must be specified
- If `digital_facsimile_url` has value, `digital_source` must be specified
- If `author` has value, `author_normalized` must be generated

### Format Validation
- Dates must be valid dates
- Numeric fields must be valid numbers
- URLs must be valid URLs (where present)
- Geographic coordinates must be valid latitude/longitude pairs

### Relationship Validation
- All source catalogue IDs must correspond to actual catalogue formats
- `source_catalogues` field must list catalogues that have corresponding IDs
- `deduplication_group` values must be consistent across duplicate records

## Indexing and Performance Considerations

### Primary Index
- `master_id` should be the primary key for database imports
- Should be indexed for fast lookups

### Secondary Indexes
For performance in analytical queries:
- `author_normalized`
- `title_normalized` (for title searches)
- `publication_year`
- `language`
- `publication_place_modern`

### Full-text Search Fields
- `title` (original title)
- `author` (original author name)
- `notes`
- `keywords`

## Data Processing Workflow

### 1. Collection Phase
- Raw data collected from each source catalogue
- Initial field mapping and normalization
- Quality checks and validation

### 2. Normalization Phase
- Text normalization for matching
- Date and place standardization
- Authority file integration

### 3. Deduplication Phase
- Record matching and grouping
- Merge conflict resolution
- Confidence scoring

### 4. Enhancement Phase
- Digital facsimile link harvesting
- Geographic coordinate lookup
- Research significance assessment

### 5. Validation Phase
- Manual review of high-interest records
- Quality control sampling
- Final data validation

## Usage Examples

### Loading into Pandas
```python
import pandas as pd

df = pd.read_csv('latin_master_bibliography.csv',
                 encoding='utf-8-sig',
                 dtype={
                     'master_id': str,
                     'publication_year': pd.Int64Dtype(),
                     'holding_count': pd.Int64Dtype(),
                     'deduplication_confidence': float
                 })
```

### Database Import (PostgreSQL)
```sql
CREATE TABLE latin_master_bibliography (
    master_id VARCHAR(20) PRIMARY KEY,
    title TEXT NOT NULL,
    title_normalized VARCHAR(1000),
    author VARCHAR(500),
    author_normalized VARCHAR(500),
    publication_year INTEGER,
    -- ... other fields
);

COPY latin_master_bibliography FROM 'latin_master_bibliography.csv'
WITH (FORMAT csv, HEADER true, ENCODING 'UTF8');
```

### Basic Filtering
```python
# 16th century Latin works
latin_1500s = df[
    (df['language'] == 'lat') &
    (df['publication_year'] >= 1500) &
    (df['publication_year'] < 1600)
]

# Works with digital facsimiles
digital_copies = df[df['digital_facsimile_url'].notna()]
```

## Version Control and Updates

### Versioning Strategy
- Semantic versioning for releases (MAJOR.MINOR.PATCH)
- MAJOR: Schema changes breaking compatibility
- MINOR: New fields, non-breaking changes
- PATCH: Data corrections, minor updates

### Change Management
- Maintain change log of schema modifications
- Document field additions, modifications, deletions
- Provide migration scripts for major version changes

### Backward Compatibility
- Preserve existing field names and formats where possible
- Add new fields at end of record
- Deprecated fields maintained for at least one major version