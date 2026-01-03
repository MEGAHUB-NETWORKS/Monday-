
import React from 'react';

interface AdBannerProps {
  label: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ label }) => {
  return (
    <div className="my-12 flex h-32 w-full items-center justify-center rounded-xl border-2 border-dashed border-white/10 bg-white/[0.02] text-slate-600">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-widest mb-1">Sponsored Space</p>
        <p className="text-[10px]">Placeholder for: {label}</p>
        {/* BANNER AD ${label} HERE */}
      </div>
    </div>
  );
};

export default AdBanner;
