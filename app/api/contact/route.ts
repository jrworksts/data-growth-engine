import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, string>;

  if (!body.name || !body.email || !body.company || !body.message) {
    return NextResponse.json({ ok: false, message: "Missing required fields." }, { status: 400 });
  }

  return NextResponse.json({ ok: true, message: "Contact request accepted." });
}
