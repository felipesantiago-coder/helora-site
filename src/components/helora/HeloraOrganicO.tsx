/**
 * HeloraOrganicO — Marca gráfica fundamental da identidade Helora.
 * Forma orgânica assimétrica (ovo/gota) com contorno fluido.
 *
 * Props:
 *   size     — largura/altura em px ou string Tailwind
 *   className — classes Tailwind adicionais
 *   fill     — cor de preenchimento (padrão: transparente)
 *   stroke   — cor do traço (padrão: cor do sage)
 *   strokeWidth — espessura do traço
 */

import { cn } from '@/lib/utils';

export interface HeloraOrganicOProps {
  size?: number | string;
  className?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}

/**
 * SVG path de uma forma orgânica tipo ovo/gota.
 * Desenhada em viewBox 0 0 100 120 para manter proporção alongada.
 */
const ORGANIC_O_PATH =
  'M50 2C27 2 4 24 4 55C4 86 27 114 50 118C73 114 96 86 96 55C96 24 73 2 50 2Z';

export function HeloraOrganicO({
  size = 40,
  className,
  fill = 'none',
  stroke = 'currentColor',
  strokeWidth = 2.5,
}: HeloraOrganicOProps) {
  const sizeVal = typeof size === 'number' ? `${size}px` : size;

  return (
    <svg
      viewBox="0 0 100 120"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={sizeVal}
      height={sizeVal}
      className={cn('shrink-0', className)}
      aria-hidden="true"
    >
      <path d={ORGANIC_O_PATH} />
    </svg>
  );
}
