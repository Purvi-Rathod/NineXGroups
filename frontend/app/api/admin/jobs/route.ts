import { NextResponse } from "next/server";
import { getJobsFromS3, saveJobsToS3 } from "@/lib/s3-jobs";
import type { JobPost } from "@/types/admin";

export async function GET() {
  const jobs = await getJobsFromS3();
  return NextResponse.json(jobs);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const jobs = await getJobsFromS3();
    const now = new Date().toISOString();
    const id = body.id || `job-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    const newJob: JobPost = {
      id,
      title: body.title ?? "",
      department: body.department ?? "",
      category: body.category ?? "Engineering",
      location: {
        city: body.location?.city ?? "",
        country: body.location?.country ?? "India",
        latitude: body.location?.latitude,
        longitude: body.location?.longitude,
        address: body.location?.address,
      },
      workMode: body.workMode ?? "Hybrid",
      employmentType: body.employmentType ?? "Full-time",
      experienceRange: body.experienceRange ?? { min: 0, max: 10 },
      salary: body.salary ?? {
        min: 0,
        max: 0,
        currency: "INR",
        period: "Yearly",
      },
      summary: body.summary ?? "",
      description: body.description ?? "",
      responsibilities: Array.isArray(body.responsibilities) ? body.responsibilities : [],
      requirements: Array.isArray(body.requirements) ? body.requirements : [],
      skills: Array.isArray(body.skills) ? body.skills : [],
      status: body.status ?? "Draft",
      postedAt: now,
      updatedAt: now,
      applicationCount: 0,
      views: 0,
    };
    jobs.unshift(newJob);
    const ok = await saveJobsToS3(jobs);
    if (!ok) return NextResponse.json({ error: "Failed to save" }, { status: 500 });
    return NextResponse.json(newJob);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
