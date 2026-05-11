import type { Metadata } from 'next'
import Faq from '@/components/Faq'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import PromptBox from '@/components/Hero/PromptBox'
import ThreeTools, { type Card, TtsIcon, CloneIcon, MusicIcon } from '@/components/ThreeTools'
import UseCases, { type UseCase } from '@/components/UseCases'
import BeyondAudio from '@/components/BeyondAudio'
import DotCursorEffect from './DotCursorEffect'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'AI Music Generator - Create Songs Free Online | ImagineArt',
  description: 'Create original songs and instrumentals from a text prompt. Free AI music generator with royalty-free output, no signup required. Try ImagineArt free.',
}

const CHIPS = [
  { label: 'Text to Music', sub: 'Any genre, any mood' },
  { label: 'Up to 4-Min Tracks', sub: 'Full compositions' },
  { label: 'Royalty-Free License', sub: 'On paid plans' },
  { label: 'MP3 + WAV Export', sub: 'Up to 48kHz' },
  { label: 'Lyrics-to-Song Mode', sub: '12+ languages' },
]

const STEPS = [
  {
    n: '01',
    title: 'Describe Your Track',
    body: 'Type a text prompt describing the mood, genre, instruments, tempo, or vibe you want. "Epic cinematic orchestral, 120 BPM" or "chill lo-fi hip hop for studying" — the more detail, the more accurate the output.',
  },
  {
    n: '02',
    title: 'AI Composes Your Music',
    body: 'The model analyzes your prompt and generates a complete track: melody, harmony, rhythm, and instrumentation — in seconds. Each generation produces a unique composition you won\'t find anywhere else.',
  },
  {
    n: '03',
    title: 'Preview, Edit and Download',
    body: 'Listen to your track instantly in the browser. Regenerate, adjust the prompt, or download as MP3 or WAV. Use it in your video, podcast, game, or ad — royalty-free on paid plans.',
  },
]

const FEATURES = [
  { title: 'Text to Music Generation', body: 'Describe any style, mood, or scene in plain text and receive a fully composed track. No musical knowledge required — the AI handles melody, harmony, rhythm, and arrangement automatically.' },
  { title: 'Any Genre, Any Mood', body: 'Generate pop, hip-hop, lo-fi, cinematic, EDM, jazz, classical, rock, ambient, country, R&B, and dozens more. Mix genres in a single prompt for hybrid sounds that match your creative vision.' },
  { title: 'Songs with AI Vocals or Instrumentals Only', body: 'Choose between vocal tracks with AI-generated singing or pure instrumentals. Perfect for background music, podcast intros, YouTube videos, or standalone songs.' },
  { title: 'Up to 4-Minute Tracks', body: 'Generate complete compositions up to 4 minutes long — enough for a full YouTube background track, podcast intro, ad spot, or short film score. Not just 15-second loops.' },
  { title: 'Royalty-Free Commercial License', body: 'Every track generated on a paid plan is royalty-free and cleared for commercial use. Monetized YouTube videos, client work, ads, podcasts, games — no additional licensing fees, no copyright strikes.' },
  { title: 'Studio-Quality Export', body: 'Download in MP3 or WAV at up to 48kHz. Production-ready audio for any platform: Spotify, YouTube, TikTok, broadcast, or your own distribution channel.' },
  { title: 'Lyrics-to-Song Mode', body: 'Paste your own lyrics and let the AI compose music around them. Choose a genre and vocal style, and the generator produces a complete song with your words sung over an original composition.' },
  { title: 'Multi-Language Lyrics Support', body: 'Generate songs with lyrics in English, Spanish, French, Japanese, Korean, Hindi, Portuguese, Arabic, and 12+ additional languages. Localize your music for any market.' },
]

const SUITE_CARDS: Card[] = [
  {
    icon: <MusicIcon />,
    title: 'AI Audio Studio',
    oneLiner: 'Voice cloning, text-to-speech, and AI music generation in one connected workspace. Switch between tools without changing tabs or paying for separate subscriptions.',
    bullets: ['All three tools in one plan', 'No extra subscriptions', 'Commercial license on paid plans', 'Free to start'],
    ctaText: 'Explore the Audio Studio',
    ctaHref: 'https://www.imagine.art/audio',
    video: '/assets/music-generator-tool.mp4',
  },
  {
    icon: <TtsIcon />,
    title: 'AI Text to Speech',
    oneLiner: 'Convert text into lifelike audio with 200+ voices across 70+ languages. Adjust pace, pitch, and emotion. Perfect for videos, podcasts, audiobooks, and e-learning.',
    bullets: ['200+ AI voices', 'Adjust tone, pace, and emotion', 'MP3, WAV, FLAC export', 'Free to start'],
    ctaText: 'Try Text to Speech',
    ctaHref: '/ai-text-to-speech',
    video: '/assets/tts-tool.mp4',
  },
  {
    icon: <CloneIcon />,
    title: 'AI Voice Cloning',
    oneLiner: 'Clone any voice from a 10-second audio sample. Generate speech in 70+ languages while preserving the original tone and identity.',
    bullets: ['10-second sample', 'Cross-language cloning', 'Commercial use on paid plans', 'No studio needed'],
    ctaText: 'Clone a Voice',
    ctaHref: '/ai-voice-cloning',
    video: '/assets/voice-cloning-tool.mp4',
  },
]

