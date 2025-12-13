type TProject = {
  title: string;
  description: string;
  href: string;
};

export const projects: TProject[] = [
  {
    title: "Coordinize",
    description: "Coordinize is a modern async team communication platform.",
    href: "https://coordinize.tech",
  },
  {
    title: "BuildIt",
    description: "BuildIt is a product development tool for modern teams.",
    href: "https://buildit-marketing.vercel.app/",
  },
  {
    title: "Flagbase",
    description:
      "A modern feature flag management system built for TypeScript developers.",
    href: "https://github.com/RajdeepDs/Flagbase",
  },
];

export type Technology = {
  name: string;
  domain: string;
};

export const technologies: Technology[] = [
  { name: "React", domain: "react.dev" },
  { name: "Next.js", domain: "nextjs.org" },
  { name: "TypeScript", domain: "typescriptlang.org" },

  { name: "Node.js", domain: "nodejs.org" },
  { name: "Bun", domain: "bun.sh" },

  { name: "PostgreSQL", domain: "postgresql.org" },
  { name: "MongoDB", domain: "mongodb.com" },

  { name: "Prisma", domain: "prisma.io" },
  { name: "Drizzle ORM", domain: "orm.drizzle.team" },

  { name: "Tailwind CSS", domain: "tailwindcss.com" },
  { name: "Shadcn UI", domain: "ui.shadcn.com" },
  { name: "Motion", domain: "motion.dev" },

  { name: "React Query", domain: "tanstack.com/query" },

  { name: "tRPC", domain: "trpc.io" },
  { name: "Better Auth", domain: "better-auth.com" },

  { name: "Turborepo", domain: "turborepo.com" },
  { name: "Vercel", domain: "vercel.com" },
  { name: "GitHub", domain: "github.com" },
  { name: "Docker", domain: "docker.com" },
];
