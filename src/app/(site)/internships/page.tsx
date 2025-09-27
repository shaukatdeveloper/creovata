import { InternshipForm } from "@/components/forms/InternshipForm"

export default function InternshipsPage() {
	return (
		<div className="container py-16 grid gap-10">
			<div>
				<h1 className="text-3xl font-bold">Internships & Training</h1>
				<p className="text-gray-700 mt-3">Programs, syllabus, and real-world projects.</p>
			</div>
			<div className="max-w-2xl">
				<InternshipForm />
			</div>
		</div>
	)
}
