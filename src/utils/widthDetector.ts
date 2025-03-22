"use client";

import { useState, useEffect } from "react";
import { ScreenType } from "types/screenTypes";

export default function useScreenType() {
  const [screenType, setScreenType] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenType(window.innerWidth < 900 ? ScreenType.Mobile : ScreenType.Desktop);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenType;
}
