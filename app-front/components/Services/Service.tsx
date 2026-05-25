import { Title } from "../ui/title";

type ServiceProps = {
  name: string;
  description: string;
  rate: string;
};

export const Service = ({ name, description, rate }: ServiceProps) => {
  return (
    <div className="flex flex-row items-start justify-between gap-4 rounded-md bg-[#f8f2eb]/70 p-3 sm:p-4">
      <div className="flex flex-col gap-1 sm:gap-2">
        <Title as="h3" className="text-xl sm:text-2xl leading-tight">
          {name}
        </Title>
        <p className="whitespace-pre-line text-base leading-relaxed text-[#5f534a]">
          {description}
        </p>
      </div>
      <p className="shrink-0 pt-1 text-xl font-medium text-[#6e5b4e]">{rate}</p>
    </div>
  );
};
