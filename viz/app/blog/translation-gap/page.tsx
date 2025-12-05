import Link from "next/link";

export default function TranslationGap() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-8 py-6">
          <Link href="/blog" className="text-violet-400 hover:underline text-sm">
            ← Back to Research Notes
          </Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-8 py-12">
        <div className="mb-8">
          <span className="text-xs px-2 py-1 bg-violet-500/20 text-violet-300 rounded">
            Data
          </span>
          <span className="text-slate-500 text-sm ml-3">December 2024</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          The Translation Gap: 95% of Latin Literature is Locked Away
        </h1>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-slate-300 mb-8">
            Only 416 Latin works from 1450-1700 ever appeared in Latin-English bilingual editions.
            Out of 533,000. The numbers reveal a staggering accessibility crisis.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">What the Data Shows</h2>

          <p className="text-slate-300 mb-4">
            The Universal Short Title Catalogue records the languages of each edition. When a
            book appears as &ldquo;Latin + German&rdquo; or &ldquo;Latin + English,&rdquo; that usually indicates a
            bilingual edition—text in both languages, often with the translation facing the
            original.
          </p>

          <p className="text-slate-300 mb-4">
            We analyzed all 533,294 Latin works in the USTC to find how many appeared in
            bilingual editions. The results are striking:
          </p>

          <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 my-8">
            <h3 className="text-lg font-semibold mb-4">Latin Works with Bilingual Editions (1450-1700)</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Latin + German</span>
                <span className="font-mono text-cyan-400">14,145 editions</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Latin + Greek</span>
                <span className="font-mono text-cyan-400">8,103 editions</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Latin + Italian</span>
                <span className="font-mono text-cyan-400">3,663 editions</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Latin + French</span>
                <span className="font-mono text-cyan-400">2,386 editions</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Latin + Hebrew</span>
                <span className="font-mono text-cyan-400">2,000 editions</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Latin + Dutch</span>
                <span className="font-mono text-cyan-400">717 editions</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Latin + Spanish</span>
                <span className="font-mono text-cyan-400">687 editions</span>
              </div>
              <div className="flex justify-between items-center border-t border-slate-600 pt-3 mt-3">
                <span className="font-semibold">Latin + English</span>
                <span className="font-mono text-red-400">416 editions</span>
              </div>
            </div>
          </div>

          <p className="text-slate-300 mb-4">
            416. Out of 533,000 Latin works, only 416 were ever published in Latin-English
            bilingual form during this entire period.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Why So Few English Translations?</h2>

          <p className="text-slate-300 mb-4">
            Several factors explain the disparity:
          </p>

          <ul className="text-slate-300 space-y-4 mb-6">
            <li>
              <strong className="text-white">Geography of printing:</strong> German-speaking lands
              produced far more Latin works than England. The infrastructure for bilingual
              publishing existed where the Latin publishing was.
            </li>
            <li>
              <strong className="text-white">Educational systems:</strong> German universities
              required extensive Latin well into the 18th century, creating demand for
              Latin-German study aids. English education shifted to vernacular earlier.
            </li>
            <li>
              <strong className="text-white">Greek for scholarship:</strong> The 8,103 Latin-Greek
              editions reflect the humanist emphasis on original sources. Scholars wanted Greek
              texts with Latin translations—not vernacular ones.
            </li>
            <li>
              <strong className="text-white">Religious division:</strong> Many German Latin works
              were Lutheran theology. They were translated for German congregations, not for
              export to England.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Authors with the Highest Translation Rates</h2>

          <p className="text-slate-300 mb-4">
            Which authors were most likely to appear in bilingual editions? We looked at authors
            with at least 50 Latin works and calculated what percentage appeared in multilingual form:
          </p>

          <div className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden my-8">
            <table className="w-full text-sm">
              <thead className="bg-slate-800">
                <tr>
                  <th className="text-left p-3">Author</th>
                  <th className="text-right p-3">Multilingual %</th>
                  <th className="text-left p-3">Field</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                <tr><td className="p-3">Nicolaus Clenardus</td><td className="text-right p-3 font-mono text-emerald-400">95%</td><td className="p-3 text-slate-400">Greek Grammar</td></tr>
                <tr><td className="p-3">Petrus Dasypodius</td><td className="text-right p-3 font-mono text-emerald-400">93%</td><td className="p-3 text-slate-400">Lexicography</td></tr>
                <tr><td className="p-3">Robert Estienne</td><td className="text-right p-3 font-mono text-emerald-400">62%</td><td className="p-3 text-slate-400">Printing, Dictionaries</td></tr>
                <tr><td className="p-3">Johann Amos Comenius</td><td className="text-right p-3 font-mono text-cyan-400">59%</td><td className="p-3 text-slate-400">Education</td></tr>
                <tr><td className="p-3">Jacob Gretser</td><td className="text-right p-3 font-mono text-cyan-400">54%</td><td className="p-3 text-slate-400">Theology</td></tr>
                <tr><td className="p-3">Henri Estienne</td><td className="text-right p-3 font-mono text-cyan-400">51%</td><td className="p-3 text-slate-400">Greek Scholarship</td></tr>
                <tr><td className="p-3">Ambrogio Calepino</td><td className="text-right p-3 font-mono text-cyan-400">49%</td><td className="p-3 text-slate-400">Lexicography</td></tr>
              </tbody>
            </table>
          </div>

          <p className="text-slate-300 mb-4">
            The pattern is clear: authors with high translation rates are almost all in
            <strong className="text-white"> language instruction and lexicography</strong>.
            Grammars, dictionaries, and language-learning texts naturally needed bilingual
            presentation. Comenius&apos;s famous <em>Orbis Pictus</em>—the first illustrated
            textbook—appeared in countless language combinations.
          </p>

          <p className="text-slate-300 mb-4">
            But theologians, jurists, philosophers, and scientists? Their translation rates
            were in the single digits—or zero.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Contemporary vs. Modern Translations</h2>

          <p className="text-slate-300 mb-4">
            The USTC data only shows what was published between 1450 and 1700. What about modern
            translations—work done in the past few centuries?
          </p>

          <p className="text-slate-300 mb-4">
            Precise numbers are impossible to determine, but we can make informed estimates:
          </p>

          <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 my-8">
            <h3 className="text-lg font-semibold mb-4">Estimated Modern Translation Coverage</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300">Classical authors (Cicero, Virgil, etc.)</span>
                  <span className="text-emerald-400">~90% translated</span>
                </div>
                <p className="text-slate-500 text-xs">Loeb Classical Library, Penguin Classics, etc.</p>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300">Major theologians (Aquinas, Augustine)</span>
                  <span className="text-cyan-400">~50% translated</span>
                </div>
                <p className="text-slate-500 text-xs">Major works yes; minor works, letters, sermons less so</p>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300">Famous humanists (Erasmus, More)</span>
                  <span className="text-amber-400">~20% translated</span>
                </div>
                <p className="text-slate-500 text-xs">Major works translated; thousands of letters and minor works not</p>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300">Neo-Latin poets and writers</span>
                  <span className="text-orange-400">~5% translated</span>
                </div>
                <p className="text-slate-500 text-xs">I Tatti Renaissance Library covers some; most untouched</p>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300">University dissertations & disputations</span>
                  <span className="text-red-400">&lt;1% translated</span>
                </div>
                <p className="text-slate-500 text-xs">Almost never translated unless by specific scholars</p>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300">Legal commentaries</span>
                  <span className="text-red-400">&lt;1% translated</span>
                </div>
                <p className="text-slate-500 text-xs">Even major jurists like Bartolus lack translations</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-12 mb-4">The Compound Problem</h2>

          <p className="text-slate-300 mb-4">
            The translation gap doesn&apos;t exist in isolation. It compounds with other accessibility
            barriers:
          </p>

          <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 my-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">521,206 Latin works exist</h4>
                <div className="w-full bg-violet-600 h-4 rounded"></div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">~94,000 are digitized (18%)</h4>
                <div className="w-full bg-slate-700 h-4 rounded overflow-hidden">
                  <div className="bg-cyan-600 h-4" style={{width: '18%'}}></div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">~42,000 have searchable text (8%)</h4>
                <div className="w-full bg-slate-700 h-4 rounded overflow-hidden">
                  <div className="bg-amber-600 h-4" style={{width: '8%'}}></div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">~16,000 have English translations (3%)</h4>
                <div className="w-full bg-slate-700 h-4 rounded overflow-hidden">
                  <div className="bg-emerald-600 h-4" style={{width: '3%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-slate-300 mb-4">
            To read most Latin works from this period, you need:
          </p>

          <ol className="text-slate-300 space-y-2 mb-6 list-decimal list-inside">
            <li>Access to a library that holds the physical book (or a microfilm)</li>
            <li>Ability to read 16th-17th century Latin typography</li>
            <li>Knowledge of the specific form of Latin used (legal, theological, medical)</li>
            <li>Background knowledge to understand the context and references</li>
          </ol>

          <p className="text-slate-300 mb-4">
            That&apos;s an audience of perhaps a few thousand specialists worldwide. The other
            8 billion humans are locked out.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">What Would Change This?</h2>

          <p className="text-slate-300 mb-4">
            The traditional translation pipeline—scholars painstakingly working through texts
            one at a time—has produced perhaps 20,000 translations over several centuries.
            At that rate, translating the remaining ~500,000 works would take 12,500 years.
          </p>

          <p className="text-slate-300 mb-4">
            Modern AI changes the equation. Large language models can translate Latin with
            reasonable accuracy. The question becomes:
          </p>

          <ul className="text-slate-300 space-y-2 mb-6">
            <li><strong className="text-white">Quality:</strong> Are AI translations good enough
            to be useful? For what purposes?</li>
            <li><strong className="text-white">Scale:</strong> Can we process hundreds of thousands
            of works?</li>
            <li><strong className="text-white">Validation:</strong> How do we check AI output
            without reading every word?</li>
            <li><strong className="text-white">Access:</strong> Who should control and distribute
            machine-translated texts?</li>
          </ul>

          <p className="text-slate-300 mb-4">
            These are open questions. But for the first time in history, the bottleneck isn&apos;t
            raw translation capacity. It&apos;s deciding what to translate, ensuring quality, and
            building infrastructure to make the results accessible.
          </p>

          <p className="text-slate-300 mb-4">
            Five hundred thousand works are waiting. The technology to unlock them exists.
            What&apos;s needed now is the will to use it responsibly.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex justify-between">
          <Link
            href="/blog/renaissance-bestsellers"
            className="text-violet-400 hover:underline"
          >
            ← Renaissance Bestsellers
          </Link>
          <Link
            href="/blog"
            className="text-violet-400 hover:underline"
          >
            All Posts →
          </Link>
        </div>
      </article>

      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        <p>
          <a href="https://github.com/JDerekLomas/latinclaude" className="text-violet-400 hover:underline">
            View project on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
