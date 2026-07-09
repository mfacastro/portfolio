import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';
import { Map } from 'lucide-react';

const words = [
  "Geógrafo",
  "Desenvolvedor",
  "Inteligência Artificial",
  "Mapas",
  "Geoprocessamento",
  "Educação"
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Typewriter effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 1500);
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  // Cursor blink
  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Interactive Particles Background */}
      <ParticlesBackground />
      
      {/* Original Background decoration (subtle glow) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-text-main/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-sm"
        >
          <span className="text-sm font-mono font-medium text-text-main tracking-wider uppercase">
            Portfólio
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-text-main mb-6 leading-tight tracking-tight">
          Manoel Castro
        </h1>
        
        <div className="h-12 md:h-16 flex items-center justify-center text-xl md:text-3xl text-text-body font-light">
          <span>{words[index].substring(0, subIndex)}</span>
          <span className={`${blink ? 'opacity-100' : 'opacity-0'} text-accent ml-1`}>|</span>
        </div>

        <p className="text-xl md:text-2xl text-text-body mb-10 max-w-2xl mx-auto leading-relaxed mt-4">
          Convergindo Geografia, Desenvolvimento de Software e Inteligência Artificial para soluções espaciais do futuro.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <a 
            href="#portfolio"
            className="group px-8 py-4 bg-accent text-text-main rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(129,82,204,0.4)] hover:shadow-[0_0_30px_rgba(129,82,204,0.6)] hover:brightness-110 flex items-center justify-center gap-2 border border-transparent hover:border-text-main"
          >
            Explorar Projetos
            <Map className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#sobre"
            className="px-8 py-4 bg-transparent border border-accent/50 text-text-main rounded-full font-bold text-lg hover:bg-accent/10 hover:border-text-main transition-all duration-300 flex items-center justify-center"
          >
            Sobre Mim
          </a>
        </div>
      </div>
    </section>
  );
}
