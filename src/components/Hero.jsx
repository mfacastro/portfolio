import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';
import { Map, ArrowDown } from 'lucide-react';

const words = [
  "Geógrafo",
  "Desenvolvedor",
  "Inteligência Artificial",
  "Mapas",
  "Geoprocessamento",
  "Educação"
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Efeito máquina de escrever
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

  // Cursor piscante
  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink graticule">
      {/* Partículas interativas (rede de pontos, como malha geodésica) */}
      <ParticlesBackground />

      {/* Curvas de nível e brilhos de fundo */}
      <div className="absolute inset-0 z-0 pointer-events-none topo-lines">
        <div className="absolute top-1/4 left-1/5 w-[30rem] h-[30rem] bg-gold/8 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/5 w-[26rem] h-[26rem] bg-aqua/8 rounded-full mix-blend-screen filter blur-3xl"></div>
        {/* Vinheta para focar o conteúdo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(10,17,20,0.9)_100%)]"></div>
      </div>

      {/* Coordenadas decorativas nos cantos, como moldura de carta topográfica */}
      <div className="absolute inset-x-0 top-24 hidden md:flex justify-between px-10 font-mono text-[10px] tracking-[0.25em] text-mist/50 z-10 pointer-events-none">
        <span>15°47'S</span>
        <span>CARTA 01 — PORTFÓLIO</span>
        <span>47°52'W</span>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20 pb-16">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2.5 mb-8 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" aria-hidden="true"></span>
          <span className="text-xs font-mono font-medium text-gold-soft tracking-[0.3em] uppercase">
            Portfólio
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-medium text-paper mb-6 leading-[1.05] tracking-tight"
        >
          Manoel <span className="italic text-gold-soft">Castro</span>
        </motion.h1>

        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="h-12 md:h-14 flex items-center justify-center text-lg md:text-2xl font-mono text-aqua"
        >
          <span className="text-mist mr-3" aria-hidden="true">//</span>
          <span>{words[index].substring(0, subIndex)}</span>
          <span className={`${blink ? 'opacity-100' : 'opacity-0'} text-gold ml-1`}>_</span>
        </motion.div>

        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-lg md:text-xl text-mist mb-12 max-w-2xl mx-auto leading-relaxed mt-4"
        >
          Convergindo Geografia, Desenvolvimento de Software e Inteligência Artificial para soluções espaciais do futuro.
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5"
        >
          <a
            href="#portfolio"
            className="group px-8 py-4 bg-gold text-ink rounded-md font-semibold text-base tracking-wide transition-all duration-300 shadow-[0_0_28px_rgba(217,172,91,0.25)] hover:shadow-[0_0_40px_rgba(217,172,91,0.45)] hover:bg-gold-soft flex items-center justify-center gap-2.5"
          >
            Explorar Projetos
            <Map className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#sobre"
            className="px-8 py-4 bg-transparent border border-line text-paper rounded-md font-semibold text-base tracking-wide hover:border-gold/60 hover:bg-gold/5 transition-all duration-300 flex items-center justify-center"
          >
            Sobre Mim
          </a>
        </motion.div>
      </div>

      {/* Indicador de rolagem */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-mist/60 hover:text-gold transition-colors"
        aria-label="Rolar para a próxima seção"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Explorar</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
