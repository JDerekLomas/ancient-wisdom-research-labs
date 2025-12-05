import Link from "next/link";

export default function RenaissanceBestsellers() {
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
            Research
          </span>
          <span className="text-slate-500 text-sm ml-3">December 2024</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Renaissance Bestsellers Nobody Reads
        </h1>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-slate-300 mb-8">
            Some Latin books went through 100+ editions between 1450 and 1700. They were the
            most widely-read texts of their era. Today, they&apos;re completely inaccessible to
            most readers.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Measuring &ldquo;Importance&rdquo;</h2>

          <p className="text-slate-300 mb-4">
            How do you identify which historical texts mattered? One proxy: how many times were
            they reprinted? Books that went through dozens of editions were clearly in demand.
            Printers wouldn&apos;t keep reprinting works nobody bought.
          </p>

          <p className="text-slate-300 mb-4">
            We analyzed the USTC data to find Latin works with 20 or more recorded editions—the
            &ldquo;bestsellers&rdquo; of Renaissance publishing. Then we filtered out classical authors
            (Cicero, Virgil) and well-known figures with substantial modern translations (Erasmus,
            Aquinas).
          </p>

          <p className="text-slate-300 mb-4">
            What remains is a list of works that shaped European culture for centuries—and are
            now almost entirely forgotten.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">The Untranslated Bestsellers</h2>

          <div className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden my-8">
            <table className="w-full text-sm">
              <thead className="bg-slate-800">
                <tr>
                  <th className="text-left p-3">Work</th>
                  <th className="text-right p-3">Editions</th>
                  <th className="text-left p-3">Subject</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                <tr>
                  <td className="p-3">
                    <div className="font-medium">Ars minor</div>
                    <div className="text-slate-500 text-xs">Aelius Donatus</div>
                  </td>
                  <td className="text-right p-3 font-mono text-violet-400">364</td>
                  <td className="p-3 text-slate-400">Grammar</td>
                </tr>
                <tr>
                  <td className="p-3">
                    <div className="font-medium">Doctrinale</div>
                    <div className="text-slate-500 text-xs">Alexander de Villa Dei</div>
                  </td>
                  <td className="text-right p-3 font-mono text-violet-400">139</td>
                  <td className="p-3 text-slate-400">Grammar</td>
                </tr>
                <tr>
                  <td className="p-3">
                    <div className="font-medium">Manipulus curatorum</div>
                    <div className="text-slate-500 text-xs">Guido de Monte Rocherii</div>
                  </td>
                  <td className="text-right p-3 font-mono text-violet-400">119</td>
                  <td className="p-3 text-slate-400">Priests&apos; Manual</td>
                </tr>
                <tr>
                  <td className="p-3">
                    <div className="font-medium">Postilla super epistolas et evangelia</div>
                    <div className="text-slate-500 text-xs">Guillermus Parisiensis</div>
                  </td>
                  <td className="text-right p-3 font-mono text-violet-400">106</td>
                  <td className="p-3 text-slate-400">Sermons</td>
                </tr>
                <tr>
                  <td className="p-3">
                    <div className="font-medium">Modus confitendi</div>
                    <div className="text-slate-500 text-xs">Andrés de Escobar</div>
                  </td>
                  <td className="text-right p-3 font-mono text-violet-400">106</td>
                  <td className="p-3 text-slate-400">Confession Guide</td>
                </tr>
                <tr>
                  <td className="p-3">
                    <div className="font-medium">Rudimenta grammatices</div>
                    <div className="text-slate-500 text-xs">Niccolò Perotto</div>
                  </td>
                  <td className="text-right p-3 font-mono text-violet-400">94</td>
                  <td className="p-3 text-slate-400">Grammar</td>
                </tr>
                <tr>
                  <td className="p-3">
                    <div className="font-medium">Elegantiolae</div>
                    <div className="text-slate-500 text-xs">Agostino Dati</div>
                  </td>
                  <td className="text-right p-3 font-mono text-violet-400">82</td>
                  <td className="p-3 text-slate-400">Rhetoric</td>
                </tr>
                <tr>
                  <td className="p-3">
                    <div className="font-medium">Legenda aurea</div>
                    <div className="text-slate-500 text-xs">Jacobus de Voragine</div>
                  </td>
                  <td className="text-right p-3 font-mono text-violet-400">70</td>
                  <td className="p-3 text-slate-400">Saints&apos; Lives</td>
                </tr>
                <tr>
                  <td className="p-3">
                    <div className="font-medium">Dictionarium</div>
                    <div className="text-slate-500 text-xs">Ambrogio Calepino</div>
                  </td>
                  <td className="text-right p-3 font-mono text-violet-400">65</td>
                  <td className="p-3 text-slate-400">Dictionary</td>
                </tr>
                <tr>
                  <td className="p-3">
                    <div className="font-medium">Annales Ecclesiastici</div>
                    <div className="text-slate-500 text-xs">Cesare Baronio</div>
                  </td>
                  <td className="text-right p-3 font-mono text-violet-400">63</td>
                  <td className="p-3 text-slate-400">Church History</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold mt-12 mb-4">What Were These Books?</h2>

          <h3 className="text-xl font-semibold mt-8 mb-3 text-violet-400">Donatus, Ars minor (364 editions)</h3>
          <p className="text-slate-300 mb-4">
            <em>The</em> Latin grammar textbook. For over a thousand years, from late antiquity
            through the Renaissance, this was how you learned Latin. The word &ldquo;donat&rdquo; or
            &ldquo;donet&rdquo; became synonymous with &ldquo;grammar book&rdquo; in several European languages.
            364 editions in our period alone—and yet there&apos;s no modern English translation
            readily available. The foundational text of Latin education is itself inaccessible.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3 text-violet-400">Alexander de Villa Dei, Doctrinale (139 editions)</h3>
          <p className="text-slate-300 mb-4">
            A versified Latin grammar from the 13th century that remained the standard textbook
            for 300 years. Schoolboys across Europe memorized its 2,645 hexameter lines. It was
            eventually displaced by humanist grammars—but understanding medieval and early modern
            education requires knowing what students actually learned. No complete English translation
            exists.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3 text-violet-400">Guido de Monte Rocherii, Manipulus curatorum (119 editions)</h3>
          <p className="text-slate-300 mb-4">
            A practical handbook for parish priests, covering how to administer the sacraments,
            hear confessions, and perform pastoral duties. This was the actual working manual
            for thousands of clergy across Europe. It documents what the Church <em>actually
            practiced</em> versus what theologians theorized. Untranslated.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3 text-violet-400">Andrés de Escobar, Modus confitendi (106 editions)</h3>
          <p className="text-slate-300 mb-4">
            A confession guide that taught both priests and laypeople how to examine their
            consciences and confess their sins. These texts shaped how millions of people
            understood morality, guilt, and repentance. They&apos;re essential sources for
            understanding religious psychology—and almost none are translated.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3 text-violet-400">Cesare Baronio, Annales Ecclesiastici (63 editions)</h3>
          <p className="text-slate-300 mb-4">
            A massive church history written to counter the Protestant <em>Magdeburg Centuries</em>.
            Baronio&apos;s 12-volume work became the authoritative Catholic account of church history
            and remained influential for centuries. It&apos;s constantly cited in scholarship—and
            there&apos;s no English translation.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Bestsellers by Subject</h2>

          <p className="text-slate-300 mb-4">
            The pattern of untranslated bestsellers varies dramatically by field:
          </p>

          <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 my-8">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300">Religious texts</span>
                  <span className="text-slate-400">196 bestsellers, 186 untranslated</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300">University publications</span>
                  <span className="text-slate-400">90 bestsellers, 88 untranslated</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{width: '98%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300">Educational books</span>
                  <span className="text-slate-400">68 bestsellers, 51 untranslated</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300">Legal texts</span>
                  <span className="text-slate-400">43 bestsellers, 42 untranslated</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{width: '98%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300">Classical authors</span>
                  <span className="text-slate-400">51 bestsellers, 17 untranslated</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{width: '33%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-slate-300 mb-4">
            Classical authors—Cicero, Virgil, Ovid—have been translated repeatedly. That&apos;s
            the ~33% &ldquo;success story.&rdquo; But religious texts, legal commentaries, and university
            publications have translation rates approaching zero.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Why Does This Matter?</h2>

          <p className="text-slate-300 mb-4">
            These weren&apos;t obscure works. They were the most widely-read texts of their era.
            The fact that they went through 50, 100, or 300+ editions means they were constantly
            in demand, constantly being used, constantly shaping how people thought.
          </p>

          <p className="text-slate-300 mb-4">
            When we study the Renaissance without access to these texts, we&apos;re like historians
            of the 20th century who can only read Time magazine but not textbooks, technical
            manuals, or religious publications. We get the famous names and the intellectual
            highlights—but miss the actual texture of how people learned, worked, and believed.
          </p>

          <p className="text-slate-300 mb-4">
            The good news: many of these bestsellers are digitized. The scans exist. What&apos;s
            missing is the layer that makes them accessible—transcription, translation, and
            context. That&apos;s a solvable problem.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex justify-between">
          <Link
            href="/blog/forgotten-authors"
            className="text-violet-400 hover:underline"
          >
            ← Forgotten Authors
          </Link>
          <Link
            href="/blog/translation-gap"
            className="text-violet-400 hover:underline"
          >
            The Translation Gap →
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
