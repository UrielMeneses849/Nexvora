import styles from './ProductSystem.module.css'

const nodes = ['ESTRATEGIA','PRODUCTO','UX/UI','FRONTEND','BACKEND','DATA','IA','AUTOMATIZACIÓN','INFRAESTRUCTURA','OPERACIÓN']

export default function ProductSystem() {
  return <div className={styles.system} aria-label="NEXVORA Product System: capacidades conectadas">
    <div className={styles.meta}><span>PRODUCT SYSTEM / v2.1</span><span>CONNECTED CAPABILITIES</span></div>
    <svg viewBox="0 0 500 500" aria-hidden="true">
      <circle cx="250" cy="250" r="190"/><circle cx="250" cy="250" r="116"/><circle className={styles.spin} cx="250" cy="250" r="155" strokeDasharray="4 14"/>
      {Array.from({length:10},(_,i)=>{const a=(-90+i*36)*Math.PI/180;return <line key={i} x1="250" y1="250" x2={250+190*Math.cos(a)} y2={250+190*Math.sin(a)}/>})}
    </svg>
    <div className={styles.core}><span>N</span><i/><small>NEXVORA<br/>CORE</small></div>
    {nodes.map((node,i)=><div key={node} className={`${styles.node} ${styles[`node${i+1}`]}`}><i/><span>{node}</span><small>0{i+1}</small></div>)}
    <div className={styles.coords}>19°25&apos;57&quot;N<br/>99°07&apos;59&quot;W</div>
  </div>
}
