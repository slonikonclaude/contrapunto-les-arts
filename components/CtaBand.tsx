import { getDictionary, type Locale } from "@/lib/dictionaries";
import { restaurant } from "@/lib/restaurant";
import { photos, srcFor, srcSetFor } from "@/lib/photos";
import { Reveal } from "@/components/Reveal";
import { buttonClass } from "@/components/Section";
import { IconExternal, IconPhone } from "@/components/icons";

/**
 * Финальный призыв: чёрная полоса с кадром террасы у воды. Два пути — онлайн
 * через виджет брони на их сайте (туда же ведёт «Reservar una mesa» в карточке
 * Google) и звонок. Карточка Google советует бронировать и обед, и ужин.
 */
export function CtaBand({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const p = photos.terrazaEstanque;

  return (
    <section className="on-night bg-night text-paper">
      {/* Снимок уходит под край экрана; левый отступ текста совпадает с контейнером max-w-7xl. */}
      <div className="grid items-stretch lg:grid-cols-2">
        <Reveal className="px-5 py-20 sm:px-8 sm:py-24 lg:pl-[max(2rem,calc(50vw-38rem))] lg:pr-14">
          <h2 className="font-display text-[2.6rem] leading-[1.02] sm:text-6xl" style={{ textWrap: "balance" }}>
            {dict.ctaBand.title}
          </h2>
          <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-mist">{dict.ctaBand.text}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={restaurant.reservationUrl} target="_blank" rel="noopener noreferrer" className={buttonClass.solidNight}>
              {dict.cta.reserve}
              <IconExternal width={16} height={16} />
              <span className="sr-only"> {dict.cta.externalNote}</span>
            </a>
            <a href={restaurant.phone.href} className={buttonClass.outlineNight}>
              <IconPhone width={16} height={16} />
              <span className="tabular">{restaurant.phone.display}</span>
            </a>
          </div>
        </Reveal>
        <img
          src={srcFor(p, 1600)}
          srcSet={srcSetFor(p)}
          sizes="(min-width: 1024px) 50vw, 100vw"
          width={p.width}
          height={p.height}
          alt={p.alt[locale]}
          loading="lazy"
          decoding="async"
          className="aspect-[16/9] w-full object-cover lg:aspect-auto lg:h-full"
        />
      </div>
    </section>
  );
}
