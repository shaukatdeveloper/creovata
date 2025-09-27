"use client"
import { useForm } from "react-hook-form"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react"

type Values = { name: string; email: string; brief: string; date: Date }

export function BookingForm() {
	const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<Values>()
	const [date, setDate] = useState<Date | null>(new Date())
	const onSubmit = async (values: Values) => {
		const res = await fetch("/api/booking", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ ...values, date }),
		})
		if (res.ok) reset()
		alert(res.ok ? "Booked!" : "Failed")
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
			<input {...register("name")} placeholder="Name" className="border rounded px-3 py-2" />
			<input {...register("email")} placeholder="Email" className="border rounded px-3 py-2" />
			<textarea {...register("brief")} placeholder="Project brief" className="border rounded px-3 py-2 min-h-[100px]" />
			<DatePicker selected={date} onChange={(d)=>setDate(d)} showTimeSelect dateFormat="Pp" className="border rounded px-3 py-2 w-full" />
			<button disabled={isSubmitting} className="px-5 py-2 bg-brand-600 text-white rounded">
				{isSubmitting ? "Booking..." : "Book Meeting"}
			</button>
		</form>
	)
}
