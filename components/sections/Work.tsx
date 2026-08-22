import home from "@/content/home.json";

export function Work() {
  const { work } = home;

  return (
    <section className="relative isolate overflow-x-clip border-t border-ink/10 bg-paper text-ink">
      <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-10 md:px-6 md:pb-20 md:pt-12">
        <h2 className="sr-only">{work.title}</h2>

        {work.eyebrow ? (
          <p className="mb-6 text-xs uppercase tracking-[0.28em] text-ink-soft">
            {work.eyebrow}
          </p>
        ) : null}

        <div className="relative">
          {/* Yellow geometric accents — bleed past the content column */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <span className="absolute -left-4 top-[4%] h-[28%] w-[38%] bg-tungsten md:-left-6 md:top-[6%] md:h-[32%] md:w-[34%]" />
            <span className="absolute -right-2 top-0 size-12 rounded-full bg-tungsten md:-right-4 md:size-16" />
            <span className="absolute right-[8%] top-[4%] size-5 rounded-full bg-tungsten md:right-[10%] md:top-[3%] md:size-7" />
          </div>

          {/* Four cropped letter columns */}
          <div className="relative grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6 md:gap-y-0">
            {work.letters.map((letter) => {
              const cropRatio = 1 - letter.crop / 100;
              return (
                <div
                  key={letter.char}
                  className="font-didone min-w-0 text-center text-[clamp(5rem,17vw,15rem)] text-ink"
                  style={{
                    paddingTop: `calc(var(--glyph-cap) * ${letter.drop / 100})`,
                  }}
                >
                  <div
                    aria-hidden
                    className="overflow-hidden"
                    style={{
                      height: `calc(var(--glyph-cap) * ${cropRatio})`,
                    }}
                  >
                    <span
                      className="block"
                      style={{
                        lineHeight:
                          "calc(var(--glyph-ascent) + var(--glyph-descent))",
                        marginTop:
                          "calc(var(--glyph-cap) - var(--glyph-ascent))",
                      }}
                    >
                      {letter.char}
                    </span>
                  </div>
                  <p className="-me-[0.2em] mt-3 text-[0.975rem] uppercase tracking-[0.2em] text-ink-soft">
                    {letter.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
