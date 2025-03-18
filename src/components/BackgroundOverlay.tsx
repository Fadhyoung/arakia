import React from "react";
import clsx from "clsx";

export interface BackgroundOverlayProps {
  visibleOn?: "mobile-only" | "desktop-only" | "all";
  backgroundImage?: string;
  zIndex?: number;
  className?: string;
}

const BackgroundOverlay: React.FC<BackgroundOverlayProps> = ({
  visibleOn = "all",
  backgroundImage,
  zIndex = -10,
  className,
}) => {
  const visibleOnClasses = {
    "mobile-only": "lg:hidden block",
    "desktop-only": "hidden lg:block",
    all: "block",
  };

  return (
    <div
      className={clsx(
        "w-full h-full absolute left-0 top-0 bg-overlay",
        visibleOnClasses[visibleOn],
        className
      )}
      style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined, zIndex }}
    />
  );
};

export default BackgroundOverlay;
