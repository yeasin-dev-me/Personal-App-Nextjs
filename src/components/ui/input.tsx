import * as React from "react";
import clsx from "clsx";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={clsx(
          "body-base w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder:text-gray-500 transition-all focus:border-emerald-400 focus:outline-none",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
