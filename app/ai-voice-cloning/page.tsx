import type { Metadata } from 'next'
import Faq from '@/components/Faq'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import PromptBox from '@/components/Hero/PromptBox'
import DotCursorEffect from './DotCursorEffect'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'AI Voice Cloning | Clone Any Voice Free | ImagineArt',
  description: 'Clone any voice from a 10-second sample. Generate lifelike speech in 70+ languages with ImagineArt\'s AI voice cloning. Free to start, no credit card.',
}

const CHIPS = [
  { label: '10-Second Sample', sub: 'Instant voice clone' },
  { label: '70+ Languages', sub: 'Cross-language cloning' },
  { label: 'Emotion Controls', sub: '15+ voice styles' },
  { label: 'Studio-Grade Export', sub: 'MP3, WAV & FLAC' },
  { label: 'Commercial License', sub: 'Pro & Enterprise plans' },
]

const STEPS = [
  {
    n: '01',
    title: 'Upload A 10-Second Sample',
    body: 'Record directly in your browser or upload an MP3, WAV, or M4A file. Clean audio with one speaker and no background noise produces the best results.',
  },
  {
    n: '02',
    title: 'AI Analyzes The Voice',
    body: 'The model captures pitch, tone, pace, accent, and speaking style. The analysis runs in seconds.',
  },
  {
    n: '03',
    title: 'Generate Unlimited Speech',
    body: 'Type any script and produce natural-sounding audio in the cloned voice, in 70+ languages, with full control over delivery speed and emotion.',
  },
]

const SUITE_ROWS = [
  {
    tag: 'All-In-One',
    title: 'AI Audio Studio',
    body: 'Voice cloning, text-to-speech, and AI music in one connected workspace. One subscription, every audio tool.',
    link: 'Explore the Audio Studio',
    href: 'https://www.imagine.art/audio',
    external: true,
  },
  {
    tag: 'Text To Speech',
    title: 'AI Text to Speech',
    body: '200+ voices across 70+ languages. Adjust pace, pitch, and emotion. Perfect for videos, podcasts, and e-learning.',
    link: 'Try Text to Speech',
    href: '/ai-text-to-speech',
    external: false,
  },
  {
    tag: 'AI Music',
    title: 'AI Music Generator',
    body: 'Describe the mood, genre, and length, get original royalty-free music in seconds. Ideal for video backgrounds and ad campaigns.',
    link: 'Generate Music',
    href: 'https://www.imagine.art/audio/music/',
    external: true,
  },
]

const COMPARE_ROWS = [
  { label: 'Sample needed',  instant: '10 seconds',                 pro: '3–5 minutes of clean audio' },
  { label: 'Ready in',       instant: 'Under 30 seconds',           pro: '5–10 minutes' },
  { label: 'Quality',        instant: 'High-fidelity, content-ready', pro: 'Studio-grade, broadcast-ready' },
  { label: 'Best for',       instant: 'Creators, podcasters, social content, prototyping', pro: 'Audiobooks, commercial ads, film dubbing, branded content' },
  { label: 'Available on',   instant: 'Free and all paid plans',    pro: 'Pro and Enterprise plans' },
]

const FEATURES = [
  { title: '70+ Languages Supported',       body: 'Generate speech in major world languages including Spanish, French, German, Hindi, Mandarin, Arabic, Japanese, Portuguese, Korean, and Italian.' },
  { title: 'Cross-Language Voice Cloning',  body: 'Clone a voice in English and have it speak fluent Spanish, Japanese, or any supported language while keeping the original tone and identity.' },
  { title: 'Emotion And Style Control',     body: 'Adjust delivery from neutral to excited, sad, calm, or whispered to match your content\'s mood and context.' },
  { title: 'Studio-Quality Export',         body: 'Download in MP3, WAV, or FLAC at up to 48kHz, production-ready for podcasts, video, broadcast, and audiobooks.' },
  { title: 'Pronunciation Editor',          body: 'Fine-tune how specific names, brand terms, or technical words are pronounced for accuracy across every generation.' },
  { title: 'Commercial License Included',   body: 'Use cloned voices in monetized YouTube videos, ads, podcasts, and client work on Pro and Enterprise plans.' },
]

