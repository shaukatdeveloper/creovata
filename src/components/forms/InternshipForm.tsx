"use client"
import { useForm } from "react-hook-form"

type Values = {
	name: string
	email: string
	program: string
	resume: FileList
}

export function InternshipForm() {
	const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<Values>()
	const onSubmit = async (values: Values) => {
		const fd = new FormData()
		Object.entries(values).forEach(([k, v]) => {
			if (k === "resume") fd.append("resume", (v as FileList)[0])
			else fd.append(k, v as string)
		})
		const res = await fetch("/api/internship", { method: "POST", body: fd })
		if (res.ok) reset()
		alert(res.ok ? "Submitted" : "Failed")
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
			<input {...register("name")} placeholder="Name" className="border rounded px-3 py-2" />
			<input {...register("email")} placeholder="Email" className="border rounded px-3 py-2" />
			<select {...register("program")} className="border rounded px-3 py-2">
				<option value="web">Web Development</option>
				<option value="mobile">Mobile Apps</option>
				<option value="ai">AI & Automation</option>
			</select>
			<input type="file" accept=".pdf,.doc,.docx" {...register("resume")} className="border rounded px-3 py-2" />
			<button disabled={isSubmitting} className="px-5 py-2 bg-brand-600 text-white rounded">
				{isSubmitting ? "Submitting..." : "Apply"}
			</button>
		</form>
	)
}
