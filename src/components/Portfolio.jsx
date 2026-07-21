import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

// Imagens dos mapas
import Mapa1 from '../../Imagens/Mapas/Barragens Brasileiras em Categoria de Risco Alto.png';
import Mapa2 from '../../Imagens/Mapas/Mapa Hipsométrico do Distrito Federal .png';
import Mapa3 from '../../Imagens/Mapas/Mapa Hipsométrico do Rio Jardim - DF .png';
import Mapa4 from '../../Imagens/Mapas/Unidades Hidrográficas do Distrito Federal .png';
import Mapa5 from '../../Imagens/Mapas/Localização da Cidade e Município de Valença - BA .png';
import Mapa6 from '../../Imagens/Mapas/Plano Piloto, Brasília-DF Onde o céu é mar.png';
import Mapa7 from '../../Imagens/Mapas/Mancha Urbana de Parintins - AM .png';

const mapsData = [
  {
    id: 1,
    category: "Analíticos",
    title: "Barragens Brasileiras em Categoria de Risco Alto",
    description: "Este mapa ilustra a distribuição espacial das barragens classificadas com alto risco no território brasileiro, utilizando dados da Agência Nacional de Mineração (2024). A representação cartográfica destaca as estruturas por meio de marcadores pontuais sobre a malha de unidades federativas, permitindo a rápida identificação das áreas mais críticas. O projeto inclui um mapa de situação (inset) focado no estado de Minas Gerais, evidenciando a alta concentração de barragens em risco na região. Adicionalmente, um gráfico de barras complementa a informação espacial, quantificando os cinco estados com os maiores números absolutos dessas estruturas, liderados por Minas Gerais e Mato Grosso. O layout é limpo, orientando a leitura diretamente para as zonas de alerta, servindo como uma ferramenta visual eficaz para análises de risco ambiental e planejamento de políticas públicas voltadas à segurança de infraestruturas de mineração no país.",
    image: Mapa1
  },
  {
    id: 2,
    category: "Analíticos",
    title: "Mapa Hipsométrico do Distrito Federal",
    description: "Este produto cartográfico apresenta a variação altimétrica do Distrito Federal, utilizando uma paleta de cores gradativa que transita do verde, representando as cotas mais baixas (732 metros), até tons de marrom e escuros, indicando as maiores elevações (1.342 metros). A hipsometria foi elaborada a partir do modelo digital Copernicus Global DSM, permitindo o detalhamento do relevo local. O mapa principal é complementado por dois mapas de localização em escalas menores, que contextualizam o Distrito Federal em relação aos estados vizinhos e ao território nacional. O layout adota coordenadas geográficas no datum SIRGAS 2000. É um instrumento técnico essencial para estudos de geomorfologia, planejamento urbano, gestão de recursos hídricos e análises ambientais, fornecendo uma base topográfica clara e rigorosa para diferentes aplicações e tomadas de decisão no planejamento e ordenamento do território do Distrito Federal.",
    image: Mapa2
  },
  {
    id: 3,
    category: "Analíticos",
    title: "Mapa Hipsométrico do Rio Jardim - DF",
    description: "O mapa detalha a hipsometria e a rede de drenagem da unidade hidrográfica do Rio Jardim, localizada no Distrito Federal. A representação utiliza um gradiente de cores que varia de 800 a 1.200 metros de altitude, evidenciando as feições topográficas da bacia e a forma como o relevo condiciona o escoamento superficial. A hidrografia é sobreposta em tons de azul, permitindo a visualização clara dos cursos d'água principais e seus afluentes. A composição cartográfica, projetada em UTM (Fuso 23S, SIRGAS 2000), inclui mapas de situação que localizam a bacia dentro dos limites do DF e do Brasil. O trabalho integra dados do Geoportal e do modelo Copernicus Global DSM, resultando em um material técnico de alta relevância para a gestão de recursos hídricos, estudos de bacias hidrográficas e análises de suscetibilidade a processos erosivos na região delimitada.",
    image: Mapa3
  },
  {
    id: 4,
    category: "Temáticos",
    title: "Unidades Hidrográficas do Distrito Federal",
    description: "Este mapa temático espacializa as 41 unidades hidrográficas que compõem o território do Distrito Federal. A cartografia utiliza uma paleta de cores categórica e contrastante para diferenciar visualmente cada bacia ou sub-bacia, associada a uma legenda numérica detalhada que identifica nominalmente cursos d'água importantes, como o Rio Descoberto, o Rio São Bartolomeu e o Lago Paranoá. A base de dados provém do Geoportal, e o projeto cartográfico adota o sistema de coordenadas projetadas, proporcionando precisão espacial. O layout ocupa de forma eficiente o espaço da prancha, otimizando a leitura das subdivisões hídricas em relação aos limites políticos do DF. O resultado é um documento técnico fundamental para o planejamento territorial, gestão ambiental e governança das águas, facilitando a identificação das áreas de contribuição e o suporte à tomada de decisões por parte de órgãos reguladores e pesquisadores.",
    image: Mapa4
  },
  {
    id: 5,
    category: "Localização",
    title: "Localização da Cidade e Município de Valença - BA",
    description: "O mapa apresenta a delimitação do município de Valença, situado no litoral do estado da Bahia, com foco na espacialização da sua mancha urbana. A imagem de fundo utiliza imagens de satélite do Google Earth, oferecendo uma percepção visual da cobertura do solo, áreas florestais, recursos hídricos e a interface costeira. A área municipal é destacada por um polígono de contorno amarelo. O mapa é enriquecido com elementos de contextualização, incluindo um mapa de situação do estado da Bahia, indicando a posição de Valença, e uma fotografia panorâmica da cidade. O layout foi construído no software QGIS (Datum SIRGAS 2000, Zona 24S).",
    image: Mapa5
  },
  {
    id: 6,
    category: "Artísticos",
    title: "Plano Piloto, Brasília-DF: Onde o céu é mar",
    description: "Esta peça cartográfica adota uma abordagem artística e conceitual para representar o Plano Piloto de Brasília, explorando o contraste visual entre um fundo escuro e o traçado urbano destacado em tons dourados. O Lago Paranoá é evidenciado em azul claro, servindo como elemento central da composição geométrica da capital. O mapa vai além do aspecto técnico ao integrar a dimensão histórica e mística da fundação da cidade, incluindo um trecho textual referente ao sonho profético de Dom Bosco sobre a 'terra prometida'. As coordenadas geográficas específicas reforçam a localização do marco referencial.",
    image: Mapa6
  },
  {
    id: 7,
    category: "Localização",
    title: "Mancha Urbana de Parintins - AM",
    description: "O mapa delimita a expansão da mancha urbana do município de Parintins, no Amazonas, utilizando uma imagem de satélite de alta resolução como plano de fundo. O perímetro urbano é destacado por um traçado vetorial amarelo, evidenciando a ocupação humana densa às margens do rio Amazonas, na Ilha de Tupinambarana. A prancha inclui um mapa de situação que localizam o município dentro do estado do Amazonas e em relação à divisa com o Pará. O mapa apresenta um bloco de texto descritivo que enriquece o contexto geográfico e cultural da cidade, mencionando o clima, a hidrografia e o impacto do Festival Folclórico dos bois Caprichoso e Garantido. Elaborado em ambiente SIG com datum SIRGAS 2000 (Zona 21S).",
    image: Mapa7
  }
];

