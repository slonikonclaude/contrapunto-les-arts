import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

/**
 * Оболочка секции в духе печатной карты: надзаголовок капителью с разрядкой
 * и тонкой линейкой, крупный заголовок антиквой. Заголовок всегда h2 — h1 один
 * и живёт в hero. Мера ограничена, text-wrap: balance (DESIGN.md §6).
 *
 * Тон фона чередуется paper / linen, чтобы секции читались блоками без рамок.
 */
export function Section({
  id,
  eyebrow,
  title,
  note,
  tone = "paper",
  children,
  headerRight,
}: {
  id: string;
  eyebrow: string;
  title: string;
  note?: string;
  tone?: "paper" | "linen";
  children: ReactNode;
  headerRight?: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 ${tone === "linen" ? "bg-linen" : "bg-paper"}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal as="header" className="mb-12 sm:mb-16">
          <p className="ruled ruled-start text-xs font-semibold uppercase tracking-[0.28em] text-graphite">{eyebrow}</p>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
            <h2
              className="font-display text-[2.4rem] font-normal leading-[1.04] tracking-[-0.01em] text-ink sm:text-6xl"
              style={{ textWrap: "balance", maxInlineSize: "18ch" }}
            >
              {title}
            </h2>
            {headerRight}
          </div>
          {note ? <p className="mt-6 max-w-[62ch] text-[1.05rem] text-graphite">{note}</p> : null}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

/** Кнопка-ссылка в двух видах: сплошная чёрная и контурная. Радиус 2 px (DESIGN.md §3). */
export const buttonClass = {
  solid:
    "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[2px] bg-ink px-6 text-sm font-semibold uppercase tracking-[0.14em] text-paper transition-colors duration-200 hover:bg-naranja-ink",
  outline:
    "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[2px] border border-ink px-6 text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors duration-200 hover:bg-ink hover:text-paper",
  outlineNight:
    "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[2px] border border-paper/70 px-6 text-sm font-semibold uppercase tracking-[0.14em] text-paper transition-colors duration-200 hover:bg-paper hover:text-ink",
  solidNight:
    "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[2px] bg-paper px-6 text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors duration-200 hover:bg-naranja hover:text-ink",
  link: "inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink underline decoration-rule-strong underline-offset-4 transition-colors duration-200 hover:text-naranja-ink hover:decoration-naranja-ink",
} as const;
