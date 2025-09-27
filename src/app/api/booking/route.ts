import { NextResponse } from "next/server"

export async function POST(req: Request) {
	const data = await req.json()
	// Persist or notify
	console.log(data)
	return NextResponse.json({ ok: true })
}
