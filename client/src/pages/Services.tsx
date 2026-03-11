import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Bot, Share2, Code2, Palette, ArrowRight } from "lucide-react";
import { CTA } from "@/components/CTA";
import { Link } from "wouter";

const services = [
  {
    id: "ai",
    title: "AI Automation",
    description:
      "Automate your operations with smart systems that learn, adapt, and work at scale - so you can focus on what matters most.",
    icon: <Bot className="w-6 h-6 text-accent" />,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
    subServices: [
      {
        title: "Custom AI Agents",
        content:
          "We build autonomous agents tailored to your specific business logic, handling customer support, lead qualification, and data processing 24/7.",
      },
      {
        title: "Workflow Optimization",
        content:
          "Automate repetitive tasks across your stack. We integrate LLMs into your existing workflows to reduce manual overhead by up to 80%.",
      },
      {
        title: "Predictive Analytics",
        content:
          "Turn your data into foresight. We help you predict trends and customer behavior so you can act ahead of the competition.",
      },
    ],
  },
  {
    id: "smm",
    title: "Social Media Marketing",
    description:
      "Dominate the digital conversation with high-performance content and strategic growth systems.",
    icon: <Share2 className="w-6 h-6 text-accent" />,
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop",
    subServices: [
      {
        title: "Content Strategy & Production",
        content:
          "We plan and produce content that converts. From short videos to polished visuals, every piece is designed to reach and engage your audience.",
      },
      {
        title: "Community Management",
        content:
          "Proactive engagement that turns followers into fans and fans into customers. We manage your reputation and build real relationships.",
      },
      {
        title: "Paid Social Performance",
        content:
          "We run highly targeted ad campaigns on Meta, TikTok, and LinkedIn, designed to maximize ROI while building long-term brand value.",
      },
    ],
  },
  {
    id: "web",
    title: "Web Development",
    description:
      "Build digital weapons. High-speed, brutalist-inspired websites that convert traffic into revenue.",
    icon: <Code2 className="w-6 h-6 text-accent" />,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    subServices: [
      {
        title: "Custom Web Applications",
        content:
          "Scalable, type-safe web applications built with modern stacks (Next.js, Vite, TypeScript) for maximum performance and security.",
      },
      {
        title: "Conversion-Focused Landing Pages",
        content:
          "Sharp, brutalist designs engineered for one goal: conversion. Every pixel is placed to move the user toward the CTA.",
      },
      {
        title: "E-commerce Systems",
        content:
          "Personalized shopping experiences that handle high volume without breaking a sweat. Integrated payments, inventory, and analytics.",
      },
    ],
  },
  {
    id: "design",
    title: "Graphic Design",
    description:
      "Designs that grab attention and define your brand’s identity. We craft visuals that set modern leaders apart.",
    icon: <Palette className="w-6 h-6 text-accent" />,
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop",
    subServices: [
      {
        title: "Brand Identity Systems",
        content:
          "Logo design, typography, color theory, and comprehensive brand guidelines that ensure consistency across every touchpoint.",
      },
      {
        title: "UI/UX Interface Design",
        content:
          "Intuitive, user-centric interfaces that make complex systems feel simple. High-fidelity prototypes and user journey mapping.",
      },
      {
        title: "Marketing Collateral",
        content:
          "From digital pitch decks to physical brand assets, we ensure your visual language is high-end and professional everywhere.",
      },
    ],
  },
];

export default function Services() {
  return (
    <main className="bg-black min-h-screen">
      <div className="pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
        {/* Services Hero Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 -left-[10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px]"
          />
          <div className="absolute top-40 right-10 w-px h-[60vh] bg-gradient-to-b from-accent/50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section - Modernized */}
          <div className="max-w-4xl mb-32">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent font-mono text-sm tracking-[0.3em] uppercase mb-6"
            >
              Our Expertise
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: [0.26, 1, 0.3, 1],
              }}
              className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[8rem] font-display font-black leading-[0.85] text-white mb-8 md:mb-10 tracking-tighter w-[75rem]"
            >
              WE <br />
              <span className="text-accent italic">BUILD</span> <br />
              <span className="text-outline">WEAPONS.</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-6 md:gap-8"
            >
              <p className="text-base sm:text-lg md:text-2xl text-muted-foreground max-w-xl font-light leading-tight border-l-2 border-accent/30 pl-6 md:pl-8">
                From smart AI systems to high-performance development, we build
                the digital tools modern brands rely on to grow, scale, and stand
                out.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 group transition-all shadow-[0_0_30px_rgba(69,126,97,0.3)] w-fit"
                >
                  Start Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Services Grid Section */}
          <div className="space-y-48">
            {services.map((service, index) => (
              <motion.div
               key={service.id}
                initial={{
                  opacity: 0,
                  y: 50,
                  x: index % 2 === 0 ? -80 : 80,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  x: 0,
                  scale: 1,
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-24 items-center`}
              >
                {/* Content Side */}
                <div className="flex-1 w-full order-2 lg:order-none">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20 text-accent">
                      {service.icon}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-muted-foreground text-xl mb-12 max-w-xl font-light leading-relaxed">
                    {service.description}
                  </p>

                  <Accordion
                    type="single"
                    collapsible
                    className="w-full space-y-4"
                  >
                    {service.subServices.map((sub, subIndex) => (
                      <AccordionItem
                        key={subIndex}
                        value={`sub-${index}-${subIndex}`}
                        className="border-white/5 bg-white/[0.02] rounded-2xl px-8 transition-all data-[state=open]:bg-white/[0.04] data-[state=open]:border-accent/30"
                      >
                        <AccordionTrigger className="hover:no-underline py-8">
                          <span className="text-white font-display text-xl tracking-tight text-left">
                            {sub.title}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-8">
                          <p className="text-muted-foreground text-lg leading-relaxed font-light">
                            {sub.content}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* Image Side */}
                <div className="flex-1 w-full relative order-1 lg:order-none">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                    className="relative aspect-[4/5] lg:aspect-[3/4] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden group border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

                    {/* Floating Info Badge - Hidden on mobile */}
                    <div className="hidden sm:flex absolute bottom-4 sm:bottom-8 left-4 sm:left-8 z-20 items-center gap-3 sm:gap-4 bg-black/60 backdrop-blur-xl border border-white/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                      <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-accent animate-pulse shadow-[0_0_10px_#457e61]" />
                      <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white font-bold">
                        Bespoke Solution
                      </span>
                    </div>
                  </motion.div>

                  {/* Geometric Accents - Hidden on mobile */}
                  <div className={`hidden lg:block absolute -top-8 ${index % 2 === 1 ? "-left-8" : "-right-8"} w-32 h-32 border-accent/20 border-2 rounded-full opacity-50 blur-sm pointer-events-none`} />
                  <div className={`hidden lg:block absolute -bottom-12 ${index % 2 === 1 ? "-right-8" : "-left-8"} w-48 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent pointer-events-none`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic CTA Section */}
      <CTA />
    </main>
  );
}
