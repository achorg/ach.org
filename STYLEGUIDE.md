# ach.org styleguide

This documents the visual language of the site: colors, type, and the core UI patterns. Colors are defined in [`tailwind.config.js`](tailwind.config.js) and used throughout [`src/styles.css`](src/styles.css) and the components in [`src/components/`](src/components/).

## Brand background

The current site uses purple as its dominant color, but that wasn't always the brand. The older ACH logo used a light sky blue wordmark with a top bar in blue, near-black, gold, and orange-red. The `sky`, `coral`, and `gold` colors below were sampled from that logo to reconnect the palette to ACH's actual visual history, rather than introducing arbitrary new colors.

## Color palette

### Primary — Purple

The established primary color across the site (headers, hero, buttons, links). Reads scholarly and authoritative.

| Token | Hex | Use |
|---|---|---|
| `primary-100` | `#dddbfb` | Light tints, text on dark backgrounds |
| `primary-200` | `#a8aaff` | Secondary text on dark backgrounds |
| `primary-400` | `#5450bf` | Mid-tone accents |
| `primary-500` | `#3c3783` | Buttons, links |
| `primary-800` | `#232048` | Dark backgrounds (hero, header) |
| `primary-900` | `#1c1832` | Darkest backgrounds (dark mode) |

### Accent — Slate

A muted blue-gray currently used as a secondary background/button color (e.g. "Save the NEH", "Connect with us" bands). Neutral and low-energy by design — good for content sections that shouldn't compete with a purple CTA.

| Token | Hex | Use |
|---|---|---|
| `accent-100` | `#DBF4F8` | Light tints, text on dark backgrounds |
| `accent-200` | `#C2E5F3` | Secondary text on dark backgrounds |
| `accent-800` | `#3A4B5E` | Section backgrounds |
| `accent-900` | `#1B283B` | Dark mode section backgrounds |

### Secondary — Sky blue *(new)*

Pulled from the historic logo. A cool, techy complement to purple — use for secondary UI, links/highlights on dark purple backgrounds, or anywhere you want a "digital" accent without competing with a CTA.

| Token | Hex |
|---|---|
| `sky-100` | `#E3F7FC` |
| `sky-300` | `#9FE3F3` |
| `sky-500` | `#6FD1EA` |
| `sky-700` | `#2FA9C9` |
| `sky-900` | `#145A6B` |

### CTA accent — Coral / orange-red *(new)*

Also pulled from the historic logo. This is the "fun, maker-ish" energy — a warm, high-contrast pop against all that purple. **Use sparingly**: primary buttons, key CTAs, badges, or highlighting a single important element. Not a background color for large areas.

| Token | Hex |
|---|---|
| `coral-100` | `#FDE4DC` |
| `coral-300` | `#F6A489` |
| `coral-500` | `#F0603C` |
| `coral-700` | `#C93F1F` |
| `coral-900` | `#7A2412` |

### Tertiary — Gold *(new)*

The fourth logo color. Reserve for small highlights, tags, or badges — it's easy to overuse and clash with coral if both appear in the same component.

| Token | Hex |
|---|---|
| `gold-100` | `#FDF3DC` |
| `gold-300` | `#F7DA92` |
| `gold-500` | `#F2C14E` |
| `gold-700` | `#C99A28` |
| `gold-900` | `#6B4F10` |

### Neutrals

Standard Tailwind `zinc` scale for body text, borders, and light/dark backgrounds. `white`/`black` used at the extremes (e.g. footer, skip link).

### Usage guidance

- **Purple stays primary.** It's used sitewide already — don't replace it wholesale.
- **One warm accent per component.** Pick coral *or* gold, not both, to avoid visual noise.
- **Sky blue is the "safe" secondary** — pairs cleanly with purple since both are cool-toned; use it before reaching for coral/gold if you just need a second color, not a pop.
- New colors are defined in `tailwind.config.js` but not yet applied anywhere in components — treat them as available, not mandatory. Introduce them deliberately (e.g. a coral "Join now" button) rather than reskinning existing purple/slate elements.

## Typography

- **Typeface:** [Libre Franklin Variable](https://fonts.google.com/specimen/Libre+Franklin), sans-serif fallback.
- **Weights:** custom named scale in `tailwind.config.js` — `hairline` (100) through `black` (900), with `regular` = 500 and `medium` = 600 (note these don't match Tailwind's normal `font-medium` = 500 default; check `fontWeight` config before assuming).
- **Body text:** `zinc-700` (light mode) / `zinc-300` (dark mode).
- **Page headers** (`header.page-header`): large bold title (`text-4xl`/`md:text-5xl`, `font-black`), italic extralight subtitle (`text-2xl`).

## Core UI patterns

### Buttons

- **`.button-pill`** — filled pill button, `bg-primary-500` by default, `.button-accent` modifier swaps to `bg-accent-800`. Used for primary CTAs.
- **`.button-slim`** — text-only button with an icon, colored `text-primary-800`/`text-primary-200` (dark mode) or `.button-accent` for the accent variant.

When adding a coral CTA button, override the background explicitly (don't rely on `.button-accent`, which is tied to the slate accent color) — see `.connect-bar-actions .button-pill` in `styles.css` for an example of scoping an override.

### Full-width color bands

Homepage sections like "Connect with us" and "Save the NEH" use a full-width background band (`boxed-fullwidth`) with centered content constrained to `max-w-xl` inside (`.connect-bar-content`, `.call-to-action-content`). Adjacent bands should use `!mt-0` to sit flush against each other — the default `section + section` spacing (`mt-12`) is meant for content sections on a plain background, not stacked color bands.

### Layout containers

- **`.boxed-regular`** — `max-w-3xl`, centered, standard content width.
- **`.boxed-fullwidth`** — full-width section, typically with an inner `.boxed-regular` or custom max-width wrapper for the actual content.

## Dark mode

Most color usage has an explicit `dark:` variant (e.g. `bg-primary-800 dark:bg-primary-900`). When adding new colors, always check both themes — see [pages/index.11ty.js](pages/index.11ty.js) and `src/styles.css` for the pattern of light/dark pairs used throughout.
