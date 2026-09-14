/**
 * Готовит снимки для статического экспорта (DESIGN.md §8): оптимизатора
 * next/image при `output: "export"` нет, поэтому всё пережимается заранее.
 *
 *   _photos/*.jpg → public/photos/<name>-800.webp и -1600.webp
 *   _photos/*.png → public/photos/<name>-640.webp и -1280.webp (с альфой:
 *                   логотипы и линейный рисунок Palau, чёрные на прозрачном)
 *
 * Запускается руками (`npm run photos`), результат лежит в репозитории.
 * Побочный результат — _photos/photo-manifest.json с размерами оригиналов:
 * из него берутся width/height в lib/photos.ts против сдвига вёрстки.
 */
import { readdir, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const OUT = path.join("public", "photos");
await mkdir(OUT, { recursive: true });

const manifest = {};
const files = (await readdir("_photos")).sort();

for (const file of files.filter((f) => /\.jpe?g$/i.test(f))) {
  const name = file.replace(/\.jpe?g$/i, "");
  const input = sharp(path.join("_photos", file)).rotate();
  const meta = await input.metadata();
  manifest[name] = { width: meta.width, height: meta.height };
  for (const w of [800, 1600]) {
    await input
      .clone()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(path.join(OUT, `${name}-${w}.webp`));
  }
  console.log(`${name}  ${meta.width}x${meta.height}`);
}

for (const file of files.filter((f) => /\.png$/i.test(f))) {
  const name = file.replace(/\.png$/i, "");
  const input = sharp(path.join("_photos", file));
  const meta = await input.metadata();
  manifest[name] = { width: meta.width, height: meta.height };
  for (const w of [640, 1280]) {
    await input
      .clone()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 90, alphaQuality: 100 })
      .toFile(path.join(OUT, `${name}-${w}.webp`));
  }
  console.log(`${name}  ${meta.width}x${meta.height} (png)`);
}

await writeFile(path.join("_photos", "photo-manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
