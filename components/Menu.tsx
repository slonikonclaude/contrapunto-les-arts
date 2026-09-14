"use client";

import { Fragment, useId, useRef, useState } from "react";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { bar, barCount, dishCount, kitchen, type Allergen, type Dish, type DrinkGroup, type DishGroup } from "@/lib/menu";
import { restaurant } from "@/lib/restaurant";
import { formatPrice } from "@/lib/format";
import { Reveal } from "@/components/Reveal";
import { Section, buttonClass } from "@/components/Section";
import { IconExternal } from "@/components/icons";

type Dict = ReturnType<typeof getDictionary>;

type Panel = { kind: "dishes"; group: DishGroup } | { kind: "drinks"; group: DrinkGroup };

const PANELS: Panel[] = [
  ...kitchen.map((group) => ({ kind: "dishes" as const, group })),
  ...bar.map((group) => ({ kind: "drinks" as const, group })),
];

/**
 * Карта: 6 разделов кухни и 4 раздела бара (DESIGN.md §7). Открыт один раздел —
 * иначе на телефоне это десятки экранов прокрутки.
 *
 * Два ряда вкладок — «Cocina» и «Bar», каждый — свой role="tablist" по образцу
 * W3C tabs: ←/→ перемещают фокус и открывают панель, Home/End — к краям ряда.
 * Выбор общий: активная вкладка одна на оба ряда. В ряду без активной вкладки
 * в табе стоит первая, чтобы до ряда можно было дойти с клавиатуры.
 * Активная отличается заливкой и подчёркиванием, не только цветом.
 *
 * Без JS рельсы скрыты, все панели раскрыты, заголовок каждой виден (RootShell).
 */
