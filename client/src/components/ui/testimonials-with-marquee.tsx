// import { cn } from "@/lib/utils";
// import {
//   TestimonialCard,
//   TestimonialAuthor,
// } from "@/components/ui/testimonial-card";

// const fadeOverlay = {
//   initial: { opacity: 0 },
//   whileInView: { opacity: 1 },
//   viewport: { once: true },
//   transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
// };

// interface TestimonialsSectionProps {
//   title: string;
//   description: string;
//   testimonials: Array<{
//     author: TestimonialAuthor;
//     text: string;
//     href?: string;
//   }>;
//   className?: string;
//   fadeOverlay?: JSX.Element;
// }

// export function TestimonialsSection({
//   title,
//   description,
//   testimonials,
//   className,
//   fadeOverlay,
// }: TestimonialsSectionProps) {
//   return (
//     <section
//       className={cn(
//         "bg-black text-foreground",
//         "py-12 sm:py-24 md:py-32 px-0",
//         className,
//       )}
//     >
//       <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
//         <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
//           <h2 className="max-w-[720px] text-4xl font-black leading-tight sm:text-6xl sm:leading-tight font-display text-white uppercase tracking-tighter">
//             {title}
//           </h2>
//           <p className="text-md max-w-[600px] font-light text-muted-foreground sm:text-xl leading-relaxed">
//             {description}
//           </p>
//         </div>

//         <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
//           <div className="flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:150s]">
//             <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
//               {[...Array(6)].map((_, setIndex) =>
//                 testimonials.map((testimonial, i) => (
//                   <TestimonialCard key={`${setIndex}-${i}`} {...testimonial} />
//                 )),
//               )}
//             </div>
//           </div>

//           {fadeOverlay ? (
//             fadeOverlay
//           ) : (
//             <>
//               <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-black via-black/40 to-transparent sm:block z-10" />
//               <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-black via-black/40 to-transparent sm:block z-10" />
//             </>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

import { cn } from "@/lib/utils";
import {
  TestimonialCard,
  TestimonialAuthor,
} from "@/components/ui/testimonial-card";

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Array<{
    author: TestimonialAuthor;
    text: string;
    href?: string;
  }>;
  className?: string;
}

export function TestimonialsSection({
  title,
  description,
  testimonials,
  className,
}: TestimonialsSectionProps) {
  return (
    <section
      className={cn(
        "bg-black text-foreground",
        "py-12 sm:py-24 md:py-32 px-0",
        className,
      )}
    >
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-4xl font-black leading-tight sm:text-6xl sm:leading-tight font-display text-white uppercase tracking-tighter">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-light text-muted-foreground sm:text-xl leading-relaxed">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div
            className="flex overflow-hidden p-2"
            style={{ "--gap": "1rem", gap: "var(--gap)", "--duration": "40s" } as React.CSSProperties}
          >
            {/* Two sets only — required for seamless -100% loop */}
            <div
              className="flex animate-marquee"
              style={{
                gap: "1rem",
                minWidth: "max-content",
                willChange: "transform",
                animationDuration: "40s",
              }}
            >
              {[...testimonials, ...testimonials].map((testimonial, i) => (
                <TestimonialCard key={i} {...testimonial} />
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-black via-black/40 to-transparent sm:block z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-black via-black/40 to-transparent sm:block z-10" />
        </div>
      </div>
    </section>
  );
}