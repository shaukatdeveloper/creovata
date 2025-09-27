export type Service = {
	slug: string
	title: string
	description: string
}
export const services: Service[] = [
	{ slug: "web-development", title: "Web Development", description: "Next.js, APIs, performance, SEO." },
	{ slug: "mobile-apps", title: "Mobile Apps", description: "iOS/Android with React Native." },
	{ slug: "ai-automation", title: "AI & Automation", description: "Integrations, agents, workflows." },
]
export function getService(slug: string) {
	return services.find((s) => s.slug === slug) || null
}
