import Image from "next/image";
import site from "@/content/site-settings.json";
import home from "@/content/home.json";

export function Hero() {
  const { hero } = home;

  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-film text-paper">
      <Image
        src={hero.backgroundImage}
        alt=""
        fill
        priority
        className="animate-ken-burns object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-film/88 via-film/55 to-film/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-film via-transparent to-film/30" />
      <div className="absolute inset-0 bg-tungsten/25 mix-blend-multiply" />
      <div className="absolute inset-y-0 left-0 w-1.5 bg-tungsten md:w-2" />

      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-end px-4 pb-16 pt-28 md:px-6 md:pb-24">
        <p className="animate-fade-up text-sm uppercase tracking-[0.28em] text-tungsten">
          {site.businessName}
        </p>
        <h1 className="animate-fade-up delay-1 mt-4 max-w-3xl font-display text-5xl leading-[0.95] tracking-[0.04em] md:text-7xl lg:text-8xl">
          {hero.headline}
        </h1>
        <p className="animate-fade-up delay-2 mt-6 max-w-xl text-base leading-relaxed text-sand md:text-lg">
          {hero.subhead}
        </p>
      </div>
    </section>
  );
}
