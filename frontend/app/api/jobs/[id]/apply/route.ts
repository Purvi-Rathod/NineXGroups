import { NextResponse } from "next/server";
import { getJobsFromS3, saveJobsToS3 } from "@/lib/s3-jobs";
import {
  getApplicationsFromS3,
  saveApplicationsToS3,
} from "@/lib/s3-applications";
import type { JobApplication } from "@/types/application";

type Params = { params: Promise<{ id: string }> };

export async function POST(req: Request, { params }: Params) {
  try {
    const { id: jobId } = await params;
    const body = await req.json();
    const { name, email, phone, message, resumeUrl } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    const jobs = await getJobsFromS3();
    const job = jobs.find((j) => j.id === jobId);
    if (!job) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }
    if (job.status !== "Published") {
      return NextResponse.json(
        { error: "This job is not accepting applications" },
        { status: 400 }
      );
    }

    const applications = await getApplicationsFromS3();
    const applicationId = `app-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    const newApplication: JobApplication = {
      id: applicationId,
      jobId,
      name: String(name).trim(),
      email: String(email).trim(),
      phone: String(phone).trim(),
      message: message ? String(message).trim() : undefined,
      resumeUrl: resumeUrl ? String(resumeUrl).trim() : undefined,
      submittedAt: new Date().toISOString(),
      status: "new",
    };
    applications.push(newApplication);

    const saved = await saveApplicationsToS3(applications);
    if (!saved) {
      return NextResponse.json(
        { error: "Failed to save application" },
        { status: 500 }
      );
    }

    const jobIndex = jobs.findIndex((j) => j.id === jobId);
    if (jobIndex !== -1) {
      jobs[jobIndex] = {
        ...jobs[jobIndex],
        applicationCount: (jobs[jobIndex].applicationCount || 0) + 1,
        updatedAt: new Date().toISOString(),
      };
      await saveJobsToS3(jobs);
    }

    return NextResponse.json({
      ok: true,
      message: "Application submitted successfully",
      applicationId: newApplication.id,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
