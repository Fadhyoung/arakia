import { default as React, CSSProperties } from "react";
import clsx from "clsx";

export type TypographyProps = {
  variant: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  type?: "display" | "title" | "subtitle" | "body" | "button" | "overline";
  className?: string;
  children?: React.ReactNode;
  color?: "primary" | "secondary" | "tertiary";
  weight?: string;
  styles?: CSSProperties;
  display?: "mobile-only" | "desktop-only" | "all";
  id?: string;
};

const variantClasses: Record<TypographyProps["variant"], string> = {
  "2xs": "lg:text-[10px] xs:text-[6px]",
  xs: "lg:text-[12px] xs:text-[8px]",
  sm: "lg:text-[14px] xs:text-[10px]",
  md: "lg:text-[16px] xs:text-[12px]",
  lg: "lg:text-[20px] xs:text-[16px]",
  xl: "lg:text-[24px] xs:text-[20px]",
  "2xl": "lg:text-[30px] xs:text-[24px]",
  "3xl": "lg:text-[34px] xs:text-[24px]",
  "4xl": "lg:text-[40px] xs:text-[24px]",
};

const colorClasses: Record<NonNullable<TypographyProps["color"]>, string> = {
  primary: "text-[#141414]",
  secondary: "text-[#E0E0E0]",
  tertiary: "text-[#00502E]",
};

const displayClasses: Record<
  NonNullable<TypographyProps["display"]>,
  string
> = {
  "mobile-only": "lg:hidden block",
  "desktop-only": "hidden lg:block",
  all: "block",
};

const Typography: React.FC<TypographyProps> = ({
  variant,
  type = "body",
  className = "",
  children,
  color = "primary",
  weight,
  styles,
  id,
  display = "all",
}) => {
  return (
    <p
      id={id}
      className={clsx(
        variantClasses[variant],
        colorClasses[color],
        displayClasses[display],
        className
      )}
      style={{ color, fontWeight: weight, ...styles }}
    >
      {children}
    </p>
  );
};

export default Typography;
