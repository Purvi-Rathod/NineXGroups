'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

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
    eyebrow: 'Branding & Marketing',
    titlePart1: 'NineXFold',
    titlePart2: 'building brands',
    titlePart3: 'for the Future',
    description: 'NineXFold is building brands for the future. It is your vision. It is amplified.',
    image: '/images/logo/ninexfoldLogo.png',
    buttonText: 'EXPLORE NOW',
    accent: 'from-orange-400 to-amber-500',
  },
  {
    id: 2,
    eyebrow: 'Sales & CX',
    titlePart1: 'NineXConnect',
    titlePart2: 'turning conversations',
    titlePart3: 'into Customers',
    description: 'NineXConnect is turning conversations into customers. It is reach. It is convert. It is grow.',
    image: '/images/logo/ninexconnectlogo.png',
    buttonText: 'JOIN OUR TEAM',
    accent: 'from-cyan-400 to-blue-500',
  },
  {
    id: 3,
    eyebrow: 'Technology',
    titlePart1: 'NineXDevOps',
    titlePart2: 'engineering the backbone',
    titlePart3: 'of Scalable Growth',
    description: 'NineXDevOps is engineering the backbone of scalable growth. It is built to perform.',
    image: '/images/logo/ninexdevopsLogo.png',
    buttonText: 'LEARN MORE',
    accent: 'from-pink-500 to-violet-600',
  },
  {
    id: 4,
    eyebrow: 'Growth Strategy',
    titlePart1: 'NineXScale',
    titlePart2: 'designed for growth',
    titlePart3: 'without Limits',
    description: "NineXScale is designed for growth. It is built for what's next. It is scale without limits.",
    image: '/images/logo/ninexscaleLogo.png',
    buttonText: 'LEARN MORE',
    accent: 'from-purple-500 to-fuchsia-600',
  },
];

