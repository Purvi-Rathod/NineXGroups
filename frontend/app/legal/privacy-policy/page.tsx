import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { headingStyleHeading1, paragraphStyle16px } from "@/lib/sharedStyles";

export const metadata = {
  title: "Privacy Policy - NinexGroup",
  description: "Privacy Policy for NinexGroup services and website",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0A1628] to-[#1A2840] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44.27px] leading-tight sm:leading-[1.1] md:leading-[50.5px] mb-4 sm:mb-6" style={headingStyleHeading1}>
            Privacy Policy
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
                  1. Introduction
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#1F1F1F] leading-relaxed mb-4" style={paragraphStyle16px}>
                  NinexGroup (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-manrope font-semibold text-[#1F1F1F] mb-4 sm:mb-6">
                  2. Information We Collect
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#1F1F1F] leading-relaxed mb-4" style={paragraphStyle16px}>
                  We may collect information about you in a variety of ways. The information we may collect on the site includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg text-[#1F1F1F] ml-4" style={paragraphStyle16px}>
                  <li>Personal data such as name, email address, phone number, and mailing address</li>
                  <li>Derivative data such as IP address, browser type, and access times</li>
                  <li>Financial data such as payment information for services</li>
                  <li>Data from third parties such as social media platforms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-manrope font-semibold text-[#1F1F1F] mb-4 sm:mb-6">
                  3. How We Use Your Information
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#1F1F1F] leading-relaxed mb-4" style={paragraphStyle16px}>
                  We may use information collected about you via the site to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg text-[#1F1F1F] ml-4" style={paragraphStyle16px}>
                  <li>Create and manage your account</li>
                  <li>Process your transactions and send you related information</li>
                  <li>Email you regarding your account or order</li>
                  <li>Fulfill and manage purchases, orders, payments, and other transactions</li>
                  <li>Generate a personal profile about you to make future visits more personalized</li>
                  <li>Increase the efficiency and operation of the site</li>
                  <li>Monitor and analyze usage and trends to improve your experience</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-manrope font-semibold text-[#1F1F1F] mb-4 sm:mb-6">
                  4. Disclosure of Your Information
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#1F1F1F] leading-relaxed mb-4" style={paragraphStyle16px}>
                  We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg text-[#1F1F1F] ml-4" style={paragraphStyle16px}>
                  <li>By law or to protect rights</li>
                  <li>Business transfers (in case of merger, acquisition, or sale)</li>
                  <li>Third-party service providers who perform services for us</li>
                  <li>Marketing communications with your consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-manrope font-semibold text-[#1F1F1F] mb-4 sm:mb-6">
                  5. Security of Your Information
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#1F1F1F] leading-relaxed mb-4" style={paragraphStyle16px}>
                  We use administrative, technical, and physical security measures to help protect your personal information. While we have
                  taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security
                  measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-manrope font-semibold text-[#1F1F1F] mb-4 sm:mb-6">
                  6. Your Rights
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#1F1F1F] leading-relaxed mb-4" style={paragraphStyle16px}>
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg text-[#1F1F1F] ml-4" style={paragraphStyle16px}>
                  <li>The right to access – You have the right to request copies of your personal data</li>
                  <li>The right to rectification – You have the right to request correction of inaccurate data</li>
                  <li>The right to erasure – You have the right to request deletion of your personal data</li>
                  <li>The right to restrict processing – You have the right to request restriction of processing</li>
                  <li>The right to data portability – You have the right to request transfer of your data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-manrope font-semibold text-[#1F1F1F] mb-4 sm:mb-6">
                  7. Contact Us
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#1F1F1F] leading-relaxed mb-4" style={paragraphStyle16px}>
                  If you have questions or comments about this Privacy Policy, please contact us at{" "}
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

