import { useEffect, useRef, useState } from "react";
import { panels } from "./panels";

export default function WayWeThinkMobile() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  function goTo(index: number) {
    if (index < 0) index = 0;
    if (index >= panels.length) index = panels.length - 1;

    const slider = sliderRef.current;
    if (!slider) return;

    const cardWidth = slider.offsetWidth * 0.8;
    const gap = 24;

    slider.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });

    setCurrentIndex(index);
  }

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let timeout: ReturnType<typeof setTimeout>;

    function handleScroll() {
      const el = sliderRef.current;
      if (!el) return;

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        const cardWidth = el.offsetWidth * 0.8 + 24;
        const index = Math.round(el.scrollLeft / cardWidth);
        setCurrentIndex(index);
      }, 120);
    }

    slider.addEventListener("scroll", handleScroll);

    return () => {
      slider.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div className="wtw-mobile-slider" ref={sliderRef}>
        {panels.map((p, i) => (
          <div key={i} className="wtw-mobile-card" data-num={p.num}>
            <div className="wtw-mobile-industry">
              <p className="wtw-mobile-label">Industry Standard</p>
              <ul>
                {p.industryBullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="wtw-mobile-divider" />

            <div>
              <p className="wtw-mobile-label">How We Think</p>

              <h3 className="wtw-mobile-headline">
                {p.headline.map((line, j) => (
                  <span key={j}>{line}</span>
                ))}
                <span className="accent">{p.accentWord}</span>
              </h3>

              <p className="wtw-mobile-body">{p.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="wtw-mobile-controls">
        <div className="wtw-pagination-left">
          {panels.map((_, i) => (
            <button
              key={i}
              className={`wtw-bullet-mobile ${i === currentIndex ? "active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <div className="wtw-arrows-right">
          <button className="wtw-arrow" onClick={() => goTo(currentIndex - 1)} aria-label="Previous">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="wtw-arrow" onClick={() => goTo(currentIndex + 1)} aria-label="Next">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}