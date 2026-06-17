"use client";

import data from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Services() {
  const { services } = data;

  return (
    <section id="services" className="py-14 md:py-24">
      <div className="mx-auto max-w-[1280px] px-7">
        <Reveal>
          <div className="mb-12 flex items-baseline gap-3.5">
            <span className="font-mono text-[13px] font-bold text-blue">(03)</span>
            <h2 className="font-display text-[clamp(30px,5vw,58px)] font-bold leading-none tracking-tight">
              What I do
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <Reveal key={s.num}>
              <div className="group h-full rounded-[18px] border-2 border-ink bg-paper p-7 transition-all duration-300 hover:-translate-y-1.5 hover:bg-ink hover:text-paper">
                <div className="font-mono text-xs text-blue group-hover:text-lime">
                  {s.num}
                </div>
                <h3 className="my-3.5 font-display text-[23px] font-bold tracking-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-[#403d38] group-hover:text-[#cfcabb]">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
