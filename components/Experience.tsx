"use client";

import data from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Experience() {
  const { experience } = data;

  return (
    <section id="experience" className="py-14 md:py-24">
      <div className="mx-auto max-w-[1280px] px-7">
        <Reveal>
          <div className="mb-12 flex items-baseline gap-3.5">
            <span className="font-mono text-[13px] font-bold text-blue">(01)</span>
            <h2 className="font-display text-[clamp(30px,5vw,58px)] font-bold leading-none tracking-tight">
              Where I&rsquo;ve worked
            </h2>
          </div>
        </Reveal>

        <div className="relative ml-3 md:ml-6 border-l-2 border-ink/10 pl-8 md:pl-12 space-y-10">
          {experience.map((x, i) => (
            <Reveal key={i}>
              <div className="relative group">
                {/* Timeline Dot */}
                {i === 0 ? (
                  <div className="absolute -left-10 md:-left-14 top-[26px] flex h-4 w-4 items-center justify-center rounded-full bg-blue">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-blue/40" />
                    <span className="h-2 w-2 rounded-full bg-paper" />
                  </div>
                ) : (
                  <div className="absolute -left-10 md:-left-14 top-[26px] h-4 w-4 rounded-full border-2 border-ink bg-paper transition-all duration-300 group-hover:bg-coral group-hover:border-coral group-hover:scale-125" />
                )}

                {/* Experience Card */}
                <div className="rounded-[18px] border-2 border-ink bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--ink)]">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue">
                        {x.role}
                      </span>
                      <h3 className="font-display text-xl font-extrabold tracking-tight mt-0.5">
                        {x.company}
                      </h3>
                    </div>
                    <span className="self-start font-mono text-xs font-medium border border-ink/20 rounded-full px-3 py-1 bg-paper-2 text-ink/80 md:self-center">
                      {x.when}
                    </span>
                  </div>
                  <p className="mt-4 text-[14px] leading-relaxed text-[#403d38]">
                    {x.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
