import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const cursorRef = useRef(null)
  const stateRef = useRef({ x: 0, y: 0, active: false })
  const frameRef = useRef(0)

  useEffect(() => {
    const updateCursor = () => {
      if (!cursorRef.current) return
      const { x, y, active } = stateRef.current
      cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      cursorRef.current.dataset.active = active ? 'true' : 'false'
      frameRef.current = 0
    }

    const handleMove = (event) => {
      stateRef.current.x = event.clientX - 10
      stateRef.current.y = event.clientY - 10
      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(updateCursor)
      }
    }

    const handleHover = (event) => {
      const target = event.target.closest('[data-cursor="magnetic"], button, a')
      stateRef.current.active = !!target
      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(updateCursor)
      }
    }

    document.addEventListener('pointermove', handleMove)
    document.addEventListener('pointerover', handleHover)
    document.addEventListener('pointerout', handleHover)

    return () => {
      document.removeEventListener('pointermove', handleMove)
      document.removeEventListener('pointerover', handleHover)
      document.removeEventListener('pointerout', handleHover)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return <div ref={cursorRef} className={styles.cursor} />
}
