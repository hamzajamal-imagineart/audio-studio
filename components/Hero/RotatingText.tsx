'use client'
import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

const TERMS = ['Voice Generator', 'Voice Cloning', 'Music']

export default function RotatingText() {
  const [index, setIndex] = useState(0)
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % TERMS.length)
      setAnimKey(k => k + 1)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <span
      key={animKey}
      className={`${styles.headline} ${styles.headlineBoxed} ${styles.rotatingTerm}`}
    >
      {TERMS[index]}
    </span>
  )
}
