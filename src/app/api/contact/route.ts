import { NextResponse } from "next/server"
export async function POST(req: Request) {
	const data = await req.json()
	// Forward to CRM/email/etc.
	console.log(data)
	return NextResponse.json({ ok: true })
}
