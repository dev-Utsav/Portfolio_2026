interface MarqueeProps {
  items: string[];
}

/** Infinite scrolling strip of skills/keywords. */
export default function Marquee({ items }: MarqueeProps) {
  const row = (
    <>
      {items.map((item, i) => (
        <span key={i} className="contents">
          <span className="font-display text-2xl font-bold uppercase mx-2.5">
            {item}
          </span>
          <span className="font-display text-2xl font-bold uppercase mx-2.5 text-lime">
            ✦
          </span>
        </span>
      ))}
    </>
  );

  return (
    <div className="mt-16 overflow-hidden whitespace-nowrap border-y-2 border-ink bg-blue py-3.5 text-paper">
      <div className="inline-block animate-marquee">
        {row}
        {row}
      </div>
    </div>
  );
}
