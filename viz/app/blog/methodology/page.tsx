import BlogLayout from "../BlogLayout";

export default function Methodology() {
  return (
    <BlogLayout
      title="Methodology"
      tag="Methods"
    >
      <p style={{
        fontFamily: 'Newsreader, Georgia, serif',
        fontSize: '22px',
        lineHeight: 1.6,
        color: '#444',
        marginBottom: '32px',
      }}>
        Data sources and research methods behind our analysis of Latin publishing,
        digitization, and translation.
      </p>

      <h2>Primary Data Source</h2>

      <h3 style={{ color: '#9e4a3a', fontSize: '20px', marginTop: '24px' }}>Universal Short Title Catalogue (USTC)</h3>
      <p>
        All bibliographic data comes from the{" "}
        <a href="https://www.ustc.ac.uk/" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
          Universal Short Title Catalogue
        </a>
        , maintained by the University of St Andrews. The USTC is the most comprehensive database of early European printing (1450–1700).
      </p>

      <figure style={{
        background: '#f5f0e8',
        border: '1px solid #e0d8c8',
        borderRadius: '8px',
        padding: '24px',
        margin: '32px 0',
      }}>
        <h4 style={{ fontWeight: 600, marginBottom: '12px', color: '#1a1612' }}>USTC Statistics (as of 2025)</h4>
        <ul style={{ color: '#444', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong style={{ color: '#1a1612' }}>1.65 million</strong> editions catalogued</li>
          <li><strong style={{ color: '#1a1612' }}>7 million</strong> surviving copies located</li>
          <li><strong style={{ color: '#1a1612' }}>10,000+</strong> libraries, archives, and museums worldwide</li>
          <li><strong style={{ color: '#1a1612' }}>500,000+</strong> digital links to scanned copies</li>
        </ul>
        <p style={{ color: '#666', fontSize: '12px', marginTop: '12px' }}>
          Source:{" "}
          <a href="https://www.ustc.ac.uk/about" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
            USTC About Page
          </a>
        </p>
      </figure>

      <p>
        We queried the USTC for records where the language field contains "Latin," yielding <strong style={{ color: '#1a1612' }}>533,320 Latin-language edition records</strong> (32.7% of the total catalogue).
      </p>

      <figure style={{
        background: '#fff9f0',
        border: '1px solid #c9a86c',
        borderRadius: '8px',
        padding: '24px',
        margin: '32px 0',
      }}>
        <h4 style={{ color: '#c9a86c', fontWeight: 600, marginBottom: '12px' }}>Editions vs. Works: Our Analysis</h4>
        <p style={{ color: '#444', fontSize: '14px', marginBottom: '16px' }}>
          The USTC counts <em>editions</em> (individual printings), not unique works. A popular text like Cicero's <em>De Officiis</em> might appear in 500+ editions. To estimate unique works, we analyzed the USTC Latin dataset:
        </p>
        <div style={{
          background: '#f5f0e8',
          borderRadius: '6px',
          padding: '16px',
          margin: '16px 0',
        }}>
          <table style={{ width: '100%', fontSize: '14px' }}>
            <tbody style={{ color: '#444' }}>
              <tr style={{ borderBottom: '1px solid #e0d8c8' }}>
                <td style={{ padding: '8px 0' }}>Total Latin editions</td>
                <td style={{ padding: '8px 0', fontFamily: 'monospace', textAlign: 'right' }}>533,307</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e0d8c8' }}>
                <td style={{ padding: '8px 0' }}>Unique author+title combinations</td>
                <td style={{ padding: '8px 0', fontFamily: 'monospace', textAlign: 'right' }}>~150,000</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e0d8c8' }}>
                <td style={{ padding: '8px 0' }}>Unique author names</td>
                <td style={{ padding: '8px 0', fontFamily: 'monospace', textAlign: 'right' }}>~52,000</td>
              </tr>
              <tr>
                <td style={{ padding: '8px 0' }}>Unique title strings</td>
                <td style={{ padding: '8px 0', fontFamily: 'monospace', textAlign: 'right' }}>~99,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ color: '#444', fontSize: '14px', marginBottom: '8px' }}>
          The <strong style={{ color: '#1a1612' }}>~150,000 unique author+title pairs</strong> is our best proxy for "works," though this still overcounts because:
        </p>
        <ul style={{ color: '#666', fontSize: '12px', marginBottom: '16px' }}>
          <li>Same work with variant titles counts multiple times</li>
          <li>Spelling/abbreviation differences across editions</li>
          <li>Anonymous works harder to deduplicate</li>
        </ul>
        <p style={{ color: '#444', fontSize: '14px' }}>
          <strong style={{ color: '#1a1612' }}>Conservative estimate: 80,000–120,000 unique Latin works</strong> in USTC. This means the average work was reprinted ~5 times, though the distribution is highly skewed—canonical authors have hundreds of editions while most works have just 1–2.
        </p>
        <p style={{ color: '#666', fontSize: '12px', marginTop: '12px' }}>
          Analysis: Computed from USTC Latin export (December 2025) using author_name + std_title deduplication.
        </p>
      </figure>

      <h2>Digitization Data</h2>

      <h3 style={{ color: '#9e4a3a', fontSize: '20px', marginTop: '24px' }}>USTC Digital Links (~27% of all editions)</h3>
      <p>
        The USTC itself provides the most reliable digitization data. According to their website:
      </p>
      <blockquote style={{ borderLeft: '4px solid #9e4a3a', paddingLeft: '16px', margin: '24px 0', fontStyle: 'italic', color: '#666' }}>
        "The USTC hosts links to more than half a million digital scans, currently tagged to some 450,000 editions."
      </blockquote>
      <p>
        This means <strong style={{ color: '#1a1612' }}>~27% of all catalogued editions</strong> (450,000 / 1,650,000) have at least one digital scan available through USTC links. These links point to major digitization projects including:
      </p>
      <ul>
        <li>
          <a href="https://www.google.com/books" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>Google Books</a>
          {" "}— 40+ million books scanned as of 2019
        </li>
        <li>
          <a href="https://www.hathitrust.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>HathiTrust</a>
          {" "}— 19+ million digitized items from 219 research libraries
        </li>
        <li>
          <a href="https://www.digitale-sammlungen.de/" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>Bavarian State Library (MDZ)</a>
          {" "}— 10,000+ incunabula, ~300,000 16th–17th century books
        </li>
        <li>
          <a href="https://archive.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>Internet Archive</a>
          {" "}— 3.8+ million scanned books
        </li>
      </ul>

      <h2>English Translation Data</h2>

      <p>
        We compiled counts from major Latin-English scholarly translation series and digital libraries:
      </p>

      <h3 style={{ color: '#9e4a3a', fontSize: '20px', marginTop: '24px' }}>Digital Libraries</h3>
      <figure style={{
        background: '#f5f0e8',
        border: '1px solid #e0d8c8',
        borderRadius: '8px',
        padding: '24px',
        margin: '32px 0',
      }}>
        <table style={{ width: '100%', fontSize: '14px' }}>
          <thead>
            <tr style={{ textAlign: 'left', color: '#666', borderBottom: '1px solid #e0d8c8' }}>
              <th style={{ paddingBottom: '8px' }}>Source</th>
              <th style={{ paddingBottom: '8px' }}>Texts</th>
              <th style={{ paddingBottom: '8px' }}>Notes</th>
            </tr>
          </thead>
          <tbody style={{ color: '#444' }}>
            <tr style={{ borderBottom: '1px solid #f0ebe0' }}>
              <td style={{ padding: '8px 0' }}>
                <a href="https://www.perseus.tufts.edu/hopper/" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
                  Perseus Digital Library
                </a>
              </td>
              <td style={{ fontFamily: 'monospace' }}>631</td>
              <td style={{ color: '#666' }}>Latin works with translations (Scaife Viewer)</td>
            </tr>
            <tr>
              <td style={{ padding: '8px 0' }}>
                <a href="https://philological.cal.bham.ac.uk/" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
                  The Philological Museum
                </a>
              </td>
              <td style={{ fontFamily: 'monospace' }}>~200</td>
              <td style={{ color: '#666' }}>British neo-Latin with translations (Dana Sutton)</td>
            </tr>
          </tbody>
        </table>
      </figure>

      <figure style={{
        background: '#f0f8f0',
        border: '1px solid #90c090',
        borderRadius: '8px',
        padding: '24px',
        margin: '32px 0',
      }}>
        <h4 style={{ color: '#228B22', fontWeight: 600, marginBottom: '12px' }}>The Philological Museum</h4>
        <p style={{ color: '#444', fontSize: '14px' }}>
          Dana Sutton's{" "}
          <a href="https://philological.cal.bham.ac.uk/" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
            Philological Museum
          </a>
          {" "}at the University of Birmingham is a major open-access resource. It contains critical editions of ~200 British neo-Latin texts (plays, poems, letters, essays) from the 16th–17th centuries, most with facing-page English translations. The associated{" "}
          <a href="https://philological.cal.bham.ac.uk/bibliography/index.htm" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
            Analytic Bibliography
          </a>
          {" "}indexes <strong>79,760 neo-Latin texts</strong> freely available online (though most are Latin-only scans without translations).
        </p>
      </figure>

      <h3 style={{ color: '#9e4a3a', fontSize: '20px', marginTop: '24px' }}>Renaissance &amp; Neo-Latin</h3>
      <figure style={{
        background: '#f5f0e8',
        border: '1px solid #e0d8c8',
        borderRadius: '8px',
        padding: '24px',
        margin: '32px 0',
      }}>
        <table style={{ width: '100%', fontSize: '14px' }}>
          <thead>
            <tr style={{ textAlign: 'left', color: '#666', borderBottom: '1px solid #e0d8c8' }}>
              <th style={{ paddingBottom: '8px' }}>Series</th>
              <th style={{ paddingBottom: '8px' }}>Vols</th>
              <th style={{ paddingBottom: '8px' }}>Notes</th>
            </tr>
          </thead>
          <tbody style={{ color: '#444' }}>
            <tr>
              <td style={{ padding: '8px 0' }}>
                <a href="https://www.hup.harvard.edu/series/the-i-tatti-renaissance-library" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
                  I Tatti Renaissance Library
                </a>
              </td>
              <td style={{ fontFamily: 'monospace' }}>100</td>
              <td style={{ color: '#666' }}>Italian Renaissance Latin (2001–)</td>
            </tr>
          </tbody>
        </table>
      </figure>

      <h3 style={{ color: '#9e4a3a', fontSize: '20px', marginTop: '24px' }}>Classical Latin</h3>
      <figure style={{
        background: '#f5f0e8',
        border: '1px solid #e0d8c8',
        borderRadius: '8px',
        padding: '24px',
        margin: '32px 0',
      }}>
        <table style={{ width: '100%', fontSize: '14px' }}>
          <thead>
            <tr style={{ textAlign: 'left', color: '#666', borderBottom: '1px solid #e0d8c8' }}>
              <th style={{ paddingBottom: '8px' }}>Series</th>
              <th style={{ paddingBottom: '8px' }}>Vols</th>
              <th style={{ paddingBottom: '8px' }}>Notes</th>
            </tr>
          </thead>
          <tbody style={{ color: '#444' }}>
            <tr style={{ borderBottom: '1px solid #f0ebe0' }}>
              <td style={{ padding: '8px 0' }}>
                <a href="https://www.loebclassics.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
                  Loeb Classical Library (Latin)
                </a>
              </td>
              <td style={{ fontFamily: 'monospace' }}>~158</td>
              <td style={{ color: '#666' }}>520+ total (Greek &amp; Latin), 1912–</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #f0ebe0' }}>
              <td style={{ padding: '8px 0' }}>
                <a href="https://www.liverpooluniversitypress.co.uk/topic/book-series/aris-and-phillips-classical-texts" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
                  Aris &amp; Phillips Classical Texts
                </a>
              </td>
              <td style={{ fontFamily: 'monospace' }}>170+</td>
              <td style={{ color: '#666' }}>Greek &amp; Latin, 1979– (~80 Latin)</td>
            </tr>
            <tr>
              <td style={{ padding: '8px 0' }}>
                <a href="https://www.penguin.co.uk/penguin-classics/classics-list" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
                  Penguin Classics (Latin)
                </a>
              </td>
              <td style={{ fontFamily: 'monospace' }}>114</td>
              <td style={{ color: '#666' }}>Latin language filter</td>
            </tr>
          </tbody>
        </table>
      </figure>

      <h3 style={{ color: '#9e4a3a', fontSize: '20px', marginTop: '24px' }}>Medieval Latin</h3>
      <figure style={{
        background: '#f5f0e8',
        border: '1px solid #e0d8c8',
        borderRadius: '8px',
        padding: '24px',
        margin: '32px 0',
      }}>
        <table style={{ width: '100%', fontSize: '14px' }}>
          <thead>
            <tr style={{ textAlign: 'left', color: '#666', borderBottom: '1px solid #e0d8c8' }}>
              <th style={{ paddingBottom: '8px' }}>Series</th>
              <th style={{ paddingBottom: '8px' }}>Vols</th>
              <th style={{ paddingBottom: '8px' }}>Notes</th>
            </tr>
          </thead>
          <tbody style={{ color: '#444' }}>
            <tr style={{ borderBottom: '1px solid #f0ebe0' }}>
              <td style={{ padding: '8px 0' }}>
                <a href="https://global.oup.com/academic/content/series/o/oxford-medieval-texts-omt/" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
                  Oxford Medieval Texts
                </a>
              </td>
              <td style={{ fontFamily: 'monospace' }}>103</td>
              <td style={{ color: '#666' }}>Facing-page translations, 1967–</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #f0ebe0' }}>
              <td style={{ padding: '8px 0' }}>
                <a href="https://domedieval.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
                  Dumbarton Oaks Medieval Library
                </a>
              </td>
              <td style={{ fontFamily: 'monospace' }}>~50</td>
              <td style={{ color: '#666' }}>Latin subseries, 2010–</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #f0ebe0' }}>
              <td style={{ padding: '8px 0' }}>
                <a href="https://www.medieval.utoronto.ca/research/research-cms/publication-series/toronto-medieval-latin-texts" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
                  Toronto Medieval Latin Texts
                </a>
              </td>
              <td style={{ fontFamily: 'monospace' }}>37</td>
              <td style={{ color: '#666' }}>Pedagogical editions, 1972–</td>
            </tr>
            <tr>
              <td style={{ padding: '8px 0' }}>
                <a href="https://www.liverpooluniversitypress.co.uk/topic/book-series/translated-texts-for-historians" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
                  Liverpool Translated Texts for Historians
                </a>
              </td>
              <td style={{ fontFamily: 'monospace' }}>86</td>
              <td style={{ color: '#666' }}>Late Antique/Medieval, includes Greek (~50 Latin)</td>
            </tr>
          </tbody>
        </table>
      </figure>

      <h3 style={{ color: '#9e4a3a', fontSize: '20px', marginTop: '24px' }}>Patristic &amp; Church Fathers</h3>
      <figure style={{
        background: '#f5f0e8',
        border: '1px solid #e0d8c8',
        borderRadius: '8px',
        padding: '24px',
        margin: '32px 0',
      }}>
        <table style={{ width: '100%', fontSize: '14px' }}>
          <thead>
            <tr style={{ textAlign: 'left', color: '#666', borderBottom: '1px solid #e0d8c8' }}>
              <th style={{ paddingBottom: '8px' }}>Series</th>
              <th style={{ paddingBottom: '8px' }}>Vols</th>
              <th style={{ paddingBottom: '8px' }}>Notes</th>
            </tr>
          </thead>
          <tbody style={{ color: '#444' }}>
            <tr style={{ borderBottom: '1px solid #f0ebe0' }}>
              <td style={{ padding: '8px 0' }}>
                <a href="https://www.cuapress.org/series/" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
                  Fathers of the Church (CUA)
                </a>
              </td>
              <td style={{ fontFamily: 'monospace' }}>147</td>
              <td style={{ color: '#666' }}>Latin &amp; Greek, 1947– (~80 Latin)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #f0ebe0' }}>
              <td style={{ padding: '8px 0' }}>
                <a href="https://www.paulistpress.com/Products/CategoryCenter/PTRL!ACHW/ancient-christian-writers-series.aspx" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
                  Ancient Christian Writers (Paulist)
                </a>
              </td>
              <td style={{ fontFamily: 'monospace' }}>76</td>
              <td style={{ color: '#666' }}>Latin &amp; Greek, 1946– (~40 Latin)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #f0ebe0' }}>
              <td style={{ padding: '8px 0' }}>
                <a href="https://ccel.org/fathers" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
                  Ante-Nicene/Nicene Post-Nicene Fathers
                </a>
              </td>
              <td style={{ fontFamily: 'monospace' }}>38</td>
              <td style={{ color: '#666' }}>Public domain, 1885–1900</td>
            </tr>
            <tr>
              <td style={{ padding: '8px 0' }}>
                <a href="https://www.paulistpress.com/Products/CategoryCenter/COWS/all-titles.aspx" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
                  Classics of Western Spirituality
                </a>
              </td>
              <td style={{ fontFamily: 'monospace' }}>130+</td>
              <td style={{ color: '#666' }}>Mixed languages, 1978– (~40 Latin)</td>
            </tr>
          </tbody>
        </table>
      </figure>

      <h3 style={{ color: '#9e4a3a', fontSize: '20px', marginTop: '24px' }}>The Missing Database</h3>

      <figure style={{
        background: '#fff0f0',
        border: '1px solid #e0a0a0',
        borderRadius: '8px',
        padding: '24px',
        margin: '32px 0',
      }}>
        <h4 style={{ color: '#9e4a3a', fontWeight: 600, marginBottom: '12px' }}>A Gap in Research Infrastructure</h4>
        <p style={{ color: '#444', fontSize: '14px', marginBottom: '16px' }}>
          <strong>No comprehensive database exists</strong> of which Latin works have been translated into English. The series counts above are our best effort to estimate coverage, but they represent a patchwork, not a systematic catalogue.
        </p>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '16px' }}>
          Existing resources fall short:
        </p>
        <ul style={{ color: '#666', fontSize: '14px', marginBottom: '16px' }}>
          <li>
            <a href="https://catalogustranslationum.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>Catalogus Translationum et Commentariorum</a>
            {" "}— tracks Latin translations of Greek classics, not translations <em>from</em> Latin
          </li>
          <li>
            <a href="https://www.unesco.org/xtrans/bsform.aspx" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>UNESCO Index Translationum</a>
            {" "}— only covers 1979–present, not historical translations
          </li>
          <li>
            Publisher series catalogues — scattered across dozens of presses with no aggregation
          </li>
        </ul>
        <p style={{ color: '#444', fontSize: '14px' }}>
          <strong>Building this database is a potential output of this project.</strong> Cross-referencing USTC records with translation series catalogues would produce the first comprehensive map of what's accessible.
        </p>
      </figure>

      <h3 style={{ color: '#9e4a3a', fontSize: '20px', marginTop: '24px' }}>Our Estimate (Rough)</h3>
      <figure style={{
        background: '#f5f0e8',
        border: '1px solid #e0d8c8',
        borderRadius: '8px',
        padding: '24px',
        margin: '32px 0',
      }}>
        <table style={{ width: '100%', fontSize: '14px' }}>
          <tbody style={{ color: '#444' }}>
            <tr style={{ borderBottom: '1px solid #f0ebe0' }}>
              <td style={{ padding: '8px 0' }}>Named series above (Latin-specific)</td>
              <td style={{ padding: '8px 0', fontFamily: 'monospace', textAlign: 'right' }}>~1,000</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #f0ebe0' }}>
              <td style={{ padding: '8px 0' }}>Perseus Digital Library (unique works)</td>
              <td style={{ padding: '8px 0', fontFamily: 'monospace', textAlign: 'right' }}>~400</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e0d8c8' }}>
              <td style={{ padding: '8px 0' }}>Other academic presses, dissertations, journals</td>
              <td style={{ padding: '8px 0', fontFamily: 'monospace', textAlign: 'right' }}>~500</td>
            </tr>
            <tr style={{ borderTop: '2px solid #c9a86c' }}>
              <td style={{ padding: '12px 0', fontWeight: 600, color: '#1a1612' }}>Very Rough Total</td>
              <td style={{ padding: '12px 0', fontFamily: 'monospace', fontWeight: 600, color: '#1a1612', textAlign: 'right' }}>~1,500–2,000</td>
            </tr>
          </tbody>
        </table>
        <p style={{ color: '#666', fontSize: '12px', marginTop: '12px' }}>
          This estimate has significant uncertainty. Without a systematic catalogue, we cannot know the true number.
        </p>
      </figure>

      <figure style={{
        background: '#fff9f0',
        border: '1px solid #c9a86c',
        borderRadius: '8px',
        padding: '24px',
        margin: '32px 0',
      }}>
        <h4 style={{ color: '#c9a86c', fontWeight: 600, marginBottom: '12px' }}>Translation Coverage of Unique Works</h4>
        <p style={{ color: '#444', fontSize: '14px' }}>
          Given our estimate of <strong style={{ color: '#1a1612' }}>~100,000 unique Latin works</strong> in USTC and <strong style={{ color: '#1a1612' }}>~1,500–2,000 translated works</strong>, translation coverage is approximately <strong style={{ color: '#1a1612' }}>1.5–2%</strong> of unique works. The vast majority of Renaissance Latin literature remains untranslated.
        </p>
      </figure>

      <h2>OCR and Searchability</h2>

      <p>
        Having a digital scan does not mean the text is searchable. OCR (Optical Character Recognition) quality varies dramatically for early printed books.
      </p>

      <h3 style={{ color: '#9e4a3a', fontSize: '20px', marginTop: '24px' }}>OCR Accuracy Research</h3>
      <p>
        Academic studies on OCR accuracy for historical prints show:
      </p>
      <ul>
        <li>
          <strong style={{ color: '#1a1612' }}>Modern documents</strong>: 99%+ character accuracy
        </li>
        <li>
          <strong style={{ color: '#1a1612' }}>19th century prints</strong>: 98%+ with general OCR models
        </li>
        <li>
          <strong style={{ color: '#1a1612' }}>Early modern prints (pre-1800)</strong>: 40%+ error rates with untrained models due to blackletter fonts, abbreviations, and regional type variations
        </li>
        <li>
          <strong style={{ color: '#1a1612' }}>With specialized training</strong>: 94–98% accuracy achievable on individual books
        </li>
      </ul>
      <p style={{ color: '#666', fontSize: '14px', marginBottom: '16px' }}>
        Sources:{" "}
        <a href="https://www.digitalhumanities.org/dhq/vol/11/2/000288/000288.html" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
          Springmann &amp; Lüdeling (2017)
        </a>
        ,{" "}
        <a href="https://arxiv.org/abs/1711.09670" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
          Reul et al. (2017)
        </a>
      </p>

      <h3 style={{ color: '#9e4a3a', fontSize: '20px', marginTop: '24px' }}>Text Creation Partnership (TCP)</h3>
      <p>
        The{" "}
        <a href="https://textcreationpartnership.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
          Text Creation Partnership
        </a>
        {" "}has produced the gold standard for early modern text transcription:
      </p>
      <figure style={{
        background: '#f5f0e8',
        border: '1px solid #e0d8c8',
        borderRadius: '8px',
        padding: '24px',
        margin: '32px 0',
      }}>
        <ul style={{ color: '#444', fontSize: '14px', lineHeight: 1.8 }}>
          <li><strong style={{ color: '#1a1612' }}>70,000+</strong> transcribed and encoded texts</li>
          <li><strong style={{ color: '#1a1612' }}>1 billion+</strong> searchable words</li>
          <li><strong style={{ color: '#1a1612' }}>99.995%</strong> accuracy (double-keyed transcription)</li>
          <li><strong style={{ color: '#1a1612' }}>~60,000</strong> texts from EEBO-TCP specifically</li>
        </ul>
        <p style={{ color: '#666', fontSize: '12px', marginTop: '12px' }}>
          Source:{" "}
          <a href="https://textcreationpartnership.org/tcp-texts/eebo-tcp-early-english-books-online/" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
            TCP Website
          </a>
        </p>
      </figure>

      <figure style={{
        background: '#fff9f0',
        border: '1px solid #c9a86c',
        borderRadius: '8px',
        padding: '24px',
        margin: '32px 0',
      }}>
        <h4 style={{ color: '#c9a86c', fontWeight: 600, marginBottom: '12px' }}>Critical Limitation</h4>
        <p style={{ color: '#444', fontSize: '14px' }}>
          EEBO-TCP focuses on <strong>English-language</strong> books from the British Isles. Latin works from continental Europe—the vast majority of Latin printing—are not covered by TCP transcription efforts.
        </p>
      </figure>

      <h2>Summary of Key Findings</h2>

      <figure style={{
        background: '#f5f0e8',
        border: '1px solid #e0d8c8',
        borderRadius: '8px',
        padding: '0',
        margin: '32px 0',
        overflow: 'hidden',
      }}>
        <table style={{ width: '100%', fontSize: '14px', borderCollapse: 'collapse' }}>
          <thead style={{ background: '#e0d8c8' }}>
            <tr>
              <th style={{ textAlign: 'left', padding: '12px', color: '#1a1612' }}>Metric</th>
              <th style={{ textAlign: 'left', padding: '12px', color: '#1a1612' }}>Value</th>
              <th style={{ textAlign: 'left', padding: '12px', color: '#1a1612' }}>Source</th>
            </tr>
          </thead>
          <tbody style={{ color: '#444' }}>
            <tr style={{ borderBottom: '1px solid #e0d8c8' }}>
              <td style={{ padding: '12px' }}>Total USTC editions (all languages)</td>
              <td style={{ padding: '12px', fontFamily: 'monospace' }}>1.65 million</td>
              <td style={{ padding: '12px', color: '#666' }}>USTC website</td>
            </tr>
            <tr style={{ background: '#faf8f4', borderBottom: '1px solid #e0d8c8' }}>
              <td style={{ padding: '12px' }}>Latin editions (USTC)</td>
              <td style={{ padding: '12px', fontFamily: 'monospace' }}>533,307</td>
              <td style={{ padding: '12px', color: '#666' }}>USTC query</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e0d8c8' }}>
              <td style={{ padding: '12px' }}>Unique author+title pairs (Latin)</td>
              <td style={{ padding: '12px', fontFamily: 'monospace' }}>~150,000</td>
              <td style={{ padding: '12px', color: '#666' }}>Our analysis</td>
            </tr>
            <tr style={{ background: '#faf8f4', borderBottom: '1px solid #e0d8c8' }}>
              <td style={{ padding: '12px' }}>Estimated unique Latin works</td>
              <td style={{ padding: '12px', fontFamily: 'monospace' }}>~80,000–120,000</td>
              <td style={{ padding: '12px', color: '#666' }}>Estimated (dedup)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e0d8c8' }}>
              <td style={{ padding: '12px' }}>Editions with digital scans (all languages)</td>
              <td style={{ padding: '12px', fontFamily: 'monospace' }}>~450,000 (27%)</td>
              <td style={{ padding: '12px', color: '#666' }}>USTC website</td>
            </tr>
            <tr style={{ background: '#faf8f4', borderBottom: '1px solid #e0d8c8' }}>
              <td style={{ padding: '12px' }}>High-quality transcriptions (English texts only)</td>
              <td style={{ padding: '12px', fontFamily: 'monospace' }}>~60,000</td>
              <td style={{ padding: '12px', color: '#666' }}>EEBO-TCP</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e0d8c8' }}>
              <td style={{ padding: '12px' }}>Latin works with English translations</td>
              <td style={{ padding: '12px', fontFamily: 'monospace' }}>~1,500–2,000</td>
              <td style={{ padding: '12px', color: '#666' }}>Series counts</td>
            </tr>
            <tr style={{ background: '#faf8f4' }}>
              <td style={{ padding: '12px' }}>Translation coverage (of unique works)</td>
              <td style={{ padding: '12px', fontFamily: 'monospace' }}>~1.5–2%</td>
              <td style={{ padding: '12px', color: '#666' }}>Calculated</td>
            </tr>
          </tbody>
        </table>
      </figure>

      <h2 style={{ borderTop: '1px solid #e0d8c8', paddingTop: '32px', marginTop: '48px' }}>References</h2>

      <ul style={{ color: '#666', fontSize: '14px', lineHeight: 2 }}>
        <li>
          Universal Short Title Catalogue.{" "}
          <a href="https://www.ustc.ac.uk/about" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
            About Page
          </a>
          . University of St Andrews.
        </li>
        <li>
          "Celebrating 30 years of USTC."{" "}
          <a href="https://staffnews.wp.st-andrews.ac.uk/2025/10/29/30-years-of-universal-short-title-catalogue/" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
            St Andrews Staff News
          </a>
          . October 2025. (1.65 million editions, 7 million copies, 10,000+ institutions)
        </li>
        <li>
          Perseus Digital Library.{" "}
          <a href="https://scaife.perseus.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
            Scaife Viewer
          </a>
          . Tufts University. 631 Latin works.
        </li>
        <li>
          Text Creation Partnership.{" "}
          <a href="https://textcreationpartnership.org/tcp-texts/eebo-tcp-early-english-books-online/" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
            EEBO-TCP
          </a>
          . University of Michigan / ProQuest.
        </li>
        <li>
          Springmann, U. &amp; Lüdeling, A. (2017). "OCR of historical printings with an application to building diachronic corpora."{" "}
          <a href="https://www.digitalhumanities.org/dhq/vol/11/2/000288/000288.html" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
            Digital Humanities Quarterly 11(2)
          </a>
          .
        </li>
        <li>
          I Tatti Renaissance Library.{" "}
          <a href="https://www.hup.harvard.edu/series/the-i-tatti-renaissance-library" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
            Harvard University Press
          </a>
          . 100 volumes as of March 2025.
        </li>
        <li>
          Loeb Classical Library.{" "}
          <a href="https://www.loebclassics.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
            Harvard University Press
          </a>
          . ~520 volumes total (Greek and Latin).
        </li>
        <li>
          Oxford Medieval Texts.{" "}
          <a href="https://global.oup.com/academic/content/series/o/oxford-medieval-texts-omt/" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
            Oxford University Press
          </a>
          . 103 volumes.
        </li>
        <li>
          Fathers of the Church.{" "}
          <a href="https://www.cuapress.org/series/" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
            Catholic University of America Press
          </a>
          . 147 volumes.
        </li>
        <li>
          Aris &amp; Phillips Classical Texts.{" "}
          <a href="https://www.liverpooluniversitypress.co.uk/topic/book-series/aris-and-phillips-classical-texts" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
            Liverpool University Press
          </a>
          . 170+ volumes.
        </li>
        <li>
          Sutton, Dana F. (ed.). The Philological Museum.{" "}
          <a href="https://philological.cal.bham.ac.uk/" target="_blank" rel="noopener noreferrer" style={{ color: '#9e4a3a' }}>
            University of Birmingham
          </a>
          . ~200 British neo-Latin texts with translations.
        </li>
      </ul>
    </BlogLayout>
  );
}
