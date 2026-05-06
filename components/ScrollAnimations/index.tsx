'use client'
import { useEffect } from 'react'

export default function ScrollAnimations() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-animate]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.05 }
    )

    els.forEach(el => {
      const rect = el.getBoundingClientRect()
      const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0
      if (!alreadyVisible) {
        el.classList.add('reveal')
        const d = el.dataset.d
        if (d) el.style.transitionDelay = `${Number(d) * 0.08}s`
      }
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return null
}
