import "./marquee.css";

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export function Marquee({ items, direction = "left", speed = 20, className = "" }: MarqueeProps) {
  return (
    <div className={`relative flex overflow-hidden py-4 bg-secondary/30 border-y border-white/5 ${className}`}>
      <div
        className="flex whitespace-nowrap gap-16 marquee-track"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === "left" ? "normal" : "reverse",
        }}
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-lg md:text-xl font-mono uppercase tracking-widest text-muted-foreground flex items-center gap-8"
          >
            {item} <span className="w-2 h-2 bg-accent rounded-full inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}