import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'
import styles from './DataSection.module.css'

const highlights = [
  'Modelos de datos modernos',
  'Flujos ETL confiables',
  'Dashboards inteligentes',
  'Automatización de reporting',
  'AI Agents operativos',
]

export default function DataSection() {
  return (
    <SectionReveal className={styles.section}>
      <div className={styles.wrapper} id="expertise">
        <motion.div className={styles.side} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: 'easeOut' }}>
          <p className={styles.label}>Arquitectura y datos</p>
          <h2 className={styles.heading}>Movemos tus ideas desde prototipo hasta sistemas de alto rendimiento.</h2>
          <p className={styles.copy}>
            Cada experiencia se construye como una pista sonora: ritmo preciso, capas medidas, y una ejecución técnica que no pide permiso.
          </p>
        </motion.div>

        <div className={styles.cards}> 
          {highlights.map((item, index) => (
            <motion.article
              key={item}
              className={styles.card}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{ transitionDelay: `${index * 0.04}s` }}
            >
              <span className={styles.bullet}>.</span>
              <p>{item}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}
