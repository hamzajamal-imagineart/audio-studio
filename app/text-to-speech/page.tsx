import type { Metadata } from 'next'
import Faq from '@/components/Faq'
import PromptBox from '@/components/Hero/PromptBox'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'AI Text to Speech | Free & Online | ImagineArt Audio Studio',
  description: 'Turn text into natural AI speech online. Paste your text, choose a voice, preview the audio, and create realistic voice output: no complex setup, no software to download.',
}

const FEATURES = [
  { label: 'MiniMax Speech 2.8 HD', sub: 'Top-ranked TTS model' },
  { label: '20+ Languages', sub: 'Global accent support' },
  { label: 'Emotion Controls', sub: '9 voice styles' },
  { label: 'Online & Instant', sub: 'No software download' },
  { label: 'All-in-One Studio', sub: 'Image · Video · Audio' },
]

/* ── Bento SVG graphics ─────────────────────────────────── */
function EmotionGraphic() {
  const waves = [
    'M0 8 C4 2,8 14,12 8 C16 2,20 14,24 8',
    'M0 8 C3 0,6 16,9 8 C12 0,15 16,18 8 C21 0,24 16,27 8',
    'M0 4 L4 12 L8 4 L12 12 L16 4 L20 12 L24 4',
    'M0 8 C6 8,6 2,12 2 C18 2,18 8,24 8',
    'M0 8 Q12 2 24 8',
    'M0 4 C4 4,4 12,8 12 C12 12,12 4,16 4 C20 4,20 12,24 12',
    'M0 8 L5 8 L5 3 L10 13 L15 3 L20 8 L24 8',
    'M0 8 C8 7,16 9,24 8',
    'M0 8 C2 1,5 15,8 8 C10 3,13 13,16 8 C18 4,21 11,24 8',
  ]
  const ops = [0.7, 0.55, 0.82, 0.6, 0.42, 0.68, 0.88, 0.32, 0.75]
  return (
    <svg width="160" height="96" viewBox="0 0 160 96" fill="none">
      {waves.map((d, i) => (
        <g key={i} transform={`translate(${(i % 3) * 54 + 4},${Math.floor(i / 3) * 30 + 8})`}>
          <path d={d} stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={ops[i]} />
        </g>
      ))}
    </svg>
  )
}

function PacingGraphic() {
  return (
    <svg width="160" height="56" viewBox="0 0 160 56" fill="none">
      <path d="M8 28 C12 16,16 40,20 28 C24 16,28 40,32 28 C36 16,40 40,44 28" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" opacity="0.8"/>
      <line x1="50" y1="28" x2="58" y2="28" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" opacity="0.2"/>
      <path d="M64 28 C67 18,71 38,75 28 C79 18,83 38,87 28 C91 18,95 38,99 28 C103 18,107 38,111 28" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" opacity="0.8"/>
      <line x1="117" y1="28" x2="125" y2="28" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" opacity="0.2"/>
      <path d="M131 28 C134 20,138 36,142 28 C146 20,150 36,154 28" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" opacity="0.8"/>
      <circle cx="54" cy="28" r="2" fill="#fff" opacity="0.18"/>
      <circle cx="121" cy="28" r="2" fill="#fff" opacity="0.18"/>
    </svg>
  )
}

function AccentsGraphic() {
  return (
    <svg width="120" height="96" viewBox="0 0 120 96" fill="none">
      <circle cx="52" cy="48" r="34" stroke="#fff" strokeWidth="1.5" opacity="0.25"/>
      <ellipse cx="52" cy="48" rx="34" ry="14" stroke="#fff" strokeWidth="1.2" opacity="0.18"/>
      <ellipse cx="52" cy="48" rx="34" ry="26" stroke="#fff" strokeWidth="1.2" opacity="0.12"/>
      <path d="M52 14 C38 28,38 68,52 82" stroke="#fff" strokeWidth="1.2" opacity="0.18"/>
      <path d="M52 14 C66 28,66 68,52 82" stroke="#fff" strokeWidth="1.2" opacity="0.18"/>
      <path d="M88 36 C93 40,93 56,88 60" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" fill="none"/>
      <path d="M93 30 C101 37,101 59,93 66" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" fill="none"/>
      <path d="M98 24 C109 34,109 62,98 72" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" opacity="0.25" fill="none"/>
    </svg>
  )
}

