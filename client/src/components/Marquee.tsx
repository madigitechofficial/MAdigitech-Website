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
        className="flex animate-marquee"
        style={{
          "--marquee-duration": `${speed}s`,
          gap: "1rem",
          minWidth: "max-content",
          willChange: "transform",
          animationDirection: direction === "left" ? "normal" : "reverse",
        } as React.CSSProperties}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-lg md:text-xl font-mono uppercase tracking-widest text-muted-foreground inline-flex items-center shrink-0"
            style={{ gap: "2rem", paddingInline: "1rem" }}
          >
            {item} <span className="w-2 h-2 bg-accent rounded-full inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}