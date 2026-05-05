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

          {/* Logo: TODO: add logo SVGs to /public/assets/ */}
          <a href="/" className={styles.logo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.logoWhite} src="/assets/logo-imagine-white.svg" alt="ImagineArt Audio Studio" width={158} height={39} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.logoDark} src="/assets/logo-imagine-black.svg" alt="ImagineArt Audio Studio" width={158} height={39} />
          </a>

          {/* Desktop nav */}
          <nav className={styles.navLinks}>
            <a href="#" className={styles.navLink}>Tools</a>
            <div className={styles.navDropdown}>
              <button className={`${styles.navLink} ${styles.navDropdownTrigger}`}>
                Features
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={styles.navDropdownMenu}>
                <a href="/text-to-speech" target="_blank" rel="noopener noreferrer" className={styles.navDropdownItem}>Text to Speech</a>
                <a href="#" className={styles.navDropdownItem}>Voice Isolator</a>
                <a href="#" className={styles.navDropdownItem}>Voice Cloning</a>
                <a href="#" className={styles.navDropdownItem}>AI Podcast Generator</a>
                <a href="#" className={styles.navDropdownItem}>AI Sound Effects</a>
              </div>
            </div>
            <a href="#" className={styles.navLink}>Pricing</a>
          </nav>

          {/* Desktop CTA buttons */}
          <div className={styles.navActions}>
            <a href="https://www.imagine.art/voice-studio/contact" target="_blank" rel="noopener noreferrer" className={`${styles.navbarBtn} ${styles.navbarBtnGhost}`}>
              Contact Sales
            </a>
            <a href="https://www.imagine.art/voice-studio" target="_blank" rel="noopener noreferrer" className={`${styles.navbarBtn} ${styles.navbarBtnDark}`}>
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
          <a href="/" className={styles.logo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logo-imagine-white.svg" alt="ImagineArt Audio Studio" width={130} height={32} style={{ display: 'block' }} />
          </a>
          <button className={styles.navMobileClose} onClick={closeMobile} aria-label="Close menu">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className={styles.navMobileBody}>
          <div className={styles.navMobileInner}>
            <a href="#" className={styles.navMobileLink} onClick={closeMobile}>Tools</a>
            <a href="#" className={styles.navMobileLink} onClick={closeMobile}>Features</a>
            <div className={styles.navMobileSub}>
              <a href="/text-to-speech" target="_blank" rel="noopener noreferrer" className={styles.navMobileSubLink} onClick={closeMobile}>Text to Speech</a>
              <a href="#" className={styles.navMobileSubLink} onClick={closeMobile}>Voice Isolator</a>
              <a href="#" className={styles.navMobileSubLink} onClick={closeMobile}>Voice Cloning</a>
              <a href="#" className={styles.navMobileSubLink} onClick={closeMobile}>AI Podcast Generator</a>
              <a href="#" className={styles.navMobileSubLink} onClick={closeMobile}>AI Sound Effects</a>
            </div>
            <a href="#" className={styles.navMobileLink} onClick={closeMobile}>Pricing</a>
          </div>
          <div className={styles.navMobileDivider} />
          <div className={styles.navMobileActions}>
            <a href="https://www.imagine.art/voice-studio/contact" target="_blank" rel="noopener noreferrer" className={`${styles.navbarBtn} ${styles.navbarBtnAlt}`} onClick={closeMobile}>
              Contact Sales
            </a>
            <a href="https://www.imagine.art/voice-studio" target="_blank" rel="noopener noreferrer" className={`${styles.navbarBtn} ${styles.navbarBtnDark}`} onClick={closeMobile}>
              Get Started for free
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
