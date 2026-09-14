/**
 * Снимки из public/photos. JPG есть в двух ширинах (<name>-800.webp и
 * -1600.webp), PNG-знаки — в 640 и 1280 (scripts/optimize-photos.mjs).
 * width/height — размеры оригинала из _photos/photo-manifest.json, для
 * aspect-ratio (DESIGN.md §8).
 *
 * Происхождение: интерьеры, гости, подача, вывеска и знаки — медиа их сайта
 * (профессиональная съёмка); блюда, терраса у бассейна и Palau ночью —
 * фотографии из карточки Google. Кадры просмотрены контактным листом, блюда
 * опознаны по «Carta y platos destacados» карточки. Каждый кадр живёт на
 * странице один раз.
 */

import { withBase } from "@/lib/basePath";
import type { Locale } from "@/lib/dictionaries";

export type Photo = {
  name: string;
  width: number;
  height: number;
  alt: { es: string; en: string };
};

const photo = (name: string, width: number, height: number, es: string, en: string): Photo => ({
  name,
  width,
  height,
  alt: { es, en },
});

export const photos = {
  salaCalatrava: photo(
    "sala-calatrava",
    3000,
    2000,
    "Comedor de Contrapunto bajo las costillas blancas del Palau de les Arts: mesas oscuras con sillas de rejilla, lámparas de fibra y un techo ondulado de mimbre",
    "Contrapunto’s dining room beneath the white ribs of the Palau de les Arts: dark tables with cane chairs, fibre pendant lamps and a wave-shaped wicker ceiling",
  ),
  salaVertical: photo(
    "sala-vertical",
    2304,
    3000,
    "Mesas vestidas bajo la estructura de mimbre, con copas y platos de cerámica, junto a una planta de hojas grandes",
    "Laid tables under the wicker structure, with glasses and ceramic plates, beside a large-leafed plant",
  ),
  salaPasillo: photo(
    "sala-pasillo",
    2068,
    3000,
    "Pasillo de mesas junto a los ventanales en diagonal del Palau, con luz natural y plantas",
    "A row of tables along the Palau’s diagonal windows, in natural light with plants",
  ),
  rinconSofa: photo(
    "rincon-sofa",
    3000,
    2014,
    "Rincón con sofá claro y cojines entre plantas, con el comedor al fondo",
    "A lounge corner with a pale sofa and cushions among plants, the dining room behind",
  ),
  mesaLarga: photo(
    "mesa-larga",
    3000,
    1986,
    "Mesa larga preparada para un grupo, con lámpara de fibra y vitrina de vinos al fondo",
    "A long table set for a group, with a fibre pendant lamp and a wine cabinet behind",
  ),
  comensales: photo(
    "comensales",
    2001,
    3000,
    "Dos comensales en la mesa, una sirviéndose de un cuenco de cerámica, con copas de vino y vasos tallados",
    "Two guests at the table, one serving herself from a ceramic bowl, with wine glasses and cut-glass tumblers",
  ),
  tablaQuesos: photo(
    "tabla-quesos",
    3000,
    2000,
    "Un camarero lleva una tabla de quesos con uvas y frutos secos por la terraza, entre palmeras",
    "A waiter carries a cheese board with grapes and nuts across the terrace, among palms",
  ),
  letrasTerraza: photo(
    "letras-terraza",
    3000,
    1764,
    "Grandes letras de CONTRAPUNTO frente a la terraza cubierta, bajo la curva de hormigón del Palau",
    "Large CONTRAPUNTO letters in front of the covered terrace, beneath the Palau’s concrete curve",
  ),
  gofrePerlas: photo(
    "gofre-perlas",
    3000,
    2000,
    "Gofre salado con perlas negras, puntos de crema y brotes sobre un plato claro, visto desde arriba",
    "A savoury waffle topped with black pearls, dots of cream and sprouts on a pale plate, seen from above",
  ),
  terrazaCopa: photo(
    "terraza-copa",
    2000,
    2667,
    "Mesa de la terraza con una copa de vino tinto y un vaso con hielo, bajo el cielo azul y la Ciudad de las Artes al fondo",
    "A terrace table with a glass of red wine and an iced drink, blue sky and the City of Arts beyond",
  ),
  mesaFlores: photo(
    "mesa-flores",
    1600,
    1065,
    "Mesa de madera puesta con flores secas, copas y bajoplatos de fibra",
    "A wooden table laid with dried flowers, glasses and woven chargers",
  ),
  terrazaEstanque: photo(
    "terraza-estanque",
    1920,
    1080,
    "Mesas de la terraza junto a la barandilla, con vistas al estanque y a la Ciudad de las Artes y las Ciencias",
    "Terrace tables by the railing, overlooking the pool and the City of Arts and Sciences",
  ),
  letrasEstanque: photo(
    "letras-estanque",
    2000,
    1500,
    "Las letras de Contrapunto al otro lado del estanque turquesa, bajo la cubierta del Palau",
    "The Contrapunto letters across the turquoise pool, under the Palau’s canopy",
  ),
  terrazaBarra: photo(
    "terraza-barra",
    2000,
    1506,
    "Mesas altas de madera en la terraza cubierta, bajo las costillas de hormigón y cristal",
    "High wooden tables on the covered terrace, beneath the concrete-and-glass ribs",
  ),
  palauAzul: photo(
    "palau-azul",
    1687,
    3000,
    "El Palau de les Arts iluminado al anochecer, visto desde la orilla del estanque",
    "The Palau de les Arts lit up at dusk, seen from the edge of the pool",
  ),
  palauNoche: photo(
    "palau-noche",
    2000,
    2667,
    "Fachada del Palau de les Arts de noche, con su gran visera curva iluminada",
    "The Palau de les Arts at night, its great curved canopy lit from below",
  ),
  vinoVistas: photo(
    "vino-vistas",
    2000,
    1500,
    "Copa de vino blanco en una mesa de la terraza, con un puente y palmeras al atardecer",
    "A glass of white wine on a terrace table, with a bridge and palms at sunset",
  ),
  arrozPescado: photo(
    "arroz-pescado",
    2000,
    2673,
    "Arroz de pescado en paella metálica con judías verdes y dos cucharas, visto desde arriba",
    "Fish rice in a metal paella pan with green beans and two spoons, seen from above",
  ),
  arrozNegro: photo(
    "arroz-negro",
    2000,
    900,
    "Arroz negro en paella con trozos de pulpo tostado",
    "Black rice in a paella pan topped with pieces of crisp octopus",
  ),
  carneMadurada: photo(
    "carne-madurada",
    2000,
    1500,
    "Carne de vaca en su punto cortada en láminas, con pimientos rojos asados y patata paja",
    "Sliced medium-rare beef with roasted red peppers and straw potatoes",
  ),
  torrija: photo(
    "torrija",
    2000,
    1506,
    "Torrija caramelizada con una quenelle de helado y canela espolvoreada en un plato hondo",
    "A caramelised torrija with a quenelle of ice cream and dusted cinnamon in a deep plate",
  ),
  pescadoColiflor: photo(
    "pescado-coliflor",
    2000,
    2667,
    "Lomo de pescado con la piel tostada sobre crema de coliflor, con bimi",
    "A crisp-skinned fish fillet on cauliflower cream with broccolini",
  ),
  ostras: photo(
    "ostras",
    1080,
    1006,
    "Dos ostras abiertas sobre hielo picado con gajos de limón",
    "Two open oysters on crushed ice with lemon wedges",
  ),
  pulpoRoca: photo(
    "pulpo-roca",
    2000,
    2667,
    "Pata de pulpo a la brasa sobre tabla de madera con líneas de mahonesa anaranjada y pimentón",
    "A chargrilled octopus tentacle on a wooden board with lines of orange mayonnaise and paprika",
  ),
  coulant: photo(
    "coulant",
    2000,
    1500,
    "Coulant de chocolate con quenelle de helado en un plato de piedra",
    "Chocolate coulant with a quenelle of ice cream on a stone plate",
  ),
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

/** Знаки — чёрные на прозрачном. */
export const marks = {
  logo: { name: "logo", width: 3000, height: 561 },
  logoPalau: { name: "logo-palau", width: 3262, height: 1417 },
  palauLinea: { name: "palau-linea", width: 2507, height: 756 },
  visitValencia: { name: "visit-valencia", width: 828, height: 406 },
} as const;

export type Mark = (typeof marks)[keyof typeof marks];

export const srcFor = (p: Photo, w: 800 | 1600 = 800) => withBase(`/photos/${p.name}-${w}.webp`);

export const srcSetFor = (p: Photo) => `${srcFor(p, 800)} 800w, ${srcFor(p, 1600)} 1600w`;

export const markSrc = (m: Mark, w: 640 | 1280 = 640) => withBase(`/photos/${m.name}-${w}.webp`);

export const markSrcSet = (m: Mark) => `${markSrc(m, 640)} 640w, ${markSrc(m, 1280)} 1280w`;

export const altFor = (p: Photo, locale: Locale) => p.alt[locale];
