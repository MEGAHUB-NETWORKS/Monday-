
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ArticleCard from './components/ArticleCard.tsx';
import AdBanner from './components/AdBanner.tsx';
import Footer from './components/Footer.tsx';
import { MOCK_ARTICLES, FILLER_TEXT } from './constants.tsx';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <Navbar />
      
      <main className="flex-grow">
        {/* HERO SECTION */}
        <Hero />

        {/* PRIMARY FEED */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12 border-b border-white/5 pb-4">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                LATEST <span className="text-indigo-500">DISPATCHES</span>
              </h2>
              <p className="mt-2 text-slate-400">Real-time intelligence from the Silicon Valley frontier.</p>
            </div>
            <a href="#" className="hidden sm:flex items-center gap-2 text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-all group">
              VIEW ARCHIVES 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {MOCK_ARTICLES.slice(0, 3).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          <AdBanner label="HORIZONTAL_LEADERBOARD_1" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {MOCK_ARTICLES.slice(3, 6).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        {/* AUTHORITY CONTENT SECTION */}
        <section className="bg-slate-900/40 py-24 border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 bg-indigo-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-4xl font-extrabold text-white mb-12 text-center tracking-tight">The Future of Digital Governance</h2>
              
              <div className="space-y-16">
                <article>
                  <h3 className="text-2xl font-bold text-indigo-400 mb-6 flex items-center gap-3">
                    <span className="h-1 w-8 bg-indigo-500 rounded-full"></span>
                    Architecting the Autonomous Era
                  </h3>
                  <div className="text-lg leading-relaxed text-slate-400 space-y-4">
                    {FILLER_TEXT.ai_trends.split('\n\n').filter(p => p.trim()).map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </article>

                <AdBanner label="IN_ARTICLE_AUTHORITY_CONTENT" />

                <article>
                  <h3 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-3">
                    <span className="h-1 w-8 bg-emerald-500 rounded-full"></span>
                    The Immutable Ledger Revolution
                  </h3>
                  <div className="text-lg leading-relaxed text-slate-400 space-y-4">
                    {FILLER_TEXT.blockchain.split('\n\n').filter(p => p.trim()).map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </article>

                <article>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
                    <span className="h-1 w-8 bg-cyan-500 rounded-full"></span>
                    Sovereignty in a Quantum World
                  </h3>
                  <div className="text-lg leading-relaxed text-slate-400 space-y-4">
                    {FILLER_TEXT.future_outlook.split('\n\n').filter(p => p.trim()).map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </article>
              </div>
            </div>
            
            <div className="mt-24 relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-500 opacity-20 blur group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative flex flex-col items-center justify-center space-y-6 rounded-3xl border border-white/10 bg-slate-900 p-8 sm:p-16 text-center">
                <h3 className="text-3xl font-black text-white tracking-tight uppercase">Stay in the Signal.</h3>
                <p className="max-w-md text-slate-400">Join the world's most influential tech thinkers. No fluff, just the critical technical data you need.</p>
                <div className="flex w-full max-w-sm flex-col gap-3 sm:flex-row">
                  <input type="email" placeholder="work@company.com" className="w-full rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  <button className="whitespace-nowrap rounded-full bg-indigo-600 px-8 py-3 font-bold text-white shadow-lg hover:bg-indigo-500 transition-all hover:scale-105">
                    JOIN FREE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
