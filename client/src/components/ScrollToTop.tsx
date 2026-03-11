import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Prevent browser from restoring previous scroll positions
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Instantly jump to top (no smooth scrolling)
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}