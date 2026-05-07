'use client'
import { useState } from 'react'
import styles from './Testimonials.module.css'

const stats = [
  { value: '2M+', label: 'Users' },
  { value: '50M+', label: 'Voiceovers Generated' },
  { value: '70+', label: 'Languages' },
  { value: '4.8/5', label: 'Rating' },
]

type Review = {
  name: string
  initials: string
  stars: number
  date: string
  body: string
  url: string
}

const reviews: Review[] = [
  {
    name: 'RM Robinson',
    initials: 'RR',
    stars: 4,
    date: 'Mar 6, 2026',
    url: 'https://www.trustpilot.com/reviews/69a9bae6de21c70da38a1c7e',
    body: `Working with Imagine Art on my PC has been amazing. The interface is flawless, and I really like the way everything is set up. The chatbot is also very helpful — it actually guided me through a couple of issues I had without me needing to talk to a representative.\n\nIf I had to point out one issue, it would be the phone app — it seems really slow and sluggish. Another thing I ran into was when using the Kling motion control model on PC. From what I could tell, you can only use about five seconds of video. I tried uploading a 12-second motion reference but it wouldn't accept it — I didn't see any clear information about the time limit.\n\nOne feature I'd really love is the ability to upload and edit audio directly inside the program. Right now you have to take the audio somewhere else, cut it up, bring it back in, and sometimes find out you're still a few seconds over. Built-in audio editing would make syncing voices with characters and getting smooth lip-sync so much easier.\n\nBecause of those things, I can't quite give it a full five stars yet. But aside from that, I'm having a blast using it, and I'm grateful to be part of this community.`,
  },
  {
    name: 'I Am One',
    initials: 'IO',
    stars: 4,
    date: 'Mar 6, 2026',
    url: 'https://www.trustpilot.com/reviews/69aa0cedd97851a90dd96984',
    body: `I've been using ImagineArt regularly to create cinematic AI videos, and overall I think the platform is really impressive. As a content creator, I use it almost every day — it helps me generate creative visuals that would otherwise take a lot more time and effort.\n\nMost of the time I use the WAN 2.2 model because it uses fewer credits. It works well, although sometimes the video generation fails. I also tried the Kling 2.6 Pro model — the video quality is great, but sometimes it doesn't generate background voice or audio.\n\nAnother issue is with credits. Occasionally when a generation fails due to an internal error, credits are supposed to be returned. A few times I felt like the full amount didn't come back. More transparent credit tracking would really improve the experience.\n\nThat said, I still believe ImagineArt is doing an amazing job, especially considering it's still evolving. It's capable of producing very high-quality cinematic content and I recommend it to anyone serious about AI-generated visuals.`,
  },
  {
    name: 'Rudolf',
    initials: 'RD',
    stars: 4,
    date: 'Nov 12, 2025',
    url: 'https://www.trustpilot.com/reviews/691483119c2f2a45a34163b0',
    body: `ImagineArt brings a whole host of high-end AI applications together under one hood — primarily visual AIs, but voice-over, music, and soundscapes are possible too.\n\nI've been testing almost all the tools and I can see this is perfect for advertising visuals and even short films. Animation is near perfect, way more advanced than AnimateDiff, and you can create quite convincing short films by combining the footage. I also love the possibility to change just a few things in an uploaded image and keep the rest exactly as is — it's like inpainting in StableDiffusion but way more advanced.\n\nDownsides: non-sexual nudity is not accepted, which limits what you can do with regard to visual arts. Support is slow on the basic package — I got my answer only after 5 days. After switching to the Ultimate package, support was way more responsive. Cleaning up unwanted images is also a slow process with no batch deleting yet, though I think they're working on it.`,
  },
  {
    name: 'Lisa Dion',
    initials: 'LD',
    stars: 5,
    date: 'Jun 30, 2025',
    url: 'https://www.trustpilot.com/reviews/68629f4e857d0a6282f2798a',
    body: `ImagineArt has quickly become one of the most valuable tools in my creative workflow. As a creative director and AI consultant focused on brand storytelling, I need tools that are intuitive, powerful, and forward-thinking. ImagineArt checks all those boxes, and continues to evolve in ways that spark new ideas every time I use it.\n\nIts ability to generate across image, video, 3D, and audio makes it one of the most versatile platforms available. Whether I'm prototyping an omni-media campaign concept, developing brand content, or exploring future-facing concept visuals, ImagineArt helps bring the vision to life with style and precision.\n\nThe dedicated community support and ongoing partner challenges on Discord make the experience even richer. It's not just a tool — it's a space for innovation, collaboration, and creative growth. Whether I'm building luxury campaigns, testing new AI concepts, or pitching immersive stories, this tool delivers professional, versatile, and visionary results.`,
  },
  {
    name: 'Me Myself',
    initials: 'MM',
    stars: 4,
    date: 'Feb 3, 2026',
    url: 'https://www.trustpilot.com/users/69625f20d7ccaa4b9691fd1d',
    body: `I've been using ImagineArt for about 4 years and recently subscribed to the Ultimate package which gives me 16,000 credits a month. I initially used the platform for image generation but became increasingly interested in animations.\n\nOver the years the platform has grown and is continually updated. New innovations are added very regularly — a problem I used to have generating a clip can often be solved by their latest update. It's great to have everything in one place with a huge range of AI models to choose from.\n\nPluses: easy to navigate, intuitive, lots of different AI models for image, video, editing, voice, and music. I'm looking forward to the sound effects feature which is promised soon.\n\nNegatives: some features eat through credits quickly. Occasional glitches, but that's expected on a regularly updated platform. Works best on PC — the web version has more features than the app.`,
  },
]

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2.5l1.96 4.22 4.54.63-3.35 3.13.83 4.57L10 12.77l-3.98 2.28.83-4.57L3.5 7.35l4.54-.63z"
        fill={filled ? '#00b67a' : '#dcdce6'}
      />
    </svg>
  )
}

function Stars({ count }: { count: number }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} filled={i < count} />
      ))}
    </div>
  )
}

function TrustpilotMark() {
  return (
    <div className={styles.tpMark}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="3" fill="#00b67a" />
        <path
          d="M12 16.5l-4.5 2.7 1.2-5.1L4.5 10.5l5.2-.4L12 5.3l2.3 4.8 5.2.4-4.2 3.6 1.2 5.1z"
          fill="#fff"
        />
      </svg>
      <span>Trustpilot</span>
    </div>
  )
}

export default function Testimonials() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set())

  function toggle(i: number) {
    setExpanded(prev => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.h2}>Trusted By Creators Worldwide.</h2>
        </div>

        <div className={styles.statsStrip}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.track}>
        {reviews.map((r, i) => {
          const isExpanded = expanded.has(i)
          return (
            <div key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <Stars count={r.stars} />
                <TrustpilotMark />
              </div>

              <p className={isExpanded ? styles.bodyExpanded : styles.body}>
                {r.body}
              </p>

              <button className={styles.expandBtn} onClick={() => toggle(i)}>
                {isExpanded ? 'Read less ↑' : 'Read more ↓'}
              </button>

              <div className={styles.divider} />

              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.author}
              >
                <div className={styles.avatar}>{r.initials}</div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{r.name}</span>
                  <span className={styles.authorDate}>{r.date}</span>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}
