import React from "react";
import clsx from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  icon?: React.ReactNode;
  buttonType?: "solid" | "outline" | "subtle" | "ghost" | "link" | "icon";
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "tertiary" | "danger" | "default";
  radius?: "none" | "xs" | "sm" | "md" | "xl" | "full";
  isLoading?: boolean;
  loadingPosition?: "left" | "right";
  labelLoading?: string;
  display?: "mobile-only" | "desktop-only" | "all";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      startIcon,
      endIcon,
      icon,
      buttonType = "solid",
      size = "sm",
      variant = "primary",
      radius = "xs",
      isLoading = false,
      loadingPosition = "right",
      labelLoading = "Loading...",
      className,
      disabled,
      display = "all",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium focus:outline-none transition-all";

    const variantStyles = {
      primary: "bg-white",
      secondary: "bg-primaryGreen text-white",
      tertiary: "bg-secondaryGreen",
      quartiary: "bg-tertiaryGreen",
      danger: "bg-red-600",
      default: "bg-gray-200",
    };

    const buttonTypeStyles = {
      solid: variantStyles[variant],
      outline: "border border-current bg-transparent",
      subtle: `${variantStyles[variant]} bg-opacity-50`,
      ghost: "bg-transparent",
      link: "bg-transparent underline p-0",
      icon: "p-2 rounded-full",
    };

    const sizeStyles = {
      xs: "px-2 py-1 text-xs",
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-5 py-3 text-lg",
    };

    const radiusStyles = {
      none: "rounded-none",
      xs: "rounded-sm",
      sm: "rounded",
      md: "rounded-md",
      xl: "rounded-xl",
      full: "rounded-full",
    };

    const displayClasses = {
        "mobile-only": "lg:hidden block",
        "desktop-only": "hidden lg:block",
        all: "block",
      };
    

    return (
      <button
        ref={ref}
        className={clsx(
          baseStyles,
          buttonTypeStyles[buttonType],
          sizeStyles[size],
          radiusStyles[radius],
          displayClasses[display],
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && loadingPosition === "left" && (
          <span className="mr-2 animate-spin">🔄</span>
        )}
        {startIcon && !icon && <span className="mr-2">{startIcon}</span>}
        {icon ? icon : isLoading ? labelLoading : label}
        {endIcon && !icon && <span className="ml-2">{endIcon}</span>}
        {isLoading && loadingPosition === "right" && (
          <span className="ml-2 animate-spin">🔄</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
