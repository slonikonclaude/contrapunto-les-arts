import { getDictionary, type Locale } from "@/lib/dictionaries";
import { photos, srcFor, srcSetFor, type PhotoKey } from "@/lib/photos";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { Section } from "@/components/Section";

/**
 * Галерея — ровная сетка 3×3 с кадрами одного формата 4:5, без карусели и
 * лайтбокса: колонная раскладка с кадрами разной высоты давала рваный низ.
 * На телефоне — две колонки, девятый кадр во всю ширину.
 * Порядок чередует зал, террасу и Palau, чтобы соседние кадры не повторяли
 * друг друга; ни один кадр отсюда не встречается в других секциях.
 */
const ORDER: PhotoKey[] = [
  "salaPasillo",
  "tablaQuesos",
  "palauAzul",
  "rinconSofa",
  "gofrePerlas",
  "terrazaCopa",
  "mesaLarga",
  "palauNoche",
  "terrazaBarra",
];

export function Gallery({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section id="galeria" eyebrow={dict.gallery.eyebrow} title={dict.gallery.title} note={dict.gallery.note}>
      <RevealGroup as="ul" className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
        {ORDER.map((key, i) => {
          const p = photos[key];
          const last = i === ORDER.length - 1;
          return (
            <RevealItem as="li" key={key} className={last ? "col-span-2 lg:col-span-1" : ""}>
              <img
                src={srcFor(p)}
                srcSet={srcSetFor(p)}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 50vw"
                width={p.width}
                height={p.height}
                alt={p.alt[locale]}
                loading="lazy"
                decoding="async"
                className={`w-full bg-linen object-cover ${last ? "aspect-[16/10] lg:aspect-[4/5]" : "aspect-[4/5]"}`}
              />
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
