import Image from "next/image"
import Link from "next/link"
import { portfolio } from "@/content/portfolio"

export default function PortfolioPage() {
	return (
		<div className="container py-16">
			<h1 className="text-3xl font-bold mb-8">Portfolio</h1>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{portfolio.map((p)=>(
					<Link key={p.slug} href={`/portfolio/${p.slug}`} className="block group">
						<div className="aspect-video relative rounded-xl overflow-hidden border">
							<Image alt={p.title} src={p.image} fill className="object-cover group-hover:scale-105 transition" />
						</div>
						<div className="mt-3 font-semibold">{p.title}</div>
						<div className="text-sm text-gray-600">{p.result}</div>
					</Link>
				))}
			</div>
		</div>
	)
} 