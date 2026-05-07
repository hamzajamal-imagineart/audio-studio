import type { Metadata } from 'next'
import Faq from '@/components/Faq'
import PromptBox from '@/components/Hero/PromptBox'
import StackCards from './StackCards'
import DotCursorEffect from './DotCursorEffect'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'AI Text to Speech | Free & Online | ImagineArt Audio Studio',
  description: 'Turn text into natural AI speech online. Paste your text, choose a voice, preview the audio, and create realistic voice output: no complex setup, no software to download.',
}

const FEATURES = [
  { label: 'Top Ranked TTS Models', sub: 'MiniMax 2.8 & ElevenLabs v3' },
  { label: '20+ Languages', sub: 'Global accent support' },
  { label: 'Emotion Controls', sub: '15+ voice styles' },
  { label: 'Online & Instant', sub: 'No software download' },
  { label: 'All-in-One Studio', sub: 'Image · Video · Audio' },
]


const QUALITY = [
  { title: 'Text to speech with emotion', tag: '15+ emotion styles', image: '/assets/usecase-podcasters-new.jpg' },
  { title: 'Natural text to speech pacing', tag: 'MiniMax Speech 2.8 HD', image: '/assets/Rectangle 499863.jpg' },
  { title: 'Clear pronunciation across accents', tag: '20+ language variants', image: '/assets/Rectangle 499861.jpg' },
  { title: 'Speed and pitch control', tag: '0.5× to 2.0× speed', image: '/assets/Rectangle 499862.jpg' },
  { title: '50+ distinct AI voices', tag: '50+ voices', image: '/assets/Rectangle 49986.jpg' },
  { title: 'Benchmark-leading TTS model', tag: 'Top benchmark score', image: '/assets/Rectangle 499865.jpg' },
]

const USECASES = [
  { title: 'YouTube & short-form video', body: 'Generate AI voiceovers for YouTube videos, Reels, TikToks, and Shorts. No mic, no setup.', image: '/assets/tts-usecase-56.jpg', bg: 'linear-gradient(135deg, #f9fafa 0%, #ede8e0 100%)' },
  { title: 'Podcasts & audio content', body: 'Produce broadcast-quality narration for podcast intros, sponsor reads, or full AI-voiced episodes.', image: '/assets/tts-usecase-57.jpg', bg: 'linear-gradient(135deg, #6e7c7e 0%, #9bb4b8 100%)' },
  { title: 'E-learning & training', body: 'Turn course scripts into consistent AI narration. No reshoots, no re-recording.', image: '/assets/tts-usecase-58.jpg', bg: 'linear-gradient(135deg, #f8f8f9 0%, #e4ecff 100%)' },
  { title: 'Audiobooks & long-form', body: 'Convert written content into audio ready for Spotify, Audible, or your own platform.', image: '/assets/tts-usecase-59.jpg', bg: 'linear-gradient(135deg, #f6ede6 0%, #e8ddd0 100%)' },
  { title: 'Screen reader & accessibility', body: 'Make written content available to users with visual impairments or reading difficulties.', image: '/assets/tts-usecase-60.jpg', bg: 'linear-gradient(135deg, #fefffe 0%, #f0ece2 100%)' },
  { title: 'Presentations & demos', body: 'Add professional narration to slide decks and product demos. Faster and more consistent than recording.', image: '/assets/tts-usecase-61.jpg', bg: 'linear-gradient(135deg, #f3f4f8 0%, #e4e6f2 100%)' },
  { title: 'Games & interactive media', body: 'Prototype NPC dialogue and interactive story narration without hiring a voice actor for every draft.', image: '/assets/tts-usecase-62.jpg', bg: 'linear-gradient(135deg, #f6f9fe 0%, #dfe4f0 100%)' },
  { title: 'Multilingual content', body: 'Localize into 20+ languages instantly. Same script in English, Spanish, French, Arabic, one tool.', image: '/assets/tts-usecase-63.jpg', bg: 'linear-gradient(135deg, #f4fafc 0%, #ddeef8 100%)' },
]

