import { NextResponse } from "next/server";
import { getJobsFromS3, saveJobsToS3 } from "@/lib/s3-jobs";
import type { JobPost } from "@/types/admin";

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: Params) {
  const { id } = await params;
  const jobs = await getJobsFromS3();
  const job = jobs.find((j) => j.id === id);
  if (!job) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(job);
}

export async function PUT(req: Request, { params }: Params) {
  try {
    const { id } = await params;
    const body = await req.json();
    const jobs = await getJobsFromS3();
    const index = jobs.findIndex((j) => j.id === id);
    if (index === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
    const existing = jobs[index];
    const updated: JobPost = {
      ...existing,
      ...body,
      id: existing.id,
      postedAt: body.postedAt ?? existing.postedAt,
      updatedAt: new Date().toISOString(),
      applicationCount: body.applicationCount ?? existing.applicationCount,
      views: body.views ?? existing.views,
      location: body.location
        ? {
            ...existing.location,
            ...body.location,
          }
        : existing.location,
    };
    jobs[index] = updated;
    const ok = await saveJobsToS3(jobs);
    if (!ok) return NextResponse.json({ error: "Failed to save" }, { status: 500 });
    return NextResponse.json(updated);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: Params) {
  try {
    const { id } = await params;
    const jobs = await getJobsFromS3();
    const filtered = jobs.filter((j) => j.id !== id);
    if (filtered.length === jobs.length)
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    const ok = await saveJobsToS3(filtered);
    if (!ok) return NextResponse.json({ error: "Failed to save" }, { status: 500 });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
