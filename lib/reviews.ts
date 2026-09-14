/**
 * Отзывы гостей. Источник — вкладка «Reseñas» карточки Google Maps, выдачи
 * `hl=es` и `hl=en` (у английской — оригиналы на английском), снято
 * 14 сентября 2026 г. (_data/maps/rev-*.json).
 *
 * Средняя оценка заведения 3,8 из 2 874 отзывов показана на странице рядом с
 * этими цитатами, без округления вверх. Цитаты выбраны из первой выдачи Google
 * («Más relevantes») — только оценки 4 и 5, текст приведён целиком и как есть,
 * орфография автора сохранена. Даты относительные, как их показывает Google.
 *
 * На странице другого языка — наш перевод с явной подписью; оригинал
 * раскрывается в <details>.
 */

import type { L } from "@/lib/menu";

export type ReviewLang = "es" | "en";

export type Review = {
  author: string;
  meta: L;
  rating: 4 | 5;
  when: L;
  lang: ReviewLang;
  text: string;
  translation: string;
};

export const reviews: Review[] = [
  {
    author: "Alexandra Nieto",
    meta: { es: "Local Guide · 41 reseñas", en: "Local Guide · 41 reviews" },
    rating: 5,
    when: { es: "Hace 5 meses", en: "5 months ago" },
    lang: "es",
    text: "Tanto la atención del personal como la comida es excelente!! El lugar está en un enclave precioso, en el Palau de les Arts. Perfecto para una cena romántica.  Excelente en todos los sentidos!",
    translation:
      "Both the staff’s attention and the food are excellent!! The place is in a beautiful setting, in the Palau de les Arts. Perfect for a romantic dinner. Excellent in every way!",
  },
  {
    author: "Hispanic Pundit",
    meta: { es: "Local Guide · 59 reseñas", en: "Local Guide · 59 reviews" },
    rating: 5,
    when: { es: "Hace 3 meses", en: "3 months ago" },
    lang: "en",
    text: "The place has surprisingly great tasting food w an awesome scenery. Highly recommended. The Salmon Sashimi and \"Mole Poblano\" tenderloins were 10/10 delicious.",
    translation:
      "El sitio tiene una comida sorprendentemente buena y un paisaje impresionante. Muy recomendable. El sashimi de salmón y el solomillo con «mole poblano» estaban deliciosos, de 10.",
  },
  {
    author: "Arcadio",
    meta: { es: "3 reseñas · 28 fotos", en: "3 reviews · 28 photos" },
    rating: 5,
    when: { es: "Hace 7 meses", en: "7 months ago" },
    lang: "es",
    text: "Muy grata experiencia culinaria en este restaurante.\nPedimos fuera de carta, alcachofas con láminas de tocino y queso fundido (punto de hechura perfecto. Excelentes)\nLuego seguimos con el Steak tartare sobre tosta de croissant. Buenísimo.\nYo pedí paletillas de conejo fritas con miel y romero. Qué sabor!!!!!\nPedimos también lomo de atún rojo con berenjena a la llama. Punto de cocción perfecto.\nDe postre, torrija de brioche con helado de leche merengada y brownie blanco con helado de calabaza.\nY una botella de vino Mestizaje. Todo excelente.\nRepetiremos.",
    translation:
      "A very pleasant culinary experience at this restaurant.\nWe ordered off the menu: artichokes with slices of bacon and melted cheese (cooked perfectly. Excellent)\nThen we moved on to the steak tartare on croissant toast. Superb.\nI had the fried rabbit shoulders with honey and rosemary. What flavour!!!!!\nWe also ordered the bluefin tuna loin with flame-roasted aubergine. Cooked to perfection.\nFor dessert, brioche torrija with leche merengada ice cream and white brownie with pumpkin ice cream.\nAnd a bottle of Mestizaje wine. Everything excellent.\nWe’ll be back.",
  },
  {
    author: "David Wilkes",
    meta: { es: "Local Guide · 191 reseñas", en: "Local Guide · 191 reviews" },
    rating: 5,
    when: { es: "Hace 4 meses", en: "4 months ago" },
    lang: "en",
    text: "Brilliant meal with friends. I came here once before, pre covid and this remains a star. Also ideal location for the arts and a leisurely pre dinner stroll. A+",
    translation:
      "Una comida estupenda con amigos. Ya había venido una vez, antes del covid, y sigue siendo una estrella. Además, un sitio ideal para ir a las artes y dar un paseo tranquilo antes de cenar. Sobresaliente.",
  },
  {
    author: "Marta R.",
    meta: { es: "Local Guide · 308 reseñas", en: "Local Guide · 308 reviews" },
    rating: 5,
    when: { es: "Hace 9 meses", en: "9 months ago" },
    lang: "es",
    text: "La experiencia en Contrapunto Las Artes y las Ciencias fue excepcional. Asistimos a una cata de vinos chilenos que resultó verdaderamente maravillosa: una selección cuidada, bien explicada y presentada con profesionalidad. El aperitivo que la acompañó estuvo “de 10”, perfectamente a la altura del resto de la velada.\n\nEl trato recibido fue impecable; nos atendieron de maravilla y se notó en cada detalle. Un agradecimiento especial al organizador de la cata, cuyo trabajo hizo posible una experiencia tan redonda, y a Pablo, que destacó con su vino Rubus y la prestación del espacio, sencillamente genial.\n\nUna experiencia plenamente recomendable.",
    translation:
      "The experience at Contrapunto in the City of Arts and Sciences was exceptional. We attended a Chilean wine tasting that turned out to be truly wonderful: a careful selection, well explained and professionally presented. The appetiser that came with it was “a 10”, fully up to the rest of the evening.\n\nThe service was impeccable; we were looked after wonderfully and it showed in every detail. Special thanks to the organiser of the tasting, whose work made such a well-rounded experience possible, and to Pablo, who stood out with his Rubus wine and the use of the space — simply great.\n\nA thoroughly recommendable experience.",
  },
  {
    author: "Carla Torres",
    meta: { es: "Local Guide · 194 reseñas", en: "Local Guide · 194 reviews" },
    rating: 4,
    when: { es: "Hace 10 meses", en: "10 months ago" },
    lang: "es",
    text: "El resturante de la ciudad de las artes, esta en una ubicación privilegiada de Valencia con parking cerca.\nEl pulpo suave y al mismo tiempo cruypor fuera, el conejo estaba rico pero tenia mucho sabor a romero, las alitas de pollo y a destacar su canelon que estaba delicioso.\nLa torrija con pan brioche y su tarta de queso con higos un acierto.\nDavid un buen camarero.",
    translation:
      "The restaurant in the City of Arts is in a prime spot in Valencia, with parking nearby.\nThe octopus was tender and at the same time crisp on the outside; the rabbit was tasty but had a lot of rosemary flavour; the chicken wings, and the standout, their cannelloni, which was delicious.\nThe brioche torrija and their cheesecake with figs were a hit.\nDavid, a good waiter.",
  },
];