const USE_CASES = [
  { audience: 'YouTubers & Content Creators', body: 'Narrate every video in your own voice without recording. Scale from two videos a week to ten without losing your signature sound or hiring voice talent.' },
  { audience: 'Podcasters',                   body: 'Produce intros, sponsor reads, and full episodes when recording isn\'t possible. Localize your show into Spanish, Hindi, or Mandarin to reach new audiences.' },
  { audience: 'Marketers & Ad Teams',         body: 'Localize one ad script into 70+ languages using a single brand voice. Ship global campaigns in days, not months, without re-booking voice actors.' },
  { audience: 'Audiobook Creators',           body: 'Maintain perfect voice consistency across 8–12 hours of narration. Edit and re-generate any line without re-booking studio time.' },
  { audience: 'Game Studios',                 body: 'Generate NPC dialogue at scale. Test voice direction with cloned actor samples before booking final recording sessions.' },
]

const LANGUAGES = [
  { flag: '🇺🇸', name: 'English US' }, { flag: '🇬🇧', name: 'English UK' },
  { flag: '🇦🇺', name: 'English AU' }, { flag: '🇮🇪', name: 'English IE' },
  { flag: '🇪🇸', name: 'Spanish' },   { flag: '🇫🇷', name: 'French' },
  { flag: '🇩🇪', name: 'German' },    { flag: '🇮🇹', name: 'Italian' },
  { flag: '🇧🇷', name: 'Portuguese' },{ flag: '🇯🇵', name: 'Japanese' },
  { flag: '🇰🇷', name: 'Korean' },    { flag: '🇨🇳', name: 'Chinese' },
  { flag: '🇸🇦', name: 'Arabic' },    { flag: '🇮🇳', name: 'Hindi' },
  { flag: '🇳🇱', name: 'Dutch' },     { flag: '🇷🇺', name: 'Russian' },
  { flag: '🇸🇪', name: 'Swedish' },   { flag: '🇹🇷', name: 'Turkish' },
  { flag: '🇵🇱', name: 'Polish' },    { flag: '🇻🇳', name: 'Vietnamese' },
]

const FAQS = [
  { q: 'What is AI voice cloning?', a: 'AI voice cloning lets you take a short audio sample of someone\'s voice and turn it into a digital version that can say anything you type. ImagineArt\'s voice cloning AI listens to how the person speaks, their pitch, accent, pace, and the small details, and learns to mimic it. With ImagineArt, a 10-second sample is enough to get a working clone that speaks in over 70 languages.' },
  { q: 'How does AI voice cloning work?', a: 'AI voice cloning uses deep learning to analyze a voice\'s unique characteristics, pitch, tone, pace, accent, and pronunciation patterns, from a short audio sample. The model then generates new speech that matches those characteristics, letting the cloned voice speak any text you provide. ImagineArt\'s voice cloning needs only a 10-second sample to produce content-ready output, and longer samples unlock studio-grade Professional Clone mode.' },
  { q: 'How long of a sample do I need to clone a voice?', a: 'ImagineArt needs just a 10-second clean audio sample for Instant Clone mode. For best results, use a recording with no background noise, music, or multiple speakers. Longer samples of 3–5 minutes unlock Professional Clone mode, which delivers broadcast-quality output suitable for audiobooks, commercial ads, and film production.' },
  { q: 'Is AI voice cloning free?', a: 'Yes. ImagineArt\'s free plan includes one voice clone, 10,000 characters of generated speech per month, access to all 70+ languages, and MP3 export. No credit card is required to start. Paid plans unlock more clones, higher character limits, commercial licensing, additional export formats, and access to Professional Clone mode.' },
  { q: 'How realistic does a cloned voice sound?', a: 'Modern AI voice clones sound near-indistinguishable from the original speaker in most contexts. ImagineArt\'s clones capture tone, accent, breathing patterns, and emotional inflection. Quality depends on the source sample: clean audio with one speaker, no background noise, and clear pronunciation produces the most lifelike results.' },
  { q: 'Can I clone a voice into multiple languages?', a: 'Yes. ImagineArt supports cross-language voice cloning across 70+ languages. Clone a voice speaking English and have it speak fluent Spanish, Japanese, French, Hindi, or Arabic while keeping the original speaker\'s tone and vocal identity. This is especially useful for localizing content into multiple markets without hiring separate voice actors.' },
  { q: 'Is it legal to clone someone\'s voice?', a: 'Cloning a voice is legal when you have explicit consent from the voice owner, or when you\'re cloning your own voice. Using someone\'s voice without permission may violate publicity rights, biometric privacy laws, and platform terms of service in many jurisdictions. ImagineArt requires consent verification and prohibits non-consensual cloning.' },
  { q: 'Can I use cloned voices commercially?', a: 'Yes, on paid plans. Pro and Enterprise tiers include a commercial license that covers monetized YouTube videos, paid ads, client work, podcasts with sponsorships, audiobooks, and other revenue-generating projects. The free plan is limited to personal, non-commercial use.' },
  { q: 'What makes ImagineArt voice cloning different?', a: 'ImagineArt is the only platform combining voice cloning with AI image, video, and music generation in one workspace. Most competitors specialize in voice alone, requiring separate subscriptions for related tools. ImagineArt also offers cross-language cloning across 70+ languages, transparent ethics policies with consent verification, and a free plan that includes a real working voice clone, no credit card needed.' },
]

