import type { Metadata } from "next";
import RichText from "@/components/RichText";
import { Title } from "@/components/ui/title";
import Image from "next/image";
import { FaFacebookF, FaHouse, FaInstagram, FaPhone } from "react-icons/fa6";
import {
  getContactPage,
  getSiteSettings,
  type PortableTextBlock,
} from "@/lib/sanity";

function portableTextToPlainText(blocks?: PortableTextBlock[]): string {
  if (!blocks?.length) {
    return "";
  }

  return blocks
    .filter((block) => block._type === "block")
    .map((block) =>
      (block.children ?? [])
        .filter((child) => child._type === "span")
        .map((child) => child.text ?? "")
        .join(""),
    )
    .join(" ")
    .trim();
}

export async function generateMetadata(): Promise<Metadata> {
  const [contactPage, settings] = await Promise.all([
    getContactPage(),
    getSiteSettings(),
  ]);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://oroymiel.com";
  const pageTitle = contactPage?.title ?? "Contacto";
  const siteTitle = settings?.siteTitle ?? "Oro y Miel Spa";
  const title = `${pageTitle} | ${siteTitle}`;
  const introText = portableTextToPlainText(contactPage?.intro);
  const description = introText || settings?.siteDescription;
  const imageUrl = settings?.logo?.asset?.url;

  return {
    title,
    description: description ?? undefined,
    alternates: {
      canonical: `${siteUrl}/contacto`,
    },
    openGraph: {
      title,
      description: description ?? undefined,
      url: `${siteUrl}/contacto`,
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title,
      description: description ?? undefined,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function Contacto() {
  const [contactPage, settings] = await Promise.all([
    getContactPage(),
    getSiteSettings(),
  ]);

  const phone = settings?.phone;
  const phoneHref = phone ? `tel:${phone.replace(/\s+/g, "")}` : undefined;
  const instagram = settings?.socialMedia?.instagram?.url;
  const instagramLabel = settings?.socialMedia?.instagram?.label ?? "Instagram";
  const facebook = settings?.socialMedia?.facebook?.url;
  const facebookLabel = settings?.socialMedia?.facebook?.label ?? "Facebook";

  return (
    <main className="min-h-screen px-6 py-10 sm:px-10">
      <Title as="h1" className="mb-8">
        {contactPage?.title ?? ""}
      </Title>

      <section className="flex flex-col sm:flex-row gap-2 ">
        <dl className="space-y-6 text-[#5f534a] w-full sm:w-1/2 rounded-lg bg-[#f8f2eb]/70 p-5 sm:p-6">
          <RichText
            value={contactPage?.intro}
            className="text-base sm:text-lg"
          />
          {settings?.address ? (
            <div className="flex flex-row flex-nowrap items-start gap-4">
              <dt className="font-heading flex items-center gap-2 text-2xl text-[#6e5b4e]">
                <FaHouse className="size-5" aria-description="" />
              </dt>
              <dd className="text-base sm:text-lg whitespace-pre-line">
                {settings.address}
              </dd>
            </div>
          ) : null}

          {phone && phoneHref ? (
            <div className="flex flex-row flex-nowrap items-start gap-4">
              <dt className="font-heading text-2xl text-[#6e5b4e]">
                <FaPhone aria-description="Teléfono" />
              </dt>
              <dd className="mt-1 text-base sm:text-lg">
                <a
                  href={phoneHref}
                  className="underline decoration-[#d5b8a6] underline-offset-4 hover:text-[#6e5b4e]"
                >
                  {phone}
                </a>
              </dd>
            </div>
          ) : null}

          {instagram && instagramLabel ? (
            <div className="flex flex-row flex-nowrap items-center gap-4">
              <dt className="font-heading text-2xl text-[#6e5b4e]">
                <FaInstagram aria-description="Instagram" />
              </dt>
              <dd className="mt-1 text-base sm:text-lg">
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#d5b8a6] underline-offset-4 hover:text-[#6e5b4e]"
                >
                  {instagramLabel}
                </a>
              </dd>
            </div>
          ) : null}

          {facebook && facebookLabel ? (
            <div className="flex flex-row flex-nowrap items-center gap-4">
              <dt className="font-heading text-2xl text-[#6e5b4e]">
                <FaFacebookF aria-description="Facebook" />
              </dt>
              <dd className="mt-1 text-base sm:text-lg">
                <a
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#d5b8a6] underline-offset-4 hover:text-[#6e5b4e]"
                >
                  {facebookLabel}
                </a>
              </dd>
            </div>
          ) : null}

          {settings?.email ? (
            <div className="text-base sm:text-lg">
              <a
                href={`mailto:${settings.email}`}
                className="underline decoration-[#d5b8a6] underline-offset-4 hover:text-[#6e5b4e]"
              >
                {settings.email}
              </a>
            </div>
          ) : null}

          {settings?.openingHours ? (
            <div className="text-base sm:text-lg whitespace-pre-line">
              {settings.openingHours}
            </div>
          ) : null}
        </dl>
        <Image
          src="/salon.png"
          alt=""
          width={500}
          height={500}
          className="w-full sm:w-1/2 rounded-lg object-cover object-center"
        />
      </section>
    </main>
  );
}
