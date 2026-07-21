import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

// Imports relativos para as imagens na pasta Imagens
import Foto1 from '../../Imagens/Foto pessoal 1.jpg';
import Foto2 from '../../Imagens/Foto pessoal 2.jpg';
import Foto3 from '../../Imagens/Foto pessoal 3.jpg';

const socials = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/mfacastro/', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/mfacastro', label: 'GitHub' },
  { icon: FaWhatsapp, href: 'https://wa.me/5561986538541', label: 'WhatsApp' },
];

export default function About() {
  return (
    <section id="sobre" className="relative bg-surface py-28">
      {/* Curvas de nível decorativas ao fundo (clip próprio para não quebrar o sticky da coluna) */}
      <div className="absolute inset-0 topo-lines opacity-60 pointer-events-none overflow-hidden" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative items-start">

          {/* Coluna esquerda — cartão fixo */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-24 self-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="bg-ink p-8 md:p-12 rounded-xl border border-line shadow-2xl relative overflow-hidden"
            >
              {/* Marca de canto, como grade de carta topográfica */}
              <span className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold/40" aria-hidden="true"></span>
              <span className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold/40" aria-hidden="true"></span>

              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-xs text-gold tracking-[0.3em]">01</span>
                <span className="h-px w-10 bg-gold/40" aria-hidden="true"></span>
                <span className="font-mono text-xs text-mist tracking-[0.3em] uppercase">Perfil</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-medium text-paper mb-8 tracking-tight">
                Sobre Mim
              </h2>

              <p className="text-mist text-lg leading-relaxed mb-6">
                Atuo na convergência entre análise espacial, automação de processos e no desenvolvimento de produtos educacionais. Como Geógrafo, trago o rigor analítico para a resolução de problemas complexos.
              </p>
              <p className="text-mist text-lg leading-relaxed mb-6">
                Tenho sólida experiência no desenvolvimento de produtos educacionais e tecnológicos, atuando desde a estruturação lógica até a execução técnica. Utilizo um ecossistema de ferramentas que envolve mapeamento de alta precisão (QGIS), linguagens de programação e banco de dados (Python, Javascript, Apps Script), além de plataformas low-code para desenvolver sites, sistemas e integrar soluções em Inteligência Artificial.
              </p>
              <p className="text-mist text-lg leading-relaxed mb-10">
                Meu objetivo é construir arquiteturas eficientes que acelerem a produtividade e garantam a qualidade dos projetos que integro.
              </p>

              {/* Redes sociais */}
              <div className="flex gap-4">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-12 h-12 rounded-md border border-line flex items-center justify-center text-mist hover:text-gold hover:border-gold/60 hover:bg-gold/5 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Coluna direita — fotos em rolagem */}
          <div className="w-full lg:w-1/2 flex flex-col gap-12">
            {[Foto1, Foto2, Foto3].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative group"
              >
                {/* Moldura dourada deslocada */}
                <div
                  className="absolute inset-0 border border-gold/30 rounded-xl translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 pointer-events-none"
                  aria-hidden="true"
                ></div>

                <div className="relative rounded-xl overflow-hidden shadow-2xl h-[50vh] sm:h-[60vh] lg:h-[68vh] border border-line">
                  <img
                    src={img}
                    alt={`Manoel Castro - Foto ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent pointer-events-none"></div>

                  {/* Etiqueta de registro em mono */}
                  <span className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.3em] text-paper/70 uppercase">
                    FIG. 0{idx + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
