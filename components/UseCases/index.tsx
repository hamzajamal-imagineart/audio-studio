import styles from "./UseCases.module.css";

type UseCase = {
  tag: string;
  title: string;
  body: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
};

const useCases: UseCase[] = [
  {
    tag: "For YouTubers",
    title: "Ship videos faster. Sound like a pro.",
    body: "No more re-recording takes. Generate voiceovers in your own voice or any voice, in any language. Drop in custom background music, copyright-free and ready for monetization.",
    image: "/assets/Rectangle 499862.jpg",
    ctaLabel: "Try AI Voiceover",
    ctaHref: "https://www.imagine.art/audio",
  },
  {
    tag: "For Podcasters",
    title: "From script to studio sound, instantly.",
    body: "Whether correcting a mispronounced name or producing a full episode, generate broadcast-quality narration without re-recording. Clone your voice once, use it forever.",
    image: "/assets/Rectangle 499863.jpg",
    ctaLabel: "Clone Your Voice",
    ctaHref: "https://www.imagine.art/audio",
  },
  {
    tag: "For Marketers",
    title: "Scale audio content without scaling headcount.",
    body: "Generate voiceovers, ads, training videos, and explainers in 70+ languages at a fraction of the cost of traditional voice actors.",
    image: "/assets/Rectangle 499864.jpg",
    ctaLabel: "Start for Free",
    ctaHref: "https://www.imagine.art/audio",
  },
  {
    tag: "For Developers",
    title: "Production-grade audio. Drop-in API.",
    body: "Power conversational AI, NPC dialogue, audiobooks, and interactive experiences. Sub-second latency. SDKs available.",
    image: "/assets/Rectangle 499865.jpg",
    ctaLabel: "Explore the API",
    ctaHref: "https://www.imagine.art/audio",
  },
];

export default function UseCases() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header} data-animate>
<h2 className={styles.h2}>Built for every kind of creator.</h2>
          <p className={styles.sub}>
            From first-time YouTubers to enterprise marketing teams, AI Audio Studio adapts to how
            you create.
          </p>
        </div>
        <div className={styles.list}>
          {useCases.map((uc, i) => (
            <div key={uc.tag} className={`${styles.item} ${i % 2 === 1 ? styles.reverse : ''}`} data-animate data-d={String(i + 1)}>
              <div className={styles.imageWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={uc.image} alt="" className={styles.image} />
              </div>
              <div className={styles.textCol}>
                <p className={styles.tag}>{uc.tag}</p>
                <h3 className={styles.title}>{uc.title}</h3>
                <p className={styles.body}>{uc.body}</p>
                <a href={uc.ctaHref} target="_blank" rel="noopener noreferrer" className={styles.cta}>{uc.ctaLabel} →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
