import React, { useState } from 'react';
import { Code2, Database, BarChart2, PieChart, TrendingUp, Filter, Terminal } from 'lucide-react';
import reactLogo from '../assets/react.svg';
import jiraImg from '../assets/jira.png';
import pythonSvg from '../assets/Python.svg.png';
import rSvg from '../assets/R_logo.svg.png';

const AutoScroller = ({ items }) => {
  return (
    <div className="relative overflow-x-auto cursor-grab active:cursor-grabbing px-2">
      <style>{`
        @keyframes techscroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="flex gap-3 sm:gap-4 w-max animate-[techscroll_18s_linear_infinite] snap-x snap-mandatory scroll-smooth">
        {[...items, ...items].map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="glass-card p-2.5 w-24 sm:w-28 flex flex-col items-center gap-2 hover:border-white/20 snap-start shrink-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10">
              {item.icon}
            </div>
            <div className="text-[11px] sm:text-xs text-gray-300">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const categories = [
  {
    key: 'programming',
    label: 'Programming Languages',
    items: [
      { name: 'Python', icon: <img src={pythonSvg} alt="Python" className="w-6 h-6" /> },
      { name: 'R', icon: <img src={rSvg} alt="R" className="w-6 h-6" /> },
      { name: 'PHP', icon: <img src={rSvg} alt="PHP" className="w-6 h-6" /> },
      { name: 'SQL', icon: <Database className="w-6 h-6 text-emerald-400" /> },
    ],
  },
  {
    key: 'web',
    label: 'Web Development',
    items: [
      { name: 'HTML', icon: <Code2 className="w-6 h-6 text-orange-400" /> },
      { name: 'CSS', icon: <Filter className="w-6 h-6 text-blue-400" /> },
      { name: 'JavaScript', icon: <Terminal className="w-6 h-6 text-yellow-300" /> },
      { name: 'React', icon: <img src={reactLogo} alt="React" className="w-6 h-6" /> },
    ],
  },
  {
    key: 'dataviz',
    label: 'Data Visualisation',
    items: [
      { name: 'Power BI', icon: <BarChart2 className="w-6 h-6 text-yellow-400" /> },
      { name: 'Streamlit', icon: <TrendingUp className="w-6 h-6 text-pink-400" /> },
      { name: 'Google Data Studio', icon: <PieChart className="w-6 h-6 text-cyan-400" /> },
      { name: 'SQL', icon: <Database className="w-6 h-6 text-emerald-400" /> },
      { name: 'PostgreSQL', icon: <Database className="w-6 h-6 text-indigo-400" /> },
    ],
  },
  {
    key: 'db',
    label: 'Data Base Management',
    items: [
      { name: 'SQL', icon: <Database className="w-6 h-6 text-emerald-400" /> },
      { name: 'PostgreSQL', icon: <Database className="w-6 h-6 text-indigo-400" /> },
    ],
  },
  {
    key: 'tools',
    label: 'Other Tools',
    items: [
      { name: 'Microsoft Excel', icon: <BarChart2 className="w-6 h-6 text-green-400" /> },
      { name: 'Canva', icon: <Filter className="w-6 h-6 text-blue-300" /> },
      { name: 'Jira', icon: <img src={jiraImg} alt="Jira" className="w-6 h-6 rounded" /> },
      { name: 'Diagrams Tools', icon: <TrendingUp className="w-6 h-6 text-purple-300" /> },
      { name: 'Firebase', icon: <TrendingUp className="w-6 h-6 text-orange-400" /> },
    ],
  },
];

export default function TechStack() {
  const [active, setActive] = useState('programming');
  const current = categories.find((c) => c.key === active) || categories[0];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="w-full flex justify-start sm:justify-center overflow-x-auto px-2">
          <div className="inline-flex min-w-max items-center gap-2 bg-white/5 border border-white/10 rounded-full px-2 sm:px-3 py-2 mx-0 sm:mx-auto shrink-0">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                  active === c.key ? 'bg-white text-black' : 'text-gray-300 hover:text-white'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <AutoScroller items={current.items} />
        </div>
      </div>
    </section>
  );
}
