import { BlogPosts } from "app/components/blogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <>
      <span className="mb-5 block text-[0.9375rem] text-gray-600 sm:mb-4">
        My Blogs
      </span>
      <BlogPosts />
    </>
  );
}
