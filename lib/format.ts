import type { Locale } from "@/lib/dictionaries";

const intlLocale = (locale: Locale) => (locale === "es" ? "es-ES" : "en-GB");

/** Целое число с разделителем групп: `useGrouping: "always"`, иначе CLDR не
 *  разделяет четырёхзначные числа и одно число выглядело бы по-разному. */
export function formatCount(value: number, locale: Locale) {
  return new Intl.NumberFormat(intlLocale(locale), { useGrouping: "always" }).format(value);
}

/** Рейтинг всегда с одним знаком после запятой: 4,5 / 4.5. */
export function formatRating(value: number, locale: Locale) {
  return new Intl.NumberFormat(intlLocale(locale), {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
}

/**
 * Цена одной строкой. По-испански «12,50 €», по-английски «€12.50». Целые
 * суммы — без копеек, как в их карте («15 €»), дробные — всегда с двумя
 * знаками («4,50 €», а не «4,5 €»). Intl сам ставит неразрывный пробел
 * перед € в испанской локали.
 */
/** Диапазон цен: «10–60 €» по-испански, «€10–60» по-английски. */
export function formatPriceRange(from: number, to: number, locale: Locale) {
  return locale === "es" ? `${from}–${to} €` : `€${from}–${to}`;
}

export function formatPrice(value: number, locale: Locale) {
  const hasCents = Math.round(value * 100) % 100 !== 0;
  return new Intl.NumberFormat(intlLocale(locale), {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(value);
}
