import { cn } from "@/lib/utils";

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Shared max-width + horizontal padding for page sections (matches `.section-container` in globals.css).
 */
export default function SectionContainer({ children, className }: SectionContainerProps) {
  return <div className={cn("section-container", className)}>{children}</div>;
}
