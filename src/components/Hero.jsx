import React from 'react';
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import resume from '../assets/Hamza Resume Cv 2025-2026-1 (1).pdf';
import myImage from '../assets/myimage.png';
import AuroraBackground from './AuroraBackground';

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden text-white">
      <AuroraBackground className="absolute inset-0">
         <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </AuroraBackground>
      
      <Motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 flex flex-col items-center text-center w-full max-w-3xl px-6 relative z-10"
      >
            
            
            {/* Profile Image */}
            <Motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-40 h-40 md:w-48 md:h-48"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-cyan-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
                <img 
                    src={myImage} 
                    alt="Hamza Mathouthi" 
                    className="relative w-full h-full object-cover rounded-full border-2 border-white/10 shadow-2xl"
                    loading="lazy"
                    width="192"
                    height="192"
                />
            </Motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-display leading-tight">
                Hamza Mathouthi <br/>
                <span className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 block mt-4">
                    From Insight to ROI
                </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed font-sans">
                Turning complex data into strategic revenue engines. Specializing in Business Intelligence, Digital Growth, and Full-Stack Solutions.
            </p>

            {/* Contact Details */}
            <div className="flex flex-wrap justify-center gap-6 pt-2 text-sm text-gray-400 font-sans">
                <div className="flex items-center gap-2 hover:text-white transition-colors">
                    <MapPin size={18} className="text-purple-500" />
                    <span>Riyadh, Saudi Arabia</span>
                </div>
                <div className="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail size={18} className="text-purple-500" />
                    <a href="mailto:htssociete@hotmail.com">htssociete@hotmail.com</a>
                </div>
                 <div className="flex items-center gap-2 hover:text-white transition-colors">
                    <Phone size={18} className="text-purple-500" />
                    <a href="tel:+966537130203">+966 53 713 0203</a>
                </div>
            </div>

            <div className="pt-8">
                <a 
                    href={resume} 
                    download="Hamza_Mathlouthi_CV.pdf"
                    className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors cursor-pointer font-sans flex items-center gap-2 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                    Download CV <ArrowRight size={20} />
                </a>
            </div>
      </Motion.div>
    </div>
  );
}
