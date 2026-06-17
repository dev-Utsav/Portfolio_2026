"use client";

import { useState, useRef } from "react";
import data from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Work() {
  const { projects } = data;
  const [activeId, setActiveId] = useState<string>(projects[0].id);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const activeProject = projects.find((p) => p.id === activeId) || projects[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <section id="work" className="bg-paper-2 py-14 md:py-24 border-t border-ink/10">
      <div className="mx-auto max-w-[1280px] px-7">
        <Reveal>
          <div className="mb-12 flex items-baseline gap-3.5">
            <span className="font-mono text-[13px] font-bold text-blue">(04)</span>
            <h2 className="font-display text-[clamp(30px,5vw,58px)] font-bold leading-none tracking-tight">
              Selected work
            </h2>
          </div>
        </Reveal>

        {/* Desktop Split-Screen Gallery */}
        <div className="hidden md:grid md:grid-cols-[1.15fr_1.35fr] gap-12 lg:gap-16 items-start">
          
          {/* Sticky Left Preview Panel */}
          <div className="sticky top-28">
            <Reveal>
              <div 
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="group relative w-full aspect-[4/5] rounded-[24px] border-2 border-ink overflow-hidden shadow-[8px_8px_0px_0px_var(--ink)] bg-paper transition-all duration-500 cursor-pointer"
                style={{
                  transform: isHovered 
                    ? `perspective(1000px) rotateX(${-mousePos.y / 25}deg) rotateY(${mousePos.x / 25}deg) scale(1.02)` 
                    : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
                }}
              >
                {/* Background Gradients cross-fade */}
                {projects.map((p) => (
                  <div
                    key={`bg-${p.id}`}
                    className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                    style={{
                      background: p.gradient,
                      opacity: activeId === p.id ? 1 : 0,
                    }}
                  />
                ))}

                {/* Grid Overlay for texture/retro detail */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,15,12,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,15,12,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                {/* Content Overlay */}
                <div className="relative h-full flex flex-col justify-between p-8 text-white z-10">
                  {/* Top Row */}
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      {activeProject.year}
                    </span>
                    <span className="font-mono text-lg font-bold">
                      {activeProject.index}
                    </span>
                  </div>

                  {/* Center Floating Glyph with parallax movement */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-300 ease-out"
                    style={{
                      transform: isHovered 
                        ? `translate3d(${mousePos.x / 12}px, ${mousePos.y / 12}px, 0px) scale(1.1)` 
                        : "translate3d(0, 0, 0) scale(1)",
                    }}
                  >
                    <div 
                      className="font-display text-[9rem] font-extrabold text-white/90 drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)] select-none animate-float"
                    >
                      {activeProject.glyph}
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h3 className="font-display text-3xl font-extrabold tracking-tight drop-shadow-sm">
                        {activeProject.title}
                      </h3>
                      <p className="text-white/80 text-sm line-clamp-2 max-w-[90%] drop-shadow-sm">
                        {activeProject.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {activeProject.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-2.5 py-[3px] font-mono text-[10px] uppercase tracking-wide text-white"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating "Visit ↗" hover badge */}
                <div 
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"
                >
                  <a
                    href={activeProject.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto flex h-[76px] w-[76px] items-center justify-center rounded-full bg-coral border-2 border-ink text-paper font-mono text-[11px] font-bold uppercase tracking-wide shadow-lg transform -rotate-12 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer animate-tag-glow animate-bounce-slow"
                  >
                    Visit ↗
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Project List */}
          <div className="divide-y divide-ink/15 border-y border-ink/15">
            {projects.map((p) => (
              <div
                key={p.id}
                onMouseEnter={() => setActiveId(p.id)}
                className="group py-8 cursor-pointer transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="space-y-3">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-muted font-semibold">
                        {p.index}
                      </span>
                      <span className="h-[1px] w-4 bg-ink/20 group-hover:w-8 group-hover:bg-blue transition-all duration-300" />
                      <span className="font-mono text-xs text-blue font-bold uppercase tracking-wider">
                        {p.year}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-display text-2xl lg:text-3xl font-extrabold tracking-tight transition-colors duration-300 group-hover:text-blue">
                      {p.title}
                    </h3>
                    
                    <p className="text-sm text-[#403d38] max-w-[48ch] leading-relaxed">
                      {p.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-ink/10 bg-paper px-2 py-[2px] font-mono text-[10px] uppercase tracking-wide text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow CTA */}
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-paper text-ink transition-all duration-300 group-hover:bg-blue group-hover:text-paper group-hover:border-blue group-hover:rotate-45"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Mobile Layout: Responsive Interactive Cards */}
        <div className="grid gap-6 md:hidden">
          {projects.map((p) => (
            <Reveal key={`mobile-${p.id}`}>
              <div 
                className="rounded-2xl border-2 border-ink bg-paper p-6 shadow-[4px_4px_0px_0px_var(--ink)] overflow-hidden relative"
              >
                {/* Accent Gradient Blur */}
                <div 
                  className="absolute right-0 top-0 w-24 h-24 opacity-30 blur-2xl pointer-events-none rounded-full"
                  style={{ background: p.gradient }}
                />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-blue bg-blue/5 border border-blue/10 rounded-full px-2.5 py-0.5">
                    {p.year}
                  </span>
                  <span className="font-mono text-xs text-muted font-bold">
                    {p.index}
                  </span>
                </div>

                <h3 className="font-display text-xl font-extrabold tracking-tight mt-3 mb-2">
                  {p.title}
                </h3>

                <p className="text-xs text-[#403d38] leading-relaxed mb-4">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-ink/10 bg-paper-2 px-2 py-[2px] font-mono text-[9px] uppercase tracking-wide text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-ink bg-ink py-2.5 font-mono text-xs font-bold uppercase tracking-wide text-paper transition-transform active:scale-95"
                >
                  Visit Site
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
