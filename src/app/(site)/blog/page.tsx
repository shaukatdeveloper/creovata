import Link from "next/link"
import { posts } from "@/content/blog"

export default function BlogPage() {
	return (
		<div className="container py-16">
			<h1 className="text-3xl font-bold mb-8">Blog</h1>
			<div className="grid gap-6">
				{posts.map((p)=>(
					<div key={p.slug} className="p-6 border rounded-xl bg-white">
						<div className="font-semibold">{p.title}</div>
						<p className="text-gray-600 text-sm mt-1">{p.excerpt}</p>
						<Link className="mt-3 inline-block text-brand-700" href={`/blog/${p.slug}`}>Read</Link>
					</div>
				))}
			</div>
		</div>
	)
}