const LANGUAGES = [
  { flag: '🇺🇸', name: 'English US' },
  { flag: '🇬🇧', name: 'English UK' },
  { flag: '🇦🇺', name: 'English AU' },
  { flag: '🇮🇪', name: 'English IE' },
  { flag: '🇪🇸', name: 'Spanish' },
  { flag: '🇫🇷', name: 'French' },
  { flag: '🇩🇪', name: 'German' },
  { flag: '🇮🇹', name: 'Italian' },
  { flag: '🇧🇷', name: 'Portuguese' },
  { flag: '🇯🇵', name: 'Japanese' },
  { flag: '🇰🇷', name: 'Korean' },
  { flag: '🇨🇳', name: 'Chinese' },
  { flag: '🇸🇦', name: 'Arabic' },
  { flag: '🇮🇳', name: 'Hindi' },
  { flag: '🇳🇱', name: 'Dutch' },
  { flag: '🇷🇺', name: 'Russian' },
  { flag: '🇸🇪', name: 'Swedish' },
  { flag: '🇹🇷', name: 'Turkish' },
  { flag: '🇵🇱', name: 'Polish' },
  { flag: '🇻🇳', name: 'Vietnamese' },
]

const ACCENTS = [
  { flag: '🇺🇸', name: 'American', code: 'US English', desc: 'Neutral, broadcast standard' },
  { flag: '🇬🇧', name: 'British', code: 'UK English', desc: 'RP, crisp and authoritative' },
  { flag: '🇦🇺', name: 'Australian', code: 'AU English', desc: 'Friendly, approachable' },
  { flag: '🇮🇪', name: 'Irish', code: 'IE English', desc: 'Warm, natural cadence' },
]

const STEPS = [
  { n: '1', title: 'Paste your text', body: 'Type or paste any text into the input box: a script, article, product description, or anything you want converted to speech. Up to 5,000 characters per generation.', video: '/assets/tts-step-2-light.webm' },
  { n: '2', title: 'Choose voice, language & emotion', body: 'Select your voice persona, target language, regional accent, and speaking style. Adjust speed between 0.5× and 2.0×. Every setting is available free online.', video: '/assets/tts-step-1-light.webm' },
  { n: '3', title: 'Generate, preview & download', body: 'Click Generate. Your AI voice is ready in seconds. Preview it directly in the browser, then download as MP3 or WAV to use in your video, podcast, or project.', video: '/assets/tts-step-3-light.webm' },
]

const FAQS = [
  { q: 'What is text to speech?', a: 'Text to speech (TTS) is a technology that converts written text into spoken audio using an AI-generated voice. ImagineArt text to speech produces natural, human-like voices rather than robotic-sounding output, and supports multiple languages, accents, and emotional styles.' },
  { q: 'Is ImagineArt text to speech free?', a: 'Yes. ImagineArt offers free text to speech access for all users. You can generate AI voices online and download the output as MP3 without a paid subscription. The free plan includes a monthly character allowance, enough for scripts, social content, and short-form voiceovers.' },
  { q: 'How do I convert text to speech online?', a: 'Paste your text into the input field, choose a voice, language, accent, and emotion style, then click Generate. Your audio will be ready to preview and download in seconds, no software installation required.' },
  { q: 'Can I download the generated voice?', a: 'Yes. After generating your AI voice, you can download the audio as an MP3 file directly from the tool. MP3 download is available on the free plan. Premium plans also support WAV format for higher-quality audio output.' },
  { q: 'Can I use text to speech for YouTube videos?', a: 'Yes. ImagineArt AI text to speech is widely used for YouTube voiceovers, explainer videos, tutorials, and short-form content. The natural AI voices sound clear and engaging in video productions. You own the audio you generate and can use it commercially on supported plans.' },
  { q: 'What is the best free text to speech tool?', a: 'ImagineArt offers one of the best free text to speech tools available online. It combines realistic AI voices powered by MiniMax Speech 2.8 HD, 20+ languages, emotion and style controls, and a clean browser-based interface, all available free with no software download required.' },
  { q: 'Can AI read text with emotion?', a: 'Yes. ImagineArt AI text to speech supports emotion and speaking style controls, including natural, expressive, friendly, professional, calm, energetic, sad, angry, and whisper. This makes the generated voice sound contextually appropriate rather than flat or robotic.' },
  { q: 'Does ImagineArt support different text to speech accents?', a: 'Yes. ImagineArt supports text to speech in 20+ languages including English (US, UK, Australian, Irish), Spanish, French, German, Italian, Japanese, Arabic, Hindi, and more. You can select the language and accent to match your target audience.' },
  { q: 'What is the most realistic text to speech available?', a: 'ImagineArt uses MiniMax Speech 2.8 HD, a top-ranked model on industry TTS benchmarks, to deliver some of the most realistic text to speech audio available online. The model produces natural pacing, clear pronunciation, and expressive voice output that closely mimics human speech patterns.' },
  { q: 'Can I use text to speech on mobile?', a: 'Yes. ImagineArt text to speech works fully in mobile browsers on iOS and Android. The interface is responsive and optimized for phone and tablet use. No app download is required, open the page in your browser and start generating.' },
  { q: 'What is the difference between text to speech and an AI voice generator?', a: 'Text to speech converts written text into audio using a pre-built AI voice. An AI voice generator can also create or clone custom voices, adjust vocal characteristics, and produce audio at scale. ImagineArt combines both, it offers standard text to speech alongside AI voice cloning and a full audio studio.' },
]

