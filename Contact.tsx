
import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { AGENCY_DATA } from './constants';

export default function Contact() {
  const [formState, setFormState] = React.useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('sent');
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-red-600 font-black tracking-[0.3em] uppercase mb-4 text-sm">Contact</div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter">
              ENTRER DANS <br />
              <span className="text-red-600">L'ARÈNE.</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 font-mono leading-relaxed">
              Prêt à dominer votre marché ? Envoyez-nous un message ou passez nous voir. Le GOAT vous attend.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all brutal-border">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-xs text-red-500 font-black uppercase tracking-widest mb-1">Email</p>
                  <p className="text-xl text-white font-mono">{AGENCY_DATA.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all brutal-border">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-xs text-red-500 font-black uppercase tracking-widest mb-1">Téléphone</p>
                  <p className="text-xl text-white font-mono">{AGENCY_DATA.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all brutal-border">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-xs text-red-500 font-black uppercase tracking-widest mb-1">Localisation</p>
                  <p className="text-xl text-white font-mono">{AGENCY_DATA.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 brutal-border shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-red-500 uppercase tracking-widest mb-3">Nom Complet</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-red-600 transition-colors font-mono"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-red-500 uppercase tracking-widest mb-3">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-red-600 transition-colors font-mono"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-black text-red-500 uppercase tracking-widest mb-3">Sujet</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-red-600 transition-colors font-mono"
                  placeholder="Mon projet GOAT"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-red-500 uppercase tracking-widest mb-3">Message</label>
                <textarea 
                  rows={4}
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-red-600 transition-colors font-mono resize-none"
                  placeholder="Dites-nous tout..."
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={formState !== 'idle'}
                className={`w-full font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all uppercase tracking-tighter text-xl brutal-border group ${
                  formState === 'sent' 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-red-600 text-white hover:bg-red-700'
                }`}
              >
                {formState === 'idle' && <><Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Envoyer le Message</>}
                {formState === 'sending' && <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
                {formState === 'sent' && <><CheckCircle2 size={20} /> Message envoyé !</>}
              </button>
              
              <div className="pt-6 border-t border-white/10 text-center">
                <p className="text-slate-500 text-sm mb-4 font-mono">Ou contactez-nous directement via</p>
                <a 
                  href={`https://wa.me/${AGENCY_DATA.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-500 font-black uppercase tracking-widest hover:text-red-400 transition-colors"
                >
                  <MessageSquare size={18} /> WhatsApp Business
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
