import { Button } from "@/components/ui/button";

type MenuItemProps = {
  label: string;
};

export default function MenuItem({ label }: MenuItemProps) {
  return (
    <li>
      <Button
        variant="ghost"
        className="h-auto px-2 py-1 font-heading text-[1.18rem] leading-none text-[#6e5b4e] hover:bg-[#e8ded2]"
      >
        {label}
      </Button>
    </li>
  );
}
