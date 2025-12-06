import * as React from "react";
import clsx from "clsx";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx(
        "glass-panel rounded-3xl border border-white/5 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.45)]",
        className
      )}
      {...props}
    />
  )
);

Card.displayName = "Card";
