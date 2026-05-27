import { Title } from "@/components/ui/title";
import Image from "next/image";
import { FaHouse, FaInstagram, FaPhone } from "react-icons/fa6";

export default function Contacto() {
  return (
    <main className="min-h-screen px-6 py-10 sm:px-10">
      <Title as="h1" className="mb-8">
        Para contactarme
      </Title>

      <section className="flex flex-col sm:flex-row gap-2 ">
        <dl className="space-y-6 text-[#5f534a] w-full sm:w-1/2 rounded-lg bg-[#f8f2eb]/70 p-5 sm:p-6">
          <Title as="h2" className="mt-1 text-base sm:text-lg">
            <span className="font-bold text-xl">Oro y Miel Spa</span>{" "}
            <span className="italic">by Lismar Nava</span>
          </Title>

          <div className="flex flex-row flex-nowrap items-start gap-4">
            <dt className="font-heading flex items-center gap-2 text-2xl text-[#6e5b4e]">
              <FaHouse className="size-5" aria-description="" />
            </dt>
            <dd className="text-base sm:text-lg">
              Colonia Arboledas,
              <br />
              Guadalajara,
              <br />
              Jalisco
            </dd>
          </div>

          <div className="flex flex-row flex-nowrap items-start gap-4">
            <dt className="font-heading text-2xl text-[#6e5b4e]">
              <FaPhone aria-description="Teléfono" />
            </dt>
            <dd className="mt-1 text-base sm:text-lg">
              <a
                href="tel:+523331795995"
                className="underline decoration-[#d5b8a6] underline-offset-4 hover:text-[#6e5b4e]"
              >
                3331795995
              </a>
            </dd>
          </div>

          <div className="flex flex-row flex-nowrap items-center gap-4">
            <dt className="font-heading text-2xl text-[#6e5b4e]">
              <FaInstagram aria-description="Instagram" />
            </dt>
            <dd className="mt-1 text-base sm:text-lg">
              <a
                href="https://www.instagram.com/oromielspa/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[#d5b8a6] underline-offset-4 hover:text-[#6e5b4e]"
              >
                @oromielspa
              </a>
            </dd>
          </div>
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
