import type { PortfolioData } from "./types";

// ============================================================
//  ⭐ EDIT EVERYTHING HERE ⭐
//  All text, links, projects, stats and copy live in this file.
//  Change a value and the whole site updates. Nothing else to touch.
// ============================================================

const data: PortfolioData = {
  profile: {
    brand: "Utsav",
    role: "Project Coordinator — Solutions Engineering",
    location: "Ahmedabad, IN",
    edition: "Portfolio '26",
    email: "utsavdodiya.svmr@gmail.com",
    availability: "Available for freelance",
    utcOffsetHours: 5.5,
    clockCity: "AHM",
    clockTz: "IST",
  },

  nav: [
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    nameLine1: "Utsav",
    nameLine2: "Dodiya",
    stickerText: "PRE-SALES • DELIVERY • B2B • SOLUTIONS • ",
    stickerCore: "↗",
    lead: "Project Coordinator bridging __client vision__ and technical delivery. Owning pre-sales, solution architecture, and end-to-end execution for **B2B enterprise clients** on Shopify Plus.",
    primaryCta: { label: "View work", href: "#work" },
    secondaryCta: { label: "Get in touch", href: "#contact" },
  },

  marquee: [
    "Pre-Sales",
    "Solution Architecture",
    "Client Delivery",
    "B2B Commerce",
    "Effort Estimation",
    "Scope of Work",
    "ERP Integrations",
    "Shopify Plus",
  ],

  projects: [
    {
      id: "serendipity-soy-candles",
      index: "01",
      title: "Serendipity Soy Candles",
      description:
        "Full Shopify storefront built from scratch using Liquid and custom sections — 10+ metafield-driven sections delivering a cohesive brand experience across product pages, collections, cart, and homepage.",
      tags: ["Shopify", "Liquid", "Theme"],
      year: "2025",
      href: "https://serendipitysoycandles.com/",
      gradient: "linear-gradient(135deg,#E8C97A,#a3842a)",
      glyph: "✦",
    },
    {
      id: "the-praya",
      index: "02",
      title: "The Praya",
      description:
        "Full Shopify storefront for a luxury handmade candle brand with custom Liquid sections, metafield-driven product pages, and smooth scroll interactions for a storytelling-led shopping experience.",
      tags: ["Shopify", "Liquid", "Luxury"],
      year: "2025",
      href: "https://thepraya.com/",
      gradient: "linear-gradient(135deg,#D4A8C7,#7a4a6a)",
      glyph: "✿",
    },
    {
      id: "oak-and-luna",
      index: "03",
      title: "Oak and Luna",
      description:
        "E-commerce platform architecture and optimization: Custom product filtering, secure payment gateways, and UX improvements resulting in a 20% boost in online sales.",
      tags: ["NextJS", "E-Commerce", "CRO"],
      year: "2025",
      href: "https://www.oakandluna.com",
      gradient: "linear-gradient(135deg,#C8A882,#6b4a22)",
      glyph: "O",
    },
    {
      id: "my-comfy-pajama",
      index: "04",
      title: "My Comfy Pajama",
      description:
        "Responsive Shopify e-commerce site with secure payment gateways, enhanced product pages and intuitive navigation which drove a 30% revenue increase within 30 days of launch.",
      tags: ["Shopify", "Liquid", "D2C"],
      year: "2024",
      href: "https://mycomfypajama.com/",
      gradient: "linear-gradient(135deg,#7EC8E3,#2a6a8a)",
      glyph: "M",
    },
  ],

  bio: "I'm a **Project Coordinator** at Magneto IT Solutions, I live in the space between __client conversation__ and successful delivery. I own the full pre-to-post-sales cycle which includes discovery calls, solution architecture, scope of work, effort estimation, and sprint-ready execution. I bring enough __technical depth__ to speak fluently with engineers and enough __client clarity__ to keep stakeholders aligned. Off the clock: **anime**, **F1**, football, and building things people actually want to use.",

  interests: [
    { emoji: "🏎️", label: "F1 obsessed", variant: "coral" },
    { emoji: "⛩️", label: "Anime", variant: "blue" },
    { emoji: "⚽", label: "Nationals ×1", variant: "lime" },
    { emoji: "🎬", label: "Social Media Management", variant: "ink" },
    { emoji: "🇬🇧", label: "AUS '27", variant: "coral" },
  ],

  stats: [
    { value: 9, suffix: "+", label: "Client engagements owned end-to-end" },
    { value: 2, suffix: "", label: "Pre-sales proposals converted to projects" },
    { value: 4, suffix: "+", label: "Storefronts taken from brief to go-live" },
  ],

  services: [
    {
      num: "001",
      title: "Pre-Sales & Discovery",
      description:
        "Translating client needs into clear solution architecture, feature lists, and effort estimates that win trust and close deals.",
    },
    {
      num: "002",
      title: "Project Management",
      description:
        "Owning delivery end-to-end which includes sprint planning, Jira coordination, cross-functional alignment, risk management, and keeping every stakeholder in sync through go-live.",
    },
    {
      num: "003",
      title: "Solution Architecture",
      description:
        "Designing scalable e-commerce solutions for B2B enterprise: catalog structures, tiered pricing, ERP sync, and multi-channel workflows built to solve real business problems.",
    },
    {
      num: "004",
      title: "Documentation",
      description:
        "Structured SOWs, discovery documents, feature specs, and technical proposals that leave no room for ambiguity from first call to final handoff.",
    },
    {
      num: "005",
      title: "Shopify Development",
      description:
        "Hands-on Shopify Plus builds: Liquid themes, custom sections, metafield systems, B2B storefront architecture, and app integrations when delivery demands it.",
    },
    {
      num: "006",
      title: "Post-Sales Delivery",
      description:
        "Converting signed proposals into sprint-ready execution, managing cross-functional teams, tracking milestones, and ensuring go-live matches what was promised.",
    },
  ],

  experience: [
    {
      when: "Nov '25 – Now",
      company: "Magneto IT Solutions",
      description:
        "Owned the full pre-to-post-sales cycle across 9+ B2B enterprise engagements leading discovery, authoring solution architecture docs, estimating effort, and writing client-facing proposals. Coordinated delivery on 2 converted projects from scoped requirements through to go-live.",
      role: "Project Coordinator — Solutions Engineering",
    },
    {
      when: "Dec '24 – Oct '25",
      company: "Tatva Krti Inc (Sigma Marketing Inc)",
      description:
        "Managed concurrent storefront delivery across 4+ client projects — translating client briefs into scoped feature sets, coordinating builds, and ensuring consistent quality and brand alignment across all deliverables.",
      role: "Shopify Frontend Developer",
    },
    {
      when: "Sep '24 – Dec '24",
      company: "DaveAI",
      description:
        "Analysed and restructured user flows for a Maruti Suzuki application, identifying critical drop-off points. Facilitated stakeholder alignment through interactive prototypes, reducing feedback cycles by 30%.",
      role: "Business Analyst Intern",
    },
  ],

  contact: {
    eyebrow: "✦ Open to full-time & management roles",
    lineTop: "Let's ship",
    lineBottom: "something",
    highlight: "great ↗",
    copyright: "© 2026 Utsav — coordinating from Ahmedabad",
  },

  socials: [
    { label: "GitHub", href: "https://github.com/dev-Utsav" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/utsavdodiya/" },
  ],
};

export default data;
