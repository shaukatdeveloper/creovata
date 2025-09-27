import { NextResponse } from "next/server"

export async function POST(req: Request) {
	const form = await req.formData()
	const file = form.get("resume") as File | null
	// Store file to disk/object storage in production
	if (!file) return NextResponse.json({ error: "Missing resume" }, { status: 400 })
	// Example: read buffer
	await file.arrayBuffer()
	// Forward or persist as needed
	return NextResponse.json({ ok: true })
}