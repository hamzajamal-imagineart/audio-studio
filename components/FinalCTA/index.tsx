import styles from "./FinalCTA.module.css";

function Background() {
  const W = 2800, H = 500;

  function wave(amp: number, phase: number, periods: number, y: number) {
    return Array.from({ length: 601 }, (_, i) => {
      const x = (i / 600) * W;
      const wy = y + amp * Math.sin((i / 600) * periods * 2 * Math.PI + phase);
      return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${wy.toFixed(1)}`;
    }).join(' ');
  }

  return (
    <svg className={styles.bg} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
      <path d={wave(60, 0,    2.2, 140)} fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1.5" />
      <path d={wave(40, 1.0, 3.0, 180)} fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
      <path d={wave(80, 0.5, 1.8, 250)} fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="2" />
      <path d={wave(28, 2.1, 4.0, 300)} fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="1" />
      <path d={wave(50, 3.3, 2.5, 350)} fill="none" stroke="rgba(0,0,0,0.045)" strokeWidth="1.5" />
      <path d={wave(18, 1.7, 5.5, 220)} fill="none" stroke="rgba(0,0,0,0.025)" strokeWidth="1" />
    </svg>
  );
}

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <Background />
      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.inner}>
        <h2 className={styles.headline}>Your Audio Studio Is Ready.</h2>
        <p className={styles.subheadline}>
          Generate your first voiceover in 30 seconds. No credit card. No download. No catch.
        </p>
        <div className={styles.buttons}>
          <a href="/audio" className={styles.primaryButton}>
            Try Free AI Voice Generator
          </a>
        </div>
        <p className={styles.trust}>Trusted by 2M+ creators &nbsp;·&nbsp; 70+ languages &nbsp;·&nbsp; No setup needed</p>
      </div>
    </section>
  );
}
