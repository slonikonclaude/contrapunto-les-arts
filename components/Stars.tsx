import { IconStarPartial } from "@/components/icons";

/**
 * Звёзды рейтинга. Сами звёзды декоративные (aria-hidden внутри иконок):
 * смысл несёт текст рядом — «3,8 de 5», поэтому информация не передаётся
 * одной картинкой и одним цветом (DESIGN.md §10).
 *
 * Заливка точная, без округления: 3,8 — это три полные звезды и четвёртая
 * на 80 %, а не четыре. `idPrefix` нужен градиентам: у двух рядов звёзд на
 * странице id не должны совпадать.
 */
export function Stars({
  value,
  idPrefix,
  size = 16,
  className,
}: {
  value: number;
  idPrefix: string;
  size?: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-0.5 text-naranja-ink ${className ?? ""}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStarPartial
          key={i}
          width={size}
          height={size}
          gradientId={`${idPrefix}-star-${i}`}
          amount={Math.min(1, Math.max(0, value - i))}
        />
      ))}
    </span>
  );
}
