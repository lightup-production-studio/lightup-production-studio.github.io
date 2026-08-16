import home from "@/content/home.json";

export function ServicesPreview() {
  const { services } = home;
  return (
    <section id="services" className="scroll-mt-20 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <h2 className="font-display text-4xl tracking-[0.06em] md:text-5xl">
          {services.title}
        </h2>
        <p className="mt-3 max-w-2xl text-sand">{services.subtitle}</p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {services.items.map((item, index) => (
            <div key={item.title} className="border-t border-tungsten/60 pt-6">
              <p className="text-xs uppercase tracking-[0.28em] text-tungsten">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-2xl tracking-[0.05em]">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-sand">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
