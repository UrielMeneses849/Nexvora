import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const links = [
  ['Servicios', '#servicios'], ['Proyectos', '#proyectos'], ['Productos', '#productos'], ['Nosotros', '#nosotros'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [open])

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#inicio" className={styles.brand} aria-label="NEXVORA, inicio"><span className={styles.dot} />NEXVORA</a>
        <nav className={styles.menu} aria-label="Navegación principal">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className={styles.cta} href="#contacto">Iniciar un proyecto <span>↗</span></a>
        <button className={`${styles.burger} ${open ? styles.burgerOpen : ''}`} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Cerrar menú' : 'Abrir menú'}><span /><span /></button>
      </div>
      <div id="mobile-menu" className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ''}`} aria-hidden={!open}>
        <nav>{links.map(([label, href], index) => <a key={href} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</a>)}<a href="#contacto" onClick={() => setOpen(false)}><span>05</span>Contacto</a></nav>
        <p>Producto · Ingeniería · Datos · IA<br />Ciudad de México / Remoto</p>
      </div>
    </header>
  )
}
