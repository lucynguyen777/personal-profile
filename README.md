# Ha Nguyen — Portfolio

Personal website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 16** — React framework with static export
- **TypeScript** — Type-safe development
- **Tailwind CSS 4** — Utility-first styling
- **Framer Motion** — Subtle page animations
- **GitHub Pages** — Deployment target

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Static output is in `./out`.

## Deploy

Push to `main` — GitHub Actions automatically builds and deploys to GitHub Pages.

Manual deploy trigger available via GitHub Actions → `workflow_dispatch`.

## Structure

```
src/
├── app/
│   ├── globals.css         # Global styles + Tailwind imports
│   ├── layout.tsx          # Root layout, fonts, SEO metadata
│   └── page.tsx            # Main page composing all sections
├── components/
│   ├── hero.tsx            # Large hero with name, tagline, CTAs
│   ├── about.tsx           # Bio narrative (editorial layout)
│   ├── projects.tsx        # Case-study project cards
│   ├── research-interests.tsx  # Research themes grid
│   ├── skills.tsx          # Capability clusters
│   ├── experience.tsx      # Timeline layout
│   └── contact.tsx         # Contact links
```

## Design

Anthropic-inspired design language:

- Large typography (80–120px headings)
- Warm off-white background (#FAF9F6)
- Dark text (#111111)
- Generous whitespace and editorial layouts
- Subtle fade-in/slide animations
- Muted, professional color palette

No profile picture. No neon gradients. No parallax. Typography carries the brand.

## SEO

Includes Open Graph, Twitter Card, and standard metadata for search visibility.