import { getDictionary, type Locale } from "@/lib/dictionaries";
import { winesByGlass } from "@/lib/menu";
import { wineCount, wines } from "@/lib/wines";
import { restaurant } from "@/lib/restaurant";
import { photos, srcFor, srcSetFor } from "@/lib/photos";
import { formatPrice } from "@/lib/format";
import { Reveal } from "@/components/Reveal";
import { Section, buttonClass } from "@/components/Section";
import { IconChevron, IconExternal } from "@/components/icons";

/**
 * Bodega (DESIGN.md §7): вина по бокалам — список с ценой за бокал (у двух
 * десертных вин ещё и бутылки, строкой ниже); полная карта бутылок — шесть <details> по
 * категориям, свёрнутых по умолчанию: 166 строк не должны развернуться сами.
 * <details> работает без JS и с клавиатуры из коробки.
 */
export function Wine({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.wine;
  const photo = photos.vinoVistas;

  return (
    <Section id="bodega" tone="linen" eyebrow={t.eyebrow} title={t.title(wineCount)} note={t.intro}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-8">
          <h3 className="font-display text-3xl text-ink">{t.byGlass}</h3>
          <p className="mt-2 text-sm text-graphite">{t.glassNote}</p>
          <div className="mt-8 gap-x-12 md:columns-2">
            {winesByGlass.map((section) => (
              <section key={section.title.es} className="mb-10 break-inside-avoid">
                <h4 className="ruled ruled-start text-xs font-semibold uppercase tracking-[0.24em] text-ink">{section.title[locale]}</h4>
                <ul className="mt-1">
                  {section.items.map((w) => (
                    <li key={w.id} className="border-b border-rule py-3 last:border-b-0">
                      <div className="flex items-baseline gap-3">
                        <p className="min-w-0 text-ink">
                          <span className="font-semibold">{w.name}</span>
                          {w.vintage ? <span className="tabular text-graphite"> · {w.vintage}</span> : null}
                        </p>
                        <span className="leader" aria-hidden="true" />
                        <p className="tabular shrink-0 font-display text-lg text-naranja-ink">{formatPrice(w.glass, locale)}</p>
                      </div>
                      {w.desc ? <p className="mt-0.5 text-sm text-graphite">{w.desc}</p> : null}
                      {w.bottles ? (
                        <p className="mt-1 text-sm text-ink">
                          {t.bottle}:{" "}
                          {w.bottles.map((b, k) => (
                            <span key={b.size} className="tabular whitespace-nowrap">
                              {k > 0 ? " · " : ""}
                              {b.size} {formatPrice(b.price, locale)}
                            </span>
                          ))}
                        </p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Reveal>

        <Reveal className="lg:col-span-4" delay={0.06}>
          <img
            src={srcFor(photo, 1600)}
            srcSet={srcSetFor(photo)}
            sizes="(min-width: 1024px) 30vw, 100vw"
            width={photo.width}
            height={photo.height}
            alt={photo.alt[locale]}
            loading="lazy"
            decoding="async"
            className="aspect-[16/10] w-full object-cover lg:sticky lg:top-24 lg:aspect-[3/4]"
          />
        </Reveal>
      </div>

      <Reveal className="mt-20">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink pb-4">
          <h3 className="font-display text-3xl text-ink">{t.bottles}</h3>
          <p className="text-sm text-graphite">{t.bottlesNote}</p>
        </div>
        <div>
          {wines.map((cat) => {
            const n = cat.regions.reduce((acc, r) => acc + r.wines.length, 0);
            return (
              <details key={cat.id} className="group border-b border-rule">
                <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-4 py-3">
                  <span className="font-display text-2xl text-ink">{cat[locale]}</span>
                  <span className="flex items-center gap-4">
                    <span className="tabular whitespace-nowrap text-xs uppercase tracking-[0.14em] text-graphite">{t.count(n)}</span>
                    <IconChevron data-chevron="" width={20} height={20} className="text-ink transition-transform duration-200" />
                  </span>
                </summary>
                <div className="pb-10 pt-2">
                  <div className="grid gap-x-14 gap-y-8 md:grid-cols-2">
                    {cat.regions.map((r, k) => (
                      <section key={r.title?.es ?? k}>
                        {r.title ? (
                          <h4 className="ruled ruled-start text-xs font-semibold uppercase tracking-[0.24em] text-ink">{r.title[locale]}</h4>
                        ) : null}
                        <ul className="mt-1">
                          {r.wines.map((w) => (
                            <li key={`${w.name}-${w.vintage}`} className="border-b border-rule py-3 last:border-b-0">
                              <div className="flex items-baseline gap-3">
                                <p className="min-w-0 text-ink">
                                  <span className="font-semibold">{w.name}</span>
                                  {w.vintage ? <span className="tabular text-graphite"> · {w.vintage}</span> : null}
                                  {w.tag ? (
                                    <span className="ml-2 rounded-[2px] border border-rule-strong px-1.5 py-px align-[0.1em] text-[0.7rem] text-graphite">
                                      {w.tag === "orange" ? t.orange : t.rose}
                                    </span>
                                  ) : null}
                                </p>
                                <span className="leader" aria-hidden="true" />
                                <p className="tabular shrink-0 font-display text-base text-naranja-ink">{formatPrice(w.price, locale)}</p>
                              </div>
                              <p className="mt-0.5 text-sm text-graphite">{w.desc}</p>
                            </li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>
                </div>
              </details>
            );
          })}
        </div>
        <ul className="mt-8 flex flex-wrap gap-x-6">
          {[
            { href: restaurant.docs.wineList, label: t.pdfList },
            { href: restaurant.docs.winesByGlass, label: t.pdfGlass },
          ].map((l) => (
            <li key={l.href}>
              <a href={l.href} target="_blank" rel="noopener noreferrer" className={buttonClass.link}>
                {l.label}
                <IconExternal width={14} height={14} />
                <span className="sr-only"> {dict.cta.externalNote}</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
