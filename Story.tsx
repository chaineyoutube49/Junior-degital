
import React from 'react';
import { motion } from 'motion/react';
import { AGENCY_DATA } from './constants';
import { Quote, Terminal } from 'lucide-react';

export default function Story() {
  return (
    <section id="story" className="py-24 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-red-600/20">
              <img 
                src={AGENCY_DATA.about.storyImage.url} 
                alt="Junior - GOAT"
                className="w-full aspect-[4/5] object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative background shape */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-red-900/10 rounded-full blur-3xl -z-10"></div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-red-600 px-8 py-4 rounded-2xl shadow-xl z-20 whitespace-nowrap brutal-border"
            >
              <p className="text-white font-black text-xl uppercase tracking-tighter">GOAT</p>
            </motion.div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="mb-8">
              <Quote size={64} className="text-red-600/20 mb-4" />
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight uppercase tracking-tighter">
                L'HISTOIRE DU <br />
                <span className="text-red-600">GOAT.</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-xl text-slate-400 leading-relaxed italic font-mono">
              <p>
                "{AGENCY_DATA.about.story}"
              </p>
            </div>

            <div className="mt-12 pt-10 border-t border-white/10">
              <div className="flex items-center gap-6">
                <div className="w-20 h-1 bg-red-600 rounded-full"></div>
                <div>
                  <p className="text-2xl font-black text-white uppercase tracking-tighter">{AGENCY_DATA.founder}</p>
                  <p className="text-xs text-red-500 font-black uppercase tracking-[0.3em] mt-1 flex items-center gap-2">
                    <Terminal size={14} /> {AGENCY_DATA.about.aka}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
