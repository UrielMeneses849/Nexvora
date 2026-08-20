import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion'
import { process } from '../data/siteData'
import styles from './ProcessSystem.module.css'

export default function ProcessSystem() {
  const sectionRef = useRef(null)
  const [active,setActive] = useState(0)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target:sectionRef, offset:['start start','end end'] })

  useMotionValueEvent(scrollYProgress,'change',(value)=>{
    if (window.matchMedia('(max-width: 700px)').matches) return
    setActive(Math.min(5,Math.floor(value*6)))
  })

  const selectStep = (index) => {
    setActive(index)
    if (!sectionRef.current || window.matchMedia('(max-width: 700px)').matches) return
    const top = sectionRef.current.getBoundingClientRect().top + window.scrollY
    const distance = sectionRef.current.offsetHeight - window.innerHeight
    window.scrollTo({ top:top + distance*(index/5), behavior:reduceMotion?'auto':'smooth' })
  }

  const step = process[active]
  return <div className={styles.scrollSection} ref={sectionRef}>
    <div className={styles.sticky}>
      <div className={styles.system}>
        <div className={styles.rail}>{process.map((item,i)=><button key={item.id} onClick={()=>selectStep(i)} className={i===active?styles.active:''} aria-current={i===active?'step':undefined}><span>{item.id}</span><i/><b>{item.name}</b></button>)}</div>
        <div className={styles.panel}>
          <div className={styles.panelTop}><span>ETAPA ACTIVA / {step.id}</span><b>{String(active+1).padStart(2,'0')} / 06</b></div>
          <AnimatePresence mode="wait">
            <motion.div key={step.id} className={styles.stageContent} initial={reduceMotion?false:{opacity:0,y:14,filter:'blur(6px)'}} animate={{opacity:1,y:0,filter:'blur(0px)'}} exit={reduceMotion?{}:{opacity:0,y:-10}} transition={{duration:.35}}>
              <div className={`${styles.stageVisual} ${styles[step.visual]}`} aria-hidden="true"><strong>{step.id}</strong><i/><i/><i/><i/><span>NEXVORA / {step.name}</span></div>
              <div className={styles.stageCopy}><small>OBJETIVO</small><h3>{step.name}</h3><p>{step.objective}</p><small>ENTREGABLES</small><ul>{step.deliverables.map((x,i)=><motion.li key={x} initial={reduceMotion?false:{opacity:0,x:-8}} animate={{opacity:1,x:0}} transition={{delay:.1+i*.06}}>{x}</motion.li>)}</ul></div>
            </motion.div>
          </AnimatePresence>
          <div className={styles.footer}><span>DESLIZA PARA AVANZAR</span><div><i style={{width:`${(active+1)/6*100}%`}}/></div><b>SISTEMA ACTIVO</b></div>
        </div>
      </div>
    </div>
  </div>
}
