'use client'
import { useState } from 'react'
import styles from './Pricing.module.css'

type Interval = 'monthly' | 'quarterly' | 'yearly'
type Feature = { text: string; available: boolean | 'partial' }
type UnlimitedItem = { name: string; available: boolean | 'partial'; badge: string | null }

export type Plan = {
  id: string
  name: string
  subtitle: string
  credits: string
  topBanner: string | null
  bannerStyle: 'orange' | 'pink' | null
  discountBadge: string
  badgeExtra?: string
  ctaStyle: 'ghost' | 'white' | 'pink'
  prices: { monthly: number; quarterly: number; yearly: number }
  totals: { quarterly: number; yearly: number }
  features: Feature[]
  complementary: string[]
  unlimited: UnlimitedItem[]
  seedance: boolean
}

type CardTheme = {
  outerBg?: string
  cardBg: string
  cardBorder?: string
  isLight: boolean
  discountBg: string
  badge?: string
  unlimitedBadgeBg?: string
}

const THEMES: Record<string, CardTheme> = {
  basic: {
    cardBg: '#f7f7f7',
    cardBorder: '#e0e0e0',
    isLight: true,
    discountBg: '#0f0f0f',
    },
  standard: {
    cardBg: 'linear-gradient(rgba(58,134,255,0.03) 0%, rgba(58,134,255,0.3) 100%), #0f0f0f',
    isLight: false,
    discountBg: 'linear-gradient(#3b71c5, #3a86ff)',
    },
  ultimate: {
    outerBg: '#fb5607',
    cardBg: 'linear-gradient(rgba(251,86,7,0.03) 0%, rgba(251,86,7,0.3) 100%), #0f0f0f',
    isLight: false,
    discountBg: 'linear-gradient(#ff8d56, #fb5607)',
      badge: 'Most Popular',
    unlimitedBadgeBg: '#fb5607',
  },
  creator: {
    outerBg: 'linear-gradient(to bottom, #a9064c, #ff006e)',
    cardBg: 'linear-gradient(rgba(255,0,110,0.03) 0%, rgba(255,0,110,0.3) 100%), #0f0f0f',
    isLight: false,
    discountBg: 'linear-gradient(#a9064c, #ff006e)',
      badge: 'Special Offer',
    unlimitedBadgeBg: '#ff006e',
  },
}

const CTA_HREF = 'https://www.imagine.art/subscription'

function CheckIcon({ light }: { light?: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
      <path d="M11.6667 3.5L5.25 9.91667L2.33333 7" stroke={light ? '#16a34a' : '#4ade80'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DiamondIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M5.47283 5.19867H8.52717L7.08167 2.33333H6.91833L5.47283 5.19867ZM6.59108 11.6667V6.01767H1.8865L6.59108 11.6667ZM7.40892 11.6667L12.1135 6.01767H7.40892V11.6667ZM9.42725 5.19867H12.25L11.1183 2.93417C11.0228 2.75732 10.8844 2.60729 10.7158 2.49783C10.5476 2.38835 10.3507 2.33111 10.15 2.33333H8.00917L9.42725 5.19867ZM1.75 5.19867H4.57275L5.99083 2.33333H3.85C3.64117 2.33333 3.45217 2.38817 3.28417 2.49667C3.11543 2.60643 2.97701 2.75688 2.88167 2.93417L1.75 5.19867Z" fill="white" />
    </svg>
  )
}

function HourglassIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 6C5.20435 6 4.44129 6.31605 3.87868 6.8787C3.31607 7.4413 3 8.20435 3 9V10C3 10.1326 3.05268 10.2598 3.14645 10.3535C3.24022 10.4473 3.36739 10.5 3.5 10.5H8.5C8.6326 10.5 8.7598 10.4473 8.85355 10.3535C8.9473 10.2598 9 10.1326 9 10V9C9 8.20435 8.68395 7.4413 8.1213 6.8787C7.5587 6.31605 6.79565 6 6 6ZM6 6C5.20435 6 4.44129 5.68395 3.87868 5.1213C3.31607 4.55871 3 3.79565 3 3V2C3 1.86739 3.05268 1.74022 3.14645 1.64645C3.24022 1.55268 3.36739 1.5 3.5 1.5H8.5C8.6326 1.5 8.7598 1.55268 8.85355 1.64645C8.9473 1.74022 9 1.86739 9 2V3C9 3.79565 8.68395 4.55871 8.1213 5.1213C7.5587 5.68395 6.79565 6 6 6Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function WaveIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="1" y="5" width="2" height="4" rx="1" fill="#fff" opacity="0.6" />
      <rect x="4" y="3" width="2" height="8" rx="1" fill="#fff" opacity="0.8" />
      <rect x="7" y="1" width="2" height="12" rx="1" fill="#fff" />
      <rect x="10" y="4" width="2" height="6" rx="1" fill="#fff" opacity="0.7" />
    </svg>
  )
}

