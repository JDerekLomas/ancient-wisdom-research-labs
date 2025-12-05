# Data Sources Research and Access Methods

## Overview

This document outlines research on accessing major bibliographic catalogues for Latin printed works (1450-1900), including API availability, data formats, and access restrictions.

## Source Catalogues

### 1. Universal Short Title Catalogue (USTC)

**Host Institution**: University of St Andrews
**URL**: https://ustc.ac.uk
**Coverage**: European printing 1450-1600 (expanding to 1700+)

#### Access Methods
- **Web Interface**: Advanced search with filtering capabilities
- **API Status**: Limited public API (research use case required)
- **Data Export**: CSV export available for search results (limited to 1000 records per export)
- **OAI-PMH**: Available for partner institutions
- **Bulk Access**: Requires formal collaboration agreement

#### Query Capabilities
- Language filtering (Latin available)
- Date range filtering (1450-1600)
- Geographic filtering (place of publication)
- Author and title searching
- Subject classification

#### Data Fields Available
- Standard bibliographic fields (title, author, imprint, date)
- Authoritative identifiers
- Library holdings information
- Digital facsimile links (via partner institutions)
- Subject classifications

#### Access Requirements
- Registration required for advanced features
- Institutional affiliation for bulk data access
- Research proposal for large-scale data extraction

### 2. VD16 (Verzeichnis der im deutschen Sprachraum...)

**Host Institution**: Bayerische Staatsbibliothek (Bavarian State Library)
**URL**: https://www.bsb-muenchen.de (via gateway-bayern.de)
**Coverage**: German-language area 16th century (1501-1600)

#### Access Methods
- **Web Interface**: Gateway.Bayern consolidated search
- **OAI-PMH**: Available via German national library infrastructure
- **SRU/SRW**: Search Retrieve URL/URL Web service
- **Z39.50**: Standard library protocol access
- **MARC XML**: Export format available

#### Query Capabilities
- Language filtering (Latin/Latein)
- Date range (1501-1600)
- Place of publication within German-speaking territories
- Format specification
- Publisher/printer searching

#### Data Fields Available
- Complete MARC catalog records
- Authority-controlled author names
- Detailed imprint information
- Physical description (collation, format)
- Library holdings (VD16 libraries)
- Subject headings (GND)

#### Access Requirements
- Open access via web interface
- No registration required for basic use
- API access may require institutional agreement

### 3. VD17 (17th Century German Printing)

**Host Institution**: Bayerische Staatsbibliothek
**Coverage**: German-language area 17th century (1601-1700)

#### Access Methods
- **Web Interface**: Gateway.Bayern
- **OAI-PMH**: Available
- **SRU/SRW**: Web service access
- **MARC XML**: Standard export

#### Special Features
- Enhanced authority control
- Digital facsimile integration
- Cross-references to other national bibliographies

### 4. VD18 (18th Century German Printing)

**Host Institution**: Bayerische Staatsbibliothek
**Coverage**: German-language area 18th century (1701-1800)

#### Access Methods
- Similar to VD16/17
- Enhanced digital facsimile links
- Improved periodical coverage

### 5. English Short Title Catalogue (ESTC)

**Host Institution**: British Library
**URL**: https://estc.bl.uk
**Coverage**: English-speaking territories 1473-1800

#### Access Methods
- **Web Interface**: Advanced search capabilities
- **API**: RESTful API available for research partners
- **Data Licensing**: Commercial and academic licensing options
- **MARC Records**: Available via subscription services
- **OAI-PMH**: Limited availability

#### Query Capabilities
- Language filtering (Latin available)
- Comprehensive date range (1473-1800)
- Geographic filtering (British Isles, North America, etc.)
- Format and genre specifications
- Library holdings information

#### Data Fields Available
- Full bibliographic description
- ESTC control numbers
- British Library integrated catalogue numbers
- Library holdings worldwide
- Digital facsimile links (increasingly available)

#### Access Requirements
- Free registration required
- Institutional subscription for API access
- Data use agreements for bulk downloads

### 6. Additional Catalogues

