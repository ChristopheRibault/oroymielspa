import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src="/baseline_b89c89.svg"
      alt="Oroymiel"
      width={360}
      height={288}
      className="h-auto w-55 sm:w-75"
      priority
    />
  );
};
