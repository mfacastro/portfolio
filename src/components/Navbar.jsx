import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'Sobre mim', href: '#sobre', id: 'sobre' },
  { name: 'Habilidades', href: '#habilidades', id: 'habilidades' },
  { name: 'Currículo', href: '#curriculo', id: 'curriculo' },
  { name: 'Produtos cartográficos', href: '#portfolio', id: 'portfolio' },
  { name: 'Contato', href: '#contato', id: 'contato' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Destaca o link da seção visível
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-ink/85 backdrop-blur-md py-3 border-b border-line shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-baseline gap-2 group"
            >
              <span className="font-display text-xl md:text-2xl font-medium text-paper tracking-tight">
                Manoel Castro<span className="text-gold">.</span>
              </span>
            </a>

            {/* Navegação desktop */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    activeSection === link.id ? 'text-paper' : 'text-mist hover:text-paper'
                  }`}
                >
                  <span className="font-mono text-[10px] text-gold/80 mr-1.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {link.name}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${
                      activeSection === link.id ? 'w-full' : 'w-0'
                    }`}
                    aria-hidden="true"
                  ></span>
                </a>
              ))}
            </div>

            {/* Botão do menu mobile */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                className="w-10 h-10 flex items-center justify-center border border-line rounded-md text-mist hover:text-paper hover:border-gold/50 transition-colors"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Navegação mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-[64px] left-0 right-0 bg-ink/95 backdrop-blur-xl z-40 border-b border-line lg:hidden overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 flex flex-col">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`flex items-baseline gap-3 py-3 border-b border-line/50 last:border-b-0 text-base font-medium ${
                    activeSection === link.id ? 'text-gold' : 'text-mist hover:text-paper'
                  } transition-colors`}
                >
                  <span className="font-mono text-xs text-gold/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