#### Karlsruher Virtueller Katalog (KVK)
**URL**: https://kvk.bibliothek.kit.edu
**Coverage**: Meta-catalogue of major German and international libraries
**Access**: Web interface, Z39.50, OAI-PMH for some sub-catalogues

#### Heritage of the Printed Book (HPB)
**Host**: CERL (Consortium of European Research Libraries)
**URL**: https://hpb.cerl.org
**Coverage**: European printing to 1830
**Access**: Web interface, API for CERL members

#### WorldCat
**Host**: OCLC
**URL**: https://www.worldcat.org
**Coverage**: Global library catalogues
**Access**: API (OCLC Developer Network), subscription-based

## Technical Implementation Considerations

### 1. Rate Limiting and politeness
- Respect API rate limits (typically 1-10 requests per second)
- Implement exponential backoff for failed requests
- Cache responses to avoid duplicate requests

### 2. Data Format Handling
- MARC XML parsing (use pymarc or similar)
- Dublin Core for OAI-PMH responses
- JSON for modern APIs
- CSV/TSV for bulk downloads

### 3. Authentication and Authorization
- API key management for services requiring keys
- Session management for web-based scraping
- Institutional credentials where required

### 4. Error Handling
- HTTP status code handling
- Network timeout management
- Data validation and quality checks
- Logging of access attempts and failures

## Recommended Data Collection Strategy

### Phase 1: Open Access Catalogues
1. **VD16/VD17/VD18** via Gateway.Bayern (OAI-PMH)
2. **KVK** meta-catalogue harvesting
3. **HPB** via CERL (if accessible)

### Phase 2: Partnership-Based Access
1. **USTC** - Formal collaboration agreement
2. **ESTC** - Research partnership with British Library
3. **WorldCat** - OCLC Developer Network access

### Phase 3: Supplementary Sources
1. National library catalogues (France, Italy, Spain, etc.)
2. Specialized collection catalogues
3. Digital library metadata (Google Books, HathiTrust)

## Data Quality Considerations

### 1. Completeness
- Not all catalogues have complete coverage
- Varying levels of detail in bibliographic records
- Inconsistent language tagging

### 2. Accuracy
- Authority control varies by catalogue
- Date imprecision in early printed works
- Place name variations and historical changes

### 3. Consistency
- Different cataloguing standards (MARC, Dublin Core, custom)
- Varying character encoding and transliteration practices
- Inconsistent treatment of Latin language identification

## Legal and Ethical Considerations

### 1. Terms of Use
- Review each catalogue's terms of service
- Respect copyright and licensing restrictions
- Attribute data sources appropriately

### 2. Research Ethics
- Use data for legitimate scholarly research
- Do not overload catalogue servers
- Share processed data responsibly

### 3. Data Citation
- Follow standard citation practices for bibliographic data
- Include version information for dynamic catalogues
- Provide provenance information for derived datasets

## Technical Infrastructure Requirements

### 1. Storage
- Estimated 5-10 million records total
- Each record: 1-10 KB including metadata
- Total storage: 50-100 GB raw data

### 2. Processing Power
- Deduplication requires significant computational resources
- Text similarity calculations are processor-intensive
- Consider cloud-based processing for large datasets

### 3. Network Bandwidth
- API calls and web scraping require reliable connectivity
- Large downloads may need specialized infrastructure
- Consider academic network privileges for certain sources

## Timeline for Data Collection

### Phase 1 (Months 1-3): Open Access Sources
- VD16/17/18 harvesting via OAI-PMH
- KVK meta-catalogue processing
- Initial data processing and normalization

### Phase 2 (Months 4-6): Partnership Development
- Establish USTC collaboration
- Apply for ESTC research access
- Set up OCLC Developer Network account

### Phase 3 (Months 7-9): Complete Data Collection
- Harvest remaining catalogue data
- Implement comprehensive deduplication
- Generate initial master bibliography

### Phase 4 (Months 10-12): Validation and Refinement
- Quality control and validation
- Error correction and data improvement
- Documentation and release preparation