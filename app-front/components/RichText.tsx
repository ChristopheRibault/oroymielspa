import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { PortableTextBlock } from "@/lib/sanity";

type RichTextProps = {
  value?: PortableTextBlock[];
  className?: string;
};

const components: PortableTextComponents = {
  block: {
    normal: ({ children }: { children?: ReactNode }) => (
      <p className="leading-relaxed">{children}</p>
    ),
    h2: ({ children }: { children?: ReactNode }) => (
      <h2 className="font-heading text-2xl text-[#6e5b4e]">{children}</h2>
    ),
    h3: ({ children }: { children?: ReactNode }) => (
      <h3 className="font-heading text-xl text-[#6e5b4e]">{children}</h3>
    ),
    blockquote: ({ children }: { children?: ReactNode }) => (
      <blockquote className="border-l-2 border-[#d5b8a6] pl-4 italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: ReactNode }) => (
      <ul className="list-disc space-y-1 pl-5">{children}</ul>
    ),
    number: ({ children }: { children?: ReactNode }) => (
      <ol className="list-decimal space-y-1 pl-5">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: ReactNode }) => <li>{children}</li>,
    number: ({ children }: { children?: ReactNode }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }: { children?: ReactNode }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }: { children?: ReactNode }) => <em>{children}</em>,
    link: ({
      children,
      value,
    }: {
      children?: ReactNode;
      value?: { href?: string };
    }) => {
      const href = value?.href;

      if (!href) {
        return <>{children}</>;
      }

      const isExternal = href.startsWith("http");

      return (
        <a
          href={href}
          className="underline decoration-[#d5b8a6] underline-offset-4 hover:text-[#6e5b4e]"
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    },
  },
};

export default function RichText({ value, className }: RichTextProps) {
  if (!value?.length) {
    return null;
  }

  return (
    <div className={cn("space-y-3 text-[#5f534a]", className)}>
      <PortableText value={value} components={components} />
    </div>
  );
}
