"use client";

import { useRef, type ReactNode } from "react";

interface MagneticProps {
  children: ReactNode;
  /** pull strength, 0–1 */
  strength?: number;
  className?: string;
}

/** Wraps an element so it drifts toward the cursor on hover. */
export default function Magnetic({
  children,
  strength = 0.35,
  className = "",
}: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - r.left - r.width / 2;
    const my = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${mx * strength}px, ${my * strength}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-block transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </span>
  );
}
