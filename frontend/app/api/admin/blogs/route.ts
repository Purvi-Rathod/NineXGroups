import { NextResponse } from "next/server";
import { getBlogsFromS3 } from "@/lib/s3-blogs";

export async function GET() {
  const blogs = await getBlogsFromS3();
  const sorted = [...blogs].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
  return NextResponse.json(sorted);
}
