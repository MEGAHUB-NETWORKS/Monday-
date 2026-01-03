
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-full -translate-x-1/2 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-slate-950 to-transparent blur-3xl opacity-50"></div>
      
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-8 animate-pulse">
          Breaking: AI Frontier Report
        </div>
        <h1 className="mx-auto max-w-4xl text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl">
          Decoding the <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Future</span> of Intelligence.
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
          The ultimate resource for engineers, founders, and futurists navigating the next wave of technological evolution. Join 150k+ readers staying ahead of the curve.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="flex w-full max-w-md gap-x-4">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="min-w-0 flex-auto rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
            <button className="flex-none rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all">
              Get Notified
            </button>
          </div>
        </div>
        
        <div className="mt-16 flex items-center justify-center gap-x-10 text-slate-500 text-sm font-medium grayscale opacity-60">
          <span>TRUSTED BY LEADERS AT:</span>
          <span className="hover:grayscale-0 hover:opacity-100 transition-all cursor-default">OPENAI</span>
          <span className="hover:grayscale-0 hover:opacity-100 transition-all cursor-default">ANTHROPIC</span>
          <span className="hover:grayscale-0 hover:opacity-100 transition-all cursor-default">STRIPE</span>
          <span className="hover:grayscale-0 hover:opacity-100 transition-all cursor-default">NVIDIA</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
