# Contrapunto Les Arts — сайт ресторана

Двуязычный лендинг средиземноморского ресторана Contrapunto Les Arts в Palau
de les Arts Reina Sofía (Валенсия): испанский в корне, английский в `/en/`.
Next.js со статическим экспортом, публикация на GitHub Pages через
`.github/workflows/deploy.yml`.

Адрес: https://slonikonclaude.github.io/contrapunto-les-arts/

## Команды

```
npm run dev      # локально
npm run build    # статический экспорт в out/
npm run photos   # _photos/ → WebP в public/photos/
npm run wines    # _data/pdf-text/vinos-lines.txt → lib/wines.ts
npm run check    # сверка цен lib/menu.ts с текстом PDF-карт
```

## Где что лежит

- `lib/restaurant.ts` — адрес, телефон, почта, часы, рейтинг, ссылки на PDF
- `lib/menu.ts` — кухня, вина по бокалам, бар (правки против карты — в шапке файла)
- `lib/wines.ts` — 166 бутылок (генерируется, руками не править)
- `lib/reviews.ts` — отзывы Google с переводами
- `lib/dictionaries.ts` — все тексты интерфейса на двух языках
- `_data/` — текст PDF-карт и payload карточки Google, из которых собраны данные
- `DESIGN.md` — источники, расхождения и дизайн-решения
