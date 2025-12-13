import { ArrowUpRightIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mb-6 px-2">
      <ul className="mt-8 flex gap-4 text-neutral-600 text-sm md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            href="https://github.com/RajdeepDs"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ArrowUpRightIcon className="size-4 text-neutral-500" />
            <p className="ml-2">GitHub</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            href="https://x.com/Rajdeep__ds"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ArrowUpRightIcon className="size-4 text-neutral-500" />
            <p className="ml-2">X</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            href="mailto:rajdeepds626@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ArrowUpRightIcon className="size-4 text-neutral-500" />
            <p className="ml-2">Email</p>
          </a>
        </li>
      </ul>
    </footer>
  );
}
