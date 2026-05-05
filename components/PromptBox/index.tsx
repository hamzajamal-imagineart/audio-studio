'use client'
import { useRef, useState } from 'react'
import styles from './PromptBox.module.css'

export default function PromptBox() {
  const [value, setValue] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.target.value)
    const el = e.target
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
    }
  }

  return (
    <div className={styles.box}>
      {/* Resize handle */}
      <div className={styles.resizeHandle} aria-hidden="true">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M9 1L1 9M9 5L5 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      </div>

      <textarea
        ref={textareaRef}
        className={styles.textarea}
        placeholder="Chat to generate voice overs"
        value={value}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        rows={1}
        spellCheck={false}
      />

      <div className={styles.actions}>
        <div className={styles.left}>
          <button className={styles.iconBtn} aria-label="Attach" type="button">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </button>
          <button className={styles.pill} type="button">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2 3.5h9M4 6.5h5M5 9.5h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            Advanced
          </button>
        </div>
        <div className={styles.right}>
          <button className={styles.pill} type="button">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M6.5 1.5l1.1 2.8L11 5.5l-2 1.95 1 2.9-3-1.6-3 1.6 1-2.9-2-1.95 3.4-.2L6.5 1.5z" fill="currentColor"/>
            </svg>
            Random
          </button>
          <button className={styles.send} aria-label="Generate" type="button">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 13V3M3 8l5-5 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
