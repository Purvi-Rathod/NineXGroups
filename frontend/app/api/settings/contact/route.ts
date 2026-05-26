import { NextResponse } from "next/server";
import { getContactSettingsFromS3 } from "@/lib/s3-settings";

export async function GET() {
  const contact = await getContactSettingsFromS3();
  return NextResponse.json(contact);
}
