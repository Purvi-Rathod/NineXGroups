/**
 * Shared Tailwind class constants for consistent styling across the codebase
 * These preserve exact spacing, font sizes, colors, and line-heights
 */

// Section Padding Patterns
export const sectionPaddingStandard = "py-12 sm:py-16 md:py-20 lg:py-24";
export const sectionPaddingLarge = "py-16 md:py-20 lg:py-24";
export const sectionPaddingCompact = "py-12 sm:py-16 md:py-20";

// Horizontal Padding Patterns
export const paddingXStandard = "px-4 sm:px-6 md:px-8";
export const paddingXLarge = "px-4 sm:px-6 md:px-8 lg:px-[115px]";
export const paddingXExtraLarge = "px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24";

// Section Header Spacing
export const sectionHeaderSpacing = "text-center mb-8 sm:mb-10 md:mb-12";
export const sectionHeaderSpacingLarge = "text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16";

// Container Max Widths
export const containerStandard = "max-w-[1200px] mx-auto";
export const containerLarge = "max-w-[1440px] mx-auto";
export const containerExtraLarge = "max-w-7xl mx-auto";

// Image Card Common Classes
export const imageCardBase = "relative overflow-hidden group cursor-pointer";
export const imageCardRounded14 = "rounded-[14px]";
export const imageCardRounded1369 = "rounded-[13.69px]";
export const imageCardRounded2xl = "rounded-2xl";

// Gradient Overlays
export const gradientOverlayTop = "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent";
export const gradientOverlayTopStrong = "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent";
export const gradientOverlayTopHover = "absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/15 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-black/10 transition-all duration-300";

// Background Image Classes
export const backgroundImageCover = "absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105";
export const backgroundImageCoverNoRepeat = "absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-105";

// Note: These are string constants for Tailwind classes, not React components
// They preserve exact spacing, font sizes, colors, and line-heights as specified

// Common Button Styles
export const buttonGradientPrimary = "bg-[linear-gradient(98deg,_#12D4FF_9.71%,_#1959FA_90.29%)]";
export const buttonGradientSecondary = "bg-[linear-gradient(142deg,rgba(18,212,255,1)_0%,rgba(25,89,250,1)_100%)]";

// Common Text Styles for Image Cards
export const imageCardTextWhite = "text-white capitalize";
export const imageCardTextManrope = "font-gt-america";

// Image Card Text Overlay Styles (for Who We Are section and similar cards)
// Note: Font sizes are handled via Tailwind classes for responsiveness
export const imageCardTextOverlayStyle = {
  color: "#FFF",
  fontFamily: "var(--font-gt-america)",
  fontStyle: "normal" as const,
  fontWeight: 700,
  lineHeight: "normal" as const,
  textTransform: "capitalize" as const,
};

// Image Card Text Overlay Style with font-weight 600 (for Future Ready section and similar cards)
export const imageCardTextOverlayStyle600 = {
  color: "#FFF",
  fontFamily: "var(--font-gt-america)",
  fontStyle: "normal" as const,
  fontWeight: 600,
  lineHeight: "normal" as const,
  textTransform: "capitalize" as const,
};
export const imageCardTextOverlayStyle500 = {
  color: "#FFF",
  fontFamily: "var(--font-gt-america)",
  fontStyle: "normal" as const,
  fontWeight: 500,
  lineHeight: "normal" as const,
  textTransform: "capitalize" as const,
};

const fontGtAmerica = "var(--font-gt-america)";
const fontCanelaItalic = "var(--font-canela-italic)";

// Heading Style (for section headings and similar text)
// Note: Font sizes should use responsive Tailwind classes: text-2xl sm:text-3xl md:text-4xl lg:text-[44.27px]
export const headingStyleHeading1 = {
  color: "#000",
  fontFamily: fontCanelaItalic,
  fontStyle: "italic" as const,
  fontWeight: 400,
  textTransform: "capitalize" as const,
};
export const secondaryHeadingStyle = {
  color: "#000",
  fontFamily: fontGtAmerica,
  fontStyle: "normal" as const,
  fontWeight: 700,
  textTransform: "capitalize" as const,
};
// paragraph style
export const paragraphStyle16px = {
  color: "#000",
  fontFamily: fontGtAmerica,
  fontStyle: "normal" as const,
  fontWeight: 400,
  lineHeight: "120%" as const,
};
export const paragraphStyle20px = {
  color: "#000",
  fontFamily: fontGtAmerica,
  fontStyle: "normal" as const,
  fontWeight: 400,
  lineHeight: "120%" as const,
};

// Responsive Height Patterns for Image Cards
export const cardHeightSmall = "h-[180px] sm:h-[200px] md:h-[220px] lg:h-[241px]";
export const cardHeightMedium = "h-[200px] sm:h-[250px] md:h-[280px] lg:h-[306px]";
export const cardHeightLarge = "h-[350px] sm:h-[400px] md:h-[450px] lg:h-[501px]";

// Common Grid Patterns
export const gridResponsive2 = "grid grid-cols-1 md:grid-cols-2";
export const gridResponsive3 = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
export const gridGapStandard = "gap-4 sm:gap-5 md:gap-6";
export const gridGapLarge = "gap-4 sm:gap-6";

