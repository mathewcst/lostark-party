import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generate_id() {
  return crypto.randomUUID()
}

export function dateFormatter() {
  const langCode = navigator.language
  const formatter = new Intl.DateTimeFormat(langCode, {
    dateStyle: 'medium',
  })

  return formatter
}
