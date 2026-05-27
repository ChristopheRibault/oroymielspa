import Image from "next/image";
import Link from "next/link";
import { Title } from "@/components/ui/title";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 sm:px-10">
      <section className="mx-auto grid max-w-6xl items-start gap-6 md:grid-cols-2">
        <div>
          <Title as="h1" className="mb-4">
            El ritual que tu cuerpo merece
          </Title>
          <p className="max-w-xl text-lg leading-relaxed text-[#5f534a]">
            En Oro y Miel Spa te ofrecemos tratamientos personalizados para
            ayudarte a relajarte, recuperar tu bienestar y sentirte mejor cada
            día.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contacto"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-auto border-[0.8px] border-[#6e5b4e]/70 bg-transparent px-4 py-2 font-heading text-[1.18rem] leading-none text-[#6e5b4e] hover:bg-[#e8ded2]",
              )}
            >
              Reservar cita
            </Link>
            <Link
              href="/servicios"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "h-auto px-4 py-2 font-heading text-[1.18rem] leading-none text-[#6e5b4e] hover:bg-[#e8ded2]",
              )}
            >
              Ver servicios
            </Link>
          </div>
        </div>

        <Image
          src="/salon.png"
          alt="Interior de Oro y Miel Spa"
          width={300}
          height={300}
          className="h-auto max-h-75 w-full rounded-xl object-cover"
          priority
        />
      </section>

      <section className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded-lg bg-[#f8f2eb]/70 px-4 py-3 text-[#5f534a]">
          Atención personalizada
        </div>
        <div className="rounded-lg bg-[#f8f2eb]/70 px-4 py-3 text-[#5f534a]">
          Productos profesionales
        </div>
        <div className="rounded-lg bg-[#f8f2eb]/70 px-4 py-3 text-[#5f534a]">
          Ambiente relajante
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl">
        <Title as="h2" className="mb-6">
          Servicios destacados
        </Title>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <article className="rounded-lg bg-[#f8f2eb]/70 p-4">
            <Image
              src="/faciales.png"
              alt="Servicio facial"
              width={500}
              height={320}
              className="mb-4 h-44 w-full rounded-lg object-cover"
            />
            <Title as="h3" className="mb-2 text-2xl">
              Faciales
            </Title>
            <p className="text-[#5f534a]">
              Rituales de limpieza e hidratación.
            </p>
            <p className="mt-2 font-medium text-[#6e5b4e]">Desde $450 MXN</p>
          </article>

          <article className="rounded-lg bg-[#f8f2eb]/70 p-4">
            <Image
              src="/rituales.png"
              alt="Masaje relajante"
              width={500}
              height={320}
              className="mb-4 h-44 w-full rounded-lg object-cover"
            />
            <Title as="h3" className="mb-2 text-2xl">
              Rituales relajantes
            </Title>
            <p className="text-[#5f534a]">Masajes para cuerpo y mente.</p>
            <p className="mt-2 font-medium text-[#6e5b4e]">Desde $350 MXN</p>
          </article>

          <article className="rounded-lg bg-[#f8f2eb]/70 p-4">
            <Image
              src="/operatorio.png"
              alt="Cuidado post operatorio"
              width={500}
              height={320}
              className="mb-4 h-44 w-full rounded-lg object-cover"
            />
            <Title as="h3" className="mb-2 text-2xl">
              Post operatorio
            </Title>
            <p className="text-[#5f534a]">Acompañamiento de recuperación.</p>
            <p className="mt-2 font-medium text-[#6e5b4e]">Desde $4,500 MXN</p>
          </article>
        </div>
      </section>

      <section className="mx-auto mt-14 grid max-w-6xl gap-6 rounded-xl bg-[#f8f2eb]/70 p-6 md:grid-cols-2">
        <div>
          <Title as="h2" className="mb-3">
            Sobre Oro y Miel Spa
          </Title>
          <p className="text-[#5f534a]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            facilisis, arcu et volutpat posuere, purus lacus congue justo, at
            ultrices sem velit id neque. Curabitur nec sem ac elit varius
            ultricies.
          </p>
        </div>
        <Image
          src="/banner.png"
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
          <blockquote className="rounded-lg bg-[#f8f2eb]/70 p-4 text-[#5f534a]">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            auctor euismod felis.”
          </blockquote>
          <blockquote className="rounded-lg bg-[#f8f2eb]/70 p-4 text-[#5f534a]">
            “Praesent posuere, justo quis tempus egestas, augue massa maximus
            magna, ut ultrices erat.”
          </blockquote>
          <blockquote className="rounded-lg bg-[#f8f2eb]/70 p-4 text-[#5f534a]">
            “Aenean consequat purus quis sem pretium, in ultrices nibh faucibus.
            Integer non velit ut leo.”
          </blockquote>
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
            href="tel:+523331795995"
            className="underline decoration-[#d5b8a6] underline-offset-4 hover:text-[#5f534a]"
          >
            3331795995
          </a>
          <span aria-hidden="true">•</span>
          <a
            href="https://www.instagram.com/oromielspa/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[#d5b8a6] underline-offset-4 hover:text-[#5f534a]"
          >
            @oromielspa
          </a>
        </div>
      </section>
    </main>
  );
}
