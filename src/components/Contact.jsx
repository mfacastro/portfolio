import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const contactItems = [
  {
    icon: Mail,
    title: 'E-mail',
    content: (
      <a href="mailto:mfacastro@gmail.com" className="text-mist hover:text-gold transition-colors break-all">
        mfacastro@gmail.com
      </a>
    ),
  },
  {
    icon: Phone,
    title: 'Telefone / WhatsApp',
    content: (
      <a href="https://wa.me/5561986538541" className="text-mist hover:text-gold transition-colors">
        +55 (61) 98653-8541
      </a>
    ),
  },
  {
    icon: MapPin,
    title: 'Localização',
    content: <p className="text-mist">Brasília - DF, Brasil</p>,
  },
];

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-surface pt-32 pb-12 relative overflow-hidden">
      {/* Curvas de nível e brilho decorativo */}
      <div className="absolute inset-0 topo-lines opacity-50 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold/5 rounded-full mix-blend-screen filter blur-3xl pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Cabeçalho e chamada para ação */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="font-mono text-xs text-gold tracking-[0.3em]">05</span>
            <span className="h-px w-10 bg-gold/40" aria-hidden="true"></span>
            <span className="font-mono text-xs text-mist tracking-[0.3em] uppercase">Contato</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-medium text-paper mb-8 tracking-tight">
            Vamos <span className="italic text-gold-soft">conversar?</span>
          </h2>

          <p className="text-lg text-mist mb-10 leading-relaxed">
            Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte da sua visão.
          </p>

          <a
            href="https://wa.me/5561986538541"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gold text-ink rounded-md font-semibold text-base tracking-wide hover:bg-gold-soft hover:shadow-[0_0_28px_rgba(217,172,91,0.35)] transition-all duration-300"
          >
            Falar no WhatsApp
            <FaWhatsapp className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Cartões de contato */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-24">
          {contactItems.map(({ icon: Icon, title, content }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              className="bg-ink border border-line rounded-xl p-6 text-center flex flex-col items-center hover:border-gold/50 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-md bg-surface border border-line flex items-center justify-center mb-4 group-hover:border-gold/50 transition-colors duration-300">
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <h4 className="text-paper font-semibold mb-1">{title}</h4>
              {content}
            </motion.div>
          ))}
        </div>

        {/* Rodapé */}
        <div className="pt-8 border-t border-line flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-mist text-sm">
            © {currentYear} Manoel Castro. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline font-mono text-[10px] text-mist/50 tracking-[0.25em]">
              15°47'S · 47°52'W
            </span>
            <div className="flex gap-3">
              <a
                href="https://github.com/mfacastro"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-md bg-ink border border-line flex items-center justify-center text-mist hover:text-gold hover:border-gold/60 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mfacastro/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-md bg-ink border border-line flex items-center justify-center text-mist hover:text-gold hover:border-gold/60 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