export function Menu({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const tabId = (i: number) => `${baseId}-tab-${i}`;
  const panelId = (i: number) => `${baseId}-panel-${i}`;

  const rows = [
    { label: dict.menu.kitchenLabel, from: 0, to: kitchen.length - 1 },
    { label: dict.menu.barLabel, from: kitchen.length, to: PANELS.length - 1 },
  ];

  const select = (i: number) => {
    setActive(i);
    tabsRef.current[i]?.scrollIntoView({ block: "nearest", inline: "nearest" });
  };

  const onKeyDown = (e: React.KeyboardEvent, from: number, to: number) => {
    const current = tabsRef.current.findIndex((el) => el === document.activeElement);
    if (current < from || current > to) return;
    let next: number | null = null;
    if (e.key === "ArrowRight") next = current === to ? from : current + 1;
    else if (e.key === "ArrowLeft") next = current === from ? to : current - 1;
    else if (e.key === "Home") next = from;
    else if (e.key === "End") next = to;
    if (next === null) return;
    e.preventDefault();
    select(next);
    tabsRef.current[next]?.focus();
  };

  return (
    <Section
      id="carta"
      eyebrow={dict.menu.eyebrow}
      title={dict.menu.title}
      note={dict.menu.intro}
      headerRight={<p className="tabular text-sm uppercase tracking-[0.14em] text-graphite">{dict.menu.count(dishCount, barCount)}</p>}
    >
      <Reveal>
        <div data-menu-tabs="" className="space-y-4 border-y border-ink py-5">
          {rows.map((row) => {
            const activeInRow = active >= row.from && active <= row.to;
            return (
              <div key={row.label} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
                <p aria-hidden="true" className="w-16 shrink-0 font-display text-sm italic text-graphite">
                  {row.label}
                </p>
                <div
                  role="tablist"
                  aria-label={`${dict.menu.tabsLabel}: ${row.label}`}
                  onKeyDown={(e) => onKeyDown(e, row.from, row.to)}
                  className="rail -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:px-0 lg:flex-wrap lg:overflow-x-visible"
                >
                  {PANELS.slice(row.from, row.to + 1).map((p, k) => {
                    const i = row.from + k;
                    const selected = i === active;
                    const focusable = selected || (!activeInRow && i === row.from);
                    return (
                      <button
                        key={p.group.id}
                        ref={(el) => {
                          tabsRef.current[i] = el;
                        }}
                        type="button"
                        role="tab"
                        id={tabId(i)}
                        aria-selected={selected}
                        aria-controls={panelId(i)}
                        tabIndex={focusable ? 0 : -1}
                        onClick={() => select(i)}
                        className={`min-h-11 shrink-0 whitespace-nowrap rounded-[2px] border px-4 text-sm font-semibold transition-colors duration-200 ${
                          selected
                            ? "border-ink bg-ink text-paper underline decoration-naranja decoration-2 underline-offset-[6px]"
                            : "border-rule-strong text-ink hover:border-ink"
                        }`}
                      >
                        {p.group.title[locale]}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>

      {PANELS.map((p, i) => (
        <div
          key={p.group.id}
          data-menu-panel=""
          role="tabpanel"
          id={panelId(i)}
          aria-labelledby={tabId(i)}
          hidden={i !== active}
          tabIndex={0}
          className="pt-10 focus-visible:outline-none"
        >
          <h3 data-menu-heading="" className="sr-only font-display text-3xl text-ink">
            {p.group.title[locale]}
          </h3>
          {p.kind === "dishes" ? <DishPanel group={p.group} locale={locale} dict={dict} /> : <DrinkPanel group={p.group} locale={locale} />}
        </div>
      ))}

      <Reveal>
        <div className="mt-14 grid gap-6 border border-rule bg-card p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h3 className="font-display text-2xl text-ink">{dict.menu.allergensTitle}</h3>
            <p className="mt-2 max-w-[72ch] text-sm leading-relaxed text-graphite">{dict.menu.allergensNote}</p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {[
              { href: restaurant.docs.carta[locale], label: dict.menu.pdfCarta },
              { href: restaurant.docs.drinks, label: dict.menu.pdfDrinks },
              { href: restaurant.docs.beers, label: dict.menu.pdfBeers },
              { href: restaurant.docs.infusions, label: dict.menu.pdfInfusions },
            ].map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className={buttonClass.link}>
                  {l.label}
                  <IconExternal width={14} height={14} />
                  <span className="sr-only"> {dict.cta.externalNote}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}

function AllergenTags({ list, dict }: { list: Allergen[]; dict: Dict }) {
  if (!list.length) return null;
  return (
    <p className="mt-2 flex flex-wrap items-center gap-1.5">
      <span className="sr-only">{dict.menu.allergensLabel}: </span>
      {list.map((a, k) => (
        <span key={a} className="rounded-[2px] border border-rule-strong px-1.5 py-px text-[0.72rem] leading-4 text-graphite">
          {dict.menu.allergens[a]}
          {k < list.length - 1 ? <span className="sr-only">, </span> : null}
        </span>
      ))}
    </p>
  );
}

function DishPanel({ group, locale, dict }: { group: DishGroup; locale: Locale; dict: Dict }) {
  const perPerson = group.id === "arroces";
  return (
    <>
      {group.note ? (
        <ul className="mb-8 grid gap-2 border-l-2 border-naranja-ink bg-card px-5 py-4 text-sm text-graphite md:grid-cols-3 md:gap-6">
          {group.note.map((n) => (
            <li key={n.es}>{n[locale]}</li>
          ))}
        </ul>
      ) : null}
      <ul className="grid gap-x-14 md:grid-cols-2">
        {group.items.map((d) => (
          <DishRow key={d.id} dish={d} locale={locale} dict={dict} perPerson={perPerson} />
        ))}
      </ul>
    </>
  );
}

function DishRow({ dish, locale, dict, perPerson }: { dish: Dish; locale: Locale; dict: Dict; perPerson: boolean }) {
  return (
    <li className="border-b border-rule py-5">
      <div className="flex items-baseline gap-3">
        <h4 className="min-w-0 flex-1 text-[1.02rem] leading-snug text-ink sm:flex-initial">
          <span className="font-bold">{dish.lead[locale]}</span>
          {dish.rest ? <> {dish.rest[locale]}</> : null}
        </h4>
        <span className="leader hidden sm:block" aria-hidden="true" />
        <p className="shrink-0 text-right">
          <span className="tabular font-display text-lg text-naranja-ink">{formatPrice(dish.price, locale)}</span>
          {perPerson ? <span className="block text-[0.7rem] uppercase tracking-[0.12em] text-graphite">{dict.menu.perPerson}</span> : null}
        </p>
      </div>
      {dish.unit ? <p className="mt-0.5 text-xs uppercase tracking-[0.12em] text-graphite">{dish.unit[locale]}</p> : null}
      {dish.options ? (
        <ul className="mt-2 space-y-2">
          {dish.options.map((o) => (
            <li key={o.label.es} className="text-sm text-ink">
              — {o.label[locale]}
              <AllergenTags list={o.allergens} dict={dict} />
            </li>
          ))}
        </ul>
      ) : null}
      <AllergenTags list={dish.allergens} dict={dict} />
    </li>
  );
}

function DrinkPanel({ group, locale }: { group: DrinkGroup; locale: Locale }) {
  return (
    <>
      {group.note ? <p className="mb-8 max-w-[72ch] border-l-2 border-naranja-ink bg-card px-5 py-4 text-sm text-graphite">{group.note[locale]}</p> : null}
      <div className="grid gap-x-14 gap-y-12 md:grid-cols-2">
        {group.sections.map((s) => (
          <section key={s.title.es}>
            <h4 className="ruled ruled-start text-xs font-semibold uppercase tracking-[0.24em] text-ink">{s.title[locale]}</h4>
            {s.note ? <p className="mt-3 text-sm text-graphite">{s.note[locale]}</p> : null}
            <ul className="mt-2">
              {s.items.map((d) => (
                <li key={d.id} className="border-b border-rule py-3">
                  <div className="flex items-baseline gap-3">
                    <p className="min-w-0 text-[0.98rem] text-ink">
                      <span className="font-semibold">{d.name[locale]}</span>
                      {d.unit ? (
                        <Fragment>
                          {" "}
                          <span className="tabular whitespace-nowrap text-xs text-graphite">{d.unit}</span>
                        </Fragment>
                      ) : null}
                    </p>
                    <span className="leader" aria-hidden="true" />
                    <p className="tabular shrink-0 font-display text-base text-naranja-ink">{formatPrice(d.price, locale)}</p>
                  </div>
                  {d.desc ? <p className="mt-0.5 text-sm text-graphite">{d.desc[locale]}</p> : null}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
