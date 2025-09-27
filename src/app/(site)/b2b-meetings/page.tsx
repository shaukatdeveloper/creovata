import { BookingForm } from "@/components/forms/BookingForm"

export default function B2BMeetingsPage() {
	return (
		<div className="container py-16">
			<h1 className="text-3xl font-bold mb-6">Book a B2B Meeting</h1>
			<div className="max-w-xl"><BookingForm /></div>
		</div>
	)
}
