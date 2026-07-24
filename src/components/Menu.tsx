import Image from "next/image";

const canastas = [
  {
    name: "Canasta Food Parrillera 1",
    description:
      "Deliciosos trozos de carne a la parrilla acompañados de papas fritas, ensalada fresca, maduro y chorizo parrillero. Una combinación perfecta para los amantes del buen sabor.",
    image: "/images/canasta-food-parrillera-1.png",
    imageAlt: "Canasta Food Parrillera 1 con carnes, papas, ensalada y chorizo",
  },
  {
    name: "Canasta Food Parrillera 2",
    description:
      "Jugosos trozos a la parrilla junto a una generosa porción de papas fritas, papas sazonadas, ensalada fresca, maduro y chorizo. Todo lo que necesitas para una comida inolvidable.",
    image: "/images/canasta-food-parrillera-2.png",
    imageAlt: "Canasta Food Parrillera 2 con carnes, papas y pico de gallo",
  },
  {
    name: "Canasta Super Parrillera",
    description:
      "Una explosión de sabor con lo mejor de la parrilla: cerdo, res, pollo, chorizo, acompañados de papas fritas, ensalada fresca, maduro y ensalada de tomate y cebolla. ¡Para los verdaderos fanáticos de la parrilla!",
  },
];

const hamburguesas = [
  {
    name: "Canasta Hamburguesa Simple de Pollo",
    description:
      "200 gr. de pollo a la parrilla sazonado con especias de casa, tomate fresco, lechuga crespa, queso, salsas y papas fritas.",
  },
  {
    name: "Canasta Hamburguesa Simple de Carne",
    description:
      "200 gr. de carne a la parrilla sazonado con especias de casa, tomate fresco, lechuga crespa, queso, salsas y papas fritas.",
  },
  {
    name: "Canasta Hamburguesa Doble",
    description:
      "300 gr. de carne o pollo a la parrilla sazonado con especias de casa, tomate fresco, lechuga crespa, queso cheddar, salsas y papas fritas.",
  },
  {
    name: "Canasta Hamburguesa Explotada",
    description:
      "350 gr. de carne o pollo a la parrilla sazonado con especias de casa, tomate fresco, lechuga crespa, queso cheddar, queso mozzarella, papitas al hilo, tocineta, jamón, huevo frito y papas fritas.",
  },
];

export function Menu() {
  return (
    <section id="menu" className="relative overflow-hidden bg-pitch-deep py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 pitch-lines opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Nuestro menú</p>
          <h2 className="mt-4 font-display text-4xl tracking-[0.04em] text-foam md:text-5xl">
            Canastas y parrilla para ganar el partido
          </h2>
          <p className="mt-5 text-base leading-relaxed text-smoke md:text-lg">
            Explora las especialidades de la casa: canastas parrilleras cargadas
            y hamburguesas a la parrillera con nombres dignos del marcador.
          </p>
        </div>

        <div className="mt-16 space-y-24">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Especialidad</p>
            <h3 className="mt-3 font-display text-3xl tracking-[0.06em] text-gold-bright md:text-4xl">
              Canastas Parrilleras
            </h3>

            <ul className="mt-10 space-y-14">
              {canastas.map((item) => (
                <li
                  key={item.name}
                  className={`grid items-center gap-8 ${
                    item.image ? "md:grid-cols-[minmax(0,280px)_1fr] lg:grid-cols-[minmax(0,340px)_1fr]" : ""
                  }`}
                >
                  {item.image ? (
                    <div className="relative mx-auto w-full max-w-[340px]">
                      <div className="absolute inset-6 rounded-full bg-gold/20 blur-2xl" />
                      <Image
                        src={item.image}
                        alt={item.imageAlt ?? item.name}
                        width={680}
                        height={680}
                        className="relative z-10 h-auto w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]"
                        sizes="(max-width: 768px) 90vw, 340px"
                      />
                    </div>
                  ) : null}

                  <div className={item.image ? "" : "border-t border-gold/25 pt-8"}>
                    <h4 className="font-display text-2xl tracking-[0.04em] text-foam md:text-3xl">
                      {item.name}
                    </h4>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-smoke md:text-base">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-14">
            <div className="relative mx-auto w-full max-w-[420px] lg:mx-0">
              <div className="absolute inset-8 rounded-full bg-ember/25 blur-3xl" />
              <Image
                src="/images/hamburguesa-referencia.png"
                alt="Hamburguesas a la parrillera Food Sport"
                width={840}
                height={840}
                className="relative z-10 h-auto w-full drop-shadow-[0_24px_50px_rgba(0,0,0,0.55)]"
                sizes="(max-width: 1024px) 90vw, 420px"
              />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">A la brasa</p>
              <h3 className="mt-3 font-display text-3xl tracking-[0.06em] text-gold-bright md:text-4xl">
                Hamburguesas a la parrillera
              </h3>
              <ul className="mt-8 space-y-6">
                {hamburguesas.map((item) => (
                  <li key={item.name} className="border-b border-white/10 pb-6 last:border-none">
                    <h4 className="font-display text-xl tracking-[0.04em] text-foam">
                      {item.name}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-smoke md:text-base">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
