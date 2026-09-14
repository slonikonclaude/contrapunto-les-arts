import { getDictionary, type Locale } from "@/lib/dictionaries";
import { hours, restaurant } from "@/lib/restaurant";
import { photos, srcFor, srcSetFor } from "@/lib/photos";
import { Reveal } from "@/components/Reveal";
import { Section, buttonClass } from "@/components/Section";
import { IconAccessible, IconCheck, IconClock, IconExternal, IconMail, IconPhone, IconPin } from "@/components/icons";

/**
 * Как добраться и когда открыто. Адрес, часы, телефон, почта — текстом: их
 * копируют, по ним звонят, их читает скринридер.
 *
 * Часы — все семь дней таблицей: у пн, вт и вс закрытие в 18:00, у ср–сб —
 * в 1:00, и таблица честнее строки с исключениями. «Сегодня» не
 * подсвечивается: на статическом экспорте до гидратации подсветка стояла бы
 * не на том дне. Часы кухни и правило про аррос — под таблицей.
 *
 * Карта — iframe Google без ключа, ленивый.
 */
export function Visit({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.visit;
  const photo = photos.letrasEstanque;
  const mapSrc = `https://www.google.com/maps?q=${restaurant.googleMapsEmbedQuery}&hl=${locale}&z=16&output=embed`;
  const { lunch, dinner } = restaurant.kitchen;

  const label = "flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-graphite";

  return (
    <Section id="visitanos" eyebrow={t.eyebrow} title={t.title}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <Reveal>
            <dl className="space-y-10">
              <div>
                <dt className={label}>
                  <IconPin width={15} height={15} />
                  {t.addressLabel}
                </dt>
                <dd className="mt-3">
                  <p className="font-display text-2xl leading-snug text-ink">{restaurant.address.venue}</p>
                  <p className="mt-1 text-lg leading-relaxed text-ink">
                    {restaurant.address.street}
                    <br />
                    {restaurant.address.postalCode} {restaurant.address.city}
                  </p>
                  <p className="mt-2 text-sm text-graphite">
                    {t.plusCode}: <span className="tabular text-ink">{restaurant.plusCode}</span>
                  </p>
                  <a href={restaurant.googleMapsUrl} target="_blank" rel="noopener noreferrer" className={`${buttonClass.link} mt-1`}>
                    {dict.cta.directions}
                    <IconExternal width={14} height={14} />
                    <span className="sr-only"> {dict.cta.externalNote}</span>
                  </a>
                </dd>
              </div>

              <div>
                <dt className={label}>
                  <IconClock width={15} height={15} />
                  {t.hoursLabel}
                </dt>
                <dd className="mt-3">
                  <table className="w-full max-w-sm text-[1rem]">
                    <caption className="sr-only">{t.hoursLabel}</caption>
                    <tbody>
                      {hours.map((day) => (
                        <tr key={day.day} className="border-b border-rule">
                          <th scope="row" className="py-2.5 text-left font-normal text-graphite">
                            {dict.days[day.day]}
                          </th>
                          <td className="tabular py-2.5 text-right font-semibold text-ink">
                            {day.opens}–{day.closes}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-graphite">
                    {t.kitchen(lunch[0], lunch[1], dinner[0], dinner[1])} {t.rice}
                  </p>
                </dd>
              </div>

              <div>
                <dt className={label}>
                  <IconPhone width={15} height={15} />
                  {t.contactLabel}
                </dt>
                <dd className="mt-3">
                  <a href={restaurant.phone.href} className="tabular inline-flex min-h-11 items-center font-display text-3xl text-ink hover:text-naranja-ink">
                    {restaurant.phone.display}
                  </a>
                  <a
                    href={`mailto:${restaurant.email}`}
                    className="mt-1 flex min-h-11 items-center gap-2 text-[0.95rem] text-ink underline decoration-rule-strong underline-offset-4 hover:text-naranja-ink"
                  >
                    <IconMail width={17} height={17} className="shrink-0" />
                    <span>
                      {/* Перенос на узком экране — после «@», а не посреди домена. */}
                      {restaurant.email.split("@")[0]}@<wbr />
                      {restaurant.email.split("@")[1]}
                    </span>
                  </a>
                </dd>
              </div>

              <div>
                <dt className={label}>
                  <IconAccessible width={15} height={15} />
                  {t.gettingLabel}
                </dt>
                <dd className="mt-3 max-w-[46ch] text-[0.98rem] leading-relaxed text-graphite">{t.gettingText}</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.06}>
            <div className="grid gap-4 sm:grid-cols-5">
              <img
                src={srcFor(photo)}
                srcSet={srcSetFor(photo)}
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 100vw"
                width={photo.width}
                height={photo.height}
                alt={photo.alt[locale]}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover sm:col-span-2 sm:aspect-auto sm:h-full"
              />
              <div className="overflow-hidden border border-rule sm:col-span-3">
                <iframe
                  src={mapSrc}
                  title={t.mapTitle}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block h-[320px] w-full sm:h-[440px]"
                />
              </div>
            </div>

            <div className="mt-10">
              <h3 className="ruled ruled-start text-xs font-semibold uppercase tracking-[0.24em] text-ink">{t.servicesLabel}</h3>
              <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {t.services.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[0.98rem] text-ink">
                    <IconCheck width={18} height={18} className="mt-0.5 shrink-0 text-naranja-ink" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
