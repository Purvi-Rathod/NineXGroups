'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronDown } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

type ScrollTriggerInstance = ReturnType<typeof ScrollTrigger.getAll>[number];

interface Card {
  id: number;
  eyebrow: string;
  titlePart1: string;
  titlePart2: string;
  titlePart3?: string;
  description: string;
  image: string;
  buttonText: string;
  accent: string;
}

const CARDS: Card[] = [
  {
    id: 1,
    eyebrow: 'NineXFold',
    titlePart1: 'NineXFold',
    titlePart2: 'building brands',
    titlePart3: 'for the Future',
    description: 'NineXFold is building brands for the future. It is your vision. It is amplified.',
    image: "/images/logo/ninexfoldLogo.png",
    buttonText: 'EXPLORE NOW',
    accent: "from-orange-400 to-amber-500",
  },
  {
    id: 2,
    eyebrow: 'NineXConnect',
    titlePart1: 'NineXConnect ',
    titlePart2: 'Building Connections',
    titlePart3: 'turning conversations',
    description: 'NineXConnect is turning conversations into customers. It is reach. It is convert. It is grow.',
    image: "/images/logo/ninexconnectlogo.png",
    buttonText: 'JOIN OUR TEAM',
    accent: "from-cyan-400 to-blue-500",
  },
  {
    id: 3,
    eyebrow: 'NineXDevOps',
    titlePart1: 'NineXDevOps',
    titlePart2: 'Engineering the Backbone',
    titlePart3: 'engineering the backbone',
    description: 'NineXDevOps is engineering the backbone of scalable growth. It is built to perform.',
    image: "/images/logo/ninexdevopsLogo.png",
    buttonText: 'LEARN MORE',
    accent: "from-pink-500 to-violet-600",
  },

  {
    id: 4,
    eyebrow: 'NineXScale',
    titlePart1: 'NineXScale',
    titlePart2: 'Designed for Growth',
    titlePart3: 'designed for growth',
    description: 'NineXScale is designed for growth. It is built for what\'s next. It is scale without limits.',
    image: "/images/logo/ninexscaleLogo.png",
    buttonText: 'LEARN MORE',
    accent: "from-purple-500 to-fuchsia-600",
  },
];

