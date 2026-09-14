import { getDictionary, type Locale } from "@/lib/dictionaries";
import { markSrc, markSrcSet, marks, photos, srcFor, srcSetFor } from "@/lib/photos";
import { Reveal } from "@/components/Reveal";

/**
 * «La casa»: текст заведения с их сайта и два кадра зала, сложенные внахлёст.
 * На широком экране слева — вертикальные буквы C-O-N-T-R-A / P-U-N-T-O, как
 * на обороте их печатной карты: чистый декор, скринридер его не читает.
 */
const WORD = [
  ["C", "O", "N", "T", "R", "A"],
  ["P", "U", "N", "T", "O"],
];

export function About({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const wide = photos.letrasTerraza;
  const tall = photos.salaVertical;
  const table = photos.mesaFlores;
  const mark = marks.logoPalau;

  return (
    <section id="la-casa" className="scroll-mt-20 bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="relative lg:col-span-6">
          <div aria-hidden="true" className="absolute -left-2 top-0 hidden gap-1 font-display text-[3.4rem] leading-[0.86] text-ink xl:-left-20 xl:flex">
            {WORD.map((col, c) => (
              <span key={c} className={`flex flex-col ${c === 1 ? "pt-[0.43em]" : ""}`}>
                {col.map((ch, k) => (
                  <span key={k}>{ch}</span>
                ))}
              </span>
            ))}
          </div>

          <Reveal className="grid grid-cols-12 gap-4 xl:pl-10">
            <img
              src={srcFor(wide, 1600)}
              srcSet={srcSetFor(wide)}
              sizes="(min-width: 1024px) 40vw, 90vw"
              width={wide.width}
              height={wide.height}
              alt={wide.alt[locale]}
              loading="lazy"
              decoding="async"
              className="col-span-12 aspect-[16/10] w-full object-cover sm:col-span-10"
            />
            <img
              src={srcFor(tall)}
              srcSet={srcSetFor(tall)}
              sizes="(min-width: 1024px) 18vw, 45vw"
              width={tall.width}
              height={tall.height}
              alt={tall.alt[locale]}
              loading="lazy"
              decoding="async"
              className="col-span-6 aspect-[3/4] w-full object-cover sm:col-span-5 sm:col-start-2 sm:-mt-24 sm:border-8 sm:border-paper"
            />
            <img
              src={srcFor(table)}
              srcSet={srcSetFor(table)}
              sizes="(min-width: 1024px) 18vw, 45vw"
              width={table.width}
              height={table.height}
              alt={table.alt[locale]}
              loading="lazy"
              decoding="async"
              className="col-span-6 aspect-[3/4] w-full self-start object-cover sm:col-span-5 sm:mt-10 sm:aspect-[4/3]"
            />
          </Reveal>
        </div>

        <Reveal className="lg:col-span-5 lg:col-start-8 lg:self-center" delay={0.06}>
          <p className="ruled ruled-start text-xs font-semibold uppercase tracking-[0.28em] text-graphite">{dict.about.eyebrow}</p>
          <h2
            className="mt-6 font-display text-[2.4rem] leading-[1.04] tracking-[-0.01em] text-ink sm:text-[3.4rem]"
            style={{ textWrap: "balance" }}
          >
            {dict.about.title}
          </h2>
          <div className="mt-8 space-y-5 text-[1.06rem] leading-relaxed text-graphite">
            <p className="font-display text-xl leading-snug text-ink sm:text-[1.4rem]">{dict.about.p1}</p>
            <p>{dict.about.p2}</p>
            <p>{dict.about.p3}</p>
          </div>
          <img
            src={markSrc(mark)}
            srcSet={markSrcSet(mark)}
            sizes="14rem"
            width={mark.width}
            height={mark.height}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="mt-10 w-44 sm:w-52"
          />
        </Reveal>
      </div>
    </section>
  );
}
