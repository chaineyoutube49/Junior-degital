
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Star, ExternalLink, ArrowRight, Maximize2 } from 'lucide-react';
import { AGENCY_DATA } from './constants';

interface ServiceModalProps {
  service: any;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-secondary rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-white/10 brutal-border"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex justify-between items-center sticky top-0 bg-secondary z-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-red-600 text-white shadow-[0_0_15px_rgba(255,0,0,0.3)]">
                <service.icon size={24} />
              </div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter">{service.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-12">
            {/* Description & Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xs font-black mb-4 text-red-600 uppercase tracking-[0.3em]">Le Concept</h3>
                <p className="text-slate-300 leading-relaxed font-mono">
                  {service.description} Nous ne faisons pas que du travail, nous créons des chefs-d'œuvre qui dominent votre marché.
                </p>
              </div>
              <div>
                <h3 className="text-xs font-black mb-4 text-red-600 uppercase tracking-[0.3em]">L'Arsenal</h3>
                <ul className="space-y-4">
                  {service.features.map((feature: string) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-300 font-bold uppercase text-xs tracking-widest">
                      <ArrowRight size={14} className="text-red-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Portfolio / Creations */}
            <div>
              <h3 className="text-xs font-black mb-6 text-red-600 uppercase tracking-[0.3em] flex items-center gap-2">
                CRÉATIONS <ExternalLink size={16} />
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {service.portfolio.map((item: any, idx: number) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="group relative aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer"
                    onClick={() => setSelectedMedia(item)}
                  >
                    {item.type === 'video' ? (
                      <video
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <p className="text-white text-xs font-black uppercase tracking-widest">{item.title}</p>
                    </div>
                    {/* Icône d'agrandissement */}
                    <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 size={16} className="text-white" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <h3 className="text-xs font-black mb-6 text-red-600 uppercase tracking-[0.3em] flex items-center gap-2">
                AVIS DES ÉLITES <Star size={16} className="fill-red-600 text-red-600" />
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.testimonials.map((testimonial: any, idx: number) => (
                  <div key={idx} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="fill-red-600 text-red-600" />
                      ))}
                    </div>
                    <p className="text-slate-300 italic mb-6 font-mono text-sm leading-relaxed">"{testimonial.text}"</p>
                    <div>
                      <h4 className="font-black text-white text-xs uppercase tracking-widest">{testimonial.name}</h4>
                      <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="p-6 border-t border-white/10 bg-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center sm:text-left">
              NE SOYEZ PAS UN SPECTATEUR. SOYEZ LE GOAT.
            </p>
            <motion.a
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              href={`https://wa.me/${AGENCY_DATA.phone}?text=${encodeURIComponent(service.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-red-600 text-white rounded-xl font-black flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:bg-red-500 transition-all uppercase text-xs tracking-widest brutal-border"
            >
              COMMANDER MAINTENANT <MessageCircle size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      {/* Modal pour afficher le média en grand */}
      <AnimatePresence>
        {selectedMedia && (
          <div 
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Bouton de fermeture */}
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute -top-12 right-0 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors z-10"
              >
                <X size={24} />
              </button>
              
              {/* Conteneur du média */}
              <div className="relative bg-black rounded-2xl overflow-hidden border border-white/10">
                {selectedMedia.type === 'video' ? (
                  <video
                    src={selectedMedia.url}
                    className="w-full h-auto max-h-[80vh] object-contain"
                    autoPlay
                    controls
                    playsInline
                  />
                ) : (
                  <img
                    src={selectedMedia.url}
                    alt={selectedMedia.title}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                )}
                
                {/* Titre du média */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6">
                  <h3 className="text-white text-2xl font-black uppercase tracking-wider">
                    {selectedMedia.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
}
