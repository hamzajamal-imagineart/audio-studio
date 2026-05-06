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
          <button className={styles.iconBtn} aria-label="Add">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
          <button className={styles.pillBtn}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="6" y1="18" x2="18" y2="18"/></svg>
            Advanced
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
