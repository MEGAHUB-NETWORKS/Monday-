
import React from 'react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const categoryColors = {
    AI: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
    Blockchain: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    SaaS: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    FutureTech: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
  };

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-slate-900/50 transition-all hover:bg-slate-900 hover:border-white/10 hover:-translate-y-1">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${categoryColors[article.category]}`}>
            {article.category}
          </span>
          <span className="text-xs text-slate-500">{article.readTime} Read</span>
        </div>
        <h3 className="text-xl font-bold leading-tight text-white group-hover:text-indigo-400 transition-colors mb-3">
          <a href="#">
            <span className="absolute inset-0" />
            {article.title}
          </a>
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-slate-400 mb-6">
          {article.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-slate-800 border border-white/10 overflow-hidden">
              <img src={`https://i.pravatar.cc/100?u=${article.author}`} alt={article.author} />
            </div>
            <span className="text-xs font-medium text-slate-300">{article.author}</span>
          </div>
          <button className="flex items-center gap-1 text-xs font-bold text-indigo-400 group-hover:translate-x-1 transition-transform">
            Read More
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
