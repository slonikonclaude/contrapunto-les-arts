"use client";

import { useEffect, useId, useState } from "react";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { hrefFor } from "@/lib/site";
import { restaurant } from "@/lib/restaurant";
import { markSrc, marks } from "@/lib/photos";
import { IconClose, IconExternal, IconMenuBars } from "@/components/icons";

/**
 * Липкая шапка. Клиентская из-за мобильной панели: на узком экране ссылки
 * уезжают в раскрывающийся блок, который закрывается по Esc и по нажатию на
 * ссылку; пока он открыт, страница под ним не прокручивается.
 *
 * Знак — их собственный логотип «CONTRAPUNTO LES ARTS», чёрный на прозрачном.
 * Переключатель языка — обычная <a hreflang>: это переход на другой документ.
 */
export function Header({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  const links = [
    { href: "#la-casa", label: dict.nav.about },
    { href: "#carta", label: dict.nav.menu },
    { href: "#bodega", label: dict.nav.wine },
    { href: "#opiniones", label: dict.nav.reviews },
    { href: "#visitanos", label: dict.nav.visit },
  ];

  const reserve = (
    <>
      {dict.cta.reserve}
      <IconExternal width={15} height={15} />
      <span className="sr-only"> {dict.cta.externalNote}</span>
    </>
  );

  const logo = marks.logo;

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/92 backdrop-blur-md">
      <a
        href="#contenido"
        className="sr-only bg-ink px-4 py-2 text-paper focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50"
      >
        {dict.nav.skipToContent}
      </a>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:h-[4.5rem] sm:px-8">
        <a href={hrefFor(locale)} className="flex min-h-11 shrink-0 items-center" aria-label={restaurant.name}>
          <img
            src={markSrc(logo)}
            srcSet={`${markSrc(logo, 640)} 1x, ${markSrc(logo, 1280)} 2x`}
            width={logo.width}
            height={logo.height}
            alt=""
            className="h-[22px] w-auto sm:h-[26px]"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label={dict.nav.sections}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="py-2 text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-graphite transition-colors duration-200 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={hrefFor(dict.otherLocale.code)}
            hrefLang={dict.otherLocale.code}
            aria-label={dict.otherLocale.aria}
            className="flex h-11 min-w-11 items-center justify-center rounded-[2px] border border-rule-strong px-3 text-xs font-bold tracking-[0.18em] text-ink transition-colors duration-200 hover:border-ink"
          >
            {dict.otherLocale.label}
          </a>

          <a
            href={restaurant.reservationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-11 items-center gap-2 rounded-[2px] bg-ink px-5 text-xs font-semibold uppercase tracking-[0.16em] text-paper transition-colors duration-200 hover:bg-naranja-ink sm:inline-flex"
          >
            {reserve}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
            className="flex h-11 w-11 items-center justify-center rounded-[2px] border border-rule-strong text-ink transition-colors duration-200 hover:border-ink lg:hidden"
          >
            {open ? <IconClose /> : <IconMenuBars />}
          </button>
        </div>
      </div>

      <div id={panelId} hidden={!open} className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-rule bg-paper lg:hidden">
        <nav className="mx-auto max-w-7xl px-5 py-4 sm:px-8" aria-label={dict.nav.sections}>
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center border-b border-rule font-display text-2xl text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-6">
              <a
                href={restaurant.reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-center gap-2 rounded-[2px] bg-ink px-5 text-sm font-semibold uppercase tracking-[0.14em] text-paper"
              >
                {reserve}
              </a>
            </li>
            <li className="pt-3">
              <a
                href={restaurant.phone.href}
                className="tabular flex min-h-12 items-center justify-center rounded-[2px] border border-ink px-5 text-sm font-semibold uppercase tracking-[0.14em] text-ink"
              >
                {dict.cta.call} · {restaurant.phone.display}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
