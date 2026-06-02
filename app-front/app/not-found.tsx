import Link from "next/link";
import { Title } from "@/components/ui/title";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="px-6 py-14 sm:px-10">
      <section className="mx-auto grid w-full max-w-5xl place-items-center rounded-2xl border border-[#e3d4c6] bg-[#f8f2eb]/70 px-6 py-12 text-center sm:px-10">
        <p className="mb-2 font-heading text-5xl text-[#6e5b4e] sm:text-6xl">
          404
        </p>
        <Title as="h1" align="center" className="mb-3">
          Esta pagina no existe
        </Title>
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-[#5f534a] sm:text-lg">
          Puede que el enlace este roto o que la pagina haya sido movida. Te
          ayudamos a volver al sitio.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-auto border-[0.8px] border-[#6e5b4e]/70 bg-transparent px-4 py-2 font-heading text-[1.1rem] leading-none text-[#6e5b4e] hover:bg-[#e8ded2]",
            )}
          >
            Volver al inicio
          </Link>
          <Link
            href="/servicios"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "h-auto px-4 py-2 font-heading text-[1.1rem] leading-none text-[#6e5b4e] hover:bg-[#e8ded2]",
            )}
          >
            Ver servicios
          </Link>
        </div>
      </section>
    </main>
  );
}
