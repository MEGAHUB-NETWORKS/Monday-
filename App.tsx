
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

  const WatchAdsButton = ({ className = "" }: { className?: string }) => (
    <a 
      href={smartlink} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`group relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-12 py-6 text-3xl font-black uppercase tracking-tighter text-white shadow-[0_0_60px_rgba(192,38,211,0.6)] transition-all hover:scale-110 hover:brightness-125 active:scale-95 ${className}`}
    >
      <span className="relative z-10 drop-shadow-lg">WATCH PREMIUM ADS</span>
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-[shimmer_1s_infinite]"></div>
    </a>
  );

  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <Navbar />
      
      {/* EXTREME AD HEADER - 8 UNITS */}
      <div className="flex flex-col items-center space-y-4 bg-indigo-950/20 py-12 border-b-4 border-fuchsia-500/30">
        <WatchAdsButton className="mb-6 w-full max-w-4xl" />
        <div className="flex flex-wrap justify-center gap-4">
          <AdUnit id="h-top-1" adKey={keys.mobile} width={320} height={50} />
          <AdUnit id="h-top-2" adKey={keys.leaderboard} width={468} height={60} />
          <AdUnit id="h-top-3" adKey={keys.mobile} width={320} height={50} />
        </div>
        <div className="flex flex-wrap justify-center gap-8 py-4">
          <AdUnit id="h-mid-1" adKey={keys.rectangle} width={300} height={250} />
          <AdUnit id="h-mid-2" adKey={keys.rectangle} width={300} height={250} />
        </div>
        <AdUnit id="h-bot-1" adKey={keys.leaderboard} width={468} height={60} />
      </div>

      <div className="flex justify-center w-full relative">
        {/* LEFT AD GUTTER - 2000px+ OF CONTINUOUS ADS */}
        <aside className="ad-gutter mr-4">
          <div className="flex flex-col gap-8 py-10 sticky top-20">
            <AdUnit id="L-S-1" adKey={keys.tall} width={160} height={600} />
            <AdUnit id="L-S-2" adKey={keys.shortTall} width={160} height={300} />
            <a href={smartlink} className="block bg-fuchsia-600 p-2 text-[10px] text-center font-black animate-pulse">WATCH AD</a>
            <AdUnit id="L-S-3" adKey={keys.tall} width={160} height={600} />
          </div>
        </aside>

        <main className="flex-grow max-w-7xl px-4 sm:px-6 lg:px-8">
          <Hero />
          
          <div className="flex flex-col items-center my-16 gap-10">
             <WatchAdsButton className="w-full h-32" />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
               <AdUnit id="pre-grid-1" adKey={keys.leaderboard} width={468} height={60} />
               <AdUnit id="pre-grid-2" adKey={keys.leaderboard} width={468} height={60} />
             </div>
          </div>

          {/* GRID OF CONTENT WITH MAX AD INJECTION */}
          <section className="py-12">
            <h2 className="text-6xl font-black text-white mb-20 tracking-tighter uppercase italic border-l-[24px] border-fuchsia-600 pl-10 shadow-fuchsia-500/20">Market Intelligence</h2>
            
            <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 xl:grid-cols-3">
              {MOCK_ARTICLES.map((article, index) => (
                <div key={article.id} className="flex flex-col gap-12 group/post">
                  <ArticleCard article={article} />
                  
                  {/* ADS AFTER EVERY ARTICLE - DIFFERENT TYPES */}
                  <div className="bg-slate-900 p-6 rounded-[3rem] border-2 border-fuchsia-500/20 shadow-2xl flex flex-col items-center gap-6">
                    <span className="text-xs text-fuchsia-400 font-black uppercase tracking-[0.5em] animate-bounce">Premium Sponsor</span>
                    {index % 3 === 0 ? (
                      <AdUnit id={`art-r-${index}`} adKey={keys.rectangle} width={300} height={250} />
                    ) : index % 3 === 1 ? (
                      <AdUnit id={`art-n-${index}`} adKey={keys.native} isNative={true} />
                    ) : (
                      <div className="flex flex-col gap-4">
                         <AdUnit id={`art-m1-${index}`} adKey={keys.mobile} width={320} height={50} />
                         <AdUnit id={`art-m2-${index}`} adKey={keys.mobile} width={320} height={50} />
                      </div>
                    )}
                    <a href={smartlink} className="w-full bg-white/5 py-3 rounded-xl text-center text-[10px] font-bold hover:bg-white/10 transition-colors">VISIT SPONSOR HUB</a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* NUCLEAR AD BLOCK - MID PAGE */}
          <div className="my-32 bg-fuchsia-950/20 py-32 px-12 rounded-[100px] border-y-4 border-fuchsia-500 flex flex-col items-center gap-20 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none text-9xl font-black text-fuchsia-500 rotate-12 flex flex-wrap gap-20">ADS ADS ADS ADS</div>
             <WatchAdsButton className="w-full max-w-6xl h-40" />
             <div className="flex flex-wrap justify-center gap-12 z-10">
                <AdUnit id="mid-nuke-1" adKey={keys.rectangle} width={300} height={250} />
                <AdUnit id="mid-nuke-2" adKey={keys.rectangle} width={300} height={250} />
                <AdUnit id="mid-nuke-3" adKey={keys.rectangle} width={300} height={250} />
             </div>
             <AdUnit id="mid-nuke-long" adKey={keys.leaderboard} width={468} height={60} />
          </div>

          {/* SEO CONTENT SATURATION - AD EVERY 50-100 WORDS */}
          <section className="mx-auto max-w-5xl py-24 bg-slate-900/50 px-16 rounded-[80px]">
            <div className="prose prose-invert prose-2xl max-w-none font-medium">
              <h2 className="text-7xl font-black text-white mb-20 text-center tracking-tighter uppercase underline decoration-[20px] decoration-fuchsia-600 underline-offset-[-5px]">The Report</h2>
              <div className="text-slate-300 space-y-20">
                <p>{FILLER_TEXT.ai_trends.split('\n\n')[0]}</p>
                <div className="flex flex-col items-center gap-10 py-20 bg-fuchsia-600/10 rounded-[60px] border-2 border-fuchsia-500/30">
                  <AdUnit id="txt-sat-1" adKey={keys.rectangle} width={300} height={250} />
                  <WatchAdsButton className="scale-90" />
                  <AdUnit id="txt-sat-2" adKey={keys.mobile} width={320} height={50} />
                </div>
                
                <p>{FILLER_TEXT.ai_trends.split('\n\n')[1]}</p>
                <AdUnit id="txt-sat-3" adKey={keys.leaderboard} width={468} height={60} />
                
                <p>{FILLER_TEXT.ai_trends.split('\n\n')[2]}</p>
                <div className="flex flex-wrap justify-center gap-6">
                   <AdUnit id="txt-sat-4a" adKey={keys.mobile} width={320} height={50} />
                   <AdUnit id="txt-sat-4b" adKey={keys.mobile} width={320} height={50} />
                </div>

                <p>{FILLER_TEXT.blockchain.split('\n\n')[0]}</p>
                <AdUnit id="txt-sat-5" adKey={keys.native} isNative={true} />
                
                <div className="py-24 flex flex-col items-center gap-12 bg-white/5 rounded-[40px]">
                   <WatchAdsButton className="w-full h-48" />
                   <AdUnit id="txt-sat-6" adKey={keys.rectangle} width={300} height={250} />
                </div>

                <p>{FILLER_TEXT.blockchain.split('\n\n')[1]}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <AdUnit id="txt-sat-7a" adKey={keys.leaderboard} width={468} height={60} />
                  <AdUnit id="txt-sat-7b" adKey={keys.leaderboard} width={468} height={60} />
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* RIGHT AD GUTTER - MAXIMUM HEIGHT AD STACK */}
        <aside className="ad-gutter ml-4">
          <div className="flex flex-col gap-8 py-10 sticky top-20">
            <AdUnit id="R-S-1" adKey={keys.shortTall} width={160} height={300} />
            <AdUnit id="R-S-2" adKey={keys.tall} width={160} height={600} />
            <WatchAdsButton className="text-[12px] py-6 px-2 rounded-lg" />
            <AdUnit id="R-S-3" adKey={keys.shortTall} width={160} height={300} />
            <AdUnit id="R-S-4" adKey={keys.tall} width={160} height={600} />
          </div>
        </aside>
      </div>

      {/* THE AD GALAXY FOOTER - 12+ UNITS */}
      <div className="bg-slate-900 py-40 border-t-[12px] border-fuchsia-600">
        <div className="mx-auto max-w-7xl px-4 flex flex-col items-center">
          <WatchAdsButton className="mb-32 w-full" />
          <h4 className="text-white font-black uppercase tracking-[1.2em] text-2xl mb-24 text-center animate-pulse drop-shadow-[0_0_15px_rgba(192,38,211,0.8)]">Partner Ecosystem</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex flex-col gap-4">
                <AdUnit id={`footer-grid-${i}`} adKey={keys.rectangle} width={300} height={250} />
                <a href={smartlink} className="bg-fuchsia-600 py-2 text-[10px] text-center font-black">SPONSORED LINK {i+1}</a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />

      {/* UNBLOCKABLE STICKY FOOTER OVERLAY */}
      <div className="fixed bottom-0 left-0 right-0 z-[1000] bg-black/95 backdrop-blur-3xl border-t-8 border-fuchsia-600 p-6 flex flex-col items-center shadow-[0_-100px_200px_rgba(192,38,211,0.6)]">
        <div className="flex items-center gap-20 mb-4">
          <div className="flex items-center gap-4">
            <div className="h-6 w-6 rounded-full bg-red-600 animate-ping"></div>
            <span className="text-sm text-fuchsia-500 font-black uppercase tracking-widest">Revenue Generation Locked</span>
          </div>
          <button className="text-xs text-slate-400 hover:text-white transition-all font-bold px-4 py-2 border border-white/20 rounded-full" onClick={(e) => e.currentTarget.parentElement?.parentElement?.remove()}>[CLOSE REVENUE LAYER]</button>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 w-full">
          <AdUnit id="sticky-1" adKey={keys.mobile} width={320} height={50} />
          <WatchAdsButton className="h-20 text-lg px-20 py-0 rounded-3xl" />
          <AdUnit id="sticky-2" adKey={keys.mobile} width={320} height={50} />
        </div>
      </div>
    </div>
  );
};

export default App;
