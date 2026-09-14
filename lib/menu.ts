/**
 * Карта ресторана. Источники (DESIGN.md §1–2):
 *
 *   кухня     — PDF «Carta» ES от 13.08.2026 (цены, состав, аллергены — только
 *               отсюда) и EN с той же страницы (английские названия, где блюдо
 *               совпадает); текст обоих — _data/pdf-text/carta-*.txt
 *   бокалы    — PDF «Vinos por copas / Wines by the glass», 05.08.2026
 *   пиво      — PDF «Carta cervezas»
 *   напитки   — PDF «Otras bebidas» от 05.08.2026 (новее январской версии)
 *
 * Аллергены — номера печатной карты, расшифрованы по её легенде (порядок
 * Регламента ЕС 1169/2011). Где у блюда номеров нет — массив пуст; «без
 * аллергенов» мы не утверждаем, на странице просто нет меток.
 *
 * FIXES — правки против печатной карты, только орфография:
 *   «sufladacon» → «suflada con»; «muhammarade yogurt» → «muhammara de yogur»;
 *   «berenjena a la lama» → «a la llama»; «romescu» → «romesco»;
 *   «piementos de padron» → «pimientos de Padrón»; «Esparrago» → «Espárrago»;
 *   «alli oli» → «all i oli»; «Lopez» → «López»; «Kimchy» → «kimchi»;
 *   «Pedri Ximénez» → «Pedro Ximénez»; «Nipoort» → «Niepoort»;
 *   «Hásrslevelü» → «Hárslevelű»; «HENDRYCKS» → «Hendrick's».
 *   В напитках второй «COLACAO 2,00 €» — дубль строки, в январской версии на
 *   этом месте «Agua Nea»; позиция не публикуется.
 *   «salsa tae» оставлена как напечатано.
 */

export type L = { es: string; en: string };

export type Allergen =
  | "gluten"
  | "crustaceans"
  | "eggs"
  | "fish"
  | "peanuts"
  | "soy"
  | "milk"
  | "nuts"
  | "celery"
  | "mustard"
  | "sesame"
  | "sulphites"
  | "lupin"
  | "molluscs";

/** Номер в легенде карты → ключ. Индекс 0 не используется. */
const LEGEND: (Allergen | null)[] = [
  null,
  "gluten",
  "crustaceans",
  "eggs",
  "fish",
  "peanuts",
  "soy",
  "milk",
  "nuts",
  "celery",
  "mustard",
  "sesame",
  "sulphites",
  "lupin",
  "molluscs",
];

const al = (...n: number[]): Allergen[] => n.map((i) => LEGEND[i] as Allergen);

export type Dish = {
  id: string;
  /** Жирная часть строки, как в печатной карте. */
  lead: L;
  /** Продолжение строки обычным начертанием. */
  rest?: L;
  unit?: L;
  price: number;
  allergens: Allergen[];
  /** Название для карточки вне раздела («Negro» → «Arroz negro»). */
  cardTitle?: L;
  /** Подачи со своими аллергенами (устрицы). */
  options?: { label: L; allergens: Allergen[] }[];
};

export type DishGroup = { id: string; title: L; note?: L[]; items: Dish[] };

export type Drink = { id: string; name: L; desc?: L; unit?: string; price: number };

export type DrinkSection = { title: L; note?: L; items: Drink[] };

export type DrinkGroup = { id: string; title: L; note?: L; sections: DrinkSection[] };

/** Название без перевода (марка) — одна строка на оба языка. */
const same = (s: string): L => ({ es: s, en: s });

/* ─────────────────────────────── Кухня ─────────────────────────────── */

