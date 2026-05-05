import styles from './GradientBlob.module.css'

type Props = {
  colorA: string
  colorB: string
  colorC?: string
  duration?: number
  offset?: number
  className?: string
}

export default function GradientBlob({
  colorA,
  colorB,
  colorC,
  duration = 9,
  offset = 0,
  className,
}: Props) {
  return (
    <div
      className={`${styles.wrap} ${className ?? ''}`}
      style={{
        '--blob-a': colorA,
        '--blob-b': colorB,
        '--blob-c': colorC ?? colorB,
        '--blob-dur': `${duration}s`,
        animationDelay: `${offset}s`,
      } as React.CSSProperties}
    >
      <div className={styles.inner} style={{ animationDelay: `${offset * 0.7}s` }} />
      <div className={styles.noise} />
    </div>
  )
}
