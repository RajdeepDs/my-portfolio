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
    <div className="flex flex-col gap-2">
      {sortedBlogs.slice(0, 3).map((post) => (
        <Link
          className="flex flex-col rounded-md border border-gray-300 border-dashed px-3 py-1 no-underline transition-colors duration-150 ease-initial hover:bg-neutral-50 sm:py-3"
          href={`/blog/${post.slug}`}
          key={post.slug}
        >
          <p className="flex items-center gap-1 text-[0.9375rem]">
            {post.metadata.title}
          </p>
          <p className="text-gray-500 text-sm tabular-nums leading-5 tracking-wide">
            {formatDate(post.metadata.publishedAt, false)}
          </p>
        </Link>
      ))}
      {allBlogs.length > 4 && (
        <Link className="mt-4 font-medium text-sm" href="/blog">
          See all blogs
        </Link>
      )}
    </div>
  );
}
