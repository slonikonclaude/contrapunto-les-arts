import { getDictionary, type Locale } from "@/lib/dictionaries";
import { setMenus } from "@/lib/menu";
import { restaurant } from "@/lib/restaurant";
import { photos, srcFor, srcSetFor } from "@/lib/photos";
import { formatPrice } from "@/lib/format";
import { Reveal } from "@/components/Reveal";
import { buttonClass } from "@/components/Section";
import { IconExternal } from "@/components/icons";

/**
 * Меню обеда — единственная чёрная плашка среди бумаги, как «MENU MEDIO DIA»
 * в их печатной карте. Блюда недели не публикуются: они меняются каждую
 * неделю, актуальное — по ссылке на их страницу (DESIGN.md §2, п. 5).
 * Детское меню и хлеб — там же, мелкими карточками.
 *
 * На чёрном: текст paper, вторичный mist, акцент naranja (5.75:1).
 */
export function SetMenus({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.setMenus;
  const p = photos.comensales;
  const allergens = setMenus.kids.allergens.map((a) => dict.menu.allergens[a]).join(", ");

  return (
    <section id="menu-mediodia" className="on-night scroll-mt-20 bg-night py-20 text-paper sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-7">
          <p className="ruled ruled-start text-xs font-semibold uppercase tracking-[0.28em] text-mist">{t.eyebrow}</p>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
            <h2 className="font-display text-[2.6rem] leading-[1.02] sm:text-6xl">{t.title}</h2>
            <p className="text-right">
              <span className="tabular block font-display text-6xl leading-none text-naranja sm:text-7xl">
                {formatPrice(setMenus.lunch.price, locale)}
              </span>
              <span className="mt-2 block text-xs uppercase tracking-[0.18em] text-mist">{t.perPerson}</span>
            </p>
          </div>

          <p className="mt-8 font-display text-2xl italic text-paper">{setMenus.lunch.courses[locale]}</p>

          <ul className="mt-6 divide-y divide-night-soft border-y border-night-soft">
            {t.points.map((pt) => (
              <li key={pt} className="flex gap-4 py-3.5 text-[1.02rem] text-mist">
                <span aria-hidden="true" className="mt-[0.7em] h-px w-5 shrink-0 bg-naranja" />
                {pt}
              </li>
            ))}
          </ul>

          <a href={restaurant.docs.weeklyMenuPage} target="_blank" rel="noopener noreferrer" className={`${buttonClass.solidNight} mt-9`}>
            {t.weekly}
            <IconExternal width={16} height={16} />
            <span className="sr-only"> {dict.cta.externalNote}</span>
          </a>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="border border-night-soft bg-night-soft p-5">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl">{t.kidsTitle}</h3>
                <p className="tabular font-display text-xl text-naranja">{formatPrice(setMenus.kids.price, locale)}</p>
              </div>
              <p className="mt-1 text-sm text-mist">{setMenus.kids.courses[locale]}</p>
              <p className="mt-2 text-xs text-mist">
                {dict.menu.allergensLabel}: {allergens}
              </p>
            </div>
            <div className="border border-night-soft bg-night-soft p-5">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl">{t.breadTitle}</h3>
                <p className="tabular font-display text-xl text-naranja">{formatPrice(setMenus.bread.price, locale)}</p>
              </div>
              <p className="mt-1 text-sm text-mist">{dict.menu.perPerson}</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={0.06}>
          <img
            src={srcFor(p, 1600)}
            srcSet={srcSetFor(p)}
            sizes="(min-width: 1024px) 36vw, 100vw"
            width={p.width}
            height={p.height}
            alt={p.alt[locale]}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover sm:aspect-[3/2] lg:aspect-auto lg:h-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
