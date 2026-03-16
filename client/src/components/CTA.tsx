import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import { Link } from "wouter";
import { Button } from "./ui/button";

interface CTAProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export function CTA({
  title = (
    <>
      Beyond <br />
      <span className="text-accent italic">Digital</span> Limits.
    </>
  ),
  description = "Don’t settle for average. Partner with us to build digital systems that truly set your industry’s standard.",
}: CTAProps) {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-[#050505] overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(69,126,97,0.08) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(69,126,97,0.06) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="flex flex-col gap-8 text-center lg:text-left lg:max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shadow-[0_0_20px_rgba(69,126,97,0.2)]">
                <Rocket size={22} />
              </div>
              <span className="font-mono text-accent text-xs tracking-[0.4em] uppercase font-bold">
                Next Phase
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white tracking-tighter uppercase leading-[0.85]"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg md:text-xl max-w-xl font-light leading-relaxed"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-4 flex justify-center lg:justify-start"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-accent text-white hover:bg-white hover:text-accent rounded-full px-10 py-8 text-lg font-bold transition-all duration-500 hover:scale-105 shadow-[0_0_40px_rgba(69,126,97,0.4)] group"
                >
                  Book A Free Consultation{" "}
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Image Stack */}
          <div className="relative flex-1 w-full lg:w-auto flex justify-center lg:justify-end items-center h-[400px] md:h-[500px]">
            <motion.div
              initial={{ opacity: 0, x: 60, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 2 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-[500px] aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group"
            >
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=75&w=900&auto=format&fit=crop"
                alt="High Performance Systems"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: -100, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 left-0 md:-left-16 z-30 w-40 md:w-56 aspect-square rounded-[3rem] overflow-hidden border-[6px] border-[#050505] shadow-2xl -rotate-6"
            >
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=75&w=600&auto=format&fit=crop"
                alt="Digital Innovation"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, x: 100, y: -100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 md:-right-12 z-20 w-32 md:w-48 aspect-square rounded-full overflow-hidden border-[6px] border-[#050505] shadow-2xl rotate-12"
            >
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=75&w=600&auto=format&fit=crop"
                alt="Tech Stack"
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute top-1/2 left-[-10%] md:left-[-20%] z-40 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl hidden md:block shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/70">
                  Systems Online
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
