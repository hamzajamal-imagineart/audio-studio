# ImagineArt – Typography System

## Font Family

**Google Sans Flex** (variable) + **Google Sans** (static fallback)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@100..900&family=Google+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet">
```

```css
body {
  font-family: 'Google Sans Flex', 'Google Sans', sans-serif;
}
```

---

## Type Scale

### Hero Heading
Large display text. Used in page heroes and dark full-bleed sections.

```css
font-size: clamp(42px, 5vw, 64px);
font-weight: 600;
line-height: 1.06;
letter-spacing: -3px;
```

---

### Section Heading `h2`
Primary section titles. Used to open content blocks.

```css
font-size: clamp(28px, 3.2vw, 40px);
font-weight: 600;
line-height: 1.05;
letter-spacing: -2px;
```

---

### Statement / Pull Quote
Large editorial callouts. Used in statement blocks and testimonials.

```css
font-size: clamp(32px, 4vw, 56px);
font-weight: 600;
line-height: 1.2;
letter-spacing: -1.5px;
```

---

### Body / Subtext
Default running copy, hero subtitles, and card descriptions.

```css
font-size: 18px;
font-weight: 400;
line-height: 1.7;
```

---

### UI / Buttons / Nav
All interactive elements – buttons, navigation links, tabs.

```css
font-size: 14px;
font-weight: 500;
letter-spacing: 0.1px;
```

---

### Eyebrow / Label
Uppercase labels above headings. Used to introduce sections.

```css
font-size: 10.5px;
font-weight: 600;
letter-spacing: 1.8px;
text-transform: uppercase;
```

---

### Caption / Meta
Timestamps, tags, helper text, small UI annotations.

```css
font-size: 12px;
font-weight: 500;
line-height: 1.6;
```

---

## Weight Usage

| Weight | Usage |
|--------|-------|
| `400` | Body copy, subtext |
| `500` | UI elements, buttons, nav, captions |
| `600` | All headings – hero, h2, statement |

> **Never use 700+** in running text. 600 is the ceiling for headings.

---

## Rules

1. **Negative tracking on large type** – apply `-2px` to `-3px` letter-spacing on anything above 28px. Makes display type feel controlled, not bloated.

2. **Muted secondary text** – never use full `#000` or `#fff` for supporting copy. Use opacity variants:
   - Light bg: `rgba(0,0,0,0.42)` muted · `rgba(0,0,0,0.22)` disabled
   - Dark bg: `rgba(255,255,255,0.42)` muted · `rgba(255,255,255,0.25)` disabled

3. **Consistent line-height** – `1.05–1.1` for headings, `1.65–1.7` for body. Never use default browser line-height on display text.

4. **Eyebrow contrast** – keep eyebrow labels small and uppercase. The size contrast against the heading below it makes the heading feel larger.

5. **Italic for emphasis** – use italic at `font-weight: 600` (not a lighter weight) for stylistic em elements within headings. Color it at `rgba(255,255,255,0.38)` on dark or `rgba(0,0,0,0.32)` on light.
