import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  src?: string;
  alt: string;
  size?: "small" | "medium" | "large";
};

export const Logo = ({
  src = "/logo_no_bg.png",
  alt,
  size = "medium",
}: LogoProps) => {
  const sizeClasses = {
    small: "w-40",
    medium: "w-55",
    large: "w-75",
  };
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src={src}
        alt={alt}
        width={360}
        height={288}
        className={`h-auto ${sizeClasses[size]}`}
        priority
      />
    </Link>
  );
};
