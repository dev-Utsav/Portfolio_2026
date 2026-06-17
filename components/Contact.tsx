"use client";

import data from "@/data/portfolio";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

export default function Contact() {
  const { contact, profile, socials } = data;

  return (
    <div className="bg-paper-2 pt-6 md:pt-10">
      <section
        id="contact"
        className="rounded-t-[30px] bg-ink text-paper"
      >
        <div className="mx-auto max-w-[1280px] px-7 pb-10 pt-14 md:pt-[88px]">
          <Reveal>
            <div className="mb-5 font-mono text-[12.5px] uppercase tracking-wider text-lime">
              {contact.eyebrow}
            </div>
          </Reveal>

          <Reveal>
            <div className="font-display text-[clamp(44px,10vw,140px)] font-extrabold leading-[0.9] tracking-tight">
              {contact.lineTop}
              <br />
              <span className="sm:whitespace-nowrap">
                {contact.lineBottom}{" "}
                <Magnetic>
                  <a href={`mailto:${profile.email}`} className="text-lime transition-colors hover:text-lime">
                    {contact.highlight}
                  </a>
                </Magnetic>
              </span>
            </div>
          </Reveal>

          <Magnetic>
            <a
              href={`mailto:${profile.email}`}
              className="mt-[30px] inline-block border-b-2 border-lime pb-1 font-mono text-[clamp(16px,2.4vw,26px)] transition-colors hover:text-lime"
            >
              {profile.email}
            </a>
          </Magnetic>

          <div className="mt-[70px] flex flex-wrap items-center justify-between gap-5 border-t border-paper/20 pt-6">
            <div className="flex gap-[22px] font-mono text-[13px] uppercase tracking-wide">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="transition-colors hover:text-lime">
                  {s.label}
                </a>
              ))}
            </div>
            <div className="font-mono text-xs text-[#9c978c]">{contact.copyright}</div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-mono text-xs text-[#9c978c] transition-colors hover:text-lime"
            >
              ↑ Back to top
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
