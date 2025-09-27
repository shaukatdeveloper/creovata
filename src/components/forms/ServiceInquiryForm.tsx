"use client"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	company: z.string().optional(),
	projectDetails: z.string().min(10),
	budget: z.string().optional(),
	timeline: z.string().optional(),
	serviceSlug: z.string(),
})

type Values = z.infer<typeof schema>

export function ServiceInquiryForm({ serviceSlug }: { serviceSlug: string }) {
	const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<Values>({
		resolver: zodResolver(schema), defaultValues: { serviceSlug }
	})

	const onSubmit = async (values: Values) => {
		const res = await fetch("/api/inquiry", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(values),
		})
		if (res.ok) reset()
		alert(res.ok ? "Submitted!" : "Failed to submit")
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
			<input {...register("name")} placeholder="Name" className="border rounded px-3 py-2" />
			<p className="text-xs text-red-600">{errors.name?.message}</p>
			<input {...register("email")} placeholder="Email" className="border rounded px-3 py-2" />
			<p className="text-xs text-red-600">{errors.email?.message}</p>
			<input {...register("company")} placeholder="Company" className="border rounded px-3 py-2" />
			<textarea {...register("projectDetails")} placeholder="Project Details" className="border rounded px-3 py-2 min-h-[120px]" />
			<div className="grid md:grid-cols-3 gap-3">
				<input {...register("budget")} placeholder="Budget" className="border rounded px-3 py-2" />
				<input {...register("timeline")} placeholder="Timeline" className="border rounded px-3 py-2" />
				<input type="hidden" {...register("serviceSlug")} />
			</div>
			<button disabled={isSubmitting} className="px-5 py-2 bg-brand-600 text-white rounded">
				{isSubmitting ? "Submitting..." : "Submit Inquiry"}
			</button>
		</form>
	)
}