export const kitchen: DishGroup[] = [
  {
    id: "entrantes-frios",
    title: { es: "Entrantes fríos", en: "Cold starters" },
    items: [
      {
        id: "ostras",
        lead: { es: "Ostras", en: "Oysters" },
        unit: { es: "1 ud.", en: "1 piece" },
        price: 6.2,
        allergens: [],
        options: [
          { label: { es: "Al natural", en: "Natural" }, allergens: al(14) },
          { label: { es: "Curry de naranja valenciana", en: "Valencian orange curry" }, allergens: al(12, 14) },
          { label: { es: "Kimchi", en: "Kimchi" }, allergens: al(1, 4, 6, 11, 14) },
        ],
      },
      {
        id: "anchoa",
        lead: { es: "Anchoa", en: "Anchovy" },
        rest: { es: "López Serie Oro sobre tosta de brioche", en: "López Serie Oro on brioche toast" },
        unit: { es: "1 ud.", en: "1 piece" },
        price: 5.25,
        allergens: al(1, 4, 7),
      },
      {
        id: "gilda",
        lead: { es: "Super Gilda", en: "Super Gilda" },
        price: 6,
        allergens: al(4, 12),
      },
      {
        id: "ensalada-tomate",
        lead: { es: "Ensalada de tomate", en: "Tomato salad" },
        rest: { es: "con burrata de búfala artesanal", en: "with artisan buffalo burrata" },
        price: 18,
        allergens: al(7, 12),
      },
      {
        id: "hummus",
        lead: { es: "Hummus", en: "Hummus" },
        rest: { es: "con cordero y salsa de yogur", en: "with lamb and yogurt sauce" },
        price: 14.8,
        allergens: al(1, 7, 11),
      },
      {
        id: "sepia",
        lead: { es: "Sepia", en: "Cuttlefish" },
        rest: { es: "con mahonesa de pistacho", en: "with pistachio mayonnaise" },
        price: 14.5,
        allergens: al(8),
      },
      {
        id: "puerro",
        lead: { es: "Puerro a la llama", en: "Flame-roasted leek" },
        rest: { es: "con salsa muhammara de yogur y papada ibérica", en: "with yogurt muhammara and Iberian pork jowl" },
        price: 14.1,
        allergens: al(7, 8, 12),
      },
      {
        id: "boniato",
        lead: { es: "Boniato rojo asado", en: "Roasted red sweet potato" },
        rest: {
          es: "con fresas, cremoso de queso azul, encurtidos y mojo verde",
          en: "with strawberries, blue cheese cream, pickles and green mojo",
        },
        price: 14.25,
        allergens: al(7, 12),
      },
      {
        id: "ensaladilla-anguila",
        lead: { es: "Ensaladilla", en: "Potato salad" },
        rest: { es: "escabechada de anguila ahumada", en: "in escabeche with smoked eel" },
        price: 13,
        allergens: al(1, 3, 4, 12),
      },
      {
        id: "esparrago",
        lead: { es: "Espárrago blanco", en: "White asparagus" },
        rest: { es: "a la carbonara", en: "carbonara" },
        price: 18,
        allergens: al(3, 7),
      },
      {
        id: "roast-beef",
        lead: { es: "Roast beef", en: "Roast beef" },
        rest: { es: "con crema de manzana asada y salsa verde", en: "with roasted apple cream and green sauce" },
        price: 18.3,
        allergens: al(4),
      },
      {
        id: "tartar-atun",
        lead: { es: "Tartar de atún rojo", en: "Bluefin tuna tartare" },
        rest: { es: "con gazpacho verde", en: "with green gazpacho" },
        price: 24,
        allergens: al(1, 4, 6, 11),
      },
      {
        id: "steak-tartar",
        lead: { es: "Steak tartar", en: "Steak tartare" },
        rest: {
          es: "de lomo bajo madurado sobre tosta de croissant francés de mantequilla",
          en: "of aged sirloin on a French butter croissant toast",
        },
        unit: { es: "1 ud.", en: "1 piece" },
        price: 10.5,
        allergens: al(1, 3, 4, 7, 10, 12),
      },
      {
        id: "sashimi-salmon",
        lead: { es: "Sashimi de salmón", en: "Salmon sashimi" },
        rest: {
          es: "marinado sobre berenjena a la llama, encurtidos, miel y mostaza",
          en: "marinated, on flame-roasted aubergine with pickles, honey and mustard",
        },
        price: 21,
        allergens: al(1, 3, 4, 6, 10, 12),
      },
    ],
  },
  {
    id: "entrantes-calientes",
    title: { es: "Entrantes calientes", en: "Hot starters" },
    items: [
      {
        id: "explosion-patata",
        lead: { es: "Explosión", en: "Soufflé potato" },
        rest: { es: "de patata suflada con trufa fresca de temporada", en: "“explosion” with fresh seasonal truffle" },
        unit: { es: "1 ud.", en: "1 piece" },
        price: 5,
        allergens: al(3),
      },
      {
        id: "oreja",
        lead: { es: "Oreja", en: "Pig’s ear" },
        rest: { es: "crujiente cocinada a baja temperatura con encurtidos", en: "slow-cooked and crisp, with pickles" },
        price: 15.5,
        allergens: al(10),
      },
      {
        id: "pulpo",
        lead: { es: "Pulpo", en: "Rock octopus" },
        rest: { es: "de roca con mahonesa de «mojo picón»", en: "with mojo picón mayonnaise" },
        price: 24,
        allergens: al(3, 12, 14),
      },
      {
        id: "paletillas-conejo",
        lead: { es: "Paletillas", en: "Rabbit shoulders" },
        rest: { es: "de conejo fritas con barbacoa de romero", en: "fried, with rosemary barbecue sauce" },
        unit: { es: "4 uds.", en: "4 pieces" },
        price: 22,
        allergens: al(1, 7, 10, 12),
      },
      {
        id: "costilla-iberica",
        lead: { es: "Costilla de cerdo ibérica", en: "Iberian pork rib" },
        rest: { es: "con salsa tae y chips de yuca", en: "with tae sauce and cassava chips" },
        price: 18.5,
        allergens: al(1, 7),
      },
      {
        id: "canelon",
        lead: { es: "Canelón", en: "Cannelloni" },
        rest: { es: "de pollo de corral e Idiazábal", en: "of free-range chicken and Idiazábal cheese" },
        price: 17.8,
        allergens: al(1, 3, 7),
      },
      {
        id: "gamba-blanca",
        lead: { es: "Gamba blanca", en: "White prawns" },
        rest: { es: "a la sal", en: "baked in salt" },
        unit: { es: "200 g", en: "200 g" },
        price: 16.5,
        allergens: al(2),
      },
      {
        id: "alitas",
        lead: { es: "Alitas de pollo", en: "Chicken wings" },
        rest: { es: "de corral laqueadas", en: "free-range, lacquered" },
        price: 13.5,
        allergens: [],
      },
    ],
  },
  {
    id: "pescados",
    title: { es: "Pescados", en: "Fish" },
    items: [
      {
        id: "rodaballo",
        lead: { es: "Rodaballo", en: "Turbot" },
        rest: { es: "con «suquet» de marisco", en: "with seafood suquet" },
        price: 38,
        allergens: al(2, 4, 7, 12, 14),
      },
      {
        id: "lomo-atun",
        lead: { es: "Lomo de atún rojo", en: "Bluefin tuna loin" },
        rest: { es: "glaseado con berenjena a la llama y ajetes", en: "glazed, with flame-roasted aubergine and green garlic" },
        price: 28,
        allergens: al(1, 4, 6, 7, 11),
      },
      {
        id: "pescado-lonja",
        lead: { es: "Pescado de lonja", en: "Catch of the day" },
        rest: { es: "con crema de coliflor y bimi", en: "with cauliflower cream and broccolini" },
        price: 30,
        allergens: al(4),
      },
    ],
  },
  {
    id: "carnes",
    title: { es: "Carnes", en: "Meat" },
    items: [
      {
        id: "codillo",
        lead: { es: "Codillo de cerdo", en: "Pork knuckle" },
        rest: { es: "con salsa romesco y pimientos de Padrón", en: "with romesco sauce and Padrón peppers" },
        price: 25,
        allergens: al(12),
      },
      {
        id: "presa-iberica",
        lead: { es: "Presa ibérica", en: "Iberian presa" },
        rest: {
          es: "de bellota con cebolletas agridulces y crema cítrica de zanahoria",
          en: "acorn-fed, with sweet-and-sour spring onions and citrus carrot cream",
        },
        price: 32,
        allergens: al(6, 7, 12),
      },
      {
        id: "lomo-bajo",
        lead: { es: "Lomo bajo de vaca", en: "Beef sirloin" },
        rest: {
          es: "madurada más de 40 días con pimientos del piquillo asados y patata paja",
          en: "dry-aged over 40 days, with roasted piquillo peppers and straw potatoes",
        },
        unit: { es: "400 g / 500 g", en: "400 g / 500 g" },
        price: 46,
        allergens: [],
      },
      {
        id: "solomillo",
        lead: { es: "Solomillo de ternera", en: "Beef tenderloin" },
        rest: { es: "con mole poblano, patatas y tomates cherry", en: "with mole poblano, potatoes and cherry tomatoes" },
        price: 34,
        allergens: al(7),
      },
    ],
  },
  {
    id: "arroces",
    title: { es: "Arroces", en: "Rice dishes" },
    note: [
      { es: "Solo en el servicio de mediodía y a mesa completa.", en: "Lunchtime only, for the whole table." },
      { es: "Mínimo dos personas. Precio por persona.", en: "Minimum two people. Price per person." },
      {
        es: "A partir de 5 personas el arroz será meloso; si sois menos y lo preferís meloso, consultad al personal.",
        en: "For 5 or more the rice is served creamy (meloso); if you are fewer and would like it creamy, ask our staff.",
      },
    ],
    items: [
      {
        id: "arroz-pescado",
        lead: { es: "De pescado de lonja y gamba roja", en: "Catch of the day and red prawn" },
        cardTitle: { es: "Arroz de pescado de lonja y gamba roja", en: "Rice with catch of the day and red prawn" },
        price: 24,
        allergens: al(2, 4, 12, 14),
      },
      {
        id: "arroz-negro",
        lead: { es: "Negro", en: "Black rice" },
        cardTitle: { es: "Arroz negro", en: "Black rice" },
        rest: { es: "de torreznos de pulpo, salicornia y «all i oli»", en: "with crispy octopus, samphire and all i oli" },
        price: 23,
        allergens: al(2, 3, 4, 12, 14),
      },
      {
        id: "arroz-costilla",
        lead: { es: "De costilla ibérica y chimichurri cítrico", en: "Iberian pork rib and citrus chimichurri" },
        price: 21.5,
        allergens: al(12),
      },
      {
        id: "arroz-pato",
        lead: { es: "De pato, boletus y ajos tiernos", en: "Duck, boletus and green garlic" },
        price: 24,
        allergens: al(12),
      },
    ],
  },
  {
    id: "postres",
    title: { es: "Postres", en: "Desserts" },
    items: [
      {
        id: "coulant",
        lead: { es: "Coulant de chocolate", en: "Chocolate coulant" },
        rest: {
          es: "a la piedra con helado de plátano y nibs de cacao (espera mínima 12 min)",
          en: "stone-ground, with banana ice cream and cocoa nibs (minimum wait 12 min)",
        },
        price: 9.5,
        allergens: al(1, 3, 7, 8),
      },
      {
        id: "torrija",
        lead: { es: "Torrija de brioche", en: "Brioche torrija" },
        rest: { es: "caramelizada con helado de leche merengada", en: "caramelised, with leche merengada ice cream" },
        price: 8,
        allergens: al(1, 3, 7, 8),
      },
      {
        id: "mousse-frutos-rojos",
        lead: { es: "Mousse de frutos rojos", en: "Red berry mousse" },
        rest: { es: "con chocolate blanco y sorbete de fresas", en: "with white chocolate and strawberry sorbet" },
        price: 8,
        allergens: al(7),
      },
      {
        id: "pan-calatrava",
        lead: { es: "Pan de Calatrava", en: "Pan de Calatrava" },
        rest: { es: "con fruta de temporada y helado de calabaza", en: "custard bread pudding, with seasonal fruit and pumpkin ice cream" },
        price: 7.5,
        allergens: al(1, 3, 7, 8),
      },
      {
        id: "tarta-queso",
        lead: { es: "Tarta de queso", en: "Cheesecake" },
        rest: { es: "de Mahón con toffee y pistacho garrapiñado", en: "made with Mahón cheese, with toffee and candied pistachio" },
        price: 8.5,
        allergens: al(1, 3, 7, 8),
      },
    ],
  },
];

