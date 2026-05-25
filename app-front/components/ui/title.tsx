import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const titleVariants = cva("font-heading tracking-tight text-[#6e5b4e]", {
  variants: {
    size: {
      h1: "text-4xl sm:text-5xl",
      h2: "text-3xl sm:text-4xl",
      h3: "text-2xl sm:text-3xl",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    size: "h1",
    align: "left",
  },
});

type TitleTag = "h1" | "h2" | "h3";

type TitleProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof titleVariants> & {
    as?: TitleTag;
  };

function Title({ as, size, align, className, ...props }: TitleProps) {
  const Comp = as ?? "h1";
  const resolvedSize = size ?? Comp;

  return (
    <Comp
      data-slot="title"
      className={cn(titleVariants({ size: resolvedSize, align, className }))}
      {...props}
    />
  );
}

export { Title, titleVariants };
