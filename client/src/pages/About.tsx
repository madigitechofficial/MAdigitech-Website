import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  Rocket,
  Shield,
  Zap,
  Heart,
  Star,
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";
import { CTA } from "@/components/CTA";
import { StatBar } from "@/components/ui/stat-bar";

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
};

const testimonialsData = [
  {
    author: {
      name: "Michael Rossi",
      handle: "@mrossi_ops",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop",
    },
    text: "The AI automation for our lead generation saved us 20+ hours a week. It's not just a tool, it's like having a new team member who never sleeps.",
  },
  {
    author: {
      name: "Elena Rodriguez",
      handle: "@elena_marketing",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop",
    },
    text: "Most agencies talk about 'conversion', but MAdigitech actually delivered. Our landing page bounce rate dropped from 65% to 28% in one month.",
  },
  {
    author: {
      name: "James Chen",
      handle: "@jchen_founder",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&auto=format&fit=crop",
    },
    text: "The brutalist design aesthetic they brought to our portfolio really made us stand out in a sea of generic SaaS templates. Authentic and bold.",
  },
  {
    author: {
      name: "Sarah Williams",
      handle: "@swilliams_tech",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop",
    },
    text: "Technically superior. The site loads instantly and the backend integration with our CRM was seamless. Highly impressed with the engineering.",
  },
  {
    author: {
      name: "Tom Henderson",
      handle: "@thenderson_peak",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop",
    },
    text: "They didn't just build a website; they understood our business model and optimized the entire user journey for sales. Rare to find that.",
  },
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "The precision and speed they brought to our project saved us months of development time. Highly recommended.",
  },
  {
    author: {
      name: "Marcus Thorne",
      handle: "@marcustech",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop",
    },
    text: "A true partner in innovation. They understand the business side of tech as much as the code.",
  },
  {
    author: {
      name: "Robert Vance",
      handle: "@rvance_creative",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&auto=format&fit=crop",
    },
    text: "The attention to detail in the typography and spacing is what sold us. MAdigitech doesn't just 'make websites', they craft digital identities.",
  },
];

const values = [
  {
    icon: Shield,
    t: "Radical Integrity",
    d: "We tell you exactly what you need to hear, not just what sounds good. We believe that being honest and open is the only way to build real trust.",
  },
  {
    icon: Zap,
    t: "Extreme Performance",
    d: "In the digital world, speed is everything. We make sure every part of your project is lightning fast so your users stay happy and engaged.",
  },
  {
    icon: Heart,
    t: "Human-Centric",
    d: "Technology should always make life easier for people. We design every system with real users in mind to create tools that feel natural and easy to use.",
  },
  {
    icon: Star,
    t: "Legacy Thinking",
    d: "We don't just build for today. We create high-quality systems that last, keeping your business running smoothly and prepared for the future.",
  },
];

