# ImagineArt – Style Guide

> Typography is covered separately in `TYPOGRAPHY.md`.

---

## Color

### Surfaces

| Token | Value | Usage |
|-------|-------|-------|
| Dark hero | `#0b0b0b` | Hero sections, dark full-bleed |
| Dark footer | `#070707` | Footer |
| Dark card | `#111111` | Cards sitting on dark backgrounds |
| White | `#ffffff` | Default page background |
| Warm off-white | `#ffffff` | Alternate light sections |

### Text on Light Backgrounds

| Role | Value | Usage |
|------|-------|-------|
| Primary | `#0F0F0F` | Headings, strong labels |
| Secondary | `#525252` | Body copy, card descriptions, subtitles |
| Tertiary | `rgba(15,15,15,0.5)` | Eyebrows, dates, stat labels, meta text |
| Disabled | `rgba(0,0,0,0.22)` | Placeholders, inactive states |

> See `TYPOGRAPHY.md` for the full CSS variable reference.

### Text on Dark Backgrounds

```css
color: rgba(255, 255, 255, 0.75);  /* primary */
color: rgba(255, 255, 255, 0.42);  /* muted */
color: rgba(255, 255, 255, 0.25);  /* disabled / meta */
```

### Borders

```css
/* Light surface */
border: 1px solid rgba(0, 0, 0, 0.08);

/* Dark surface */
border: 1px solid rgba(255, 255, 255, 0.08);
```

### Accent (use sparingly)
Accent color is only used for a single deliberate brand moment – live indicators, data highlights, or one hero element. Never in UI chrome.

```css
/* Purple accent – live dot, active state */
background: #a78bfa;
box-shadow: 0 0 8px rgba(167, 139, 250, 0.8);
```

---

## Spacing Scale

```
4px    tight gaps         icon-to-text, inline pairs
8px    small gaps         tag padding, dense rows
12px   compact            button vertical padding
16px   base unit          card gap, small margin
24px   breathing room     component internal spacing
32px   grouped elements   between related blocks
48px   section sub-gaps   between items within a section
80px   section padding    internal section top/bottom
120px  section rhythm     standard section top/bottom padding
```

---

## Layout & Containers

### Main Content Container

```css
.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 clamp(40px, 12vw, 220px); /* desktop */
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px; /* mobile */
  }
}
```

### Section Padding

```css
/* Standard section */
padding: 80px var(--px);

/* Large section */
padding: 120px var(--px) 100px;

/* Statement block */
padding: 140px var(--px);
```

Set `--px` as a CSS variable pointing to your container horizontal padding.

---

## Border Radius

```
8px    small elements      nav links, tags, chips
9px    buttons
12px   cards, small surfaces
14px   modals, dropdowns
16px   large cards
24px   hero cards, feature blocks
100px  pill badges, eyebrow labels (full round)
```

---

## Buttons

### Primary (on dark backgrounds)

Solid white – the main CTA.

```css
.btn-primary {
  height: 54px;
  padding: 0 30px;
  border-radius: 9px;
  font-size: 15px;
  font-weight: 600;
  background: #ffffff;
  color: #0f0f0f;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.18s, box-shadow 0.18s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(255, 255, 255, 0.18);
}
```

### Secondary / Ghost (on dark backgrounds)

Transparent with a subtle border.

```css
.btn-ghost {
  height: 54px;
  padding: 0 30px;
  border-radius: 9px;
  font-size: 15px;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.75);
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.18s, border-color 0.18s, transform 0.18s;
}

.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.25);
}
```

### Small Buttons / Hero CTAs

Used inline in heroes, tighter footprint.

```css
.btn-sm {
  height: 40px;
  padding: 8px 14px;
  border-radius: 14px;
  font-size: 14px;
  font-weight: 500;
  transition: opacity 0.15s, transform 0.15s, box-shadow 0.15s;
}

.btn-sm:hover { transform: translateY(-1px); }
```

### Grey Buttons (on light backgrounds)

```css
.btn-grey {
  height: 48px;
  padding: 0 24px;
  border-radius: 9px;
  font-size: 14px;
  font-weight: 600;
  background: #ebebeb;
  color: #0f0f0f;
  transition: background 0.18s;
}

.btn-grey:hover {
  background: #d8d8d8; /* darken only — no shadow, no lift */
}
```

