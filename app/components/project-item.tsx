import Link from "next/link";

type ProjectItemProps = {
  title: string;
  description: string;
  href: string;
};

export function ProjectItem({ title, description, href }: ProjectItemProps) {
  return (
    <Link
      className="flex flex-col rounded-md border border-gray-300 border-dashed px-3 py-1 no-underline transition-colors duration-150 ease-initial hover:bg-neutral-50 sm:py-3"
      href={href}
    >
      <h2 className="flex items-center gap-1 text-[0.9375rem]">{title}</h2>
      <p className="text-gray-500 text-sm leading-5 tracking-wide">
        {description}
      </p>
    </Link>
  );
}
