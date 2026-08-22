import Image from "next/image";
import { VideoEmbed } from "@/components/VideoEmbed";
import home from "@/content/home.json";
import portfolio from "@/content/portfolio.json";

export function Portfolio() {
  const featuredIds = new Set<string>(portfolio.featuredVideoIds);
  const items = [
    ...portfolio.videos.filter((v) => featuredIds.has(v.videoId)),
    ...portfolio.videos.filter((v) => !featuredIds.has(v.videoId)),
  ];

  return (
    <section id="work" className="scroll-mt-20 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <h2 className="font-display text-4xl tracking-[0.06em] md:text-5xl">
          {home.portfolio.title}
        </h2>
        <p className="mt-3 max-w-2xl text-sand">{home.portfolio.subtitle}</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={`${item.provider}-${item.videoId}`} className="space-y-3">
              <VideoEmbed
                provider={item.provider as "youtube" | "vimeo"}
                videoId={item.videoId}
                title={item.title}
                thumbnail={item.thumbnail}
              />
              <div>
                <p className="font-display text-xl tracking-wide text-paper">
                  {item.title}
                </p>
                {item.subtitle ? (
                  <p className="mt-1 text-sm text-mist">{item.subtitle}</p>
                ) : null}
                <p className="mt-1 text-sm text-sand">{item.client}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="mt-20 font-display text-3xl tracking-[0.06em] md:text-4xl">
          Publications and campaigns
        </h3>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.copywriting.map((item) => {
            const body = (
              <>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-film">
                  <Image
                    src={item.thumbnail}
                    alt=""
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-tungsten">
                    {item.kind}
                  </p>
                  <p className="mt-2 font-display text-xl tracking-wide text-paper">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-sand">{item.client}</p>
                </div>
              </>
            );

            if (item.href) {
              return (
                <a
                  key={`${item.client}-${item.title}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group space-y-3"
                >
                  {body}
                </a>
              );
            }

            return (
              <div key={`${item.client}-${item.title}`} className="space-y-3">
                {body}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
