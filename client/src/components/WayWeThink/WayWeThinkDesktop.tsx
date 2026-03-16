import { useEffect, useRef, useState } from "react";
import { panels } from "./panels";

export default function WayWeThinkDesktop() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const currentIndex = useRef(0);
  const isAnimating = useRef(false);
  const isHijacked = useRef(false);
  const releaseCooldown = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);

  function goTo(index: number) {
    if (isAnimating.current) return;
    if (index < 0 || index >= panels.length) return;
    if (index === currentIndex.current) return;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    isAnimating.current = true;
    slideRefs.current[currentIndex.current]?.classList.remove("active");
    currentIndex.current = index;
    wrapper.style.transform = `translateY(-${index * 100}%)`;
    slideRefs.current[index]?.classList.add("active");
    setActiveIndex(index);

    setTimeout(() => {
      isAnimating.current = false;
    }, 950);
  }

  function releaseLenis(_direction: "up" | "down") {
    if (releaseCooldown.current) return;

    const lenis = (window as any).lenis;
    isHijacked.current = false;
    releaseCooldown.current = true;
    lenis?.start();

    setTimeout(() => {
      releaseCooldown.current = false;
    }, 1200);
  }

  useEffect(() => {
    slideRefs.current[0]?.classList.add("active");

    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (window.innerWidth < 768) return;

        if (entry.isIntersecting) {
          if (!releaseCooldown.current) {
            isHijacked.current = true;
            (window as any).lenis?.stop();
          }
        } else {
          isHijacked.current = false;
        }
      },
      { threshold: 0.9 }
    );

    observer.observe(section);

    function onWheel(e: WheelEvent) {
      if (window.innerWidth < 768) return;
      if (!isHijacked.current) return;

      const el = sectionRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top > window.innerHeight * 0.5) return;
        if (rect.bottom < window.innerHeight * 0.5) return;
      }

      e.preventDefault();

      if (isAnimating.current) return;

      const scrollingDown = e.deltaY > 0;

      if (scrollingDown) {
        if (currentIndex.current < panels.length - 1) {
          goTo(currentIndex.current + 1);
        } else {
          releaseLenis("down");
        }
      } else {
        if (currentIndex.current > 0) {
          goTo(currentIndex.current - 1);
        } else {
          releaseLenis("up");
        }
      }
    }

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef} className="wtw-swiper-wrap">
      <div className="wtw-swiper">
        <div
          ref={wrapperRef}
          className="wtw-swiper-wrapper"
          style={{ transform: "translateY(0)" }}
        >
          {panels.map((p, i) => (
            <div
              key={i}
              ref={(el) => (slideRefs.current[i] = el)}
              className="wtw-slide"
              data-num={p.num}
            >
              <div className="wtw-left">
                <div className="wtw-industry-box">
                  <span className="wtw-industry-label">{p.tag}</span>
                  <h3 className="wtw-industry-headline">{p.industryHeadline}</h3>
                  <ul className="wtw-industry-bullets">
                    {p.industryBullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="wtw-divider" />

              <div className="wtw-right">
                <div className="wtw-counter">
                  {p.num} / 0{panels.length}
                </div>
                <div className="wtw-rule" />
                <h2 className="wtw-headline">
                  {p.headline.map((line, j) => (
                    <span key={j}>{line}</span>
                  ))}
                  <span className="accent">{p.accentWord}</span>
                </h2>
                <p className="wtw-body">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vertical pagination bullets — right side */}
      <div className="wtw-pagination">
        {panels.map((_, i) => (
          <button
            key={i}
            className={`wtw-bullet ${i === activeIndex ? "active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}