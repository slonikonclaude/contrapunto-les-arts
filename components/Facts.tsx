import { getDictionary, type Locale } from "@/lib/dictionaries";
import { winesByGlass } from "@/lib/menu";
import { wineCount } from "@/lib/wines";
import { RevealGroup, RevealItem } from "@/components/Reveal";

/**
 * Полоса из четырёх фактов под первым экраном — «features» брифа. Нумерация
 * антиквой курсивом повторяет ритм печатной карты; числа считаются из данных,
 * а не пишутся руками.
 */
export function Facts({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const glasses = winesByGlass.reduce((n, s) => n + s.items.length, 0);

  return (
    <div className="border-y border-rule bg-linen">
      <RevealGroup as="ul" className="mx-auto grid max-w-7xl px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {dict.facts.map((f, i) => (
          <RevealItem
            as="li"
            key={f.title}
            className={`flex gap-4 py-7 sm:py-9 ${i > 0 ? "border-t border-rule sm:border-t-0" : ""} ${i % 2 === 1 ? "sm:border-l sm:pl-8" : ""} ${i === 2 ? "sm:border-t lg:border-t-0 lg:border-l lg:pl-8" : ""} ${i === 3 ? "sm:border-t lg:border-t-0" : ""} lg:pr-6`}
          >
            <span aria-hidden="true" className="font-display text-lg italic text-naranja-ink">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="font-display text-xl leading-tight text-ink">{f.title}</p>
              <p className="mt-1.5 text-[0.95rem] text-graphite">
                {typeof f.text === "function" ? f.text(wineCount, glasses) : f.text}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
