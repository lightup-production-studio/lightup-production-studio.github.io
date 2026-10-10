import Image from "next/image";
import Link from "next/link";
import site from "@/content/site-settings.json";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#clients", label: "Clients" },
  { href: "/#work", label: "Work" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-[var(--header-height)] border-b border-ink/10 bg-paper/95 text-ink backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 whitespace-nowrap font-display text-xl tracking-[0.08em] text-ink transition hover:text-tungsten-deep md:text-2xl"
        >
          <span className="inline-flex h-9 w-9 shrink-0 overflow-hidden rounded-full">
            <Image
              src="/images/logo/lightup-logo.jpg"
              alt=""
              width={800}
              height={806}
              className="h-full w-full scale-110 object-cover"
            />
          </span>
          {site.businessName}
        </Link>

        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm tracking-wide text-ink-soft transition hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {site.phone && site.phoneTel ? (
              <a
                href={`tel:${site.phoneTel}`}
                className="hidden text-sm text-ink-soft md:inline hover:text-ink"
              >
                {site.phone}
              </a>
            ) : null}
            <Link
              href="/#contact"
              className="bg-tungsten px-3 py-2 text-sm font-semibold tracking-wide text-ink transition hover:bg-tungsten-deep"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