> **Rule:** Grey buttons never lift or cast a shadow on hover. Darken the background only.

---

## Elevation

Prefer borders over shadows for layering on light surfaces. Shadows are reserved for floating/interactive elements only.

```css
/* Default card on light – border only, no shadow */
border: 1px solid rgba(0, 0, 0, 0.08);

/* Floating element (navbar on scroll, modal, dropdown) */
background: rgba(255, 255, 255, 0.92);
backdrop-filter: saturate(180%) blur(72px);
border-bottom: 1px solid rgba(0, 0, 0, 0.06);

/* Card on hover */
box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6);

/* Button lift on hover */
box-shadow: 0 8px 32px rgba(255, 255, 255, 0.18);

/* Subtle button shadow at rest */
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.08);
```

---

## Animation

### Easing

```css
/* Entrances – fast start, soft land */
cubic-bezier(0.16, 1, 0.3, 1)

/* General UI transitions */
cubic-bezier(0.4, 0, 0.2, 1)

/* Smooth ease for simple fades */
ease
```

### Durations

```
0.15s   Hover state changes (opacity, color, border)
0.18s   Button lift/shadow on hover
0.35s   Card overlay reveals, short fades
0.55s   Character / word animations
0.65s   Card entrance animations
0.8–0.9s  Section reveal (scroll-triggered)
```

### Scroll Reveal Classes

Three variants for scroll-triggered entrance. Add `.in` via IntersectionObserver.

```css
/* Fade up */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1),
              transform 0.8s cubic-bezier(0.16,1,0.3,1);
}
.reveal.in { opacity: 1; transform: none; }

/* Fade + blur up */
.reveal-blur {
  opacity: 0;
  filter: blur(8px);
  transform: translateY(16px);
  transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1),
              filter 0.9s,
              transform 0.9s;
}
.reveal-blur.in { opacity: 1; filter: blur(0); transform: none; }

/* Slide in from left */
.reveal-left {
  opacity: 0;
  transform: translateX(-72px);
  transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1),
              transform 0.9s cubic-bezier(0.16,1,0.3,1);
}
.reveal-left.in { opacity: 1; transform: none; }

/* Slide in from right */
.reveal-right {
  opacity: 0;
  transform: translateX(72px);
  transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1),
              transform 0.9s cubic-bezier(0.16,1,0.3,1);
}
.reveal-right.in { opacity: 1; transform: none; }
```

### Staggered Children

```css
/* Stagger child cards entering together */
.group.in .card:nth-child(1) { transition-delay: 0.04s; }
.group.in .card:nth-child(2) { transition-delay: 0.09s; }
.group.in .card:nth-child(3) { transition-delay: 0.14s; }
.group.in .card:nth-child(4) { transition-delay: 0.19s; }
/* +0.05s per child */
```

### Reveal Delays (siblings)

```css
.reveal-d1 { transition-delay: 0.10s; }
.reveal-d2 { transition-delay: 0.22s; }
.reveal-d3 { transition-delay: 0.34s; }
```

### Never Animate

- `color` – use opacity transitions instead
- `font-size` – causes layout shift
- `width` / `height` – use `transform: scale()` instead

---

## Principles

1. **Borders over shadows** – use `1px solid rgba` borders for elevation on light surfaces. Reserve shadows for interactive hover states and floating UI only.

2. **Whitespace is content** – sections breathe at 120px top/bottom. When in doubt, add space rather than remove it.

3. **Restrained color** – no bright accent colors in UI chrome. Color is only for data, status indicators, or one deliberate brand moment per page.

4. **Elevation through blur, not color** – floating surfaces use `backdrop-filter: blur()` + a subtle border. Avoid opaque colored overlays.

5. **Animations are subtle and fast** – entrances at 0.65–0.9s with `cubic-bezier(0.16, 1, 0.3, 1)`. Hover responses at 0.15–0.18s. Never slow things down to feel "dramatic."

6. **Muted hierarchy** – secondary text is never full black or white. Always use an opacity variant to create visual hierarchy without adding color.
