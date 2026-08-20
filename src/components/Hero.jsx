import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import ServicesTicker from './ServicesTicker'
import styles from './Hero.module.css'

const words = [
  ['UX/UI','4%','-5%'], ['BACKEND','34%','-13%'], ['AI','66%','4%'], ['FRONTEND','9%','57%'], ['DATA','43%','72%'],
]

const activityItems = ['Pipeline completado','Documento generado','Agente resolvió una tarea','Sincronización terminada','Regla validada','Fuente de datos conectada']

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const dashboardRef = useRef(null)
  const visible = useInView(dashboardRef,{amount:.25})
  const [counts,setCounts] = useState([0,0,0])
  const [activityOffset,setActivityOffset] = useState(0)
  const [tilt,setTilt] = useState({x:0,y:0})
  const { scrollYProgress } = useScroll()
  const uxY = useTransform(scrollYProgress,[0,.35],[0,30]); const backendY = useTransform(scrollYProgress,[0,.35],[0,-34])
  const aiX = useTransform(scrollYProgress,[0,.35],[0,28]); const frontendX = useTransform(scrollYProgress,[0,.35],[0,-30]); const dataY = useTransform(scrollYProgress,[0,.35],[0,-26])
  const transforms = [{y:uxY},{y:backendY},{x:aiX},{x:frontendX},{y:dataY}]

  useEffect(()=>{
    if(!visible) return
    const start=performance.now(); let frame
    const tick=(now)=>{const p=Math.min(1,(now-start)/900);setCounts([Math.round(24*p),Math.round(186*p),Math.round(998*p)/10]);if(p<1)frame=requestAnimationFrame(tick)}
    frame=requestAnimationFrame(tick); return()=>cancelAnimationFrame(frame)
  },[visible])

  useEffect(()=>{if(!visible||reduceMotion)return;const timer=setInterval(()=>setActivityOffset(v=>(v+1)%activityItems.length),3600);return()=>clearInterval(timer)},[visible,reduceMotion])

  const handleTilt=(event)=>{if(reduceMotion||window.matchMedia('(max-width: 800px)').matches)return;const r=event.currentTarget.getBoundingClientRect();setTilt({x:((event.clientY-r.top)/r.height-.5)*-3,y:((event.clientX-r.left)/r.width-.5)*3})}
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.coordinates} aria-hidden="true"><span>19.4326° N</span><span>099.1332° W</span></div>
      <div className={styles.words} aria-hidden="true">
        {words.map(([word,top,left], i) => <motion.span key={word} style={{top,left,...(reduceMotion?{}:transforms[i])}} initial={{opacity:0,filter:'blur(8px)'}} animate={{opacity:1,filter:'blur(0px)'}} transition={{delay:.2+i*.09,duration:1}}>{word}</motion.span>)}
      </div>
      <div className={styles.content}>
        <motion.p className={styles.eyebrow} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.15}}><span>NUEVO</span> NEXVORA LABS — PRODUCTOS EN DESARROLLO <b>→</b></motion.p>
        <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:.25,duration:.8}}>Tecnología que hace<br />que tu negocio <em>avance.</em></motion.h1>
        <motion.div className={styles.bottom} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.55}}>
          <p>Diseñamos productos digitales, sistemas inteligentes y soluciones de datos para convertir operaciones complejas en sistemas claros, conectados y escalables.</p>
          <div className={styles.actions}><a href="#contacto">Comenzar un proyecto <span>↗</span></a><a href="#servicios">Explorar servicios <span>↓</span></a></div>
        </motion.div>
        <motion.div ref={dashboardRef} className={styles.productWindow} initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{delay:.7,duration:.8}} onPointerMove={handleTilt} onPointerLeave={()=>setTilt({x:0,y:0})} style={{transform:`perspective(1600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`}}>
          <div className={styles.windowTop}><div><i/><i/><i/></div><span>NEXVORA / SISTEMA DE OPERACIONES</span><b><i/> SISTEMA ACTIVO · JUL 2026</b></div>
          <div className={styles.windowBody}>
            <aside><strong>N</strong><span>Resumen</span><span>Flujos</span><span>Inteligencia</span><span>Automatizaciones</span><span>Fuentes de datos</span><span>Documentos</span><span>Agentes</span><small>ESPACIO DE TRABAJO<br/><b>Nexvora Studio</b></small></aside>
            <div className={styles.dashboard}><div className={styles.techStatus}><span>LATENCIA 42MS</span><span>SINCRONIZADO HACE 12S</span><span>ENTORNO NX-OPS-01</span><span>CONEXIÓN ESTABLE</span></div><div className={styles.dashHead}><div><small>RESUMEN OPERATIVO / MOCKUP CONCEPTUAL</small><h3>Todo conectado.</h3></div><button>Últimos 30 días⌄</button></div><div className={styles.metrics}><article><span>Flujos activos</span><strong>{counts[0]}</strong><i style={{width:`${counts[0]/24*72}%`}}/><small>12 en ejecución</small></article><article><span>Horas procesadas</span><strong>{counts[1]}</strong><i style={{width:`${counts[1]/186*86}%`}}/><small>Periodo conceptual</small></article><article><span>Estado del sistema</span><strong>{counts[2]}%</strong><i style={{width:`${counts[2]/99.8*99}%`}}/><small>● Operativo</small></article></div><div className={styles.chart}><div className={styles.chartBars}>{[28,42,34,58,49,72,64,82,71,92,84,96].map((h,i)=><i key={i} style={{height:`${visible?h:0}%`,transitionDelay:`${i*.04}s`}}/>)}<svg viewBox="0 0 600 180" preserveAspectRatio="none"><polyline points="0,150 55,128 110,136 165,98 220,110 275,67 330,82 385,45 440,58 495,28 550,42 600,16"/><circle cx="495" cy="28" r="4"/></svg><b className={styles.tooltip}>ETL · ACTIVO</b><em/></div><div className={styles.activity}><span>ACTIVIDAD RECIENTE</span>{Array.from({length:4},(_,i)=>activityItems[(activityOffset+i)%activityItems.length]).map((item,i)=><motion.p key={item} initial={{opacity:0,x:5}} animate={{opacity:1,x:0}}><i/>{item}<b>{i*6+2}m</b></motion.p>)}</div></div><div className={styles.network}><span>FUENTES</span><i/><b>API</b><i/><strong>N</strong><i/><b>AGENTE</b><i/><span>PDF / DASHBOARD</span><small>ETL · RAG · APIs · DATA PIPELINE · AUTOMATIZACIÓN · PDF FACTORY</small></div></div>
          </div>
        </motion.div>
      </div>
      <ServicesTicker />
    </section>
  )
}