/** Меню дня и детское — отдельная чёрная полоса, как плашка в карте. */
export const setMenus = {
  lunch: {
    price: 25,
    courses: { es: "Entrante, principal y postre", en: "Starter, main course and dessert" },
    allergens: [] as Allergen[],
  },
  kids: {
    price: 16,
    courses: { es: "Nuggets, patatas y postre", en: "Nuggets, chips and dessert" },
    allergens: al(1, 3, 6, 7, 8, 12),
  },
  bread: { price: 1.5 },
};

/* ────────────────────────── Вина по бокалам ────────────────────────── */

export type GlassWine = {
  id: string;
  name: string;
  desc: string;
  vintage?: number;
  glass: number;
  bottles?: { size: string; price: number }[];
};

export const winesByGlass: { title: L; items: GlassWine[] }[] = [
  {
    title: { es: "Blancos", en: "White" },
    items: [
      { id: "clavidor", name: "Clavidor Cepas Viejas", desc: "Vidal Soblechero · Rueda · Verdejo", vintage: 2024, glass: 5 },
      { id: "tiro-al-blanco", name: "Tiro al Blanco", desc: "O Morto Wines · Ribeiro · Godello", vintage: 2024, glass: 6.5 },
      { id: "canada-paris", name: "Cañada París", desc: "Baldovar 923 · Alpuente, Valencia · Merseguera", vintage: 2023, glass: 6.3 },
    ],
  },
  {
    title: { es: "Tintos", en: "Red" },
    items: [
      { id: "asomo", name: "Asomo", desc: "Figuero · La Aguilera · Tempranillo", vintage: 2024, glass: 6 },
      { id: "parsimonia", name: "Parsimonia de Autor", desc: "Vibe · Utiel-Requena · Bobal", vintage: 2022, glass: 5.5 },
      { id: "el-pedal", name: "El Pedal", desc: "", glass: 5.5 },
    ],
  },
  {
    title: { es: "Rosado", en: "Rosé" },
    items: [{ id: "kaleidos", name: "Kaleidos", desc: "Vibe · Utiel-Requena · Bobal", vintage: 2024, glass: 4.95 }],
  },
  {
    title: { es: "Espumosos", en: "Sparkling" },
    items: [
      { id: "allegranza", name: "Allegranza", desc: "Vibe · Cava, Utiel-Requena · Macabeo, Chardonnay", glass: 5.2 },
      { id: "calvestra", name: "Calvestra Brut Nature", desc: "Mustiguillo · El Terrerazo · Chardonnay, Merseguera", vintage: 2018, glass: 7 },
      {
        id: "roger-manceaux",
        name: "Roger Manceaux Brut Premier Cru",
        desc: "Champagne, Rilly-la-Montagne · Pinot Noir, Pinot Meunier, Chardonnay",
        glass: 9.5,
      },
    ],
  },
  {
    title: { es: "Generosos y dulces", en: "Fortified & dessert wines" },
    items: [
      { id: "gabriela", name: "Manzanilla Pasada en Rama Gabriela", desc: "Barrero · Sanlúcar de Barrameda · Palomino Fino", glass: 5 },
      { id: "tio-diego", name: "Amontillado Tío Diego", desc: "Valdespino · Jerez · Palomino Fino", glass: 6 },
      { id: "villapanes", name: "Oloroso Villapanés", desc: "Hidalgo · Jerez · Palomino Fino", glass: 9 },
      { id: "px-old-harvest", name: "Pedro Ximénez Old Harvest", desc: "Ximénez-Spínola · Jerez · Pedro Ximénez", glass: 8.5 },
      { id: "fondillon", name: "Fondillón Solera 1948", desc: "Primitivo Quiles · Alicante · Monastrell", glass: 10 },
      {
        id: "poley",
        name: "Poley Palo Cortado en Rama Solera 25 Años",
        desc: "Toro Albalá · Montilla-Moriles · Pedro Ximénez",
        glass: 9.5,
      },
      {
        id: "niepoort",
        name: "Niepoort 10 Years Old Tawny",
        desc: "Niepoort · Porto · Sousão, Tinta Amarela, Tinta Roriz, Touriga Nacional, Touriga Franca",
        glass: 8,
      },
      {
        id: "tokaji",
        name: "Tokaji Aszú 5 Puttonyos",
        desc: "Château Dereszla · Tokaj · Furmint, Hárslevelű, Zéta",
        vintage: 2019,
        glass: 10,
        bottles: [{ size: "0,5 L", price: 52 }],
      },
      {
        id: "laribotte",
        name: "Château Laribotte",
        desc: "Jean-Pierre Lahiteau · Sauternes · Sémillon, Sauvignon Blanc, Muscadelle",
        vintage: 2023,
        glass: 8.5,
        bottles: [
          { size: "0,35 L", price: 28 },
          { size: "0,75 L", price: 54 },
        ],
      },
    ],
  },
];

