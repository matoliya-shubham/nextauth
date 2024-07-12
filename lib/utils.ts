import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// cn() is used to group default and dynamic classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
