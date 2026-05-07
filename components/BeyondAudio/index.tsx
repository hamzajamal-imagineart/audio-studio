import styles from "./BeyondAudio.module.css";

type BeyondCard = {
  tag: string;
  title: string;
  body: string;
  href: string;
  image: string;
  video?: string;
  highlight?: boolean;
};

const cards: BeyondCard[] = [
  {
    tag: "You are here",
    title: "AI Audio Studio",
    body: "Voice, cloning, music. The complete audio platform.",
    href: "https://www.imagine.art/audio",
    image: "/assets/Rectangle 499868.jpg",
    highlight: true,
  },
  {
    tag: "Images",
    title: "AI Image Generator",
    body: "Create stunning visuals from text prompts.",
    href: "https://www.imagine.art/ai-image-generator",
    image: "/assets/Rectangle 499866.jpg",
    video: "/assets/image-generator.webm",
  },
  {
    tag: "Video",
    title: "AI Video Generator",
    body: "Turn text or images into video clips.",
    href: "https://www.imagine.art/ai-video-generator",
    image: "/assets/Rectangle 499867.jpg",
    video: "/assets/video-generator.webm",
  },
];

export default function BeyondAudio() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header} data-animate>
<h2 className={styles.h2}>More Than Just Audio.</h2>
          <p className={styles.sub}>
            Pair your voiceovers with AI-generated images and videos, all from the same workspace.
          </p>
        </div>
        <div className={styles.grid}>
          {cards.map((card, i) => (
            <a
              key={card.title}
              href={card.href}
              className={`${styles.card} ${card.highlight ? styles.cardHighlight : ""}`}
              target="_blank" rel="noopener noreferrer"
              data-animate data-d={String(i + 1)}
            >
              <div className={styles.cardMediaWrap}>
                {card.video
                  ? <video src={card.video} autoPlay loop muted playsInline className={styles.cardMedia} />
                  : /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={card.image} alt="" className={styles.cardMedia} />}
                {card.highlight && (
                  <span className={styles.youAreHere}>You are here</span>
                )}
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardBody}>{card.body}</p>
                <span className={styles.arrowLink}>Explore &#x2192;</span>
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
