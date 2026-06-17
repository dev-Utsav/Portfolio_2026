"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: number;
  suffix?: string;
  className?: string;
}

/** Animates from 0 to `value` the first time it enters the viewport. */
export default function CountUp({ value, suffix = "", className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(entry.target);
          let current = 0;
          const step = () => {
            current += Math.ceil(value / 34);
            if (current >= value) {
              setN(value);
            } else {
              setN(current);
              requestAnimationFrame(step);
            }
          };
          step();
        });
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {n}
      {suffix}
    </span>
  );
}