export default function WhoWeAreSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const activeSlideRef = useRef(0);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !textContainerRef.current || !imageContainerRef.current) {
      return;
    }

    const textElements = textContainerRef.current.querySelectorAll('[data-card]');
    const imageElements = imageContainerRef.current.querySelectorAll('[data-card]');

    // Initialize all cards as hidden except first
    gsap.set(textElements, { opacity: 0, y: 30 });
    gsap.set(imageElements, { opacity: 0, scale: 0.95, y: 30 });
    gsap.set(textElements[0], { opacity: 1, y: 0 });
    gsap.set(imageElements[0], { opacity: 1, scale: 1, y: 0 });

    // Create a timeline for all animations
    const tl = gsap.timeline({ paused: true });

    /** Longer scroll distance + softer motion = smoother scrub (pairs with Lenis + ST sync). */
    const cardStep = 0.82;
    const cardDuration = 0.68;
    const scrollPxPerUnit = 88;

    const easeTransition = 'power3.inOut';

    // Create smooth animations for each card transition
    CARDS.forEach((_, index) => {
      if (index < CARDS.length - 1) {
        const duration = cardDuration;
        const t = index * cardStep;

        // Fade out and slide up current text
        tl.to(
          textElements[index],
          {
            opacity: 0,
            y: -28,
            duration,
            ease: easeTransition,
          },
          t
        );

        // Fade out and scale down current image
        tl.to(
          imageElements[index],
          {
            opacity: 0,
            scale: 0.94,
            y: -22,
            duration,
            ease: easeTransition,
          },
          t
        );

        // Fade in and slide up next text
        tl.to(
          textElements[index + 1],
          {
            opacity: 1,
            y: 0,
            duration,
            ease: easeTransition,
          },
          t
        );

        // Fade in and scale next image
        tl.to(
          imageElements[index + 1],
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration,
            ease: easeTransition,
          },
          t
        );
      }
    });

    const totalDuration = (CARDS.length - 1) * cardStep + cardDuration;
    const scrollHeight = Math.max(120, Math.round(totalDuration * scrollPxPerUnit));

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'center center',
      end: `+=${scrollHeight}`,
      pin: true,
      /** Higher value = more inertial smoothing on the scrub (seconds of lag). */
      scrub: 2.25,
      anticipatePin: 1,
      animation: tl,
      invalidateOnRefresh: true,
      onUpdate: (self: ScrollTriggerInstance) => {
        const next = Math.min(
          Math.floor(self.progress * CARDS.length + 0.001),
          CARDS.length - 1
        );
        if (next !== activeSlideRef.current) {
          activeSlideRef.current = next;
          setActiveSlide(next);
        }
      },
    });

    const refresh = () => scrollTrigger.refresh();
    window.addEventListener('resize', refresh);
    window.visualViewport?.addEventListener('resize', refresh);

    const rafId = requestAnimationFrame(() => {
      scrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', refresh);
      window.visualViewport?.removeEventListener('resize', refresh);
      scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <section id="who" className="w-full bg-white pb-0">
      <div className="section-container pb-12 pt-18 md:pt-24 lg:pt-24">
        <SectionHeader
          title="Who We Are — Building Tomorrow"
          description="Building businesses that create impact—for people, performance, and the future."
          className="!mb-2 sm:!mb-3 md:!mb-4"
        />
      </div>

      <div
        ref={containerRef}
        className="relative w-full overflow-x-hidden bg-white py-5 sm:py-6 md:py-8"
      >
        {/* ambient */}
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          aria-hidden="true"
        >
          <div className="absolute -right-20 -top-20 h-[min(55vh,420px)] w-[min(55vh,420px)]  bg-[#12D4FF]/20 blur-[80px] md:right-0 md:top-1/4" />
          <div className="absolute bottom-0 left-1/4 h-[min(40vh,320px)] w-[min(40vh,320px)]  bg-[#1959FA]/15 blur-[90px]" />
        </div>

        <div className="section-container relative z-[1] grid grid-cols-1 content-start gap-4 pt-0 pb-4 sm:gap-5 sm:pb-5 md:grid-cols-2 md:items-start md:gap-8 md:pb-0 lg:gap-10">
          {/* soft column divider (desktop) */}
          <div
            className="pointer-events-none absolute left-1/2 top-[12%] hidden h-[76%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#0B1A3A]/[0.08] to-transparent md:block"
            aria-hidden="true"
          />

          {/* Text — desktop left */}
          <div
            ref={textContainerRef}
            className="relative z-10 order-2 flex min-h-0 w-full flex-col pr-0 md:order-1 md:max-w-none md:pr-6 lg:pr-10"
          >
            <div className="relative w-full min-h-[min(48vh,380px)] sm:min-h-[min(52vh,420px)] md:min-h-[min(62vh,540px)]">
              {CARDS.map((card, index) => (
                <div
                  key={card.id}
                  data-card={index}
                  className="absolute inset-0 flex min-h-full flex-col items-stretch overflow-y-auto overscroll-y-contain pb-4 pt-0 md:overflow-visible md:pb-4 md:pr-2"
                >
                  <div className="flex h-full min-h-0 w-full max-w-[34rem] flex-col">
                    <h2 className="mb-3 text-[clamp(1.375rem,4vw+0.65rem,3.25rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0B1A3A] sm:mb-5 sm:leading-[1.07]">
                      <span className="text-[#0B1A3A]">{card.titlePart1}</span>
                      <br />
                      <span className={`bg-gradient-to-r ${card.accent} bg-clip-text text-transparent font-playfair tracking-[-0.005em] italic`}>
                        {card.titlePart2}
                      </span>
                      <br />
                      <span className="text-[#0B1A3A]">{card.titlePart3}</span>
                    </h2>
                    <p className="mb-5 max-w-[36rem] text-[0.875rem] leading-[1.65] tracking-[-0.015em] text-[#0B1A3A]/68 sm:mb-7 sm:text-[16px] sm:leading-[1.7] md:text-[17px]">
                      {card.description}
                    </p>
                    <button
                      type="button"
                      className="group mt-auto inline-flex min-h-[44px] shrink-0 items-center gap-2 self-start bg-[#0B1A3A] px-5 py-2.5 text-[12px] font-medium tracking-[-0.01em] text-white transition-all duration-300 hover:bg-[#0f2247] sm:px-6 sm:py-3 sm:text-[14px]"
                    >
                      {card.buttonText}
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                        strokeWidth={2}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image — full column width on desktop; aligned with text block */}
          <div
            ref={imageContainerRef}
            className="relative z-0 order-1 w-full shrink-0 md:order-2 md:min-h-0 md:self-start"
          >
            <div className="relative mx-auto aspect-[5/4] max-h-[min(32vh,240px)] w-full min-[400px]:max-h-[min(34vh,270px)] sm:aspect-[4/3] sm:max-h-[min(38vh,300px)] md:aspect-[3/4] md:max-h-[min(62vh,540px)] md:w-full md:max-w-none">
              {CARDS.map((card, index) => (
                <div
                  key={card.id}
                  data-card={index}
                  className="absolute inset-0 flex items-stretch justify-stretch"
                >
                  <div className="relative h-full w-full overflow-hidden  bg-[#0a1628] ring-1 ring-black/[0.04] ring-inset ring-white/10">
                    <div
                      className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-white/[0.12] via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element -- dynamic remote URLs */}
                    <img
                      src={card.image}
                      alt={card.titlePart1}
                      className="absolute inset-0 z-0 h-full w-full object-cover object-center"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-tr from-[#0B1A3A]/30 via-transparent to-sky-500/5 opacity-90 md:opacity-85"
                      aria-hidden="true"
                    />
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[38%] bg-gradient-to-t from-[#0B1A3A]/45 to-transparent md:from-[#0B1A3A]/35"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: scroll cue + dots — in document flow so they never overlap the CTA */}
        <div className="section-container relative z-20 flex flex-col items-center gap-2.5 pb-6 pt-1 sm:gap-3 sm:pb-8 md:hidden pointer-events-none">
          {/* <div className="flex gap-1.5">
            {CARDS.map((_, i) => (
              <span
                key={i}
                className={`h-1 transition-all duration-500 ${
                  i === activeSlide
                    ? 'w-5 bg-gradient-to-r from-[#12D4FF] to-[#1959FA]'
                    : 'w-1 bg-[#0B1A3A]/25'
                }`}
              />
            ))}
          </div> */}
          <div className="flex items-center gap-2 rounded-md border border-[#0B1A3A]/10 bg-white/80 px-3 py-1.5 backdrop-blur-md sm:px-3.5 sm:py-2">
            {/* <span className="text-[11px] font-medium tracking-[-0.01em] text-[#0B1A3A]/65 sm:text-[12px]">
              Scroll
            </span> */}
            <ChevronDown
              className="h-3.5 w-3.5 shrink-0 text-[#1959FA] motion-safe:animate-bounce sm:h-4 sm:w-4"
              strokeWidth={2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
