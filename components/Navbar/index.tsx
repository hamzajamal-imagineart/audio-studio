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
            <div className={styles.navDropdownFull}>
              <button className={`${styles.navLink} ${styles.navDropdownTrigger}`}>
                Tools
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={styles.megaMenu}>
                <div className={styles.megaMenuInner}>
                  <div className={styles.megaCategory}>
                    <h4 className={styles.megaTitle}>Image Generation</h4>
                    <div className={styles.megaList}>
                      <a href="https://www.imagine.art/ai-image-generator" className={styles.megaItem}>
                        <span className={styles.megaItemTitle}>AI Image Generator</span>
                        <span className={styles.megaItemDesc}>Create art from text prompts</span>
                      </a>
                      <a href="https://www.imagine.art/features/ai-anime-generator" className={styles.megaItem}>
                        <span className={styles.megaItemTitle}>AI Anime Generator</span>
                        <span className={styles.megaItemDesc}>Specialized anime styles</span>
                      </a>
                      <a href="https://www.imagine.art/apps/image-combiner" className={styles.megaItem}>
                        <span className={styles.megaItemTitle}>AI Image Combiner</span>
                        <span className={styles.megaItemDesc}>Blend two images together</span>
                      </a>
                    </div>
                  </div>

                  <div className={styles.megaCategory}>
                    <h4 className={styles.megaTitle}>Video & Motion</h4>
                    <div className={styles.megaList}>
                      <a href="https://www.imagine.art/ai-video-generator" className={styles.megaItem}>
                        <span className={styles.megaItemTitle}>AI Video Generator</span>
                        <span className={styles.megaItemDesc}>Turn text into cinematic clips</span>
                      </a>
                      <a href="https://www.imagine.art/features/ai-animation-generator" className={styles.megaItem}>
                        <span className={styles.megaItemTitle}>AI Animation Generator</span>
                        <span className={styles.megaItemTitle}>Animate static visuals</span>
                      </a>
                      <a href="https://www.imagine.art/shorts/ai-story-generator" className={styles.megaItem}>
                        <span className={styles.megaItemTitle}>AI Story Generator</span>
                        <span className={styles.megaItemDesc}>Create shorts and stories</span>
                      </a>
                    </div>
                  </div>

                  <div className={styles.megaCategory}>
                    <h4 className={styles.megaTitle}>Advanced Editing</h4>
                    <div className={styles.megaList}>
                      <a href="https://www.imagine.art/apps/ai-image-editor" className={styles.megaItem}>
                        <span className={styles.megaItemTitle}>AI Image Editor</span>
                        <span className={styles.megaItemDesc}>Precision pixel control</span>
                      </a>
                      <a href="https://www.imagine.art/bg-remover" className={styles.megaItem}>
                        <span className={styles.megaItemTitle}>BG Remover</span>
                        <span className={styles.megaItemDesc}>Instant background removal</span>
                      </a>
                      <a href="https://www.imagine.art/apps/face-swap" className={styles.megaItem}>
                        <span className={styles.megaItemTitle}>AI Image Face Swap</span>
                        <span className={styles.megaItemDesc}>Realistic identity swap</span>
                      </a>
                    </div>
                  </div>

                  <div className={styles.megaCategory}>
                    <h4 className={styles.megaTitle}>Studio Suite</h4>
                    <div className={styles.megaList}>
                      <a href="https://www.imagine.art/audio" className={styles.megaItem}>
                        <span className={styles.megaItemTitle}>AI Audio Studio</span>
                        <span className={styles.megaItemDesc}>Voice, cloning, and music</span>
                      </a>
                      <a href="https://www.imagine.art/workflow" className={styles.megaItem}>
                        <span className={styles.megaItemTitle}>Workflows</span>
                        <span className={styles.megaItemDesc}>End-to-end AI pipelines</span>
                      </a>
                      <a href="https://www.imagine.art/features" className={styles.megaItem}>
                        <span className={styles.megaItemTitle}>Explore All Tools</span>
                        <span className={styles.megaItemDesc}>Discover our full suite</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.navDropdown}>
              <button className={`${styles.navLink} ${styles.navDropdownTrigger}`}>
                Features
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={styles.navDropdownMenu}>
                <a href="https://www.imagine.art/ai-audio-studio/ai-text-to-speech" target="_blank" rel="noopener noreferrer" className={styles.navDropdownItem}>Text to Speech</a>
                <a href="https://www.imagine.art/audio" target="_blank" rel="noopener noreferrer" className={styles.navDropdownItem}>Voice Cloning</a>
                <a href="https://www.imagine.art/ai-audio-studio/ai-music-generator" target="_blank" rel="noopener noreferrer" className={styles.navDropdownItem}>Music</a>
              </div>
            </div>
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
            <a href="https://www.imagine.art/audio" target="_blank" rel="noopener noreferrer" className={styles.navMobileLink} onClick={closeMobile}>Tools</a>
            <div className={styles.navMobileSub}>
              <a href="https://www.imagine.art/ai-image-generator" target="_blank" rel="noopener noreferrer" className={styles.navMobileSubLink} onClick={closeMobile}>AI Image Generator</a>
              <a href="https://www.imagine.art/ai-video-generator" target="_blank" rel="noopener noreferrer" className={styles.navMobileSubLink} onClick={closeMobile}>AI Video Generator</a>
              <a href="https://www.imagine.art/audio" target="_blank" rel="noopener noreferrer" className={styles.navMobileSubLink} onClick={closeMobile}>AI Audio Studio</a>
            </div>
            <a href="https://www.imagine.art/audio" target="_blank" rel="noopener noreferrer" className={styles.navMobileLink} onClick={closeMobile}>Features</a>
            <div className={styles.navMobileSub}>
              <a href="https://www.imagine.art/ai-audio-studio/ai-text-to-speech" target="_blank" rel="noopener noreferrer" className={styles.navMobileSubLink} onClick={closeMobile}>Text to Speech</a>
              <a href="https://www.imagine.art/audio" target="_blank" rel="noopener noreferrer" className={styles.navMobileSubLink} onClick={closeMobile}>Voice Cloning</a>
              <a href="https://www.imagine.art/ai-audio-studio/ai-music-generator" target="_blank" rel="noopener noreferrer" className={styles.navMobileSubLink} onClick={closeMobile}>Music</a>
            </div>
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
