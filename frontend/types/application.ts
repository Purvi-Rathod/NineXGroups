export interface JobApplication {
  id: string;
  jobId: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
  resumeUrl?: string;
  submittedAt: string;
  status?: "new" | "reviewed" | "shortlisted" | "rejected";
}
