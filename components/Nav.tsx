"use client";

import { useState } from "react";
import data from "@/data/portfolio";
import { useLiveClock } from "@/hooks/useLiveClock";

export default function Nav() {
  const { profile, nav } = data;
  const time = useLiveClock(profile.utcOffsetHours);
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-[200] border-b border-ink/10 bg-paper/70 backdrop-blur-md">
      <div className="mx-auto flex h-[62px] max-w-[1280px] items-center justify-between px-7">
        <a href="#" className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight">
          <span className="animate-blip h-2.5 w-2.5 rounded-full bg-coral" />
          {profile.brand}
          <span className="text-blue">.</span>
        </a>

        <div className="hidden gap-7 text-[12.5px] font-medium uppercase tracking-wide md:flex">
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1"
            >
              {link.label}
              <span className="absolute inset-x-0 bottom-0 h-0.5 w-0 bg-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden font-mono text-xs text-muted sm:inline">
            {profile.clockCity} {time} {profile.clockTz}
          </span>
          <a
            href="#contact"
            className="hidden rounded-full bg-ink px-4 py-2 text-[12.5px] font-semibold uppercase tracking-wide text-paper transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Let&rsquo;s talk
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center md:hidden"
          >
            <span className="font-mono text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-paper px-7 py-4 md:hidden">
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 font-mono text-sm uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
