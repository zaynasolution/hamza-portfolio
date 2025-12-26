import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import webDevImg from '../assets/WEB DEV.png';
import jiraImg from '../assets/jira.png';
import ibmImg from '../assets/IBM.png';
import dbImg from '../assets/Fondamentaux du Système de Base de Données.png';
import pythonImg from '../assets/PYTHON.png';

export default function Certificates() {
  const certificates = [
    {
      title: "Introduction to Web Development",
      issuer: "Google",
      date: "Nov 28, 2023",
      details: "Design Department & the Division of Continuing and Professional Education.",
      verifyLink: null,
      color: "from-yellow-400 to-orange-500",
      image: webDevImg
    },
    {
      title: "How to Create a Jira SCRUM Project",
      issuer: "Coursera Project Network",
      date: "Apr 19, 2024",
      details: "Skills: Agile Methodology, Sprint Planning, Backlogs.",
      verifyLink: "https://coursera.org/verify/4XKFFQ6C4AL9",
      color: "from-blue-500 to-cyan-500",
      image: jiraImg
    },
    {
      title: "Fondamentaux du Système de Base de Données",
      issuer: "Unknown Issuer", 
      date: "Nov 27, 2023",
      details: "Database Management Systems Fundamentals.",
      verifyLink: null,
      color: "from-green-400 to-emerald-600",
      image: dbImg
    },
    {
      title: "Introduction to Project Management",
      issuer: "IBM",
      date: "Jan 21, 2025",
      details: "Project Lifecycle, Risk Management, Stakeholder Management.",
      verifyLink: "https://coursera.org/verify/Y3KDP60V1ZTP",
      color: "from-blue-600 to-indigo-600",
      image: ibmImg
    },
    {
      title: "Get Started With Python",
      issuer: "Google",
      date: "Nov 26, 2023",
      details: "Python Syntax, Data Structures, OOP Basics.",
      verifyLink: "https://coursera.org/verify/SK9SQXNW3Y47",
      color: "from-yellow-300 to-yellow-500",
      image: pythonImg
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background Glow */}
      <div className="glow-blob glow-purple top-[50%] right-[0%] opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Certified <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Achievements</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-sans">
            Continuous learning and professional development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Motion.div 
              key={index}
              className="glass-card p-6 relative group flex flex-col h-full overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Laser Beam Animation */}
              <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden rounded-t-2xl">
                <div className={`w-full h-full bg-gradient-to-r ${cert.color} absolute top-0 -left-full animate-[laser_3s_linear_infinite]`} />
              </div>
              
              <style>{`
                @keyframes laser {
                  0% { left: -100%; }
                  50% { left: 100%; }
                  100% { left: 100%; }
                }
              `}</style>

              {/* Certificate Image */}
              <div className="w-full h-40 mb-4 rounded-lg overflow-hidden border border-white/10 bg-black/20">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
              </div>

              <div className="flex items-start justify-between mb-2">
                 <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded">{cert.date}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 font-display leading-tight group-hover:text-cyan-400 transition-colors">
                {cert.title}
              </h3>
              
              <div className="text-sm text-gray-400 mb-4 font-medium flex items-center gap-2">
                 <Award size={14} className="text-cyan-400" />
                {cert.issuer}
              </div>

              <p className="text-sm text-gray-500 mb-6 flex-grow">
                {cert.details}
              </p>

              {cert.verifyLink && (
                  <a 
                    href={cert.verifyLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                  >
                    Verify Certificate <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
              )}
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
