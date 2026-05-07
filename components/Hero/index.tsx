import RotatingText from './RotatingText'
import PromptBox from './PromptBox'
import styles from './Hero.module.css'

const ASSETS = {
  bgBase:    'https://www.figma.com/api/mcp/asset/0575d69b-25a4-48c7-b804-f242a0b0ecc5',
  bgOverlay: 'https://www.figma.com/api/mcp/asset/8fab5cd4-d665-4315-8b68-e2f0e419feaa',
}

function HeroCard({ side, image }: { side: 'left' | 'right', image: string }) {
  return (
    <div className={`${styles.vidCard} ${styles[side]}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt="" className={styles.vidThumb} />
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
        <HeroCard side="left" image="/assets/Rectangle 49986.jpg" />
        <HeroCard side="right" image="/assets/Rectangle 499861.jpg" />
      </div>

      {/* Content */}
      <div className={styles.heroContent}>

        {/* Announcement chip */}
        <a href="https://www.imagine.art/audio" target="_blank" rel="noopener noreferrer" className={styles.chip}>
          <span>ElevenLabs v3 is out now on ImagineArt!</span>
          <span className={styles.chipCta}>Try now →</span>
        </a>

        {/* Headline */}
        <div className={styles.headlineBlock}>
          <div className={styles.headlineWrap}>
            <span className={`${styles.headline} ${styles.headlineMuted}`}>All in One Audio Studio</span>
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

        {/* Prompt box */}
        <PromptBox />

        {/* Product chips */}
        <div className={styles.productChips}>
          <a href="/text-to-speech" target="_blank" rel="noopener noreferrer" className={styles.productChip}>Text to Speech</a>
          <a href="https://www.imagine.art/audio" target="_blank" rel="noopener noreferrer" className={styles.productChip}>Voice Cloning</a>
          <a href="https://www.imagine.art/ai-audio-studio/ai-music-generator" target="_blank" rel="noopener noreferrer" className={styles.productChip}>AI Music</a>
        </div>

      </div>


    </section>
  )
}
