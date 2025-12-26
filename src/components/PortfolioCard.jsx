import React from 'react';
import { TrendingUp, Activity } from 'lucide-react';

export default function PortfolioCard() {
  return (
    <div className="relative w-full max-w-md p-6 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden group hover:border-purple-500/30 transition-colors duration-500">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      {/* Header */}
      <div className="flex justify-between items-start mb-8 relative z-10">
        <div>
          <h3 className="text-gray-400 text-sm font-medium mb-1">Total Growth</h3>
          <div className="text-3xl font-bold text-white flex items-center gap-2">
            +245%
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 flex items-center gap-1">
              <TrendingUp size={12} />
              YTD
            </span>
          </div>
        </div>
        <div className="p-2 bg-white/5 rounded-lg text-purple-400 border border-white/5">
            <Activity size={20} />
        </div>
      </div>

      {/* Graph Area */}
      <div className="h-32 w-full relative z-10">
          {/* Simple SVG Line Chart */}
          <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible" preserveAspectRatio="none">
             <defs>
                <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                   <stop offset="0%" stopColor="#9333ea" stopOpacity="0.5" />
                   <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
                </linearGradient>
             </defs>
             <path 
                d="M0,40 L0,30 C10,30 10,20 20,22 C30,24 30,35 40,30 C50,25 50,10 60,15 C70,20 70,25 80,10 C90,-5 100,10 100,10 V40 Z" 
                fill="url(#gradient)" 
             />
             <path 
                d="M0,30 C10,30 10,20 20,22 C30,24 30,35 40,30 C50,25 50,10 60,15 C70,20 70,25 80,10 C90,-5 100,10" 
                fill="none" 
                stroke="#a855f7" 
                strokeWidth="2" 
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
             />
          </svg>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mt-6 relative z-10">
        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="text-xs text-gray-500 mb-1">Projects</div>
            <div className="text-lg font-semibold text-white">42+</div>
        </div>
        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
            <div className="text-xs text-gray-500 mb-1">Optimization</div>
            <div className="text-lg font-semibold text-white">98%</div>
        </div>
      </div>
    </div>
  );
}
