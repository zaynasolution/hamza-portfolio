import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';

export default function Timeline() {
  const [hoveredId, setHoveredId] = useState(null);

  const roles = [
    {
      id: 1,
      role: "Data Analyst",
      company: "Mindshift Company",
      period: "Sep 2024 - Present",
      achievements: [
        "Analyzed large datasets to identify trends and actionable insights.",
        "Created automated reporting tools for data-driven decision making.",
        "Collaborated with stakeholders to translate business needs into analytics."
      ],
      color: "from-purple-500 to-cyan-500"
    },
    {
      id: 2,
      role: "Supervisor",
      company: "Kabbani Company",
      period: "2019 - 2022",
      achievements: [
        "Led a 12-member cross-functional team.",
        "Consistently delivered projects on time and to specification.",
        "Implemented and refined standard operating procedures."
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 3,
      role: "Marketing Dept. Assistant",
      company: "Azmeel Company",
      period: "2017 - 2018",
      achievements: [
        "Assisted in planning and executing promotional campaigns.",
        "Utilized data analysis to segment target audiences.",
        "Measured campaign effectiveness to refine strategies."
      ],
      color: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="glow-blob glow-cyan bottom-[10%] left-[10%] opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Journey</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          <div className="space-y-12">
            {roles.map((role, index) => (
              <Motion.div 
                key={role.id}
                className={`flex flex-col md:flex-row items-start gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onMouseEnter={() => setHoveredId(role.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-white/20 z-20 group">
                    <div className={`w-full h-full rounded-full bg-gradient-to-r ${role.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`} />
                </div>

                {/* Content */}
                <div className="ml-20 md:ml-0 md:w-1/2 md:px-12">
                   <div className={`glass-card p-6 relative group transition-all duration-300 ${hoveredId === role.id ? 'border-white/40 bg-white/10' : ''}`}>
                      <div className="flex items-center gap-2 mb-2 text-sm text-gray-400 font-mono">
                          <Calendar size={14} />
                          {role.period}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1 font-display">{role.role}</h3>
                      <div className="text-cyan-400 font-medium mb-4">{role.company}</div>

                      {/* Achievements - Always Visible to prevent layout shift glitches */}
                      <ul className="space-y-2 mt-4 pt-4 border-t border-white/10">
                          {role.achievements.map((item, i) => (
                              <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                                  <ChevronRight size={14} className="mt-1 text-cyan-400 shrink-0" />
                                  {item}
                              </li>
                          ))}
                      </ul>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
