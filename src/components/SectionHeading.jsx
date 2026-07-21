import { motion } from 'framer-motion';

/*
 * Cabeçalho padrão de seção: índice em fonte mono (como anotação de carta
 * topográfica), título em serifada e descrição opcional.
 */
export default function SectionHeading({ index, label, title, description, align = 'center' }) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={isCenter ? 'text-center mb-16' : 'mb-16'}
    >
      <div className={`flex items-center gap-3 mb-5 ${isCenter ? 'justify-center' : ''}`}>
        <span className="font-mono text-xs text-gold tracking-[0.3em]">{index}</span>
        <span className="h-px w-10 bg-gold/40" aria-hidden="true"></span>
        <span className="font-mono text-xs text-mist tracking-[0.3em] uppercase">{label}</span>
      </div>

      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-paper tracking-tight text-balance">
        {title}
      </h2>

      {description && (
        <p className={`text-mist text-lg mt-6 leading-relaxed ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
