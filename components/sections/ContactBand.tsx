import site from "@/content/site-settings.json";
import home from "@/content/home.json";

export function ContactBand() {
  const { contactBand } = home;
  return (
    <section id="contact" className="scroll-mt-20 bg-film text-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 py-20 md:flex-row md:items-center md:px-6 md:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl tracking-[0.06em] md:text-5xl">
            {contactBand.title}
          </h2>
          <p className="mt-4 text-sand">{contactBand.body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {site.whatsapp ? (
            <a
              href={`https://wa.me/${site.whatsapp}`}
              className="bg-tungsten px-5 py-3 text-sm font-semibold tracking-wide text-ink transition hover:bg-tungsten-deep"
            >
              WhatsApp
            </a>
          ) : null}
          <a
            href={`mailto:${site.email}`}
            className={
              site.whatsapp
                ? "border border-paper/40 px-5 py-3 text-sm font-semibold tracking-wide transition hover:border-tungsten hover:text-tungsten"
                : "bg-tungsten px-5 py-3 text-sm font-semibold tracking-wide text-ink transition hover:bg-tungsten-deep"
            }
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
