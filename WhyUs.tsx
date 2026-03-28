
import React from 'react';
import { motion } from 'motion/react';
import { AGENCY_DATA } from './constants';

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-600 font-black tracking-[0.3em] uppercase mb-4 text-sm"
          >
            Pourquoi nous ?
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter"
          >
            LA SUPRÉMATIE <span className="text-red-600">DIGITALE.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {AGENCY_DATA.advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 bg-white/5 rounded-3xl border border-white/10 hover:border-red-600/50 transition-all group text-center"
            >
              <div className="w-20 h-20 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600 mx-auto mb-8 group-hover:bg-red-600 group-hover:text-white transition-all shadow-[0_0_15px_rgba(255,0,0,0.1)] group-hover:shadow-[0_0_30px_rgba(255,0,0,0.4)]">
                <advantage.icon size={40} />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{advantage.title}</h3>
              <p className="text-slate-400 font-mono text-sm leading-relaxed">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
