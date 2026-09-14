/**
 * Сверка цен lib/menu.ts с текстом PDF-карт (DESIGN.md §2): мультимножество
 * цен источника должно совпасть с мультимножеством цен на сайте. Ловит
 * пропущенную позицию, лишнюю позицию и опечатку в цене.
 *
 *   node scripts/check-menu.mjs
 *
 * Node 24 снимает типы с .ts сам, поэтому menu.ts импортируется напрямую.
 */
import { readFileSync } from "node:fs";
import { kitchen, setMenus, winesByGlass, bar } from "../lib/menu.ts";

const read = (f) => readFileSync(`_data/pdf-text/${f}`, "utf8");

/** «16 ,50 €», «6, 20 €», «18,00 €», «1, 50€», «10.00€/Bottle» → числа. */
const pricesIn = (text) =>
  [...text.matchAll(/(\d{1,3})\s*[,.]\s*(\d{2})\s*€/g)].map((m) => Number(`${m[1]}.${m[2]}`));

const bag = (list) => {
  const m = new Map();
  for (const p of list) m.set(p.toFixed(2), (m.get(p.toFixed(2)) ?? 0) + 1);
  return m;
};

function compare(label, source, site) {
  const a = bag(source);
  const b = bag(site);
  const keys = new Set([...a.keys(), ...b.keys()]);
  const diff = [...keys].filter((k) => (a.get(k) ?? 0) !== (b.get(k) ?? 0)).map((k) => `${k}: карта ${a.get(k) ?? 0}, сайт ${b.get(k) ?? 0}`);
  console.log(`${diff.length ? "✗" : "✓"} ${label}: карта ${source.length}, сайт ${site.length}`);
  for (const d of diff) console.log("   ", d);
  return diff.length === 0;
}

let ok = true;

// Кухня: испанская карта — источник истины.
ok &= compare("кухня (carta ES)", pricesIn(read("carta-es.txt")), [
  ...kitchen.flatMap((g) => g.items.map((i) => i.price)),
  setMenus.lunch.price,
  setMenus.kids.price,
  setMenus.bread.price,
]);

// Вина по бокалам: цены бутылок у токая и сотерна идут в той же строке.
ok &= compare("вина по бокалам", pricesIn(read("copas.txt")), [
  ...winesByGlass.flatMap((s) => s.items.flatMap((w) => [w.glass, ...(w.bottles ?? []).map((b) => b.price)])),
]);

// Пиво и остальные напитки. Второй «COLACAO 2,00 €» в PDF — дубль, на сайт не идёт (menu.ts, FIXES).
const drinksSource = [...pricesIn(read("cervezas.txt")), ...pricesIn(read("bebidas.txt"))];
drinksSource.splice(drinksSource.lastIndexOf(2), 1);
ok &= compare("бар (cervezas + otras bebidas)", drinksSource, bar.flatMap((g) => g.sections.flatMap((s) => s.items.map((i) => i.price))));

process.exitCode = ok ? 0 : 1;
