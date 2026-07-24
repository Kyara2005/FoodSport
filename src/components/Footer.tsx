import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/paths";

export function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-pitch-deep py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 md:flex-row md:px-8">
        <div className="flex items-center gap-3">
          <Image
            src={withBasePath("/images/logo-food-sport.png")}
            alt=""
            width={88}
            height={88}
            quality={100}
            className="h-11 w-11 object-contain"
          />
          <div>
            <p className="font-display tracking-[0.08em] text-gold-bright">FOOD SPORT</p>
            <p className="text-xs uppercase tracking-[0.22em] text-smoke">
              Restaurante & Bar
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 md:items-end">
          <Link
            href="/try"
            className="text-sm text-gold-bright transition-colors hover:text-gold"
          >
            Redes y links
          </Link>
          <p className="text-center text-sm text-smoke md:text-right">
            © {new Date().getFullYear()} Food Sport Restaurante. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
