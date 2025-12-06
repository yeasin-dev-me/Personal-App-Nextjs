import type { NextConfig } from "next";

const normalizedBasePath = (() => {
  const raw = process.env.NEXT_PUBLIC_BASE_PATH?.trim();
  if (!raw) return undefined;
  return raw.startsWith("/") ? raw : `/${raw}`;
})();

const nextConfig: NextConfig = {
  output: "export",
  basePath: normalizedBasePath,
  assetPrefix: normalizedBasePath ? `${normalizedBasePath}/` : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
