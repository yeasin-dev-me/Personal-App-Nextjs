import * as React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-emerald-500/90 hover:bg-emerald-400 text-white shadow-[0_20px_45px_rgba(16,185,129,0.25)]",
  secondary:
    "bg-blue-500/90 hover:bg-blue-400 text-white shadow-[0_20px_45px_rgba(59,130,246,0.25)]",
  ghost:
    "border border-white/20 text-white hover:border-emerald-400/80 hover:text-emerald-300",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "body-base inline-flex items-center justify-center rounded-2xl px-6 py-3 transition-all duration-300",
          variantClasses[variant],
          className
        )}
        type={type}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
