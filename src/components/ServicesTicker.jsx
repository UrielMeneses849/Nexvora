import styles from './ServicesTicker.module.css'

const services = [
  'UX/UI DESIGN',
  'WEB ANIMATIONS',
  'FRONTEND DEVELOPMENT',
  'BACKEND DEVELOPMENT',
  'FULLSTACK DEVELOPMENT',
  'DATA ANALYTICS',
  'DATA ENGINEERING',
  'DATA SCIENCE',
  'BUSINESS INTELLIGENCE',
  'POWER BI',
  'PYTHON',
  'AUTOMATIZACIÓN',
  'AI SOLUTIONS',
  'AI AGENTS',
  'RAG',
  'VECTOR DATABASES',
  'MCP SERVERS',
  'ETL',
  'DATA PIPELINES',
  'REPORT AUTOMATION',
  'PDF FACTORIES',
  'RULE ENGINE',
  'API INTEGRATIONS',
  'GOOGLE CLOUD',
  'AWS',
  'AZURE',
  'DEVOPS',
  'CONSULTING',
]

export default function ServicesTicker() {
  return (
    <div className={styles.tickerShell} aria-label="Servicios de NEXVORA">
      <div className={styles.tickerRow}>
        {[0, 1].map((group) => <div className={styles.group} key={group} aria-hidden={group === 1}>
          {services.map((item, index) => (
            <span key={`${item}-${index}`} className={styles.tickerItem}>
              {item}
            </span>
          ))}
        </div>)}
      </div>
    </div>
  )
}
