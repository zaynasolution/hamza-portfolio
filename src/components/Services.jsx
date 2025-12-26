import React from 'react';
import { Database, TrendingUp, Code, Server, BarChart3, Rocket } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Data Architecture",
      icon: <Database className="w-8 h-8 text-purple-400" />,
      description: "Designing robust data systems using SQL, Power BI, and Streamlit to transform raw data into actionable business intelligence.",
      tags: ["SQL", "Power BI", "Streamlit"]
    },
    {
      title: "Growth Strategy",
      icon: <TrendingUp className="w-8 h-8 text-pink-400" />,
      description: "Data-driven strategies focused on boosting conversion rates and reducing churn through deep market analysis and insights.",
      tags: ["Conversion Optimization", "Churn Reduction", "Analytics"]
    },
    {
      title: "Full-Stack Development",
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      description: "Building scalable web solutions, including a comprehensive POS system for restaurants using React & PHP.",
      tags: ["React", "PHP", "System Design"]
    }
  ];

  return (
    <section className="py-24 relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-64 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Services
                </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                Comprehensive solutions bridging the gap between data insights and digital execution.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-8 hover:scale-105 transition-transform duration-300 flex flex-col group hover:border-purple-500/30"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit border border-white/5 group-hover:bg-white/10 transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              
              <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5">
                        {tag}
                    </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
