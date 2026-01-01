const DEFAULT_SITE_URL = "https://yeasindev.me";

export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return DEFAULT_SITE_URL;
  return raw.endsWith("/") ? raw.slice(0, -1) : raw;
}

export function absoluteUrl(path = "/") {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export const defaultKeywords = [
  "Full-Stack Software Engineer",
  "Next.js portfolio",
  "React developer",
  "Django REST API",
  "TypeScript developer",
  "DevOps engineer",
  "Azure App Service",
  "Healthcare software",
  "AI and ML projects",
];
