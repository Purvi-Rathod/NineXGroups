import { NextResponse } from "next/server";
import { getApplicationsFromS3 } from "@/lib/s3-applications";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const jobId = searchParams.get("jobId");

  const applications = await getApplicationsFromS3();
  const filtered = jobId
    ? applications.filter((a) => a.jobId === jobId)
    : applications;

  const sorted = [...filtered].sort(
    (a, b) =>
      new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
  );

  return NextResponse.json(sorted);
}
