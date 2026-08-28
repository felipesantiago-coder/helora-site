/**
 * HeloraOrganicO — Marca gráfica fundamental da identidade Helora.
 * Forma orgânica original extraída do favicon.svg oficial.
 * Anel orgânico assimétrico com preenchimento e recorte interno via SVG mask.
 *
 * Props:
 *   size      — largura em px
 *   className  — classes Tailwind (cor, opacidade, posição, etc.)
 *                Use `text-[color]` para definir a cor do preenchimento.
 */

'use client';

import { useId } from 'react';
import { cn } from '@/lib/utils';

export interface HeloraOrganicOProps {
  size?: number;
  className?: string;
}

/**
 * Paths originais do favicon.svg oficial da Helora.
 * viewBox: 0 0 2371.6 2729.04
 */
const OUTER_PATH =
  'M1907.38,536.68c331.13,728.47,801.76,1275.86,100.45,1897.01-499.23,442.16-1338.62,382-1779.15-141.15C-124.08,1873.62-1.66,1570.58,151.53,936.8,236.66,584.58,232.48,158.41,607.45,23.68c199.94-71.84,493.63,41.39,718.6,55.55,284.48,17.91,471.34,215.49,581.33,457.45Z';

const INNER_PATH =
  'M303.2,1565.1c93.68,653.01,467.56,1099.03,1174.96,975.12,758.5-132.86,812.02-742.28,501.94-1338.12-190.24-365.56-547.04-1002.83-996.66-1054.77C338.22,72.79,239.73,1122.69,303.2,1565.1Z';

export function HeloraOrganicO({ size = 40, className }: HeloraOrganicOProps) {
  const maskId = useId();

  return (
    <svg
      viewBox="0 0 2371.6 2729.04"
      width={size}
      height={size}
      className={cn('shrink-0', className)}
      aria-hidden="true"
    >
      <defs>
        <mask id={maskId}>
          {/* Outer: white = visible */}
          <path d={OUTER_PATH} fill="white" />
          {/* Inner cutout: black = hidden */}
          <path d={INNER_PATH} fill="black" />
        </mask>
      </defs>
      {/* Fill with currentColor, masked to show ring only */}
      <path d={OUTER_PATH} fill="currentColor" mask={`url(#${maskId})`} />
    </svg>
  );
}
