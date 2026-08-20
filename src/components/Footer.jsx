import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div><p className={styles.brand}><span />NEXVORA</p><p className={styles.note}>Producto · Ingeniería · Datos · IA<br />Ciudad de México / Remoto</p></div>
        <div className={styles.links}><a href="#servicios">Servicios</a><a href="#proyectos">Proyectos</a><a href="#productos">Productos</a><a href="#nosotros">Nosotros</a></div>
        <div><p className={styles.copy}>Hablemos de lo que sigue.</p><a className={styles.mail} href="mailto:hola@nexvora.mx">hola@nexvora.mx ↗</a></div>
      </div>
      <div className={styles.bottom}><span>© 2026 NEXVORA</span><span>HECHO CON INTENCIÓN / MÉXICO</span><a href="#inicio">VOLVER ARRIBA ↑</a></div>
    </footer>
  )
}
