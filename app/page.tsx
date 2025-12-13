import Image from "next/image";
import Link from "next/link";
import { BlogPosts } from "./components/posts";
import { ProjectItem } from "./components/project-item";
import { projects, technologies } from "./config/projects";

const getTechIcon = (domain: string, size = 64) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;

export default function Page() {
  return (
    <section>
      <header className="mb-8 flex items-center gap-2">
        <Image
          alt={"Rajdeep Das"}
          className="rounded-full"
          height={40}
          src={"/me.webp"}
          width={40}
        />
        <div>
          <h1 className="font-medium text-lg">Rajdeep Das</h1>
          <p className="text-[1.5ch] text-neutral-600">
            React & TypeScript Engineer
          </p>
        </div>
      </header>
      <div className="mb-8 flex flex-col items-start gap-2">
        <div className="flex flex-col items-start gap-2 text-[1.5ch] leading-6 tracking-wide">
          <p className="text-neutral-600">
            I build tools that solve real problems.
          </p>
          <p className="text-neutral-600">
            I've shipped{" "}
            <span className="font-medium text-neutral-800">Coordinize</span> for
            async team communication,{" "}
            <span className="font-medium text-neutral-800">BuildIt</span> as a
            Linear alternative, and currently building{" "}
            <span className="font-medium text-neutral-800">Flagbase</span> as a
            type-safe feature flag dev tool.
          </p>
          <p className="text-neutral-600">
            I contribute to{" "}
            <Link
              className="inline-flex items-center gap-1 align-middle font-medium text-neutral-800"
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
              className="inline-flex items-center gap-1 align-middle font-medium text-neutral-800"
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
      </div>
      <div className="mb-8 flex flex-col items-start gap-4">
        <h2 className="text-[1.5ch] text-neutral-700">Projects</h2>
        <ul className="flex w-full flex-col items-start gap-2">
          {projects.map((project) => (
            <ProjectItem
              description={project.description}
              href={project.href}
              key={project.title}
              title={project.title}
            />
          ))}
        </ul>
      </div>
      <div className="mb-8 flex flex-col items-start gap-4">
        <h2 className="text-[1.5ch] text-neutral-700">
          Technology & Tools I Use
        </h2>
        <ul className="flex flex-wrap items-center gap-2">
          {technologies.map((tech) => (
            <Link
              className="flex items-center gap-2 rounded-md border border-neutral-300 px-2 py-1 text-neutral-600 text-sm transition-colors duration-150 ease-initial hover:bg-neutral-100"
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
        </ul>
      </div>
      <div className="my-8 hidden flex-col items-start gap-4">
        <h2>Blogs</h2>
        <BlogPosts />
      </div>
    </section>
  );
}
