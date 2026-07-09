import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-secondary pt-32 pb-12 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-text-main/5 rounded-full mix-blend-screen filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display text-text-main mb-6">
              Vamos conversar?
            </h2>
            <div className="w-20 h-1 bg-accent mb-8"></div>
            
            <p className="text-lg text-text-body mb-12 leading-relaxed max-w-lg">
              Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte da sua visão.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary border border-accent/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-text-main font-semibold mb-1">E-mail</h4>
                  <a href="mailto:mfacastro@gmail.com" className="text-text-body hover:text-accent transition-colors">
                    mfacastro@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary border border-accent/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-text-main font-semibold mb-1">Telefone / WhatsApp</h4>
                  <a href="https://wa.me/5561986538541" className="text-text-body hover:text-accent transition-colors">
                    +55 (61) 98653-8541
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary border border-accent/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-text-main font-semibold mb-1">Localização</h4>
                  <p className="text-text-body">Brasília - DF, Brasil</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="bg-primary p-8 md:p-10 rounded-3xl border border-accent/20 shadow-2xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-main mb-2">Seu Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-secondary border border-accent/20 rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                  placeholder="Como gostaria de ser chamado"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-main mb-2">Seu E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-secondary border border-accent/20 rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                  placeholder="Para que eu possa retornar"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-main mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-secondary border border-accent/20 rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 resize-none"
                  placeholder="Me conte um pouco sobre o projeto..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-4 bg-accent text-text-main rounded-xl font-bold text-lg hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 mt-4"
              >
                Enviar Mensagem
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-accent/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-body text-sm">
            © {currentYear} Manoel Castro. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-4">
            <a href="https://github.com/mfacastro" className="w-10 h-10 rounded-full bg-primary border border-accent/30 flex items-center justify-center text-text-body hover:text-text-main hover:border-text-main hover:bg-accent/20 transition-colors">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/mfacastro/" className="w-10 h-10 rounded-full bg-primary border border-accent/30 flex items-center justify-center text-text-body hover:text-text-main hover:border-text-main hover:bg-accent/20 transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
