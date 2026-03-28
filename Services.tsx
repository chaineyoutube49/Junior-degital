
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AGENCY_DATA } from './constants';
import { MessageCircle, CheckCircle2, Info, ArrowUpRight } from 'lucide-react';
import ServiceModal from './ServiceModal';

export default function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-red-600 font-black tracking-[0.3em] uppercase mb-4 text-sm"
            >
              Expertise & Domination
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter"
            >
              NOS <span className="text-red-600">ARMES</span> DE CRÉATION.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-md font-mono"
          >
            Des solutions digitales brutales pour ceux qui ne se contentent pas de la moyenne. Cliquez pour voir le niveau.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AGENCY_DATA.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
              className="group relative bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-red-600/50 transition-all duration-500 flex flex-col h-full cursor-pointer overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-600/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-red-600/10 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(255,0,0,0.1)] group-hover:shadow-[0_0_25px_rgba(255,0,0,0.4)]">
                <service.icon size={32} />
              </div>

              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{service.title}</h3>
              <p className="text-slate-400 text-sm mb-8 flex-grow font-mono leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-4 mb-10">
                {service.features.slice(0, 3).map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-300 font-bold uppercase tracking-wider">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl font-black flex items-center justify-center gap-2 bg-white/10 text-white hover:bg-white/20 transition-all uppercase text-xs tracking-widest border border-white/5"
                >
                  DÉTAILS <ArrowUpRight size={18} />
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/${AGENCY_DATA.phone}?text=${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-full py-4 rounded-xl font-black flex items-center justify-center gap-2 bg-red-600 text-white shadow-[0_0_20px_rgba(255,0,0,0.2)] hover:bg-red-500 transition-all uppercase text-xs tracking-widest brutal-border"
                >
                  COMMANDER <MessageCircle size={18} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </section>
  );
}
