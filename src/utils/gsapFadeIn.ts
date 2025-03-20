import { useEffect, useRef, MutableRefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ElementRefs = MutableRefObject<(HTMLDivElement | null)[]>;

const useGsapFadeIn = (): ElementRefs => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]); // Store multiple refs

  useEffect(() => {
    if (elementsRef.current.length === 0) return;

    elementsRef.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
              end: "top 30%",
              once: true
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return elementsRef;
};

export default useGsapFadeIn;