const WHO_USES: UseCase[] = [
  { tag: 'For YouTubers', title: 'Generate Unique Background Music For Every Video.', body: 'No copyright claims, no content ID strikes — every track is original and cleared for monetization on paid plans.', video: '/assets/usecase-for-youtubers.mp4', ctaLabel: 'Generate Music Free', ctaHref: 'https://www.imagine.art/audio/music/' },
  { tag: 'For Podcasters', title: 'Custom Intros, Outros, And Transitions In Minutes.', body: 'Create custom intros, outros, transition music, and background beds for your podcast. Match the energy of every episode without searching stock libraries for hours.', video: '/assets/usecase-for-podcast.mp4', ctaLabel: 'Try for Free', ctaHref: 'https://www.imagine.art/audio/music/' },
  { tag: 'For Marketers', title: 'Original Music For Every Ad, In Every Market.', body: 'Produce original music for ad campaigns, product demos, social ads, and brand videos. Generate multiple variations in minutes to A/B test which soundtrack converts best.', video: '/assets/usecase-for-marketers.mp4', ctaLabel: 'Start for Free', ctaHref: 'https://www.imagine.art/audio/music/' },
  { tag: 'For Game Developers', title: 'Prototype Soundtracks Without Hiring A Composer.', body: 'Prototype game soundtracks, menu music, level themes, and ambient backgrounds without hiring a composer for every draft. Iterate on mood and pacing in real time.', video: '/assets/usecase-for-developers.mp4', ctaLabel: 'Try for Free', ctaHref: 'https://www.imagine.art/audio/music/' },
]

const GENRES = [
  { emoji: '🎵', name: 'Lo-Fi / Chill Hop', desc: 'Mellow beats, study-session vibes' },
  { emoji: '🎻', name: 'Cinematic / Epic', desc: 'Orchestral swells, trailer-ready' },
  { emoji: '🎤', name: 'Pop', desc: 'Catchy hooks, radio-friendly' },
  { emoji: '🎧', name: 'Hip-Hop / Rap', desc: 'Hard-hitting 808s, trap hi-hats' },
  { emoji: '⚡', name: 'EDM / Electronic', desc: 'Festival drops, high-energy builds' },
  { emoji: '🎷', name: 'Jazz', desc: 'Smooth sax, cocktail-bar atmosphere' },
  { emoji: '🎹', name: 'Classical', desc: 'Piano sonatas, orchestral depth' },
  { emoji: '🎸', name: 'Rock / Indie', desc: 'Distorted guitars, raw energy' },
  { emoji: '🌊', name: 'Ambient / Meditation', desc: 'Spacious pads, deep relaxation' },
  { emoji: '🤠', name: 'Country / Folk', desc: 'Acoustic guitar, storytelling warmth' },
  { emoji: '🎶', name: 'R&B / Soul', desc: 'Groove-driven rhythm, emotional depth' },
  { emoji: '🥁', name: 'Reggae / Afrobeat', desc: 'Island rhythms, feel-good energy' },
]

const COMPARE_ROWS = [
  { label: 'Cost',           traditional: '$50–$500+ per track (stock) or $1,000+ custom',   ai: 'Free plan available; paid plans at a fraction of stock licensing' },
  { label: 'Speed',          traditional: 'Days to weeks for custom; hours searching stock',  ai: 'Full track generated in under 60 seconds' },
  { label: 'Originality',    traditional: 'Stock tracks shared across thousands of videos',   ai: 'Every track is unique, generated fresh from your prompt' },
  { label: 'Copyright risk', traditional: 'Content ID claims common; exclusivity costs extra', ai: 'Royalty-free, no Content ID claims on paid plans' },
  { label: 'Iteration',      traditional: 'Revisions cost time and money',                    ai: 'Regenerate or adjust the prompt instantly, unlimited variations' },
  { label: 'Scalability',    traditional: 'One track at a time; each project restarts',       ai: '10 tracks in the time it takes to license one' },
]

