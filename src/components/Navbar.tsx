import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'О нас', href: '#about' },
    { name: 'Меню', href: '#menu' },
    { name: 'Галерея', href: '#gallery' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-black-900/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-serif text-2xl tracking-[0.2em] text-white z-50 relative">
          TAIYO<span className="text-gold-500 text-3xl leading-none">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold-400 transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="https://2gis.kz/astana/geo/70000001090104472" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2.5 border border-gold-600/50 text-gold-400 text-xs uppercase tracking-[0.2em] hover:bg-gold-600/10 hover:border-gold-500 transition-all duration-300"
          >
            Забронировать
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black-900/90 backdrop-blur-xl z-40 flex items-center justify-center p-6"
            >
              <div className="w-full max-w-sm glass-gold rounded-2xl p-8 flex flex-col items-center shadow-2xl relative overflow-hidden">
                {/* Decorative background elements inside the container */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold-500/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

                <ul className="flex flex-col items-center gap-6 w-full relative z-10">
                  {navLinks.map((link, i) => (
                    <motion.li 
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="w-full text-center"
                    >
                      <a 
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block font-serif text-2xl text-gray-200 hover:text-gold-400 transition-colors py-2 border-b border-white/5 w-full"
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  href="https://2gis.kz/astana/geo/70000001090104472"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full text-center px-8 py-4 bg-gold-600/20 border border-gold-500/50 text-gold-400 tracking-[0.2em] uppercase text-sm font-medium hover:bg-gold-500 hover:text-black-900 transition-all duration-300 rounded-sm relative z-10"
                >
                  Забронировать
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}