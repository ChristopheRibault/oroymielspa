import { PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";

export const PrimaryButton = ({ children, ...props }: PropsWithChildren) => {
  return (
    <Button
      variant="outline"
      className="h-auto border-[0.8px] border-[#6e5b4e]/70 bg-transparent px-4 py-2 font-heading text-[1.18rem] leading-none text-[#6e5b4e] hover:bg-[#e8ded2]"
      {...props}
    >
      {children}
    </Button>
  );
};
