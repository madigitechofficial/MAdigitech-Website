import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Plus,
  Quote,
  Target,
  Rocket,
} from "lucide-react";
import { Link } from "wouter";
import { Marquee } from "@/components/Marquee";
import { useServices, useTestimonials } from "@/hooks/use-data";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";
import { CTA } from "@/components/CTA";
import WayWeThink from "@/components/WayWeThink";
import { Tiles } from "@/components/ui/tiles";

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
};

function AnimatedLetters({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const letters = Array.from(text);
  return (
    <motion.span
      className={`inline-block whitespace-nowrap overflow-hidden transform-gpu ${className}`}
      variants={{
        initial: {},
        whileInView: {
          transition: { staggerChildren: 0.05, delayChildren: 0.1 },
        },
      }}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-100px" }}
    >
      {letters.map((char, i) =>
        char === " " ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <motion.span
            key={i}
            className="inline-block transform-gpu"
            variants={{
              initial: { y: "110%", skewY: 10, opacity: 0 },
              whileInView: { y: 0, skewY: 0, opacity: 1 },
            }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {char}
          </motion.span>
        ),
      )}
    </motion.span>
  );
}

const staticTestimonials = [
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

export default function Home() {
  const services = [
    { id: 1, title: "AI Automation", description: "Streamline your operations with intelligent systems that think, learn, and execute at scale." },
    { id: 2, title: "Social Media Marketing	", description: "Dominate the digital conversation with high-performance content and strategic growth systems." },
    { id: 3, title: "Web Development", description: "Build digital weapons. High-speed, brutalist-inspired websites that convert traffic into revenue." },
    { id: 4, title: "Graphic Design", description: "Visual identities that command attention. We define the aesthetic of modern market leaders." },
  ];
  const { data: testimonials } = useTestimonials();
  const heroRef = useRef(null);

  return (
    <main className="bg-background overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative flex flex-col justify-center px-4 md:px-12 py-16 md:py-24 lg:py-0 overflow-hidden bg-[#050505]"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/4 -right-1/4 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-accent/20 rounded-full blur-[60px] md:blur-[120px] transform-gpu"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/4 -left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/10 rounded-full blur-[50px] md:blur-[100px] transform-gpu"
          />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
        </div>

        <div className="z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-2 md:px-0">
          <div className="relative z-20 text-center lg:text-left pt-12 lg:pt-[7rem]">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-display font-black text-white mb-4 md:mb-4 lg:mb-4 tracking-tighter break-words overflow-wrap-anywhere">
              <AnimatedLetters text="MA" className="block text-accent leading-[0.8]" />
              <AnimatedLetters text="DIGITECH" className="block leading-[0.8]" />
            </h1>

            <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-center justify-center lg:items-center mb-8 md:mb-10 lg:mb-12">
              <motion.p
                {...fadeInUp}
                transition={{ delay: 0.5 }}
                className="max-w-xs md:max-w-sm text-muted-foreground font-light text-sm md:text-lg lg:text-xl leading-tight border-l-0 lg:border-l-2 border-accent/30 lg:pl-6 text-center lg:text-left transform-gpu"
              >
                We combine bold, standout design with high-performance systems
                to craft digital experiences that make modern brands impossible
                to ignore.
              </motion.p>

              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.6 }}
                className="flex flex-col items-center lg:items-start gap-2"
              >
                <div className="flex -space-x-3 overflow-visible">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-background bg-secondary overflow-hidden flex-shrink-0"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="user"
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-background bg-accent flex items-center justify-center text-[8px] md:text-[10px] font-bold text-white flex-shrink-0">
                    +10
                  </div>
                </div>
                <span className="text-[8px] md:text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  Trusted by 10+ Global Brands
                </span>
              </motion.div>
            </div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-white hover:text-accent rounded-full px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 text-sm sm:text-base md:text-xl font-bold group transition-all duration-500 shadow-[0_0_40px_rgba(69,126,97,0.4)] transform-gpu w-full sm:w-auto"
                >
                  Book A Free Consultation{" "}
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform w-4 sm:w-5 h-4 sm:h-5" />
                </Button>
              </Link>
              <Link href="/about" className="block lg:hidden xl:block">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-6 sm:px-8 md:px-12 py-4 sm:py-6 md:py-8 text-sm sm:text-base md:text-xl font-bold border-white/20 hover:bg-white/10 text-white backdrop-blur-sm w-full sm:w-auto"
                >
                  Our Story
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="relative z-10 w-full max-w-[280px] sm:max-w-[400px] mx-auto lg:max-w-none mt-8 sm:mt-4 lg:mt-0 hidden sm:block lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
              className="relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 shadow-[0_0_100px_rgba(69,126,97,0.1)] group transform-gpu"
            >
              <img
                src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2670&auto=format&fit=crop"
                alt="Digital Art"
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/40 via-transparent to-transparent mix-blend-overlay" />

              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotateY: [0, 10, 0],
                  scale: [0.9, 0.95, 0.9],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-4 md:top-10 -left-4 md:-left-10 bg-black/80 backdrop-blur-xl p-3 md:p-6 rounded-xl md:rounded-2xl border border-white/10 shadow-2xl md:scale-90 xl:scale-100 transform-gpu"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <Target size={16} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xs md:text-sm">
                      Precision
                    </div>
                    <div className="text-accent text-[8px] md:text-xs font-mono">
                      100% Quality
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotateY: [0, -10, 0],
                  scale: [0.9, 0.95, 0.9],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-4 md:bottom-10 -right-4 md:-right-10 bg-accent p-3 md:p-6 rounded-xl md:rounded-2xl shadow-2xl md:scale-90 xl:scale-100 transform-gpu"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
                    <Rocket size={16} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xs md:text-sm">
                      Speed
                    </div>
                    <div className="text-white/80 text-[8px] md:text-xs font-mono">
                      Next-Gen Tech
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 transform-gpu"
        >
          <span className="font-mono text-[8px] uppercase tracking-[0.5em] text-muted-foreground">
            Explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[1px] h-8 bg-gradient-to-b from-accent to-transparent transform-gpu"
          />
        </motion.div>
      </section>

      <Marquee
        items={["Innovation", "Branding", "Success", "Strategy", "Growth"]}
        speed={20}
        className="bg-accent py-4"
      />

      {/* Way We Think Section */}
      <WayWeThink />

      {/* Process Section */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <motion.span
                {...fadeInUp}
                className="font-mono text-accent text-sm tracking-widest mb-6 block transform-gpu"
              >
                OUR PROCESS
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-display font-black mb-12 leading-tight">
                How We Bring <br /> Ideas To{" "}
                <span className="text-accent underline">Life</span>
              </h2>
              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Discovery",
                    desc: "We dive ourselves in your world to understand your audience, goals, and challenges.",
                  },
                  {
                    step: "02",
                    title: "Strategy",
                    desc: "A detailed roadmap defining the creative and technical direction of the project.",
                  },
                  {
                    step: "03",
                    title: "Execution",
                    desc: "High-quality design and robust development with constant feedback loops.",
                  },
                  {
                    step: "04",
                    title: "Delivery",
                    desc: "Final testing, launch support, and ongoing growth optimization.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    {...fadeInUp}
                    transition={{ delay: i * 0.1 }}
                    className="group transform-gpu"
                  >
                    <div className="flex gap-8 border-b border-white/5 pb-8 group-hover:border-accent/50 transition-colors">
                      <span className="text-accent font-mono text-lg">
                        {item.step}
                      </span>
                      <div>
                        <h4 className="text-2xl font-bold mb-4">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="sticky top-40 hidden lg:block z-0 w-full">
              <div className="aspect-[4/6] rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative group">
                <img
                  src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2670&auto=format&fit=crop"
                  alt="Process"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-accent/20 mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 md:py-40 px-6 md:px-12 relative overflow-hidden bg-black">
        {/* Tiles Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 blur-[1px]">
          <Tiles rows={20} cols={10} tileSize="md" />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
            <div>
              <motion.span
                {...fadeInUp}
                className="font-mono text-accent text-sm tracking-widest mb-6 block transform-gpu"
              >
                OUR EXPERTISE
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-display font-black">
                Our Services
              </h2>
            </div>
            <Link
              href="/services"
              className="text-accent font-mono text-sm uppercase tracking-widest hover:underline"
            >
              View All
            </Link>
          </div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services?.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                  rotateZ: 1,
                  transition: { duration: 0.2 },
                }}
                transition={{ delay: i * 0.1 }}
                className="p-8 md:p-10 bg-secondary/20 border border-white/5 rounded-3xl hover:bg-accent transition-all group cursor-pointer flex flex-col transform-gpu"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 md:mb-12 group-hover:bg-white/20 flex-shrink-0">
                  <Plus
                    size={24}
                    className="group-hover:rotate-90 transition-transform"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white break-words">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-white/80 line-clamp-4">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.01, rotateZ: 1, transition: { duration: 0.2 } }}
                transition={{ delay: i * 0.1 }}
                className="p-8 md:p-10 bg-secondary/20 border border-white/5 rounded-3xl hover:bg-accent transition-all group cursor-pointer flex flex-col transform-gpu"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 md:mb-12 group-hover:bg-white/20 flex-shrink-0">
                  <Plus size={24} className="group-hover:rotate-90 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white break-words">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-white/80 line-clamp-4">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>  
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-48 bg-black text-white px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 -right-[10%] w-[500px] h-[500px] bg-accent/30 rounded-full blur-[120px] transform-gpu"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.05, 0.15, 0.05],
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[150px] transform-gpu"
          />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
            <motion.div
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.span
                variants={fadeInUp}
                className="font-mono text-accent text-sm tracking-[0.4em] mb-8 block uppercase transform-gpu"
              >
                THE MAdigitech Partnership
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black leading-[0.85] mb-12 tracking-tighter transform-gpu"
              >
                WHY <br />
                <span className="text-accent italic">PARTNER</span> <br />
                <span className="text-outline">WITH US?</span>
              </motion.h2>

              <div className="space-y-12 relative">
                <div className="absolute left-[15px] top-2 bottom-2 w-px bg-white/5 hidden md:block" />
                {[
                  {
                    t: "Human-Centric",
                    d: "We build for humans, not just algorithms. Every interaction feels natural, intuitive, and memorable",
                    icon: <Target className="w-5 h-5" />,
                  },
                  {
                    t: "Future-Proof",
                    d: "We build systems that scale as your business grows, using modern technology that stays relevant and reliable over time.",
                    icon: <Rocket className="w-5 h-5" />,
                  },
                  {
                    t: "Data-Driven",
                    d: "Every choice we make is backed by real user insights and data. The result? Designs that deliver measurable impact.",
                    icon: <CheckCircle className="w-5 h-5" />,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex gap-6 md:gap-10 items-start group relative transform-gpu"
                  >
                    <div className="relative z-10 flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,1)]">
                      <div className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <span className="text-white/30 font-mono text-xs group-hover:opacity-0 transition-opacity duration-500">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="pt-1">
                      <h4 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent transition-colors duration-500">
                        {item.t}
                      </h4>
                      <p className="text-muted-foreground text-sm md:text-lg leading-relaxed max-w-md">
                        {item.d}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
              className="relative aspect-square flex items-center justify-center transform-gpu"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-white/5 rounded-full transform-gpu"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border border-accent/10 rounded-full border-dashed transform-gpu"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 border border-white/10 rounded-full transform-gpu"
              />

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] bg-[#0a0a0a] rounded-full flex items-center justify-center p-8 md:p-12 border border-accent/20 shadow-[0_0_80px_rgba(69,126,97,0.2)] relative overflow-hidden group cursor-default transform-gpu"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="text-center relative z-10">
                  <motion.span
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-8xl sm:text-9xl md:text-[10rem] font-display font-black block leading-none text-white group-hover:text-accent transition-colors duration-500 transform-gpu"
                  >
                    8+
                  </motion.span>
                  <span className="font-mono uppercase tracking-[0.3em] text-[10px] sm:text-xs md:text-sm text-accent">
                    Years of Dominance
                  </span>
                  <div className="mt-8 flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 right-0 p-4 bg-accent/10 backdrop-blur-md border border-white/10 rounded-2xl hidden md:block transform-gpu"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                  <span className="text-[10px] font-mono uppercase text-white/50 tracking-tighter">
                    Live Performance
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection
        title="Trusted by developers worldwide"
        description="Join hundreds of businesses who are already building the future with our AI systems"
        testimonials={staticTestimonials}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-bg-secondary/20 to-transparent sm:block z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-bg-secondary/20 to-transparent sm:block z-10" />
      </TestimonialsSection>

      {/* FAQs */}
      <section className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <motion.span
              {...fadeInUp}
              className="font-mono text-accent text-sm tracking-widest mb-6 block transform-gpu"
            >
              HAVE QUESTIONS?
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-display font-bold transform-gpu">
              Common Queries
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "What services does MAdigitech offer?",
                a: "MAdigitech specializes in AI Automation, Social Media Marketing, Website Development, and Graphic Design. We blend cutting-edge technology with creative strategy to build digital solutions that drive business growth.",
              },
              {
                q: "How long does a project take?",
                a: "The timeline depends on the complexity and scale of the project. While smaller tasks might take a few days, comprehensive digital transformations can take several weeks. We recommend consulting with our staff to get a detailed timeline tailored to your specific requirements.",
              },
              {
                q: "Do you work with startups or only established businesses?",
                a: "We work with businesses of all sizes, from startups to established enterprises. Our flexible approach allows us to scale our services to match your needs and budget. Whether you're launching your first product or scaling an existing operation, we're here to help.",
              },
              {
                q: "Do you provide ongoing support after project completion?",
                a: "Yes! We offer comprehensive maintenance and support packages to ensure your digital solutions continue to perform optimally. This includes regular updates, security patches, performance monitoring, and technical support whenever you need it.",
              },
              {
                q: "How do you handle project pricing?",
                a: "We offer transparent, customized pricing based on your specific needs. After an initial consultation to understand your requirements, we provide a detailed proposal outlining costs, deliverables, and timelines. We believe in honest pricing with no hidden fees, ensuring you get the best value for your investment.",
              },
              {
                q: "How do you handle payments?",
                a: "Typically 30% upfront and 70% upon completion, though we offer milestone billing for larger projects via Bank Transfer or Paypal.",
              },
            ].map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-white/5 bg-secondary/10 px-6 rounded-2xl overflow-hidden"
              >
                <AccordionTrigger className="text-lg font-bold hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title={
          <>
            BEYOND <br />
            <span className="text-outline">DIGITAL</span> <br />
            LIMITS.
          </>
        }
        description="Stop settling for digital mediocrity. Partner with us to build high-performance systems that define your industry's future."
      />
    </main>
  );
}
