/**
 * Винная карта бутылок → lib/wines.ts (DESIGN.md §7).
 *
 * Источник — PDF «Vinos» с их сайта (06.04.2026), текстовый слой выгружен в
 * _data/pdf-text/vinos-lines.txt: по строке на страницу, поля через « | ».
 * Порядок полей в PDF: название [| «Orange Wine» | «ROSÉ»] [| год] | цена |
 * «производитель. регион. сорта» [| продолжение сортов]. Заголовки — либо
 * категория («Blanco Nacional»), либо регион капсом («COMUNIDAD VALENCIANA»).
 *
 * Название отличается от продолжения описания только тем, что за ним идёт
 * год или цена, поэтому разбор смотрит на один-два токена вперёд.
 *
 * Запуск: `node scripts/build-wines.mjs`. Результат лежит в репозитории.
 */
import { readFileSync, writeFileSync } from "node:fs";

const CATEGORIES = {
  "Blanco Nacional": { id: "blanco-nacional", es: "Blancos de España", en: "Spanish whites" },
  "Blanco Internacional": { id: "blanco-internacional", es: "Blancos internacionales", en: "International whites" },
  Rosados: { id: "rosados", es: "Rosados", en: "Rosés" },
  Espumosos: { id: "espumosos", es: "Espumosos", en: "Sparkling" },
  "Tinto Nacional": { id: "tinto-nacional", es: "Tintos de España", en: "Spanish reds" },
  "Tinto Internacional": { id: "tinto-internacional", es: "Tintos internacionales", en: "International reds" },
};

/** Регионы-заголовки PDF → подписи на двух языках. */
const REGIONS = {
  "COMUNIDAD VALENCIANA": ["Comunitat Valenciana", "Valencia region"],
  ARAGÓN: ["Aragón", "Aragon"],
  CATALUÑA: ["Cataluña", "Catalonia"],
  "CATALUÑA Y MALLORCA": ["Cataluña y Mallorca", "Catalonia and Majorca"],
  "CASTILLA LA MANCHA": ["Castilla-La Mancha", "Castilla-La Mancha"],
  "CASTILLA LA MANCHA Y MURCIA": ["Castilla-La Mancha y Murcia", "Castilla-La Mancha and Murcia"],
  "CASTILLA Y LEÓN": ["Castilla y León", "Castile and León"],
  "LA RIOJA y PAIS VASCO": ["La Rioja y País Vasco", "La Rioja and the Basque Country"],
  "LA RIOJA": ["La Rioja", "La Rioja"],
  ANDALUCÍA: ["Andalucía", "Andalusia"],
  "ISLAS CANARIAS": ["Islas Canarias", "Canary Islands"],
  "GALICIA, BIERZO Y NAVARRA": ["Galicia, Bierzo y Navarra", "Galicia, Bierzo and Navarre"],
  "RIBERA DEL DUERO": ["Ribera del Duero", "Ribera del Duero"],
  FRANCIA: ["Francia", "France"],
  ALEMANIA: ["Alemania", "Germany"],
  AUSTRIA: ["Austria", "Austria"],
  ITALIA: ["Italia", "Italy"],
  PORTUGAL: ["Portugal", "Portugal"],
  GRECIA: ["Grecia", "Greece"],
  ESPAÑA: ["España", "Spain"],
  "NUEVO MUNDO": ["Nuevo Mundo", "New World"],
};

/** Правки явных опечаток PDF — только регистр и пробелы, смысл не трогаем. */
const FIXES = [
  [/MAcabeo/g, "Macabeo"],
  [/Utiel-Reuqena/g, "Utiel-Requena"],
  [/Veróncia/g, "Verónica"],
  [/Gitton Père& Fils/g, "Gitton Père & Fils"],
  [/Gewuztaminer/g, "Gewürztraminer"],
  [/Saunvignon/g, "Sauvignon"],
  [/Borgougne/g, "Bourgogne"],
  [/Monastrell,Graciano/g, "Monastrell, Graciano"],
];

