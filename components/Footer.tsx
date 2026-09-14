import { getDictionary, type Locale } from "@/lib/dictionaries";
import { restaurant } from "@/lib/restaurant";
import { hrefFor } from "@/lib/site";
import { markSrc, markSrcSet, marks } from "@/lib/photos";
import { IconFacebook, IconInstagram } from "@/components/icons";

/**
 * Подвал на бумаге: знак с рисунком Palau, адрес и телефон ещё раз, соцсети
 * с их сайта, знак ассоциированной компании Visit València (тоже с их сайта),
 * ссылка на другую языковую версию и строка об источниках — чтобы было видно,
 * откуда цены и часы и от какой они даты.
 */
export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const logo = marks.logoPalau;
  const vv = marks.visitValencia;

  const social = [
    { href: restaurant.social.instagram.href, label: `Instagram ${restaurant.social.instagram.handle}`, Icon: IconInstagram },
    { href: restaurant.social.facebook.href, label: `Facebook ${restaurant.social.facebook.handle}`, Icon: IconFacebook },
  ];
  const nav = [
    { href: "#la-casa", label: dict.nav.about },
    { href: "#platos", label: dict.nav.dishes },
    { href: "#carta", label: dict.nav.menu },
    { href: "#bodega", label: dict.nav.wine },
    { href: "#galeria", label: dict.nav.gallery },
    { href: "#opiniones", label: dict.nav.reviews },
    { href: "#visitanos", label: dict.nav.visit },
  ];

  return (
    <footer className="border-t border-rule bg-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <img
            src={markSrc(logo)}
            srcSet={markSrcSet(logo)}
            sizes="15rem"
            width={logo.width}
            height={logo.height}
            alt={restaurant.name}
            loading="lazy"
            className="w-56"
          />
          <p className="mt-6 max-w-[36ch] text-graphite">{dict.footer.tagline}</p>
          <address className="mt-5 not-italic leading-relaxed text-ink">
            {restaurant.address.venue}
            <br />
            {restaurant.address.street}, {restaurant.address.postalCode} {restaurant.address.city}
            <br />
            <a href={restaurant.phone.href} className="tabular inline-flex min-h-11 items-center hover:text-naranja-ink">
              {restaurant.phone.international}
            </a>
          </address>
        </div>

        <nav aria-label={dict.nav.sections} className="md:col-span-3">
          <ul className="space-y-0.5">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="inline-flex min-h-11 items-center text-graphite transition-colors duration-200 hover:text-ink">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-graphite">{dict.footer.follow}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {social.map(({ href, label, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} ${dict.cta.externalNote}`}
                  className="flex h-12 w-12 items-center justify-center rounded-[2px] border border-rule-strong text-ink transition-colors duration-200 hover:border-ink"
                >
                  <Icon width={20} height={20} />
                </a>
              </li>
            ))}
          </ul>
          <a
            href={hrefFor(dict.otherLocale.code)}
            hrefLang={dict.otherLocale.code}
            className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-ink underline decoration-rule-strong underline-offset-4 hover:text-naranja-ink"
          >
            {dict.otherLocale.aria}
          </a>
          <figure className="mt-8 flex items-center gap-4">
            <img src={markSrc(vv)} width={vv.width} height={vv.height} alt="" loading="lazy" className="w-24" />
            <figcaption className="max-w-[22ch] text-xs text-graphite">{dict.footer.visitValencia}</figcaption>
          </figure>
        </div>
      </div>

      <div className="border-t border-rule">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-graphite sm:px-8">
          © 2026 {restaurant.name} · {dict.footer.sources}
        </p>
      </div>
    </footer>
  );
}
