import { NextResponse } from "next/server";
import { uploadBlogImage } from "@/lib/s3-blogs";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    if (!file || !file.size) {
      return NextResponse.json({ error: "No file" }, { status: 400 });
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    const contentType = file.type || "image/jpeg";
    const filename = file.name || "image";
    const url = await uploadBlogImage(buffer, contentType, filename);
    if (!url) return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    return NextResponse.json({ url });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
