import styles from "./ThreeTools.module.css";

function TtsIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Text lines */}
      <rect x="14" y="26" width="18" height="4" rx="2" fill="#fff" opacity="0.9" />
      <rect x="14" y="36" width="22" height="4" rx="2" fill="#fff" opacity="0.6" />
      <rect x="14" y="46" width="15" height="4" rx="2" fill="#fff" opacity="0.4" />
      {/* Arrow */}
      <path d="M42 40 L50 40" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <path d="M47 36 L51 40 L47 44" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Waveform bars */}
      <rect x="56" y="34" width="3" height="12" rx="1.5" fill="#fff" opacity="0.4" />
      <rect x="61" y="29" width="3" height="22" rx="1.5" fill="#fff" opacity="0.7" />
      <rect x="66" y="32" width="3" height="16" rx="1.5" fill="#fff" opacity="0.9" />
    </svg>
  );
}

function CloneIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top waveform - solid */}
      <path
        d="M12 32 C16 32 16 24 20 24 C24 24 24 40 28 40 C32 40 32 28 36 28 C40 28 40 36 44 36 C48 36 48 26 52 26 C56 26 56 38 60 38 C62 38 64 34 68 34"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
      {/* Bottom waveform - dashed */}
      <path
        d="M12 52 C16 52 16 44 20 44 C24 44 24 60 28 60 C32 60 32 48 36 48 C40 48 40 56 44 56 C48 56 48 46 52 46 C56 46 56 58 60 58 C62 58 64 54 68 54"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 3"
        fill="none"
        opacity="0.5"
      />
      {/* Vertical connectors */}
      <line x1="12" y1="32" x2="12" y2="52" stroke="#fff" strokeWidth="1.5" opacity="0.4" />
      <line x1="68" y1="34" x2="68" y2="54" stroke="#fff" strokeWidth="1.5" opacity="0.4" />
    </svg>
  );
}

function MusicIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Abstract Music Circle */}
      <circle cx="40" cy="40" r="22" stroke="#fff" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.2" />
      <circle cx="40" cy="40" r="18" stroke="#fff" strokeWidth="2" opacity="0.4" />
      
      {/* Central stylized note/waveform */}
      <path 
        d="M34 52V28L52 34V58" 
        stroke="#fff" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        opacity="0.9"
      />
      <circle cx="30" cy="52" r="5" fill="#fff" opacity="0.9" />
      <circle cx="48" cy="58" r="5" fill="#fff" opacity="0.9" />
      
      {/* Dynamic sparks/particles */}
      <circle cx="56" cy="30" r="2" fill="#fff" opacity="0.5" />
      <circle cx="24" cy="34" r="1.5" fill="#fff" opacity="0.3" />
      <circle cx="40" cy="22" r="1.5" fill="#fff" opacity="0.4" />
    </svg>
  );
}

type Card = {
  icon: React.ReactNode;
  title: string;
  oneLiner: string;
  bullets: string[];
  ctaText: string;
  ctaHref: string;
  video: string;
};

const cards: Card[] = [
  {
    icon: <TtsIcon />,
    title: "AI Text To Speech",
    oneLiner: "Turn any text into lifelike voiceovers in 70+ languages.",
    video: "/assets/tts-tool.mp4",
    bullets: [
      "10,000+ ultra-realistic AI voices",
      "Adjust tone, pace, emotion",
      "MP3, WAV, FLAC export",
      "Free to start",
    ],
    ctaText: "Try Text to Speech",
    ctaHref: "https://www.imagine.art/audio/text-to-speech/",
  },
  {
    icon: <CloneIcon />,
    title: "AI Voice Cloning",
    oneLiner: "Clone any voice from just 10 seconds of audio.",
    video: "/assets/voice-cloning-tool.mp4",
    bullets: [
      "99% similarity to source voice",
      "Cross-language cloning",
      "Commercial use on paid plans",
      "No studio needed",
    ],
    ctaText: "Try Voice Cloning",
    ctaHref: "https://www.imagine.art/audio/voice-cloning",
  },
  {
    icon: <MusicIcon />,
    title: "AI Music Generator",
    oneLiner: "Compose original songs and instrumentals from a text prompt.",
    video: "/assets/music-generator-tool.mp4",
    bullets: [
      "Any genre, any mood",
      "Up to 4-minute tracks",
      "Royalty-free license",
      "Export MP3",
    ],
    ctaText: "Try AI Music",
    ctaHref: "https://www.imagine.art/audio/music/elevenlabs-music",
  },
];

export default function ThreeTools() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header} data-animate>
<h2 className={styles.h2}>Three Powerful Audio Tools. One Unified Studio.</h2>
          <p className={styles.sub}>
            From podcast narration to voice cloning to custom soundtracks, AI Audio Studio provides
            everything you need to sound professional.
          </p>
        </div>
        <div className={styles.grid}>
          {cards.map((card, i) => (
            <a key={card.title} href={card.ctaHref} target="_blank" rel="noopener noreferrer" className={styles.card} data-animate data-d={String(i + 1)}>
              <video src={card.video} autoPlay loop muted playsInline className={styles.cardBg} />
              <div className={styles.overlay} />

              <div className={styles.cardIcon}>{card.icon}</div>

              <div className={styles.cardContent}>
                <div className={styles.cardBottom}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>

                  <div className={styles.revealContent}>
                    <p className={styles.cardOneLiner}>{card.oneLiner}</p>
                    <ul className={styles.bulletList}>
                      {card.bullets.map((b) => (
                        <li key={b} className={styles.bulletItem}>{b}</li>
                      ))}
                    </ul>
                    <span className={styles.ctaButton}>{card.ctaText}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
