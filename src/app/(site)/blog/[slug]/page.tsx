import { notFound } from "next/navigation"
import { getPost } from "@/content/blog"

export default function PostPage({ params }: { params: { slug: string } }) {
	const post = getPost(params.slug)
	if (!post) return notFound()
	return (
		<article className="container py-16 prose max-w-3xl">
			<h1>{post.title}</h1>
			<p className="text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
			<p>{post.content}</p>
		</article>
	)
}
