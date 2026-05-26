import { NextResponse } from "next/server";
import {
  getApplicationsFromS3,
  saveApplicationsToS3,
} from "@/lib/s3-applications";
import type { JobApplication } from "@/types/application";

type Params = { params: Promise<{ id: string }> };

const VALID_STATUSES = ["new", "reviewed", "shortlisted", "rejected"];

export async function PATCH(req: Request, { params }: Params) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { status } = body;

    if (!status || !VALID_STATUSES.includes(status)) {
      return NextResponse.json(
        { error: "Valid status required: new, reviewed, shortlisted, rejected" },
        { status: 400 }
      );
    }

    const applications = await getApplicationsFromS3();
    const index = applications.findIndex((a) => a.id === id);
    if (index === -1) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const updated: JobApplication = {
      ...applications[index],
      status: status as JobApplication["status"],
    };
    applications[index] = updated;
    const ok = await saveApplicationsToS3(applications);
    if (!ok) return NextResponse.json({ error: "Failed to save" }, { status: 500 });
    return NextResponse.json(updated);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
