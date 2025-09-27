import { getService } from "@/content/services"
import { notFound } from "next/navigation"
import { ServiceInquiryForm } from "@/components/forms/ServiceInquiryForm"

export default function ServiceDetail({ params }: { params: { slug: string } }) {
	const service = getService(params.slug)
	if (!service) return notFound()
	return (
		<div className="container py-16 grid gap-10">
			<div>
				<h1 className="text-3xl font-bold">{service.title}</h1>
				<p className="text-gray-700 mt-3">{service.description}</p>
			</div>
			<div className="max-w-2xl">
				<ServiceInquiryForm serviceSlug={service.slug} />
			</div>
		</div>
	)
}
