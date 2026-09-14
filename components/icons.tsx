/**
 * Иконки — свои SVG, один набор: штрих 1.6, скругление round, сетка 24.
 * Эмодзи вместо иконок нет: они зависят от шрифта системы и не красятся токенами.
 *
 * Все иконки декоративные: рядом всегда есть видимый текст, поэтому
 * aria-hidden и focusable="false" зашиты внутрь. Если иконка останется одна,
 * текстовая альтернатива ставится на месте использования.
 */
import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base: P = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

export const IconPhone = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4.5 4h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L14 13l4 1.5v3a1.5 1.5 0 0 1-1.7 1.5A15.5 15.5 0 0 1 3 5.7 1.5 1.5 0 0 1 4.5 4Z" />
  </svg>
);

export const IconPin = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const IconClock = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 1.8" />
  </svg>
);

export const IconStar = (p: P) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="m12 3.6 2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8L12 3.6Z" />
  </svg>
);

/** Звезда с частичной заливкой — для дробного рейтинга 3,8: заливка 0–1
 *  рисуется градиентом с уникальным id, иначе при нескольких рядах звёзд на
 *  странице id бы совпадали. */
export const IconStarPartial = ({ gradientId, amount, ...p }: P & { gradientId: string; amount: number }) => (
  <svg {...base} {...p}>
    <defs>
      <linearGradient id={gradientId}>
        <stop offset={`${amount * 100}%`} stopColor="currentColor" />
        <stop offset={`${amount * 100}%`} stopColor="transparent" />
      </linearGradient>
    </defs>
    <path
      d="m12 3.6 2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8L12 3.6Z"
      fill={`url(#${gradientId})`}
      stroke="currentColor"
      strokeWidth={1.2}
    />
  </svg>
);

export const IconArrow = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconExternal = (p: P) => (
  <svg {...base} {...p}>
    <path d="M14 5h5v5M19 5l-7.5 7.5" />
    <path d="M18 13.5V18a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 18V7.5A1.5 1.5 0 0 1 6 6h4.5" />
  </svg>
);

export const IconMenuBars = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconClose = (p: P) => (
  <svg {...base} {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const IconParking = (p: P) => (
  <svg {...base} {...p}>
    <rect x="4" y="4" width="16" height="16" rx="3" />
    <path d="M10 16.5v-9h3a2.8 2.8 0 0 1 0 5.6h-3" />
  </svg>
);

export const IconGlass = (p: P) => (
  <svg {...base} {...p}>
    <path d="M7 4h10l-.8 5a4.2 4.2 0 0 1-8.4 0L7 4Z" />
    <path d="M12 13.5V20M8.5 20h7" />
  </svg>
);

/** Терраса — зонт. */
export const IconUmbrella = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3.5 12a8.5 8.5 0 0 1 17 0h-17Z" />
    <path d="M12 12v6.5a2 2 0 0 1-4 0M12 3.5V2.5" />
  </svg>
);

export const IconCheck = (p: P) => (
  <svg {...base} {...p}>
    <path d="m5 12.5 4.2 4L19 7" />
  </svg>
);

export const IconInstagram = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.6" />
    <circle cx="12" cy="12" r="3.9" />
    <circle cx="16.9" cy="7.1" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const IconFacebook = (p: P) => (
  <svg {...base} {...p}>
    <path d="M14.5 8H16V4.6a14 14 0 0 0-2.3-.1c-2.4 0-4 1.5-4 4.1V11H7v3.6h2.7V21h3.3v-6.4h2.7l.4-3.6H13V8.9c0-.6.3-.9 1.5-.9Z" />
  </svg>
);

export const IconMail = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const IconChevron = (p: P) => (
  <svg {...base} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const IconAccessible = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="4.5" r="1.6" />
    <path d="M6.5 8.5 12 9.5l5.5-1M12 9.5v4.5l-3 6.5M12 14l3 6.5" />
  </svg>
);
