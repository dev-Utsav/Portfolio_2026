import React from "react";

/**
 * Renders inline emphasis markup used in `lead` and `bio`:
 *   **text**  ->  bold blue
 *   __text__  ->  lime highlight
 */
export function rich(text: string): React.ReactNode[] {
  const tokens = text.split(/(\*\*[^*]+\*\*|__[^_]+__)/g);
  return tokens.filter(Boolean).map((t, i) => {
    if (t.startsWith("**") && t.endsWith("**")) {
      return (
        <b key={i} className="font-semibold text-blue">
          {t.slice(2, -2)}
        </b>
      );
    }
    if (t.startsWith("__") && t.endsWith("__")) {
      return (
        <span key={i} className="hl-lime px-0.5">
          {t.slice(2, -2)}
        </span>
      );
    }
    return <React.Fragment key={i}>{t}</React.Fragment>;
  });
}
