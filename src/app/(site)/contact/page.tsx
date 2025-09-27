import { ContactForm } from "@/components/forms/ContactForm"
export default function ContactPage() {
	return (
		<div className="container py-16 grid gap-10">
			<div>
				<h1 className="text-3xl font-bold">Contact</h1>
				<p className="text-gray-700 mt-2">We’d love to hear from you.</p>
			</div>
			<div className="max-w-2xl"><ContactForm /></div>
			<div className="text-sm text-gray-600">
				Business: 123 Market St, City • +1 (000) 000-0000 • hello@creovata.com
			</div>
		</div>
	)
}
