import Image from "next/image";
import Link from "next/link";
import { Title } from "@/components/ui/title";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getHomePage, getSiteSettings } from "@/lib/sanity";

export default async function Home() {
  const [homePage, settings] = await Promise.all([
    getHomePage(),
    getSiteSettings(),
  ]);

  const highlights =
    homePage?.highlights && homePage.highlights.length > 0
      ? homePage.highlights
      : [];

  const featuredServices =
    homePage?.featuredServices && homePage.featuredServices.length > 0
      ? homePage.featuredServices.map((service) => ({
          title: service.title,
          description: service.description,
          price: service.price,
          imageUrl: service.image?.asset?.url ?? "/salon.png",
        }))
      : [];

  const ctas =
    homePage?.ctas
      ?.filter((cta): cta is { label?: string; href: string } =>
        Boolean(cta?.href),
      )
      .slice(0, 2) ?? [];

  return (
    <main className="min-h-screen px-6 py-10 sm:px-10">
      <section className="mx-auto grid max-w-6xl items-start gap-6 md:grid-cols-2">
        <div>
          <Title as="h1" className="mb-4">
            {homePage?.heroTitle ?? "El ritual que tu cuerpo merece"}
          </Title>
          <p className="max-w-xl text-lg leading-relaxed text-[#5f534a]">
            {homePage?.heroText ??
              "En Oro y Miel Spa te ofrecemos tratamientos personalizados para ayudarte a relajarte, recuperar tu bienestar y sentirte mejor cada día."}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {ctas.map((cta, index) => (
              <Link
                key={`${cta.href}-${index}`}
                href={cta.href}
                className={cn(
                  buttonVariants({
                    variant: index === 0 ? "outline" : "ghost",
                  }),
                  index === 0
                    ? "h-auto border-[0.8px] border-[#6e5b4e]/70 bg-transparent px-4 py-2 font-heading text-[1.18rem] leading-none text-[#6e5b4e] hover:bg-[#e8ded2]"
                    : "h-auto px-4 py-2 font-heading text-[1.18rem] leading-none text-[#6e5b4e] hover:bg-[#e8ded2]",
                )}
              >
                {cta.label ?? (index === 0 ? "Reservar cita" : "Ver servicios")}
              </Link>
            ))}
          </div>
        </div>

        <Image
          src={homePage?.heroImage?.asset?.url ?? "/salon.png"}
          alt={homePage?.heroImage?.alt ?? "Interior de Oro y Miel Spa"}
          width={300}
          height={300}
          className="h-auto max-h-75 w-full rounded-xl object-cover"
          priority
        />
      </section>

      <section className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-3">
        {highlights.map((highlight, index) => (
          <div
            key={`${highlight}-${index}`}
            className="rounded-lg bg-[#f8f2eb]/70 px-4 py-3 text-[#5f534a]"
          >
            {highlight}
          </div>
        ))}
      </section>

      <section className="mx-auto mt-14 max-w-6xl">
        <Title as="h2" className="mb-6">
          Servicios destacados
        </Title>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {featuredServices.map((service, index) => (
            <article
              key={`${service.title ?? "service"}-${index}`}
              className="rounded-lg bg-[#f8f2eb]/70 p-4"
            >
              <Image
                src={service.imageUrl}
                alt={service.title ?? "Servicio"}
                width={500}
                height={320}
                className="mb-4 h-44 w-full rounded-lg object-cover"
              />
              <Title as="h3" className="mb-2 text-2xl">
                {service.title ?? "Servicio"}
              </Title>
              <p className="text-[#5f534a]">{service.description ?? ""}</p>
              <p className="mt-2 font-medium text-[#6e5b4e]">
                {service.price ?? ""}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-14 grid max-w-6xl gap-6 rounded-xl bg-[#f8f2eb]/70 p-6 md:grid-cols-2">
        <div>
          <Title as="h2" className="mb-3">
            {homePage?.about?.title ?? "Sobre Oro y Miel Spa"}
          </Title>
          <p className="text-[#5f534a]">
            {homePage?.about?.text ??
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis, arcu et volutpat posuere, purus lacus congue justo, at ultrices sem velit id neque. Curabitur nec sem ac elit varius ultricies."}
          </p>
        </div>
        <Image
          src={homePage?.about?.image?.asset?.url ?? "/banner.png"}
          alt="Detalle spa"
          width={800}
          height={500}
          className="h-64 w-full rounded-lg object-cover"
        />
      </section>

      <section className="mx-auto mt-14 max-w-6xl">
        <Title as="h2" className="mb-6">
          Lo que dicen nuestras clientas
        </Title>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {homePage?.testimonials?.map((testimonial, index) => (
            <blockquote
              key={`testimonial-${testimonial.quote ?? index}`}
              className="rounded-lg bg-[#f8f2eb]/70 p-4 text-[#5f534a]"
            >
              <p>“{testimonial.quote ?? ""}”</p>
              {testimonial.author ? (
                <footer className="mt-2 text-sm">- {testimonial.author}</footer>
              ) : null}
            </blockquote>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl rounded-xl bg-[#efe2d3] p-6 sm:p-8">
        <Title as="h2" className="mb-3">
          Agenda tu cita hoy
        </Title>
        <p className="mb-5 text-[#5f534a]">
          Escríbenos para elegir el tratamiento ideal para ti.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-[#6e5b4e]">
          <a
            href={`tel:${settings?.phone ? settings.phone.replace(/\s+/g, "") : "+523331795995"}`}
            className="underline decoration-[#d5b8a6] underline-offset-4 hover:text-[#5f534a]"
          >
            {settings?.phone ?? "3331795995"}
          </a>
          <span aria-hidden="true">•</span>
          <a
            href={settings?.socialMedia?.instagram?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[#d5b8a6] underline-offset-4 hover:text-[#5f534a]"
          >
            {settings?.socialMedia?.instagram?.label ?? "Instagram"}
          </a>
        </div>
      </section>
    </main>
  );
}
