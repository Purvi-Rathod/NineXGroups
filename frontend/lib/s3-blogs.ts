import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { BlogPost } from "@/types/blog";

const BLOGS_KEY = "blogs/blogs.json";
const BLOG_IMAGES_PREFIX = "blogs/images/";

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

export async function getBlogsFromS3(): Promise<BlogPost[]> {
  const client = getClient();
  const bucket = getBucket();
  if (!client || !bucket) return [];
  try {
    const res = await client.send(
      new GetObjectCommand({ Bucket: bucket, Key: BLOGS_KEY })
    );
    const body = await res.Body?.transformToString();
    if (!body) return [];
    const data = JSON.parse(body) as BlogPost[];
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export async function saveBlogsToS3(blogs: BlogPost[]): Promise<boolean> {
  const client = getClient();
  const bucket = getBucket();
  if (!client || !bucket) return false;
  try {
    await client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: BLOGS_KEY,
        Body: JSON.stringify(blogs, null, 2),
        ContentType: "application/json",
      })
    );
    return true;
  } catch {
    return false;
  }
}

export async function uploadBlogImage(
  file: Buffer,
  contentType: string,
  filename: string
): Promise<string | null> {
  const client = getClient();
  const bucket = getBucket();
  if (!client || !bucket) return null;
  const key = `${BLOG_IMAGES_PREFIX}${Date.now()}-${filename.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
  try {
    await client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: file,
        ContentType: contentType,
      })
    );
    const region = process.env.AWS_REGION || "eu-north-1";
    return `https://${bucket}.s3.${region}.amazonaws.com/${key}`;
  } catch {
    return null;
  }
}

export async function deleteBlogImage(key: string): Promise<boolean> {
  const client = getClient();
  const bucket = getBucket();
  if (!client || !bucket) return false;
  try {
    await client.send(new DeleteObjectCommand({ Bucket: bucket, Key: key }));
    return true;
  } catch {
    return false;
  }
}