function SpeedGraphic() {
  return (
    <svg width="160" height="60" viewBox="0 0 160 60" fill="none">
      <path d="M4 30 C12 10,20 50,28 30 C36 10,44 50,52 30" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" opacity="0.45"/>
      <text x="28" y="54" fontSize="9" fill="#fff" fillOpacity="0.28" textAnchor="middle" fontFamily="inherit">0.5x</text>
      <line x1="62" y1="30" x2="94" y2="30" stroke="#fff" strokeWidth="1.2" opacity="0.28" strokeLinecap="round"/>
      <path d="M91 26 L96 30 L91 34" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.28"/>
      <path d="M104 30 C107 20,110 40,113 30 C116 20,119 40,122 30 C125 20,128 40,131 30 C134 20,137 40,140 30 C143 20,146 40,149 30 C152 20,155 40,158 30" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" opacity="0.82"/>
      <text x="131" y="54" fontSize="9" fill="#fff" fillOpacity="0.28" textAnchor="middle" fontFamily="inherit">2x</text>
    </svg>
  )
}

function VoicesGraphic() {
  const lines = [
    { amp: 10, op: 0.75 }, { amp: 16, op: 0.5 }, { amp: 8, op: 0.88 },
    { amp: 13, op: 0.38 }, { amp: 11, op: 0.62 }, { amp: 18, op: 0.28 },
  ]
  return (
    <svg width="160" height="88" viewBox="0 0 160 88" fill="none">
      {lines.map((l, i) => {
        const y = 10 + i * 13
        const a = l.amp
        return (
          <path key={i}
            d={`M0 ${y} C10 ${y - a},20 ${y + a},30 ${y} C40 ${y - a},50 ${y + a},60 ${y} C70 ${y - a},80 ${y + a},90 ${y} C100 ${y - a},110 ${y + a},120 ${y} C130 ${y - a},140 ${y + a},150 ${y} C155 ${y - a / 2},158 ${y + a / 2},160 ${y}`}
            stroke="#fff" strokeWidth="1.4" strokeLinecap="round" opacity={l.op}
          />
        )
      })}
    </svg>
  )
}

function BenchmarkGraphic() {
  const bars = [
    { h: 22, op: 0.16 }, { h: 36, op: 0.26 }, { h: 52, op: 0.38 },
    { h: 68, op: 0.52 }, { h: 86, op: 0.86 },
  ]
  return (
    <svg width="140" height="100" viewBox="0 0 140 100" fill="none">
      {bars.map((b, i) => (
        <rect key={i} x={10 + i * 26} y={94 - b.h} width="18" height={b.h} rx="3" fill="#fff" opacity={b.op}/>
      ))}
      <path d="M118 5 L121 11 L128 11 L122 15 L124 22 L118 18 L112 22 L114 15 L108 11 L115 11 Z" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round" opacity="0.55" fill="none"/>
    </svg>
  )
}

const QUALITY = [
  { title: 'Text to Speech with Emotion', tag: 'Emotion styles', graphic: <EmotionGraphic /> },
  { title: 'Natural Text to Speech Pacing', tag: 'TTS model', graphic: <PacingGraphic /> },
  { title: 'Clear Pronunciation Across Accents', tag: 'Language variants', graphic: <AccentsGraphic /> },
  { title: 'Speed and Pitch Control', tag: 'Speed range', graphic: <SpeedGraphic /> },
  { title: '50+ Distinct AI Voices', tag: 'Unique AI voices', graphic: <VoicesGraphic /> },
  { title: 'Benchmark-Leading Model', tag: 'Quality ranking', graphic: <BenchmarkGraphic /> },
]

