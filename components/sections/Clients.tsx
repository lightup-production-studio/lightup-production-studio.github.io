import Image from "next/image";
import home from "@/content/home.json";

export function Clients() {
  const { clients } = home;
  return (
    <section id="clients" className="bg-sand">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <h2 className="font-display text-4xl tracking-[0.06em] text-ink md:text-5xl">
          {clients.title}
        </h2>
        <p className="mt-3 text-ink-soft">{clients.subtitle}</p>
        <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {clients.logos.map((logo) => (
            <li
              key={logo.name}
              className="relative flex aspect-[8/3] items-center justify-center bg-paper/70 px-3"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={160}
                height={60}
                className="h-auto max-h-12 w-full object-contain opacity-80"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
