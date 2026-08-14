import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** WhatsApp link builder */
const WHATSAPP_NUMBER = '5561995938870';
const WHATSAPP_DISPLAY = '(61) 9 9593-8870';
const WHATSAPP_BASE_MSG = encodeURIComponent(
  'Olá! Gostaria de agendar uma sessão na Helora. 💚'
);
const WHATSAPP_CONVENIO_MSG = encodeURIComponent(
  'Olá! Gostaria de saber se a Helora atende pelo meu plano de saúde. Pode me informar?'
);

export function getWhatsAppLink(msg?: 'agendamento' | 'convenio'): string {
  const text = msg === 'convenio' ? WHATSAPP_CONVENIO_MSG : WHATSAPP_BASE_MSG;
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${text}`;
}

export { WHATSAPP_DISPLAY };