/* ─────────────────────────────── Бар ─────────────────────────────── */

export const bar: DrinkGroup[] = [
  {
    id: "cervezas",
    title: { es: "Cervezas y sidra", en: "Beer & cider" },
    sections: [
      {
        title: { es: "Cervezas", en: "Beer" },
        items: [
          { id: "heineken", name: { es: "Heineken", en: "Heineken (bottle)" }, unit: "33 cl · 5 %", price: 3.5 },
          { id: "cana-heineken", name: { es: "Caña Heineken", en: "Heineken, small draught" }, unit: "200 ml · 5 %", price: 3 },
          { id: "doble-heineken", name: { es: "Doble Heineken", en: "Heineken, large draught" }, unit: "400 ml · 5 %", price: 4 },
          { id: "pinta-heineken", name: { es: "Pinta Heineken", en: "Heineken, pint" }, unit: "5 %", price: 5 },
          { id: "cana-radler", name: { es: "Caña Radler", en: "Radler, small draught" }, unit: "200 ml · 2,2 %", price: 3 },
          { id: "doble-radler", name: { es: "Doble Radler", en: "Radler, large draught" }, unit: "400 ml · 2,2 %", price: 4 },
          { id: "pinta-radler", name: { es: "Pinta Radler", en: "Radler, pint" }, unit: "500 ml · 2,2 %", price: 5 },
          { id: "amstel-oro", name: { es: "Amstel Oro (tostada)", en: "Amstel Oro (amber)" }, unit: "33 cl · 6,2 %", price: 4 },
          { id: "amstel-oro-00", name: { es: "Amstel Oro 0,0 (sin alcohol)", en: "Amstel Oro 0.0 (alcohol-free)" }, unit: "33 cl · 0 %", price: 3.8 },
          { id: "estrella-galicia", name: same("Estrella Galicia"), unit: "33 cl · 5,5 %", price: 4 },
          { id: "cruzcampo-sg", name: { es: "Cruzcampo (sin gluten)", en: "Cruzcampo (gluten-free)" }, unit: "33 cl · 5,6 %", price: 3.5 },
          { id: "aguila-sin-filtrar", name: { es: "Águila sin filtrar", en: "Águila unfiltered" }, unit: "33 cl · 5,5 %", price: 4 },
        ],
      },
      {
        title: { es: "Sidra", en: "Cider" },
        items: [{ id: "exner", name: { es: "Sidra Exner", en: "Exner cider" }, unit: "33 cl · 5,5 %", price: 5.5 }],
      },
    ],
  },
  {
    id: "cocteles",
    title: { es: "Cócteles y vermut", en: "Cocktails & vermouth" },
    note: {
      es: "Los cócteles necesitan un mínimo de 10 minutos de preparación; las comandas se hacen por orden de llegada.",
      en: "Cocktails take at least 10 minutes to prepare; orders are made in order of arrival.",
    },
    sections: [
      {
        title: { es: "Cócteles clásicos", en: "Classic cocktails" },
        items: [
          {
            id: "tinto-verano",
            name: { es: "Tinto de verano", en: "Tinto de verano" },
            desc: { es: "Refresco de limón, vino tinto y un toque extra de alcohol", en: "Lemon soda, red wine and an extra dash of spirit" },
            price: 10,
          },
          {
            id: "sangria-tinto",
            name: { es: "Sangría (tinto)", en: "Sangria (red)" },
            desc: {
              es: "Ginebra, vodka, zumo de piña, melocotón y naranja, con un toque de limón",
              en: "Gin, vodka, pineapple, peach and orange juice, with a touch of lemon",
            },
            price: 10,
          },
          {
            id: "sangria-blanco",
            name: { es: "Sangría (blanco o cava)", en: "Sangria (white wine or cava)" },
            desc: { es: "Ginebra, vodka, zumo de piña y naranja, con un toque de limón", en: "Gin, vodka, pineapple and orange juice, with a touch of lemon" },
            price: 10,
          },
          {
            id: "bonavida-spritz",
            name: same("Bonavida Spritz"),
            desc: {
              es: "Bonavida (licor de cítricos con pomelo y albahaca) con espumoso",
              en: "Bonavida (citrus liqueur with grapefruit and basil) with sparkling wine",
            },
            price: 10,
          },
          {
            id: "aperol-spritz",
            name: same("Aperol Spritz"),
            desc: { es: "El clásico: Aperol, cava y un toque de agua con gas", en: "The classic: Aperol, cava and a splash of soda" },
            price: 10,
          },
          {
            id: "agua-valencia",
            name: { es: "Agua de Valencia", en: "Agua de Valencia" },
            desc: { es: "Ginebra, vodka, zumo de naranja y cava", en: "Gin, vodka, orange juice and cava" },
            price: 10,
          },
        ],
      },
      {
        title: { es: "Clásicos sin alcohol", en: "Alcohol-free classics" },
        items: [
          {
            id: "san-francisco",
            name: same("San Francisco"),
            desc: { es: "Zumos de naranja, melocotón y piña con un toque de granadina", en: "Orange, peach and pineapple juice with a dash of grenadine" },
            price: 7,
          },
          {
            id: "shirley-temple",
            name: same("Shirley Temple"),
            desc: { es: "Granadina, refresco de lima y de limón", en: "Grenadine, lime soda and lemon soda" },
            price: 8.5,
          },
        ],
      },
      {
        title: { es: "Aperitivos", en: "Aperitifs" },
        items: [
          { id: "ataman", name: { es: "Vermut Atamán", en: "Atamán vermouth" }, price: 5 },
          { id: "templat", name: { es: "Templat (blanco)", en: "Templat (white)" }, price: 6 },
          { id: "yzaguirre-rojo", name: { es: "Yzaguirre (rojo)", en: "Yzaguirre (red)" }, price: 6 },
          { id: "yzaguirre-blanco", name: { es: "Yzaguirre (blanco)", en: "Yzaguirre (white)" }, price: 5 },
          { id: "dulce-canalla-rojo", name: { es: "Dulce Canalla (rojo)", en: "Dulce Canalla (red)" }, price: 5 },
          { id: "dulce-canalla-blanco", name: { es: "Dulce Canalla (blanco)", en: "Dulce Canalla (white)" }, price: 5 },
          { id: "martini-blanco", name: { es: "Martini (blanco)", en: "Martini (white)" }, price: 5 },
          { id: "martini-rojo", name: { es: "Martini (rojo)", en: "Martini (red)" }, price: 5 },
          { id: "campari-spritz", name: same("Campari Spritz"), price: 10 },
          { id: "olivas", name: { es: "Servicio de olivas", en: "Olives" }, price: 2.5 },
          { id: "patatas-chips", name: { es: "Bolsa de patatas chips", en: "Bag of crisps" }, unit: "40 g", price: 2.5 },
          { id: "cacaos", name: { es: "Servicio de cacaos", en: "Peanuts" }, price: 1.8 },
        ],
      },
    ],
  },
  {
    id: "refrescos",
    title: { es: "Refrescos y cafés", en: "Soft drinks & coffee" },
    sections: [
      {
        title: { es: "Aguas y refrescos", en: "Water & soft drinks" },
        items: [
          { id: "agua-medio", name: { es: "Agua mineral", en: "Mineral water" }, unit: "½ l", price: 3 },
          { id: "agua-litro", name: { es: "Agua mineral", en: "Mineral water" }, unit: "1 l", price: 4 },
          { id: "perrier", name: { es: "Agua con gas Perrier", en: "Perrier sparkling water" }, unit: "330 ml", price: 3 },
          { id: "coca-cola", name: same("Coca-Cola"), unit: "237 ml", price: 3 },
          { id: "coca-cola-zero", name: same("Coca-Cola Zero"), unit: "237 ml", price: 3 },
          { id: "sprite", name: same("Sprite"), unit: "237 ml", price: 3 },
          { id: "fanta-limon", name: { es: "Fanta limón", en: "Fanta lemon" }, unit: "237 ml", price: 3 },
          { id: "fanta-naranja", name: { es: "Fanta naranja", en: "Fanta orange" }, unit: "237 ml", price: 3 },
          { id: "nestea", name: same("Nestea"), unit: "300 ml", price: 3 },
          { id: "aquarius-limon", name: { es: "Aquarius limón", en: "Aquarius lemon" }, unit: "300 ml", price: 3 },
          { id: "aquarius-naranja", name: { es: "Aquarius naranja", en: "Aquarius orange" }, unit: "300 ml", price: 3 },
          { id: "tonica", name: { es: "Tónica Schweppes", en: "Schweppes tonic" }, unit: "200 ml", price: 3 },
          { id: "tonica-limon", name: { es: "Tónica Schweppes limón", en: "Schweppes lemon tonic" }, unit: "200 ml", price: 3.5 },
          { id: "bitter-kas", name: same("Bitter Kas"), unit: "200 ml", price: 3 },
          { id: "la-casera", name: { es: "Gaseosa La Casera", en: "La Casera lemonade" }, unit: "500 ml", price: 3 },
          { id: "ginger-beer", name: same("Ginger beer"), price: 4 },
          { id: "red-bull", name: same("Red Bull"), price: 3 },
        ],
      },
      {
        title: { es: "Zumos", en: "Juices" },
        note: { es: "Los zumos no son naturales ni recién exprimidos.", en: "Juices are not fresh or freshly squeezed." },
        items: [
          { id: "zumo-naranja", name: { es: "Zumo de naranja", en: "Orange juice" }, unit: "200 ml", price: 3 },
          { id: "zumo-pina", name: { es: "Zumo de piña", en: "Pineapple juice" }, unit: "200 ml", price: 3 },
          { id: "zumo-melocoton", name: { es: "Zumo de melocotón", en: "Peach juice" }, unit: "200 ml", price: 3 },
        ],
      },
      {
        title: { es: "Cafés", en: "Coffee" },
        note: {
          es: "Infusiones ecológicas Josenea: 14 variedades en carta aparte.",
          en: "Organic Josenea infusions: 14 blends on a separate list.",
        },
        items: [
          { id: "expreso", name: { es: "Expreso", en: "Espresso" }, price: 2 },
          { id: "expreso-doble", name: { es: "Expreso doble", en: "Double espresso" }, price: 4 },
          { id: "cortado", name: same("Cortado"), price: 2.5 },
          { id: "latte", name: same("Latte"), price: 3.5 },
          { id: "cafe-leche", name: { es: "Café con leche", en: "Café con leche" }, price: 3 },
          { id: "bombon", name: { es: "Bombón", en: "Bombón (with condensed milk)" }, price: 3 },
          { id: "americano", name: same("Americano"), price: 3 },
          { id: "cremaet", name: { es: "Cremaet", en: "Cremaet (flambéed rum coffee)" }, price: 4 },
          { id: "capuccino", name: same("Cappuccino"), price: 3 },
          { id: "carajillo", name: same("Carajillo"), price: 3 },
          { id: "colacao", name: same("ColaCao"), price: 3 },
        ],
      },
    ],
  },
  {
    id: "destilados",
    title: { es: "Destilados y licores", en: "Spirits & liqueurs" },
    sections: [
      {
        title: { es: "Ron", en: "Rum" },
        items: [
          {
            id: "ron-valdespino",
            name: { es: "Ron Viejo Valdespino", en: "Valdespino aged rum" },
            desc: { es: "Envejecido en barrica de Jerez", en: "Aged in sherry casks" },
            price: 15,
          },
          { id: "barcelo-imperial", name: same("Barceló Imperial"), price: 15 },
          { id: "cacique", name: same("Cacique"), price: 10 },
          { id: "bacardi", name: { es: "Bacardí (ron blanco)", en: "Bacardí (white rum)" }, price: 10 },
          { id: "brugal-anejo", name: same("Brugal Añejo"), price: 12 },
          { id: "barcelo", name: same("Barceló"), price: 12 },
          { id: "matusalem", name: same("Matusalem"), price: 12 },
          { id: "santa-teresa", name: same("Santa Teresa"), price: 15 },
          { id: "havana-7", name: same("Havana 7"), price: 15 },
          { id: "zacapa", name: same("Zacapa"), price: 15 },
        ],
      },
      {
        title: { es: "Ginebra", en: "Gin" },
        items: [
          {
            id: "gin-valdespino",
            name: same("Valdespino Dry Gin"),
            desc: { es: "Envejecida en barrica de Jerez", en: "Aged in sherry casks" },
            price: 10,
          },
          { id: "malegra", name: same("M’Alegra"), desc: { es: "Valencia", en: "Valencia" }, price: 10 },
          { id: "tanqueray-00", name: { es: "Tanqueray 0.0 (sin alcohol)", en: "Tanqueray 0.0 (alcohol-free)" }, price: 10 },
          { id: "beefeater", name: same("Beefeater"), price: 10 },
          { id: "larios-12", name: same("Larios 12"), price: 10 },
          { id: "tanqueray", name: same("Tanqueray"), price: 12 },
          { id: "puerto-indias", name: { es: "Puerto de Indias (rosa)", en: "Puerto de Indias (pink)" }, price: 12 },
          { id: "astobiza", name: same("Astobiza"), desc: { es: "Okondo, Araba", en: "Okondo, Álava" }, price: 15 },
          { id: "gvine", name: same("G’Vine"), price: 15 },
          { id: "tanqueray-ten", name: same("Tanqueray Ten"), price: 15 },
          { id: "hendricks", name: same("Hendrick’s"), price: 15 },
          { id: "gin-mare", name: same("Gin Mare"), price: 15 },
          { id: "brockmans", name: same("Brockmans"), price: 15 },
          { id: "nordes", name: same("Nordés"), price: 15 },
          { id: "bulldog", name: same("Bulldog"), price: 15 },
          { id: "martin-millers", name: same("Martin Miller’s"), price: 15 },
        ],
      },
      {
        title: { es: "Vodka", en: "Vodka" },
        items: [
          { id: "smirnoff", name: same("Smirnoff"), price: 10 },
          { id: "absolut", name: same("Absolut"), price: 10 },
          { id: "grey-goose", name: same("Grey Goose"), price: 15 },
          { id: "ciroc", name: same("Cîroc"), price: 15 },
        ],
      },
      {
        title: { es: "Coñac y brandy", en: "Cognac & brandy" },
        items: [
          {
            id: "brandy-valdespino",
            name: { es: "Brandy de Jerez Solera Gran Reserva Valdespino", en: "Valdespino Solera Gran Reserva sherry brandy" },
            desc: { es: "Envejecido en barrica de Jerez", en: "Aged in sherry casks" },
            price: 15,
          },
          { id: "carlos-i", name: same("Carlos I"), price: 15 },
          { id: "carlos-iii", name: same("Carlos III"), price: 10 },
          { id: "torres-10", name: same("Torres 10"), price: 10 },
          { id: "magno", name: same("Magno"), price: 7 },
          { id: "terry", name: same("Terry"), price: 5 },
        ],
      },
      {
        title: { es: "Whisky", en: "Whisky" },
        items: [
          {
            id: "whisky-valdespino",
            name: { es: "Whisky de malta Valdespino", en: "Valdespino malt whisky" },
            desc: { es: "Envejecido en barrica de Jerez", en: "Aged in sherry casks" },
            price: 15,
          },
          { id: "dewars", name: same("Dewar’s"), price: 10 },
          { id: "jameson", name: same("Jameson"), price: 10 },
          { id: "jb", name: same("J&B"), price: 10 },
          { id: "jack-daniels", name: same("Jack Daniel’s"), price: 10 },
          { id: "ballantines", name: same("Ballantine’s"), price: 10 },
          { id: "jw-black", name: same("Johnnie Walker Black Label"), price: 15 },
          { id: "jw-red", name: same("Johnnie Walker Red Label"), price: 15 },
          { id: "jim-beam", name: same("Jim Beam"), price: 15 },
          { id: "cardhu", name: { es: "Cardhu 12 años", en: "Cardhu 12 years" }, price: 15 },
          { id: "four-roses", name: same("Four Roses"), price: 15 },
          { id: "nomad", name: same("Nomad"), price: 15 },
          { id: "macallan", name: { es: "Macallan 12 años", en: "Macallan 12 years" }, price: 15 },
        ],
      },
      {
        title: { es: "Licores (copa)", en: "Liqueurs (glass)" },
        note: {
          es: "Algunos licores se sirven en copa pequeña, como digestivo. El combinado se cobra como tal.",
          en: "Some liqueurs are served in a small glass as a digestif. Mixed drinks are charged as such.",
        },
        items: [
          { id: "moscatel-extra", name: { es: "Moscatel Extra Primitivo Quiles (tinto)", en: "Primitivo Quiles Moscatel Extra (red)" }, price: 4 },
          { id: "moscatel", name: { es: "Moscatel Primitivo Quiles (blanco)", en: "Primitivo Quiles Moscatel (white)" }, price: 4 },
          { id: "peche", name: same("Peche"), price: 5 },
          { id: "amaretto", name: same("Amaretto"), price: 5 },
          { id: "limoncello", name: same("Limoncello"), price: 5 },
          { id: "baileys", name: same("Baileys"), price: 5 },
          { id: "licor-cafe", name: { es: "Licor de café", en: "Coffee liqueur" }, price: 5 },
          { id: "licor-arroz", name: { es: "Licor de arroz", en: "Rice liqueur" }, price: 5 },
          { id: "orujo-blanco", name: { es: "Orujo blanco", en: "Orujo (clear)" }, price: 5 },
          { id: "orujo-hierbas", name: { es: "Orujo de hierbas", en: "Herbal orujo" }, price: 5 },
          { id: "crema-orujo", name: { es: "Crema de orujo", en: "Orujo cream" }, price: 5 },
          { id: "frangelico", name: same("Frangelico"), price: 5 },
          { id: "licor-43", name: same("Licor 43"), price: 5 },
          { id: "cointreau", name: same("Cointreau"), price: 5 },
        ],
      },
    ],
  },
];

export const dishCount = kitchen.reduce((n, g) => n + g.items.length, 0);
export const barCount = bar.reduce((n, g) => n + g.sections.reduce((m, s) => m + s.items.length, 0), 0);
