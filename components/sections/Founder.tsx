import home from "@/content/home.json";

export function Founder() {
  const { founder } = home;
  return (
    <section id="founder" className="scroll-mt-20 bg-sand">
      <div className="mx-auto max-w-3xl px-4 py-20 md:px-6 md:py-28">
        <p className="text-xs uppercase tracking-[0.28em] text-ink-soft">
          {founder.role}
        </p>
        <h2 className="mt-3 font-display text-4xl tracking-[0.06em] text-ink md:text-5xl">
          {founder.title}
        </h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
          {founder.body.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
