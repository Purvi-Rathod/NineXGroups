import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { headingStyleHeading1, paragraphStyle16px } from "@/lib/sharedStyles";

export const metadata = {
  title: "Sitemap - NinexGroup",
  description: "Sitemap for NinexGroup website",
};

const siteMapLinks = {
  main: [
    { name: "Home", href: "/" },
    { name: "Who We Are", href: "/ninexFold" },
    { name: "What We Do", href: "/ninexFold" },
    { name: "Careers", href: "/ninexFold" },
    { name: "Contact", href: "/legal/contact-us" },
  ],
  brands: [
    { name: "NinexFold", href: "/ninexFold" },
    { name: "NinexConnect", href: "/ninexConnectBrand" },
    { name: "NinexDevOps", href: "/ninexdevOpsBrand" },
    { name: "NinexScale", href: "/ninexscaleBrand" },
  ],
  services: [
    { name: "NinexFold Services", href: "/ninexFold/ninexfoldService" },
    { name: "NinexConnect Services", href: "/ninexconnectService" },
    { name: "NinexDevOps Services", href: "/ninexDevOpsService" },
    { name: "NinexScale Services", href: "/ninexscaleService" },
  ],
  ninexFold: [
    { name: "Global Presence", href: "/ninexFold/global-presence" },
    { name: "Hospitality", href: "/ninexFold/hospitality" },
    { name: "Our Brands", href: "/ninexFold/our-brands" },
  ],
  legal: [
    { name: "Terms of Use", href: "/legal/terms-of-use" },
    { name: "Disclaimer", href: "/legal/disclaimer" },
    { name: "Privacy Policy", href: "/legal/privacy-policy" },
    { name: "Sitemap", href: "/legal/sitemap" },
    { name: "Contact Us", href: "/legal/contact-us" },
  ],
};

export default function SitemapPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0A1628] to-[#1A2840] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44.27px] leading-tight sm:leading-[1.1] md:leading-[50.5px] mb-4 sm:mb-6" style={headingStyleHeading1}>
            Sitemap
          </h1>
          <p className="text-white/80 font-lato text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Find all pages and sections of our website
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {/* Main Pages */}
            <div>
              <h2 className="text-xl sm:text-2xl font-manrope font-semibold text-[#1F1F1F] mb-4 sm:mb-6">
                Main Pages
              </h2>
              <ul className="space-y-3">
                {siteMapLinks.main.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm sm:text-base md:text-lg text-[#1F1F1F] hover:text-[#12D4FF] transition-colors"
                      style={paragraphStyle16px}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Brands */}
            <div>
              <h2 className="text-xl sm:text-2xl font-manrope font-semibold text-[#1F1F1F] mb-4 sm:mb-6">
                Our Brands
              </h2>
              <ul className="space-y-3">
                {siteMapLinks.brands.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm sm:text-base md:text-lg text-[#1F1F1F] hover:text-[#12D4FF] transition-colors"
                      style={paragraphStyle16px}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-xl sm:text-2xl font-manrope font-semibold text-[#1F1F1F] mb-4 sm:mb-6">
                Services
              </h2>
              <ul className="space-y-3">
                {siteMapLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm sm:text-base md:text-lg text-[#1F1F1F] hover:text-[#12D4FF] transition-colors"
                      style={paragraphStyle16px}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* NinexFold Pages */}
            <div>
              <h2 className="text-xl sm:text-2xl font-manrope font-semibold text-[#1F1F1F] mb-4 sm:mb-6">
                NinexFold
              </h2>
              <ul className="space-y-3">
                {siteMapLinks.ninexFold.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm sm:text-base md:text-lg text-[#1F1F1F] hover:text-[#12D4FF] transition-colors"
                      style={paragraphStyle16px}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Pages */}
            <div>
              <h2 className="text-xl sm:text-2xl font-manrope font-semibold text-[#1F1F1F] mb-4 sm:mb-6">
                Legal & Information
              </h2>
              <ul className="space-y-3">
                {siteMapLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm sm:text-base md:text-lg text-[#1F1F1F] hover:text-[#12D4FF] transition-colors"
                      style={paragraphStyle16px}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


