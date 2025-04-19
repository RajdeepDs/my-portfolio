
import Link from "next/link";
import { ProjectItem } from "./components/project-item";
import { projects, skills } from "./config/projects";
import { BlogPosts } from "./components/posts";

export default function Page() {
  return (
    <section>
      <header className="mb-8">
        <h1 className="font-semibold text-xl">Rajdeep Das</h1>
        <p className="text-neutral-500 text-sm">22 year old guy</p>
      </header>
      <div className="mb-8 flex flex-col items-start gap-2">
        <h2>About</h2>
        <div className="flex flex-col items-start gap-1">
          <p className="text-neutral-500">
            Hey there! I'm a software developer passionate about building things for the web. I love exploring new technologies and creating meaningful experiences through code. When I'm not coding, you can find me reading tech blogs or contributing to open source projects.
          </p>
          <p className="text-neutral-500">
            Currently building <Link href={"https://coordinize.tech"} className="text-neutral-800 underline underline-offset-1">Coordinize,</Link> a free and open-source modern communication platform for teams working async.
          </p>
        </div>
      </div>
      <div className="mb-8 flex flex-col items-start gap-2">
        <h2>Projects</h2>
        <ul className="flex flex-col items-start gap-2">
          {projects.map((project) => (
            <ProjectItem
              key={project.title}
              title={project.title}
              description={project.description}
              href={project.href}
            />
          ))}
        </ul>
      </div>
      <div className="mb-8 flex flex-col items-start gap-4">
        <h2>Skills</h2>
        <ul className="flex flex-wrap items-center gap-2">
          {skills.map((skill) => (
            <li key={skill} className="rounded-md border border-neutral-300 px-2 py-0.5 text-neutral-800 text-sm">
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="my-8 flex flex-col items-start gap-4">
        <h2>Blogs</h2>
        <BlogPosts />
      </div>
    </section>
  );
}
