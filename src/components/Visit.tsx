import Image from "next/image";

export function Visit() {
  return (
    <section id="visita" className="relative overflow-hidden bg-night py-20 md:py-28">
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div className="mx-auto w-full max-w-xs">
          <Image
            src="/images/logo-food-sport.png"
            alt="Food Sport Restaurante"
            width={720}
            height={720}
            quality={100}
            className="h-auto w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            sizes="(max-width: 768px) 70vw, 320px"
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Visítanos</p>
          <h2 className="mt-4 font-display text-4xl tracking-[0.04em] text-foam md:text-5xl">
            La mesa está lista. El partido también.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-smoke md:text-lg">
            Pasa por Food Sport Restaurante para compartir canastas, pedir tu
            hamburguesa favorita y vivir el ambiente de un verdadero bar
            deportivo.
          </p>

          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-[0.22em] text-gold">Horario</dt>
              <dd className="mt-2 text-foam">Lunes a domingo · 12:00 – 23:00</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.22em] text-gold">Reservas</dt>
              <dd className="mt-2 text-foam">Escríbenos o pregunta en local</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.22em] text-gold">Ambiente</dt>
              <dd className="mt-2 text-foam">Parrilla, fútbol y buena compañía</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.22em] text-gold">Especialidad</dt>
              <dd className="mt-2 text-foam">Canastas parrilleras</dd>
            </div>
          </dl>

          <a href="#menu" className="cta-primary mt-10 inline-flex rounded-sm px-7 py-3.5 text-sm">
            Volver al menú
          </a>
        </div>
      </div>
    </section>
  );
}
