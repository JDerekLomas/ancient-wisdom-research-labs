import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-violet-900/20 to-cyan-900/20" />
        <div className="relative max-w-5xl mx-auto px-8 py-20 text-center">
          <div className="text-amber-400/80 text-sm uppercase tracking-[0.3em] mb-4">
            Source Library Project
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
              Ancient Wisdom
            </span>
            <br />
            <span className="text-slate-300 text-4xl md:text-5xl">Research Labs</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-8">
            Mapping the hidden libraries of Western esotericism.
            From Hermes Trismegistus to the Rosicrucians&mdash;500,000 Latin works
            that shaped the modern world remain untranslated.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/explore"
              className="px-8 py-4 bg-violet-600 hover:bg-violet-500 rounded-xl font-semibold text-lg transition-colors"
            >
              Explore the Data
            </Link>
            <Link
              href="/roadmap"
              className="px-8 py-4 bg-amber-600/80 hover:bg-amber-500 rounded-xl font-semibold text-lg transition-colors"
            >
              Translation Roadmap
            </Link>
          </div>
        </div>
      </header>

      {/* What We Do */}
      <section className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What We Study</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-amber-500/50 transition-colors">
            <div className="text-4xl mb-4">📜</div>
            <h3 className="text-xl font-semibold mb-2 text-amber-300">The Hidden Corpus</h3>
            <p className="text-slate-400">
              533,000 Latin works printed 1450-1700. Theology, philosophy, alchemy, magic,
              natural philosophy&mdash;the intellectual DNA of modernity, largely unread.
            </p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-violet-500/50 transition-colors">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-semibold mb-2 text-violet-300">Esoteric Traditions</h3>
            <p className="text-slate-400">
              Hermetica, Kabbalah, alchemy, Rosicrucianism, natural magic&mdash;tracing how
              ancient wisdom flowed through Renaissance publishing into the modern age.
            </p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-2 text-cyan-300">AI Translation</h3>
            <p className="text-slate-400">
              Using large language models to unlock texts that will never receive
              professional translation. Making the inaccessible accessible.
            </p>
          </div>
        </div>
      </section>

      {/* The Numbers */}
      <section className="bg-slate-900/30 py-16">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12">The Scale of the Problem</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-violet-400">533K</div>
              <div className="text-slate-400 mt-2">Latin editions</div>
              <div className="text-slate-600 text-sm">USTC 1450-1700</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400">~100K</div>
              <div className="text-slate-400 mt-2">Unique works</div>
              <div className="text-slate-600 text-sm">Estimated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-400">3%</div>
              <div className="text-slate-400 mt-2">Translated</div>
              <div className="text-slate-600 text-sm">To English</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-400">97%</div>
              <div className="text-slate-400 mt-2">Inaccessible</div>
              <div className="text-slate-600 text-sm">To non-Latinists</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Tracks */}
      <section className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Research Tracks</h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Explore our ongoing investigations into the hidden libraries of the Renaissance
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Esoteric Track */}
          <Link href="/blog/esoteric-timeline" className="group">
            <div className="bg-gradient-to-br from-amber-900/30 to-violet-900/30 border border-amber-500/30 rounded-xl p-6 h-full hover:border-amber-500/60 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🌙</span>
                <h3 className="text-xl font-semibold text-amber-300">Esoteric Traditions</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Visual timeline of hermetic, alchemical, and occult publishing from Ficino to
                the Rosicrucians. 280 years of esoteric thought mapped.
              </p>
              <div className="text-amber-400 group-hover:underline text-sm">
                View Timeline →
              </div>
            </div>
          </Link>

          {/* Translation Research */}
          <Link href="/blog/hunting-for-translations" className="group">
            <div className="bg-gradient-to-br from-violet-900/30 to-cyan-900/30 border border-violet-500/30 rounded-xl p-6 h-full hover:border-violet-500/60 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📚</span>
                <h3 className="text-xl font-semibold text-violet-300">Translation Landscape</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Comprehensive mapping of existing Latin-English translations. 3,232 volumes
                catalogued across 45+ sources.
              </p>
              <div className="text-violet-400 group-hover:underline text-sm">
                Read Research →
              </div>
            </div>
          </Link>

          {/* Data Explorer */}
          <Link href="/explore" className="group">
            <div className="bg-gradient-to-br from-cyan-900/30 to-emerald-900/30 border border-cyan-500/30 rounded-xl p-6 h-full hover:border-cyan-500/60 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📊</span>
                <h3 className="text-xl font-semibold text-cyan-300">USTC Data Explorer</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Interactive visualizations of the Universal Short Title Catalogue.
                Languages, places, subjects, timelines.
              </p>
              <div className="text-cyan-400 group-hover:underline text-sm">
                Explore Data →
              </div>
            </div>
          </Link>

          {/* Translation Roadmap */}
          <Link href="/roadmap" className="group">
            <div className="bg-gradient-to-br from-emerald-900/30 to-amber-900/30 border border-emerald-500/30 rounded-xl p-6 h-full hover:border-emerald-500/60 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🗺️</span>
                <h3 className="text-xl font-semibold text-emerald-300">Translation Roadmap</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Priority works for translation, organized by tradition. Browse 1,200+
                Latin works by edition count.
              </p>
              <div className="text-emerald-400 group-hover:underline text-sm">
                View Roadmap →
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Latest Research */}
      <section className="bg-slate-900/30 py-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Latest Research</h2>
            <Link href="/blog" className="text-violet-400 hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/hunting-for-translations" className="group">
              <article className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 h-full hover:border-violet-500/50 transition-colors">
                <span className="text-xs px-2 py-1 bg-amber-500/20 text-amber-300 rounded">
                  Research Report
                </span>
                <h3 className="text-lg font-semibold mt-3 mb-2 group-hover:text-violet-400 transition-colors">
                  Hunting for Translations
                </h3>
                <p className="text-slate-400 text-sm">
                  3,232 translation volumes catalogued. Coverage rates by period revealed.
                </p>
              </article>
            </Link>
            <Link href="/blog/esoteric-timeline" className="group">
              <article className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 h-full hover:border-violet-500/50 transition-colors">
                <span className="text-xs px-2 py-1 bg-violet-500/20 text-violet-300 rounded">
                  Visualization
                </span>
                <h3 className="text-lg font-semibold mt-3 mb-2 group-hover:text-violet-400 transition-colors">
                  Esoteric Timeline
                </h3>
                <p className="text-slate-400 text-sm">
                  Scroll through 280 years of hermetic and alchemical publishing.
                </p>
              </article>
            </Link>
            <Link href="/blog/death-of-latin" className="group">
              <article className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 h-full hover:border-violet-500/50 transition-colors">
                <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded">
                  Data
                </span>
                <h3 className="text-lg font-semibold mt-3 mb-2 group-hover:text-violet-400 transition-colors">
                  The Death of Latin
                </h3>
                <p className="text-slate-400 text-sm">
                  What 1.6 million books tell us about when Latin lost dominance.
                </p>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-lg font-semibold text-slate-300">Ancient Wisdom Research Labs</div>
              <div className="text-slate-500 text-sm">Part of the Source Library Project</div>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/explore" className="text-slate-400 hover:text-white transition-colors">
                Data Explorer
              </Link>
              <Link href="/roadmap" className="text-slate-400 hover:text-white transition-colors">
                Roadmap
              </Link>
              <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">
                Research
              </Link>
              <Link href="/blog/methodology" className="text-slate-400 hover:text-white transition-colors">
                Methods
              </Link>
              <a
                href="https://github.com/JDerekLomas/latinclaude"
                className="text-slate-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="text-center text-slate-600 text-sm mt-8">
            Data from Universal Short Title Catalogue (USTC), University of St Andrews
          </div>
        </div>
      </footer>
    </div>
  );
}
