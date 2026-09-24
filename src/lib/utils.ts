import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCapacity(kg: number): string {
  if (kg < 1) {
    return `${Math.round(kg * 1000)}g`;
  }
  return `${kg} kg`;
}
