"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  priority?: boolean;
};

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc,
  className,
  priority,
}: ImageWithFallbackProps) {
  const [source, setSource] = useState(src);

  return (
    <div className={clsx("relative overflow-hidden rounded-3xl", className)}>
      <Image
        src={source}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 hover:scale-105"
        priority={priority}
        onError={() => {
          if (fallbackSrc && source !== fallbackSrc) {
            setSource(fallbackSrc);
          }
        }}
      />
    </div>
  );
}
