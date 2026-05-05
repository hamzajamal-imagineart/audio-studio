import styles from './Tools.module.css'

const BG = '#f7f7f7'

const VoiceIsolatorIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="80" fill={BG}/>
    <polyline
      points="10,32 16,26 20,36 25,22 30,32 34,28 38,34 43,24 48,32 52,28 56,34 60,26 64,32 70,32"
      stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.25"/>
    <line x1="10" y1="42" x2="70" y2="42" stroke="#e11d48" strokeWidth="1.5" strokeDasharray="2 3" opacity="0.3"/>
    <path d="M10 56 Q17.5 48 25 56 Q32.5 64 40 56 Q47.5 48 55 56 Q62.5 64 70 56"
      stroke="#e11d48" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>
)

const SoundEffectsIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="80" fill={BG}/>
    <path d="M10 40 Q17.5 32 25 40 Q32.5 48 40 40 Q47.5 32 55 40 Q62.5 48 70 40"
      stroke="#2563eb" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M10 40 Q17.5 28 25 40 Q32.5 52 40 40 Q47.5 28 55 40 Q62.5 52 70 40"
      stroke="#2563eb" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.45"/>
    <path d="M10 40 Q17.5 24 25 40 Q32.5 56 40 40 Q47.5 24 55 40 Q62.5 56 70 40"
      stroke="#2563eb" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.2"/>
  </svg>
)

const AudioEditorIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="80" fill={BG}/>
    <line x1="12" y1="40" x2="68" y2="40" stroke="#7c3aed" strokeWidth="1.5" opacity="0.2"/>
    <rect x="12" y="30" width="3" height="20" rx="1.5" fill="#7c3aed" opacity="0.3"/>
    <rect x="20" y="24" width="3" height="32" rx="1.5" fill="#7c3aed" opacity="0.55"/>
    <rect x="28" y="28" width="3" height="24" rx="1.5" fill="#7c3aed" opacity="0.7"/>
    <rect x="36" y="22" width="3" height="36" rx="1.5" fill="#7c3aed" opacity="0.9"/>
    <rect x="44" y="27" width="3" height="26" rx="1.5" fill="#7c3aed" opacity="0.65"/>
    <rect x="52" y="31" width="3" height="18" rx="1.5" fill="#7c3aed" opacity="0.4"/>
    <rect x="60" y="34" width="3" height="12" rx="1.5" fill="#7c3aed" opacity="0.25"/>
    <line x1="36" y1="16" x2="36" y2="20" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="33" y1="17" x2="39" y2="17" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const SpeechEnhancerIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="80" fill={BG}/>
    <path d="M10 50 Q17.5 44 25 50 Q32.5 56 40 50 Q47.5 44 55 50 Q62.5 56 70 50"
      stroke="#ea580c" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3"/>
    <path d="M10 36 Q17.5 28 25 36 Q32.5 44 40 36 Q47.5 28 55 36 Q62.5 44 70 36"
      stroke="#ea580c" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M40 36 L40 26" stroke="#ea580c" strokeWidth="2" strokeLinecap="round"/>
    <path d="M36 29 L40 25 L44 29" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const RemasterIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="80" fill={BG}/>
    <path d="M10 46 Q17.5 40 25 46 Q32.5 52 40 46 Q47.5 40 55 46 Q62.5 52 70 46"
      stroke="#0891b2" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3"/>
    <path d="M10 34 Q17.5 26 25 34 Q32.5 42 40 34 Q47.5 26 55 34 Q62.5 42 70 34"
      stroke="#0891b2" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <circle cx="58" cy="24" r="2" fill="#0891b2" opacity="0.8"/>
    <circle cx="64" cy="20" r="1.5" fill="#0891b2" opacity="0.5"/>
    <circle cx="62" cy="27" r="1" fill="#0891b2" opacity="0.4"/>
  </svg>
)

const ICONS: Record<string, React.FC> = {
  'Voice Isolator': VoiceIsolatorIcon,
  'AI Sound Effects': SoundEffectsIcon,
  'Audio Editor': AudioEditorIcon,
  'Speech Enhancer': SpeechEnhancerIcon,
  'AI Remaster': RemasterIcon,
}

const TOOLS = [
  {
    title: 'Voice Isolator',
    desc: 'Remove background noise instantly. Get studio-quality vocals from any recording.',
  },
  {
    title: 'AI Sound Effects',
    desc: 'Add built-in effects and ambient layers. Complete your audio without leaving the studio.',
  },
  {
    title: 'Audio Editor',
    desc: 'Trim, cut, and arrange audio tracks with precision. No software download required.',
  },
  {
    title: 'Speech Enhancer',
    desc: 'Improve clarity and presence of any voice recording in one click.',
  },
  {
    title: 'AI Remaster',
    desc: 'Restore and upgrade old recordings to broadcast quality using AI.',
  },
]

function ToolCard({ tool }: { tool: typeof TOOLS[number] }) {
  const Icon = ICONS[tool.title]
  return (
    <div className={styles.card}>
      <div className={styles.thumb}><Icon /></div>
      <div className={styles.info}>
        <span className={styles.name}>{tool.title}</span>
        <p className={styles.desc}>{tool.desc}</p>
      </div>
    </div>
  )
}

export default function Tools() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>More Tools</p>
        <h2 className={styles.heading}>More audio tools at your fingertips</h2>
        <p className={styles.sub}>
          Beyond voice and music, polish your audio with our complete toolkit.
        </p>
      </div>

      <div className={styles.grid}>
        {TOOLS.slice(0, 3).map((t, i) => <ToolCard key={i} tool={t} />)}
      </div>
      <div className={styles.gridBottom}>
        {TOOLS.slice(3).map((t, i) => <ToolCard key={i} tool={t} />)}
      </div>
    </section>
  )
}
