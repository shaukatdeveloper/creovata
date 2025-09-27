import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
	try {
		const data = await req.json()
		// Basic validation
		if (!data?.email || !data?.name) return NextResponse.json({ error: "Invalid" }, { status: 400 })
		// Send email/notification
		if (process.env.RESEND_API_KEY && process.env.INQUIRY_TO_EMAIL) {
			await resend.emails.send({
				from: "Creovata <no-reply@creovata.com>",
				to: process.env.INQUIRY_TO_EMAIL,
				subject: `New service inquiry: ${data.serviceSlug}`,
				text: JSON.stringify(data, null, 2),
			})
		}
		return NextResponse.json({ ok: true })
	} catch {
		return NextResponse.json({ error: "Server error" }, { status: 500 })
	}
}
