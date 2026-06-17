// ============================================================
//  TYPES for all portfolio content.
//  These describe the shape of the data in data/portfolio.ts.
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface Social {
  label: string;
  href: string;
}

/** Inline emphasis is supported in `lead` and `bio`:
 *   **text**  -> bold blue
 *   __text__  -> lime highlight
 */
export interface Profile {
  /** Shown big in the nav, e.g. "UTSAV" */
  brand: string;
  role: string;
  location: string;
  /** short label like "Portfolio '26" */
  edition: string;
  email: string;
  availability: string;
  /** IANA-style hour offset from UTC for the live clock, e.g. 5.5 for IST */
  utcOffsetHours: number;
  /** short city code shown by the clock, e.g. "AHM" */
  clockCity: string;
  /** timezone abbreviation shown by the clock, e.g. "IST" */
  clockTz: string;
}

export interface Hero {
  /** first big line, e.g. "Utsav" */
  nameLine1: string;
  /** second big line (rendered as outlined stroke), e.g. "builds" */
  nameLine2: string;
  /** rotating circular sticker text */
  stickerText: string;
  /** glyph in the middle of the sticker, e.g. "↗" */
  stickerCore: string;
  /** supports **bold** and __highlight__ */
  lead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface Project {
  id: string;
  index: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  href: string;
  /** any valid CSS background, used for the hover preview + glyph tile */
  gradient: string;
  /** single character / emoji shown on the preview tile */
  glyph: string;
}

export type ChipVariant = "coral" | "blue" | "lime" | "ink";

export interface Interest {
  emoji: string;
  label: string;
  variant: ChipVariant;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Service {
  num: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  when: string;
  company: string;
  description: string;
  role: string;
}

export interface Contact {
  eyebrow: string;
  /** two lines of the big closing statement */
  lineTop: string;
  lineBottom: string;
  /** highlighted/linked word at the end of lineBottom, e.g. "real ↗" */
  highlight: string;
  copyright: string;
}

export interface PortfolioData {
  profile: Profile;
  nav: NavLink[];
  hero: Hero;
  marquee: string[];
  projects: Project[];
  /** supports **bold** and __highlight__ */
  bio: string;
  interests: Interest[];
  stats: Stat[];
  services: Service[];
  experience: ExperienceItem[];
  contact: Contact;
  socials: Social[];
}
