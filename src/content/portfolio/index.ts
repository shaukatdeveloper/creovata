export type CaseStudy = {
	slug: string
	title: string
	image: string
	result: string
	description: string
}
export const portfolio: CaseStudy[] = [
	{ slug: "acme-analytics", title: "Acme Analytics", image: "/images/acme.jpg", result: "3x conversions", description: "Data platform with Next.js." },
]
export function getCase(slug: string) { return portfolio.find(p=>p.slug===slug) || null }
