import { getDictionary, type Locale } from "@/lib/dictionaries";
import { photos } from "@/lib/photos";
import { hours, restaurant } from "@/lib/restaurant";
import { withBase } from "@/lib/basePath";

/**
 * Разметка schema.org для поисковой карточки. Все значения — из
 * lib/restaurant.ts, второго списка фактов на сайте нет.
 *
 * Закрытие в 1:00 пишется как «01:00» того же дня недели, что schema.org
 * допускает. Рейтинг — агрегат Google, помечен как aggregateRating.
 */
const DAY_URL: Record<string, string> = {
  mon: "https://schema.org/Monday",
  tue: "https://schema.org/Tuesday",
  wed: "https://schema.org/Wednesday",
  thu: "https://schema.org/Thursday",
  fri: "https://schema.org/Friday",
  sat: "https://schema.org/Saturday",
  sun: "https://schema.org/Sunday",
};

const pad = (t: string) => (t.length === 4 ? `0${t}` : t);

export function JsonLd({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.name,
    description: dict.meta.description,
    image: [photos.salaCalatrava, photos.letrasTerraza, photos.arrozPescado].map((p) => withBase(`/photos/${p.name}-1600.webp`)),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${restaurant.address.venue}, ${restaurant.address.street}`,
      addressLocality: restaurant.address.city,
      addressRegion: restaurant.address.region,
      postalCode: restaurant.address.postalCode,
      addressCountry: restaurant.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: restaurant.geo.lat, longitude: restaurant.geo.lng },
    telephone: restaurant.phone.international,
    email: restaurant.email,
    url: restaurant.website.href,
    sameAs: [restaurant.social.instagram.href, restaurant.social.facebook.href, restaurant.googleMapsUrl],
    servesCuisine: locale === "es" ? ["Mediterránea"] : ["Mediterranean"],
    priceRange: `${restaurant.pricePerPerson.from}–${restaurant.pricePerPerson.to} €`,
    currenciesAccepted: "EUR",
    hasMenu: restaurant.docs.carta[locale],
    acceptsReservations: restaurant.reservationUrl,
    openingHoursSpecification: hours.map((d) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: DAY_URL[d.day],
      opens: pad(d.opens),
      closes: pad(d.closes),
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: restaurant.rating.value,
      reviewCount: restaurant.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
