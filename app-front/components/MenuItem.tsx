import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MenuItemProps = {
  label: string;
  href?: string;
};

const menuItemClassName =
  "h-auto px-2 py-1 font-heading text-[1.18rem] leading-none text-[#6e5b4e] hover:bg-[#e8ded2]";

export default function MenuItem({ label, href }: MenuItemProps) {
  if (href) {
    return (
      <li>
        <Link
          href={href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            menuItemClassName,
          )}
        >
          {label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <Button variant="ghost" className={menuItemClassName}>
        {label}
      </Button>
    </li>
  );
}
