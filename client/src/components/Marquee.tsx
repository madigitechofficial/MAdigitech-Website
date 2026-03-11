import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

export function Marquee({ items, direction = "left", speed = 20, className = "" }: MarqueeProps) {
  return (
    <div className={`relative flex overflow-hidden py-4 bg-secondary/30 border-y border-white/5 ${className}`}>
      <motion.div
        className="flex whitespace-nowrap gap-16"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
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
      </motion.div>
    </div>
  );
}
