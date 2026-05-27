import type { SiteSettings } from "@/lib/sanity";
import Menu from "./Menu";
import { Logo } from "./Logo";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type HeaderProps = {
  settings: SiteSettings | null;
};

export default function Header({ settings }: HeaderProps) {
  const bookingHref = settings?.bookingUrl ?? "/contacto";
  const instagramHref =
    settings?.instagram ?? "https://www.instagram.com/oromielspa/";

  return (
    <header className="w-full flex justify-center px-4 py-2 sm:px-8 sm:py-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full gap-4 sm:gap-8">
        <div className="pt-3 sm:pt-6 hidden sm:block">
          <Link
            href={bookingHref}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-auto border-[0.8px] border-[#6e5b4e]/70 bg-transparent px-4 py-2 font-heading text-[1.18rem] leading-none text-[#6e5b4e] hover:bg-[#e8ded2]",
            )}
          >
            Reservar
          </Link>
        </div>

        <Logo
          src={settings?.logo?.asset?.url}
          alt={settings?.logo?.alt ?? settings?.siteTitle ?? "Oro y Miel Spa"}
        />
        <Menu instagramHref={instagramHref} />
      </div>
    </header>
  );
}
