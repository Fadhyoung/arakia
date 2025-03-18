import React from "react";
import clsx from "clsx";

export type Spacer = `spacer-${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20}`;

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  rowSpacing?: Spacer;
  columnSpacing?: Spacer;
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  gap?: number;
  className?: string;
  visibleOn?: "mobile-only" | "desktop-only" | "all";
}

const visibleOnClasses: Record<
  NonNullable<StackProps["visibleOn"]>,
  string
> = {
  "mobile-only": "lg:hidden block",
  "desktop-only": "hidden lg:block",
  all: "block",
};

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      direction = "row",
      wrap = "nowrap",
      justify = "start",
      align = "start",
      gap,
      className,
      children,
      visibleOn = "all",
      ...props
    },
    ref
  ) => {
    const flexClasses = clsx(
      "flex",
      direction && `flex-${direction}`,
      wrap && `flex-${wrap}`,
      justify && `justify-${justify}`,
      align && `items-${align}`,
      gap !== undefined && `gap-${gap}`,
      className
    );

    return (
    <div
      ref={ref}
      className={clsx(flexClasses, visibleOnClasses[visibleOn])}
      {...props}
    >
      {children}
    </div>
    );
  }
);

Stack.displayName = "Stack";
export default Stack;
