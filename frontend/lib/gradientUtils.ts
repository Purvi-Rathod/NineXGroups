import React from "react";

/**
 * Gradient utility functions and constants
 * Centralizes repeated gradient patterns
 */

export const gradients = {
  primary: "linear-gradient(98.44deg, #12D4FF 9.71%, #1959FA 90.29%)",
  primaryAlt: "linear-gradient(98deg, #12D4FF 9.71%, #1959FA 90.29%)",
  primary142: "linear-gradient(142deg, rgba(18,212,255,1) 0%, rgba(25,89,250,1) 100%)",
  nav: "linear-gradient(96.4deg, #12D4FF 27.64%, #1959FA 73.51%)",
  navAlt: "linear-gradient(92deg, #12D4FF 22.22%, #1959FA 88.58%)",
  navVertical: "linear-gradient(180deg, #12D4FF 22.22%, #1959FA 88.58%)",
  underline: "linear-gradient(90deg, #12D4FF 3.33%, #1959FA 95.41%)",
  underlineNav: "linear-gradient(96.4deg, #12D4FF 27.64%, #1959FA 73.51%)",
  faq: "linear-gradient(90deg, rgba(18,212,255,1) 0%, rgba(25,89,250,1) 100%)",
} as const;

/**
 * Get gradient style object for inline styles
 */
export function getGradientStyle(gradient: keyof typeof gradients): React.CSSProperties {
  return {
    background: gradients[gradient],
  };
}

/**
 * Get gradient class for Tailwind (when using arbitrary values)
 */
export function getGradientClass(gradient: keyof typeof gradients): string {
  const gradientMap: Record<keyof typeof gradients, string> = {
    primary: "bg-[linear-gradient(98.44deg,_#12D4FF_9.71%,_#1959FA_90.29%)]",
    primaryAlt: "bg-[linear-gradient(98deg,_#12D4FF_9.71%,_#1959FA_90.29%)]",
    primary142: "bg-[linear-gradient(142deg,rgba(18,212,255,1)_0%,rgba(25,89,250,1)_100%)]",
    nav: "bg-[linear-gradient(96.4deg,_#12D4FF_27.64%,_#1959FA_73.51%)]",
    navAlt: "bg-[linear-gradient(92deg,_#12D4FF_22.22%,_#1959FA_88.58%)]",
    navVertical: "bg-[linear-gradient(180deg,_#12D4FF_22.22%,_#1959FA_88.58%)]",
    underline: "bg-[linear-gradient(90deg,_#12D4FF_3.33%,_#1959FA_95.41%)]",
    underlineNav: "bg-[linear-gradient(96.4deg,_#12D4FF_27.64%,_#1959FA_73.51%)]",
    faq: "bg-[linear-gradient(90deg,rgba(18,212,255,1)_0%,rgba(25,89,250,1)_100%)]",
  };
  return gradientMap[gradient];
}

