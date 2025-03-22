'use client';

import { useTranslations } from "next-intl";
import Content from "@/app/Content.json";
import { useRef, useState } from "react";
import useGsapFadeIn from "@/utils/gsapFadeIn";

export default function useHome () {
    const t = useTranslations("home");

    const targetRef = useRef<HTMLDivElement>(null);
  
    const scrollToTarget = () => {
      if (targetRef.current) {
        targetRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    const data = Content.Mission;
    const [activeIndex, setActiveIndex] = useState(1);
  
    const handleLeftClick = () => {
      setActiveIndex((prev) => (prev + 1) % data.length); // Cycle to the next card
    };
  
    const handleRightClick = () => {
      setActiveIndex((prev) => (prev - 1 + data.length) % data.length); // Cycle to the previous card
    };
  
    const fadeInRefs = useGsapFadeIn(); 
    const setRef = (index: number) => (el: HTMLDivElement | null) => {
      fadeInRefs.current[index] = el;
    };

    return {
        t,
        targetRef,
        Content,
        data,
        activeIndex,
        scrollToTarget,
        handleLeftClick,
        handleRightClick,
        setRef
    }
}