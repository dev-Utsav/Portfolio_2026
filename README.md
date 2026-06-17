# Utsav — Portfolio

A Gen-Z, kinetic portfolio built with **Next.js (App Router) + TypeScript + Tailwind CSS**.
All content lives in one typed data file so you can change everything without touching components.

## Run it

```bash
npm install
npm run dev
# open http://localhost:3000
```

Build for production:

```bash
npm run build && npm start
```

Deploys to Vercel as-is (push to a repo → import → deploy).

## ✏️ Where to edit content

**`data/portfolio.ts`** — this is the only file you need for content.
Name, role, email, projects, stats, services, experience, social links and all copy live here.
`data/types.ts` describes the shape (TypeScript will warn you if a field is missing).

Inline emphasis is supported in the `lead` and `bio` strings:

- `**text**` → bold blue
- `__text__` → lime highlight

## 🎨 Where to edit the look

**`app/globals.css`** → the `:root` block holds every color as a CSS variable:

```css
--paper, --paper-2, --ink, --blue, --coral, --lime, --muted
```

Change them once and the whole site (and all Tailwind `bg-*/text-*` classes) updates.
Fonts are wired in `app/layout.tsx` via `next/font` (Bricolage Grotesque, JetBrains Mono, Inter)
and exposed as `--font-display`, `--font-mono`, `--font-sans`.

## Structure

```
app/
  layout.tsx       fonts + metadata
  page.tsx         composes the sections
  globals.css      design tokens, keyframes, cursor/marquee/grain
components/
  CustomCursor.tsx blend-mode cursor that swells on hover
  Reveal.tsx       scroll-into-view fade/lift wrapper
  Magnetic.tsx     pulls an element toward the cursor
  CountUp.tsx      animated stat counter
  Marquee.tsx      infinite skill strip
  Nav.tsx          sticky nav + live clock + mobile menu
  Hero.tsx  Work.tsx  About.tsx  Services.tsx  Experience.tsx  Contact.tsx
hooks/
  useLiveClock.ts  live timezone clock
lib/
  rich.tsx         **bold** / __highlight__ parser
data/
  portfolio.ts     ⭐ all content
  types.ts         content types
```

## Notes

- Animations are dependency-free (CSS + small React hooks). Want springier motion?
  `npm i framer-motion` and swap `Reveal`/`Magnetic` internals — the API stays the same.
- The custom cursor auto-hides on touch devices and all motion respects
  `prefers-reduced-motion`.
- Replace the placeholder `#` hrefs (projects + socials) and `hello@utsav.dev`
  in `data/portfolio.ts`.
