"use client";

import { useEffect, useRef } from "react";

/** A lagging, blend-mode cursor dot that swells over interactive elements. */
export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = ref.current;
    if (!dot) return;

    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;
    let tx = cx;
    let ty = cy;
    let raf = 0;

    const move = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const loop = () => {
      cx += (tx - cx) * 0.2;
      cy += (ty - cy) * 0.2;
      dot.style.left = `${cx}px`;
      dot.style.top = `${cy}px`;
      raf = requestAnimationFrame(loop);
    };

    const grow = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .cursor-grow")) {
        dot.classList.add("cursor--big");
      }
    };
    const shrink = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .cursor-grow")) {
        dot.classList.remove("cursor--big");
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", grow);
    document.addEventListener("mouseout", shrink);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", grow);
      document.removeEventListener("mouseout", shrink);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor" aria-hidden />;
}
