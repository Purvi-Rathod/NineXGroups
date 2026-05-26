import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Insights, Updates & Stories | NineX Group",
  description:
    "Read the latest insights on branding, digital marketing, growth strategies, and business scaling from NineX Group. Expert tips and industry updates.",
  openGraph: {
    title: "Blog | NineX Group",
    description: "Insights, updates, and stories from NineX Group on branding, marketing, and growth.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | NineX Group",
    description: "Insights, updates, and stories from NineX Group.",
  },
  alternates: {
    canonical: "https://ninexgroup.com/blogs",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
