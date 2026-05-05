import GradientBlob from '@/components/GradientBlob'
import RotatingText from './RotatingText'
import styles from './Hero.module.css'

const ASSETS = {
  bgBase:    'https://www.figma.com/api/mcp/asset/0575d69b-25a4-48c7-b804-f242a0b0ecc5',
  bgOverlay: 'https://www.figma.com/api/mcp/asset/8fab5cd4-d665-4315-8b68-e2f0e419feaa',
}

function HeroCard({ side, colorA, colorB, colorC, offset }: {
  side: 'left' | 'right'
  colorA: string; colorB: string; colorC: string; offset: number
}) {
  return (
    <div className={`${styles.vidCard} ${styles[side]}`}>
      <GradientBlob
        colorA={colorA}
        colorB={colorB}
        colorC={colorC}
        duration={12}
        offset={offset}
        className={styles.vidThumb}
      />
    </div>
  )
}

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* Background */}
      <div className={styles.heroBg} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.bgBase} src={ASSETS.bgBase} alt="" fetchPriority="high" loading="eager" decoding="async" />
        <div className={styles.bgOverlayWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.bgOverlay} src={ASSETS.bgOverlay} alt="" loading="eager" decoding="async" />
        </div>
        <div className={styles.dim} />
        <div className={styles.purpleSweep} />
      </div>

      {/* Hero cards */}
      <div className={styles.heroCards} aria-hidden="true">
        <HeroCard side="left"  colorA="#a78bfa" colorB="#60a5fa" colorC="#7c3aed" offset={0}  />
        <HeroCard side="right" colorA="#2dd4bf" colorB="#34d399" colorC="#0891b2" offset={-5} />
      </div>

      {/* Content */}
      <div className={styles.heroContent}>

        {/* Announcement chip */}
        <a href="#" className={styles.chip}>
          <span>Muze4.5 is out now on ImagineArt!</span>
          <span className={styles.chipCta}>Try now →</span>
        </a>

        {/* Headline */}
        <div className={styles.headlineBlock}>
          <div className={styles.blobBlue} />
          <div className={styles.blobRed} />
          <div className={styles.headlineWrap}>
            <span className={`${styles.headline} ${styles.headlineMuted}`}>All in One Studio</span>
            <div className={styles.headlineRow}>
              <span className={styles.headline}>AI</span>
              <RotatingText />
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className={styles.subtitle}>
          Generate lifelike voiceovers, clone any voice from a 10-second sample, and compose original music — all from one studio.
        </p>

        {/* Primary CTA + trust */}
        <div className={styles.heroCtas}>
          <a href="/audio-studio" className={styles.heroCta}>Try Free AI Voice Generator</a>
          <p className={styles.heroTrust}>Free 10,000 characters/month · No credit card</p>
        </div>

        {/* Product chips */}
        <div className={styles.productChips}>
          <a href="#text-to-speech" className={styles.productChip}>Text to Speech</a>
          <a href="#voice-cloning" className={styles.productChip}>Voice Cloning</a>
          <a href="#ai-music" className={styles.productChip}>AI Music</a>
        </div>

      </div>


    </section>
  )
}
