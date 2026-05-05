import styles from "./Testimonials.module.css";

const stats = [
  { value: "2M+", label: "Users" },
  { value: "50M+", label: "Voiceovers Generated" },
  { value: "70+", label: "Languages" },
  { value: "4.8/5", label: "Rating" },
];

const testimonials = [
  {
    quote:
      "I used to spend 4 hours recording voiceovers per video. Now it takes 4 minutes. ImagineArt cloned my voice perfectly and the music generator replaced my Suno subscription.",
    name: "Alex R.",
    role: "YouTube creator (350K subs)",
    initials: "AR",
  },
  {
    quote:
      "The voice cloning is genuinely indistinguishable from my original recordings. I produced an entire 12-episode series without stepping into a studio.",
    name: "Sarah M.",
    role: "Podcast host",
    initials: "SM",
  },
  {
    quote:
      "We localize ad campaigns into 14 languages. ImagineArt cut our voiceover production cost by 80% and quality went up, not down.",
    name: "James K.",
    role: "Creative Director",
    initials: "JK",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Testimonials</p>
          <h2 className={styles.h2}>Trusted by creators worldwide.</h2>
        </div>

        <div className={styles.statsStrip}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.initials}</div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{t.name}</span>
                  <span className={styles.authorRole}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
