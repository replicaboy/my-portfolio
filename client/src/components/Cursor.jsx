import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)

  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let cursorX = 0, cursorY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${mouseX}px`
        cursorDotRef.current.style.top = `${mouseY}px`
      }
    }

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.12
      cursorY += (mouseY - cursorY) * 0.12
      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorX}px`
        cursorRef.current.style.top = `${cursorY}px`
      }
      requestAnimationFrame(animate)
    }
    animate()

    const addHovered = () => { cursorRef.current?.classList.add('hovered'); cursorDotRef.current?.classList.add('hovered') }
    const removeHovered = () => { cursorRef.current?.classList.remove('hovered'); cursorDotRef.current?.classList.remove('hovered') }

    document.addEventListener('mousemove', handleMouseMove)
    document.querySelectorAll('a, button, .glass-card, [data-hover="true"]').forEach(el => {
      el.addEventListener('mouseenter', addHovered)
      el.addEventListener('mouseleave', removeHovered)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor-ring" />
      <div ref={cursorDotRef} className="cursor-dot" />
    </>
  )
}
