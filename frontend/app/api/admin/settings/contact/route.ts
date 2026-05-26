import { NextResponse } from "next/server";
import {
  getContactSettingsFromS3,
  saveContactSettingsToS3,
} from "@/lib/s3-settings";

export async function GET() {
  const contact = await getContactSettingsFromS3();
  return NextResponse.json(contact);
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const settings = {
      address: typeof body.address === "string" ? body.address : "",
      email: typeof body.email === "string" ? body.email : "",
      phone: typeof body.phone === "string" ? body.phone : "",
    };
    const ok = await saveContactSettingsToS3(settings);
    if (!ok) return NextResponse.json({ error: "Failed to save" }, { status: 500 });
    return NextResponse.json(settings);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
