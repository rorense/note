import { useState, useEffect } from "react";

// This hook is used to detect if the user has scrolled past a certain point on the page.
export const useScrollTop = (threshhold = 10) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshhold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshhold]);

  return scrolled;
};
