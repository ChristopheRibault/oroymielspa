import Image from "next/image";
import { Title } from "../ui/title";

type ServicesListProps = {
  title: string;
  image?: string;
  children: React.ReactNode;
};

export const ServicesList = ({ title, children, image }: ServicesListProps) => {
  return (
    <section className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
      <div className="hidden md:block md:col-span-1" />
      <Title as="h2" className="md:col-span-2">
        {title}
      </Title>

      {image ? (
        <Image
          src={image}
          alt={title}
          className="h-auto w-full rounded-lg object-cover md:col-span-1"
          width={500}
          height={350}
        />
      ) : (
        <div className="hidden md:block md:col-span-1" />
      )}

      <div className="flex flex-col gap-4 md:col-span-2">{children}</div>
    </section>
  );
};
