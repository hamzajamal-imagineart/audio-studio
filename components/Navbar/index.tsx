'use client'
import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 20) }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function closeMobile() { setMobileOpen(false) }

  const navbarClass = `${styles.navbar}${scrolled ? ` ${styles.scrolled}` : ''}`

  return (
    <>
      <header className={navbarClass}>
        <div className={styles.navbarInner}>

          {/* Logo: TODO: add logo SVGs to /public/audio-studio/assets/ */}
          <a href="https://www.imagine.art/" target="_blank" rel="noopener noreferrer" className={styles.logo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.logoWhite} src="/audio-studio/assets/logo-imagine-white.svg" alt="ImagineArt Audio Studio" width={158} height={39} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.logoDark} src="/audio-studio/assets/logo-imagine-black.svg" alt="ImagineArt Audio Studio" width={158} height={39} />
          </a>

          {/* Desktop nav */}
          <nav className={styles.navLinks}>
            <a href="https://www.imagine.art/audio/text-to-speech/" target="_blank" rel="noopener noreferrer" className={styles.navLink}>Text to Speech</a>
            <a href="https://www.imagine.art/audio/voice-cloning/" target="_blank" rel="noopener noreferrer" className={styles.navLink}>Voice Cloning</a>
            <a href="https://www.imagine.art/audio/music/" target="_blank" rel="noopener noreferrer" className={styles.navLink}>AI Music</a>
            <a href="https://www.imagine.art/subscription" target="_blank" rel="noopener noreferrer" className={styles.navLink}>Pricing</a>
          </nav>

          {/* Desktop CTA buttons */}
          <div className={styles.navActions}>
            <a href="https://www.imagine.art/teams-plan/contact-us" target="_blank" rel="noopener noreferrer" className={`${styles.navbarBtn} ${styles.navbarBtnGhost}`}>
              Contact Sales
            </a>
            <a href="https://www.imagine.art/audio" target="_blank" rel="noopener noreferrer" className={`${styles.navbarBtn} ${styles.navbarBtnDark}`}>
              Get Started for free
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`${styles.navHamburger}${mobileOpen ? ` ${styles.open}` : ''}`}
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={styles.bars}>
              <span className={styles.bar} />
              <span className={styles.bar} />
            </span>
          </button>

        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <div className={`${styles.navMobileMenu}${mobileOpen ? ` ${styles.open}` : ''}`} aria-hidden={!mobileOpen}>
        <div className={styles.navMobileTopbar}>
          <a href="https://www.imagine.art/" target="_blank" rel="noopener noreferrer" className={styles.logo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/audio-studio/assets/logo-imagine-white.svg" alt="ImagineArt Audio Studio" width={130} height={32} style={{ display: 'block' }} />
          </a>
          <button className={styles.navMobileClose} onClick={closeMobile} aria-label="Close menu">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className={styles.navMobileBody}>
          <div className={styles.navMobileInner}>
            <a href="https://www.imagine.art/audio/text-to-speech/" target="_blank" rel="noopener noreferrer" className={styles.navMobileLink} onClick={closeMobile}>Text to Speech</a>
            <a href="https://www.imagine.art/audio/voice-cloning/" target="_blank" rel="noopener noreferrer" className={styles.navMobileLink} onClick={closeMobile}>Voice Cloning</a>
            <a href="https://www.imagine.art/audio/music/" target="_blank" rel="noopener noreferrer" className={styles.navMobileLink} onClick={closeMobile}>AI Music</a>
            <a href="https://www.imagine.art/subscription" target="_blank" rel="noopener noreferrer" className={styles.navMobileLink} onClick={closeMobile}>Pricing</a>
          </div>
          <div className={styles.navMobileDivider} />
          <div className={styles.navMobileActions}>
            <a href="https://www.imagine.art/teams-plan/contact-us" target="_blank" rel="noopener noreferrer" className={`${styles.navbarBtn} ${styles.navbarBtnAlt}`} onClick={closeMobile}>
              Contact Sales
            </a>
            <a href="https://www.imagine.art/audio" target="_blank" rel="noopener noreferrer" className={`${styles.navbarBtn} ${styles.navbarBtnDark}`} onClick={closeMobile}>
              Get Started for free
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
