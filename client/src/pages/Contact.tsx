import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useSubmitContact } from "@/hooks/use-data";
import { useToast } from "@/hooks/use-toast";
import { insertMessageSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  service: z.enum(
    [
      "AI Automation",
      "Social Media Marketing",
      "Web Development",
      "Graphic Design",
      "Collaboration",
      "Other Enquiry",
    ],
    { errorMap: () => ({ message: "Please select a service" }) },
  ),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const serviceOptions = [
  "AI Automation",
  "Social Media Marketing",
  "Web Development",
  "Graphic Design",
  "Collaboration",
  "Other Enquiry",
];

export default function Contact() {
  const { mutate, isPending } = useSubmitContact();
  const { toast } = useToast();

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/ma_digitech/",
    },
    {
      icon: Twitter,
      href: "https://x.com/MA_Digitech",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/muhammad-anas-shamsi-2685a7372/",
    },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { service: undefined }
  });

  const onSubmit = (data: FormData) => {
    const combined = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      service: data.service,
      message: data.message,
    };
    mutate(combined, {
      onSuccess: () => {
        toast({
          title: "Message Sent",
          description: "We'll get back to you shortly.",
        });
        reset();
      },
      onError: (error: any) => {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  };

  return (
    <main className="min-h-screen bg-background pt-24 md:pt-32 pb-20 md:pb-24 px-4 md:px-12 overflow-hidden selection:bg-accent selection:text-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full" style={{ background: 'radial-gradient(circle, rgba(69,126,97,0.07) 0%, transparent 70%)' }} />
        <div className="absolute top-[20%] -left-[10%] w-[30%] h-[30%] rounded-full" style={{ background: 'radial-gradient(circle, rgba(69,126,97,0.05) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-24 items-start">
          {/* Left Column */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 mt-5"
            >
              <span className="font-mono text-accent text-xs tracking-[0.5em] uppercase px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
                Get In Touch
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black leading-[0.85] text-white mb-8 md:mb-10 tracking-tighter uppercase break-words overflow-wrap-anywhere"
            >
              Don't be <br />
              <span className="text-accent italic">Shy.</span> <br />
              <span className="text-outline">Talk</span> to Us.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-md mb-12 md:mb-16 font-light leading-relaxed border-l-2 border-accent/30 pl-6"
            >
              Whether you want to shake up your industry or just need a digital
              refresh, we're ready to listen. Unless you're a bot.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-4 group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    <MapPin size={16} />
                  </div>
                  <h3 className="font-mono text-xs text-white uppercase tracking-widest">
                    Office
                  </h3>
                </div>
                <p className="text-muted-foreground font-light pl-11 text-sm">
                  Fully remote, serving
                  <br />
                  clients worldwide
                </p>
              </div>

              <div className="space-y-4 group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    <Mail size={16} />
                  </div>
                  <h3 className="font-mono text-xs text-white uppercase tracking-widest">
                    Email Us
                  </h3>
                </div>
                <p className="text-muted-foreground font-light pl-11 text-sm">
                  info@madigitech.co
                </p>
              </div>
            </div>

            <div className="mt-12 md:mt-16 pt-10 border-t border-white/5 flex flex-wrap items-center gap-6 md:gap-8">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                Connect With Us:
              </span>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5, color: "var(--accent)" }}
                    className="text-white/40 transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:w-[55%] pt-8 lg:pt-0"
          >
            <div className="bg-[#0c0c0c] p-6 md:p-8 lg:p-12 rounded-[1.5rem] md:rounded-[2.5rem] lg:rounded-[3.5rem] border border-white/5 shadow-2xl relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" style={{ background: 'radial-gradient(circle, rgba(69,126,97,0.08) 0%, transparent 70%)' }} />
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-8 md:space-y-12 relative z-10"
              >
                {/* Row 1: Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/60">
                      First Name
                    </label>
                    <input
                      {...register("firstName")}
                      autoComplete="off"
                      placeholder="John"
                      className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-base md:text-lg focus:outline-none focus:border-accent transition-all duration-500 placeholder:text-white/5 min-w-0"
                    />
                    {errors.firstName && (
                      <p className="text-destructive text-[10px] font-mono mt-1">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/60">
                      Last Name
                    </label>
                    <input
                      {...register("lastName")}
                      autoComplete="off"
                      placeholder="Doe"
                      className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-base md:text-lg focus:outline-none focus:border-accent transition-all duration-500 placeholder:text-white/5 min-w-0"
                    />
                    {errors.lastName && (
                      <p className="text-destructive text-[10px] font-mono mt-1">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Email */}
                <div className="space-y-4">
                  <label className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/60">
                    Email Address
                  </label>
                  <input
                    {...register("email")}
                    autoComplete="off"
                    placeholder="Where should we send our reply?"
                    className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-base md:text-lg focus:outline-none focus:border-accent transition-all duration-500 placeholder:text-white/5 min-w-0"
                  />
                  {errors.email && (
                    <p className="text-destructive text-[10px] font-mono mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Row 3: Service */}
                <div className="space-y-4">
                  <label className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/60">
                    What Are You Interested In?
                  </label>

                  <div className="relative group">
                    <select
                      {...register("service")}
                      className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-base md:text-lg focus:outline-none focus:border-accent transition-all duration-500 placeholder:text-white/5 appearance-none cursor-pointer text-white group-focus-within:text-accent group-focus-within:border-accent"
                      defaultValue=""
                    >
                      <option
                        value=""
                        disabled
                        className="bg-black text-white/50"
                      >
                        Select a service
                      </option>
                      {serviceOptions.map((service) => (
                        <option
                          key={service}
                          value={service}
                          className="bg-black text-white"
                        >
                          {service}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-0 bottom-4 md:bottom-5 pointer-events-none text-white/30 group-focus-within:text-accent transition-colors duration-300"
                    />
                  </div>
                  {errors.service && (
                    <p className="text-destructive text-[10px] font-mono mt-1">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                {/* Row 4: Project Details */}
                <div className="space-y-4">
                  <label className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/60">
                    Tell us about your project
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Tell us what's keeping you up at night... Share your goals, timeline, or anything that helps us understand the project."
                    className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-base md:text-lg focus:outline-none focus:border-accent transition-all duration-500 resize-none placeholder:text-white/5"
                  />
                  {errors.message && (
                    <p className="text-destructive text-[10px] font-mono mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="pt-4 md:pt-6">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="group relative w-full overflow-hidden bg-accent text-white px-6 md:px-10 py-5 md:py-8 rounded-full font-display font-black text-lg md:text-xl lg:text-2xl transition-all duration-500 hover:bg-white hover:text-accent disabled:opacity-50 shadow-[0_0_50px_rgba(69,126,97,0.3)] hover:shadow-none"
                  >
                    <div className="relative z-10 flex items-center justify-between gap-4">
                      <span className="tracking-tighter uppercase whitespace-normal text-left">
                        {isPending
                          ? "Transmitting..."
                          : "Book A Free Consultation"}
                      </span>
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500 flex-shrink-0">
                        <ArrowRight
                          size={20}
                          className="md:w-6 md:h-6 group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </button>
                  <p className="mt-6 text-center text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">
                    Average response time: 24h / No spam guaranteed
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
