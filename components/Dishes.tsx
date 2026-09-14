import { getDictionary, type Locale } from "@/lib/dictionaries";
import { kitchen, type Dish } from "@/lib/menu";
import { photos, srcFor, srcSetFor, type PhotoKey } from "@/lib/photos";
import { formatPrice } from "@/lib/format";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { Section } from "@/components/Section";

/**
 * Восемь блюд текущей карты с фотографиями гостей из Google. Название и цена
 * берутся из lib/menu.ts по id — второй копии карты здесь нет. Подпись к
 * секции честно говорит, что снимки гостевые (DESIGN.md §2, п. 6).
 */
const PICKS: { dish: string; photo: PhotoKey }[] = [
  { dish: "arroz-pescado", photo: "arrozPescado" },
  { dish: "pulpo", photo: "pulpoRoca" },
  { dish: "ostras", photo: "ostras" },
  { dish: "lomo-bajo", photo: "carneMadurada" },
  { dish: "arroz-negro", photo: "arrozNegro" },
  { dish: "pescado-lonja", photo: "pescadoColiflor" },
  { dish: "torrija", photo: "torrija" },
  { dish: "coulant", photo: "coulant" },
];

const byId = new Map<string, Dish>(kitchen.flatMap((g) => g.items.map((d) => [d.id, d] as const)));

/** У арросов цена за человека — это пишется рядом с ценой, как в карте. */
const perPersonIds = new Set(kitchen.find((g) => g.id === "arroces")?.items.map((d) => d.id));

export function Dishes({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section id="platos" tone="linen" eyebrow={dict.dishes.eyebrow} title={dict.dishes.title} note={dict.dishes.note}>
      <RevealGroup as="ul" className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
        {PICKS.map(({ dish, photo }, i) => {
          const d = byId.get(dish);
          if (!d) throw new Error(`Нет блюда ${dish} в lib/menu.ts`);
          const p = photos[photo];
          return (
            <RevealItem as="li" key={dish} className={i % 2 === 1 ? "lg:mt-12" : ""}>
              <figure>
                <img
                  src={srcFor(p)}
                  srcSet={srcSetFor(p)}
                  sizes="(min-width: 1024px) 22vw, 46vw"
                  width={p.width}
                  height={p.height}
                  alt={p.alt[locale]}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full bg-card object-cover"
                />
                <figcaption className="mt-4 border-t border-ink pt-3">
                  <p className="font-display text-lg leading-snug text-ink sm:text-xl">{(d.cardTitle ?? d.lead)[locale]}</p>
                  {d.rest ? <p className="mt-1 text-sm leading-snug text-graphite">{d.rest[locale]}</p> : null}
                  <p className="mt-2 text-sm font-semibold text-naranja-ink">
                    <span className="tabular">{formatPrice(d.price, locale)}</span>
                    {perPersonIds.has(dish) ? <span className="font-normal text-graphite"> · {dict.menu.perPerson}</span> : null}
                  </p>
                </figcaption>
              </figure>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
