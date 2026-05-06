'use client'

import { useState } from 'react'
import styles from './Faq.module.css'

type FaqItem = { q: string; a: string }

const DEFAULT_FAQS: FaqItem[] = [
  {
    q: 'What is AI Audio Studio?',
    a: 'AI Audio Studio is ImagineArt\'s all-in-one audio platform. It combines AI text-to-speech, voice cloning, and music generation in a single workspace. Whether you\'re creating YouTube videos, podcasts, ads, or audiobooks, you can generate every audio element in one place.',
  },
  {
    q: 'Is it free to use?',
    a: 'Yes. The Free plan includes 10,000 characters of text-to-speech per month, 1 voice clone, and limited music generation, with no credit card required. Paid plans unlock commercial usage rights, more characters, and unlimited cloning.',
  },
  {
    q: 'How realistic are the AI voices?',
    a: 'ImagineArt uses leading models including ElevenLabs v3, MiniMax Speech 02 HD, and MiniMax Turbo. The output is broadcast-quality and frequently indistinguishable from human voiceovers.',
  },
  {
    q: 'How does AI voice cloning work?',
    a: 'Upload a 10-second sample of any voice (with permission). Our AI analyzes the tone, pitch, and speaking style, then creates a digital voice model. You can generate unlimited speech in that voice in 70+ languages.',
  },
  {
    q: 'Can I use the audio commercially?',
    a: 'Yes, all paid plans include commercial usage rights. You can use the audio in YouTube videos, podcasts, ads, audiobooks, games, and any other commercial content. The free plan is for personal use only.',
  },
  {
    q: 'What languages are supported?',
    a: 'Text-to-speech and voice cloning support 70+ languages. Music generation supports lyrics in 20+ languages.',
  },
  {
    q: 'How is this different from ElevenLabs or Suno?',
    a: 'ElevenLabs focuses on enterprise voice. Suno focuses on music. ImagineArt brings text-to-speech, voice cloning, and music generation together in one studio, and integrates with our AI image and video tools, so creators can produce complete content from a single platform.',
  },
  {
    q: 'Do I need to download anything?',
    a: 'No. AI Audio Studio runs entirely in your browser. We also offer iOS and Android apps for on-the-go editing, plus an API for developers building voice-powered applications.',
  },
]

function FaqRow({ faq, isOpen, onToggle }: {
  faq: FaqItem
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className={styles.item}>
      <button
        className={styles.trigger}
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span>{faq.q}</span>
        <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
      </button>
      <div className={styles.answer} data-open={isOpen}>
        <div className={styles.answerInner}>
          <p className={styles.answerText}>{faq.a}</p>
        </div>
      </div>
    </div>
  )
}

type FaqProps = {
  faqs?: FaqItem[]
  heading?: string
  sub?: string
}

export default function Faq({ faqs = DEFAULT_FAQS, heading = 'Frequently asked questions', sub = 'Everything you need to know about AI Audio Studio' }: FaqProps) {
  const [openIndex, setOpenIndex] = useState(0)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <section className={styles.section} id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className={styles.inner}>

        <div className={styles.left} data-animate>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.sub}>{sub}</p>
        </div>

        <div className={styles.list} data-animate data-d="1">
          {faqs.map((faq, i) => (
            <FaqRow
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