const USECASES = [
  { title: 'YouTube & Short-Form Video', body: 'Generate AI voiceovers for YouTube videos, Reels, TikToks, and Shorts. No mic, no setup.', image: '/assets/usecase-youtubers.jpg' },
  { title: 'Podcasts & Audio Content', body: 'Produce broadcast-quality narration for podcast intros, sponsor reads, or full AI-voiced episodes.', image: '/assets/usecase-podcasters.jpg' },
  { title: 'E-Learning & Training', body: 'Turn course scripts into consistent AI narration. No reshoots, no re-recording.', image: '/assets/Rectangle 499866.jpg' },
  { title: 'Audiobooks & Long-Form', body: 'Convert written content into audio ready for Spotify, Audible, or your own platform.', image: '/assets/Rectangle 499863.jpg' },
  { title: 'Accessibility', body: 'Make written content available to users with visual impairments or reading difficulties.', image: '/assets/Rectangle 499867.jpg' },
  { title: 'Presentations & Demos', body: 'Add professional narration to slide decks and product demos. Faster and more consistent than recording.', image: '/assets/usecase-marketers.jpg' },
  { title: 'Games & Interactive Media', body: 'Prototype NPC dialogue and interactive story narration without hiring a voice actor for every draft.', image: '/assets/usecase-developers.jpg' },
  { title: 'Multilingual Content', body: 'Localize into 20+ languages instantly. Same script in English, Spanish, French, Arabic, one tool.', image: '/assets/Rectangle 499864.jpg' },
]

const STEPS = [
  { n: '1', title: 'Paste Your Text', body: 'Type or paste any text into the input box: a script, article, product description, or anything you want converted to speech. Up to 5,000 characters per generation.', video: '/assets/tts-step-1.webm' },
  { n: '2', title: 'Choose Voice, Language & Emotion', body: 'Select your voice persona, target language, regional accent, and speaking style. Adjust speed between 0.5x and 2.0x. Every setting is available free online.', video: '/assets/tts-step-2.webm' },
  { n: '3', title: 'Generate, Preview & Download', body: 'Click Generate. Your AI voice is ready in seconds. Preview it directly in the browser, then download as MP3 or WAV to use in your video, podcast, or project.', video: '/assets/tts-step-3.webm' },
]

const FAQS = [
  { q: 'Is ImagineArt text to speech free?', a: 'Yes. ImagineArt offers free text to speech access for all users. You can generate AI voices online and download the output as MP3 without a paid subscription. The free plan includes a monthly character allowance, enough for scripts, social content, and short-form voiceovers.' },
  { q: 'How do I convert text to speech online?', a: 'Paste your text into the input field, choose a voice, language, accent, and emotion style, then click Generate. Your audio will be ready to preview and download in seconds: no software installation required.' },
  { q: 'Can I download the generated voice?', a: 'Yes. After generating your AI voice, you can download the audio as an MP3 file directly from the tool. MP3 download is available on the free plan. Premium plans also support WAV format.' },
  { q: 'Can I use text to speech for YouTube videos?', a: 'Yes. ImagineArt AI text to speech is widely used for YouTube voiceovers, explainer videos, tutorials, and short-form content. You own the audio you generate and can use it commercially on supported plans.' },
  { q: 'Can AI read text with emotion?', a: 'Yes. ImagineArt supports 9 emotion and speaking style controls: natural, expressive, friendly, professional, calm, energetic, sad, angry, and whisper.' },
  { q: 'Does ImagineArt support different text to speech accents?', a: 'Yes. ImagineArt supports 20+ languages including English (US, UK, Australian, Irish), Spanish, French, German, Italian, Japanese, Arabic, Hindi, and more.' },
  { q: 'Can I use text to speech on mobile?', a: 'Yes. ImagineArt text to speech works fully in mobile browsers on iOS and Android. No app download is required. Open the page in your browser and start generating.' },
  { q: 'What is the difference between text to speech and an AI voice generator?', a: 'Text to speech converts written text into audio using a pre-built AI voice. An AI voice generator can also create or clone custom voices and produce audio at scale. ImagineArt combines both.' },
]

