import Link from "next/link";

export default function WhyLatinMatters() {
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
            Mission
          </span>
          <span className="text-slate-500 text-sm ml-3">December 2024</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Why Latin Matters: 500,000 Unread Books
        </h1>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-slate-300 mb-8">
            The Renaissance produced half a million Latin works. 97% have never been translated
            into English. This isn&apos;t a footnote in history—it&apos;s a catastrophic loss of
            human knowledge.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">The Scale of What We&apos;re Missing</h2>

          <p className="text-slate-300 mb-4">
            Between 1450 and 1700, European printers produced approximately 1.6 million distinct
            editions. Of these, <strong className="text-white">533,000 were in Latin</strong>—the
            international language of scholarship, science, law, medicine, and theology.
          </p>

          <p className="text-slate-300 mb-4">
            These weren&apos;t obscure pamphlets. They were the operating system of European
            civilization: medical textbooks that trained generations of doctors, legal commentaries
            that shaped modern law, theological treatises that defined religious thought,
            scientific works that laid the groundwork for the Enlightenment.
          </p>

          <p className="text-slate-300 mb-4">
            Today, approximately <strong className="text-red-400">3% of these works have English
            translations</strong>. The rest—nearly half a million books—are effectively invisible
            to modern scholarship and entirely inaccessible to the general public.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">The Accessibility Crisis</h2>

          <p className="text-slate-300 mb-4">
            The problem isn&apos;t just translation. It&apos;s a cascading series of barriers:
          </p>

          <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 my-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Total Latin works (1450-1700)</span>
                <span className="font-mono text-violet-400">521,206</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Digitized (scan exists)</span>
                <span className="font-mono text-cyan-400">~94,000 (18%)</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Searchable text (OCR/transcribed)</span>
                <span className="font-mono text-amber-400">~42,000 (8%)</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Translated to English</span>
                <span className="font-mono text-red-400">~16,000 (3%)</span>
              </div>
            </div>
          </div>

          <p className="text-slate-300 mb-4">
            Even when a scan exists, it&apos;s often a low-quality image of 16th-century typography
            that no OCR software can read. Even when the text is transcribed, it&apos;s in a form
            of Latin that requires specialized training to understand. And even scholars who read
            Latin can only work through a tiny fraction of what exists.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">What Kind of Knowledge?</h2>

          <p className="text-slate-300 mb-4">
            This isn&apos;t just &ldquo;old books.&rdquo; The USTC data reveals what subjects dominated
            Latin publishing:
          </p>

          <ul className="text-slate-300 space-y-2 mb-6">
            <li><strong className="text-white">Religious texts</strong> — 185,000 works. The theological
            debates that shaped Protestantism, Catholicism, and Western ethics.</li>
            <li><strong className="text-white">University publications</strong> — 150,000 works. Dissertations,
            disputations, and lectures that defined academic disciplines.</li>
            <li><strong className="text-white">Legal texts</strong> — 73,000 works. Commentaries on Roman law
            that still influence legal systems today.</li>
            <li><strong className="text-white">Medical texts</strong> — 29,000 works. The state of medical
            knowledge for 250 years.</li>
            <li><strong className="text-white">Philosophy</strong> — 29,000 works. Including most of the
            primary sources on scholasticism, humanism, and early modern thought.</li>
          </ul>

          <p className="text-slate-300 mb-4">
            We have fragments. We have the &ldquo;greatest hits&rdquo; of a few famous names—Erasmus,
            More, Bacon. But the vast conversation of which they were part remains inaudible.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">Why This Project Exists</h2>

          <p className="text-slate-300 mb-4">
            The <strong className="text-violet-400">Latin Master Bibliography</strong> project has
            three goals:
          </p>

          <ol className="text-slate-300 space-y-4 mb-6 list-decimal list-inside">
            <li>
              <strong className="text-white">Quantify the gap.</strong> Using data from the Universal
              Short Title Catalogue (USTC), we&apos;re building the first comprehensive picture of
              what exists, what&apos;s digitized, and what&apos;s translated.
            </li>
            <li>
              <strong className="text-white">Identify priorities.</strong> Not all 500,000 works are
              equally important. By analyzing edition counts, citation patterns, and subject matter,
              we can identify the most valuable untranslated texts.
            </li>
            <li>
              <strong className="text-white">Enable access.</strong> Modern AI can translate Latin at
              scale. The question is: can we use it responsibly to open up this heritage? That
              requires knowing what exists and what matters.
            </li>
          </ol>

          <h2 className="text-2xl font-semibold mt-12 mb-4">The Decline of Latin</h2>

          <p className="text-slate-300 mb-4">
            One striking pattern in the data: Latin&apos;s share of publishing collapsed over 250 years.
          </p>

          <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 my-8">
            <div className="space-y-3 font-mono text-sm">
              <div className="flex justify-between">
                <span>1470s:</span>
                <span><span className="text-violet-400">80% Latin</span> / 20% vernacular</span>
              </div>
              <div className="flex justify-between">
                <span>1520s:</span>
                <span><span className="text-violet-400">45% Latin</span> / 55% vernacular</span>
              </div>
              <div className="flex justify-between">
                <span>1600s:</span>
                <span><span className="text-violet-400">47% Latin</span> / 53% vernacular</span>
              </div>
              <div className="flex justify-between">
                <span>1690s:</span>
                <span><span className="text-violet-400">20% Latin</span> / 80% vernacular</span>
              </div>
            </div>
          </div>

          <p className="text-slate-300 mb-4">
            By the time Latin faded from common use, it had accumulated five centuries of
            accumulated scholarship. When it stopped being widely read, that scholarship
            didn&apos;t disappear—it became frozen in time, waiting for readers who would never come.
          </p>

          <h2 className="text-2xl font-semibold mt-12 mb-4">What You Can Do</h2>

          <p className="text-slate-300 mb-4">
            This project is open source. The data is freely available. If you&apos;re a:
          </p>

          <ul className="text-slate-300 space-y-2 mb-6">
            <li><strong className="text-white">Scholar</strong> — Help us identify which untranslated
            works matter most in your field.</li>
            <li><strong className="text-white">Developer</strong> — Help us build tools to make Latin
            texts more accessible.</li>
            <li><strong className="text-white">Latinist</strong> — Help us validate AI translations
            and identify errors.</li>
            <li><strong className="text-white">Curious person</strong> — Spread the word. Most people
            have no idea this heritage exists.</li>
          </ul>

          <p className="text-slate-300 mb-4">
            Five hundred thousand books are waiting. Let&apos;s start reading them.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800">
          <Link
            href="/blog/forgotten-authors"
            className="text-violet-400 hover:underline"
          >
            Next: The Forgotten Giants →
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
