import { NextResponse } from "next/server";
import { getJobsFromS3 } from "@/lib/s3-jobs";
import type { Job } from "@/lib/jobs/jobTypes";
import type { JobPost } from "@/types/admin";
import type { JobCategory, WorkMode, EmploymentType } from "@/lib/jobs/jobTypes";

const CATEGORIES: JobCategory[] = [
  "engineering",
  "marketing",
  "operations",
  "customer-support",
  "design",
  "sales",
  "hr",
  "finance",
];
const WORK_MODES: WorkMode[] = ["remote", "hybrid", "onsite"];
const EMPLOYMENT_TYPES: EmploymentType[] = ["full-time", "part-time", "contract"];

function toJobCategory(s: string): JobCategory {
  const lower = s.toLowerCase().replace(/\s+/g, "-");
  if (CATEGORIES.includes(lower as JobCategory)) return lower as JobCategory;
  if (lower.includes("engineer") || lower.includes("tech")) return "engineering";
  if (lower.includes("market")) return "marketing";
  if (lower.includes("design")) return "design";
  if (lower.includes("support") || lower.includes("customer")) return "customer-support";
  if (lower.includes("sale")) return "sales";
  if (lower.includes("hr") || lower.includes("human")) return "hr";
  if (lower.includes("finance") || lower.includes("account")) return "finance";
  if (lower.includes("operation")) return "operations";
  return "engineering";
}

function toWorkMode(s: string): WorkMode {
  const lower = s?.toLowerCase() || "";
  return WORK_MODES.includes(lower as WorkMode) ? (lower as WorkMode) : "hybrid";
}

function toEmploymentType(s: string): EmploymentType {
  const lower = s?.toLowerCase() || "";
  if (EMPLOYMENT_TYPES.includes(lower as EmploymentType)) return lower as EmploymentType;
  if (lower === "internship") return "contract";
  return "full-time";
}

function toPublicJob(post: JobPost, includeDetail = false): Job {
  const base: Job = {
    id: post.id,
    title: post.title,
    department: post.department,
    category: toJobCategory(post.category),
    location: {
      city: post.location?.city ?? "",
      state: (post.location as { state?: string })?.state ?? "",
      country: post.location?.country ?? "",
      latitude: post.location?.latitude ?? 0,
      longitude: post.location?.longitude ?? 0,
    },
    workMode: toWorkMode(post.workMode),
    employmentType: toEmploymentType(post.employmentType),
    description: post.summary || post.description?.replace(/<[^>]+>/g, "") || "",
    postedDate: post.postedAt ? post.postedAt.slice(0, 10) : new Date().toISOString().slice(0, 10),
    salary: post.salary
      ? {
          min: post.salary.min,
          max: post.salary.max,
          currency: post.salary.currency,
        }
      : undefined,
  };
  if (includeDetail) {
    return {
      ...base,
      descriptionHtml: post.description || undefined,
      skills: post.skills ?? [],
      responsibilities: post.responsibilities ?? [],
      requirements: post.requirements ?? [],
    };
  }
  return base;
}

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: Params) {
  const { id } = await params;
  const all = await getJobsFromS3();
  const post = all.find((j) => j.id === id);
  if (!post || post.status !== "Published") {
    return NextResponse.json({ error: "Job not found" }, { status: 404 });
  }
  return NextResponse.json(toPublicJob(post, true));
}
