import styles from "./FinalCTA.module.css";

function WaveformDecoration() {
  // Wide, low-amplitude sine wave path
  const width = 1400;
  const height = 120;
  const amplitude = 28;
  const midY = height / 2;
  const periods = 3;

  // Build a smooth sine wave path
  const points: string[] = [];
  const steps = 200;
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * width;
    const y = midY + amplitude * Math.sin((i / steps) * periods * 2 * Math.PI);
    points.push(`${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`);
  }

  return (
    <svg
      className={styles.waveDecoration}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d={points.join(" ")}
        fill="none"
        stroke="rgba(0,0,0,0.06)"
        strokeWidth="1"
      />
    </svg>
  );
}

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <WaveformDecoration />
      <div className={styles.inner}>
        <h2 className={styles.headline}>Your audio studio is ready. Free to start.</h2>
        <p className={styles.subheadline}>
          Generate your first voiceover in 30 seconds. No credit card. No download. No catch.
        </p>
        <div className={styles.buttons}>
          <a href="/audio" className={styles.primaryButton}>
            Try Free AI Voice Generator
          </a>
          <a href="https://www.imagine.art/subscription" target="_blank" rel="noopener noreferrer" className={styles.secondaryLink}>
            Pricing plan
          </a>
        </div>
      </div>
    </section>
  );
}
