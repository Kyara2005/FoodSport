import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/paths";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#menu", label: "Menú" },
  { href: "#visita", label: "Visítanos" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/15 bg-pitch-deep/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href="#inicio" className="group flex items-center gap-3">
          <Image
            src={withBasePath("/images/logo-food-sport.png")}
            alt="Logo Food Sport Restaurante"
            width={112}
            height={112}
            quality={100}
            className="h-12 w-12 object-contain transition duration-300 group-hover:scale-105 md:h-14 md:w-14"
            priority
          />
          <div className="leading-none">
            <p className="font-display text-lg tracking-[0.08em] text-gold-bright md:text-xl">
              FOOD SPORT
            </p>
            <p className="mt-1 text-[0.65rem] uppercase tracking-[0.28em] text-smoke">
              Restaurante & Bar
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.18em] text-smoke transition-colors hover:text-gold-bright"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#menu" className="cta-primary rounded-sm px-4 py-2 text-xs md:px-5 md:text-sm">
          Ver menú
        </a>
      </div>
    </header>
  );
}
