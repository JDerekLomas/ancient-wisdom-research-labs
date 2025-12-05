import Link from "next/link";

export default function ForgottenAuthors() {
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
          The Forgotten Giants: Prolific Authors You&apos;ve Never Heard Of
        </h1>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-slate-300 mb-8">
            Jakob Martini wrote 836 works. Johann Gerhard wrote 697. Samuel Stryk wrote 642.
            You&apos;ve never read a word they wrote—because almost none of it has been translated.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">The Numbers</h2>

          <p className="text-slate-300 mb-4">
            When we analyze the Universal Short Title Catalogue, a striking pattern emerges.
            The most prolific Latin authors of the Renaissance aren&apos;t the names in our textbooks.
            Yes, Cicero leads with 4,659 editions and Erasmus follows with 2,825—authors we
            recognize, whose work has been translated and studied.
          </p>

          <p className="text-slate-300 mb-4">
            But just below them is a vast tier of authors who published hundreds of works each,
            shaped their fields for generations, and are now almost entirely unknown outside
            specialist circles.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">The Forgotten 181</h2>

          <p className="text-slate-300 mb-4">
            We identified <strong className="text-white">181 neo-Latin authors</strong> who each
            published 100 or more works but are not classical authors (like Virgil or Ovid) and
            are not among the handful of Renaissance figures with substantial modern translations
            (like Erasmus or Luther).
          </p>

          <p className="text-slate-300 mb-4">Here are the top 20:</p>

          <div className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden my-8">
            <table className="w-full text-sm">
              <thead className="bg-slate-800">
                <tr>
                  <th className="text-left p-3">Author</th>
                  <th className="text-right p-3">Works</th>
                  <th className="text-left p-3">Field</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                <tr><td className="p-3">Jakob Martini</td><td className="text-right p-3 font-mono text-violet-400">836</td><td className="p-3 text-slate-400">Theology, Philosophy</td></tr>
                <tr><td className="p-3">Johann Gerhard</td><td className="text-right p-3 font-mono text-violet-400">697</td><td className="p-3 text-slate-400">Lutheran Theology</td></tr>
                <tr><td className="p-3">Johann Deutschmann</td><td className="text-right p-3 font-mono text-violet-400">660</td><td className="p-3 text-slate-400">Theology</td></tr>
                <tr><td className="p-3">Samuel Stryk</td><td className="text-right p-3 font-mono text-violet-400">642</td><td className="p-3 text-slate-400">Law</td></tr>
                <tr><td className="p-3">Rudolph Goclenius</td><td className="text-right p-3 font-mono text-violet-400">571</td><td className="p-3 text-slate-400">Medicine, Philosophy</td></tr>
                <tr><td className="p-3">Abraham Calov</td><td className="text-right p-3 font-mono text-violet-400">548</td><td className="p-3 text-slate-400">Lutheran Orthodoxy</td></tr>
                <tr><td className="p-3">Georg Adam Struve</td><td className="text-right p-3 font-mono text-violet-400">539</td><td className="p-3 text-slate-400">Law</td></tr>
                <tr><td className="p-3">Hermann Conring</td><td className="text-right p-3 font-mono text-violet-400">510</td><td className="p-3 text-slate-400">Political Theory</td></tr>
                <tr><td className="p-3">Johannes Coccejus</td><td className="text-right p-3 font-mono text-violet-400">484</td><td className="p-3 text-slate-400">Covenant Theology</td></tr>
                <tr><td className="p-3">Georg Wolfgang Wedel</td><td className="text-right p-3 font-mono text-violet-400">476</td><td className="p-3 text-slate-400">Medicine</td></tr>
                <tr><td className="p-3">Johannes Hoornbeek</td><td className="text-right p-3 font-mono text-violet-400">460</td><td className="p-3 text-slate-400">Reformed Theology</td></tr>
                <tr><td className="p-3">Balthasar Meisner</td><td className="text-right p-3 font-mono text-violet-400">451</td><td className="p-3 text-slate-400">Anthropology, Theology</td></tr>
                <tr><td className="p-3">Juan Luis Vives</td><td className="text-right p-3 font-mono text-violet-400">446</td><td className="p-3 text-slate-400">Humanism, Education</td></tr>
                <tr><td className="p-3">Niccolò Tedeschi</td><td className="text-right p-3 font-mono text-violet-400">439</td><td className="p-3 text-slate-400">Canon Law</td></tr>
                <tr><td className="p-3">Christian Gueinz</td><td className="text-right p-3 font-mono text-violet-400">432</td><td className="p-3 text-slate-400">Theology</td></tr>
                <tr><td className="p-3">Jacobus Revius</td><td className="text-right p-3 font-mono text-violet-400">422</td><td className="p-3 text-slate-400">Reformed Theology</td></tr>
                <tr><td className="p-3">Samuel Maresius</td><td className="text-right p-3 font-mono text-violet-400">419</td><td className="p-3 text-slate-400">Reformed Theology</td></tr>
                <tr><td className="p-3">Werner Rolfinck</td><td className="text-right p-3 font-mono text-violet-400">408</td><td className="p-3 text-slate-400">Medicine, Anatomy</td></tr>
                <tr><td className="p-3">Christoph Besold</td><td className="text-right p-3 font-mono text-violet-400">405</td><td className="p-3 text-slate-400">Law, Political Theory</td></tr>
                <tr><td className="p-3">Konrad Samuel Schurzfleisch</td><td className="text-right p-3 font-mono text-violet-400">389</td><td className="p-3 text-slate-400">History</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Who Were These People?</h2>

          <h3 className="text-xl font-semibold mt-8 mb-3 text-violet-400">Johann Gerhard (1582-1637)</h3>
          <p className="text-slate-300 mb-4">
            The most important Lutheran theologian after Luther and Melanchthon. His
            <em> Loci Theologici</em> (23 volumes) was the definitive systematic theology
            of Lutheran orthodoxy, used as a textbook for over a century. His devotional
            works were translated into many languages during his lifetime—but today, only
            fragments exist in English. 697 published works; perhaps a dozen partially translated.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3 text-violet-400">Samuel Stryk (1640-1710)</h3>
          <p className="text-slate-300 mb-4">
            One of the most influential jurists in German legal history. His <em>Usus modernus
            pandectarum</em> shaped how Roman law was applied in German courts and influenced
            legal education for generations. The &ldquo;usus modernus&rdquo; tradition he defined
            is still studied in legal history—but scholars must read him in Latin. 642 works;
            effectively zero English translations.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3 text-violet-400">Hermann Conring (1606-1681)</h3>
          <p className="text-slate-300 mb-4">
            A polymath who made major contributions to political theory, history, and medicine.
            His <em>De origine juris Germanici</em> founded the field of German legal history.
            He was one of the first to study politics empirically rather than purely philosophically.
            Leibniz called him the most learned man in Germany. 510 works; almost nothing in English.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3 text-violet-400">Georg Wolfgang Wedel (1645-1721)</h3>
          <p className="text-slate-300 mb-4">
            Professor of medicine at Jena who supervised hundreds of medical dissertations and
            wrote extensively on pharmacology, chemistry, and medical practice. His works
            document the state of medical knowledge at a crucial transitional period. 476 works;
            zero translations.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">The German University System</h2>

          <p className="text-slate-300 mb-4">
            A striking pattern in the data: most of these forgotten giants are German, and most
            wrote primarily for the university system. The &ldquo;works&rdquo; we&apos;re counting include:
          </p>

          <ul className="text-slate-300 space-y-2 mb-6">
            <li><strong className="text-white">Disputations</strong> — Formal academic debates that
            were published as pamphlets</li>
            <li><strong className="text-white">Dissertations</strong> — Supervised theses, often
            published under the professor&apos;s name</li>
            <li><strong className="text-white">Lecture schedules</strong> — Official academic
            announcements</li>
            <li><strong className="text-white">Funeral orations</strong> — Formal eulogies for
            prominent figures</li>
          </ul>

          <p className="text-slate-300 mb-4">
            This explains the huge numbers. But it doesn&apos;t diminish their importance. These
            disputations and dissertations <em>were</em> how knowledge was produced and transmitted
            in early modern Europe. They document intellectual debates that shaped theology, law,
            medicine, and philosophy.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">What Are We Missing?</h2>

          <p className="text-slate-300 mb-4">
            The untranslated works of these authors contain:
          </p>

          <ul className="text-slate-300 space-y-2 mb-6">
            <li><strong className="text-white">Lost debates</strong> — Theological controversies that
            defined confessional identities</li>
            <li><strong className="text-white">Legal reasoning</strong> — How jurists adapted Roman
            law to early modern conditions</li>
            <li><strong className="text-white">Medical knowledge</strong> — What doctors actually
            believed and practiced</li>
            <li><strong className="text-white">Political theory</strong> — Ideas about sovereignty,
            natural law, and government</li>
            <li><strong className="text-white">Educational methods</strong> — How universities
            actually functioned</li>
          </ul>

          <p className="text-slate-300 mb-4">
            We have the famous names—Hobbes, Locke, Descartes. But they were part of a larger
            conversation conducted largely in Latin. We&apos;ve translated the tips of icebergs
            while the masses beneath remain submerged.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">A Research Opportunity</h2>

          <p className="text-slate-300 mb-4">
            These 181 authors represent a massive opportunity for scholarship:
          </p>

          <ul className="text-slate-300 space-y-2 mb-6">
            <li>Together they published over <strong className="text-white">50,000 works</strong></li>
            <li>Many are digitized but unreadable (no OCR, no transcription)</li>
            <li>Almost none have modern critical editions</li>
            <li>Translation would open entire fields of inquiry</li>
          </ul>

          <p className="text-slate-300 mb-4">
            The question isn&apos;t whether these works matter. Scholars in relevant fields know they
            do. The question is whether we can make them accessible—and modern AI might finally
            make that possible.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex justify-between">
          <Link
            href="/blog/why-latin-matters"
            className="text-violet-400 hover:underline"
          >
            ← Why Latin Matters
          </Link>
          <Link
            href="/blog/renaissance-bestsellers"
            className="text-violet-400 hover:underline"
          >
            Renaissance Bestsellers →
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
