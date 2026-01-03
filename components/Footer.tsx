
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-white">
                N
              </div>
              <span className="text-xl font-extrabold tracking-tighter text-white">
                NEXUS<span className="text-cyan-400">TECH</span>
              </span>
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              The premium destination for deep technical insights and the future of engineering. We provide high-signal content for the developers of tomorrow.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Research Papers</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Market Reports</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Career Portal</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">About Nexus</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Cookie Settings</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-slate-500">
            &copy; 2024 NexusTech Media Group. All rights reserved. Built with precision.
          </p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
