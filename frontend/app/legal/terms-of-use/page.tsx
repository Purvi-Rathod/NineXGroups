import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { headingStyleHeading1, paragraphStyle16px } from "@/lib/sharedStyles";

export const metadata = {
  title: "Terms of Use - NinexGroup",
  description: "Terms of Use for NinexGroup services and website",
};

export default function TermsOfUsePage() {
  return (
    <main className="bg-white min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0A1628] to-[#1A2840] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44.27px] leading-tight sm:leading-[1.1] md:leading-[50.5px] mb-4 sm:mb-6" style={headingStyleHeading1}>
            Terms of Use
          </h1>
          <p className="text-white/80 font-lato text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Last updated: December 28, 2024
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-6 sm:space-y-8">
              <section>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-manrope font-semibold text-[#1F1F1F] mb-4 sm:mb-6">
                  1. Acceptance of Terms
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#1F1F1F] leading-relaxed mb-4" style={paragraphStyle16px}>
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-manrope font-semibold text-[#1F1F1F] mb-4 sm:mb-6">
                  2. Use License
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#1F1F1F] leading-relaxed mb-4" style={paragraphStyle16px}>
                  Permission is granted to temporarily download one copy of the materials on NinexGroup&apos;s website for personal,
                  non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg text-[#1F1F1F] ml-4" style={paragraphStyle16px}>
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-manrope font-semibold text-[#1F1F1F] mb-4 sm:mb-6">
                  3. Disclaimer
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#1F1F1F] leading-relaxed mb-4" style={paragraphStyle16px}>
                  The materials on NinexGroup&apos;s website are provided on an &apos;as is&apos; basis. NinexGroup makes no warranties, expressed or implied,
                  and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability,
                  fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-manrope font-semibold text-[#1F1F1F] mb-4 sm:mb-6">
                  4. Limitations
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#1F1F1F] leading-relaxed mb-4" style={paragraphStyle16px}>
                  In no event shall NinexGroup or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit,
                  or due to business interruption) arising out of the use or inability to use the materials on NinexGroup&apos;s website, even if NinexGroup or
                  a NinexGroup authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-manrope font-semibold text-[#1F1F1F] mb-4 sm:mb-6">
                  5. Revisions and Errata
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#1F1F1F] leading-relaxed mb-4" style={paragraphStyle16px}>
                  The materials appearing on NinexGroup&apos;s website could include technical, typographical, or photographic errors.
                  NinexGroup does not warrant that any of the materials on its website are accurate, complete, or current.
                  NinexGroup may make changes to the materials contained on its website at any time without notice.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-manrope font-semibold text-[#1F1F1F] mb-4 sm:mb-6">
                  6. Contact Information
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#1F1F1F] leading-relaxed mb-4" style={paragraphStyle16px}>
                  If you have any questions about these Terms of Use, please contact us at{" "}
                  <a href="/legal/contact-us" className="text-[#12D4FF] hover:text-[#1959FA] transition-colors">
                    Contact Us
                  </a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

