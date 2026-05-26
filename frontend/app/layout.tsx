import "./globals.css";
import "leaflet/dist/leaflet.css";
import "lenis/dist/lenis.css";

import LenisProvider from "@/components/LenisProvider";

// IMPORT NAVBAR & FOOTER
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "NineXgroup - Business Growth Simplified",
  description:
    "We power branding, technology, operations & global scaling so you can focus on growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="pt-16 md:pt-[72px] overflow-x-hidden">
        <LenisProvider>

          {/* FIXED NAVBAR */}
          <Navigation />

          {/* PAGE CONTENT */}
          <main>{children}</main>

          {/* FOOTER */}
          <Footer />

        </LenisProvider>
      </body>
    </html>
  );
}