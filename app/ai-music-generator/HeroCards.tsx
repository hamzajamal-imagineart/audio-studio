'use client'
import { useRef, useState, useEffect } from 'react'
import styles from './page.module.css'

type CardData = {
  img: string
  audio: string
  title: string
  author: string
}

const CARDS: CardData[] = [
  { img: '/audio-studio/assets/music-card-1.jpg', audio: '/audio-studio/assets/music-cover1.mp3', title: 'Velvet Dream',  author: 'ImagineArt AI' },
  { img: '/audio-studio/assets/music-card-2.jpg', audio: '/audio-studio/assets/music-cover2.mp3', title: 'Midnight Soul', author: 'ImagineArt AI' },
]

function MusicCard({ card, position, isPlaying, onPlay }: {
  card: CardData
  position: 'back' | 'front'
  isPlaying: boolean
  onPlay: () => void
}) {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    if (!isPlaying && !a.paused) a.pause()
  }, [isPlaying])

  function toggle() {
    const a = audioRef.current
    if (!a) return
    if (a.paused) { a.play(); onPlay() }
    else { a.pause(); onPlay() }
  }

  const tilt = position === 'back'
    ? (isPlaying ? 'rotate(-20deg) scale(1.04)' : 'rotate(-15deg)')
    : (isPlaying ? 'rotate(20deg) scale(1.04)' : 'rotate(15deg)')

  return (
    <div className={position === 'back' ? styles.heroCardBack : styles.heroCardFront} style={{ transform: tilt }}>
      <div className={styles.heroCardGlow} />
      <div className={styles.heroCard} onClick={toggle} style={{ cursor: 'pointer' }}>
        <audio ref={audioRef} src={card.audio} loop />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={card.img} alt="" className={styles.heroCardImg} />
        <div className={styles.heroCardInfo}>
          <span className={styles.heroCardTitle}>{card.title}</span>
          <div className={styles.heroCardMeta}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/audio-studio/assets/logo-icon.svg" alt="" className={styles.heroCardAvatar} />
            <span className={styles.heroCardAuthor}>{card.author}</span>
          </div>
          {isPlaying && (
            <div className={styles.heroCardWave}>
              {[0,1,2,3,4].map(i => (
                <span key={i} className={styles.heroCardWaveBar} style={{ animationDelay: `${i * 0.12}s` }} />
              ))}
            </div>
          )}
        </div>
        <div className={`${styles.heroCardPlay} ${isPlaying ? styles.heroCardPlayActive : ''}`}>
          {isPlaying ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="2" y="2" width="4" height="10" rx="1" fill="white"/>
              <rect x="8" y="2" width="4" height="10" rx="1" fill="white"/>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 2L12 7L3 12V2Z" fill="white"/>
            </svg>
          )}
        </div>
      </div>
    </div>
  )
}

export default function HeroCards() {
  const [playingIdx, setPlayingIdx] = useState<number | null>(null)

  function handlePlay(idx: number) {
    setPlayingIdx(prev => prev === idx ? null : idx)
  }

  return (
    <div className={styles.heroCards}>
      {CARDS.map((card, i) => (
        <MusicCard
          key={i}
          card={card}
          position={i === 0 ? 'back' : 'front'}
          isPlaying={playingIdx === i}
          onPlay={() => handlePlay(i)}
        />
      ))}
    </div>
  )
}
