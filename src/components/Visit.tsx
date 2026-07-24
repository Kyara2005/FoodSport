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

          <div className="mt-10">
            <p className="text-xs uppercase tracking-[0.22em] text-gold">Horario</p>
            <dl className="mt-4 max-w-md space-y-2">
              {[
                ["Lun–Mié", "11 a. m. – 9:30 p. m."],
                ["Jueves", "11 a. m. – 10 p. m."],
                ["Vie–Sáb", "11 a. m. – 11:30 p. m."],
                ["Domingo", "12 – 8 p. m."],
              ].map(([day, hours]) => (
                <div key={day} className="flex items-baseline justify-between gap-4 border-b border-white/10 py-2">
                  <dt className="text-foam">{day}</dt>
                  <dd className="text-sm text-smoke">{hours}</dd>
                </div>
              ))}
            </dl>
          </div>

          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-[0.22em] text-gold">Reservas</dt>
              <dd className="mt-2 text-foam">Escríbenos o pregunta en local</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.22em] text-gold">Ambiente</dt>
              <dd className="mt-2 text-foam">Parrilla, fútbol y buena compañía</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs uppercase tracking-[0.22em] text-gold">Nuestro local</dt>
              <dd className="mt-2 text-foam">
                Avenida Cristóbal Vaca de Castro, y Pedro Freile, Quito
              </dd>
              <dd className="mt-3">
                <a
                  href="https://maps.app.goo.gl/F5D7B7uYNxNNqiZn9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-ghost inline-flex rounded-sm px-5 py-2.5 text-xs"
                >
                  Ver en Google Maps
                </a>
              </dd>
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
