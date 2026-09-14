import { Karla, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";
import { getDictionary, type Locale } from "@/lib/dictionaries";

/**
 * Общая оболочка для обоих корневых layout-ов ((es) и (en)): у каждого языка
 * свой <html lang>, поэтому layout-ов два, а шрифты и body описаны один раз.
 *
 * Шрифты (DESIGN.md §6): Playfair Display — заголовки и крупные цифры, та же
 * высококонтрастная порода, что «CONTRA PUNTO» на их печатной карте. Karla —
 * текст, строки карты, кнопки. latin + latin-ext ради ñ, á, à, ç; display: "swap".
 */

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export function RootShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const dict = getDictionary(locale);

  return (
    <html lang={dict.htmlLang} className={`${playfair.variable} ${karla.variable} h-full`}>
      <head>
        {/*
          Два правила на случай выключенного JS.
          1) motion не снимает свой inline opacity:0 — секции возвращаются на место (DESIGN.md §9).
          2) Вкладки карты без JS не переключаются — рельс скрыт, все панели раскрыты (DESIGN.md §7).
        */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}[data-menu-tabs]{display:none!important}[data-menu-panel][hidden]{display:block!important}[data-menu-panel]+[data-menu-panel]{margin-top:3rem}[data-menu-heading]{position:static!important;width:auto!important;height:auto!important;margin:0 0 1.5rem!important;overflow:visible!important;clip-path:none!important;white-space:normal!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
