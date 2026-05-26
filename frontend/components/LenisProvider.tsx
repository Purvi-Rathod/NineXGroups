"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Keeps GSAP ScrollTrigger in sync with Lenis’s virtual scroll so scrubbed
 * sections (e.g. Who We Are) don’t feel jittery or out of phase with the wheel.
 */
function LenisScrollTriggerSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const sync = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", sync);
    return () => {
      lenis.off("scroll", sync);
    };
  }, [lenis]);

  return null;
}

interface LenisProviderProps {
  children: React.ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.065,
        duration: 1.35,
        smoothWheel: true,
        autoRaf: true,
        anchors: true,
      }}
    >
      <LenisScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}
