import { BlogPosts } from "app/components/blogs";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 font-semibold text-2xl tracking-tighter">My Blogs</h1>
      <BlogPosts />
    </section>
  );
}
