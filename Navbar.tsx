
import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AGENCY_DATA } from './constants';

const navLinks = [
  { name: 'Accueil', href: '#home' },
  { name: 'À propos', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      id="main-nav"
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,0,0,0.5)] group-hover:rotate-12 transition-transform">
              <Terminal size={24} />
            </div>
            <span className="text-2xl font-black text-white tracking-tighter uppercase">
              JUNIOR<span className="text-red-600">DIGITAL</span>
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-slate-300 hover:text-red-500 font-bold text-xs uppercase tracking-[0.2em] transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              href={`https://wa.me/${AGENCY_DATA.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-red-600 text-white rounded-xl font-black text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:bg-red-500 transition-all brutal-border uppercase tracking-widest"
            >
              CONTACT <MessageCircle size={16} />
            </motion.a>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:text-red-500 transition-colors"
              id="mobile-menu-btn"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-lg font-black text-white hover:text-red-500 transition-colors uppercase tracking-tighter"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`https://wa.me/${AGENCY_DATA.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-red-600 text-white rounded-xl font-black text-center flex items-center justify-center gap-2 shadow-lg uppercase tracking-widest"
              >
                CONTACT <MessageCircle size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
