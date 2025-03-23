"use client";

import { useState, useEffect } from "react";
import { ScreenType } from "types/screenTypes";

export default function useScreenType() {
  const [screenType, setScreenType] = useState<{ width: string; height: string }>({
    width: "",
    height: "",
  });

  useEffect(() => {
    const widthQuery = window.matchMedia("(max-width: 900px)");
    const heightQuery = window.matchMedia("(max-height: 840px)");

    const handleChange = () => {
      setScreenType({
        width: widthQuery.matches ? ScreenType.Mobile : ScreenType.Desktop,
        height: heightQuery.matches ? "Short" : "Tall",
      });
    };

    // Initial check
    handleChange();

    // Add listeners
    widthQuery.addEventListener("change", handleChange);
    heightQuery.addEventListener("change", handleChange);

    return () => {
      widthQuery.removeEventListener("change", handleChange);
      heightQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return screenType;
}
