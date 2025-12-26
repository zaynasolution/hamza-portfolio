import React from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { PieChart, TrendingUp, Filter } from 'lucide-react';

export default function Synergy() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="glow-blob glow-purple top-[30%] left-[-10%] opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Synergy</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-sans">
            Bridging the gap between raw data and actionable marketing strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Data Optimization */}
          <Motion.div 
            className="glass-card p-8 relative overflow-hidden group scanline"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
             <div className="scanline-bar" />
             
             <div className="flex items-start justify-between mb-8">
                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 border border-purple-500/20">
                    <PieChart size={24} />
                </div>
                <div className="text-xs font-mono text-purple-300 bg-purple-900/20 px-2 py-1 rounded">
                    DATA_OPTIMIZATION
                </div>
             </div>

             <h3 className="text-2xl font-bold text-white mb-2 font-display">Analyzed Datasets</h3>
             <p className="text-gray-400 mb-6 text-sm">
                Identified key trends and patterns to support business decisions across multiple departments.
             </p>

             {/* Interactive Pie Chart Animation */}
             <div className="relative h-32 flex items-center justify-center">
                 <svg viewBox="0 0 100 100" className="w-24 h-24 transform -rotate-90">
                    <Motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#333"
                        strokeWidth="10"
                        fill="none"
                    />
                    <Motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#a855f7"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray="251.2"
                        strokeDashoffset="251.2"
                        initial={{ strokeDashoffset: 251.2 }}
                        whileInView={{ strokeDashoffset: 60 }} // ~75%
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                 </svg>
                 <div className="absolute text-center">
                    <span className="text-xl font-bold text-white">75%</span>
                 </div>
             </div>
          </Motion.div>

          {/* Card 2: Growth Engine */}
          <Motion.div 
            className="glass-card p-8 relative overflow-hidden group scanline"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
             <div className="scanline-bar" style={{ animationDelay: "1.5s" }} />

             <div className="flex items-start justify-between mb-8">
                <div className="p-3 bg-pink-500/10 rounded-xl text-pink-400 border border-pink-500/20">
                    <TrendingUp size={24} />
                </div>
                <div className="text-xs font-mono text-pink-300 bg-pink-900/20 px-2 py-1 rounded">
                    GROWTH_ENGINE
                </div>
             </div>

             <h3 className="text-2xl font-bold text-white mb-2 font-display">Conversion & Churn</h3>
             <p className="text-gray-400 mb-6 text-sm">
                Boosted conversion rates and reduced churn through data-driven decision making.
             </p>

             {/* Conversion Funnel Graphic */}
             <div className="flex flex-col items-center gap-1">
                 {[100, 75, 50, 25].map((width, i) => (
                     <Motion.div 
                        key={i}
                        className="h-6 rounded bg-gradient-to-r from-pink-500 to-purple-600 opacity-80"
                        style={{ width: `${width}%` }}
                        initial={{ width: "10%" }}
                        whileInView={{ width: `${width}%` }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                     />
                 ))}
             </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
