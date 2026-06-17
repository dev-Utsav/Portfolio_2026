"use client";

import data from "@/data/portfolio";
import { rich } from "@/lib/rich";
import Magnetic from "./Magnetic";
import Marquee from "./Marquee";

export default function Hero() {
  const { profile, hero, marquee } = data;

  return (
    <header className="relative pt-[120px] pb-10">
      <div className="mx-auto max-w-[1280px] px-7">
        {/* eyebrow */}
        <div className="mb-[22px] flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-wide text-muted">
          <span className="group inline-flex items-center rounded-full border px-[11px] py-[5px] text-ink transition-all duration-300 hover:border-blue hover:text-blue hover:bg-blue/5 hover:scale-105 cursor-default animate-glow-border">
            <span className="relative mr-2 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue" />
            </span>
            {profile.availability}
          </span>
          <span>{profile.role}</span>
        </div>

        {/* big name */}
        <div className="relative">
          <h1 className="font-display font-extrabold uppercase leading-[0.82] tracking-[-0.04em] text-[clamp(76px,20vw,290px)]">
            <span className="animate-rise block overflow-hidden">
              <span>{hero.nameLine1}</span>
            </span>
            <span className="animate-rise delay block overflow-hidden">
              <span className="text-stroke inline-block whitespace-nowrap">
                {hero.nameLine2}
                <span className="text-blue">.</span>
              </span>
            </span>
          </h1>

          {/* spinning sticker */}
          <div
            aria-hidden
            className="animate-spin-slow hidden md:grid absolute z-[5] h-32 w-32 -rotate-12 place-items-center rounded-full bg-coral text-paper md:right-[2%] md:top-[6%]"
          >
            <svg className="absolute inset-0" viewBox="0 0 100 100">
              <defs>
                <path
                  id="circ"
                  d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
                />
              </defs>
              <text className="font-mono" fontSize="11" letterSpacing="2" fill="var(--paper)">
                <textPath href="#circ">{hero.stickerText}</textPath>
              </text>
            </svg>
            <span className="animate-spin-slow-rev font-display text-3xl font-extrabold">
              {hero.stickerCore}
            </span>
          </div>
        </div>

        {/* sub row */}
        <div className="mt-[34px] flex flex-wrap items-end justify-between gap-8">
          <p className="max-w-[30ch] text-[clamp(18px,2.2vw,25px)] font-medium leading-snug">
            {rich(hero.lead)}
          </p>
          <div className="flex flex-wrap gap-3">
            <Magnetic>
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center gap-2.5 rounded-full border border-ink bg-ink px-[22px] py-3.5 font-mono text-[13px] text-paper transition-colors hover:border-blue hover:bg-blue"
              >
                {hero.primaryCta.label}
                <svg className="h-[15px] w-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center gap-2.5 rounded-full border border-ink px-[22px] py-3.5 font-mono text-[13px] transition-colors hover:bg-ink hover:text-paper"
              >
                {hero.secondaryCta.label}
              </a>
            </Magnetic>
          </div>
        </div>
      </div>

      <Marquee items={marquee} />
    </header>
  );
}
