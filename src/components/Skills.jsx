import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const skillsData = [
  { name: "QGIS", percentage: 90 },
  { name: "Inteligência Artificial", percentage: 80 },
  { name: "Python", percentage: 80 },
  { name: "Javascript", percentage: 70 }
];

export default function Skills() {
  return (
    <section id="habilidades" className="bg-ink py-28 relative overflow-hidden graticule">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeading
          index="02"
          label="Ferramentas"
          title="Habilidades"
          description="Principais ferramentas e tecnologias que utilizo no meu dia a dia."
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-surface p-8 md:p-12 rounded-xl border border-line shadow-2xl relative"
        >
          {/* Marcas de canto */}
          <span className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold/40" aria-hidden="true"></span>
          <span className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold/40" aria-hidden="true"></span>

          {skillsData.map((skill, index) => (
            <div key={skill.name} className={index !== skillsData.length - 1 ? 'mb-10' : ''}>
              <div className="flex justify-between items-end mb-3">
                <span className="text-paper font-semibold tracking-wide flex items-baseline gap-3">
                  <span className="font-mono text-xs text-gold/70">{String(index + 1).padStart(2, '0')}</span>
                  {skill.name}
                </span>
                <span className="text-gold font-mono font-medium text-sm">
                  {skill.percentage}%
                </span>
              </div>

              {/* Barra com escala graduada, como régua cartográfica */}
              <div className="relative w-full h-2.5 rounded-full bg-ink border border-line overflow-hidden">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(to right, transparent, transparent 9%, rgba(237,231,218,0.12) 9%, rgba(237,231,218,0.12) 10%)'
                  }}
                  aria-hidden="true"
                ></div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1], delay: index * 0.12 }}
                  className="h-full rounded-full bg-gradient-to-r from-gold/70 to-gold shadow-[0_0_12px_rgba(217,172,91,0.45)]"
                ></motion.div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
