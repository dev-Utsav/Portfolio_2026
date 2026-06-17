"use client";

import data from "@/data/portfolio";
import { rich } from "@/lib/rich";
import type { ChipVariant } from "@/data/types";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

const chipHover: Record<ChipVariant, string> = {
  coral: "hover:bg-coral hover:text-paper hover:border-coral",
  blue: "hover:bg-blue hover:text-paper hover:border-blue",
  lime: "hover:bg-lime hover:border-lime",
  ink: "hover:bg-ink hover:text-paper",
};

export default function About() {
  const { bio, interests, stats } = data;

  return (
    <section id="about" className="bg-paper-2 py-14 md:py-24">
      <div className="mx-auto max-w-[1280px] px-7">
        <Reveal>
          <div className="mb-12 flex items-baseline gap-3.5">
            <span className="font-mono text-[13px] font-bold text-blue">(02)</span>
            <h2 className="font-display text-[clamp(30px,5vw,58px)] font-bold leading-none tracking-tight">
              About
            </h2>
          </div>
        </Reveal>

        <div className="grid items-start gap-[54px] md:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <p className="font-display text-[clamp(22px,3vw,34px)] font-medium leading-tight tracking-tight">
              {rich(bio)}
            </p>
            <div className="mt-[30px] flex flex-wrap gap-2.5">
              {interests.map((it, i) => (
                <span
                  key={i}
                  className={`inline-flex cursor-default items-center gap-[7px] rounded-full border-[1.5px] border-ink px-3.5 py-2.5 font-mono text-[12.5px] font-medium transition-transform duration-200 hover:-rotate-3 hover:scale-105 ${chipHover[it.variant]}`}
                >
                  <span>{it.emoji}</span>
                  {it.label}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="grid gap-0.5 overflow-hidden rounded-2xl border-2 border-ink">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="group flex items-baseline justify-between gap-3 bg-paper px-[22px] py-[22px] [&:not(:last-child)]:border-b-2 [&:not(:last-child)]:border-ink"
                >
                  <CountUp
                    value={s.value}
                    suffix={s.suffix}
                    className="font-display text-[clamp(38px,6vw,58px)] font-extrabold leading-none tracking-tight transition-colors group-hover:text-coral"
                  />
                  <span className="max-w-[14ch] text-right font-mono text-[11.5px] uppercase tracking-wide text-muted">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
