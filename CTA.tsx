
import React from 'react';
import { motion } from 'motion/react';
import { AGENCY_DATA } from './constants';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-red-600 to-red-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden brutal-border shadow-[0_20px_80px_rgba(255,0,0,0.3)]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter leading-none">
              PRÊT À DEVENIR <br />
              <span className="text-black/30">LE PROCHAIN GOAT ?</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-mono">
              Ne laissez pas votre vision mourir dans l'ombre. Propulsez votre business au sommet avec Junior Digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href={`https://wa.me/${AGENCY_DATA.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white text-red-600 px-10 py-5 rounded-2xl font-black text-xl flex items-center gap-3 hover:bg-black hover:text-white transition-all duration-300 brutal-border"
              >
                <MessageCircle size={24} />
                DISCUTER SUR WHATSAPP
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>
          
          {/* Decorative Text */}
          <div className="absolute -bottom-10 -right-10 text-[15rem] font-black text-white/5 select-none pointer-events-none uppercase">
            GOAT
          </div>
        </div>
      </div>
    </section>
  );
}
