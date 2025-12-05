import Link from "next/link";

export default function Methodology() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-8 py-6">
          <Link href="/" className="text-violet-400 hover:underline text-sm">
            &larr; Back to visualization
          </Link>
          <h1 className="text-4xl font-bold mt-4">Methodology</h1>
          <p className="text-slate-400 mt-2">
            Data sources and research methods
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-8 py-12">
        <article className="prose prose-invert prose-lg max-w-none">

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Primary Data Source</h2>

            <h3 className="text-xl font-medium text-violet-400 mt-6 mb-3">Universal Short Title Catalogue (USTC)</h3>
            <p className="text-slate-300 mb-4">
              All bibliographic data comes from the{" "}
              <a href="https://www.ustc.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">
                Universal Short Title Catalogue
              </a>
              , maintained by the University of St Andrews. The USTC is the most comprehensive database of early European printing (1450&ndash;1700).
            </p>

            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 my-6">
              <h4 className="text-white font-semibold mb-2">USTC Statistics (as of 2024)</h4>
              <ul className="text-slate-300 space-y-1 text-sm">
                <li><strong className="text-white">1.65 million</strong> editions catalogued</li>
                <li><strong className="text-white">7 million</strong> surviving copies located</li>
                <li><strong className="text-white">10,000+</strong> libraries, archives, and museums worldwide</li>
                <li><strong className="text-white">500,000+</strong> digital links to scanned copies</li>
              </ul>
              <p className="text-slate-500 text-xs mt-3">
                Source:{" "}
                <a href="https://www.ustc.ac.uk/about" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">
                  USTC About Page
                </a>
              </p>
            </div>

            <p className="text-slate-300 mb-4">
              We queried the USTC for records where the language field contains &ldquo;Latin,&rdquo; yielding <strong className="text-white">533,320 Latin-language edition records</strong> (32.7% of the total catalogue).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Digitization Data</h2>

            <h3 className="text-xl font-medium text-violet-400 mt-6 mb-3">USTC Digital Links (~27% of all editions)</h3>
            <p className="text-slate-300 mb-4">
              The USTC itself provides the most reliable digitization data. According to their website:
            </p>
            <blockquote className="border-l-4 border-violet-500 pl-4 my-4 text-slate-400 italic">
              &ldquo;The USTC hosts links to more than half a million digital scans, currently tagged to some 450,000 editions.&rdquo;
            </blockquote>
            <p className="text-slate-300 mb-4">
              This means <strong className="text-white">~27% of all catalogued editions</strong> (450,000 / 1,650,000) have at least one digital scan available through USTC links. These links point to major digitization projects including:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
              <li>
                <a href="https://www.google.com/books" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">Google Books</a>
                {" "}&mdash; 40+ million books scanned as of 2019
              </li>
              <li>
                <a href="https://www.hathitrust.org/" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">HathiTrust</a>
                {" "}&mdash; 19+ million digitized items from 219 research libraries
              </li>
              <li>
                <a href="https://www.digitale-sammlungen.de/" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">Bavarian State Library (MDZ)</a>
                {" "}&mdash; 10,000+ incunabula, ~300,000 16th&ndash;17th century books
              </li>
              <li>
                <a href="https://archive.org/" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">Internet Archive</a>
                {" "}&mdash; 3.8+ million scanned books
              </li>
            </ul>

            <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4 my-6">
              <h4 className="text-amber-400 font-semibold mb-2">Important Caveat</h4>
              <p className="text-slate-300 text-sm">
                We do not have Latin-specific digitization rates. The 27% figure applies to all USTC editions across all languages. Latin works may have higher or lower digitization rates depending on institutional priorities.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">OCR and Searchability</h2>

            <p className="text-slate-300 mb-4">
              Having a digital scan does not mean the text is searchable. OCR (Optical Character Recognition) quality varies dramatically for early printed books.
            </p>

            <h3 className="text-xl font-medium text-violet-400 mt-6 mb-3">OCR Accuracy Research</h3>
            <p className="text-slate-300 mb-4">
              Academic studies on OCR accuracy for historical prints show:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 mb-4">
              <li>
                <strong className="text-white">Modern documents</strong>: 99%+ character accuracy
              </li>
              <li>
                <strong className="text-white">19th century prints</strong>: 98%+ with general OCR models
              </li>
              <li>
                <strong className="text-white">Early modern prints (pre-1800)</strong>: 40%+ error rates with untrained models due to blackletter fonts, abbreviations, and regional type variations
              </li>
              <li>
                <strong className="text-white">With specialized training</strong>: 94&ndash;98% accuracy achievable on individual books
              </li>
            </ul>
            <p className="text-slate-500 text-sm mb-4">
              Sources:{" "}
              <a href="https://www.digitalhumanities.org/dhq/vol/11/2/000288/000288.html" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">
                Springmann &amp; L&uuml;deling (2017)
              </a>
              ,{" "}
              <a href="https://arxiv.org/abs/1711.09670" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">
                Reul et al. (2017)
              </a>
            </p>

            <h3 className="text-xl font-medium text-violet-400 mt-6 mb-3">Text Creation Partnership (TCP)</h3>
            <p className="text-slate-300 mb-4">
              The{" "}
              <a href="https://textcreationpartnership.org/" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">
                Text Creation Partnership
              </a>
              {" "}has produced the gold standard for early modern text transcription:
            </p>
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 my-6">
              <ul className="text-slate-300 space-y-1 text-sm">
                <li><strong className="text-white">70,000+</strong> transcribed and encoded texts</li>
                <li><strong className="text-white">1 billion+</strong> searchable words</li>
                <li><strong className="text-white">99.995%</strong> accuracy (double-keyed transcription)</li>
                <li><strong className="text-white">~60,000</strong> texts from EEBO-TCP specifically</li>
              </ul>
              <p className="text-slate-500 text-xs mt-3">
                Source:{" "}
                <a href="https://textcreationpartnership.org/tcp-texts/eebo-tcp-early-english-books-online/" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">
                  TCP Website
                </a>
              </p>
            </div>

            <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4 my-6">
              <h4 className="text-amber-400 font-semibold mb-2">Critical Limitation</h4>
              <p className="text-slate-300 text-sm">
                EEBO-TCP focuses on <strong>English-language</strong> books from the British Isles. Latin works from continental Europe&mdash;the vast majority of Latin printing&mdash;are not covered by TCP transcription efforts.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">English Translation Data</h2>

            <p className="text-slate-300 mb-4">
              We compiled counts from the major Latin-English scholarly translation series:
            </p>

            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 my-6">
              <h4 className="text-white font-semibold mb-3">Latin-English Translation Series</h4>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-400 border-b border-slate-700">
                    <th className="pb-2">Series</th>
                    <th className="pb-2">Volumes</th>
                    <th className="pb-2">Focus</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800">
                    <td className="py-2">
                      <a href="https://www.hup.harvard.edu/series/the-i-tatti-renaissance-library" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">
                        I Tatti Renaissance Library
                      </a>
                    </td>
                    <td className="py-2 font-mono">100</td>
                    <td className="py-2 text-slate-500">Italian Renaissance Latin (2001&ndash;present)</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-2">
                      <a href="https://www.loebclassics.com/" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">
                        Loeb Classical Library (Latin)
                      </a>
                    </td>
                    <td className="py-2 font-mono">~158</td>
                    <td className="py-2 text-slate-500">Classical Latin (1912&ndash;present)</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-2">
                      <a href="https://domedieval.org/" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">
                        Dumbarton Oaks Medieval Library
                      </a>
                    </td>
                    <td className="py-2 font-mono">~50</td>
                    <td className="py-2 text-slate-500">Medieval Latin (2010&ndash;present)</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-slate-400">Other academic presses (est.)</td>
                    <td className="py-2 font-mono text-slate-400">~700</td>
                    <td className="py-2 text-slate-500">Various (scattered publications)</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="border-t border-slate-600 font-semibold">
                    <td className="pt-3 text-white">Total</td>
                    <td className="pt-3 font-mono text-white">~1,000</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4 my-6">
              <h4 className="text-red-400 font-semibold mb-2">The Translation Gap</h4>
              <p className="text-slate-300 text-sm mb-2">
                With approximately <strong>1,000</strong> Latin works translated into English out of <strong>533,320</strong> Latin editions in the USTC:
              </p>
              <p className="text-2xl font-bold text-red-400">
                Only 0.19% of Renaissance Latin has English translations
              </p>
              <p className="text-slate-400 text-sm mt-2">
                This is a conservative estimate. Many of these translations cover classical authors (Cicero, Virgil) rather than Renaissance or early modern Latin works.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Summary of Key Findings</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-700 rounded-lg overflow-hidden">
                <thead className="bg-slate-800">
                  <tr>
                    <th className="text-left p-3 text-slate-300">Metric</th>
                    <th className="text-left p-3 text-slate-300">Value</th>
                    <th className="text-left p-3 text-slate-300">Source</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-slate-700">
                    <td className="p-3">Total Latin editions (USTC)</td>
                    <td className="p-3 font-mono">533,320</td>
                    <td className="p-3 text-slate-500">USTC query</td>
                  </tr>
                  <tr className="border-t border-slate-700 bg-slate-900/50">
                    <td className="p-3">Editions with digital scans (all languages)</td>
                    <td className="p-3 font-mono">~450,000 (27%)</td>
                    <td className="p-3 text-slate-500">USTC website</td>
                  </tr>
                  <tr className="border-t border-slate-700">
                    <td className="p-3">High-quality transcriptions (English only)</td>
                    <td className="p-3 font-mono">~60,000</td>
                    <td className="p-3 text-slate-500">EEBO-TCP</td>
                  </tr>
                  <tr className="border-t border-slate-700 bg-slate-900/50">
                    <td className="p-3">Latin works with English translations</td>
                    <td className="p-3 font-mono">~1,000 (0.19%)</td>
                    <td className="p-3 text-slate-500">Series counts</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">What We Don&apos;t Know</h2>

            <ul className="list-disc list-inside text-slate-300 space-y-3">
              <li>
                <strong className="text-white">Latin-specific digitization rate</strong>: We assume Latin has roughly the same ~27% digitization rate as the USTC average, but this is unverified.
              </li>
              <li>
                <strong className="text-white">OCR coverage for Latin</strong>: No systematic count exists of Latin early modern works with searchable OCR.
              </li>
              <li>
                <strong className="text-white">Translations into other languages</strong>: German, French, Italian, and other translations are not counted here.
              </li>
              <li>
                <strong className="text-white">Open access vs. paywalled</strong>: Some digitized works are behind institutional paywalls.
              </li>
            </ul>
          </section>

          <section className="mb-12 border-t border-slate-800 pt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">References</h2>

            <ul className="text-slate-400 space-y-3 text-sm">
              <li>
                Universal Short Title Catalogue.{" "}
                <a href="https://www.ustc.ac.uk/about" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">
                  About Page
                </a>
                . University of St Andrews.
              </li>
              <li>
                Text Creation Partnership.{" "}
                <a href="https://textcreationpartnership.org/tcp-texts/eebo-tcp-early-english-books-online/" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">
                  EEBO-TCP
                </a>
                . University of Michigan / ProQuest.
              </li>
              <li>
                HathiTrust Digital Library.{" "}
                <a href="https://www.hathitrust.org/the-collection/" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">
                  The Collection
                </a>
                .
              </li>
              <li>
                Springmann, U. &amp; L&uuml;deling, A. (2017). &ldquo;OCR of historical printings with an application to building diachronic corpora.&rdquo;{" "}
                <a href="https://www.digitalhumanities.org/dhq/vol/11/2/000288/000288.html" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">
                  Digital Humanities Quarterly 11(2)
                </a>
                .
              </li>
              <li>
                Reul, C. et al. (2017). &ldquo;Improving OCR Accuracy on Early Printed Books by utilizing Cross Fold Training and Voting.&rdquo;{" "}
                <a href="https://arxiv.org/abs/1711.09670" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">
                  arXiv:1711.09670
                </a>
                .
              </li>
              <li>
                I Tatti Renaissance Library.{" "}
                <a href="https://www.hup.harvard.edu/series/the-i-tatti-renaissance-library" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">
                  Harvard University Press
                </a>
                . 100 volumes as of March 2025.
              </li>
              <li>
                Loeb Classical Library.{" "}
                <a href="https://www.loebclassics.com/" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">
                  Harvard University Press
                </a>
                . ~520 volumes total (Greek and Latin).
              </li>
              <li>
                Dumbarton Oaks Medieval Library.{" "}
                <a href="https://domedieval.org/" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline">
                  Harvard University Press
                </a>
                . 50+ Latin volumes.
              </li>
            </ul>
          </section>

        </article>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <Link href="/blog" className="text-violet-400 hover:underline">
            &larr; Back to all articles
          </Link>
        </div>
      </main>

      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        <p>
          Data from{" "}
          <a href="https://www.ustc.ac.uk/" className="text-violet-400 hover:underline" target="_blank" rel="noopener noreferrer">
            USTC
          </a>
        </p>
      </footer>
    </div>
  );
}
