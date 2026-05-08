'use client'
import { useRef, useState } from 'react'
import styles from "./UseCases.module.css";

type UseCase = {
  tag: string;
  title: string;
  body: string;
  video: string;
  ctaLabel: string;
  ctaHref: string;
};

const useCases: UseCase[] = [
  {
    tag: "For YouTubers",
    title: "Ship Videos Faster. Sound Like A Pro.",
    body: "No more re-recording takes. Generate voiceovers in your own voice or any voice, in any language. Drop in custom background music, copyright-free and ready for monetization.",
    video: "/assets/usecase-for-youtubers.mp4",
    ctaLabel: "Try AI Voiceover",
    ctaHref: "https://www.imagine.art/audio",
  },
  {
    tag: "For Podcasters",
    title: "From Script To Studio Sound, Instantly.",
    body: "Whether correcting a mispronounced name or producing a full episode, generate broadcast-quality narration without re-recording. Clone your voice once, use it forever.",
    video: "/assets/usecase-for-podcast.mp4",
    ctaLabel: "Clone Your Voice",
    ctaHref: "https://www.imagine.art/audio/voice-cloning",
  },
  {
    tag: "For Marketers",
    title: "Scale Audio Content Without Scaling Headcount.",
    body: "Generate voiceovers, ads, training videos, and explainers in 70+ languages at a fraction of the cost of traditional voice actors.",
    video: "/assets/usecase-for-marketers.mp4",
    ctaLabel: "Start for Free",
    ctaHref: "https://www.imagine.art/audio",
  },
  {
    tag: "For Developers",
    title: "Production-Grade Audio. Drop-In API.",
    body: "Power conversational AI, NPC dialogue, audiobooks, and interactive experiences. Sub-second latency. SDKs available.",
    video: "/assets/usecase-for-developers.mp4",
    ctaLabel: "Explore the API",
    ctaHref: "https://www.imagine.art/audio",
  },
];

function VideoCard({ uc, reverse }: { uc: UseCase; reverse: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  function togglePlay() {
    const v = videoRef.current
    if (!v) return
    if (v.paused) { v.play(); setPlaying(true) }
    else { v.pause(); setPlaying(false) }
  }

  function toggleMute() {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  return (
    <div className={`${styles.item} ${reverse ? styles.reverse : ''}`} data-animate>
      <div className={styles.imageWrap}>
        <video
          ref={videoRef}
          src={uc.video}
          loop
          muted
          playsInline
          className={styles.image}
          onEnded={() => setPlaying(false)}
        />
        <div className={styles.videoControls}>
          <button className={styles.controlBtn} onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
            {playing ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="3" y="2" width="4" height="12" rx="1.5" fill="currentColor"/>
                <rect x="9" y="2" width="4" height="12" rx="1.5" fill="currentColor"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 2.5L13 8L4 13.5V2.5Z" fill="currentColor"/>
              </svg>
            )}
          </button>
          <button className={styles.controlBtn} onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}>
            {muted ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L4.5 5H2v6h2.5L8 14V2Z" fill="currentColor"/>
                <path d="M11 6l2.5 2.5M13.5 6L11 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L4.5 5H2v6h2.5L8 14V2Z" fill="currentColor"/>
                <path d="M10.5 5.5a4 4 0 010 5M12.5 3.5a7 7 0 010 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className={styles.textCol}>
        <p className={styles.tag}>{uc.tag}</p>
        <h3 className={styles.title}>{uc.title}</h3>
        <p className={styles.body}>{uc.body}</p>
        <a href={uc.ctaHref} target="_blank" rel="noopener noreferrer" className={styles.cta}>{uc.ctaLabel} →</a>
      </div>
    </div>
  )
}

export default function UseCases() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header} data-animate>
          <h2 className={styles.h2}>Built For Every Kind Of Creator.</h2>
          <p className={styles.sub}>
            From first-time YouTubers to enterprise marketing teams, AI Audio Studio adapts to how
            you create.
          </p>
        </div>
        <div className={styles.list}>
          {useCases.map((uc, i) => (
            <VideoCard key={uc.tag} uc={uc} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
