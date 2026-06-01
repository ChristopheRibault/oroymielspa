import Link from "next/link";
import { Logo } from "./Logo";
import type { SiteSettings } from "@/lib/sanity";

type FooterProps = {
  settings: SiteSettings | null;
};

export default function Footer({ settings }: FooterProps) {
  const phone = settings?.phone;
  const phoneHref = phone ? `tel:${phone.replace(/\s+/g, "")}` : undefined;
  const instagramHref = settings?.socialMedia?.instagram?.url;
  const instagramLabel = settings?.socialMedia?.instagram?.label ?? "Instagram";
  const hasContactInfo =
    Boolean(settings?.address) ||
    Boolean(phone) ||
    Boolean(settings?.email) ||
    Boolean(instagramHref) ||
    Boolean(settings?.openingHours);

  return (
    <footer className="mt-16 border-t border-[#dccdbe] bg-[#f4eadf] px-6 py-10 text-[#5f534a] sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div className="space-y-4">
          <Logo
            src={settings?.logo?.asset?.url}
            alt={settings?.logo?.alt ?? settings?.siteTitle ?? "Oro y Miel Spa"}
            size="small"
          />

          {settings?.siteDescription ? (
            <p className="max-w-md text-sm leading-relaxed text-[#6a5c51]">
              {settings.siteDescription}
            </p>
          ) : null}
        </div>

        <nav aria-label="Enlaces del pie de página" className="space-y-3">
          <p className="font-heading text-2xl text-[#6e5b4e]">Explorar</p>
          <div className="flex flex-col items-start gap-2 text-base">
            <Link href="/" className="hover:text-[#6e5b4e]">
              Inicio
            </Link>
            <Link href="/servicios" className="hover:text-[#6e5b4e]">
              Servicios
            </Link>
            <Link href="/contacto" className="hover:text-[#6e5b4e]">
              Contacto
            </Link>
          </div>
        </nav>

        {hasContactInfo ? (
          <div className="space-y-3">
            <p className="font-heading text-2xl text-[#6e5b4e]">Contacto</p>

            {settings?.address ? (
              <p className="whitespace-pre-line text-sm leading-relaxed">
                {settings.address}
              </p>
            ) : null}

            {phone && phoneHref ? (
              <Link
                href={phoneHref}
                className="block text-sm hover:text-[#6e5b4e]"
              >
                {phone}
              </Link>
            ) : null}

            {settings?.email ? (
              <Link
                href={`mailto:${settings.email}`}
                className="block text-sm hover:text-[#6e5b4e]"
              >
                {settings.email}
              </Link>
            ) : null}

            {instagramHref && (
              <Link
                href={instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm hover:text-[#6e5b4e]"
              >
                {instagramLabel}
              </Link>
            )}

            {settings?.openingHours ? (
              <p className="whitespace-pre-line text-sm leading-relaxed">
                {settings.openingHours}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
    </footer>
  );
}
