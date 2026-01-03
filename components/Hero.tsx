
import React from 'react';

const Hero: React.FC = () => {
  const smartlink = "https://www.effectivegatecpm.com/wjb8j1tsjg?key=c80a29ddbeda79ae126747b7f7d3cf12";

  return (
    <section className="relative overflow-hidden py-16 lg:py-24 border-b border-white/5">
      <div className="absolute top-0 left-1/2 -z-10 h-[500px] w-full -translate-x-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-slate-950 to-transparent blur-3xl opacity-50"></div>
      
      <div className="mx-auto max-w-5xl px-4 text-center">
        <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-400 mb-8 animate-pulse">
          Confidential: 2025 Market Intelligence
        </div>
        <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
          THE <span className="text-indigo-500">INTELLIGENCE</span> PROTOCOL.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400">
          NexusTech provides high-signal data for technical leaders. Avoid the noise, master the infrastructure.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a 
            href={smartlink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:bg-indigo-500 hover:scale-105 transition-all text-center"
          >
            DOWNLOAD TECH REPORT
          </a>
          <button className="w-full sm:w-auto rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-all">
            Join the Network
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
