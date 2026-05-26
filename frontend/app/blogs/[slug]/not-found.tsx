import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export default function BlogNotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#f8fafc] pb-16 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-slate-800 mb-2">Post not found</h2>
          <p className="text-slate-500 mb-6">This post may have been removed or the link is incorrect.</p>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-white bg-gradient-to-r from-[#12D4FF] to-[#1959FA] hover:opacity-90"
          >
            Back to Blog
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
