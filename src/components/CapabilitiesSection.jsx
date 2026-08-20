import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'
import styles from './CapabilitiesSection.module.css'

const cards = [
  {
    title: 'Diseño de producto premium',
    description: 'UX/UI estratégico para experiencias digitales sofisticadas y memorables.',
  },
  {
    title: 'Arquitectura Fullstack',
    description: 'Plataformas escalables que conectan frontend, backend y datos con precisión.',
  },
  {
    title: 'Data & Analytics',
    description: 'Inteligencia accionable para impulsar decisiones de negocio y crecimiento.',
  },
  {
    title: 'AI y automatización',
    description: 'Agentes, RAG y flujos automáticos para operaciones más inteligentes.',
  },
  {
    title: 'Integraciones de alto impacto',
    description: 'APIs, ETL y sistemas de reglas para flujos de trabajo sin fricción.',
  },
  {
    title: 'Cloud performance',
    description: 'Infraestructura gestionada en AWS, Azure y Google Cloud sin ruido innecesario.',
  },
]

export default function CapabilitiesSection() {
  return (
    <SectionReveal className={styles.section}>
      <div className={styles.header} id="services">
        <p className={styles.label}>Capacidades boutique</p>
        <h2 className={styles.heading}>Soluciones técnicas con ritmo visual y claridad arquitectónica.</h2>
      </div>

      <div className={styles.grid}>
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            className={styles.card}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            style={{ transitionDelay: `${index * 0.05}s` }}
          >
            <span className={styles.cardIndex}>{`0${index + 1}`}</span>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </motion.article>
        ))}
      </div>
    </SectionReveal>
  )
}
