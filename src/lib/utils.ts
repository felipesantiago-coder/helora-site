import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** WhatsApp link builder */
const WHATSAPP_NUMBER = '5511999999999'; // ← Replace with real number
const WHATSAPP_BASE_MSG = encodeURIComponent(
  'Olá! Gostaria de agendar uma sessão na Helora. 💚'
);

export function getWhatsAppLink(): string {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${WHATSAPP_BASE_MSG}`;
}
