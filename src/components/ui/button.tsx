import * as React from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  asChild?: boolean;
};

const variantClasses: Record<NonNullable<Exclude<ButtonProps["variant"], undefined>>, string> = {
  primary:
    "bg-emerald-500/90 hover:bg-emerald-400 text-white shadow-[0_20px_45px_rgba(16,185,129,0.25)]",
  secondary:
    "bg-blue-500/90 hover:bg-blue-400 text-white shadow-[0_20px_45px_rgba(59,130,246,0.25)]",
  ghost:
    "border border-white/20 text-white hover:border-emerald-400/80 hover:text-emerald-300",
  outline:
    "border border-white/20 bg-transparent text-white hover:bg-white/5 hover:border-white/40",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", type = "button", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={clsx(
          "body-base inline-flex items-center justify-center rounded-2xl px-6 py-3 transition-all duration-300",
          variantClasses[variant],
          className
        )}
        type={asChild ? undefined : type}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
