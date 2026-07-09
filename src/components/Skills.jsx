import { motion } from 'framer-motion';

const skillsData = [
  { name: "QGIS", percentage: 90 },
  { name: "Inteligência Artificial", percentage: 80 },
  { name: "Python", percentage: 80 },
  { name: "Javascript", percentage: 70 }
];

export default function Skills() {
  return (
    <section id="habilidades" className="bg-primary py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-text-main mb-6">
            Habilidades
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-text-body text-lg">
            Principais ferramentas e tecnologias que utilizo no meu dia a dia.
          </p>
        </motion.div>

        <div className="bg-secondary p-8 md:p-12 rounded-3xl border border-accent/30 shadow-2xl">
          {skillsData.map((skill, index) => (
            <div key={skill.name} className={`${index !== skillsData.length - 1 ? 'mb-8' : ''}`}>
              <div className="flex justify-between items-end mb-2">
                <span className="text-text-main font-bold font-display tracking-wide uppercase text-sm">
                  {skill.name}
                </span>
                <span className="text-text-body font-mono font-medium text-sm">
                  {skill.percentage}%
                </span>
              </div>
              <div className="w-full bg-primary h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                  className="bg-accent h-full rounded-full"
                ></motion.div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
