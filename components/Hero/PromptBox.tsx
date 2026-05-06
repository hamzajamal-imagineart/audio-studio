'use client'
import { useRef } from 'react'
import styles from './Hero.module.css'

export default function PromptBox() {
  const ref = useRef<HTMLTextAreaElement>(null)

  function handleInput() {
    const el = ref.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }

  return (
    <div className={styles.promptBox}>
      <div className={styles.promptInputRow}>
        <textarea
          ref={ref}
          className={styles.promptTextarea}
          placeholder="Type anything to generate audio…"
          rows={1}
          onInput={handleInput}
        />
        <svg className={styles.dragger} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4" cy="4" r="1" fill="currentColor"/><circle cx="8" cy="4" r="1" fill="currentColor"/>
          <circle cx="4" cy="8" r="1" fill="currentColor"/><circle cx="8" cy="8" r="1" fill="currentColor"/>
        </svg>
      </div>
      <div className={styles.promptActions}>
        <div className={styles.promptLeft}>
          <button className={styles.pillBtn}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2l2.4 7.6H22l-6.4 4.6 2.4 7.8L12 17.4l-6 4.6 2.4-7.8L2 9.6h7.6L12 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
              <path d="M19 2l.8 2.4L22 5.2l-2.2.8L19 8.6l-.8-2.6L16 5.2l2.2-.8L19 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none"/>
            </svg>
            AI Writer
          </button>
        </div>
        <a
          href="https://www.imagine.art/audio?filter-assets=audio"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.sendBtn}
          aria-label="Generate"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </a>
      </div>
    </div>
  )
}
