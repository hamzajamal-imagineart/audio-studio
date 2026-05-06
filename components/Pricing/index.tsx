import styles from './Pricing.module.css'

type Plan = {
  name: string
  subtitle: string
  originalPrice: string
  price: string
  badge?: string
  features: string[]
  ctaHref: string
  accent: string
  cardBg: string
  ctaVariant: 'white' | 'accent'
}

const plans: Plan[] = [
  {
    name: 'Free',
    subtitle: 'Get started with AI audio at no cost',
    originalPrice: '$49',
    price: '$0',
    features: [
      '10,000 chars TTS',
      '1 voice clone',
      'Limited music gen',
      'Personal use only',
    ],
    ctaHref: 'https://www.imagine.art/subscription',
    accent: '#3A86FF',
    cardBg: '#0a1428',
    ctaVariant: 'white',
  },
  {
    name: 'Standard',
    subtitle: 'The smart choice for professionals creating daily',
    originalPrice: '$79',
    price: '$50',
    badge: '✦  BEST VALUE',
    features: [
      '100,000 chars TTS',
      '5 voice clones',
      'Unlimited music gen',
      'Commercial license',
    ],
    ctaHref: 'https://www.imagine.art/subscription',
    accent: '#FB5607',
    cardBg: '#1c0800',
    ctaVariant: 'white',
  },
  {
    name: 'Pro',
    subtitle: 'Maximum power for studios and agencies',
    originalPrice: '$580',
    price: '$250',
    badge: '◈  MOST POPULAR',
    features: [
      'Unlimited TTS',
      'Unlimited cloning',
      'Priority generation',
      'API access',
      'Dedicated support',
    ],
    ctaHref: 'https://www.imagine.art/subscription',
    accent: '#FF006E',
    cardBg: '#1f0015',
    ctaVariant: 'accent',
  },
]

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.inner}>

        <div className={styles.header}>
          <h2 className={styles.h2}>Start free. Upgrade when you need more.</h2>
          <p className={styles.sub}>All paid plans include commercial usage rights. Cancel anytime.</p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={styles.card}
              style={{ '--accent': plan.accent, '--card-bg': plan.cardBg } as React.CSSProperties}
            >
              <div className={plan.badge ? styles.badge : styles.badgePlaceholder}>
                {plan.badge ?? ''}
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.subtitle}>{plan.subtitle}</p>

                <div className={styles.priceRow}>
                  <span className={styles.originalPrice}>{plan.originalPrice}</span>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.priceSuffix}>/month</span>
                </div>
                <p className={styles.perMonth}>per month</p>

                <a
                  href={plan.ctaHref}
                  className={`${styles.cta} ${plan.ctaVariant === 'accent' ? styles.ctaAccent : styles.ctaWhite}`}
                >
                  Select Plan
                </a>

                <hr className={styles.divider} />

                <ul className={styles.featureList}>
                  {plan.features.map((f) => (
                    <li key={f} className={styles.featureItem}>
                      <span className={styles.check}>&#x2713;</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <a href="#pricing-compare" className={styles.compareBtn}>
            Compare all features &nbsp;&#x2192;
          </a>
        </div>

      </div>
    </section>
  )
}
