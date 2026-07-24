import Image from "next/image";
import logoFoodSport from "../../public/images/logo-food-sport.png";
import { withBasePath } from "@/lib/paths";

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-svh items-center overflow-hidden">
      <Image
        src={withBasePath("/images/hero-local.png")}
        alt=""
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover object-center brightness-[1.12]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-pitch-deep/88 via-pitch-deep/70 to-pitch-deep/40"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-pitch-deep via-transparent to-pitch-deep/40"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pb-20 pt-28 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:px-8 md:pt-32">
        <div>
          <p className="animate-rise text-xs uppercase tracking-[0.35em] text-gold md:text-sm">
            Parrilla · Fútbol · Buena mesa
          </p>
          <h1 className="animate-rise-delay-1 mt-5 font-display text-5xl leading-[0.92] tracking-[0.04em] text-foam sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block text-gold-bright drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)]">
              FOOD SPORT
            </span>
            <span className="mt-2 block text-3xl text-foam/90 sm:text-4xl md:text-5xl">
              RESTAURANTE
            </span>
          </h1>
          <p className="animate-rise-delay-2 mt-6 max-w-xl text-base leading-relaxed text-smoke md:text-lg">
            Canastas parrilleras y hamburguesas al fuego, en un ambiente pensado
            para disfrutar el partido con sabor de estadio.
          </p>
          <div className="animate-rise-delay-3 mt-9 flex flex-wrap gap-4">
            <a href="#menu" className="cta-primary rounded-sm px-7 py-3.5 text-sm">
              Explorar el menú
            </a>
            <a href="#visita" className="cta-ghost rounded-sm px-7 py-3.5 text-sm">
              Cómo llegar
            </a>
          </div>
        </div>

        <div className="animate-rise-delay-2 relative mx-auto w-full max-w-md">
          <div className="absolute inset-8 rounded-full bg-gold/25 blur-3xl animate-glow" />
          <Image
            src={logoFoodSport}
            alt="Escudo Food Sport Bar Restaurante"
            width={840}
            height={840}
            quality={100}
            priority
            className="relative z-10 mx-auto h-auto w-full max-w-[420px] animate-float object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
            sizes="(max-width: 768px) 80vw, 420px"
          />
        </div>
      </div>
    </section>
  );
}