const FAQS = [
  { q: 'What is an AI music generator?', a: 'An AI music generator is a tool that uses artificial intelligence to compose original music from a text prompt. You describe the genre, mood, instruments, or tempo you want, and the AI produces a complete track: melody, harmony, rhythm, and arrangement, in seconds. ImagineArt\'s AI music generator creates unique, royalty-free compositions that are ready to use in videos, podcasts, games, ads, and any other project.' },
  { q: 'Is the AI music generator free?', a: 'Yes. ImagineArt offers a free AI music generator with no signup required. The free plan includes 10 generations per month, tracks up to 2 minutes, MP3 export, and access to all genres and moods. No credit card is needed to start. Paid plans unlock unlimited generation, longer tracks, WAV export, commercial licensing, and lyrics-to-song mode.' },
  { q: 'How does AI music generation work?', a: 'ImagineArt\'s AI music generator uses advanced deep learning models trained on a vast range of musical styles and structures. When you enter a text prompt, the model analyzes your description and generates a complete original composition, including melody, chord progressions, instrumentation, and arrangement. The output is unique to your prompt and is not sampled or copied from existing songs.' },
  { q: 'Can I use AI-generated music commercially?', a: 'Yes, on paid plans. Pro and Enterprise tiers include a royalty-free commercial license that covers monetized YouTube videos, paid ads, client work, podcasts, audiobooks, games, and any other revenue-generating content. The free plan is limited to personal, non-commercial use.' },
  { q: 'What genres can the AI music generator create?', a: 'ImagineArt\'s AI music generator supports virtually any genre including pop, hip-hop, lo-fi, EDM, cinematic, jazz, classical, rock, ambient, country, R&B, reggae, Afrobeat, trap, folk, and more. You can also combine genres in a single prompt for unique hybrid tracks.' },
  { q: 'Can I generate songs with lyrics?', a: 'Yes. ImagineArt supports a lyrics-to-song mode where you paste your own lyrics and the AI composes music around them, including AI-generated vocals. You can choose male or female vocal styles and select from multiple genres. Lyrics are supported in English and 12+ additional languages.' },
  { q: 'How long can AI-generated tracks be?', a: 'Free plan tracks can be up to 2 minutes. Paid plans support tracks up to 4 minutes, long enough for full YouTube background music, podcast segments, ad spots, or short film scores.' },
  { q: 'Do I need to sign up to use the AI music generator?', a: 'No. You can try ImagineArt\'s AI music generator free online with no signup, no account creation, and no credit card. Just type a prompt and generate. Creating an account unlocks saved tracks, more generations, and additional features.' },
  { q: 'Will AI-generated music trigger YouTube Content ID claims?', a: 'No. Every track is composed uniquely from your prompt. AI-generated music from ImagineArt is not sourced from copyrighted recordings and is not registered in Content ID databases. On paid plans, you receive full commercial rights with no copyright risk for monetized content.' },
  { q: 'How is ImagineArt different from Suno or Udio?', a: 'Suno and Udio are dedicated music generation tools. ImagineArt combines AI music generation with text-to-speech, voice cloning, AI image generation, and AI video generation in one platform. If you need music, voiceovers, and visuals for the same project, ImagineArt replaces three or four separate subscriptions with one workspace.' },
  { q: 'Can I create instrumental music only?', a: 'Yes. The AI music generator supports both vocal tracks and instrumental-only output. Select instrumental mode when generating and the AI will produce a complete composition without vocals, ideal for background music, podcast beds, video scores, and game soundtracks.' },
  { q: 'What is the best free AI music generator?', a: 'ImagineArt is one of the best free AI music generators available online. It offers 10 free generations per month with no signup, access to all genres and moods, MP3 download, and a browser-based interface that works on desktop and mobile. Unlike many competitors, the free plan produces full-length, usable tracks without watermarks or 10-second previews.' },
]

