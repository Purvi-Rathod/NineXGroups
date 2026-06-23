"use client";
import React, { useState, useEffect, useRef } from 'react';

// ── Type Definitions ──
interface IndustryCard {
  title: string;
  filter: 'hot' | 'core';
  img: string;
  cagr: string | null;
  desc: string;
  solutions: string[];
}

type FilterType = 'all' | 'core' | 'hot';

// ── Data ──
const ALL_DATA: IndustryCard[] = [
  {
    title: "AI & Automation",
    filter: "hot",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=320&q=80",
    cagr: "39.7% CAGR — $647B market by 2030",
    desc: "Deploying intelligent automation and generative AI to transform enterprise operations and decision-making at scale.",
    solutions: ["Generative AI Product Development","Hyperautomation & RPA Workflows","AI-Driven Analytics Platforms","LLM Integration & Fine-Tuning","Agentic AI Systems Design"]
  },
  {
    title: "Digital Health & Biotech",
    filter: "hot",
    img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=320&q=80",
    cagr: "13%+ CAGR — $573B market by 2030",
    desc: "Revolutionizing patient care through telemedicine, AI diagnostics, and personalized medicine platforms.",
    solutions: ["Telemedicine & Remote Patient Monitoring","AI Diagnostics & Medical Imaging","Health Data Interoperability (EHR/FHIR)","Genomics & Personalized Medicine","Digital Wellness & Wearables Integration"]
  },
  {
    title: "Cybersecurity",
    filter: "hot",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=320&q=80",
    cagr: "Double-digit CAGR — fastest growing tech sector",
    desc: "Protecting enterprises from evolving digital threats with zero-trust architecture and AI-powered cyber defense.",
    solutions: ["Zero-Trust Security Architecture","AI-Powered Threat Detection & Response","Cloud Security & Compliance","Penetration Testing & Red Teaming","Identity & Access Management (IAM)"]
  },
  {
    title: "E-Commerce & Retail Tech",
    filter: "hot",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=320&q=80",
    cagr: "$8.1T global e-commerce market by 2026",
    desc: "Building intelligent commerce platforms that convert at scale with personalization, automation, and omnichannel reach.",
    solutions: ["Headless Commerce Architecture","AI-Powered Product Recommendation","Omnichannel Retail Platforms","Conversion Rate Optimization (CRO)","Order Management & Fulfillment Systems"]
  },
  {
    title: "EdTech & Digital Learning",
    filter: "hot",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=320&q=80",
    cagr: "11.88% CAGR — $490B market by 2029",
    desc: "Building next-generation learning platforms that deliver personalized, scalable education for enterprises and institutions.",
    solutions: ["LMS & Learning Platform Development","AI-Personalized Curriculum Design","Corporate Training Automation","Microlearning & Gamification Systems","Skills Assessment & Certification Tools"]
  },
  {
    title: "Space & Deep Tech",
    filter: "hot",
    img: "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?auto=format&fit=crop&w=320&q=80",
    cagr: "$1T+ industry by 2040 — fastest frontier",
    desc: "Enabling businesses to leverage satellite technology, deep tech R&D, and aerospace-grade engineering capabilities.",
    solutions: ["Satellite Data Analytics Platforms","IoT & Sensor Network Integration","Advanced Materials & Manufacturing Tech","Space-Grade Software Engineering","Defense & Dual-Use Technology Consulting"]
  },
  {
    title: "Data Centers & Cloud Infra",
    filter: "hot",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=320&q=80",
    cagr: "28.9% revenue growth — #1 fastest US sector 2026",
    desc: "Engineering hyperscale infrastructure and cloud-native architectures that power the next generation of digital businesses.",
    solutions: ["Hyperscale Data Center Strategy","Multi-Cloud Architecture Design","Edge Computing & CDN Optimization","Infrastructure-as-Code (IaC)","Green Data Center & Sustainability Tech"]
  },
  {
    title: "Farm Equipment",
    filter: "core",
    img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=320&q=80",
    cagr: null,
    desc: "Modernizing agriculture with advanced machinery and smart farming solutions.",
    solutions: ["Precision Agriculture Platforms","Equipment Telemetry & Predictive Maintenance","Farm Management Software","IoT in Agriculture","Supply Chain Traceability"]
  },
  {
    title: "Financial Services",
    filter: "core",
    img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=320&q=80",
    cagr: null,
    desc: "Transforming banking, fintech, and investment platforms for the digital age.",
    solutions: ["Digital Banking & Payments","Fintech App Development","Blockchain & Distributed Ledger","Risk Management & Compliance","Customer Data Analytics"]
  },
  {
    title: "Technology Services",
    filter: "core",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=320&q=80",
    cagr: null,
    desc: "Providing cutting-edge IT consulting, cloud, and software development solutions.",
    solutions: ["Cloud Migration & Management","Cybersecurity Solutions","Custom Software Development","IT Consulting & Strategy","AI & Machine Learning Integration"]
  },
  {
    title: "Hospitality",
    filter: "core",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=320&q=80",
    cagr: null,
    desc: "Elevating guest experiences in hotels, restaurants, and travel services.",
    solutions: ["Booking & Reservation Systems","Guest Experience Platforms","Loyalty Program Management","Smart Hotel Solutions","Revenue Management Systems"]
  },
  {
    title: "Logistics",
    filter: "core",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=320&q=80",
    cagr: null,
    desc: "Optimizing supply chain, freight, and last-mile delivery operations.",
    solutions: ["Supply Chain Visibility","Fleet Management & Telematics","Warehouse Management Systems","Last-Mile Delivery Optimization","Freight Forwarding Solutions"]
  },
  {
    title: "Real Estate",
    filter: "core",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=320&q=80",
    cagr: null,
    desc: "Innovative property development, management, and proptech solutions.",
    solutions: ["Property Management Software","Virtual Tours & AR/VR","Real Estate Marketplaces","Smart Building Management","Tenant Engagement Apps"]
  },
  {
    title: "Renewable Energy",
    filter: "core",
    img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=320&q=80",
    cagr: null,
    desc: "Sustainable power generation through solar, wind, and green technologies.",
    solutions: ["Energy Management Systems","Grid Modernization","Asset Performance Management","Renewable Energy Trading Platforms","Sustainability Reporting"]
  },
  {
    title: "Other Emerging Businesses",
    filter: "core",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=320&q=80",
    cagr: null,
    desc: "Supporting innovative startups and niche market ventures.",
    solutions: ["MVP Development","Agile Product Management","Growth Hacking Strategies","Digital Transformation for SMBs","Niche Market Solutions"]
  },
  {
    title: "Automotive",
    filter: "core",
    img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=320&q=80",
    cagr: null,
    desc: "Driving innovation in vehicle manufacturing, electric mobility, and automotive services.",
    solutions: ["Connected Vehicle Solutions","Smart Manufacturing & Industry 4.0","Supply Chain Optimization","Digital Dealership Experiences","EV Charging Infrastructure Management"]
  }
];

