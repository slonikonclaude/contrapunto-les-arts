import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "../globals.css";
import { RootShell } from "@/components/RootShell";
import { buildMetadata } from "@/lib/site";

/** Английская версия: собственный корневой layout ради <html lang="en">. */
export const metadata: Metadata = buildMetadata("en");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2efe9",
};

export default function EnRootLayout({ children }: { children: ReactNode }) {
  return <RootShell locale="en">{children}</RootShell>;
}