function SparkleIcon({ color }: { color: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" fill={color} />
    </svg>
  )
}

export default function PricingClient({ plans }: { plans: Plan[] }) {
  const [interval, setInterval] = useState<Interval>('quarterly')
  const [teams, setTeams] = useState(false)

  function getPrice(plan: Plan) {
    return plan.prices[interval]
  }

  function getBillingNote(plan: Plan) {
    if (interval === 'monthly') return 'Billed monthly'
    if (interval === 'quarterly') return `Billed $${plan.totals.quarterly} quarterly`
    return `Billed $${plan.totals.yearly} yearly`
  }

  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Choose a plan that fits your needs</h2>
          <p className={styles.sub}>Upgrade to get access to pro features and generate more and better</p>
        </div>

        <div className={styles.tablist}>
          {(['monthly', 'quarterly', 'yearly'] as Interval[]).map((i) => (
            <button
              key={i}
              className={`${styles.tab}${interval === i ? ` ${styles.tabActive}` : ''}`}
              onClick={() => setInterval(i)}
            >
              <span style={{ color: interval === i ? '#fff' : 'rgba(15,15,15,0.5)' }}>
                {i.charAt(0).toUpperCase() + i.slice(1)}
              </span>
              {i === 'quarterly' && (
                <span className={styles.savePill}>-15%</span>
              )}
              {i === 'yearly' && (
                <span className={styles.savePill}>-30%</span>
              )}
            </button>
          ))}
        </div>

        <div className={styles.outerWrap}>
          <div className={styles.typeToggle}>
            <span className={styles.toggleLabel} style={{ color: !teams ? '#0f0f0f' : 'rgba(15,15,15,0.5)' }}>Individual</span>
            <button
              className={styles.switchTrack}
              role="switch"
              aria-checked={teams}
              onClick={() => setTeams(t => !t)}
            >
              <span className={`${styles.switchThumb}${teams ? ` ${styles.switchThumbOn}` : ''}`} />
            </button>
            <span className={styles.toggleLabel} style={{ color: teams ? '#0f0f0f' : 'rgba(15,15,15,0.5)' }}>Teams</span>
          </div>

          <div className={styles.cardsRow}>
            {plans.map((plan) => {
              const theme = THEMES[plan.id] ?? THEMES.basic
              const textPrimary = theme.isLight ? '#0f0f0f' : '#fff'
              const textMuted = theme.isLight ? 'rgba(15,15,15,0.5)' : 'rgba(255,255,255,0.45)'
              const dividerColor = theme.isLight ? '#ededed' : '#1e1e1e'

              return (
                <div
                  key={plan.id}
                  className={styles.cardOuter}
                  style={theme.outerBg ? { background: theme.outerBg } : {}}
                >
                  {theme.badge && (
                    <div className={styles.cardBadge}>
                      {plan.id === 'ultimate' ? <DiamondIcon /> : <HourglassIcon />}
                      <span className={styles.cardBadgeText}>{theme.badge}</span>
                    </div>
                  )}

                  <div
                    className={styles.cardInner}
                    style={{
                      background: theme.cardBg,
                      border: theme.cardBorder ? `1px solid ${theme.cardBorder}` : '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    {/* Name row */}
                    <div className={styles.nameRow}>
                      <h3 className={styles.planName} style={{ color: textPrimary }}>{plan.name}</h3>
                      <div className={styles.badgesRow}>
                        {plan.badgeExtra && (
                          <span
                            className={styles.badgeExtraLabel}
                            style={{ background: theme.discountBg, color: '#fff' }}
                          >
                            {plan.badgeExtra}
                          </span>
                        )}
                        <span
                          className={styles.discountPill}
                          style={{ background: theme.discountBg }}
                        >
                          {plan.discountBadge}
                        </span>
                      </div>
                    </div>

                    <p className={styles.planSub} style={{ color: textMuted }}>{plan.subtitle}</p>

                    {/* Price */}
                    <div className={styles.priceBlock}>
                      <div className={styles.priceRow}>
                        <span className={styles.priceCurrency} style={{ color: textPrimary }}>$</span>
                        <span className={styles.priceNum} style={{ color: textPrimary }}>{getPrice(plan)}</span>
                        <span className={styles.priceSuffix} style={{ color: textMuted }}>/month</span>
                      </div>
                      <p className={styles.billingNote} style={{ color: textMuted }}>{getBillingNote(plan)}</p>
                    </div>

                    {/* CTA */}
                    <a
                      href={CTA_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.cta} ${plan.ctaStyle === 'white' ? styles.ctaWhite : plan.ctaStyle === 'pink' ? styles.ctaPink : styles.ctaGhost}`}
                    >
                      Get Started
                    </a>

                    <div className={styles.divider} style={{ background: dividerColor }} />

                    {/* Credits */}
                    <div className={styles.creditsRow}>
                      <span className={styles.creditsLabel} style={{ color: textMuted }}>Included in plan</span>
                      <div className={styles.creditsRight}>
                        <SparkleIcon color={theme.isLight ? '#a78bfa' : '#a78bfa'} />
                        <span className={styles.creditsText} style={{ color: textMuted }}>
                          <strong style={{ color: textPrimary }}>+ {plan.credits} credits</strong> per month
                        </span>
                      </div>
                    </div>

                    <div className={styles.divider} style={{ background: dividerColor }} />

                    {/* Features */}
                    <p className={styles.sectionLabel} style={{ color: textMuted }}>Additional Features</p>
                    <ul className={styles.featureList}>
                      {plan.features.map((f, i) => (
                        <li
                          key={i}
                          className={styles.featureItem}
                                                  >
                          {f.available === true && <CheckIcon light={theme.isLight} />}
                          <span
                            className={styles.featureText}
                            style={{ color: f.available ? textPrimary : textMuted }}
                          >
                            {f.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Seedance */}
                    {plan.seedance && (
                      <>
                        <div className={styles.divider} style={{ background: dividerColor }} />
                        <div className={styles.seedanceBanner}>
                          <WaveIcon />
                          <div>
                            <p className={styles.seedanceName}>Seedance 2.0</p>
                            <p className={styles.seedanceSub}>Pro-tier video generation.</p>
                          </div>
                        </div>
                      </>
                    )}

                    <div className={styles.divider} style={{ background: dividerColor }} />

                    {/* Complimentary */}
                    <p className={styles.sectionLabel} style={{ color: textMuted }}>Complimentary Access</p>
                    <ul className={styles.featureList}>
                      {plan.complementary.map((c, i) => (
                        <li key={i} className={styles.featureItem}>
                          <span className={styles.featureText} style={{ color: textPrimary }}>{c}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={styles.divider} style={{ background: dividerColor }} />

                    {/* Unlimited */}
                    <p className={styles.sectionLabel} style={{ color: textMuted }}>Unlimited Generations</p>
                    <ul className={styles.featureList}>
                      {plan.unlimited.map((u, i) => (
                        <li key={i} className={styles.featureItem}>
                          <span className={styles.featureText} style={{ color: u.available !== false ? textPrimary : textMuted }}>
                            {u.name}
                          </span>
                          {u.badge && theme.unlimitedBadgeBg && (
                            <span
                              className={styles.unlimitedBadge}
                              style={{ background: theme.unlimitedBadgeBg }}
                            >
                              {u.badge}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={CTA_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.learnMoreBtn}
                      style={{ color: textMuted }}
                    >
                      Learn more about Unlimited
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Footer */}
          <div className={styles.footer}>
            <span className={styles.footerText}>Need Team or Enterprise options?</span>
            <a href="https://www.imagine.art/business/enterprise/contact-us" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
              See business plan
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
