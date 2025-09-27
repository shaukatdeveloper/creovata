"use client"
import { useForm } from "react-hook-form"
type Values = { name: string; email: string; message: string }
export function ContactForm() {
	const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<Values>()
	const onSubmit = async (values: Values) => {
		const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type":"application/json" }, body: JSON.stringify(values) })
		if (res.ok) reset()
		alert(res.ok ? "Sent!" : "Failed")
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
			<input {...register("name")} placeholder="Name" className="border rounded px-3 py-2" />
			<input {...register("email")} placeholder="Email" className="border rounded px-3 py-2" />
			<textarea {...register("message")} placeholder="Message" className="border rounded px-3 py-2 min-h-[120px]" />
			<button disabled={isSubmitting} className="px-5 py-2 bg-brand-600 text-white rounded">{isSubmitting ? "Sending..." : "Send"}</button>
		</form>
	)
}
