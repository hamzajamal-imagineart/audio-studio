import styles from './LogoTicker.module.css'

const logos = [
  { name: 'Spotify',       icon: <path d="M11 2a9 9 0 100 18A9 9 0 0011 2zm0 2a7 7 0 110 14A7 7 0 0111 4zm-1 3v4l3 2-1 1.5-3.5-2.2V7H10z" fill="currentColor" /> },
  { name: 'SoundCloud',    icon: <><rect x="3" y="3" width="16" height="16" rx="5" fill="currentColor"/><path d="M8 11h6M8 8h6M8 14h4" stroke="#0b0b0b" strokeWidth="1.4" strokeLinecap="round"/></> },
  { name: 'YouTube Music', icon: <><circle cx="11" cy="11" r="9" fill="currentColor"/><path d="M8 7l7 4-7 4V7z" fill="#0b0b0b"/></> },
  { name: 'Apple Music',   icon: <><rect x="3" y="3" width="16" height="16" rx="4" fill="currentColor"/><path d="M8 9h6M8 13h4" stroke="#0b0b0b" strokeWidth="1.4" strokeLinecap="round"/></> },
  { name: 'Tidal',         icon: <><circle cx="11" cy="11" r="9" fill="currentColor"/><path d="M7 11l3 3 5-5" stroke="#0b0b0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></> },
  { name: 'Deezer',        icon: <><rect x="3" y="3" width="16" height="16" rx="4" fill="currentColor"/><path d="M7 11l4-4 4 4M11 7v8" stroke="#0b0b0b" strokeWidth="1.4" strokeLinecap="round"/></> },
  { name: 'Amazon Music',  icon: <><circle cx="11" cy="11" r="9" fill="currentColor"/><circle cx="11" cy="11" r="3" fill="#0b0b0b"/></> },
  { name: 'Audiomack',     icon: <path d="M3 6h16M3 11h16M3 16h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /> },
]

export default function LogoTicker() {
  const doubled = [...logos, ...logos]

  return (
    <div className={styles.wrap}>
      <div className={styles.outer}>
        <div className={styles.track}>
          {doubled.map((logo, i) => (
            <span key={i} className={styles.logo}>
              <svg viewBox="0 0 22 22" fill="none" aria-hidden="true">{logo.icon}</svg>
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
