import { getDictionary, type Locale } from "@/lib/dictionaries";
import { restaurant } from "@/lib/restaurant";
import { reviews } from "@/lib/reviews";
import { formatCount, formatRating } from "@/lib/format";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { Section, buttonClass } from "@/components/Section";
import { Stars } from "@/components/Stars";
import { IconExternal } from "@/components/icons";

/**
 * Отзывы Google — перед «Visítanos» и призывом. Средняя 3,8 и число отзывов
 * стоят в шапке секции крупно и без округления: цитаты ниже — выборка, и
 * читатель должен видеть общую картину рядом с ней (lib/reviews.ts).
 *
 * Отзыв на языке страницы — как есть; на другом языке — наш перевод с явной
 * подписью, оригинал раскрывается в <details>.
 */
export function Reviews({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const rating = formatRating(restaurant.rating.value, locale);
  const count = formatCount(restaurant.rating.count, locale);

  return (
    <Section
      id="opiniones"
      tone="linen"
      eyebrow={dict.reviews.eyebrow}
      title={dict.reviews.title}
      headerRight={
        <div className="flex items-center gap-4">
          <span className="tabular font-display text-6xl leading-none text-ink">{rating}</span>
          <span>
            <Stars value={restaurant.rating.value} idPrefix="reviews" size={20} />
            <span className="mt-1 block text-sm text-graphite">{dict.reviews.summary(rating, count)}</span>
          </span>
        </div>
      }
    >
      <RevealGroup as="ul" className="gap-5 md:columns-2 lg:columns-3">
        {reviews.map((r, i) => {
          const original = r.lang === locale;
          return (
            <RevealItem as="li" key={r.author} className="mb-5 break-inside-avoid border border-rule bg-card p-6 sm:p-7">
              <figure>
                <div className="flex items-center justify-between gap-3">
                  <Stars value={r.rating} idPrefix={`review-${i}`} />
                  <span className="sr-only">{dict.reviews.starsLabel(r.rating)}</span>
                  <span className="text-xs text-graphite">{r.when[locale]}</span>
                </div>

                <blockquote className="mt-4 whitespace-pre-line text-[0.98rem] leading-relaxed text-ink">
                  <p>{original ? r.text : r.translation}</p>
                </blockquote>

                {!original ? (
                  <details className="mt-3 text-sm text-graphite">
                    <summary className="inline-flex min-h-11 cursor-pointer items-center underline decoration-rule-strong underline-offset-4 hover:text-ink">
                      {dict.reviews.translatedFrom[r.lang]}
                    </summary>
                    <p lang={r.lang} className="mt-1 whitespace-pre-line leading-relaxed">
                      {r.text}
                    </p>
                  </details>
                ) : null}

                <figcaption className="mt-5 border-t border-rule pt-4">
                  <span className="block font-display text-lg text-ink">{r.author}</span>
                  <span className="block text-sm text-graphite">{r.meta[locale]}</span>
                </figcaption>
              </figure>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <Reveal className="mt-6">
        <a href={restaurant.googleMapsUrl} target="_blank" rel="noopener noreferrer" className={buttonClass.outline}>
          {dict.reviews.readAll}
          <IconExternal width={16} height={16} />
          <span className="sr-only"> {dict.cta.externalNote}</span>
        </a>
      </Reveal>
    </Section>
  );
}
