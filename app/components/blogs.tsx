import { formatDate, getBlogPosts } from "app/blog/utils";
import Link from "next/link";

export function BlogPosts() {
  const allBlogs = getBlogPosts();
  const sortedBlogs = allBlogs.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <div className="flex flex-col">
      {sortedBlogs.map((post) => (
        <Link
          className="flex w-full flex-col items-start gap-0.5 rounded-md border border-neutral-300 border-dashed px-2 py-2 transition-colors duration-150 ease-initial hover:bg-neutral-50"
          href={`/blog/${post.slug}`}
          key={post.slug}
        >
          <p className="text-neutral-500 text-sm tabular-nums leading-6 tracking-wide">
            {formatDate(post.metadata.publishedAt, false)}
          </p>
          <h2 className="text-[1em]">{post.metadata.title}</h2>
          {/*<div className="flex w-full flex-col gap-2 md:flex-row">
            <p className="w-[150px] text-neutral-600 tabular-nums dark:text-neutral-400">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <p className="text-neutral-900 tracking-tight dark:text-neutral-100">
              {post.metadata.title}
            </p>
          </div>*/}
        </Link>
      ))}
    </div>
  );
}
