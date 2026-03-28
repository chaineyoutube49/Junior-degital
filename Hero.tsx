
import React from 'react';
import { motion } from 'motion/react';
import { AGENCY_DATA } from './constants';
import { ArrowRight, MessageCircle, Zap, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-red-900/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: 'linear-gradient(to right, #ff0000 1px, transparent 1px), linear-gradient(to bottom, #ff0000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-red-600/10 border border-red-500/20 text-red-500 text-sm font-bold brutal-border"
          >
            <Terminal size={16} />
            <span>GOAT OF DIGITAL CREATION</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-[0.85] tracking-tighter">
            <span className="text-gradient">TRANSFORMER</span> <br />
            L'IMPOSSIBLE EN <br />
            <span className="italic text-red-600">RÉALITÉ.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-mono">
            {AGENCY_DATA.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <motion.a
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              href={`https://wa.me/${AGENCY_DATA.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-red-600 text-white rounded-xl font-black text-lg flex items-center gap-3 shadow-[0_0_30px_rgba(255,0,0,0.4)] hover:bg-red-500 transition-all group brutal-border"
              id="cta-whatsapp"
            >
              LANCER LE PROJET <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="px-10 py-5 bg-white/5 text-white rounded-xl font-black text-lg flex items-center gap-3 border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm group"
              id="cta-services"
            >
              NOS SERVICES <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-red-600/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 bg-red-600 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
