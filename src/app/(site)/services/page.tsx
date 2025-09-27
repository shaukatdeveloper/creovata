import Link from "next/link"
import { services } from "@/content/services"

export default function ServicesPage() {
	return (
		<div className="container py-16">
			<h1 className="text-3xl font-bold mb-8">Services</h1>
			<div className="grid md:grid-cols-3 gap-6">
				{services.map((s)=>(
					<div key={s.slug} className="p-6 border rounded-xl bg-white">
						<div className="font-semibold">{s.title}</div>
						<p className="text-gray-600 text-sm mt-2">{s.description}</p>
						<Link className="mt-4 inline-block text-brand-700" href={`/services/${s.slug}`}>Learn more</Link>
					</div>
				))}
			</div>
		</div>
	)
}
