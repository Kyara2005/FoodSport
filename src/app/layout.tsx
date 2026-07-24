import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import { withBasePath } from "@/lib/paths";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Food Sport Restaurante | Parrilla y Bar Deportivo",
  description:
    "Canastas parrilleras, hamburguesas a la brasa y ambiente de estadio. Bienvenido a Food Sport Restaurante.",
  icons: {
    icon: withBasePath("/images/logo-food-sport.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
