
import React from 'react';
import { motion } from 'motion/react';
import { AGENCY_DATA } from './constants';
import { Target, Eye, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-red-600 font-black tracking-[0.3em] uppercase mb-4 text-sm">L'Origine du GOAT</div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter">
              À PROPOS DE <span className="text-red-600">{AGENCY_DATA.founder}</span>
            </h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-mono">
              {AGENCY_DATA.about.bio}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-red-600/30 transition-all group">
                <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <Target size={28} />
                </div>
                <h4 className="font-black text-white mb-2 uppercase tracking-tighter text-lg">Mission</h4>
                <p className="text-slate-400 text-sm font-mono leading-relaxed">{AGENCY_DATA.about.mission}</p>
              </div>
              <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-red-600/30 transition-all group">
                <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <Eye size={28} />
                </div>
                <h4 className="font-black text-white mb-2 uppercase tracking-tighter text-lg">Vision</h4>
                <p className="text-slate-400 text-sm font-mono leading-relaxed">{AGENCY_DATA.about.vision}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border-4 border-red-600/20 shadow-[0_0_50px_rgba(255,0,0,0.1)]">
              <video 
                src={AGENCY_DATA.about.profileImage.url} 
                alt={AGENCY_DATA.founder}
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-red-600 text-white p-10 rounded-[2.5rem] shadow-2xl hidden md:block brutal-border">
              <div className="flex items-center gap-4 mb-2">
                <ShieldCheck size={32} />
                <p className="text-5xl font-black">100%</p>
              </div>
              <p className="text-xs font-black uppercase tracking-[0.2em]">Excellence Garantie</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
