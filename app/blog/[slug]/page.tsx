import { formatDate, getBlogPosts } from "app/blog/utils";
import { CustomMDX } from "app/components/mdx";
import { baseUrl } from "app/sitemap";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const allPosts = getBlogPosts();

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const allPosts = getBlogPosts();
  const { slug } = await params;
  const blogPost = allPosts.find((p) => p.slug === slug);

  if (!blogPost) {
    return {};
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = blogPost.metadata;

  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${blogPost.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }) {
  const allPosts = getBlogPosts();
  const { slug } = await params;
  const blogPost = allPosts.find((p) => p.slug === slug);

  if (!blogPost) {
    notFound();
  }

  return (
    <section>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blogPost.metadata.title,
            datePublished: blogPost.metadata.publishedAt,
            dateModified: blogPost.metadata.publishedAt,
            description: blogPost.metadata.summary,
            image: blogPost.metadata.image
              ? `${baseUrl}${blogPost.metadata.image}`
              : `/og?title=${encodeURIComponent(blogPost.metadata.title)}`,
            url: `${baseUrl}/blog/${blogPost.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
        suppressHydrationWarning
        type="application/ld+json"
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {blogPost.metadata.title}
      </h1>
      <div className="mt-2 mb-8 flex items-center justify-between text-sm">
        <p className="text-neutral-600 text-sm dark:text-neutral-400">
          {formatDate(blogPost.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose text-[0.9375rem]">
        <CustomMDX source={blogPost.content} />
      </article>
    </section>
  );
}
