
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
      className={`group relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-800 px-12 py-6 text-2xl font-black uppercase tracking-tighter text-white shadow-[0_0_50px_rgba(79,70,229,0.6)] transition-all hover:scale-110 hover:brightness-125 active:scale-95 ${className}`}
    >
      <span className="relative z-10">WATCH PREMIUM ADS</span>
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
    </a>
  );

  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <Navbar />
      
      {/* ATOMIC HEADER STACK - 6 BANNERS */}
      <div className="flex flex-col items-center space-y-4 bg-white/[0.03] py-10 border-b-2 border-indigo-500/50">
        <div className="text-[12px] text-cyan-400 font-black tracking-[1em] uppercase animate-pulse mb-4 text-center px-4">Network Infrastructure Maintained by Sponsors</div>
        <div className="flex flex-wrap justify-center gap-4 px-4">
          <AdUnit id="h-1" adKey={keys.mobile} width={320} height={50} type="320x50" />
          <AdUnit id="h-2" adKey={keys.leaderboard} width={468} height={60} type="468x60" />
          <AdUnit id="h-3" adKey={keys.mobile} width={320} height={50} type="320x50" />
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          <AdUnit id="h-4" adKey={keys.rectangle} width={300} height={250} type="300x250" />
          <WatchAdsButton className="max-w-xs h-24 text-lg" />
          <AdUnit id="h-5" adKey={keys.rectangle} width={300} height={250} type="300x250" />
        </div>
      </div>

      <div className="flex justify-center w-full relative">
        {/* LEFT AD GUTTER - STACKED SKYSCRAPERS */}
        <aside className="ad-gutter mr-4">
          <div className="flex flex-col gap-8 py-10">
            <WatchAdsButton className="text-xs py-3 px-4 rounded-lg" />
            <AdUnit id="L-1" adKey={keys.tall} width={160} height={600} type="160x600" />
            <AdUnit id="L-2" adKey={keys.shortTall} width={160} height={300} type="160x300" />
            <AdUnit id="L-3" adKey={keys.tall} width={160} height={600} type="160x600" />
            <AdUnit id="L-4" adKey={keys.shortTall} width={160} height={300} type="160x300" />
            <WatchAdsButton className="text-xs py-3 px-4 rounded-lg" />
          </div>
        </aside>

        <main className="flex-grow max-w-7xl px-4 sm:px-6 lg:px-8">
          <Hero />
          
          <div className="flex flex-col items-center my-12 gap-8">
             <WatchAdsButton className="w-full max-w-3xl" />
             <div className="flex gap-4">
               <AdUnit id="pre-grid-1" adKey={keys.leaderboard} width={468} height={60} type="468x60" />
               <AdUnit id="pre-grid-2" adKey={keys.leaderboard} width={468} height={60} type="468x60" />
             </div>
          </div>

          {/* MAIN GRID - AD AFTER EVERY CARD */}
          <section className="py-12 relative">
            <h2 className="text-5xl font-black text-white mb-16 tracking-tighter uppercase italic border-l-[16px] border-indigo-600 pl-8">Critical Intelligence</h2>
            
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 xl:grid-cols-3">
              {MOCK_ARTICLES.map((article, index) => (
                <div key={article.id} className="flex flex-col gap-10">
                  <ArticleCard article={article} />
                  
                  {/* ADS AFTER EVERY SINGLE ARTICLE - MAX SATURATION */}
                  <div className="bg-slate-900/90 p-8 rounded-[40px] border-4 border-indigo-500/20 shadow-[0_30px_60px_rgba(0,0,0,0.7)] flex flex-col items-center">
                    <span className="text-[11px] text-indigo-400 font-black uppercase mb-6 tracking-widest text-center">Sponsored Technical Briefing</span>
                    <AdUnit id={`art-slot-${index}`} adKey={keys.rectangle} width={300} height={250} type="300x250" />
                    <div className="mt-6 w-full flex flex-col gap-3">
                       <AdUnit id={`art-mob-a-${index}`} adKey={keys.mobile} width={320} height={50} type="320x50" />
                       <AdUnit id={`art-mob-b-${index}`} adKey={keys.mobile} width={320} height={50} type="320x50" />
                    </div>
                    {index % 2 === 0 && (
                      <div className="mt-6 w-full">
                        <WatchAdsButton className="w-full text-sm py-4 rounded-xl" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* MASSIVE MID-SECTION AD BARRIER */}
          <div className="my-24 bg-white/[0.02] py-20 px-8 rounded-[60px] border-y-2 border-white/5 flex flex-col items-center gap-12 overflow-hidden relative">
             <div className="absolute top-0 right-0 p-4 opacity-20 rotate-45 text-8xl font-black text-white pointer-events-none">ADS</div>
             <h3 className="text-2xl font-black text-indigo-400 uppercase tracking-[0.4em] text-center">Global Partner Network Synchronization</h3>
             <div className="flex flex-wrap justify-center gap-10">
                <AdUnit id="mid-palace-1" adKey={keys.rectangle} width={300} height={250} type="300x250" />
                <AdUnit id="mid-palace-2" adKey={keys.rectangle} width={300} height={250} type="300x250" />
                <AdUnit id="mid-palace-3" adKey={keys.rectangle} width={300} height={250} type="300x250" />
             </div>
             <WatchAdsButton className="w-full max-w-4xl" />
             <div className="flex flex-wrap justify-center gap-4">
                <AdUnit id="mid-palace-4" adKey={keys.leaderboard} width={468} height={60} type="468x60" />
                <AdUnit id="mid-palace-5" adKey={keys.leaderboard} width={468} height={60} type="468x60" />
             </div>
          </div>

          {/* SATURATED SEO CONTENT - AD EVERY 100 WORDS */}
          <section className="mx-auto max-w-4xl py-20 bg-slate-900/20 px-10 rounded-[50px]">
            <div className="prose prose-invert prose-slate max-w-none">
              <h2 className="text-5xl font-black text-white mb-16 text-center tracking-tighter uppercase underline decoration-indigo-600 decoration-8 underline-offset-8">Intelligence Manifest</h2>
              <div className="text-slate-400 text-xl leading-[2] space-y-16">
                <p>{FILLER_TEXT.ai_trends.split('\n\n')[0]}</p>
                <div className="flex flex-col items-center gap-6 py-10 bg-indigo-600/5 rounded-3xl border border-white/5">
                  <AdUnit id="txt-1" adKey={keys.rectangle} width={300} height={250} type="300x250" />
                  <WatchAdsButton className="scale-75" />
                </div>
                
                <p>{FILLER_TEXT.ai_trends.split('\n\n')[1]}</p>
                <AdUnit id="txt-2" adKey={keys.leaderboard} width={468} height={60} type="468x60" />
                
                <p>{FILLER_TEXT.ai_trends.split('\n\n')[2]}</p>
                <div className="flex justify-center gap-4">
                   <AdUnit id="txt-3a" adKey={keys.mobile} width={320} height={50} type="320x50" />
                   <AdUnit id="txt-3b" adKey={keys.mobile} width={320} height={50} type="320x50" />
                </div>

                <p>{FILLER_TEXT.blockchain.split('\n\n')[0]}</p>
                <AdUnit id="txt-4" adKey={keys.native} isNative={true} />
                
                <div className="py-20 flex flex-col items-center gap-10">
                   <WatchAdsButton className="w-full" />
                   <AdUnit id="txt-native-2" adKey={keys.native} isNative={true} />
                </div>

                <p>{FILLER_TEXT.blockchain.split('\n\n')[1]}</p>
                <AdUnit id="txt-5" adKey={keys.rectangle} width={300} height={250} type="300x250" />

                <p>{FILLER_TEXT.future_outlook.split('\n\n')[0]}</p>
                <div className="flex flex-col gap-4 items-center">
                   <AdUnit id="txt-6" adKey={keys.leaderboard} width={468} height={60} type="468x60" />
                   <AdUnit id="txt-7" adKey={keys.leaderboard} width={468} height={60} type="468x60" />
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* RIGHT AD GUTTER - STACKED SKYSCRAPERS */}
        <aside className="ad-gutter ml-4">
          <div className="flex flex-col gap-8 py-10">
            <AdUnit id="R-1" adKey={keys.shortTall} width={160} height={300} type="160x300" />
            <AdUnit id="R-2" adKey={keys.tall} width={160} height={600} type="160x600" />
            <WatchAdsButton className="text-[10px] py-4 px-2 rounded-lg" />
            <AdUnit id="R-3" adKey={keys.shortTall} width={160} height={300} type="160x300" />
            <AdUnit id="R-4" adKey={keys.tall} width={160} height={600} type="160x600" />
            <AdUnit id="R-5" adKey={keys.shortTall} width={160} height={300} type="160x300" />
            <WatchAdsButton className="text-[10px] py-4 px-2 rounded-lg" />
          </div>
        </aside>
      </div>

      {/* FOOTER AD PALACE - 3x3 GRID */}
      <div className="bg-slate-900 py-32 border-t-8 border-indigo-600/50">
        <div className="mx-auto max-w-7xl px-4 flex flex-col items-center">
          <h4 className="text-white font-black uppercase tracking-[0.8em] text-lg mb-20 text-center animate-pulse underline decoration-indigo-500 underline-offset-[20px]">Verified Revenue Partners</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            <AdUnit id="f-grid-1" adKey={keys.rectangle} width={300} height={250} type="300x250" />
            <AdUnit id="f-grid-2" adKey={keys.rectangle} width={300} height={250} type="300x250" />
            <AdUnit id="f-grid-3" adKey={keys.rectangle} width={300} height={250} type="300x250" />
            <WatchAdsButton className="text-sm py-10" />
            <AdUnit id="f-grid-4" adKey={keys.rectangle} width={300} height={250} type="300x250" />
            <WatchAdsButton className="text-sm py-10" />
            <AdUnit id="f-grid-5" adKey={keys.rectangle} width={300} height={250} type="300x250" />
            <AdUnit id="f-grid-6" adKey={keys.rectangle} width={300} height={250} type="300x250" />
            <AdUnit id="f-grid-7" adKey={keys.rectangle} width={300} height={250} type="300x250" />
          </div>
        </div>
      </div>

      <Footer />

      {/* STICKY REVENUE BAR - PERMANENT */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-slate-950/98 backdrop-blur-[40px] border-t-4 border-indigo-600 p-4 flex flex-col items-center shadow-[0_-50px_200px_rgba(79,70,229,0.5)]">
        <div className="flex items-center gap-12 mb-3">
          <div className="h-3 w-3 rounded-full bg-red-500 animate-ping"></div>
          <span className="text-xs text-indigo-400 font-black uppercase tracking-[0.5em]">System Yield Optimal</span>
          <button className="text-[10px] text-slate-500 hover:text-white transition-all font-bold border border-white/10 px-2 py-1 rounded" onClick={(e) => e.currentTarget.parentElement?.parentElement?.remove()}>[CLOSE REVENUE OVERLAY]</button>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 w-full max-w-7xl">
          <AdUnit id="sticky-1" adKey={keys.mobile} width={320} height={50} type="320x50" />
          <WatchAdsButton className="h-12 text-xs px-8 py-0 rounded-xl" />
          <AdUnit id="sticky-2" adKey={keys.mobile} width={320} height={50} type="320x50" />
        </div>
      </div>
    </div>
  );
};

export default App;
