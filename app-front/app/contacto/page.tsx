import { Title } from "@/components/ui/title";
import Image from "next/image";
import { FaHouse, FaInstagram, FaPhone } from "react-icons/fa6";
import { getContactPage } from "@/lib/sanity";

export default async function Contacto() {
  const contactPage = await getContactPage();

  const phone = contactPage?.phone ?? "3331795995";
  const phoneHref = `tel:${phone.replace(/\s+/g, "")}`;
  const instagram =
    contactPage?.instagram ?? "https://www.instagram.com/oromielspa/";

  return (
    <main className="min-h-screen px-6 py-10 sm:px-10">
      <Title as="h1" className="mb-8">
        {contactPage?.title ?? "Para contactarme"}
      </Title>

      <section className="flex flex-col sm:flex-row gap-2 ">
        <dl className="space-y-6 text-[#5f534a] w-full sm:w-1/2 rounded-lg bg-[#f8f2eb]/70 p-5 sm:p-6">
          <Title as="h2" className="mt-1 text-base sm:text-lg">
            {contactPage?.intro ? (
              <span className="whitespace-pre-line">{contactPage.intro}</span>
            ) : (
              <>
                <span className="font-bold text-xl">Oro y Miel Spa</span>{" "}
                <span className="italic">by Lismar Nava</span>
              </>
            )}
          </Title>

          <div className="flex flex-row flex-nowrap items-start gap-4">
            <dt className="font-heading flex items-center gap-2 text-2xl text-[#6e5b4e]">
              <FaHouse className="size-5" aria-description="" />
            </dt>
            <dd className="text-base sm:text-lg whitespace-pre-line">
              {contactPage?.address ??
                "Colonia Arboledas,\nGuadalajara,\nJalisco"}
            </dd>
          </div>

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
                {contactPage?.instagram ? "Instagram" : "@oromielspa"}
              </a>
            </dd>
          </div>

          {contactPage?.email ? (
            <div className="text-base sm:text-lg">
              <a
                href={`mailto:${contactPage.email}`}
                className="underline decoration-[#d5b8a6] underline-offset-4 hover:text-[#6e5b4e]"
              >
                {contactPage.email}
              </a>
            </div>
          ) : null}

          {contactPage?.openingHours ? (
            <div className="text-base sm:text-lg whitespace-pre-line">
              {contactPage.openingHours}
            </div>
          ) : null}

          {contactPage?.mapUrl ? (
            <div className="text-base sm:text-lg">
              <a
                href={contactPage.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[#d5b8a6] underline-offset-4 hover:text-[#6e5b4e]"
              >
                Ver ubicación
              </a>
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
