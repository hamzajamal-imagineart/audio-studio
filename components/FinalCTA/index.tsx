import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.card}>
          <video
            src="/assets/audio-studio-last.mp4"
            autoPlay
            loop
            muted
            playsInline
            className={styles.video}
          />
          <div className={styles.overlay} aria-hidden="true" />
          <div className={styles.content}>
            <h2 className={styles.headline}>Your Audio Studio Is Ready.</h2>
            <p className={styles.subheadline}>
              Generate your first voiceover in 30 seconds. No credit card. No download. No catch.
            </p>
            <a href="https://www.imagine.art/audio/" target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
              Try Free AI Voice Generator
            </a>
            <p className={styles.trust}>Trusted by 2M+ creators &nbsp;·&nbsp; 70+ languages &nbsp;·&nbsp; No setup needed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