export default function TextToSpeechPage() {
  return (
    <main className={styles.page}>

      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.heroHeading}>Turn text into natural<br />AI speech</h1>
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
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader} data-animate>
            <h2 className={styles.heading}>Realistic text to speech with natural AI voices</h2>
            <p className={styles.sub}>ImagineArt leverages the leading TTS models from MiniMax Speech 2.8 to ElevenLabs v3, to produce natural, expressive voice output that sounds human.</p>
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
      <section className={`${styles.section} ${styles.sectionDark}`} data-dot-grid>
        <div className={styles.inner}>
          <div className={styles.sectionHeader} data-animate>
            <h2 className={styles.headingLight}>Built for creators, teams, and everyday use</h2>
            <p className={styles.subLight}>From YouTube voiceovers to audiobooks to accessibility tools, ImagineArt text to speech fits any workflow that needs natural AI audio.</p>
          </div>
          <StackCards usecases={USECASES} />
        </div>
      </section>

      {/* Languages & Accents */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader} data-animate>
            <h2 className={styles.heading}>Generate AI speech in 20+ languages</h2>
            <p className={styles.sub}>Voices are native to each language, not translated or pitch-shifted.</p>
          </div>
          <div className={styles.langGrid}>
            {LANGUAGES.map((l, i) => (
              <div key={i} className={styles.langChip}>
                <span className={styles.langFlag}>{l.flag}</span>
                <span>{l.name}</span>
              </div>
            ))}
          </div>
          <div className={styles.accentDivider}>
            <h3 className={styles.accentHeading}>English text to speech accents</h3>
            <p className={styles.accentSub}>Creating content for a specific English-speaking audience? Choose the accent that matches your market.</p>
          </div>
          <div className={styles.accentGrid}>
            {ACCENTS.map((a, i) => (
              <div key={i} className={styles.accentCard} data-animate data-d={String(i + 1)}>
                <span className={styles.accentFlag}>{a.flag}</span>
                <span className={styles.accentName}>{a.name}</span>
                <span className={styles.accentCode}>{a.code}</span>
                <p className={styles.accentDesc}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className={`${styles.section} ${styles.sectionDark}`} data-dot-grid>
        <div className={styles.inner}>
          <div className={styles.sectionHeader} data-animate>
            <h2 className={styles.headingLight}>From text to audio in 3 steps</h2>
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
        sub="Everything you want to know about AI text to speech on ImagineArt"
      />

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaLeft} data-animate>
            <h2 className={styles.ctaHeading}>Your voice,<br />everywhere.</h2>
            <p className={styles.ctaSub}>Free to start. No credit card, no download, no setup. Powered by MiniMax Speech 2.8 and ElevenLabs v3.</p>
          </div>
          <div className={styles.ctaRight} data-animate data-d="1">
            <a href="https://www.imagine.art/audio" target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>Try Free Text to Speech</a>
            <a href="https://www.imagine.art/audio" target="_blank" rel="noopener noreferrer" className={styles.btnGhost}>Explore Audio Studio</a>
          </div>
        </div>
      </section>

      <DotCursorEffect />
    </main>
  )
}
