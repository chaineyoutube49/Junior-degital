
import React from 'react';
import { AGENCY_DATA } from './constants';
import { Terminal } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-20 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[15rem] font-black text-white/[0.02] select-none pointer-events-none uppercase whitespace-nowrap">
        JUNIOR DIGITAL
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6 group cursor-pointer">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white brutal-border group-hover:rotate-12 transition-transform">
                <Terminal size={28} />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter uppercase">
                {AGENCY_DATA.name.split(' ')[0]} <span className="text-red-600">{AGENCY_DATA.name.split(' ')[1]}</span>
              </span>
            </div>
            <p className="text-slate-400 text-lg max-w-md font-mono leading-relaxed">
              L'agence digitale qui transforme vos idées en légendes. Le GOAT de la création web et du marketing digital.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 font-mono text-slate-400">
            <a href="#home" className="hover:text-red-500 transition-colors">Accueil</a>
            <a href="#about" className="hover:text-red-500 transition-colors">À propos</a>
            <a href="#services" className="hover:text-red-500 transition-colors">Services</a>
            <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            {AGENCY_DATA.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all brutal-border"
                aria-label={social.name}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-mono text-sm">
            © {currentYear} {AGENCY_DATA.name}. Tous droits réservés.
          </p>
          <p className="text-slate-500 font-mono text-sm flex items-center gap-2">
            Fait avec passion par <span className="text-red-600 font-black uppercase tracking-tighter">Créateur Doux</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
