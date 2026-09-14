/**
 * Тексты интерфейса на двух языках. Испанский — язык корня сайта, английский —
 * для туристов, которые приходят в Ciutat de les Arts i les Ciències.
 *
 * Тексты опираются на собственные формулировки заведения с их сайта
 * («la cocina mediterránea es la protagonista… productos frescos y de
 * temporada… la mejor terraza de Valencia») и на атрибуты карточки Google.
 * Английский — перевод по смыслу, а не калька. Названия блюд здесь не живут:
 * они в lib/menu.ts, факты — в lib/restaurant.ts.
 */

import type { Allergen } from "@/lib/menu";
import type { DayKey } from "@/lib/restaurant";

export type Locale = "es" | "en";

const es = {
  htmlLang: "es",
  otherLocale: { code: "en" as Locale, label: "EN", aria: "Read this page in English" },
  meta: {
    title: "Contrapunto Les Arts · Restaurante mediterráneo en el Palau de les Arts, Valencia",
    description:
      "Cocina mediterránea de producto fresco y de temporada, arroces a mediodía y terraza en el Palau de les Arts Reina Sofía. Carta con precios, menú de mediodía, vinos, horario y reservas.",
  },

  nav: {
    about: "La casa",
    dishes: "Platos",
    menu: "Carta",
    wine: "Bodega",
    gallery: "Galería",
    reviews: "Opiniones",
    visit: "Visítanos",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    skipToContent: "Saltar al contenido",
    sections: "Secciones",
  },

  cta: {
    reserve: "Reservar mesa",
    call: "Llamar",
    seeMenu: "Ver la carta",
    directions: "Cómo llegar",
    externalNote: "(se abre en otra pestaña)",
    pdf: "PDF",
  },

  hero: {
    eyebrow: "Palau de les Arts Reina Sofía · València",
    title: "Cocina mediterránea en el Palau de les Arts",
    lead: "Cada plato celebra los mejores productos, frescos y de temporada. Fuera, una terraza abierta a la Ciudad de las Artes y las Ciencias.",
    perPerson: "por persona",
    repsol: "Guía Repsol",
    terrace: "Terraza y comedor privado",
    photoCaption: "La sala, bajo la estructura del Palau",
  },

  facts: [
    { title: "Arroces a mediodía", text: "Cuatro arroces, solo en el servicio de comida" },
    { title: "Menú de mediodía · 25 €", text: "De lunes a viernes, cambia cada semana" },
    { title: "Bodega", text: (bottles: number, glasses: number) => `${bottles} vinos en carta y ${glasses} por copa` },
    { title: "Terraza", text: "Bajo la cubierta del Palau, junto al agua" },
  ],

  about: {
    eyebrow: "La casa",
    title: "Un comedor bajo la arquitectura de Calatrava",
    p1: "En Contrapunto Les Arts la cocina mediterránea es la protagonista. Cada plato celebra los mejores productos, frescos y de temporada, elaborados con pasión y respeto por el sabor auténtico.",
    p2: "El restaurante está dentro del Palau de les Arts Reina Sofía, la ópera de Valencia diseñada por Santiago Calatrava: una sala luminosa bajo las costillas blancas del edificio, con mimbre, madera y plantas, y una terraza frente al estanque.",
    p3: "Hay comedor privado y servicio de cátering para grupos y celebraciones, y una carta de vinos que recorre la Comunitat Valenciana, España y el mundo.",
    signature: "Contrapunto Les Arts",
  },

  dishes: {
    eyebrow: "De la carta",
    title: "Ocho platos de la carta actual",
    note: "Fotos de clientes publicadas en Google; la presentación puede variar.",
  },

  menu: {
    eyebrow: "La carta",
    title: "Cocina y bar, con precios",
    intro: "Carta vigente (agosto de 2026) con los alérgenos de la carta impresa. Si tienes alguna alergia o intolerancia, avisa al personal.",
    count: (dishes: number, drinks: number) => `${dishes} platos · ${drinks} bebidas`,
    kitchenLabel: "Cocina",
    barLabel: "Bar",
    tabsLabel: "Secciones de la carta",
    bread: "Servicio de pan",
    perPerson: "por persona",
    allergensLabel: "Alérgenos",
    allergens: {
      gluten: "Gluten",
      crustaceans: "Crustáceos",
      eggs: "Huevos",
      fish: "Pescado",
      peanuts: "Cacahuetes",
      soy: "Soja",
      milk: "Leche",
      nuts: "Frutos de cáscara",
      celery: "Apio",
      mustard: "Mostaza",
      sesame: "Sésamo",
      sulphites: "Sulfitos",
      lupin: "Altramuces",
      molluscs: "Moluscos",
    } satisfies Record<Allergen, string>,
    allergensTitle: "Alérgenos",
    allergensNote:
      "Las etiquetas corresponden a los números de la carta impresa del restaurante (los 14 alérgenos del Reglamento UE 1169/2011). Donde la carta no indica alérgenos, no se muestran. Ante cualquier duda, consulta al personal.",
    pdfCarta: "Carta en PDF",
    pdfDrinks: "Bebidas en PDF",
    pdfBeers: "Cervezas en PDF",
    pdfInfusions: "Infusiones en PDF",
  },

  setMenus: {
    eyebrow: "Mediodía",
    title: "Menú de mediodía",
    perPerson: "por persona",
    points: [
      "De lunes a viernes, de 13:00 a 16:00, excepto festivos",
      "Se sirve a mesa completa; para mesas de 10 o más, consultad opciones",
      "Cambia cada semana y no repite platos de la carta",
      "Pan y bebida no incluidos",
    ],
    weekly: "Ver el menú de esta semana",
    kidsTitle: "Menú niños",
    breadTitle: "Servicio de pan",
  },

  wine: {
    eyebrow: "Bodega",
    title: (bottles: number) => `${bottles} vinos en carta`,
    intro:
      "Blancos y tintos de la Comunitat Valenciana y de toda España, Borgoña, Champagne, Alemania, Italia, Portugal y el Nuevo Mundo. Y por copa, también generosos de Jerez y vinos dulces.",
    byGlass: "Por copa",
    glassNote: "Precio por copa.",
    glass: "Copa",
    bottle: "Botella",
    bottles: "La carta de botellas",
    bottlesNote: "Precio por botella. Carta de vinos de abril de 2026; las añadas pueden cambiar.",
    orange: "vino naranja",
    rose: "rosé",
    count: (n: number) => (n === 1 ? "1 vino" : `${n} vinos`),
    pdfList: "Carta de vinos en PDF",
    pdfGlass: "Vinos por copa en PDF",
  },

  gallery: {
    eyebrow: "Galería",
    title: "La sala, la terraza y el Palau",
    note: "Fotos del restaurante y de clientes en Google.",
  },

  reviews: {
    eyebrow: "Opiniones",
    title: "Lo que cuentan en Google",
    summary: (rating: string, count: string) => `${rating} de 5 · ${count} reseñas en Google`,
    starsLabel: (n: number) => `${n} de 5 estrellas`,
    translatedFrom: { es: "Ver el original en español", en: "Traducido del inglés · ver el original" } as Record<"es" | "en", string>,
    readAll: "Leer todas las reseñas en Google",
  },

  visit: {
    eyebrow: "Visítanos",
    title: "En el Palau de les Arts",
    addressLabel: "Dirección",
    plusCode: "Plus code",
    hoursLabel: "Horario",
    kitchen: (l1: string, l2: string, d1: string, d2: string) => `Cocina de ${l1} a ${l2} y, los días con cena, de ${d1} a ${d2}.`,
    rice: "Los arroces se sirven solo a mediodía.",
    contactLabel: "Contacto",
    gettingLabel: "Aparcamiento y acceso",
    gettingText:
      "Hay aparcamiento de pago y plazas en la calle, de pago y gratuitas, además de aparcamiento adaptado. Entrada, aseo y mesas accesibles en silla de ruedas.",
    servicesLabel: "Bueno saber",
    services: [
      "Terraza",
      "Comedor privado",
      "Cátering y eventos",
      "Ideal para grupos",
      "Tronas para niños",
      "Se recomienda reservar",
      "Tarjetas y pago con móvil",
      "Sin servicio a domicilio",
    ],
    mapTitle: "Mapa: Contrapunto Les Arts en el Palau de les Arts Reina Sofía",
  },

  ctaBand: {
    title: "Reserva tu mesa",
    text: "Se recomienda reservar, tanto para comer como para cenar. Reserva online en la web del restaurante o llama.",
  },

  footer: {
    tagline: "Cocina mediterránea en el Palau de les Arts Reina Sofía, València.",
    follow: "Síguenos",
    visitValencia: "Empresa asociada a la Fundació Visit València",
    sources:
      "Datos de la ficha de Google Maps y de la web del restaurante (septiembre de 2026). Carta de agosto de 2026; precios y horarios pueden cambiar.",
  },

  days: {
    mon: "Lunes",
    tue: "Martes",
    wed: "Miércoles",
    thu: "Jueves",
    fri: "Viernes",
    sat: "Sábado",
    sun: "Domingo",
  } satisfies Record<DayKey, string>,
};

