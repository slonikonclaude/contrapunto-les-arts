import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "../globals.css";
import { RootShell } from "@/components/RootShell";
import { buildMetadata } from "@/lib/site";

/** Испанская версия владеет корнем сайта — это язык заведения. */
export const metadata: Metadata = buildMetadata("es");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2efe9",
};

export default function EsRootLayout({ children }: { children: ReactNode }) {
  return <RootShell locale="es">{children}</RootShell>;
}
