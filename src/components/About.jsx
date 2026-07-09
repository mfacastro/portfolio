import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

// Imports relativos para as imagens na pasta Imagens
import Foto1 from '../../Imagens/Foto pessoal 1.jpg';
import Foto2 from '../../Imagens/Foto pessoal 2.jpg';
import Foto3 from '../../Imagens/Foto pessoal 3.jpg';

export default function About() {
  return (
    <section id="sobre" className="relative bg-secondary py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start">
          
          {/* Left Column - Sticky Card */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-24 self-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-primary p-8 md:p-12 rounded-3xl border border-accent/30 shadow-2xl relative overflow-hidden"
            >
              <h2 className="text-3xl md:text-5xl font-bold font-display text-text-main mb-6">
                Sobre Mim
              </h2>
              <div className="w-20 h-1 bg-accent mb-8"></div>
              
              <p className="text-text-body text-lg leading-relaxed mb-6">
                Atuo na convergência entre análise espacial, automação de processos e no desenvolvimento de produtos educacionais. Como Geógrafo, trago o rigor analítico para a resolução de problemas complexos.
              </p>
              <p className="text-text-body text-lg leading-relaxed mb-6">
                Tenho sólida experiência no desenvolvimento de produtos educacionais e tecnológicos, atuando desde a estruturação lógica até a execução técnica. Utilizo um ecossistema de ferramentas que envolve mapeamento de alta precisão (QGIS), linguagens de programação e banco de dados (Python, Javascript, Apps Script), além de plataformas low-code para desenvolver sites, sistemas e integrar soluções em Inteligência Artificial.
              </p>
              <p className="text-text-body text-lg leading-relaxed mb-10">
                Meu objetivo é construir arquiteturas eficientes que acelerem a produtividade e garantam a qualidade dos projetos que integro.
              </p>

              {/* Social Links */}
              <div className="flex gap-6">
                <a 
                  href="https://www.linkedin.com/in/mfacastro/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center text-text-body hover:text-text-main hover:border-text-main hover:bg-accent/20 transition-all duration-300 group"
                >
                  <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://github.com/mfacastro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center text-text-body hover:text-text-main hover:border-text-main hover:bg-accent/20 transition-all duration-300 group"
                >
                  <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://wa.me/5561986538541" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center text-text-body hover:text-text-main hover:border-text-main hover:bg-accent/20 transition-all duration-300 group"
                >
                  <FaWhatsapp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Scrolling Images */}
          <div className="w-full lg:w-1/2 flex flex-col gap-12">
            {[Foto1, Foto2, Foto3].map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl h-[50vh] sm:h-[60vh] lg:h-[70vh] border border-accent/20"
              >
                <img 
                  src={img} 
                  alt={`Manoel Castro - Foto ${idx + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle gradient overlay to match the theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent pointer-events-none"></div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