const raw = readFileSync("_data/pdf-text/vinos-lines.txt", "utf8");
const tokens = raw
  .split("\n")
  .filter((l) => l.startsWith("=== page"))
  .flatMap((l) => l.replace(/^=== page \d+\s*/, "").split(" | "))
  .map((t) => t.replace(/\s+/g, " ").trim())
  .filter(Boolean);

const isYear = (t) => /^(19|20)\d{2}$/.test(t);
const isPrice = (t) => /^\d+\.\d{2}\.?$/.test(t);
const isTag = (t) => t === "Orange Wine" || t === "ROSÉ";

const categories = [];
let category = null;
let region = null;
let wine = null;
let count = 0;

const fix = (s) => FIXES.reduce((acc, [re, to]) => acc.replace(re, to), s);

for (let i = 0; i < tokens.length; i++) {
  const t = tokens[i];

  if (CATEGORIES[t]) {
    category = { ...CATEGORIES[t], regions: [] };
    categories.push(category);
    region = null;
    wine = null;
    continue;
  }
  if (REGIONS[t]) {
    const [es, en] = REGIONS[t];
    region = { title: { es, en }, wines: [] };
    category.regions.push(region);
    wine = null;
    continue;
  }

  // Название вина: дальше (через необязательную метку) год или цена.
  const next = tokens[i + 1];
  const afterTag = isTag(next ?? "") ? tokens[i + 2] : next;
  if (!isYear(t) && !isPrice(t) && !isTag(t) && afterTag && (isYear(afterTag) || isPrice(afterTag))) {
    if (!region) {
      // Раздел без подзаголовка региона (Rosados, часть Espumosos).
      region = { title: null, wines: [] };
      category.regions.push(region);
    }
    wine = { name: fix(t), tag: null, vintage: null, price: null, desc: "" };
    region.wines.push(wine);
    count++;
    continue;
  }

  if (!wine) throw new Error(`Токен вне вина: «${t}» (#${i})`);
  if (isTag(t)) wine.tag = t === "ROSÉ" ? "rose" : "orange";
  else if (isYear(t) && wine.price === null) wine.vintage = Number(t);
  else if (isPrice(t) && wine.price === null) wine.price = Number(t.replace(/\.$/, ""));
  else if (!wine.desc) wine.desc = fix(t);
  // Продолжение после точки или запятой приклеивается пробелом, иначе — через запятую.
  else wine.desc = fix(/[.,]$/.test(wine.desc) ? `${wine.desc} ${t}` : `${wine.desc}, ${t}`);
}

// Продолжение строки сортов в PDF переносится без запятой: «Garnacha, | Arcos» → «Garnacha, Arcos».
for (const c of categories)
  for (const r of c.regions)
    for (const w of r.wines) {
      w.desc = w.desc.replace(/,\s*,/g, ",").replace(/\.\s*$/, "").trim();
      if (w.price === null) throw new Error(`Нет цены: ${w.name}`);
    }

const header = `/**
 * Винная карта бутылок. СГЕНЕРИРОВАНО scripts/build-wines.mjs из
 * _data/pdf-text/vinos-lines.txt (PDF «Vinos», 06.04.2026) — руками не править.
 * Описание («производитель. регион. сорта») оставлено как в карте: это
 * собственные имена, у них нет перевода.
 */

export type Wine = {
  name: string;
  tag: "orange" | "rose" | null;
  vintage: number | null;
  price: number;
  desc: string;
};

export type WineRegion = { title: { es: string; en: string } | null; wines: Wine[] };

export type WineCategory = { id: string; es: string; en: string; regions: WineRegion[] };

export const wineCount = ${count};

export const wines: WineCategory[] = `;

writeFileSync("lib/wines.ts", header + JSON.stringify(categories, null, 2) + ";\n");
console.log(`вин: ${count}`);
for (const c of categories) console.log(c.id, c.regions.reduce((n, r) => n + r.wines.length, 0));
