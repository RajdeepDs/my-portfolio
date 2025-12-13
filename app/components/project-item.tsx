import Link from "next/link";

type ProjectItemProps = {
  title: string;
  description: string;
  href: string;
};

export function ProjectItem({ title, description, href }: ProjectItemProps) {
  return (
    <Link
      className="group flex w-full flex-col items-start gap-0.5 rounded-md border border-neutral-300 border-dashed px-4 py-2 transition-colors duration-150 ease-initial hover:bg-neutral-50"
      href={href}
    >
      <h2 className="flex items-center gap-1 text-[1.5ch]">{title}</h2>
      <p className="text-neutral-500 text-sm leading-6 tracking-wide">
        {description}
      </p>
    </Link>
  );
}