type Dict = typeof es;

const en: Dict = {
  htmlLang: "en",
  otherLocale: { code: "es", label: "ES", aria: "Leer esta página en español" },
  meta: {
    title: "Contrapunto Les Arts · Mediterranean restaurant at the Palau de les Arts, Valencia",
    description:
      "Mediterranean cooking with fresh, seasonal produce, lunchtime rice dishes and a terrace at the Palau de les Arts Reina Sofía. Menu with prices, set lunch, wines, opening hours and bookings.",
  },

  nav: {
    about: "The house",
    dishes: "Dishes",
    menu: "Menu",
    wine: "Wine",
    gallery: "Gallery",
    reviews: "Reviews",
    visit: "Visit",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skipToContent: "Skip to content",
    sections: "Sections",
  },

  cta: {
    reserve: "Book a table",
    call: "Call",
    seeMenu: "See the menu",
    directions: "Get directions",
    externalNote: "(opens in a new tab)",
    pdf: "PDF",
  },

  hero: {
    eyebrow: "Palau de les Arts Reina Sofía · València",
    title: "Mediterranean cooking inside the Palau de les Arts",
    lead: "Every dish celebrates the best fresh, seasonal produce. Outside, a terrace open to the City of Arts and Sciences.",
    perPerson: "per person",
    repsol: "Guía Repsol",
    terrace: "Terrace and private dining room",
    photoCaption: "The dining room, beneath the Palau’s structure",
  },

  facts: [
    { title: "Rice at lunchtime", text: "Four rice dishes, served at lunch only" },
    { title: "Set lunch · €25", text: "Monday to Friday, changes every week" },
    { title: "Wine", text: (bottles: number, glasses: number) => `${bottles} wines on the list, ${glasses} by the glass` },
    { title: "Terrace", text: "Under the Palau’s canopy, by the water" },
  ],

  about: {
    eyebrow: "The house",
    title: "A dining room beneath Calatrava’s architecture",
    p1: "At Contrapunto Les Arts, Mediterranean cooking takes centre stage. Every dish celebrates the best fresh, seasonal produce, prepared with passion and respect for authentic flavour.",
    p2: "The restaurant sits inside the Palau de les Arts Reina Sofía, Valencia’s opera house designed by Santiago Calatrava: a bright room beneath the building’s white ribs, with wicker, wood and plants, and a terrace facing the pool.",
    p3: "There is a private dining room and catering for groups and celebrations, and a wine list that travels from the Valencia region across Spain and the world.",
    signature: "Contrapunto Les Arts",
  },

  dishes: {
    eyebrow: "From the menu",
    title: "Eight dishes from the current menu",
    note: "Guest photos published on Google; presentation may vary.",
  },

  menu: {
    eyebrow: "The menu",
    title: "Kitchen and bar, with prices",
    intro: "Current menu (August 2026) with the allergens from the printed menu. If you have an allergy or intolerance, please tell our staff.",
    count: (dishes: number, drinks: number) => `${dishes} dishes · ${drinks} drinks`,
    kitchenLabel: "Kitchen",
    barLabel: "Bar",
    tabsLabel: "Menu sections",
    bread: "Bread service",
    perPerson: "per person",
    allergensLabel: "Allergens",
    allergens: {
      gluten: "Gluten",
      crustaceans: "Crustaceans",
      eggs: "Eggs",
      fish: "Fish",
      peanuts: "Peanuts",
      soy: "Soy",
      milk: "Milk",
      nuts: "Tree nuts",
      celery: "Celery",
      mustard: "Mustard",
      sesame: "Sesame",
      sulphites: "Sulphites",
      lupin: "Lupin",
      molluscs: "Molluscs",
    },
    allergensTitle: "Allergens",
    allergensNote:
      "Labels match the numbers on the restaurant’s printed menu (the 14 allergens of EU Regulation 1169/2011). Where the menu lists no allergens, none are shown. If in doubt, please ask our staff.",
    pdfCarta: "Menu (PDF)",
    pdfDrinks: "Drinks (PDF)",
    pdfBeers: "Beers (PDF)",
    pdfInfusions: "Infusions (PDF)",
  },

  setMenus: {
    eyebrow: "Lunchtime",
    title: "Set lunch menu",
    perPerson: "per person",
    points: [
      "Monday to Friday, 1 pm to 4 pm, except public holidays",
      "Served to the whole table; for tables of 10 or more, ask about options",
      "Changes every week and does not repeat dishes from the à la carte menu",
      "Bread and drinks not included",
    ],
    weekly: "See this week’s menu",
    kidsTitle: "Kids’ menu",
    breadTitle: "Bread service",
  },

  wine: {
    eyebrow: "Wine",
    title: (bottles: number) => `${bottles} wines on the list`,
    intro:
      "Whites and reds from the Valencia region and all over Spain, Burgundy, Champagne, Germany, Italy, Portugal and the New World. By the glass, sherries and dessert wines too.",
    byGlass: "By the glass",
    glassNote: "Price per glass.",
    glass: "Glass",
    bottle: "Bottle",
    bottles: "The bottle list",
    bottlesNote: "Price per bottle. Wine list from April 2026; vintages may change.",
    orange: "orange wine",
    rose: "rosé",
    count: (n: number) => (n === 1 ? "1 wine" : `${n} wines`),
    pdfList: "Wine list (PDF)",
    pdfGlass: "Wines by the glass (PDF)",
  },

  gallery: {
    eyebrow: "Gallery",
    title: "The room, the terrace and the Palau",
    note: "Photos from the restaurant and from guests on Google.",
  },

  reviews: {
    eyebrow: "Reviews",
    title: "What guests say on Google",
    summary: (rating: string, count: string) => `${rating} out of 5 · ${count} Google reviews`,
    starsLabel: (n: number) => `${n} out of 5 stars`,
    translatedFrom: { es: "Translated from Spanish · see the original", en: "See the original in English" },
    readAll: "Read all reviews on Google",
  },

  visit: {
    eyebrow: "Visit",
    title: "At the Palau de les Arts",
    addressLabel: "Address",
    plusCode: "Plus code",
    hoursLabel: "Opening hours",
    kitchen: (l1: string, l2: string, d1: string, d2: string) => `Kitchen open ${l1}–${l2} and, on evenings the restaurant is open, ${d1}–${d2}.`,
    rice: "Rice dishes are served at lunchtime only.",
    contactLabel: "Contact",
    gettingLabel: "Parking and access",
    gettingText:
      "There is paid parking and street parking nearby, both paid and free, plus accessible parking. Entrance, toilet and seating are wheelchair accessible.",
    servicesLabel: "Good to know",
    services: [
      "Terrace",
      "Private dining room",
      "Catering and events",
      "Good for groups",
      "High chairs",
      "Booking recommended",
      "Cards and mobile payments",
      "No delivery",
    ],
    mapTitle: "Map: Contrapunto Les Arts at the Palau de les Arts Reina Sofía",
  },

  ctaBand: {
    title: "Book your table",
    text: "Booking is recommended for both lunch and dinner. Book online on the restaurant’s website or give us a call.",
  },

  footer: {
    tagline: "Mediterranean cooking at the Palau de les Arts Reina Sofía, València.",
    follow: "Follow us",
    visitValencia: "Associate member of the Fundació Visit València",
    sources:
      "Information from the Google Maps listing and the restaurant’s website (September 2026). Menu from August 2026; prices and hours may change.",
  },

  days: {
    mon: "Monday",
    tue: "Tuesday",
    wed: "Wednesday",
    thu: "Thursday",
    fri: "Friday",
    sat: "Saturday",
    sun: "Sunday",
  },
};

const dictionaries: Record<Locale, Dict> = { es, en };

export const getDictionary = (locale: Locale) => dictionaries[locale];
