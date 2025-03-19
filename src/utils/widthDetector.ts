"use client";

import { useState, useEffect } from "react";
import { ScreenType } from "types/screenTypes";

export default function useScreenType() {
  const [screenType, setScreenType] = useState<string>(
    typeof window !== "undefined" && window.innerWidth < 768 ? ScreenType.Mobile : ScreenType.Desktop
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenType(window.innerWidth < 768 ? ScreenType.Mobile : ScreenType.Desktop);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenType;
}
