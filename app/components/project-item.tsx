import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

interface ProjectItemProps {
    title: string;
    description: string;
    href: string;
}

export function ProjectItem({ title, description, href }: ProjectItemProps) {
    return (
        <Link href={href} className="group flex flex-col items-start gap-0.5">
            <h2 className="flex items-center gap-1">
                {title}
                <ArrowRightIcon
                    className="-translate-x-2 size-3.5 text-neutral-500 opacity-0 transition-all duration-200 ease-in-out group-hover:block group-hover:translate-x-1 group-hover:opacity-100 "
                />
            </h2>
            <p className="text-neutral-500 ">{description}</p>
        </Link>
    )
}