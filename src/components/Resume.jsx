import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

/* Bloco de item da linha do tempo, com nó dourado e data em mono */
function TimelineItem({ title, period, place, children, last = false }) {
  return (
    <div className={`relative border-l border-line pl-7 ${last ? 'pb-2' : 'pb-12'}`}>
      <span
        className="absolute w-3 h-3 rounded-full bg-ink border-2 border-gold -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(217,172,91,0.5)]"
        aria-hidden="true"
      ></span>
      <h4 className="text-lg md:text-xl font-semibold text-paper mb-2 tracking-wide">
        {title}
      </h4>
      {period && (
        <div className="font-mono text-xs text-gold border border-gold/30 bg-gold/5 px-3 py-1 inline-block rounded mb-3 tracking-widest">
          {period}
        </div>
      )}
      {place && <p className="font-display italic text-mist mb-4">{place}</p>}
      {children}
    </div>
  );
}

export default function Resume() {
  return (
    <section id="curriculo" className="bg-surface py-28 relative overflow-hidden">
      <div className="absolute inset-0 topo-lines opacity-50 pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeading
          index="03"
          label="Trajetória"
          title="Currículo"
          description="Um resumo da minha trajetória acadêmica e profissional, unindo Geografia e Tecnologia."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Coluna esquerda — Resumo e Educação */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-medium text-paper mb-8">
              Resumo
            </h3>

            <TimelineItem title="Manoel Castro">
              <p className="font-display italic text-mist mb-4">
                Profissional apaixonado por transformar dados geográficos em soluções espaciais através de Inteligência Artificial e desenvolvimento de software.
              </p>
              <ul className="text-mist space-y-2 marker:text-gold list-disc list-inside">
                <li>Brasília, Distrito Federal, BR</li>
                <li>+55 (61) 98653-8541</li>
                <li>mfacastro@gmail.com</li>
              </ul>
            </TimelineItem>

            <h3 className="font-display text-2xl md:text-3xl font-medium text-paper mb-8 mt-4">
              Educação
            </h3>

            <TimelineItem
              title="Graduação em Exemplo"
              period="2015 - 2019"
              place="Universidade de Exemplo, Cidade - UF"
            >
              <p className="text-mist">
                Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend.
              </p>
            </TimelineItem>

            <TimelineItem
              title="Pós-Graduação em Exemplo"
              period="2020 - 2022"
              place="Instituto Exemplo, Cidade - UF"
              last
            >
              <p className="text-mist">
                Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem.
              </p>
            </TimelineItem>
          </motion.div>

          {/* Coluna direita — Experiência Profissional */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-medium text-paper mb-8">
              Experiência Profissional
            </h3>

            <TimelineItem
              title="Desenvolvedor GIS Sênior"
              period="2021 - Presente"
              place="Empresa Fictícia, Brasília - DF"
            >
              <ul className="list-disc list-outside ml-4 text-mist space-y-3 marker:text-gold">
                <li>Liderança no desenvolvimento e implementação de plataformas de visualização espacial utilizando metodologias ágeis.</li>
                <li>Delegação de tarefas para a equipe de desenvolvedores e fornecimento de consultoria em aspectos de geoprocessamento do projeto.</li>
                <li>Supervisão da qualidade dos dados e automação de processos usando Python e Inteligência Artificial.</li>
                <li>Otimização de budgets e gerenciamento de infraestrutura em nuvem para serviços georreferenciados.</li>
              </ul>
            </TimelineItem>

            <TimelineItem
              title="Especialista em Geoprocessamento"
              period="2018 - 2021"
              place="Instituição de Pesquisa Fictícia, Brasília - DF"
              last
            >
              <ul className="list-disc list-outside ml-4 text-mist space-y-3 marker:text-gold">
                <li>Desenvolvimento de dezenas de produtos cartográficos, painéis analíticos e relatórios técnicos.</li>
                <li>Gerenciamento de até 5 projetos de análise espacial simultaneamente sob pressão e com prazos curtos.</li>
                <li>Recomendação e consultoria para órgãos públicos na melhor forma de estruturar bases de dados.</li>
                <li>Criação de scripts para otimização de tempo utilizando QGIS e bancos relacionais.</li>
              </ul>
            </TimelineItem>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
