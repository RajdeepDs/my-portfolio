import Image from "next/image";
import Link from "next/link";
import { BlogPosts } from "./components/posts";
import { ProjectItem } from "./components/project-item";
import { projects, technologies } from "./config/projects";

const getTechIcon = (domain: string, size = 64) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-start gap-2 text-[0.9375rem] leading-6 tracking-wide *:text-gray-600">
        <p>I build tools that solve real problems.</p>
        <p>
          I've shipped{" "}
          <span className="font-medium text-gray-800">Coordinize</span> for
          async team communication,{" "}
          <span className="font-medium text-gray-800">BuildIt</span> as a Linear
          alternative, and currently building{" "}
          <span className="font-medium text-gray-800">Flagbase</span> as a
          type-safe feature flag dev tool.
        </p>
        <p>
          I contribute to{" "}
          <Link
            className="inline-flex items-center gap-1 align-middle font-medium text-gray-800"
            href={"https://twenty.com"}
          >
            <Image
              alt={"Twenty CRM"}
              height={16}
              src={getTechIcon("twenty.com", 16)}
              width={16}
            />
            Twenty CRM
          </Link>{" "}
          and have commits in{" "}
          <Link
            className="inline-flex items-center gap-1 align-middle font-medium text-gray-800"
            href={"https://cal.com"}
          >
            <Image
              alt={"Cal.com"}
              height={16}
              src={getTechIcon("cal.com", 16)}
              width={16}
            />
            Cal.com
          </Link>{" "}
          because I'd rather fix things than complain about them.
        </p>
      </div>
      <div className="-mb-3 mt-8 sm:mt-12">
        <span className="mb-5 block text-[0.9375rem] text-gray-600 sm:mb-4">
          Projects
        </span>
        <div className="flex flex-col gap-2">
          {projects.map((project) => (
            <ProjectItem
              description={project.description}
              href={project.href}
              key={project.title}
              title={project.title}
            />
          ))}
        </div>
      </div>
      <div className="-mb-3 mt-8 sm:mt-12">
        <span className="mb-5 block text-[0.9375rem] text-gray-600 sm:mb-4">
          Blogs
        </span>
        <BlogPosts />
        <Link
          className="text-gray-600 text-sm hover:underline hover:underline-offset-2"
          href={"/blog"}
        >
          See all blogs
        </Link>
      </div>
      <div className="-mb-3 mt-8 sm:mt-12">
        <span className="mb-5 block text-[0.9375rem] text-gray-600 sm:mb-4">
          Technology & Tools I Use
        </span>
        <div className="flex flex-wrap items-center gap-2">
          {technologies.map((tech) => (
            <Link
              className="flex items-center gap-2 rounded-md border border-gray-300 px-2 py-1 text-gray-600 text-sm transition-colors duration-150 ease-initial hover:bg-neutral-100"
              href={`https://${tech.domain}`}
              key={tech.name}
            >
              <Image
                alt={tech.name}
                height={16}
                src={getTechIcon(tech.domain, 16)}
                width={16}
              />
              <span>{tech.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
