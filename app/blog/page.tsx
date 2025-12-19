import { BlogPosts } from "app/components/blogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 font-medium text-lg">My Blogs</h1>
      <BlogPosts />
    </section>
  );
}
