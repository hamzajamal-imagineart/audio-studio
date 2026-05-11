'use client'
import { useEffect } from 'react'

export default function DotCursorEffect() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-dot-grid]')

    function handleMove(this: HTMLElement, e: MouseEvent) {
      const rect = this.getBoundingClientRect()
      this.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
      this.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
    }

    function handleLeave(this: HTMLElement) {
      this.style.setProperty('--mouse-x', '-9999px')
      this.style.setProperty('--mouse-y', '-9999px')
    }

    sections.forEach(el => {
      el.addEventListener('mousemove', handleMove as EventListener)
      el.addEventListener('mouseleave', handleLeave as EventListener)
    })

    return () => {
      sections.forEach(el => {
        el.removeEventListener('mousemove', handleMove as EventListener)
        el.removeEventListener('mouseleave', handleLeave as EventListener)
      })
    }
  }, [])

  return null
}