export default function TextToSpeechPage() {
  return (
    <main className={styles.page}>

      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.heroHeading}>Turn Text into Natural<br />AI Speech</h1>
        <p className={styles.heroSub}>Paste your text, choose a voice, preview the audio, and create realistic voice output. No complex setup, no software to download.</p>
        <PromptBox />
        <p className={styles.heroMeta}>Free to start · No signup needed · 20+ languages · Download MP3</p>
      </section>

      {/* Feature chips */}
      <section className={styles.chips}>
        {FEATURES.map((f, i) => (
          <div key={i} className={styles.chip}>
            <span className={styles.chipLabel}>{f.label}</span>
            <span className={styles.chipSub}>{f.sub}</span>
          </div>
        ))}
      </section>

      {/* Voice quality */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader} data-animate>
            <h2 className={styles.headingLight}>Realistic AI Voices, Powered by MiniMax Speech 2.8 HD</h2>
            <p className={styles.subLight}>One of the highest-ranked models on independent TTS benchmarks. Natural, expressive voice output that sounds human.</p>
          </div>
          <div className={styles.bentoGrid}>
            {QUALITY.map((q, i) => (
              <div key={i} className={styles.bentoCard} data-animate data-d={String(i + 1)}>
                <div className={styles.bentoGraphic}>{q.graphic}</div>
                <div className={styles.bentoContent}>
                  <span className={styles.bentoTag}>{q.tag}</span>
                  <h3 className={styles.bentoTitle}>{q.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader} data-animate>
            <h2 className={styles.headingLight}>Built for Creators, Teams, and Everyday Use</h2>
            <p className={styles.subLight}>From YouTube voiceovers to audiobooks to accessibility tools, ImagineArt text to speech fits any workflow that needs natural AI audio.</p>
          </div>
          <div className={styles.grid}>
            {USECASES.map((u, i) => (
              <div key={i} className={styles.card} data-animate data-d={String((i % 4) + 1)}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={u.image} alt="" className={styles.cardImg} />
                <div className={styles.cardOverlay} />
                <div className={styles.cardContent}>
                  <span className={styles.cardIndex}>{String(i + 1).padStart(2, '0')}</span>
                  <h3 className={styles.cardTitle}>{u.title}</h3>
                  <p className={styles.cardBody}>{u.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader} data-animate>
            <h2 className={styles.headingLight}>From Text to Audio in 3 Steps</h2>
            <p className={styles.subLight}>No technical setup. No software. Under a minute.</p>
          </div>
          <div className={styles.steps}>
            {STEPS.map((s, i) => (
              <div key={i} className={styles.step} data-animate data-d={String(i + 1)}>
                <div className={styles.stepVideo}>
                  <video src={s.video} autoPlay loop muted playsInline />
                </div>
                <div className={styles.stepMeta}>
                  <span className={styles.stepNum}>{s.n}</span>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                </div>
                <p className={styles.stepBody}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq
        faqs={FAQS}
        heading="Text to Speech FAQs"
        sub="Common questions about ImagineArt AI text to speech"
      />

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaLeft} data-animate>
            <h2 className={styles.ctaHeading}>Your voice,<br />everywhere.</h2>
            <p className={styles.ctaSub}>Free to start. No credit card, no download, no setup. Powered by MiniMax Speech 2.8 HD.</p>
          </div>
          <div className={styles.ctaRight} data-animate data-d="1">
            <a href="https://www.imagine.art/ai-audio-studio/ai-text-to-speech" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>Try Free Text to Speech</a>
            <a href="https://www.imagine.art/audio" target="_blank" rel="noopener noreferrer" className={styles.btnGhost}>Explore Audio Studio</a>
          </div>
        </div>
      </section>

    </main>
  )
}
