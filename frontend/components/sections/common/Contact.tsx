"use client";

import Image from "next/image";

export default function Contact() {
  const items = [
    "Revenue bottlenecks",
    "Workflow inefficiencies",
    "Automation gaps",
    "Scaling limitations",
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/assessment-bg.png.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1220px] px-4 py-[60px] sm:px-6 md:px-8 lg:px-10 xl:px-0">
        <div className="grid grid-cols-1 gap-[50px] lg:grid-cols-[1fr_460px] lg:gap-[72px]">
          {/* LEFT CONTENT */}
          <div className="relative pt-[10px] lg:pt-[22px]">
            {/* LABEL */}
            <div className="mb-7 flex items-center gap-2">
              <div className="h-[6px] w-[6px] rounded-full" />

              <span className="text-[10px] font-semibold uppercase leading-none tracking-[0.08em] text-[#110729]">
                Real-time business assessment
              </span>
            </div>

            {/* HEADING */}
            <h2 className="mx-auto max-w-[900] text-center text-[28px] font-[400] leading-[1.15] tracking-[-1px] text-[#07111f] sm:text-[36px] sm:tracking-[-1.5px] md:whitespace-nowrap md:text-[44px] md:tracking-[-2px]">
              Know what’s slowing your business down.
            </h2>

            {/* TEXT */}
            <p className="mt-[22px] max-w-[620px] text-[14px] leading-[1.8] text-[#66656a] sm:text-[15px]">
              Get a real-time operational assessment to identify bottlenecks,
              automation gaps, revenue leakage, workflow inefficiencies, and
              growth limitations inside your business.
            </p>

            {/* ITEMS */}
            <div className="relative z-20 mt-[36px] max-w-[360px]">
              {items.map((item, index) => (
                <div
                  key={item}
                  className={`flex items-center gap-4 py-[15px] ${
                    index !== items.length - 1
                      ? "border-b border-[#e7e2df]"
                      : ""
                  }`}
                >
                  <div className="flex w-[22px] shrink-0 justify-center text-[#8b5cf6]">
                    {index === 0 && (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="9"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                        <path
                          d="M12 7V12L15 14"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}

                    {index === 1 && (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="6"
                          cy="12"
                          r="2"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                        <circle
                          cx="18"
                          cy="6"
                          r="2"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                        <circle
                          cx="18"
                          cy="18"
                          r="2"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                        <path
                          d="M8 12H16L18 8"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                        <path
                          d="M16 12L18 16"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}

                    {index === 2 && (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 3L14.5 6.5L19 7L16 10L16.8 14.5L12 12.5L7.2 14.5L8 10L5 7L9.5 6.5L12 3Z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}

                    {index === 3 && (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M4 16L10 10L14 14L20 8"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15 8H20V13"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>

                  <span className="text-[13px] font-medium leading-none text-[#171b24] sm:text-[14px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* FORM CARD */}
          <div className="rounded-[22px] bg-white px-[28px] pb-[28px] pt-[28px] shadow-[0_10px_40px_rgba(15,15,15,0.06)]">
            {/* FORM */}
            <div className="space-y-[26px]">
              {/* ROW 1 */}
              <div className="grid grid-cols-1 gap-x-[36px] gap-y-[22px] sm:grid-cols-2">
                {/* NAME */}
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="h-[54px] w-full border-0 border-b border-[#d6dae1] bg-transparent px-0 text-[15px] font-medium text-[#111827] outline-none placeholder:text-[#98a2b3] focus:border-[#8b5cf6]"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="h-[54px] w-full border-0 border-b border-[#d6dae1] bg-transparent px-0 text-[15px] font-medium text-[#111827] outline-none placeholder:text-[#98a2b3] focus:border-[#8b5cf6]"
                  />
                </div>
              </div>

              {/* ROW 2 */}
              <div className="grid grid-cols-1 gap-x-[36px] gap-y-[22px] sm:grid-cols-2">
                {/* EMAIL */}
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="h-[54px] w-full border-0 border-b border-[#d6dae1] bg-transparent px-0 text-[15px] font-medium text-[#111827] outline-none placeholder:text-[#98a2b3] focus:border-[#8b5cf6]"
                  />
                </div>

                {/* INDUSTRY */}
                <div>
                  <input
                    type="text"
                    placeholder="Industry"
                    className="h-[54px] w-full border-0 border-b border-[#d6dae1] bg-transparent px-0 text-[15px] font-medium text-[#111827] outline-none placeholder:text-[#98a2b3] focus:border-[#8b5cf6]"
                  />
                </div>
              </div>

              {/* MONTHLY REVENUE */}
              <div>
                <input
                  type="text"
                  placeholder="Monthly Revenue"
                  className="h-[54px] w-full border-0 border-b border-[#d6dae1] bg-transparent px-0 text-[15px] font-medium text-[#111827] outline-none placeholder:text-[#98a2b3] focus:border-[#8b5cf6]"
                />
              </div>

              {/* BIGGEST CHALLENGE */}
              <div>
                <textarea
                  rows={4}
                  placeholder="Biggest Challenge"
                  className="w-full resize-none border-0 border-b border-[#d6dae1] bg-transparent px-0 py-[14px] text-[15px] font-medium text-[#111827] outline-none placeholder:text-[#98a2b3] focus:border-[#8b5cf6]"
                />
              </div>

              {/* BUTTON */}
              <button className="mt-[10px] flex h-[56px] w-full items-center justify-center gap-3 rounded-[14px] bg-[linear-gradient(90deg,#0b1220_0%,#0f172a_50%,#111827_100%)] text-[17px] font-semibold text-white shadow-[0_10px_25px_rgba(10,15,35,0.18)] transition-all duration-300 hover:opacity-95">
                Get Instant Assessment
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13 6L19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* FOOTER */}
              <div className="flex items-center gap-2 pt-[4px]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3L14.2 8.2L20 10L14.2 11.8L12 17L9.8 11.8L4 10L9.8 8.2L12 3Z"
                    fill="#ff6b00"
                  />
                </svg>

                <p className="text-[13px] text-[#8b8f98]">
                  AI-powered operational analysis in minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
