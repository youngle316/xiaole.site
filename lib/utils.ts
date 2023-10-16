import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getReferer() {
  return process.env.NODE_ENV === "production"
    ? (process.env.NEXT_PUBLIC_PRO_URL as string)
    : (process.env.NEXT_PUBLIC_DEV_URL as string);
}
