import home from "@/content/home.json";

export function Intro() {
  const { intro } = home;
  return (
    <section id="about" className="scroll-mt-20 bg-paper">
      <div className="mx-auto max-w-3xl px-4 py-20 md:px-6 md:py-28">
        <h2 className="font-display text-4xl tracking-[0.06em] text-ink md:text-5xl">
          {intro.title}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft md:text-xl">{intro.body}</p>
      </div>
    </section>
  );
}
