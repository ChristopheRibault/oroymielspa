import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  src?: string;
  alt: string;
};

export const Logo = ({ src, alt }: LogoProps) => {
  return (
    <Link href="/" className="flex items-center gap-2">
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={360}
          height={288}
          className="h-auto w-55 sm:w-75"
          priority
        />
      ) : (
        <Image
          src="/logo_no_bg.png"
          alt={alt}
          width={360}
          height={288}
          className="h-auto w-55 sm:w-75"
          priority
        />
      )}
    </Link>
  );
};
