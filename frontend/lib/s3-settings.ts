import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";

const CONTACT_KEY = "settings/contact.json";

export interface ContactSettings {
  address: string;
  email: string;
  phone: string;
}

const defaults: ContactSettings = {
  address: "211 Shangun Towen Vijay Nagar Indore 452010, India.",
  email: "support@ninexfold.con",
  phone: "+91 7049407951",
};

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

export async function getContactSettingsFromS3(): Promise<ContactSettings> {
  const client = getClient();
  const bucket = getBucket();
  if (!client || !bucket) return defaults;
  try {
    const res = await client.send(
      new GetObjectCommand({ Bucket: bucket, Key: CONTACT_KEY })
    );
    const body = await res.Body?.transformToString();
    if (!body) return defaults;
    const data = JSON.parse(body) as Partial<ContactSettings>;
    return {
      address: data.address ?? defaults.address,
      email: data.email ?? defaults.email,
      phone: data.phone ?? defaults.phone,
    };
  } catch {
    return defaults;
  }
}

export async function saveContactSettingsToS3(
  settings: ContactSettings
): Promise<boolean> {
  const client = getClient();
  const bucket = getBucket();
  if (!client || !bucket) return false;
  try {
    await client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: CONTACT_KEY,
        Body: JSON.stringify(settings, null, 2),
        ContentType: "application/json",
      })
    );
    return true;
  } catch {
    return false;
  }
}
