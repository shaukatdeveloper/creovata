export type Post = { slug: string; title: string; excerpt: string; date: string; content: string }
export const posts: Post[] = [
	{ slug: "hello-creovata", title: "Hello, Creovata", excerpt: "Welcome to our blog.", date: "2025-09-01", content: "Long form content..." },
]
export function getPost(slug: string) { return posts.find(p=>p.slug===slug) || null }
