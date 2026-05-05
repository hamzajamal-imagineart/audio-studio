import GradientBlob from "@/components/GradientBlob";
import styles from "./UseCases.module.css";

type UseCase = {
  tag: string;
  title: string;
  body: string;
  blobA: string;
  blobB: string;
  blobC: string;
  offset: number;
};

const useCases: UseCase[] = [
  {
    tag: "For YouTubers",
    title: "Ship videos faster. Sound like a pro.",
    body: "No more re-recording takes. Generate voiceovers in your own voice or any voice, in any language. Drop in custom background music, copyright-free and ready for monetization.",
    blobA: "#93c5fd",
    blobB: "#67e8f9",
    blobC: "#bae6fd",
    offset: 0,
  },
  {
    tag: "For Podcasters",
    title: "From script to studio sound, instantly.",
    body: "Whether correcting a mispronounced name or producing a full episode, generate broadcast-quality narration without re-recording. Clone your voice once, use it forever.",
    blobA: "#fcd34d",
    blobB: "#fb923c",
    blobC: "#fde68a",
    offset: -3,
  },
  {
    tag: "For Marketers",
    title: "Scale audio content without scaling headcount.",
    body: "Generate voiceovers, ads, training videos, and explainers in 70+ languages at a fraction of the cost of traditional voice actors.",
    blobA: "#86efac",
    blobB: "#5eead4",
    blobC: "#bbf7d0",
    offset: -6,
  },
  {
    tag: "For Developers",
    title: "Production-grade audio. Drop-in API.",
    body: "Power conversational AI, NPC dialogue, audiobooks, and interactive experiences. Sub-second latency. SDKs available.",
    blobA: "#c4b5fd",
    blobB: "#93c5fd",
    blobC: "#ddd6fe",
    offset: -2,
  },
];

export default function UseCases() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Use Cases</p>
          <h2 className={styles.h2}>Built for every kind of creator.</h2>
          <p className={styles.sub}>
            From first-time YouTubers to enterprise marketing teams, AI Audio Studio adapts to how
            you create.
          </p>
        </div>
        <div className={styles.list}>
          {useCases.map((uc, i) => (
            <div key={uc.tag} className={`${styles.item} ${i % 2 === 1 ? styles.reverse : ''}`}>
              <div className={styles.blobWrap}>
                <GradientBlob
                  colorA={uc.blobA}
                  colorB={uc.blobB}
                  colorC={uc.blobC}
                  duration={10}
                  offset={uc.offset}
                />
              </div>
              <div className={styles.textCol}>
                <p className={styles.tag}>{uc.tag}</p>
                <h3 className={styles.title}>{uc.title}</h3>
                <p className={styles.body}>{uc.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
