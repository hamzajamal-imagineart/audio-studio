import GradientBlob from "@/components/GradientBlob";
import styles from "./BeyondAudio.module.css";

type BeyondCard = {
  tag: string;
  title: string;
  body: string;
  href: string;
  blobA: string;
  blobB: string;
  blobC: string;
  offset: number;
  highlight?: boolean;
};

const cards: BeyondCard[] = [
  {
    tag: "Images",
    title: "AI Image Generator",
    body: "Create stunning visuals from text prompts. Pair with your voiceovers for complete content.",
    href: "/ai-image-generator",
    blobA: "#fda4af",
    blobB: "#fdba74",
    blobC: "#fecdd3",
    offset: -1,
  },
  {
    tag: "Video",
    title: "AI Video Generator",
    body: "Turn text or images into video clips ready for social, ads, or storytelling.",
    href: "/ai-video-generator",
    blobA: "#c4b5fd",
    blobB: "#93c5fd",
    blobC: "#e9d5ff",
    offset: -4,
  },
  {
    tag: "You are here",
    title: "AI Audio Studio",
    body: "Voice, cloning, music. The complete audio platform.",
    href: "/audio",
    blobA: "#2dd4bf",
    blobB: "#818cf8",
    blobC: "#5eead4",
    offset: -7,
    highlight: true,
  },
];

export default function BeyondAudio() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>More Than Audio</p>
          <h2 className={styles.h2}>More than just audio.</h2>
          <p className={styles.sub}>
            Pair your voiceovers with AI-generated images and videos, all from the same workspace.
          </p>
        </div>
        <div className={styles.grid}>
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className={`${styles.card} ${card.highlight ? styles.cardHighlight : ""}`}
            >
              <div className={styles.cardImgWrap}>
                <GradientBlob
                  colorA={card.blobA}
                  colorB={card.blobB}
                  colorC={card.blobC}
                  duration={11}
                  offset={card.offset}
                />
              </div>
              <div className={styles.cardContent}>
                <p className={`${styles.tag} ${card.highlight ? styles.tagHighlight : ""}`}>
                  {card.tag}
                </p>
                <h3 className={`${styles.cardTitle} ${card.highlight ? styles.cardTitleHighlight : ""}`}>
                  {card.title}
                </h3>
                <p className={`${styles.cardBody} ${card.highlight ? styles.cardBodyHighlight : ""}`}>
                  {card.body}
                </p>
                <span className={`${styles.arrowLink} ${card.highlight ? styles.arrowLinkHighlight : ""}`}>
                  Explore <span className={styles.arrow}>&#x2192;</span>
                </span>
              </div>
            </a>
          ))}
        </div>
        <p className={styles.closing}>
          One platform. Image + Video + Audio. Endless creative possibilities.
        </p>
      </div>
    </section>
  );
}
