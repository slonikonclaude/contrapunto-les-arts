import type { Metadata } from "next";
import { getDictionary, type Locale } from "@/lib/dictionaries";
import { photos } from "@/lib/photos";
import { restaurant } from "@/lib/restaurant";

/**
 * Абсолютный адрес сайта. В CI его отдаёт `actions/configure-pages`
 * (origin без basePath); локально метаданные остаются относительными.
 */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ?? "";
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const basePath = rawBasePath === "/" ? "" : rawBasePath.replace(/\/+$/, "");

/** Канонический адрес языковой версии: испанский в корне, английский в /en/. */
export const pathFor = (locale: Locale) => (locale === "es" ? "/" : "/en/");

/** То же, но с basePath — для обычных <a>, которым Next префикс не добавляет. */
export const hrefFor = (locale: Locale) => `${basePath}${pathFor(locale)}`;

export function buildMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  const path = pathFor(locale);
  // Горизонтальный профессиональный кадр зала — превью соцсетей горизонтальные.
  const og = photos.salaCalatrava;

  return {
    ...(siteUrl ? { metadataBase: new URL(siteUrl + basePath + "/") } : {}),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: path,
      languages: { es: pathFor("es"), en: pathFor("en"), "x-default": pathFor("es") },
    },
    openGraph: {
      type: "website",
      siteName: restaurant.name,
      locale: locale === "es" ? "es_ES" : "en_GB",
      title: dict.meta.title,
      description: dict.meta.description,
      url: path,
      images: [{ url: `/photos/${og.name}-1600.webp`, width: 1600, height: Math.round((1600 * og.height) / og.width), alt: og.alt[locale] }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
  };
}
