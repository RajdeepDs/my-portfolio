import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
    const allBlogs = getBlogPosts()
    const sortedBlogs = allBlogs.sort((a, b) => {
        if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1
        }
        return 1
    })

    return (
        <div className="flex flex-col">
            {sortedBlogs.map((post) => (
                <Link
                    key={post.slug}
                    className="mb-2 flex flex-col space-y-1"
                    href={`/blog/${post.slug}`}
                >
                    <div className="flex w-full flex-col gap-2 md:flex-row">
                        <p className="w-[150px] text-neutral-600 tabular-nums dark:text-neutral-400">
                            {formatDate(post.metadata.publishedAt, false)}
                        </p>
                        <p className="text-neutral-900 tracking-tight dark:text-neutral-100">
                            {post.metadata.title}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    )
}
