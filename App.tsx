
import React, { useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ArticleCard from './components/ArticleCard.tsx';
import AdUnit from './components/AdUnit.tsx';
import Footer from './components/Footer.tsx';
import { MOCK_ARTICLES, FILLER_TEXT } from './constants.tsx';

const App: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  const smartlink = "https://www.effectivegatecpm.com/wjb8j1tsjg?key=c80a29ddbeda79ae126747b7f7d3cf12";

  const keys = {
    rectangle: "cc176c1178c1646a4771e7847603127f", // 300x250
    leaderboard: "cd7a8562ea495f6f48baef058486a7f1", // 468x60
    mobile: "4f9edc38a9c55fa5e5cb69e0ee55d24e", // 320x50
    native: "068d1a40a7c5cbb21bf4f17f1e3b06be", // Native
    tall: "9248032e06393bc1f6dc2c021193bded", // 160x600
    shortTall: "892dfd8083cc9a7f85f716aad4a563e5" // 160x300
  };

  const SmartButton = ({ className = "" }: { className?: string }) => (
    <a 
      href={smartlink} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`group relative flex items-center justify-center overflow-hidden rounded-xl bg-indigo-600 px-10 py-5 text-xl font-black uppercase tracking-tighter text-white shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all hover:scale-105 hover:bg-indigo-500 active:scale-95 ${className}`}
    >
      <span className="relative z-10">WATCH PREMIUM ADS</span>
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_2s_infinite]"></div>
    </a>
  );

  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <Navbar />
      
      {/* 5 BANNERS ON TOP STACK - MAXIMUM SIGHTLINE */}
      <div className="flex flex-col items-center space-y-3 bg-slate-900/40 py-8 border-b border-indigo-500/20">
        <div className="text-[10px] text-indigo-400 font-black tracking-[0.5em] uppercase animate-pulse">Sponsored Infrastructure</div>
        <AdUnit id="top-1" adKey={keys.mobile} width={320} height={50} type="320x50" />
        <AdUnit id="top-2" adKey={keys.leaderboard} width={468} height={60} type="468x60" />
        <AdUnit id="top-3" adKey={keys.rectangle} width={300} height={250} type="300x250" />
        <AdUnit id="top-4" adKey={keys.leaderboard} width={468} height={60} type="468x60" />
        <AdUnit id="top-5" adKey={keys.mobile} width={320} height={50} type="320x50" />
      </div>

      <div className="flex justify-center w-full">
        {/* LEFT SIDEBAR - CONTINUOUS AD STACK */}
        <aside className="ad-gutter mr-4">
          <div className="flex flex-col gap-6 py-10">
            <AdUnit id="L-1" adKey={keys.tall} width={160} height={600} type="160x600" />
            <AdUnit id="L-2" adKey={keys.shortTall} width={160} height={300} type="160x300" />
            <AdUnit id="L-3" adKey={keys.tall} width={160} height={600} type="160x600" />
            <AdUnit id="L-4" adKey={keys.shortTall} width={160} height={300} type="160x300" />
          </div>
        </aside>

        <main className="flex-grow max-w-7xl px-4 sm:px-6 lg:px-8">
          <Hero />
          
          <div className="flex justify-center my-10">
            <SmartButton className="w-full max-w-2xl" />
          </div>

          {/* ARTICLE GRID WITH ADS AFTER EVERY SINGLE ARTICLE */}
          <section className="py-12">
            <h2 className="text-4xl font-black text-white mb-12 tracking-tighter uppercase italic border-l-8 border-indigo-500 pl-6">Latest Dispatch</h2>
            
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-3">
              {MOCK_ARTICLES.map((article, index) => (
                <div key={article.id} className="flex flex-col gap-8">
                  <ArticleCard article={article} />
                  
                  {/* ADS AFTER EVERY ARTICLE */}
                  <div className="bg-slate-900/80 p-6 rounded-3xl border-2 border-indigo-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center">
                    <span className="text-[10px] text-cyan-400 font-black uppercase mb-4 tracking-widest">Global Partner Access</span>
                    {index % 2 === 0 ? (
                      <AdUnit id={`art-rect-${index}`} adKey={keys.rectangle} width={300} height={250} type="300x250" />
                    ) : (
                      <AdUnit id={`art-native-${index}`} adKey={keys.native} isNative={true} />
                    )}
                    <div className="mt-4 flex flex-col gap-2 w-full">
                       <AdUnit id={`art-mob-1-${index}`} adKey={keys.mobile} width={320} height={50} type="320x50" />
                       <AdUnit id={`art-mob-2-${index}`} adKey={keys.mobile} width={320} height={50} type="320x50" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="my-16 bg-indigo-500/10 py-12 px-4 rounded-3xl border border-indigo-500/20 flex flex-col items-center gap-8">
             <h3 className="text-xl font-black text-white uppercase tracking-widest">Premium Content Vault</h3>
             <SmartButton className="w-full max-w-md" />
             <div className="flex flex-wrap justify-center gap-6">
                <AdUnit id="mid-vault-1" adKey={keys.rectangle} width={300} height={250} type="300x250" />
                <AdUnit id="mid-vault-2" adKey={keys.rectangle} width={300} height={250} type="300x250" />
             </div>
          </div>

          {/* 1000 WORDS SEO CONTENT SATURATED WITH ADS */}
          <section className="mx-auto max-w-3xl py-12">
            <div className="prose prose-invert prose-slate max-w-none">
              <h2 className="text-4xl font-black text-white mb-12 text-center tracking-tight uppercase">Sovereign Intelligence Report</h2>
              <div className="text-slate-400 text-lg leading-relaxed space-y-12">
                <p>{FILLER_TEXT.ai_trends.split('\n\n')[0]}</p>
                <AdUnit id="seo-1" adKey={keys.leaderboard} width={468} height={60} type="468x60" />
                
                <p>{FILLER_TEXT.ai_trends.split('\n\n')[1]}</p>
                <AdUnit id="seo-2" adKey={keys.rectangle} width={300} height={250} type="300x250" />
                
                <p>{FILLER_TEXT.ai_trends.split('\n\n')[2]}</p>
                <div className="flex flex-col gap-2 items-center">
                  <AdUnit id="seo-3a" adKey={keys.mobile} width={320} height={50} type="320x50" />
                  <AdUnit id="seo-3b" adKey={keys.mobile} width={320} height={50} type="320x50" />
                </div>

                <p>{FILLER_TEXT.blockchain.split('\n\n')[0]}</p>
                <AdUnit id="seo-4" adKey={keys.native} isNative={true} />

                <div className="my-10 border-y border-white/10 py-10 flex flex-col items-center gap-4">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">End of Intelligence Brief</span>
                  <SmartButton className="scale-90" />
                </div>

                <p>{FILLER_TEXT.blockchain.split('\n\n')[1]}</p>
                <AdUnit id="seo-5" adKey={keys.rectangle} width={300} height={250} type="300x250" />

                <p>{FILLER_TEXT.future_outlook.split('\n\n')[0]}</p>
                <AdUnit id="seo-6" adKey={keys.leaderboard} width={468} height={60} type="468x60" />
              </div>
            </div>
          </section>
        </main>

        {/* RIGHT SIDEBAR - CONTINUOUS AD STACK */}
        <aside className="ad-gutter ml-4">
          <div className="flex flex-col gap-6 py-10">
            <AdUnit id="R-1" adKey={keys.shortTall} width={160} height={300} type="160x300" />
            <AdUnit id="R-2" adKey={keys.tall} width={160} height={600} type="160x600" />
            <AdUnit id="R-3" adKey={keys.shortTall} width={160} height={300} type="160x300" />
            <AdUnit id="R-4" adKey={keys.tall} width={160} height={600} type="160x600" />
            <AdUnit id="R-5" adKey={keys.shortTall} width={160} height={300} type="160x300" />
          </div>
        </aside>
      </div>

      {/* FOOTER AD BLOCK GRID */}
      <div className="bg-slate-900 py-20 border-t border-indigo-500/20">
        <div className="mx-auto max-w-7xl px-4 flex flex-col items-center">
          <h4 className="text-white font-black uppercase tracking-[0.5em] text-sm mb-12 text-center">Protocol Maintenance Partners</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <AdUnit id="foot-grid-1" adKey={keys.rectangle} width={300} height={250} type="300x250" />
            <AdUnit id="foot-grid-2" adKey={keys.rectangle} width={300} height={250} type="300x250" />
            <AdUnit id="foot-grid-3" adKey={keys.rectangle} width={300} height={250} type="300x250" />
            <AdUnit id="foot-grid-4" adKey={keys.rectangle} width={300} height={250} type="300x250" />
            <AdUnit id="foot-grid-5" adKey={keys.rectangle} width={300} height={250} type="300x250" />
            <AdUnit id="foot-grid-6" adKey={keys.rectangle} width={300} height={250} type="300x250" />
          </div>
        </div>
      </div>

      <Footer />

      {/* STICKY FOOTER AD OVERLAY */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-slate-950/95 backdrop-blur-3xl border-t-2 border-indigo-500 p-3 flex flex-col items-center shadow-[0_-20px_100px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-8 mb-2">
          <span className="text-[10px] text-indigo-400 font-black uppercase tracking-[0.3em] animate-pulse">Network Signal Locked</span>
          <button className="text-[10px] text-slate-500 hover:text-white transition-all font-bold" onClick={(e) => e.currentTarget.parentElement?.parentElement?.remove()}>[EXIT ADS]</button>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <AdUnit id="sticky-1" adKey={keys.mobile} width={320} height={50} type="320x50" />
          <SmartButton className="h-10 text-[10px] px-4 py-0 rounded-md" />
          <AdUnit id="sticky-2" adKey={keys.mobile} width={320} height={50} type="320x50" />
        </div>
      </div>
    </div>
  );
};

export default App;
