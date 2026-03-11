import { useEffect, useRef } from "react";

const panels = [
  {
    num: "01",
    tag: "Industry Standard",
    industryHeadline: "They celebrate impressions & click-through rates",
    industryBullets: [
      "Monthly vanity reports",
      "500k impressions this quarter!",
      "Zero revenue attached to any of it",
    ],
    accentWord: "noise.",
    headline: ["Metrics that", "don't move money", "are just"],
    body: "Impressions and CTRs look great in a deck. We care about what happens after the click - the inquiry, the sale, the return. If a number can't be traced to revenue, we question why we're tracking it.",
  },
  {
    num: "02",
    tag: "Industry Standard",
    industryHeadline: "They sell tactics dressed up as strategy",
    industryBullets: [
      "Trendy formats, no real direction",
      "Tactics disguised as plans",
      "Your business model? Never asked",
    ],
    accentWord: "expensive guessing.",
    headline: ["Tactics without", "strategy is just"],
    body: "Before we touch a single ad or post, we understand your business model, your margins, your customer. Strategy first. Then and only then do we pick the tactics that serve it.",
  },
  {
    num: "03",
    tag: "Industry Standard",
    industryHeadline: "They ignore your entire conversion system",
    industryBullets: [
      "Drive traffic - job done",
      "Broken funnels? Not our problem",
      "Budget burned mid-journey",
    ],
    accentWord: "leaking pipe.",
    headline: ["Traffic without", "a funnel is a"],
    body: "Sending traffic to a broken offer is just burning money faster. We look at the full journey, from first touch to final conversion - and fix the leaks before we pour more in.",
  },
  {
    num: "04",
    tag: "Industry Standard",
    industryHeadline: "They overpromise without looking at your economics",
    industryBullets: [
      "10x ROAS - guaranteed!",
      "No margin analysis done",
      "Your economics? Completely ignored",
    ],
    accentWord: "can't support.",
    headline: ["We won't promise", "what your numbers"],
    body: "Before we talk results, we look at your margins, your CAC, your lifetime value. Some businesses need more than marketing. We'll tell you that honestly, even if it costs us the deal.",
  },
];

const css = `
#wtw-section {
  width: 100%;
  background: #000;
}

.wtw-intro {
  padding: 12vh 4vw 8vh;
  background: #000;
}

.wtw-intro p {
  font-family: 'Syne', sans-serif;
  font-size: 0.72rem;
  letter-spacing: 0.3em;
  color: #457e61;
  text-transform: uppercase;
  margin-bottom: 2rem;
  opacity: 0.8;
}

.wtw-intro h2 {
  font-family: 'Syne', sans-serif;
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 0.92;
  color: #fff;
  margin: 0;
}

.wtw-intro h2 span {
  color: #457e61;
}

.wtw-swiper-wrap {
  height: 90vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.wtw-swiper {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.wtw-swiper-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  transition-property: transform;
}

.wtw-slide {
  height: 100%;
  width: 100%;
  flex-shrink: 0;
  display: grid;
  grid-template-columns: 38% 1px 1fr;
  align-items: center;
  background: #000;
  position: relative;
  overflow: hidden;
}

.wtw-slide::before {
  content: attr(data-num);
  position: absolute;
  right: 8vw;
  bottom: 4vh;
  font-family: 'Syne', sans-serif;
  font-size: clamp(8rem, 18vw, 15rem);
  font-weight: 800;
  color: rgba(69,126,97,0.04);
  line-height: 1;
  pointer-events: none;
  user-select: none;
}

.wtw-left {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5vw 0 10vw;
  position: relative;
  z-index: 1;
}

.wtw-industry-box {
  border: 1px solid rgba(255,255,255,0.06);
  padding: 2.5rem 2rem;
  position: relative;
  background: radial-gradient(ellipse at bottom left, rgba(69,126,97,0.05) 0%, transparent 70%);
}

.wtw-industry-label {
  position: absolute;
  top: -0.55rem;
  left: 1.2rem;
  background: #000;
  padding: 0 0.5rem;
  font-family: 'Syne', sans-serif;
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  color: rgba(69,126,97,0.5);
  text-transform: uppercase;
}

.wtw-industry-headline {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1rem, 1.6vw, 1.4rem);
  font-weight: 700;
  line-height: 1.3;
  color: rgba(255,255,255,0.45);
  margin: 0 0 1.8rem 0;
}

.wtw-industry-bullets {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.wtw-industry-bullets li {
  font-size: 0.82rem;
  color: rgba(255,255,255,0.25);
  font-style: italic;
  padding-left: 1.2rem;
  position: relative;
  line-height: 1.6;
  font-family: 'DM Sans', sans-serif;
}

.wtw-industry-bullets li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: rgba(255,255,255,0.15);
}

.wtw-divider {
  width: 1px;
  height: 100%;
  background: rgba(255,255,255,0.05);
  position: relative;
  z-index: 1;
}

.wtw-divider::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(69,126,97,0.4);
}

.wtw-right {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2vh 10vw 2vh 5vw;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.wtw-counter {
  font-family: 'Syne', sans-serif;
  font-size: 0.68rem;
  letter-spacing: 0.22em;
  color: #457e61;
  text-transform: uppercase;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateX(-12px);
  transition: opacity 0.45s ease 0.2s, transform 0.45s ease 0.2s;
}

.wtw-rule {
  width: 52px;
  height: 2px;
  background: #457e61;
  margin-bottom: 1rem;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s;
}

.wtw-headline {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.6rem, 2.8vw, 2.8rem);
  font-weight: 800;
  line-height: 1.1;
  margin: 0 0 1.2rem 0;
  max-width: 560px;
  color: #fff;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s;
}

.wtw-headline span.accent {
  color: #457e61;
}

.wtw-body {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  line-height: 1.9;
  color: rgba(255,255,255,0.45);
  max-width: 460px;
  margin: 0;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.55s ease 0.65s, transform 0.55s ease 0.65s;
}

.wtw-slide.active .wtw-counter {
  opacity: 1;
  transform: translateX(0);
}

.wtw-slide.active .wtw-rule {
  transform: scaleX(1);
}

.wtw-slide.active .wtw-headline {
  opacity: 1;
  transform: translateY(0);
}

.wtw-slide.active .wtw-body {
  opacity: 1;
  transform: translateY(0);
}

.wtw-pagination {
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: center;
}

.wtw-bullet {
  width: 5px;
  height: 5px;
  border-radius: 20px;
  background: rgba(255,255,255,0.18);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34,1.56,0.64,1);
  border: none;
  padding: 0;
  outline: none;
}

.wtw-bullet.active {
  height: 22px;
  background: #457e61;
}

/* MOBILE FIX */
@media (max-width: 768px) {
  .wtw-slide {
    grid-template-columns: 1fr;
  }

  .wtw-left {
    display: none;
  }

  .wtw-divider {
    display: none;
  }

  .wtw-right {
    padding: 6vh 8vw;
  }
}
`;