export default function VoiceCloningPage() {
  return (
    <main className={styles.page}>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className={styles.hero}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/voice-cloning-hero.png" alt="" className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroBgOverlay} aria-hidden="true" />
        <h1 className={styles.heroHeading}>AI Voice Cloning: Clone Any Voice In 10 Seconds</h1>
        <p className={styles.heroSub}>Upload a 10-second voice sample to clone tone, pace, and accent with stunning realism. Generate lifelike speech in 70+ languages from one seamless workspace.</p>

        <PromptBox />

        <p className={styles.heroMeta}>Free voice clone · No credit card · 70+ languages</p>
      </section>

      {/* ── Feature chips ────────────────────────────────────── */}
      <section className={styles.chips}>
        {CHIPS.map((c, i) => (
          <div key={i} className={styles.chip}>
            <span className={styles.chipLabel}>{c.label}</span>
            <span className={styles.chipSub}>{c.sub}</span>
          </div>
        ))}
      </section>

      {/* ── How It Works ─────────────────────────────────────── */}
      <section className={`${styles.section} ${styles.sectionDark}`} data-dot-grid>
        <div className={styles.inner}>
          <div className={styles.sectionHeader} data-animate>
            <h2 className={styles.headingLight}>How AI Voice Cloning Works</h2>
            <p className={styles.subLight}>Three steps and under a minute. No audio engineering skills, no software to install.</p>
          </div>

          <div className={styles.stepsList}>
            {STEPS.map((s, i) => (
              <div key={i} className={styles.stepRow} data-animate data-d={String(i + 1)}>
                <span className={styles.stepIndex}>{s.n}</span>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepBody}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.sectionCta} data-animate>
            <a href="https://www.imagine.art/audio/voice-cloning" target="_blank" rel="noopener noreferrer" className={styles.btnPrimaryDark}>Start Cloning Free →</a>
          </div>
        </div>
      </section>

      {/* ── Audio Suite ──────────────────────────────────────── */}
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader} data-animate>
            <h2 className={styles.heading}>ImagineArt AI Audio Workspace</h2>
            <p className={styles.sub}>Voice cloning is one of three AI audio tools in your plan. All in one workspace, one subscription.</p>
          </div>

          <div className={styles.suiteList}>
            {SUITE_ROWS.map((c, i) => (
              <a
                key={i}
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={styles.suiteRow}
                data-animate
                data-d={String(i + 1)}
              >
                <div className={styles.suiteRowLeft}>
                  <span className={styles.suiteTag}>{c.tag}</span>
                  <h3 className={styles.suiteTitle}>{c.title}</h3>
                </div>
                <p className={styles.suiteBody}>{c.body}</p>
                <span className={styles.suiteLink}>{c.link} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Two Ways to Clone ────────────────────────────────── */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader} data-animate>
            <h2 className={styles.heading}>Two Ways To Clone A Voice</h2>
            <p className={styles.sub}>Fast and flexible for content creation, or studio-grade for commercial work.</p>
          </div>

          <div className={styles.compareWrap} data-animate>
            <div className={styles.compareHeader}>
              <div className={styles.compareHeaderEmpty} />
              <div className={styles.compareColHead}>Instant Clone</div>
              <div className={`${styles.compareColHead} ${styles.compareColHeadPro}`}>Professional Clone</div>
            </div>
            {COMPARE_ROWS.map((row, i) => (
              <div key={i} className={styles.compareRow}>
                <span className={styles.compareLabel}>{row.label}</span>
                <span className={styles.compareCell}>{row.instant}</span>
                <span className={`${styles.compareCell} ${styles.compareCellPro}`}>{row.pro}</span>
              </div>
            ))}
          </div>

          <div className={styles.sectionCta} data-animate>
            <a href="https://www.imagine.art/audio/voice-cloning" target="_blank" rel="noopener noreferrer" className={styles.btnGrey}>Try Instant Clone Free →</a>
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────── */}
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader} data-animate>
            <h2 className={styles.heading}>Voice Cloning Features Built For Creators</h2>
            <p className={styles.sub}>Everything you need to clone, customize, and ship audio at scale, without leaving the ImagineArt workspace.</p>
          </div>

          <div className={styles.featureList}>
            {FEATURES.map((f, i) => (
              <div key={i} className={styles.featureRow} data-animate data-d={String(i + 1)}>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureBody}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ────────────────────────────────────────── */}
      <section className={`${styles.section} ${styles.sectionDark}`} data-dot-grid>
        <div className={styles.inner}>
          <div className={styles.sectionHeader} data-animate>
            <h2 className={styles.headingLight}>Who Uses ImagineArt Voice Cloning</h2>
            <p className={styles.subLight}>From solo creators to global brands, voice cloning unlocks faster production and wider reach across every audio-driven channel.</p>
          </div>

          <div className={styles.useCaseList}>
            {USE_CASES.map((u, i) => (
              <div key={i} className={styles.useCaseRow} data-animate data-d={String(i + 1)}>
                <span className={styles.useCaseNum}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className={styles.useCaseAudience}>{u.audience}</h3>
                <p className={styles.useCaseBody}>{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Languages ────────────────────────────────────────── */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.inner}>
          <div className={styles.langIntro} data-animate>
            <h2 className={styles.heading}>Clone In One Language. Speak In 70+.</h2>
            <p className={styles.langStatement}>Clone an English-speaking voice and have it deliver natural-sounding Spanish, Japanese, Arabic, or Portuguese while preserving the original speaker's tone and identity. A single voice asset can power your entire global content strategy, no re-recording, no separate voice actors per market.</p>
          </div>
          <div className={styles.langGrid}>
            {LANGUAGES.map((l, i) => (
              <div key={i} className={styles.langChip}>
                <span className={styles.langFlag}>{l.flag}</span>
                <span>{l.name}</span>
              </div>
            ))}
          </div>
          <div className={styles.langFooter} data-animate>
            <a href="https://www.imagine.art/audio/voice-cloning" target="_blank" rel="noopener noreferrer" className={styles.langMoreLink}>View all 70+ languages →</a>
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────── */}
      <div id="pricing">
        <Pricing />
      </div>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <Faq
        faqs={FAQS}
        heading="Voice Cloning FAQs"
        sub="Everything you want to know about AI voice cloning on ImagineArt"
      />

      {/* ── Testimonials ─────────────────────────────────────── */}
      <Testimonials />

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaCard}>
            <video src="/assets/voice-cloning-tool.mp4" autoPlay loop muted playsInline className={styles.ctaVideo} />
            <div className={styles.ctaOverlay} aria-hidden="true" />
            <div className={styles.ctaContent} data-animate>
              <h2 className={styles.ctaHeading}>Start Cloning Voices Free.</h2>
              <p className={styles.ctaSub}>Your voice. Any language. Any content. No credit card, no commitment, no learning curve.</p>
              <a href="https://www.imagine.art/audio/voice-cloning" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>Clone Your Voice Free →</a>
              <p className={styles.ctaTrust}>Free voice clone · No credit card · 70+ languages</p>
            </div>
          </div>
        </div>
      </section>

      <DotCursorEffect />
    </main>
  )
}
