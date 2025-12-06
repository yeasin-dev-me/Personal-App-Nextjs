import * as React from "react";
import clsx from "clsx";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={clsx(
        "body-base w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder:text-gray-500 transition-all focus:border-emerald-400 focus:outline-none",
        className
      )}
      {...props}
    />
  )
);

Textarea.displayName = "Textarea";