export default function WayWeThink() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bulletRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const currentIndex = useRef(0);
  const isAnimating = useRef(false);

  function goTo(index: number) {
    if (isAnimating.current || index === currentIndex.current) return;
    if (index < 0 || index >= panels.length) return;
    isAnimating.current = true;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    slideRefs.current[currentIndex.current]?.classList.remove("active");
    bulletRefs.current[currentIndex.current]?.classList.remove("active");

    currentIndex.current = index;

    wrapper.style.transition = "transform 0.9s cubic-bezier(0.77,0,0.175,1)";
    wrapper.style.transform = `translateY(-${index * 100}%)`;

    slideRefs.current[index]?.classList.add("active");
    bulletRefs.current[index]?.classList.add("active");

    // Sync dots manually just in case
    panels.forEach((_, i) => {
      if (bulletRefs.current[i]) {
        if (i === index) bulletRefs.current[i]?.classList.add("active");
        else bulletRefs.current[i]?.classList.remove("active");
      }
    });

    setTimeout(() => {
      isAnimating.current = false;
    }, 950);
  }

  useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.innerHTML = css;
    document.head.appendChild(styleEl);

    slideRefs.current[0]?.classList.add("active");
    bulletRefs.current[0]?.classList.add("active");

    let wheelTimeout: ReturnType<typeof setTimeout>;

    function onWheel(e: WheelEvent) {
      if (window.innerWidth < 768) return;
      const swiperWrap = document.querySelector(".wtw-swiper-wrap");
      if (!swiperWrap) return;

      const rect = swiperWrap.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if we are actually centered in the viewport (with some tolerance)
      const isCentered = Math.abs(rect.top) < 140;
      const fullyVisible = rect.top >= -1 && rect.bottom <= windowHeight + 1;

      if (!fullyVisible || !isCentered) {
        // Not perfectly aligned yet, let natural scroll take over
        const lenis = (window as any).lenis;
        if (lenis) lenis.start();
        return;
      }

      // inside slider — stop lenis so it doesn't interfere
      const lenis = (window as any).lenis;

      // last slide going down or first slide going up — release lenis and let page scroll
      if (e.deltaY > 0 && currentIndex.current === panels.length - 1) {
        if (lenis) lenis.start();
        return;
      }
      if (e.deltaY < 0 && currentIndex.current === 0) {
        if (lenis) lenis.start();
        return;
      }

      // If we are in the middle of panels, we MUST hijack
      if (lenis) lenis.stop();

      e.preventDefault();
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        if (e.deltaY > 0) goTo(currentIndex.current + 1);
        else goTo(currentIndex.current - 1);
      }, 50);
    }

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      clearTimeout(wheelTimeout);
      if (document.head.contains(styleEl)) document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <div id="wtw-section">
      <div className="wtw-intro">
        <p>Our Philosophy</p>
        <h2>
          The Way
          <br />
          We <span>Think.</span>
        </h2>
      </div>

      <div className="wtw-swiper-wrap">
        <div className="wtw-swiper">
          <div
            ref={wrapperRef}
            className="wtw-swiper-wrapper"
            style={{ transform: "translateY(0)", transition: "none" }}
          >
            {panels.map((p, i) => (
              <div
                key={i}
                ref={(el) => {
                  slideRefs.current[i] = el;
                }}
                className="wtw-slide"
                data-num={p.num}
              >
                {/* LEFT */}
                <div className="wtw-left">
                  <div className="wtw-industry-box">
                    <span className="wtw-industry-label">{p.tag}</span>
                    <h3 className="wtw-industry-headline">
                      {p.industryHeadline}
                    </h3>
                    <ul className="wtw-industry-bullets">
                      {p.industryBullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* DIVIDER */}
                <div className="wtw-divider" />

                {/* RIGHT */}
                <div className="wtw-right">
                  <div className="wtw-counter">
                    {p.num} / 0{panels.length}
                  </div>
                  <div className="wtw-rule" />
                  <h2 className="wtw-headline">
                    {p.headline.map((line, j) => (
                      <span key={j} style={{ display: "block" }}>
                        {line}
                      </span>
                    ))}
                    <span className="accent" style={{ display: "block" }}>
                      {p.accentWord}
                    </span>
                  </h2>
                  <p className="wtw-body">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wtw-pagination">
          {panels.map((_, i) => (
            <button
              key={i}
              ref={(el) => {
                bulletRefs.current[i] = el;
              }}
              className="wtw-bullet"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
