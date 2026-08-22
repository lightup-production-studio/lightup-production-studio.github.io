import { CopyEmailButton } from "@/components/CopyEmailButton";
import site from "@/content/site-settings.json";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-sand">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-start md:justify-between md:px-6">
        <div>
          <p className="font-display text-3xl tracking-[0.08em] text-paper">
            {site.businessName}
          </p>
          <p className="mt-2 max-w-sm text-sm text-mist">{site.tagline}</p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          {site.phone && site.phoneTel ? (
            <a href={`tel:${site.phoneTel}`} className="hover:text-tungsten">
              {site.phone}
            </a>
          ) : null}
          <CopyEmailButton
            email={site.email}
            className="cursor-pointer text-left hover:text-tungsten"
          >
            {site.email}
          </CopyEmailButton>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-mist md:px-6">
        © {new Date().getFullYear()} {site.businessName}. All rights reserved.
      </div>
    </footer>
  );
}
