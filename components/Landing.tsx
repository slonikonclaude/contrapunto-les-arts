import { About } from "@/components/About";
import { CtaBand } from "@/components/CtaBand";
import { Dishes } from "@/components/Dishes";
import { Facts } from "@/components/Facts";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Menu } from "@/components/Menu";
import { Reviews } from "@/components/Reviews";
import { SetMenus } from "@/components/SetMenus";
import { Visit } from "@/components/Visit";
import { Wine } from "@/components/Wine";
import type { Locale } from "@/lib/dictionaries";

/**
 * Порядок секций — DESIGN.md §4. Обе языковые страницы собираются из одного
 * компонента: расходиться они могут только текстами словаря, но не структурой.
 */
export function Landing({ locale }: { locale: Locale }) {
  return (
    <>
      <JsonLd locale={locale} />
      <Header locale={locale} />
      <main id="contenido" className="flex-1">
        <Hero locale={locale} />
        <Facts locale={locale} />
        <About locale={locale} />
        <Dishes locale={locale} />
        <Menu locale={locale} />
        <SetMenus locale={locale} />
        <Wine locale={locale} />
        <Gallery locale={locale} />
        <Reviews locale={locale} />
        <Visit locale={locale} />
        <CtaBand locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
