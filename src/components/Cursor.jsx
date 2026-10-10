import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches
    if (!isFine) return undefined

    const onMove = (event) => {
      const { clientX, clientY } = event
      if (dot.current) {
        dot.current.style.left = `${clientX}px`
        dot.current.style.top = `${clientY}px`
      }
      if (ring.current) {
        ring.current.style.left = `${clientX}px`
        ring.current.style.top = `${clientY}px`
      }
    }

    const onOver = (event) => {
      const hoverable = event.target.closest('a, button, input, textarea, select, [data-cursor]')
      ring.current?.classList.toggle('is-hover', Boolean(hoverable))
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  return (
    <>
      <div ref={dot} className="cursor-dot hidden md:block" />
      <div ref={ring} className="cursor-ring hidden md:block" />
    </>
  )
}
