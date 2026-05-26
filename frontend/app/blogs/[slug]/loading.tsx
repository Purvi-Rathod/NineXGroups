import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export default function BlogLoading() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#f8fafc] pt-20 pb-16">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 animate-pulse">
          <div className="h-6 w-24 bg-slate-200 rounded mb-8" />
          <div className="h-10 bg-slate-200 rounded w-4/5 mb-4" />
          <div className="h-4 bg-slate-100 rounded w-48 mb-8" />
          <div className="aspect-video bg-slate-200 rounded-2xl mb-8 w-full" />
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-4 bg-slate-100 rounded w-full" />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
