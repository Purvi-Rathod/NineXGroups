import React from "react";
import Image from "next/image";

interface ImageCardWithOverlayProps {
  image: string;
  title: string;
  titlePosition?: "top" | "bottom";
  overlayVariant?: "top" | "topStrong" | "topHover";
  rounded?: "14px" | "13.69px" | "2xl";
  height?: "small" | "medium" | "large" | string;
  width?: string;
  buttonText?: string;
  buttonVariant?: "gradient" | "outline";
  onButtonClick?: () => void;
  className?: string;
  titleClassName?: string;
  showButton?: boolean;
  children?: React.ReactNode;
}

/**
 * Reusable Image Card Component with Overlay
 * Handles common image card patterns with gradients, text overlays, and buttons
 * Preserves exact responsive behavior and styling
 */
export default function ImageCardWithOverlay({
  image,
  title,
  titlePosition = "top",
  overlayVariant = "top",
  rounded = "14px",
  height = "medium",
  width,
  buttonText,
  buttonVariant = "outline",
  onButtonClick,
  className = "",
  titleClassName = "",
  showButton = false,
  children,
}: ImageCardWithOverlayProps) {
  // Map height prop to actual classes
  const heightClasses =
    typeof height === "string" && height.includes("h-")
      ? height
      : height === "small"
      ? "h-[180px] sm:h-[200px] md:h-[220px] lg:h-[241px]"
      : height === "medium"
      ? "h-[200px] sm:h-[250px] md:h-[280px] lg:h-[306px]"
      : height === "large"
      ? "h-[350px] sm:h-[400px] md:h-[450px] lg:h-[501px]"
      : "h-[200px] sm:h-[250px] md:h-[280px] lg:h-[306px]";

  // Map rounded prop to actual classes
  const roundedClasses =
    rounded === "14px"
      ? "rounded-[14px]"
      : rounded === "13.69px"
      ? "rounded-[13.69px]"
      : rounded === "2xl"
      ? "rounded-2xl"
      : "rounded-[14px]";

  // Map overlay variant to classes
  const overlayClasses =
    overlayVariant === "top"
      ? "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
      : overlayVariant === "topStrong"
      ? "absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
      : overlayVariant === "topHover"
      ? "absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/15 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-black/10 transition-all duration-300"
      : "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent";

  // Title positioning classes
  const titleTopClasses = "absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8";
  const titleBottomClasses = "absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8";

  return (
    <div
      className={`relative ${heightClasses} ${roundedClasses} overflow-hidden shadow-card group cursor-pointer transition-transform duration-300 group-hover:scale-105 ${width || ""} ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Gradient Overlay */}
      <div className={overlayClasses} />

      {/* Title Overlay */}
      {titlePosition === "top" ? (
        <div className={titleTopClasses}>
          <h3
            className={`font-sans text-lg sm:text-xl md:text-[23.27px] font-semibold leading-[120%] text-white capitalize ${titleClassName}`}
          >
            {title}
          </h3>
        </div>
      ) : (
        <div className={titleBottomClasses}>
          <h3
            className={`font-sans text-lg sm:text-xl md:text-[25.27px] font-semibold leading-[120%] text-white capitalize whitespace-pre-line ${titleClassName}`}
          >
            {title}
          </h3>
        </div>
      )}

      {/* Button */}
      {showButton && buttonText && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onButtonClick?.();
          }}
          className={`absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 w-[160px] sm:w-[180px] md:w-[200px] h-[44px] sm:h-[50px] md:h-[54px] flex items-center justify-center gap-2 rounded-md text-white font-be-vietnam-pro text-sm sm:text-base font-semibold transition-colors ${
            buttonVariant === "gradient"
              ? "bg-[linear-gradient(142deg,rgba(18,212,255,1)_0%,rgba(25,89,250,1)_100%)] hover:opacity-90"
              : "border border-white hover:bg-white/10"
          }`}
        >
          {buttonText}
        </button>
      )}

      {/* Custom children content */}
      {children}
    </div>
  );
}

