'use client'
import { useEffect, useRef } from 'react'
import styles from './page.module.css'

type UseCase = {
  title: string
  body: string
  image: string
  bg: string
}

export default function StackCards({ usecases }: { usecases: UseCase[] }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    function onScroll() {
      const cards = Array.from(container!.querySelectorAll('[data-stack-card]')) as HTMLElement[]

      cards.forEach((card, i) => {
        if (i >= cards.length - 1) {
          card.style.transform = ''
          return
        }

        const nextCard = cards[i + 1]
        const nextRect = nextCard.getBoundingClientRect()
        const nextStickyTop = 80 + (i + 1) * 14
        const coverRange = 320

        const progress = Math.max(0, Math.min(1, (nextStickyTop + coverRange - nextRect.top) / coverRange))
        const tiltDeg = -progress * 8

        card.style.transform = progress > 0 ? `perspective(1200px) rotateX(${tiltDeg}deg)` : ''
        card.style.transformOrigin = 'center top'
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={containerRef} className={styles.stack}>
      {usecases.map((u, i) => (
        <div
          key={i}
          data-stack-card=""
          className={styles.stackCard}
          style={{ top: `calc(80px + ${i * 14}px)`, zIndex: i + 1 }}
        >
          <div className={styles.stackLeft}>
            <h3 className={styles.stackTitle}>{u.title}</h3>
            <p className={styles.stackBody}>{u.body}</p>
          </div>
          <div className={styles.stackRight}>
            <div className={styles.stackImgWrap} style={{ background: u.bg }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={u.image} alt="" className={styles.stackImg} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
