import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { headingStyleHeading1, paragraphStyle16px } from "@/lib/sharedStyles";

export const metadata = {
  title: "Disclaimer - NinexGroup",
  description: "Disclaimer for NinexGroup services and website",
};

export default function DisclaimerPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0A1628] to-[#1A2840] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44.27px] leading-tight sm:leading-[1.1] md:leading-[50.5px] mb-4 sm:mb-6" style={headingStyleHeading1}>
            Disclaimer
          </h1>
          <p className="text-white/80 font-lato text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Important information regarding the use of our website and services
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
                  General Information
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#1F1F1F] leading-relaxed mb-4" style={paragraphStyle16px}>
                  The information contained on this website is for general information purposes only. While we endeavor to keep the information 
                  up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, 
                  accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, 
                  or related graphics contained on the website for any purpose.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-manrope font-semibold text-[#1F1F1F] mb-4 sm:mb-6">
                  No Warranty
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#1F1F1F] leading-relaxed mb-4" style={paragraphStyle16px}>
                  Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss 
                  or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from 
                  loss of data or profits arising out of, or in connection with, the use of this website.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-manrope font-semibold text-[#1F1F1F] mb-4 sm:mb-6">
                  External Links
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#1F1F1F] leading-relaxed mb-4" style={paragraphStyle16px}>
                  Through this website you are able to link to other websites which are not under the control of NinexGroup. We have no control 
                  over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation 
                  or endorse the views expressed within them.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-manrope font-semibold text-[#1F1F1F] mb-4 sm:mb-6">
                  Professional Advice
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#1F1F1F] leading-relaxed mb-4" style={paragraphStyle16px}>
                  The information provided on this website does not constitute professional advice. You should consult with qualified professionals 
                  for advice tailored to your specific situation before making any business decisions based on the information provided on this website.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-manrope font-semibold text-[#1F1F1F] mb-4 sm:mb-6">
                  Changes to Disclaimer
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#1F1F1F] leading-relaxed mb-4" style={paragraphStyle16px}>
                  NinexGroup reserves the right to make changes to this disclaimer at any time. We encourage you to review this page periodically 
                  to stay informed about how we are protecting the information we collect.
                </p>
              </section>

              <section>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-manrope font-semibold text-[#1F1F1F] mb-4 sm:mb-6">
                  Contact Us
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#1F1F1F] leading-relaxed mb-4" style={paragraphStyle16px}>
                  If you have any questions about this disclaimer, please contact us at{" "}
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


