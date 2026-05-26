import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import type { JobApplication } from "@/types/application";

const APPLICATIONS_KEY = "applications/applications.json";

function getClient(): S3Client | null {
  const key = process.env.AWS_ACCESS_KEY_ID;
  const secret = process.env.AWS_SECRET_ACCESS_KEY;
  const region = process.env.AWS_REGION;
  const bucket = process.env.AWS_S3_BUCKET_NAME;
  if (!key || !secret || !region || !bucket) return null;
  return new S3Client({
    region,
    credentials: { accessKeyId: key, secretAccessKey: secret },
  });
}

function getBucket(): string {
  return process.env.AWS_S3_BUCKET_NAME || "";
}

export async function getApplicationsFromS3(): Promise<JobApplication[]> {
  const client = getClient();
  const bucket = getBucket();
  if (!client || !bucket) return [];
  try {
    const res = await client.send(
      new GetObjectCommand({ Bucket: bucket, Key: APPLICATIONS_KEY })
    );
    const body = await res.Body?.transformToString();
    if (!body) return [];
    const data = JSON.parse(body) as JobApplication[];
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export async function saveApplicationsToS3(
  applications: JobApplication[]
): Promise<boolean> {
  const client = getClient();
  const bucket = getBucket();
  if (!client || !bucket) return false;
  try {
    await client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: APPLICATIONS_KEY,
        Body: JSON.stringify(applications, null, 2),
        ContentType: "application/json",
      })
    );
    return true;
  } catch {
    return false;
  }
}
