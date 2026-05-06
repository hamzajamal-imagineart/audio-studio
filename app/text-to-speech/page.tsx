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


const QUALITY = [
  { title: 'Text to Speech with Emotion', tag: '9 emotion styles', image: '/assets/usecase-podcasters.jpg' },
  { title: 'Natural Text to Speech Pacing', tag: 'MiniMax Speech 2.8 HD', image: '/assets/Rectangle 499863.jpg' },
  { title: 'Clear Pronunciation Across Accents', tag: '20+ language variants', image: '/assets/usecase-marketers.jpg' },
  { title: 'Speed and Pitch Control', tag: '0.5× to 2.0× speed', image: '/assets/Rectangle 499862.jpg' },
  { title: '50+ Distinct AI Voices', tag: '50+ voices', image: '/assets/usecase-youtubers.jpg' },
  { title: 'Benchmark-Leading TTS Model', tag: 'Top benchmark score', image: '/assets/Rectangle 499865.jpg' },
]

const USECASES = [
  { title: 'YouTube & Short-Form Video', body: 'Generate AI voiceovers for YouTube videos, Reels, TikToks, and Shorts. No mic, no setup.', image: '/assets/usecase-youtubers.jpg' },
  { title: 'Podcasts & Audio Content', body: 'Produce broadcast-quality narration for podcast intros, sponsor reads, or full AI-voiced episodes.', image: '/assets/usecase-podcasters.jpg' },
  { title: 'E-Learning & Training', body: 'Turn course scripts into consistent AI narration. No reshoots, no re-recording.', image: '/assets/Rectangle 499866.jpg' },
  { title: 'Audiobooks & Long-Form', body: 'Convert written content into audio ready for Spotify, Audible, or your own platform.', image: '/assets/Rectangle 499863.jpg' },
  { title: 'Screen Reader & Accessibility', body: 'Make written content available to users with visual impairments or reading difficulties.', image: '/assets/Rectangle 499867.jpg' },
  { title: 'Presentations & Demos', body: 'Add professional narration to slide decks and product demos. Faster and more consistent than recording.', image: '/assets/usecase-marketers.jpg' },
  { title: 'Games & Interactive Media', body: 'Prototype NPC dialogue and interactive story narration without hiring a voice actor for every draft.', image: '/assets/usecase-developers.jpg' },
  { title: 'Multilingual Content', body: 'Localize into 20+ languages instantly. Same script in English, Spanish, French, Arabic, one tool.', image: '/assets/Rectangle 499864.jpg' },
]

const STEPS = [
  { n: '1', title: 'Paste Your Text', body: 'Type or paste any text into the input box: a script, article, product description, or anything you want converted to speech. Up to 5,000 characters per generation.', video: '/assets/tts-step-2-light.webm' },
  { n: '2', title: 'Choose Voice, Language & Emotion', body: 'Select your voice persona, target language, regional accent, and speaking style. Adjust speed between 0.5× and 2.0×. Every setting is available free online.', video: '/assets/tts-step-1-light.webm' },
  { n: '3', title: 'Generate, Preview & Download', body: 'Click Generate. Your AI voice is ready in seconds. Preview it directly in the browser, then download as MP3 or WAV to use in your video, podcast, or project.', video: '/assets/tts-step-3-light.webm' },
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={q.image} alt="" className={styles.bentoImg} />
                <div className={styles.bentoOverlay} />
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
          <div className={styles.stack}>
            {USECASES.map((u, i) => (
              <div
                key={i}
                className={styles.stackCard}
                style={{ top: `calc(80px + ${i * 14}px)`, zIndex: i + 1 }}
              >
                <div className={styles.stackLeft}>
                  <h3 className={styles.stackTitle}>{u.title}</h3>
                  <p className={styles.stackBody}>{u.body}</p>
                </div>
                <div className={styles.stackRight}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={u.image} alt="" className={styles.stackImg} />
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
