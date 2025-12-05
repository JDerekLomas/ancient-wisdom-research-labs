# Methodology for Latin Master Bibliography

## Overview

This document outlines the methodology for creating a comprehensive, deduplicated master bibliography of Latin printed works (1450-1900) from multiple international catalogues.

## Scope Definition

### Time Period
- **Start**: 1450 (beginning of printing with movable type)
- **End**: 1900 (end of the 19th century)

### Language Inclusion
- **Primary**: Works entirely in Latin
- **Secondary**: Works with significant Latin content (bilingual works, Latin titles with other language content)
- **Exclusion**: Works with minimal Latin (short quotes, titles only)

### Geographic Coverage
- Universal coverage through source catalogues
- No geographic restrictions on place of publication

## Source Catalogues

### 1. Universal Short Title Catalogue (USTC)
- **Coverage**: European printing 1450-1600, expanding beyond
- **Strengths**: Comprehensive early printing coverage, standardized format
- **Access Methods**: API, bulk data downloads
- **Update Frequency**: Regular updates

### 2. VD16/VD17/VD18 (Verzeichnis der im deutschen Sprachraum...)
- **Coverage**: German-language area printing by century
- **Strengths**: Detailed bibliographic records, strong German coverage
- **Access Methods**: API, OAI-PMH, web interface
- **Language**: German interface, multilingual content

### 3. English Short Title Catalogue (ESTC)
- **Coverage**: English-speaking territories 1473-1800
- **Strengths**: Comprehensive English and Irish coverage
- **Access Methods**: API, bulk data downloads
- **Holdings**: British Library, other major libraries

### 4. Additional Catalogues
- **HPB** (Heritage of the Printed Book)
- **NUKAT** (National Union Catalog of Poland)
- **SUDOC** (French academic catalogue)
- **Karlsruher Virtueller Katalog (KVK)**
- **WorldCat** (selected records)

## Data Collection Process

### 1. Catalogue-Specific Harvesting

For each source catalogue:

#### Query Strategy
- Language filters: Latin language identifiers
- Date filters: 1450-1900
- Record type: Books, pamphlets, broadsheets
- Exclusions: Serials, manuscripts, non-book materials

#### Data Fields Targeted
- Standard bibliographic fields (title, author, imprint, date)
- Authoritative identifiers (ISBN, OCLC, national bibliography numbers)
- Physical description (collation, pagination, format)
- Subject headings and classification
- Library holdings information
- Digital facsimile links

#### Technical Implementation
- API calls where available
- Web scraping with rate limiting as fallback
- OAI-PMH harvesting for supporting catalogues
- Manual data entry for catalogues without automated access

### 2. Data Normalization

#### Field Standardization
- **Titles**: Unicode normalization, removal of formatting artifacts
- **Authors**: Standardized name forms, authority file linking
- **Dates**: Gregorian calendar conversion, date range normalization
- **Places**: Modern place names with historical variants
- **Languages**: ISO 639-2 language codes

#### Character Encoding
- UTF-8 as primary encoding
- Special character handling for Latin
- Diacritic preservation and normalization

### 3. Quality Control

#### Validation Rules
- Mandatory field presence (title, date)
- Date range validation (1450-1900)
- Language code validation
- Format consistency checks

#### Error Handling
- Duplicate record detection within catalogues
- Inconsistent data flagging
- Manual review queues for ambiguous cases

## Deduplication Methodology

### 1. Matching Algorithm

#### Primary Matching Fields
- **Title similarity** (normalized, ignoring formatting)
- **Author name** (normalized, authority file matching)
- **Publication date** (within reasonable tolerance)
- **Publication place** (normalized place names)

#### Secondary Matching Fields
- **Physical description** (collation, pagination)
- **Printer/Publisher** information
- **Format** (folio, quarto, octavo, etc.)

### 2. Similarity Scoring

#### Title Matching
- Exact match: 1.0
- High similarity (>0.9): 0.8
- Medium similarity (0.7-0.9): 0.6
- Low similarity (0.5-0.7): 0.4

#### Author Matching
- Exact normalized match: 1.0
- Authority file match: 0.9
- High similarity: 0.7
- Different authors: 0.0

#### Date Matching
- Exact match: 1.0
- Within 1 year: 0.9
- Within 2 years: 0.7
- Within 5 years: 0.5
- More than 5 years: 0.2

#### Combined Score
- Weighted combination of all fields
- Threshold tuning for optimal precision/recall
- Manual review for borderline cases

### 3. Merge Strategy

#### Record Hierarchy
- Most complete record as primary
- Additional information merged from duplicates
- Conflicting information flagged for review

#### Source Attribution
- All source catalogue identifiers preserved
- Confidence scores for merged data
- Provenance tracking for research validity

## Digital Facsimile Integration

### 1. Link Harvesting
- Direct links from source catalogues
- Cross-referencing with digital libraries
- API integration with major digitization projects

### 2. Digital Library Partners
- **Google Books**
- **HathiTrust Digital Library**
- **Internet Archive**
- **Europeana**
- **Digital Public Library of America (DPLA)**
- **Gallica (Bibliothèque nationale de France)**

### 3. Link Validation
- Automated link checking
- Content verification (matches bibliographic record)
- Access status tracking (open access, restricted, paywall)

## Output Schema

### Main CSV Fields

```csv
master_id,unique_identifier_across_catalogs
title,normalized_title
author,standardized_author_name
author_dates,birth_death_years
publication_year,standardized_year
publication_place,modern_place_name
printer,publisher_name
format,physical_format
pages,pagination_info
language,iso_language_code
ustc_id,USTC_identifier
vd16_id,VD16_identifier
vd17_id,VD17_identifier
vd18_id,VD18_identifier
estc_id,ESTC_identifier
worldcat_id,OCLC_control_number
digital_facsimile_url,link_to_digitized_version
digital_facsimile_source,name_of_digital_library
deduplication_confidence,score_0-1
source_catalogues,list_of_attributing_catalogs
notes,machine_generated_and_manual_notes
```

## Quality Assurance

### 1. Statistical Validation
- Record counts by catalogue and time period
- Geographic distribution analysis
- Language distribution verification
- Duplicate rate analysis

### 2. Sample Verification
- Manual review of random samples
- Expert validation for known works
- Cross-checking with established bibliographies

### 3. Error Tracking
- Systematic error logging
- Performance metrics by catalogue
- False positive/negative rate monitoring

## Maintenance and Updates

### 1. Update Frequency
- Quarterly data refreshes
- Annual comprehensive reprocessing
- Continuous integration of new catalogue records

### 2. Version Control
- Semantic versioning for releases
- Change logs documenting modifications
- Preservation of historical data versions

### 3. Community Contribution
- Error reporting mechanisms
- Expert review processes
- Integration with scholarly workflows

## Limitations and Considerations

### 1. Coverage Gaps
- Catalogue-specific biases and omissions
- Under-representation of certain regions
- Variable catalogue quality and completeness

### 2. Deduplication Challenges
- Variant bibliographic traditions
- Incomplete or erroneous source data
- Historical printing practices complexity

### 3. Digital Access
- Variable facsimile quality and completeness
- Access restrictions and licensing issues
- Broken links and changed URLs

## Future Enhancements

### 1. Additional Catalogues
- Integration of national library catalogues
- Specialized collection catalogues
- Auction and antiquarian book dealer records

### 2. Advanced Features
- Machine learning-based deduplication
- Automatic subject classification
- Citation network analysis

### 3. User Interface
- Web-based search and browsing interface
- API access for programmatic use
- Integration with library systems