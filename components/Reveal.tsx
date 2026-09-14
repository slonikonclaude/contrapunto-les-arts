"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ElementType, ReactNode } from "react";

/**
 * Единственная скролловая анимация сайта (DESIGN.md §9): 24 px вверх, 0.5 с, ease-out,
 * once, только opacity и transform.
 *
 * Про prefers-reduced-motion здесь два правила, и оба выстраданы.
 *
 * 1. Пропсы motion не снимаются никогда. motion при SSR вписывает `initial`
 *    прямо в серверный HTML (`opacity:0`); если на клиенте отдать «статику» без
 *    пропсов, анимировать станет некому, а инлайновый opacity:0 никто не уберёт —
 *    страница останется пустой ровно у тех, кто попросил меньше движения.
 *
 * 2. Ветвится только `transition`, но не `initial`. useReducedMotion() на сервере
 *    возвращает false, а на клиенте — настоящее значение, так что ветка в
 *    `initial` даёт рассинхрон гидратации: разметка отличается от серверной, и
 *    инлайновый стиль React уже не чинит. Поэтому начальное состояние одно на
 *    оба случая, а «без движения» выражается нулевой длительностью.
 *
 * data-reveal нужен <noscript>-правилу в RootShell: без JS блок виден.
 */

const EASE = [0.16, 1, 0.3, 1] as const;

const HIDDEN = { opacity: 0, y: 24 };
const SHOWN = { opacity: 1, y: 0 };

export function Reveal({
  as = "div",
  children,
  className,
  id,
  delay = 0,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      id={id}
      className={className}
      data-reveal=""
      initial={HIDDEN}
      whileInView={SHOWN}
      viewport={{ once: true, amount: 0.2 }}
      transition={reduced ? { duration: 0 } : { duration: 0.5, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}

/** Контейнер списка: дети въезжают друг за другом, а не все разом. */
export function RevealGroup({
  as = "div",
  children,
  className,
  id,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  const variants: Variants = {
    hidden: {},
    shown: { transition: { staggerChildren: reduced ? 0 : 0.07 } },
  };

  return (
    <MotionTag
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.12 }}
    >
      {children}
    </MotionTag>
  );
}

/** Ребёнок RevealGroup. Вне группы ведёт себя как обычный блок. */
export function RevealItem({
  as = "div",
  children,
  className,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    shown: {
      opacity: 1,
      y: 0,
      transition: reduced ? { duration: 0 } : { duration: 0.45, ease: EASE },
    },
  };

  return (
    <MotionTag className={className} data-reveal="" variants={variants}>
      {children}
    </MotionTag>
  );
}
