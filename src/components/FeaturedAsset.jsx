import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { Terminal, Database, Code2, BarChart2, ChevronDown, CheckCircle2 } from 'lucide-react';
import revenueImage from '../assets/revenue-removebg-preview.png';

export default function FeaturedAsset() {
  const [isExpanded, setIsExpanded] = useState(false);

  const techStack = [
    { name: "PHP", icon: <Code2 size={16} /> },
    { name: "SQL", icon: <Database size={16} /> },
    { name: "React", icon: <Terminal size={16} /> },
    { name: "Real-time Reporting", icon: <BarChart2 size={16} /> }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#050505]">
       {/* Background Glow - GPU Accelerated */}
       <div className="glow-blob glow-cyan top-[20%] right-[-10%] opacity-10 gpu-accelerated" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Featured Asset <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">POS System</span>
          </h2>
          <p className="text-gray-400 max-w-2xl font-sans">
            A comprehensive restaurant management solution built for speed and reliability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Image Container - Updated with White Background & GPU acceleration */}
          <Motion.div 
            className="p-6 relative overflow-hidden group flex items-center justify-center bg-white rounded-2xl shadow-2xl gpu-accelerated"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
             <img 
                src={revenueImage} 
                alt="POS System Revenue Dashboard" 
                className="w-full h-auto object-contain rounded-lg hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width="600"
                height="400"
             />
          </Motion.div>

          {/* Right: Technical Breakdown */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white font-display">Technical Architecture</h3>
            
            <ul className="space-y-4">
                {techStack.map((tech, index) => (
                    <Motion.li 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                        <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                            {tech.icon}
                        </div>
                        <span className="text-gray-300 font-sans group-hover:text-white transition-colors">{tech.name}</span>
                        <div className="ml-auto w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                    </Motion.li>
                ))}
            </ul>

            <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="group flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium text-cyan-400"
            >
                Technical Deep Dive
                <ChevronDown className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} size={16} />
            </button>

            <AnimatePresence>
                {isExpanded && (
                    <Motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="p-4 rounded-xl bg-black/50 border border-white/10 font-mono text-xs text-gray-400 mt-4">
                            <div className="flex gap-2 mb-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                            </div>
                            <pre className="overflow-x-auto">
{`// Real-time Inventory Sync Logic
const syncInventory = async (orderId) => {
  try {
    await db.transaction(async (trx) => {
      const items = await trx('order_items')
        .where({ order_id: orderId });
      
      for (const item of items) {
        await trx('inventory')
          .decrement('quantity', item.qty)
          .where('id', item.product_id);
      }
    });
    emit('inventory:update');
  } catch (err) {
    logger.error('Sync failed', err);
  }
}`}
                            </pre>
                        </div>
                    </Motion.div>
                )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
