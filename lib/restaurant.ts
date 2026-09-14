/**
 * Факты о заведении. Источник — карточка «Restaurante Contrapunto Les Arts»
 * в Google Maps (`0xd604f5ebb90e085:0xe366ef2834341174`), снято 14 сентября
 * 2026 г. Почта, онлайн-бронь, соцсети и PDF-карты — с их сайта, указанного
 * в карточке. Часы кухни — из их карты напитков.
 *
 * Ничего не выдумано: если поля в источнике нет, его нет и здесь.
 * Про расхождения источников — DESIGN.md §2.
 */

export type DayKey = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export type VenueDay = { day: DayKey; opens: string; closes: string };

/** Часы из Google (совпадают с их сайтом). «1:00» — уже следующей ночью. */
export const venueHours: VenueDay[] = [
  { day: "mon", opens: "12:00", closes: "18:00" },
  { day: "tue", opens: "12:00", closes: "18:00" },
  { day: "wed", opens: "12:00", closes: "1:00" },
  { day: "thu", opens: "12:00", closes: "1:00" },
  { day: "fri", opens: "12:00", closes: "1:00" },
  { day: "sat", opens: "12:00", closes: "1:00" },
  { day: "sun", opens: "12:00", closes: "18:00" },
];

export const restaurant = {
  name: "Contrapunto Les Arts",

  address: {
    venue: "Palau de les Arts Reina Sofía",
    street: "Av. del Professor López Piñero, 1",
    district: "Quatre Carreres",
    postalCode: "46013",
    city: "València",
    region: "Comunitat Valenciana",
    country: "ES",
  },

  geo: { lat: 39.4576345, lng: -0.3551855 },

  /** В карточке — «FJ5V+3W Valencia»; полный код без города. */
  plusCode: "8CFXFJ5V+3W",

  phone: {
    display: "675 36 54 74",
    international: "+34 675 36 54 74",
    href: "tel:+34675365474",
  },

  email: "maitre.contrapuntolesarts@gourmetcatering.es",

  website: { href: "https://www.restaurantecontrapuntolesarts.com/", label: "restaurantecontrapuntolesarts.com" },

  /** «Reservar una mesa» в карточке ведёт сюда: виджет Wix Table Reservations. */
  reservationUrl: "https://www.restaurantecontrapuntolesarts.com/home",

  /** Официальные PDF и страницы их сайта. */
  docs: {
    carta: {
      es: "https://www.restaurantecontrapuntolesarts.com/_files/ugd/a33921_0e978b2d11bb4445836d6a5633c1b728.pdf",
      en: "https://www.restaurantecontrapuntolesarts.com/_files/ugd/a33921_e7516bbf929445bca4d0b56c7f991c82.pdf",
    },
    /** Недельное меню меняется каждую неделю — ссылка на страницу, а не на PDF. */
    weeklyMenuPage: "https://www.restaurantecontrapuntolesarts.com/men%C3%BA-semanal",
    winesByGlass: "https://www.restaurantecontrapuntolesarts.com/_files/ugd/a33921_15c7308f8ac64149b178b66cfd298d99.pdf",
    wineList: "https://www.restaurantecontrapuntolesarts.com/_files/ugd/a33921_c0f07cd33eed4fb58a1d765c60b31102.pdf",
    beers: "https://www.restaurantecontrapuntolesarts.com/_files/ugd/a33921_2644cf226db84b81a0bf785cd0462f70.pdf",
    drinks: "https://www.restaurantecontrapuntolesarts.com/_files/ugd/a33921_4627533805b24f98b7ca316cdc65f91d.pdf",
    infusions: "https://www.restaurantecontrapuntolesarts.com/_files/ugd/a33921_c19046d491394a3498beef5549e914e1.pdf",
  },

  social: {
    instagram: { href: "https://www.instagram.com/restaurantecontrapuntolesarts/", handle: "@restaurantecontrapuntolesarts" },
    facebook: { href: "https://www.facebook.com/Contrapunto-Les-Arts-545652788949774/", handle: "Contrapunto Les Arts" },
  },

  googleMapsUrl: "https://maps.app.goo.gl/fjxYav6afwWgB9dFA",
  googleMapsEmbedQuery: "Restaurante+Contrapunto+Les+Arts,+Av.+del+Professor+L%C3%B3pez+Pi%C3%B1ero,+1,+46013+Val%C3%A8ncia",

  rating: { value: 3.8, count: 2874 },

  /** «10-60 € por persona», notificado por 437 personas. */
  pricePerPerson: { from: 10, to: 60 },

  /** Часы кухни из их карты напитков (август 2026). */
  kitchen: { lunch: ["13:30", "16:00"], dinner: ["20:30", "23:00"] },

  /** Меню обеда — из карты и недельного PDF: пн–пт, 13:00–16:00, кроме праздников. */
  lunchMenu: { price: 25, from: "13:00", to: "16:00" },
  kidsMenu: { price: 16 },

  /** Значок «guía repsol 2026» стоит на их печатной карте (август 2026). */
  guiaRepsol: 2026,
} as const;

export const hours = venueHours;