export default function About() {
  return (
    <main className="bg-black pt-24 md:pt-32 pb-0 overflow-hidden">
      {/* 1. Mission Statement (Hero) */}
      <section className="px-6 md:px-12 mb-24 md:mb-32 lg:mb-48 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full -z-10" style={{ background: 'radial-gradient(circle, rgba(69,126,97,0.08) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-mono text-accent text-sm tracking-[0.4em] uppercase mb-6 mt-4 md:mb-8 block font-bold"
          >
            Est. 2025 / Digital Excellence
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.26, 1, 0.3, 1],
            }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[8rem] font-display font-black leading-[0.85] text-white mb-12 md:mb-16 relative z-20 tracking-tighter uppercase"
          >
            WE ARE <br />
            <span className="text-outline italic">CRAFTING</span> <br />
            LEGACIES.
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg md:text-2xl lg:text-3xl text-muted-foreground font-light leading-tight border-l-2 border-accent/30 pl-6 md:pl-8 max-w-2xl"
            >
              We're a team of architects, engineers, and dreamers, building
              digital systems that work flawlessly today and set the stage for
              tomorrow.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Company Values */}
      <section className="px-6 md:px-12 mb-32 md:mb-48 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-16 md:mb-20">
            <span className="font-mono text-accent text-xs tracking-widest uppercase mb-4 block">
              Our DNA
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white tracking-tighter">
              Guided by <br />
              Principles.
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 40,
                  x: i % 2 === 0 ? -20 : 20,
                }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="p-6 md:p-8 lg:p-10 bg-[#0a0a0a] border border-white/5 rounded-none hover:border-accent/50 transition-all group relative overflow-hidden"
              >
                {/* Minimal corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 group-hover:border-accent/50 transition-colors" />

                <h4 className="text-lg sm:text-xl md:text-2xl font-display font-bold mb-4 md:mb-6 text-white tracking-tighter leading-none group-hover:text-accent transition-colors">
                  {v.t}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {v.d}
                </p>

                {/* Subtle bottom number */}
                <div className="mt-6 md:mt-8 font-mono text-[10px] text-white/10 group-hover:text-accent/20 transition-colors">
                  0{i + 1} // CORE_VALUE
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatBar
        stats={[
          { label: "Bespoke Architecture", value: 100, suffix: "%" },
          { label: "Pixel-Perfect Precision", value: 99, suffix: "%" },
          { label: "Stock Assets", value: 0, suffix: "%" },
        ]}
      />

      {/* 3. Our Story */}
      <section className="px-6 md:px-12 mb-32 md:mb-48 mt-32 md:mt-48 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl group"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=75&w=900&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                alt="Our Journey"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10">
                <span className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white/20 uppercase tracking-tighter">
                  SINCE <br /> 2024
                </span>
              </div>
            </motion.div>

            <div className="space-y-12">
              <motion.div {...fadeInUp}>
                <span className="font-mono text-accent text-xs tracking-widest uppercase mb-4 block">
                  The Journey
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black mb-8 text-white tracking-tighter">
                  From Vision <br />
                  To Reality.
                </h2>
                <div className="space-y-6 text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                  <p>
                    MAdigitech began as a rebellion against mediocre digital
                    experiences. We saw a world of slow websites and generic
                    branding, and we knew we could do better.
                  </p>
                  <p>
                    What began as a small team of independent designers and
                    developers has grown into a global agency, creating powerful
                    digital experiences for ambitious brands.
                  </p>
                  <p>
                    Every line of code and every pixel we place is focused on
                    one goal: creating work that lasts.
                  </p>
                </div>
              </motion.div>

              <div className="pt-8 grid grid-cols-2 gap-8 md:gap-12 border-t border-white/5">
                <div>
                  <div className="text-3xl md:text-4xl font-display font-black text-accent mb-2 uppercase">
                    24+
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-white/40">
                    Projects Delivered
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-display font-black text-accent mb-2 uppercase">
                    10+
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-white/40">
                    Global Brands
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-level Process Section */}
      <section className="px-6 md:px-12 mb-0 py-20 md:py-24 bg-[#080808] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="mb-16 md:mb-20">
            <span className="font-mono text-accent text-xs tracking-widest uppercase mb-4 block">
              Our Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white tracking-tighter leading-none">
              The Path to <br />
              Digital <span className="text-accent">Dominance.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden md:block -z-10" />

            {[
              {
                step: "01",
                title: "Discover",
                desc: `We take the time to really understand your business, what works, what doesn't, and where the opportunities hide. Knowing the "why" first means we build solutions that actually make sense.`,
              },
              {
                step: "02",
                title: "Design",
                desc: "Our designs grab attention without trying too hard. They look sleek, feel intentional, and guide your users to take action naturally.",
              },
              {
                step: "03",
                title: "Deploy",
                desc: "We launch fast and smooth, with code that just works. Everything runs seamlessly from day one and keeps performing as you grow.",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 md:p-10 bg-white/[0.02] border border-white/5 rounded-2xl md:rounded-[3rem] hover:border-accent/30 transition-all group relative"
              >
                <div className="text-5xl md:text-6xl font-display font-black text-white/5 absolute top-4 md:top-6 right-6 md:right-10 group-hover:text-accent/10 transition-colors uppercase italic">
                  {p.step}
                </div>
                <h4 className="text-xl md:text-2xl lg:text-3xl font-display font-black mb-4 md:mb-6 text-white tracking-tight group-hover:text-accent transition-colors">
                  {p.title}
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatBar
        stats={[
          { label: "Faster Deployment", value: 90, suffix: "%" },
          { label: "Core Web Vitals", value: 100, suffix: "/100" },
          { label: "Conversion Lift", value: 40, suffix: "%" },
        ]}
        className="border-t-0"
      />

      {/* 4. Team Info */}
      {/* <section className="px-6 md:px-12 mb-48">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <span className="font-mono text-accent text-xs tracking-widest uppercase mb-4 block">
              The Architects
            </span>
            <h2 className="text-4xl md:text-7xl font-display font-black text-white tracking-tighter leading-none">
              The Faces Behind <br />
              The <span className="text-accent">Tech.</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl mb-6 relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-center group-hover:-translate-y-2 transition-transform duration-500">
                  <h4 className="text-2xl font-bold text-white mb-1 uppercase tracking-tight">
                    {member.name}
                  </h4>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-bold">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 5. Testimonials */}
      <TestimonialsSection
        title="Proof of Impact"
        description="What our clients say"
        testimonials={testimonialsData}
        fadeOverlay={
          <>
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />
          </>
        }
      />

      {/* STAT BAR */}
      <StatBar
        stats={[
          { label: "Partner Attention", value: 1, suffix: ":1" },
          { label: "Max Projects at Once", value: 3, suffix: "" },
          { label: "2026-Ready Stack", value: 2026, suffix: "" },
        ]}
        className="border-b-0"
      />

      {/* 6. Strategic CTA */}
      <div className="relative">
        {/* Transition Gradient */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050505] to-transparent z-10 pointer-events-none" />
        <CTA />
      </div>

      {/* 7. WANT TO WORK WITH US? */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-accent text-white relative overflow-hidden">
        {/* Subtle background texture/glow */}
        <div className="absolute inset-0 bg-[url('/textures/carbon.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 rounded-full -z-0" style={{ background: 'radial-gradient(circle, rgba(69,126,97,0.08) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-display font-black mb-8 md:mb-12 leading-[0.85] italic uppercase tracking-tighter"
          >
            WANT TO WORK <br /> WITH US?
          </motion.h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-white hover:text-black px-8 md:px-12 py-6 md:py-10 rounded-full font-display font-black text-lg md:text-2xl transition-all inline-flex items-center gap-4 md:gap-6 shadow-2xl group"
              >
                Join the Crew{" "}
                <ArrowRight className="w-6 md:w-8 h-6 md:h-8 group-hover:translate-x-2 md:group-hover:translate-x-3 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