// ── Constants ──
const CARD_WIDTH = 290;
const GAP = 20;
const VISIBLE_CARDS = 3;

// ── Main Component ──
const WhatWeDo: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeData, setActiveData] = useState<IndustryCard[]>(ALL_DATA);

  // ── Touch refs ──
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Filter data when filter changes
  useEffect(() => {
    const filtered = activeFilter === 'all'
      ? ALL_DATA
      : ALL_DATA.filter(item => item.filter === activeFilter);
    setActiveData(filtered);
    setCurrentIndex(0);
  }, [activeFilter]);

  const maxIndex = Math.max(0, activeData.length - VISIBLE_CARDS);
  const offset = currentIndex * (CARD_WIDTH + GAP);

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  const handlePrev = () => goToSlide(currentIndex - 1);
  const handleNext = () => goToSlide(currentIndex + 1);

  return (
    <>
      <style>{`
        /* ── Section wrapper ── */
        .wwd {
          max-width: 1280px;
          margin: 0 auto;
          padding: 40px 96px 100px;
          background: #ffffff;
          color: #0a0a0a;
        }

        /* ── Header ── */
        .wwd__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 80px;
          margin-bottom: 48px;
        }

        .wwd__title {
          font-size: clamp(3rem, 5vw, 4.5rem);
          font-weight: 500;
          color: #0a0a0a;
          line-height: 1.04;
          letter-spacing: -0.03em;
          font-style: normal;
        }

        .wwd__subtitle {
          max-width: 520px;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          color: #6b6b6b;
          line-height: 1.7;
          padding-top: 6px;
        }

        /* ── Filter buttons ── */
        .wwd__filters {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 32px;
          align-items: center;
        }

        .wwd__filters button {
          font-size: 12px;
          font-weight: 400;
          padding: 6px 18px;
          border-radius: 100px;
          border: 1px solid rgba(0,0,0,0.10);
          background: transparent;
          color: #6b6b6b;
          cursor: pointer;
          transition: all 0.18s ease;
          letter-spacing: 0.02em;
        }

        .wwd__filters button:hover {
          border-color: rgba(0,0,0,0.22);
          color: #0a0a0a;
        }

        .wwd__filters button.active {
          background: #0a0a0a;
          color: #ffffff;
          border-color: #0a0a0a;
        }

        .wwd__count-label {
          font-size: 12px;
          color: #6b6b6b;
          margin-left: 8px;
        }

        /* ── Carousel ── */
        .wwd__outer {
          overflow: hidden;
          position: relative;
          touch-action: pan-y;
        }

        .wwd__track {
          display: flex;
          gap: 20px;
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }

        /* ── Card ── */
        .card {
          flex: 0 0 290px;
          background: #0d0d0d;
          border-radius: 0;
          padding: 28px 24px 30px;
          display: flex;
          flex-direction: column;
          min-height: 420px;
          position: relative;
          overflow: hidden;
          cursor: default;
          transition: transform 0.22s ease;
        }

        .card:hover { transform: translateY(-5px); }

        .card__top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
          gap: 8px;
        }

        .card__title {
          font-size: 1.15rem;
          font-weight: 600;
          color: #ffffff;
          line-height: 1.2;
          flex: 1;
          letter-spacing: -0.01em;
        }

        .card__tag {
          font-size: 9.5px;
          font-weight: 500;
          padding: 3px 9px;
          border-radius: 100px;
          white-space: nowrap;
          flex-shrink: 0;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .tag--core {
          background: rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.35);
        }

        .tag--hot {
          background: rgba(255,120,70,0.2);
          color: #ff8c5a;
        }

        /* ── Circle image ── */
        .card__ring {
          width: 148px;
          height: 148px;
          border-radius: 50%;
          position: relative;
          margin: 0 auto 14px;
          flex-shrink: 0;
        }

        .card__ring::before {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.22);
        }

        .card__ring::after {
          content: '';
          position: absolute;
          inset: -11px;
          border-radius: 50%;
          border: 1.5px dashed rgba(255,255,255,0.10);
        }

        .card__ring img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          display: block;
        }

        /* ── CAGR badge ── */
        .card__cagr {
          text-align: center;
          font-size: 10px;
          color: rgba(255,255,255,0.32);
          margin-bottom: 14px;
          letter-spacing: 0.03em;
          min-height: 16px;
        }

        .card__cagr span {
          color: rgba(255,255,255,0.55);
          font-weight: 500;
        }

        /* ── Desc ── */
        .card__desc {
          font-size: 12.5px;
          font-style: normal;
          color: rgba(255,255,255,0.44);
          line-height: 1.7;
          margin-bottom: 16px;
        }

        /* ── Solutions ── */
        .card__sols {
          list-style: none;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 14px;
          margin-top: auto;
        }

        .card__sols li {
          font-size: 11px;
          color: rgba(255,255,255,0.30);
          padding: 3px 0 3px 14px;
          position: relative;
          letter-spacing: 0.01em;
        }

        .card__sols li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: rgba(255,255,255,0.15);
        }

        /* ── Nav ── */
        .wwd__nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 28px;
        }

        .wwd__dots {
          display: flex;
          gap: 6px;
          align-items: center;
        }

        .wwd__dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #d0ceca;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.2s ease;
        }

        .wwd__dot.active {
          background: #0a0a0a;
          width: 22px;
          border-radius: 4px;
        }

        .wwd__slide-info {
          font-size: 12px;
          color: #6b6b6b;
          margin-left: 12px;
          font-variant-numeric: tabular-nums;
        }

        .wwd__arrows {
          display: flex;
          gap: 8px;
        }

        .wwd__arrows button {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.10);
          background: #ffffff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0a0a0a;
          transition: all 0.15s ease;
          font-size: 0;
        }

        .wwd__arrows button:hover {
          background: #f5f4f1;
          border-color: rgba(0,0,0,0.22);
        }

        .wwd__arrows button:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .wwd__arrows button svg {
          width: 16px;
          height: 16px;
          stroke: currentColor;
          stroke-width: 2;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        /* ── Responsive ── */
        @media (max-width: 1400px) {
          .wwd {
            padding: 40px 80px 100px;
          }
        }

        @media (max-width: 1200px) {
          .wwd {
            padding: 40px 64px 80px;
          }
          .wwd__header {
            gap: 60px;
          }
        }

        @media (max-width: 900px) {
          .wwd { 
            padding: 60px 40px 80px; 
          }
          .wwd__header { 
            flex-direction: column; 
            gap: 24px; 
          }
          .wwd__subtitle { 
            max-width: 100%; 
          }
          .card { 
            flex: 0 0 260px; 
          }
        }

        @media (max-width: 768px) {
          .wwd {
            padding: 48px 24px 64px;
          }
          .wwd__title {
            font-size: clamp(2.5rem, 8vw, 3.5rem);
          }
          .wwd__subtitle {
            font-size: 15px;
          }
        }

        @media (max-width: 600px) {
          .wwd { 
            padding: 48px 16px 64px; 
          }
          .card { 
            flex: 0 0 240px; 
            min-height: 380px; 
          }
        }
      `}</style>

      <section className="wwd">
        {/* Header */}
        <div className="wwd__header">
          <h2 className="wwd__title">What We Do</h2>
          <p className="wwd__subtitle">
            We help businesses build scalable systems and drive consistent growth through strategies 
            that strengthen their market position and connect with the right audience.
          </p>
        </div>

        {/* Filters */}
        <div className="wwd__filters">
          <button 
            className={activeFilter === 'all' ? 'active' : ''} 
            onClick={() => setActiveFilter('all')}
          >
            All Industries
          </button>
          <button 
            className={activeFilter === 'core' ? 'active' : ''} 
            onClick={() => setActiveFilter('core')}
          >
            Core
          </button>
          <button 
            className={activeFilter === 'hot' ? 'active' : ''} 
            onClick={() => setActiveFilter('hot')}
          >
            Booming 2026
          </button>
          <span className="wwd__count-label">{activeData.length} industries</span>
        </div>

        {/* Carousel */}
        <div
          className="wwd__outer"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
            touchStartY.current = e.touches[0].clientY;
          }}
          onTouchMove={(e) => {
            if (touchStartX.current === null || touchStartY.current === null) return;
            const dx = touchStartX.current - e.touches[0].clientX;
            const dy = Math.abs(e.touches[0].clientY - touchStartY.current);
            // only prevent page scroll if predominantly horizontal swipe
            if (Math.abs(dx) > dy) e.preventDefault();
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null || touchStartY.current === null) return;
            const dx = touchStartX.current - e.changedTouches[0].clientX;
            const dy = Math.abs(e.changedTouches[0].clientY - touchStartY.current);
            // fire only if horizontal swipe > 40px and more horizontal than vertical
            if (Math.abs(dx) > 40 && Math.abs(dx) > dy) {
              dx > 0 ? handleNext() : handlePrev();
            }
            touchStartX.current = null;
            touchStartY.current = null;
          }}
        >
          <div 
            className="wwd__track" 
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {activeData.map((item, idx) => (
              <div key={idx} className="card">
                <div className="card__top">
                  <div className="card__title">{item.title}</div>
                  <span className={`card__tag ${item.filter === 'hot' ? 'tag--hot' : 'tag--core'}`}>
                    {item.filter === 'hot' ? 'Booming 2026' : 'Core'}
                  </span>
                </div>
                <div className="card__ring">
                  <img src={item.img} alt={item.title} loading="lazy" />
                </div>
                <div className="card__cagr">
                  {item.cagr && <span>{item.cagr}</span>}
                </div>
                <p className="card__desc">{item.desc}</p>
                <ul className="card__sols">
                  {item.solutions.map((solution, sidx) => (
                    <li key={sidx}>{solution}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="wwd__nav">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className="wwd__dots">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  className={`wwd__dot ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <span className="wwd__slide-info">
              {currentIndex + 1} / {maxIndex + 1}
            </span>
          </div>
          <div className="wwd__arrows">
            <button 
              onClick={handlePrev} 
              disabled={currentIndex === 0}
              aria-label="Previous slide"
            >
              <svg viewBox="0 0 24 24">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button 
              onClick={handleNext} 
              disabled={currentIndex >= maxIndex}
              aria-label="Next slide"
            >
              <svg viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhatWeDo;