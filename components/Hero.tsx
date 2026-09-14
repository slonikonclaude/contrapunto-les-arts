import { getDictionary, type Locale } from "@/lib/dictionaries";
import { restaurant } from "@/lib/restaurant";
import { markSrc, markSrcSet, marks, photos, srcFor, srcSetFor } from "@/lib/photos";
import { formatPriceRange } from "@/lib/format";
import { buttonClass } from "@/components/Section";
import { IconArrow, IconExternal } from "@/components/icons";

/**
 * Первый экран в раскладке печатной карты: слева надзаголовок, крупная
 * антиква и два действия, справа профессиональный кадр зала под рёбрами
 * Palau, над ним — линейный рисунок здания из их знака.
 *
 * Рейтинг здесь не выносится (DESIGN.md §4): первый экран держат факты,
 * которые заведение подтверждает само.
 *
 * Кегль h1 привязан к ширине колонки: самое длинное слово («Mediterranean»,
 * «mediterránea») не должно залезать на снимок ни на 1024, ни на 1440, ни на 320.
 *
 * Анимации появления нет: заголовок и главный снимок — это LCP.
 * data-hero нужен только съёмке скриншотов (см. память проекта про 100svh).
 */
export function Hero({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const main = photos.salaCalatrava;
  const drawing = marks.palauLinea;

  return (
    <section data-hero="" className="relative overflow-hidden bg-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-10 sm:px-8 sm:pt-14 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-16">
        <div className="lg:col-span-5">
          <p className="ruled ruled-start text-xs font-semibold uppercase tracking-[0.28em] text-graphite">{dict.hero.eyebrow}</p>

          <h1
            className="mt-7 font-display text-[clamp(2.4rem,13vw,3.1rem)] font-normal leading-[0.98] tracking-[-0.015em] text-ink sm:text-7xl lg:text-[min(5.4vw,4.5rem)]"
            style={{ textWrap: "balance" }}
          >
            {dict.hero.title}
          </h1>

          <p className="mt-7 max-w-[46ch] text-lg leading-relaxed text-graphite">{dict.hero.lead}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={restaurant.reservationUrl} target="_blank" rel="noopener noreferrer" className={buttonClass.solid}>
              {dict.cta.reserve}
              <IconExternal width={16} height={16} />
              <span className="sr-only"> {dict.cta.externalNote}</span>
            </a>
            <a href="#carta" className={buttonClass.outline}>
              {dict.cta.seeMenu}
              <IconArrow width={16} height={16} />
            </a>
          </div>

          <dl className="mt-11 grid grid-cols-3 border-t border-ink pt-5">
            <div className="pr-3">
              <dt className="sr-only">{dict.hero.perPerson}</dt>
              <dd>
                <span className="tabular block font-display text-2xl text-ink sm:text-[1.7rem]">
                  {formatPriceRange(restaurant.pricePerPerson.from, restaurant.pricePerPerson.to, locale)}
                </span>
                <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-graphite">{dict.hero.perPerson}</span>
              </dd>
            </div>
            <div className="border-l border-rule px-3 sm:px-4">
              <dt className="sr-only">{dict.hero.repsol}</dt>
              <dd>
                <span className="tabular block font-display text-2xl text-ink sm:text-[1.7rem]">{restaurant.guiaRepsol}</span>
                <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-graphite">{dict.hero.repsol}</span>
              </dd>
            </div>
            <div className="border-l border-rule pl-3 sm:pl-4">
              <dt className="sr-only">{dict.hero.terrace}</dt>
              <dd className="text-sm leading-snug text-ink">{dict.hero.terrace}</dd>
            </div>
          </dl>
        </div>

        <div className="relative lg:col-span-7">
          <img
            src={markSrc(drawing)}
            srcSet={markSrcSet(drawing)}
            sizes="(min-width: 1024px) 26rem, 60vw"
            width={drawing.width}
            height={drawing.height}
            alt=""
            aria-hidden="true"
            className="relative z-10 -mb-px ml-auto w-[62%] max-w-[26rem] lg:mr-8"
          />
          <figure className="relative">
            <img
              src={srcFor(main, 1600)}
              srcSet={srcSetFor(main)}
              sizes="(min-width: 1280px) 46rem, (min-width: 1024px) 56vw, 100vw"
              width={main.width}
              height={main.height}
              alt={main.alt[locale]}
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="mt-3 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.16em] text-graphite">
              <span>{dict.hero.photoCaption}</span>
              <span className="hidden h-px flex-1 bg-rule sm:block" aria-hidden="true" />
              <span aria-hidden="true" className="font-display text-sm normal-case italic tracking-normal">
                Contrapunto
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
