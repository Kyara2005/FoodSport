export function Experience() {
  return (
    <section id="experiencia" className="relative overflow-hidden bg-pitch py-20 md:py-28">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_80%_40%,rgba(232,185,35,0.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">La experiencia</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl tracking-[0.04em] text-foam md:text-5xl">
          Sabor a parrilla. Ritmo de estadio.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-smoke md:text-lg">
          Food Sport mezcla carnes a la brasa, canastas generosas y el ambiente
          de un bar deportivo. Ideal para reunirte con amigos, celebrar un
          gol… o simplemente comer bien.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Parrilla de casa",
              text: "Carnes sazonadas con especias propias, servidas en canastas para compartir.",
            },
            {
              title: "Clima deportivo",
              text: "Pantallas, energía de estadio y un menú pensado para partidos y reuniones.",
            },
            {
              title: "Porciones generosas",
              text: "Desde hamburguesas al ataque hasta la Super Parrillera para el equipo completo.",
            },
          ].map((item) => (
            <article key={item.title} className="border-t border-gold/25 pt-5">
              <h3 className="font-display text-2xl tracking-[0.06em] text-gold-bright">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-smoke md:text-base">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
