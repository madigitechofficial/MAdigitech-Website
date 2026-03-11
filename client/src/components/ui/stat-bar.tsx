import React, { useEffect, useState, useRef } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";

function CountUp({ value, suffix = "", duration = 2 }: { value: number, suffix?: string, duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const displayValue = useTransform(spring, (current) => 
    Math.floor(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}

interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export function StatBar({ stats, className = "" }: { stats: Stat[], className?: string }) {
  return (
    <div className={`py-12 md:py-20 border-y border-white/5 bg-[#050505] relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left group">
              <div className="text-4xl md:text-6xl font-display font-black text-accent mb-4 tracking-tighter">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/40 group-hover:text-white/70 transition-colors duration-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent pointer-events-none" />
    </div>
  );
}
