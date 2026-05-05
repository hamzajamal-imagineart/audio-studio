import type { Metadata } from 'next'
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
  { title: 'Text to Speech with Emotion', body: 'Choose from 9 emotional styles: natural, expressive, friendly, professional, calm, energetic, sad, angry, or whisper. The AI adjusts pitch, pace, and tone to match.', tag: '9 emotion styles' },
  { title: 'Natural Text to Speech Pacing', body: "MiniMax Speech delivers human-like rhythm and cadence. Sentences breathe naturally. Pauses land where they should. The output doesn't sound mechanical or rushed.", tag: 'MiniMax Speech 2.8 HD' },
  { title: 'Clear Pronunciation Across Accents', body: 'Whether you\'re generating English text to speech in US, UK, Australian or Irish accents, or working in Spanish, French, or Arabic, pronunciation is accurate and clean.', tag: '20+ language variants' },
  { title: 'Speed and Pitch Control', body: 'Adjust playback speed from 0.5× to 2.0× without distorting voice quality. Useful for e-learning content, fast-paced social video, or slow, deliberate narration.', tag: '0.5× to 2.0× speed' },
  { title: '50+ Distinct AI Voices', body: 'Male, female, and gender-neutral AI voices across age ranges and regional styles. Each voice is trained individually, not just pitch-shifted variants of the same model.', tag: '50+ voices' },
  { title: 'Benchmark-Leading TTS Model', body: 'MiniMax Speech 2.8 HD ranks at the top of independent TTS quality evaluations. You\'re not using a legacy voice engine; this is the same generation of AI voice technology used by production audio teams.', tag: 'Top benchmark score' },
]

const USECASES = [
  { title: 'YouTube & Short-Form Video', body: 'Generate AI voiceovers for YouTube videos, Reels, TikToks, and YouTube Shorts. No mic, no recording setup: type your script and export.' },
  { title: 'Podcasts & Audio Content', body: 'Read text aloud for podcast intros, sponsor segments, summaries, or full AI-voiced podcast episodes using multiple voice personas.' },
  { title: 'E-Learning & Training', body: 'Turn course scripts and training materials into natural AI narration. Consistent voice quality across every lesson with no reshoots.' },
  { title: 'Audiobooks & Long-Form', body: 'Convert written content into audio format for distribution on Spotify, Audible, or your own platform using consistent, natural AI voices.' },
  { title: 'Accessibility', body: 'Make written content available to users with visual impairments or reading difficulties. AI read-aloud makes your platform more inclusive.' },
  { title: 'Presentations & Demos', body: 'Add professional narration to slide decks, product demos, and sales materials. Faster than recording, more consistent than human narration.' },
  { title: 'Games & Interactive Media', body: 'Prototype game dialogue, character voices, and interactive story narration without hiring a voice actor for every draft.' },
  { title: 'Multilingual Content', body: 'Localize your content into 20+ languages instantly. Generate the same script in English, Spanish, French, and Arabic with one tool.' },
]

const STEPS = [
  { n: '1', title: 'Paste Your Text', body: 'Type or paste any text into the input box: a script, article, product description, or anything you want converted to speech. Up to 5,000 characters per generation.' },
  { n: '2', title: 'Choose Voice, Language & Emotion', body: 'Select your voice persona, target language, regional accent, and speaking style. Adjust speed between 0.5× and 2.0×. Every setting is available free online.' },
  { n: '3', title: 'Generate, Preview & Download', body: 'Click Generate. Your AI voice is ready in seconds. Preview it directly in the browser, then download as MP3 or WAV to use in your video, podcast, or project.' },
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
        <p className={styles.eyebrow}>AI Text to Speech</p>
        <h1 className={styles.heroHeading}>Turn Text into Natural<br />AI Speech: Free & Online</h1>
        <p className={styles.heroSub}>Paste your text, choose a voice, preview the audio, and create realistic voice output: no complex setup, no software to download.</p>
        <div className={styles.heroCtas}>
          <a href="https://www.imagine.art/voice-studio" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>Try Free Text to Speech</a>
          <a href="https://www.imagine.art/voice-studio" target="_blank" rel="noopener noreferrer" className={styles.btnGhost}>Explore AI Voice Generator</a>
        </div>
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
      <section className={styles.section}>
        <p className={styles.eyebrow}>Voice Quality</p>
        <h2 className={styles.heading}>Realistic Text to Speech with Natural AI Voices</h2>
        <p className={styles.sub}>ImagineArt uses MiniMax Speech 2.8 HD, one of the highest-ranked models on independent TTS benchmarks, to produce natural, expressive voice output that sounds human.</p>
        <div className={styles.grid}>
          {QUALITY.map((q, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.cardTag}>{q.tag}</span>
              <h3 className={styles.cardTitle}>{q.title}</h3>
              <p className={styles.cardBody}>{q.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <p className={styles.eyebrow}>AI Voice Generator</p>
        <h2 className={styles.heading}>Built for Creators, Teams, and Everyday Use</h2>
        <p className={styles.sub}>From YouTube voiceovers to audiobooks to accessibility tools, ImagineArt text to speech fits any workflow that needs natural AI audio.</p>
        <div className={styles.grid}>
          {USECASES.map((u, i) => (
            <div key={i} className={styles.card}>
              <h3 className={styles.cardTitle}>{u.title}</h3>
              <p className={styles.cardBody}>{u.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className={styles.section}>
        <p className={styles.eyebrow}>How It Works</p>
        <h2 className={styles.heading}>Convert Text to Speech in 3 Simple Steps</h2>
        <p className={styles.sub}>No technical setup. No software. Turn written text into audio online in under a minute.</p>
        <div className={styles.steps}>
          {STEPS.map((s, i) => (
            <div key={i} className={styles.step}>
              <span className={styles.stepNum}>{s.n}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardBody}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <p className={styles.eyebrow}>FAQ</p>
        <h2 className={styles.heading}>Text to Speech FAQs</h2>
        <div className={styles.faqs}>
          {FAQS.map((f, i) => (
            <div key={i} className={styles.faq}>
              <h3 className={styles.faqQ}>{f.q}</h3>
              <p className={styles.faqA}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={`${styles.section} ${styles.ctaSection}`}>
        <p className={styles.eyebrow}>Get Started</p>
        <h2 className={styles.heading}>Start Creating Natural AI Voiceovers Today</h2>
        <p className={styles.sub}>Free text to speech: no credit card, no download, no setup. Powered by MiniMax Speech 2.8 HD.</p>
        <div className={styles.heroCtas}>
          <a href="https://www.imagine.art/voice-studio" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>Try Free Text to Speech</a>
          <a href="https://www.imagine.art/voice-studio" target="_blank" rel="noopener noreferrer" className={styles.btnGhost}>Explore Audio Studio</a>
        </div>
      </section>

    </main>
  )
}
