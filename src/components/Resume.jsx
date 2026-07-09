import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <section id="curriculo" className="bg-secondary py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-text-main mb-6">
            Currículo
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-text-body text-lg max-w-2xl mx-auto">
            Um resumo da minha trajetória acadêmica e profissional, unindo Geografia e Tecnologia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column - Summary & Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold font-display text-text-main mb-8">Resumo</h3>
            
            <div className="relative border-l-2 border-accent pl-6 pb-12">
              <div className="absolute w-4 h-4 rounded-full bg-secondary border-2 border-accent -left-[9px] top-1"></div>
              <h4 className="text-xl font-bold text-text-main font-display mb-3 uppercase tracking-wide">Manoel Castro</h4>
              <p className="text-text-body italic mb-4">
                Profissional apaixonado por transformar dados geográficos em soluções espaciais através de Inteligência Artificial e desenvolvimento de software.
              </p>
              <ul className="list-disc list-inside text-text-body space-y-2">
                <li>Brasília, Distrito Federal, BR</li>
                <li>+55 (61) 98653-8541</li>
                <li>mfacastro@gmail.com</li>
              </ul>
            </div>

            <h3 className="text-3xl font-bold font-display text-text-main mb-8 mt-4">Educação</h3>
            
            <div className="relative border-l-2 border-accent pl-6 pb-12">
              <div className="absolute w-4 h-4 rounded-full bg-secondary border-2 border-accent -left-[9px] top-1"></div>
              <h4 className="text-xl font-bold text-text-main font-display mb-3 uppercase tracking-wide">
                Graduação em Exemplo
              </h4>
              <div className="text-text-main bg-accent/20 px-3 py-1 inline-block rounded font-mono text-sm mb-4 font-semibold">
                2015 - 2019
              </div>
              <p className="text-text-main italic mb-4">Universidade de Exemplo, Cidade - UF</p>
              <p className="text-text-body">
                Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend.
              </p>
            </div>

            <div className="relative border-l-2 border-accent pl-6 pb-2">
              <div className="absolute w-4 h-4 rounded-full bg-secondary border-2 border-accent -left-[9px] top-1"></div>
              <h4 className="text-xl font-bold text-text-main font-display mb-3 uppercase tracking-wide">
                Pós-Graduação em Exemplo
              </h4>
              <div className="text-text-main bg-accent/20 px-3 py-1 inline-block rounded font-mono text-sm mb-4 font-semibold">
                2020 - 2022
              </div>
              <p className="text-text-main italic mb-4">Instituto Exemplo, Cidade - UF</p>
              <p className="text-text-body">
                Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Professional Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold font-display text-text-main mb-8">Experiência Profissional</h3>
            
            <div className="relative border-l-2 border-accent pl-6 pb-12">
              <div className="absolute w-4 h-4 rounded-full bg-secondary border-2 border-accent -left-[9px] top-1"></div>
              <h4 className="text-xl font-bold text-text-main font-display mb-3 uppercase tracking-wide">
                Desenvolvedor GIS Sênior
              </h4>
              <div className="text-text-main bg-accent/20 px-3 py-1 inline-block rounded font-mono text-sm mb-4 font-semibold">
                2021 - Presente
              </div>
              <p className="text-text-main italic mb-4">Empresa Fictícia, Brasília - DF</p>
              <ul className="list-disc list-outside ml-4 text-text-body space-y-3 marker:text-accent">
                <li>Liderança no desenvolvimento e implementação de plataformas de visualização espacial utilizando metodologias ágeis.</li>
                <li>Delegação de tarefas para a equipe de desenvolvedores e fornecimento de consultoria em aspectos de geoprocessamento do projeto.</li>
                <li>Supervisão da qualidade dos dados e automação de processos usando Python e Inteligência Artificial.</li>
                <li>Otimização de budgets e gerenciamento de infraestrutura em nuvem para serviços georreferenciados.</li>
              </ul>
            </div>

            <div className="relative border-l-2 border-accent pl-6 pb-2">
              <div className="absolute w-4 h-4 rounded-full bg-secondary border-2 border-accent -left-[9px] top-1"></div>
              <h4 className="text-xl font-bold text-text-main font-display mb-3 uppercase tracking-wide">
                Especialista em Geoprocessamento
              </h4>
              <div className="text-text-main bg-accent/20 px-3 py-1 inline-block rounded font-mono text-sm mb-4 font-semibold">
                2018 - 2021
              </div>
              <p className="text-text-main italic mb-4">Instituição de Pesquisa Fictícia, Brasília - DF</p>
              <ul className="list-disc list-outside ml-4 text-text-body space-y-3 marker:text-accent">
                <li>Desenvolvimento de dezenas de produtos cartográficos, painéis analíticos e relatórios técnicos.</li>
                <li>Gerenciamento de até 5 projetos de análise espacial simultaneamente sob pressão e com prazos curtos.</li>
                <li>Recomendação e consultoria para órgãos públicos na melhor forma de estruturar bases de dados.</li>
                <li>Criação de scripts para otimização de tempo utilizando QGIS e bancos relacionais.</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
