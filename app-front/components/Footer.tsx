import Link from "next/link";
import { Logo } from "./Logo";
import type { ContactPageData, SiteSettings } from "@/lib/sanity";

type FooterProps = {
  settings: SiteSettings | null;
  contactPage: ContactPageData | null;
};

export default function Footer({ settings, contactPage }: FooterProps) {
  const bookingHref = contactPage?.bookingUrl ?? settings?.bookingUrl;
  const phone = contactPage?.phone ?? settings?.phone;
  const phoneHref = phone ? `tel:${phone.replace(/\s+/g, "")}` : undefined;
  const instagramHref = contactPage?.instagram ?? settings?.instagram;
  const hasContactInfo =
    Boolean(contactPage?.address) ||
    Boolean(phone) ||
    Boolean(contactPage?.email) ||
    Boolean(instagramHref) ||
    Boolean(contactPage?.openingHours);

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

          {bookingHref ? (
            <Link
              href={bookingHref}
              className="inline-flex rounded-lg border border-[#6e5b4e]/70 px-4 py-2 font-heading text-[1.1rem] leading-none text-[#6e5b4e] transition-colors hover:bg-[#e8ded2]"
            >
              Reservar
            </Link>
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

            {contactPage?.address ? (
              <p className="whitespace-pre-line text-sm leading-relaxed">
                {contactPage.address}
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

            {contactPage?.email ? (
              <Link
                href={`mailto:${contactPage.email}`}
                className="block text-sm hover:text-[#6e5b4e]"
              >
                {contactPage.email}
              </Link>
            ) : null}

            {instagramHref ? (
              <Link
                href={instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm hover:text-[#6e5b4e]"
              >
                Instagram
              </Link>
            ) : null}

            {contactPage?.openingHours ? (
              <p className="whitespace-pre-line text-sm leading-relaxed">
                {contactPage.openingHours}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
    </footer>
  );
}
