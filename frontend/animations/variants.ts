import { Variants, TargetAndTransition } from "framer-motion";

// Common transition presets
const transitionBase = {
  duration: 0.6,
  ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
};

const transitionFast = {
  duration: 0.4,
  ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
};

const transitionSlow = {
  duration: 0.8,
  ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
};

// Check for reduced motion preference
const prefersReducedMotion = typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Fade Up - Most common entrance animation
export const fadeUp: Variants = {
  hidden: {
    opacity: prefersReducedMotion ? 1 : 0,
    y: prefersReducedMotion ? 0 : 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: transitionBase,
  },
};

// Fade Up with spring - For hero headlines
export const fadeUpSpring: Variants = {
  hidden: {
    opacity: prefersReducedMotion ? 1 : 0,
    y: prefersReducedMotion ? 0 : 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1,
    },
  },
};

// Fade In - Simple opacity animation
export const fadeIn: Variants = {
  hidden: {
    opacity: prefersReducedMotion ? 1 : 0,
  },
  show: {
    opacity: 1,
    transition: transitionBase,
  },
};

// Stagger Container - For staggered children animations
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: prefersReducedMotion ? 0 : 0.2,
    },
  },
};

// Scale In - For buttons and cards
export const scaleIn: Variants = {
  hidden: {
    opacity: prefersReducedMotion ? 1 : 0,
    scale: prefersReducedMotion ? 1 : 0.9,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      ...transitionBase,
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

// Slide Left - For text blocks from left
export const slideLeft: Variants = {
  hidden: {
    opacity: prefersReducedMotion ? 1 : 0,
    x: prefersReducedMotion ? 0 : -50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: transitionBase,
  },
};

// Slide Right - For images from right
export const slideRight: Variants = {
  hidden: {
    opacity: prefersReducedMotion ? 1 : 0,
    x: prefersReducedMotion ? 0 : 50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: transitionBase,
  },
};

// Subtle fade up - For less prominent elements
export const fadeUpSubtle: Variants = {
  hidden: {
    opacity: prefersReducedMotion ? 1 : 0,
    y: prefersReducedMotion ? 0 : 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Floating animation - For background elements
export const float: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Button hover variants
export const buttonHover: TargetAndTransition = {
  scale: 1.05,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 17,
  },
};

export const buttonTap: TargetAndTransition = {
  scale: 0.95,
};

// Card hover variants
export const cardHover: TargetAndTransition = {
  y: -8,
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 20,
  },
};

// Icon rotate on hover
export const iconRotate: TargetAndTransition = {
  rotate: 5,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 15,
  },
};

// Scale and glow for CTA buttons
export const ctaButtonHover: TargetAndTransition = {
  scale: 1.08,
  boxShadow: "0 0 30px rgba(18, 212, 255, 0.5)",
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 17,
  },
};

export const ctaButtonTap: TargetAndTransition = {
  scale: 0.95,
};

// Viewport settings for scroll animations
export const viewportOnce = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -100px 0px",
};

// Bob Up - A smoother, more pronounced formal entrance
export const bobUp: Variants = {
  hidden: {
    opacity: prefersReducedMotion ? 1 : 0,
    y: prefersReducedMotion ? 0 : 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // easeOutQuart for formal feel
    },
  },
};

// Stagger Fade Up - For container elements
export const staggerFadeUp: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Subtle Scale - For items and images
export const subtleScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};
