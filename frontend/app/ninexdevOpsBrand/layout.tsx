import Contact from "@/components/sections/common/Contact";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      {/* COMMON SECTIONS */}
      <Contact />
    </>
  );
}

