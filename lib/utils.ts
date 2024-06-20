import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { fr } from 'date-fns/locale';
import { format } from 'date-fns';
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatToFrenchDate = (date: Date) => {
  return format(date, 'do MMMM yyyy HH:mm', { locale: fr });
};

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}