export default function WhoWeAreSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const stRef = useRef<ScrollTrigger | null>(null);
  const activeSlideRef = useRef(0);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Pinned crossfade — desktop only. Mobile uses native stacked scroll.
    mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
      if (!containerRef.current || !textContainerRef.current || !imageContainerRef.current) {
        return;
      }

      const textElements = textContainerRef.current.querySelectorAll('[data-card]');
      const imageElements = imageContainerRef.current.querySelectorAll('[data-card]');

      gsap.set(textElements, { opacity: 0, y: 30 });
      gsap.set(imageElements, { opacity: 0, scale: 0.95, y: 30 });
      gsap.set(textElements[0], { opacity: 1, y: 0 });
      gsap.set(imageElements[0], { opacity: 1, scale: 1, y: 0 });

      const tl = gsap.timeline({ paused: true });

      const cardStep = 0.82;
      const cardDuration = 0.68;
      const scrollPxPerUnit = 88;
      const easeTransition = 'power3.inOut';

      CARDS.forEach((_, index) => {
        if (index < CARDS.length - 1) {
          const t = index * cardStep;

          tl.to(textElements[index], { opacity: 0, y: -28, duration: cardDuration, ease: easeTransition }, t);
          tl.to(imageElements[index], { opacity: 0, scale: 0.94, y: -22, duration: cardDuration, ease: easeTransition }, t);
          tl.to(textElements[index + 1], { opacity: 1, y: 0, duration: cardDuration, ease: easeTransition }, t);
          tl.to(imageElements[index + 1], { opacity: 1, scale: 1, y: 0, duration: cardDuration, ease: easeTransition }, t);
        }
      });

      const totalDuration = (CARDS.length - 1) * cardStep + cardDuration;
      const scrollHeight = Math.max(120, Math.round(totalDuration * scrollPxPerUnit));

      const scrollTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'center center',
        end: `+=${scrollHeight}`,
        pin: true,
        scrub: 2.25,
        anticipatePin: 1,
        animation: tl,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
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

      stRef.current = scrollTrigger;

      const rafId = requestAnimationFrame(() => scrollTrigger.refresh());

      return () => {
        cancelAnimationFrame(rafId);
        scrollTrigger.kill();
        tl.kill();
        stRef.current = null;
        gsap.set([...textElements, ...imageElements], { clearProps: 'all' });
      };
    });

    return () => mm.revert();
  }, []);

  // Click a dot → scroll to that card's position in the pinned range
  const jumpToSlide = (index: number) => {
    const st = stRef.current;
    if (!st) return;
    const progress = CARDS.length > 1 ? index / (CARDS.length - 1) : 0;
    const y = st.start + (st.end - st.start) * progress;
    window.scrollTo({ top: y + 1, behavior: 'smooth' });
  };

  return (
    <section id="who" className="w-full bg-white pb-0">
      <div className="section-container pb-8 pt-18 md:pb-12 md:pt-24">
        <SectionHeader
          title="Who We Are — Building Tomorrow"
          description="Building businesses that create impact—for people, performance, and the future."
          className="!mb-2 sm:!mb-3 md:!mb-4"
        />
      </div>

      {/* ───────── MOBILE: stacked cards, native scroll ───────── */}
      <div className="md:hidden">
        <div className="section-container flex flex-col gap-10 pb-12">
          {CARDS.map((card) => (
            <article key={card.id} className="flex flex-col">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0a1628] ring-1 ring-black/[0.04]">
                <div
                  className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-white/[0.12] via-transparent to-transparent"
                  aria-hidden="true"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image}
                  alt={card.titlePart1}
                  loading="lazy"
                  className="absolute inset-0 z-0 h-full w-full object-cover object-center"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[38%] bg-gradient-to-t from-[#0B1A3A]/45 to-transparent"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1959FA]">
                {card.eyebrow}
              </p>

              <h3 className="mt-2 text-[clamp(1.5rem,6.5vw,2rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0B1A3A]">
                {card.titlePart1}{' '}
                <span className={`bg-gradient-to-r ${card.accent} bg-clip-text text-transparent`}>
                  {card.titlePart2}
                </span>{' '}
                {card.titlePart3}
              </h3>

              <p className="mt-3 text-[14px] leading-[1.65] tracking-[-0.01em] text-[#0B1A3A]/70">
                {card.description}
              </p>

              <button
                type="button"
                className="group mt-5 inline-flex min-h-[44px] items-center gap-2 self-start bg-[#0B1A3A] px-5 py-2.5 text-[12px] font-medium tracking-[-0.01em] text-white transition-all duration-300 hover:bg-[#0f2247]"
              >
                {card.buttonText}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* ───────── DESKTOP: pinned crossfade ───────── */}
      <div
        ref={containerRef}
        className="relative hidden w-full overflow-x-hidden bg-white py-8 md:block"
      >
        {/* ambient */}
        <div className="pointer-events-none absolute inset-0 opacity-90" aria-hidden="true">
          <div className="absolute right-0 top-1/4 h-[min(55vh,420px)] w-[min(55vh,420px)] bg-[#12D4FF]/20 blur-[80px]" />
          <div className="absolute bottom-0 left-1/4 h-[min(40vh,320px)] w-[min(40vh,320px)] bg-[#1959FA]/15 blur-[90px]" />
        </div>

        <div className="section-container relative z-[1] grid grid-cols-2 content-start items-start gap-8 lg:gap-10">
          {/* soft column divider */}
          <div
            className="pointer-events-none absolute left-1/2 top-[12%] h-[76%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#0B1A3A]/[0.08] to-transparent"
            aria-hidden="true"
          />

          {/* Text — left */}
          <div
            ref={textContainerRef}
            className="relative z-10 flex min-h-0 w-full flex-col pr-6 lg:pr-10"
          >
            <div className="relative w-full min-h-[min(62vh,540px)]">
              {CARDS.map((card, index) => (
                <div
                  key={card.id}
                  data-card={index}
                  className="absolute inset-0 flex min-h-full flex-col items-stretch pb-4 pr-2"
                >
                  <div className="flex h-full min-h-0 w-full max-w-[34rem] flex-col">
                    <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#1959FA]">
                      {card.eyebrow}
                    </p>
                    <h2 className="mb-5 text-[clamp(2rem,3.2vw+0.5rem,3.25rem)] font-semibold leading-[1.07] tracking-[-0.03em] text-[#0B1A3A]">
                      <span className="text-[#0B1A3A]">{card.titlePart1}</span>
                      <br />
                      <span className={`bg-gradient-to-r ${card.accent} bg-clip-text text-transparent tracking-[-0.005em]`}>
                        {card.titlePart2}
                      </span>
                      <br />
                      <span className="text-[#0B1A3A]">{card.titlePart3}</span>
                    </h2>
                    <p className="mb-7 max-w-[36rem] text-[16px] leading-[1.7] tracking-[-0.015em] text-[#0B1A3A]/68 lg:text-[17px]">
                      {card.description}
                    </p>
                    <button
                      type="button"
                      className="group mt-auto inline-flex min-h-[44px] shrink-0 items-center gap-2 self-start bg-[#0B1A3A] px-6 py-3 text-[14px] font-medium tracking-[-0.01em] text-white transition-all duration-300 hover:bg-[#0f2247]"
                    >
                      {card.buttonText}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
                    </button>

                    {/* progress dots */}
                    <div className="mt-8 flex items-center gap-2">
                      {CARDS.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => jumpToSlide(i)}
                          aria-label={`Go to ${CARDS[i].titlePart1}`}
                          className={`h-1.5 rounded-full transition-all duration-500 ${
                            i === activeSlide
                              ? 'w-7 bg-gradient-to-r from-[#12D4FF] to-[#1959FA]'
                              : 'w-1.5 bg-[#0B1A3A]/20 hover:bg-[#0B1A3A]/40'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-[12px] tabular-nums text-[#0B1A3A]/50">
                        {String(activeSlide + 1).padStart(2, '0')} / {String(CARDS.length).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image — right */}
          <div
            ref={imageContainerRef}
            className="relative z-0 w-full shrink-0 self-start"
          >
            <div className="relative mx-auto aspect-[3/4] max-h-[min(62vh,540px)] w-full">
              {CARDS.map((card, index) => (
                <div
                  key={card.id}
                  data-card={index}
                  className="absolute inset-0 flex items-stretch justify-stretch"
                >
                  <div className="relative h-full w-full overflow-hidden bg-[#0a1628] ring-1 ring-inset ring-white/10">
                    <div
                      className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-white/[0.12] via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={card.image}
                      alt={card.titlePart1}
                      className="absolute inset-0 z-0 h-full w-full object-cover object-center"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-tr from-[#0B1A3A]/30 via-transparent to-sky-500/5 opacity-85"
                      aria-hidden="true"
                    />
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[38%] bg-gradient-to-t from-[#0B1A3A]/35 to-transparent"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}