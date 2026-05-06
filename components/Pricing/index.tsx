import PricingClient, { type Plan } from './PricingClient'

const API_URL =
  'https://dev-payment-gateway.vyro.ai/apis/v1/stripe/subscription/recurring?country=US&product=imagine'

const PLAN_ORDER = ['basic', 'standard', 'ultimate', 'creator']

type PlanMeta = Omit<Plan, 'id' | 'name' | 'credits' | 'prices' | 'totals'>

const PLAN_META: Record<string, PlanMeta> = {
  basic: {
    subtitle: 'For newcomers taking their first step',
    topBanner: null,
    bannerStyle: null,
    discountBadge: '-30%',
    ctaStyle: 'ghost',
    features: [
      { text: 'Up to ~600 Image Generations/month', available: true },
      { text: 'Up to ~97 Video Generations/month', available: true },
      { text: 'General Commercial Terms', available: true },
      { text: 'Image Generation Visibility: Public', available: true },
      { text: '4 Concurrent Image Generations', available: true },
      { text: '2 concurrent Video Generations', available: true },
      { text: 'Priority Support', available: true },
      { text: '1 Personalize Element', available: true },
      { text: 'Higher priority in generation queue', available: false },
    ],
    complementary: ['All GPT Models', 'All Gemini Models', 'All Claude Models'],
    unlimited: [
      { name: 'ImagineArt 2.0', available: false, badge: null },
      { name: 'ImagineArt 1.5 PRO', available: false, badge: null },
      { name: 'Nano Banana 2', available: 'partial', badge: null },
    ],
    seedance: false,
  },
  standard: {
    subtitle: 'For rising creators to level up their game',
    topBanner: null,
    bannerStyle: null,
    discountBadge: '-30%',
    ctaStyle: 'ghost',
    features: [
      { text: 'Up to ~1.6k Image Generations/month', available: true },
      { text: 'Up to ~260 Video Generations/month', available: true },
      { text: 'General Commercial Terms', available: true },
      { text: 'Image Generation Visibility: Private', available: true },
      { text: '8 Concurrent Image Generations', available: true },
      { text: '3 concurrent Video Generations', available: true },
      { text: 'Priority Support', available: true },
      { text: 'Higher priority in generation queue', available: true },
      { text: 'Upto 5 Personalize Elements', available: true },
      { text: '3 users included', available: true },
    ],
    complementary: ['All GPT Models', 'All Gemini Models', 'All Claude Models'],
    unlimited: [
      { name: 'ImagineArt 2.0', available: false, badge: null },
      { name: 'ImagineArt 1.5 PRO', available: false, badge: null },
      { name: 'Nano Banana 2', available: 'partial', badge: null },
    ],
    seedance: false,
  },
  ultimate: {
    subtitle: 'Peak performance for pros',
    topBanner: '♥ MOST POPULAR',
    bannerStyle: 'orange',
    discountBadge: '-38%',
    ctaStyle: 'white',
    features: [
      { text: 'Up to ~3.2k Image Generations/month', available: true },
      { text: 'Up to ~530 Video Generations/month', available: true },
      { text: 'All styles and models', available: true },
      { text: 'General Commercial Terms', available: true },
      { text: 'Image Generation Visibility: Private', available: true },
      { text: '12 Concurrent Image Generations', available: true },
      { text: '4 concurrent Video Generations', available: true },
      { text: 'Priority Support', available: true },
      { text: 'Higher priority in generation queue', available: true },
      { text: 'Upto 30 Personalize Elements', available: true },
      { text: '6 users included', available: true },
    ],
    complementary: ['All GPT Models', 'All Gemini Models', 'All Claude Models'],
    unlimited: [
      { name: 'ImagineArt 2.0', available: true, badge: 'UNLIMITED' },
      { name: 'ImagineArt 1.5 PRO', available: true, badge: 'UNLIMITED' },
      { name: 'Nano Banana 2', available: 'partial', badge: null },
    ],
    seedance: true,
  },
  creator: {
    subtitle: 'A full production engine for powerhouses',
    topBanner: '✦ SPECIAL OFFER',
    bannerStyle: 'pink',
    discountBadge: '-50%',
    badgeExtra: 'LIMITED OFFER',
    ctaStyle: 'pink',
    features: [
      { text: 'Up to ~20K Image Generations/month', available: true },
      { text: 'Up to ~3.4K Video Generations/month', available: true },
      { text: 'All styles and models', available: true },
      { text: 'General Commercial Terms', available: true },
      { text: 'Image Generation Visibility: Private', available: true },
      { text: '16 Concurrent Image Generations', available: true },
      { text: '5 concurrent Video Generations', available: true },
      { text: 'Priority Support', available: true },
      { text: 'Higher priority in generation queue', available: true },
      { text: '20 users included', available: true },
    ],
    complementary: ['All GPT Models', 'All Gemini Models', 'All Claude Models'],
    unlimited: [
      { name: 'ImagineArt 2.0', available: true, badge: 'UNLIMITED' },
      { name: 'ImagineArt 1.5 PRO', available: true, badge: 'UNLIMITED' },
      { name: 'Nano Banana 2', available: true, badge: 'UNLIMITED' },
    ],
    seedance: true,
  },
}

function formatTokens(n: number): string {
  if (n >= 1_000_000) return `${n / 1_000_000}M`
  if (n >= 1_000) return `${Math.round(n / 1_000)}K`
  return `${n}`
}

async function fetchPlans(): Promise<Plan[]> {
  const res = await fetch(API_URL, { next: { revalidate: 3600 } })
  const data = await res.json()

  const mapped: Plan[] = []

  for (const apiPlan of data.result) {
    const id = apiPlan.name.toLowerCase()
    const meta = PLAN_META[id]
    if (!meta) continue

    const prices = { monthly: 0, quarterly: 0, yearly: 0 }
    const totals = { quarterly: 0, yearly: 0 }
    let credits = ''

    for (const p of apiPlan.StripePrice) {
      if (p.billingInterval === 'monthly') {
        prices.monthly = p.price
        credits = formatTokens(p.tokens)
      } else if (p.billingInterval === 'quarterly') {
        totals.quarterly = p.price
        prices.quarterly = Math.round(p.price / 3)
      } else if (p.billingInterval === 'yearly') {
        totals.yearly = p.price
        prices.yearly = Math.round(p.price / 12)
      }
    }

    mapped.push({ id, name: apiPlan.name, credits, prices, totals, ...meta })
  }

  return PLAN_ORDER.map(id => mapped.find(p => p.id === id)!).filter(Boolean)
}

export default async function Pricing() {
  const plans = await fetchPlans()
  return <PricingClient plans={plans} />
}
