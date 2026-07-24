import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import logoFoodSport from "../../../public/images/logo-food-sport.png";
import { getActiveSocialLinks } from "@/data/social-links";

export const metadata: Metadata = {
  title: "Links | Food Sport Restaurante",
  description:
    "Todas las redes y canales de Food Sport Restaurante: Instagram, Maps y más.",
};

const icons: Record<string, ReactNode> = {
  instagram: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5H16.8V4.1C16.4 4 15.3 4 14 4c-2.6 0-4.4 1.6-4.4 4.5V11H7v3h2.6v8h3.9z" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d="M19.6 8.2a6.6 6.6 0 0 1-3.8-1.2v7.1a5.7 5.7 0 1 1-4.9-5.6v2.9a2.8 2.8 0 1 0 2 2.7V2.5h2.8a6.6 6.6 0 0 0 3.9 3.7v2z" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3.2 21l4.7-1.2A9 9 0 1 0 12 3zm5.1 12.8c-.2.6-1.2 1.1-2 1.2-.5.1-1.2.2-3.5-.7-2.9-1.2-4.8-4.1-4.9-4.3-.2-.2-1.3-1.7-1.3-3.3 0-1.5.8-2.3 1.1-2.6.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.7c-.1.2-.3.4-.1.7.2.3.7 1.2 1.6 1.9 1.1.9 2 1.2 2.3 1.3.3.1.5.1.7-.1l.9-1.2c.2-.2.4-.2.6-.1l2.1.9c.2.1.4.2.5.3 0 .2 0 .9-.3 1.5z" />
    </svg>
  ),
  maps: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
    </svg>
  ),
  website: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm7.9 9h-3.2a15.4 15.4 0 0 0-1.3-5 8 8 0 0 1 4.5 5zM12 4c.9 0 2.3 1.8 3.1 5H8.9C9.7 5.8 11.1 4 12 4zM4.1 11h3.2a15.4 15.4 0 0 0 1.3 5 8 8 0 0 1-4.5-5zm3.2 2H8.9c.8 3.2 2.2 5 3.1 5s2.3-1.8 3.1-5h1.6c-.8 3.2-2.2 5-3.1 5-.9 0-2.3-1.8-3.1-5zm8.4-2h3.2a8 8 0 0 0-4.5-5c.7 1.5 1.2 3.2 1.3 5zM8.6 6A15.4 15.4 0 0 0 7.3 11H4.1a8 8 0 0 1 4.5-5z" />
    </svg>
  ),
};

export default function TryPage() {
  const links = getActiveSocialLinks();

  return (
    <main className="relative flex min-h-svh flex-col items-center overflow-hidden px-5 py-12 stadium-wash pitch-lines">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl animate-glow" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-ember/15 blur-3xl" />
      </div>

      <div className="relative z-10 flex w-full max-w-md flex-col items-center">
        <Image
          src={logoFoodSport}
          alt="Food Sport Bar Restaurante"
          width={160}
          height={160}
          quality={100}
          priority
          className="h-28 w-28 object-contain drop-shadow-[0_16px_40px_rgba(0,0,0,0.45)] md:h-32 md:w-32"
        />

        <h1 className="mt-5 font-display text-4xl tracking-[0.08em] text-gold-bright">
          FOOD SPORT
        </h1>
        <p className="mt-2 text-center text-xs uppercase tracking-[0.28em] text-smoke">
          Restaurante & Bar · Quito
        </p>
        <p className="mt-4 max-w-sm text-center text-sm leading-relaxed text-smoke">
          Parrilla, fútbol y buena mesa. Elige a dónde quieres ir.
        </p>

        <ul className="mt-10 flex w-full flex-col gap-3">
          {links.map((link) => {
            const content = (
              <>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-bright">
                  {icons[link.id] ?? icons.website}
                </span>
                <span className="min-w-0 flex-1 text-left">
                  <span className="block font-display text-lg tracking-[0.06em] text-foam">
                    {link.label}
                  </span>
                  {link.description ? (
                    <span className="mt-0.5 block truncate text-xs text-smoke">
                      {link.description}
                    </span>
                  ) : null}
                </span>
              </>
            );

            const className =
              "group flex w-full items-center gap-4 rounded-xl border border-gold/30 bg-pitch/70 px-4 py-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm transition duration-250 hover:-translate-y-0.5 hover:border-gold-bright/70 hover:bg-pitch/90";

            const isExternal = link.href.startsWith("http");

            return (
              <li key={link.id}>
                {isExternal ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {content}
                  </a>
                ) : (
                  <Link href={link.href} className={className}>
                    {content}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <Link
          href="/"
          className="mt-10 text-xs uppercase tracking-[0.22em] text-smoke transition-colors hover:text-gold-bright"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