export default function AIMusicGeneratorPage() {
  return (
    <main className={styles.page}>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <h1 className={styles.heroHeading}>AI Music Generator: Create Original Songs from Text</h1>
        <p className={styles.heroSub}>Describe a mood, genre, or vibe and generate original music in seconds. Create royalty-free songs and instrumentals with AI, no musical skills, no software to download, no signup required.</p>
        <PromptBox />
        <p className={styles.heroMeta}>Free to start · No credit card · No signup · Royalty-free output</p>
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
            <h2 className={styles.headingLight}>How the AI Music Generator Works</h2>
            <p className={styles.subLight}>Creating original music with ImagineArt takes three steps and under a minute. No music theory, no DAW, no software to install, no credit card required.</p>
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
            <a href="https://www.imagine.art/audio/music/" target="_blank" rel="noopener noreferrer" className={styles.btnPrimaryDark}>Generate Your First Track Free →</a>
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────── */}
      <section className={`${styles.section} ${styles.sectionWhite}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader} data-animate>
            <h2 className={styles.heading}>AI Music Generator Features Built for Creators</h2>
            <p className={styles.sub}>Everything you need to compose, customize, and ship original music at scale, without leaving the ImagineArt workspace.</p>
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

      {/* ── Audio Workspace ───────────────────────────────────── */}
      <ThreeTools
        heading="ImagineArt AI Audio Workspace"
        sub="AI music generation is one of three AI audio tools included in your ImagineArt plan. Create voiceovers with text-to-speech, clone any voice from a sample, and compose original music, all in one workspace, one subscription."
        cards={SUITE_CARDS}
      />

      {/* ── Genre Showcase ───────────────────────────────────── */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader} data-animate>
            <h2 className={styles.heading}>Generate Music in Any Genre</h2>
            <p className={styles.sub}>From cinematic orchestral scores to lo-fi study beats, the AI music generator handles every style.</p>
          </div>
          <div className={styles.genreGrid}>
            {GENRES.map((g, i) => (
              <div key={i} className={styles.genreTile} data-animate data-d={String((i % 4) + 1)}>
                <span className={styles.genreEmoji}>{g.emoji}</span>
                <div className={styles.genreText}>
                  <span className={styles.genreName}>{g.name}</span>
                  <span className={styles.genreDesc}>{g.desc}</span>
                </div>
                <div className={styles.genrePlay} aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 2L12 7L3 12V2Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.sectionCta} data-animate>
            <a href="https://www.imagine.art/audio/music/" target="_blank" rel="noopener noreferrer" className={styles.btnGrey}>Try Any Genre Free →</a>
          </div>
        </div>
      </section>

      {/* ── Use Cases ────────────────────────────────────────── */}
      <UseCases
        heading="Built for Creators, Teams, and Every Project"
        sub="From YouTube background tracks to commercial ad scores, the AI music generator fits any workflow that needs original, royalty-free music."
        useCases={WHO_USES}
      />

      {/* ── Comparison ───────────────────────────────────────── */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader} data-animate>
            <h2 className={styles.heading}>Why Creators Choose AI Music Generation</h2>
            <p className={styles.sub}>Traditional music licensing and production are expensive, slow, and rigid. AI music generation gives creators speed, originality, and control at a fraction of the cost.</p>
          </div>
          <div className={styles.compareWrap} data-animate>
            <div className={styles.compareHeader}>
              <div className={styles.compareHeaderEmpty} />
              <div className={styles.compareColHead}>Traditional Production / Stock</div>
              <div className={`${styles.compareColHead} ${styles.compareColHeadPro}`}>ImagineArt AI Music</div>
            </div>
            {COMPARE_ROWS.map((row, i) => (
              <div key={i} className={styles.compareRow}>
                <span className={styles.compareLabel}>{row.label}</span>
                <span className={styles.compareCell}>{row.traditional}</span>
                <span className={`${styles.compareCell} ${styles.compareCellPro}`}>{row.ai}</span>
              </div>
            ))}
          </div>
          <div className={styles.sectionCta} data-animate>
            <a href="https://www.imagine.art/audio/music/" target="_blank" rel="noopener noreferrer" className={styles.btnGrey}>Try ImagineArt Free →</a>
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
        heading="AI Music Generator FAQs"
        sub="Everything you want to know about AI music generation on ImagineArt"
      />

      {/* ── Testimonials ─────────────────────────────────────── */}
      <Testimonials />

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaCard}>
            <video src="/assets/music-generator-tool.mp4" autoPlay loop muted playsInline className={styles.ctaVideo} />
            <div className={styles.ctaOverlay} aria-hidden="true" />
            <div className={styles.ctaContent} data-animate>
              <h2 className={styles.ctaHeading}>Start Creating Music with AI, Free.</h2>
              <p className={styles.ctaSub}>Your prompt. Your genre. Your track. Try ImagineArt's AI music generator free, no signup, no credit card, no learning curve.</p>
              <a href="https://www.imagine.art/audio/music/" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>Generate Music Free →</a>
              <p className={styles.ctaTrust}>Free to start · No credit card · No signup · Royalty-free output</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cross-sell ───────────────────────────────────────── */}
      <BeyondAudio />

      <DotCursorEffect />
    </main>
  )
}
