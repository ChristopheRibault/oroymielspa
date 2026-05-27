import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo_no_bg.png"
        alt="Spa Oro y Miel by Lismar - El ritual que tu cuerpo merece"
        width={360}
        height={288}
        className="h-auto w-55 sm:w-75"
        priority
      />
    </Link>
  );
};