const categories = ["Todos", "Localização", "Temáticos", "Analíticos", "Artísticos"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedMap, setSelectedMap] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredMaps = activeCategory === "Todos"
    ? mapsData
    : mapsData.filter(m => m.category === activeCategory);

  // Reinicia o índice ao trocar de filtro
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Fecha o lightbox com Esc
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setSelectedMap(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredMaps.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredMaps.length) % filteredMaps.length);
  };

  return (
    <section id="portfolio" className="bg-ink min-h-screen pt-28 pb-16 flex flex-col justify-center relative graticule">
      {/* Filtros e cabeçalho */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 z-20 relative w-full">
        <SectionHeading
          index="04"
          label="Acervo"
          title="Produtos Cartográficos"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 -mt-8"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-md font-mono text-xs tracking-[0.15em] uppercase transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-gold border-gold text-ink font-medium shadow-[0_0_18px_rgba(217,172,91,0.35)]"
                  : "bg-transparent border-line text-mist hover:border-gold/50 hover:text-paper"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Carrossel */}
      <div className="relative w-full h-[50vh] md:h-[62vh] flex items-center justify-center overflow-hidden my-8">

        {/* Setas de navegação */}
        {filteredMaps.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Mapa anterior"
              className="absolute left-4 md:left-12 z-40 w-12 h-12 rounded-md bg-ink/80 backdrop-blur border border-line flex items-center justify-center text-paper hover:bg-gold hover:text-ink hover:border-gold transition-all duration-300 shadow-xl"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Próximo mapa"
              className="absolute right-4 md:right-12 z-40 w-12 h-12 rounded-md bg-ink/80 backdrop-blur border border-line flex items-center justify-center text-paper hover:bg-gold hover:text-ink hover:border-gold transition-all duration-300 shadow-xl"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {filteredMaps.map((mapData, index) => {
          let relativeIndex = index - currentIndex;

          // Ajuste para navegação circular
          if (relativeIndex > filteredMaps.length / 2) {
            relativeIndex -= filteredMaps.length;
          } else if (relativeIndex < -filteredMaps.length / 2) {
            relativeIndex += filteredMaps.length;
          }

          // Com apenas 2 itens, força o vizinho para a direita
          if (filteredMaps.length === 2 && index !== currentIndex) {
            relativeIndex = 1;
          }

          const isCenter = relativeIndex === 0;
          const isLeft = relativeIndex === -1;
          const isRight = relativeIndex === 1;

          const isVisible = Math.abs(relativeIndex) <= 1;

          if (!isVisible) return null;

          return (
            <motion.div
              key={mapData.id}
              initial={false}
              animate={{
                x: isCenter ? "0%" : isLeft ? "-80%" : "80%",
                scale: isCenter ? 1 : 0.72,
                opacity: isCenter ? 1 : 0.3,
                filter: isCenter ? "blur(0px)" : "blur(6px)",
                zIndex: isCenter ? 30 : 20,
              }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="absolute w-[90%] md:w-[70%] lg:w-[60%] h-full flex items-center justify-center cursor-pointer"
              onClick={() => {
                if (isLeft) handlePrev();
                if (isRight) handleNext();
                if (isCenter) setSelectedMap(mapData);
              }}
            >
              <div className={`relative h-full max-w-full w-fit flex items-center justify-center group overflow-hidden rounded-lg shadow-2xl border transition-colors duration-500 ${isCenter ? 'border-gold/40' : 'border-line'}`}>
                <img
                  src={mapData.image}
                  alt={mapData.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* Sobreposição com detalhes — apenas no mapa central, ao passar o mouse */}
                {isCenter && (
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/70 to-ink/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-10 z-50">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex justify-between items-start mb-3">
                        <span className="font-mono text-[11px] font-medium text-gold tracking-[0.25em] uppercase border border-gold/40 px-2.5 py-1 rounded">
                          {mapData.category}
                        </span>
                        <Search className="w-6 h-6 text-paper/70 group-hover:text-gold transition-colors" />
                      </div>
                      <h3 className="font-display text-xl md:text-3xl font-medium text-paper mb-3 line-clamp-2">
                        {mapData.title}
                      </h3>
                      <p className="text-mist text-sm md:text-base line-clamp-3 leading-relaxed">
                        {mapData.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Contador do carrossel, como numeração de prancha */}
      <div className="text-center font-mono text-xs text-mist tracking-[0.3em]" aria-live="polite">
        <span className="text-gold">{String(currentIndex + 1).padStart(2, '0')}</span>
        <span className="mx-2">/</span>
        <span>{String(filteredMaps.length).padStart(2, '0')}</span>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedMap && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-md p-4 md:p-8"
            onClick={() => setSelectedMap(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 24 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="bg-surface border border-line rounded-xl overflow-hidden w-full h-[90vh] md:w-[95vw] md:h-[95vh] flex flex-col lg:flex-row relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                aria-label="Fechar"
                className="absolute top-4 right-4 z-10 w-11 h-11 bg-ink/80 border border-line hover:bg-gold hover:text-ink hover:border-gold rounded-md flex items-center justify-center text-mist transition-colors"
                onClick={() => setSelectedMap(null)}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="lg:w-2/3 h-[50vh] lg:h-full bg-ink flex items-center justify-center p-4 graticule">
                <img
                  src={selectedMap.image}
                  alt={selectedMap.title}
                  className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
                />
              </div>

              <div className="lg:w-1/3 p-8 lg:p-12 overflow-y-auto flex flex-col justify-center relative">
                <span className="absolute top-6 left-8 lg:left-12 font-mono text-[10px] text-mist/50 tracking-[0.3em] uppercase">
                  Prancha {String(selectedMap.id).padStart(2, '0')}
                </span>

                <span className="inline-block px-3 py-1.5 border border-gold/40 bg-gold/5 text-gold font-mono text-[11px] font-medium tracking-[0.25em] uppercase rounded mb-6 self-start">
                  {selectedMap.category}
                </span>
                <h3 className="font-display text-3xl lg:text-4xl font-medium text-paper mb-6 leading-tight tracking-tight">
                  {selectedMap.title}
                </h3>
                <div className="w-14 h-px bg-gold mb-8" aria-hidden="true"></div>
                <p className="text-mist leading-relaxed text-base lg:text-lg">
                  {selectedMap.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
