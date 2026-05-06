import Hero from '@/components/Hero'
import ThreeTools from '@/components/ThreeTools'
import Tools from '@/components/Tools'
import Testimonials from '@/components/Testimonials'
import UseCases from '@/components/UseCases'
import BeyondAudio from '@/components/BeyondAudio'
import Pricing from '@/components/Pricing'
import Faq from '@/components/Faq'
import FinalCTA from '@/components/FinalCTA'

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.imagine.art/ai-audio-studio/#webpage",
      "url": "https://www.imagine.art/ai-audio-studio/",
      "name": "AI Voice Generator | AI Audio Studio - ImagineArt",
      "description": "Generate lifelike voiceovers, clone any voice from a 10-second sample, and compose original music — all from one studio.",
      "about": { "@id": "https://www.imagine.art/ai-audio-studio/#software" },
      "breadcrumb": { "@id": "https://www.imagine.art/ai-audio-studio/#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.imagine.art/ai-audio-studio/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.imagine.art/" },
        { "@type": "ListItem", "position": 2, "name": "AI Audio Studio" }
      ]
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.imagine.art/ai-audio-studio/#software",
      "name": "ImagineArt AI Audio Studio",
      "description": "All-in-one AI audio platform combining text-to-speech, voice cloning, and music generation. Generate lifelike voiceovers in 70+ languages, clone any voice from a 10-second sample, and compose original music.",
      "url": "https://www.imagine.art/ai-audio-studio/",
      "applicationCategory": "MultimediaApplication",
      "applicationSubCategory": "AI Voice Generator",
      "operatingSystem": "Web Browser, iOS, Android",
      "browserRequirements": "Requires modern web browser. No download required.",
      "creator": {
        "@id": "https://www.imagine.art/#organization",
        "url": "https://www.imagine.art/",
        "name": "ImagineArt",
        "@type": "Organization"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": ["YouTubers", "Podcasters", "Marketers", "Developers"]
      },
      "keywords": [
        "ai voice generator", "text to speech", "voice cloning", "ai music generator",
        "ai audio studio", "voice isolator", "ai sound effects", "speech enhancer",
        "ai remaster", "audio editor"
      ],
      "sameAs": [
        "https://www.facebook.com/groups/imagineai",
        "https://www.instagram.com/imagineartofficial",
        "https://www.reddit.com/r/ImagineAiArt/",
        "https://discord.com/invite/z7kjUyvAbv"
      ],
      "featureList": [
        "AI Text to Speech in 70+ languages", "Voice Cloning from 10-second sample",
        "AI Music Generator", "Voice Isolator", "AI Sound Effects", "Audio Editor",
        "Speech Enhancer", "AI Remaster", "API Access"
      ],
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "0",
        "highPrice": "250",
        "offerCount": "3",
        "offers": [
          {
            "@type": "Offer",
            "name": "Free Plan",
            "price": "0",
            "priceCurrency": "USD",
            "description": "10,000 chars TTS, 1 voice clone, limited music generation, personal use only",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Standard Plan",
            "price": "50",
            "priceCurrency": "USD",
            "description": "100,000 chars TTS, 5 voice clones, unlimited music generation, commercial license",
            "availability": "https://schema.org/InStock",
            "priceSpecification": { "@type": "UnitPriceSpecification", "price": "50", "priceCurrency": "USD", "unitText": "MONTH" }
          },
          {
            "@type": "Offer",
            "name": "Pro Plan",
            "price": "250",
            "priceCurrency": "USD",
            "description": "Unlimited TTS, unlimited cloning, priority generation, API access, dedicated support",
            "availability": "https://schema.org/InStock",
            "priceSpecification": { "@type": "UnitPriceSpecification", "price": "250", "priceCurrency": "USD", "unitText": "MONTH" }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.imagine.art/ai-audio-studio/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "What is AI Audio Studio?", "acceptedAnswer": { "@type": "Answer", "text": "AI Audio Studio is ImagineArt's all-in-one audio platform. It combines AI text-to-speech, voice cloning, and music generation in a single workspace. Whether you're creating YouTube videos, podcasts, ads, or audiobooks, you can generate every audio element in one place." } },
        { "@type": "Question", "name": "Is it free to use?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The Free plan includes 10,000 characters of text-to-speech per month, 1 voice clone, and limited music generation for personal use. No credit card required to start." } },
        { "@type": "Question", "name": "How realistic are the AI voices?", "acceptedAnswer": { "@type": "Answer", "text": "Our AI voices are designed to be lifelike and indistinguishable from human recordings. The voice cloning technology can replicate a voice from just a 10-second sample with high fidelity, capturing tone, pacing, and emotional nuance." } },
        { "@type": "Question", "name": "How does AI voice cloning work?", "acceptedAnswer": { "@type": "Answer", "text": "Upload a 10-second audio sample of any voice. Our AI analyzes the vocal characteristics — pitch, timbre, speaking style — and creates a digital model that can generate new speech in that voice from any text input." } },
        { "@type": "Question", "name": "Can I use the audio commercially?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. All paid plans (Standard and Pro) include full commercial usage rights. The Free plan is limited to personal use only. Commercial licenses cover YouTube monetization, podcasts, ads, client work, and product integrations." } },
        { "@type": "Question", "name": "What languages are supported?", "acceptedAnswer": { "@type": "Answer", "text": "AI Audio Studio supports voice generation and cloning in over 70 languages, making it ideal for global content creators and marketers localizing campaigns." } },
        { "@type": "Question", "name": "How is this different from ElevenLabs or Suno?", "acceptedAnswer": { "@type": "Answer", "text": "ImagineArt combines text-to-speech, voice cloning, and music generation in a single platform — replacing multiple subscriptions. You also get access to AI image and video generation in the same workspace, making it a complete creative studio rather than a single-purpose tool." } },
        { "@type": "Question", "name": "Do I need to download anything?", "acceptedAnswer": { "@type": "Answer", "text": "No download required. AI Audio Studio runs entirely in your web browser. Mobile apps are also available on the App Store and Google Play for on-the-go creation." } }
      ]
    }
  ]
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
      <Hero />
      <ThreeTools />
      <Tools />
      <Testimonials />
      <UseCases />
      <BeyondAudio />
      <Pricing />
      <Faq />
      <FinalCTA />
    </main>
    </>
  )
}
