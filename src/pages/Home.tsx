import { useEffect, useState, useRef } from "react";
import AmbulanceServices from "../components/AmbulanceServices";
import AppShowcase from "../components/AppShowcase";
import TrustedPartners from "../components/TrustedPartners";
import WhyChooseAmbigo from "../components/WhyChooseAmbigo";
import AchievementsMarquee from "../components/AchievementsMarquee";
import { LampContainer } from "../components/ui/lamp";
import { motion } from "framer-motion";

const AMBIGO_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=in.ambigo.user";

const Home = () => {
  // --- MOBILE CAROUSEL STATES & REFS ---

  // 1. App Features (6 items)
  const [appFeaturesIdx, setAppFeaturesIdx] = useState(0);
  const appFeaturesRef = useRef<HTMLDivElement>(null);

  // 2. Health Tips (4 items)
  const [healthTipsIdx, setHealthTipsIdx] = useState(0);
  const healthTipsRef = useRef<HTMLDivElement>(null);

  // 3. Your Health, Our Priority (4 items)
  const [priorityIdx, setPriorityIdx] = useState(0);
  const priorityRef = useRef<HTMLDivElement>(null);

  // Reusable scroll handler for carousels
  const handleCarouselScroll = (
    ref: React.RefObject<HTMLDivElement | null>,
    setIndex: (idx: number) => void,
    totalItems: number,
    gap: number = 16,
  ) => {
    if (ref.current) {
      const scrollLeft = ref.current.scrollLeft;
      const firstChild = ref.current.children[0] as HTMLElement;
      if (firstChild) {
        const cardWidth = firstChild.clientWidth;
        const index = Math.round(scrollLeft / (cardWidth + gap));
        if (index >= 0 && index < totalItems) {
          setIndex(index);
        }
      }
    }
  };

  // Reusable scroll-to-index handler
  const scrollCarouselTo = (
    ref: React.RefObject<HTMLDivElement | null>,
    index: number,
    gap: number = 16,
  ) => {
    if (ref.current) {
      const firstChild = ref.current.children[0] as HTMLElement;
      if (firstChild) {
        const cardWidth = firstChild.clientWidth;
        ref.current.scrollTo({
          left: (cardWidth + gap) * index,
          behavior: "smooth",
        });
      }
    }
  };

  // Enable "click + drag" scrolling for mouse users (especially in responsive mode).
  useEffect(() => {
    const refs = [appFeaturesRef, healthTipsRef, priorityRef];

    const cleanups: Array<() => void> = [];

    for (const ref of refs) {
      const el = ref.current;
      if (!el) continue;

      let isDown = false;
      let startX = 0;
      let startLeft = 0;
      let moved = false;

      const onPointerDown = (e: PointerEvent) => {
        // Only mouse drag (touch already works naturally).
        if (e.pointerType !== "mouse") return;
        if (e.button !== 0) return;

        isDown = true;
        moved = false;
        startX = e.clientX;
        startLeft = el.scrollLeft;

        try {
          el.setPointerCapture(e.pointerId);
        } catch {
          // ignore
        }
      };

      const onPointerMove = (e: PointerEvent) => {
        if (!isDown) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 3) moved = true;
        el.scrollLeft = startLeft - dx;
      };

      const endDrag = () => {
        isDown = false;
        startX = 0;
      };

      const onClickCapture = (e: MouseEvent) => {
        // Prevent accidental clicks when user drags to scroll.
        if (moved) {
          e.preventDefault();
          e.stopPropagation();
          moved = false;
        }
      };

      el.addEventListener("pointerdown", onPointerDown);
      el.addEventListener("pointermove", onPointerMove);
      el.addEventListener("pointerup", endDrag);
      el.addEventListener("pointercancel", endDrag);
      el.addEventListener("pointerleave", endDrag);
      el.addEventListener("click", onClickCapture, true);

      cleanups.push(() => {
        el.removeEventListener("pointerdown", onPointerDown);
        el.removeEventListener("pointermove", onPointerMove);
        el.removeEventListener("pointerup", endDrag);
        el.removeEventListener("pointercancel", endDrag);
        el.removeEventListener("pointerleave", endDrag);
        el.removeEventListener("click", onClickCapture, true);
      });
    }

    return () => {
      for (const fn of cleanups) fn();
    };
  }, []);

  return (
    <div className="journey-home ambigo-vl font-poppins text-slate-800 overflow-x-hidden relative min-h-screen bg-transparent">
      {/* --- HERO SECTION — Scene-based illustrated composition --- */}
      <section className="home-hero relative overflow-hidden">
        {/* ═══ ATMOSPHERIC DECORATION ═══ */}
        <div
          className="absolute -top-16 -left-24 w-[520px] h-[420px] rounded-[60%_40%_55%_45%] bg-gradient-to-br from-[#fdd5b1]/20 to-[#fbb68a]/8 blur-[50px] pointer-events-none"
          style={{ zIndex: 0 }}
        ></div>
        <div
          className="absolute -top-8 right-[-60px] w-[450px] h-[380px] bg-gradient-to-bl from-[#d4e8fb]/25 to-transparent rounded-full blur-[60px] pointer-events-none"
          style={{ zIndex: 0 }}
        ></div>
        <div
          className="absolute top-[28%] right-[5%] w-[300px] h-[250px] bg-[#fdecd2]/15 rounded-full blur-[50px] pointer-events-none"
          style={{ zIndex: 0 }}
        ></div>

        {/* ═══ TOP HALF — Content: heading left, card right ═══ */}
        <div className="home-hero__inner relative max-w-[1300px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8 pt-2 sm:pt-4">
            {/* ── LEFT: heading + subtitle ── */}
            <div className="hero-fade-up w-full lg:w-[44%] flex flex-col items-start justify-start pt-0 relative z-20">
              {/* Main Heading */}
              <h1
                className="
                text-[38px]
                sm:text-[48px]
                lg:text-[40px]
                xl:text-[44px]
                font-extrabold
                text-[#0f172a]
                leading-[1.08]
                tracking-[0]
                text-left
                max-w-none
                drop-shadow-[0_2px_2px_rgba(255,255,255,0.15)]
                [&::after]:hidden
              "
              >
                Fast, Reliable
                <br />
                <span className="sm:whitespace-nowrap">Ambulance Booking.</span>
              </h1>

              {/* Subtitle */}
              <p
                className="
                mt-2
                text-[15px]
                lg:text-[16px]
                font-medium
                text-[#1f2937]
                leading-relaxed
                text-left
                max-w-[520px]
              "
              >
                Emergency? Book medical transport instantly, 24/7.
              </p>

              {/* Floating Ambulance Illustration */}
              <div className="mt-2 lg:mt-4 w-full max-w-[480px] lg:max-w-[500px] xl:max-w-[600px] relative hero-fade-up hero-fade-delay-1 mx-auto lg:ml-8">
                {/* Subtle background glow */}
                <div className="absolute inset-0 bg-orange-400/20 blur-3xl rounded-full scale-90"></div>

                <img
                  src="/Ambulance-pana.svg"
                  alt="Ambulance Booking Illustration"
                  className="w-full h-auto relative z-10 animate-float drop-shadow-[0_0_25px_rgba(255,140,66,0.4)] scale-110 origin-top-left"
                />
              </div>
            </div>

            {/* ── RIGHT: card ── */}
            <div className="hero-fade-up hero-fade-delay-2 w-full lg:w-[48%] flex flex-col items-center lg:items-end justify-start">
              <div className="ambigo-card-glow-wrap w-full max-w-[420px]">
                <div className="hero-benefit-card ambigo-card bg-white/95 backdrop-blur-xl px-6 py-6 lg:px-7 lg:py-7 w-full relative">
                  {/* Card Header */}
                  <div className="mb-4">
                    <span className="ambigo-eyebrow">
                      Trusted emergency care
                    </span>
                    <h2 className="text-2xl font-extrabold text-[#1a2340] mb-1.5 leading-snug tracking-tight">
                      24/7 Ambulance Services
                    </h2>
                    <p className="text-[#6b7fa3] font-semibold text-sm">
                      Anytime, Anywhere
                    </p>
                  </div>

                  {/* Description */}
                  <div className="bg-[#f5f8fc] border border-slate-100/60 rounded-xl px-4 py-3 mb-4">
                    <p className="text-slate-600 font-medium text-sm leading-relaxed">
                      In emergency situations, help or rescue is just a click
                      away. Our certified staff ensures timely medical
                      transportation.
                    </p>
                  </div>

                  {/* Badge */}
                  <div className="flex items-center gap-2.5 bg-amber-50/60 border border-amber-200/30 rounded-xl px-4 py-2 mb-5 w-full">
                    <span className="text-amber-500 text-base">⚡</span>
                    <span className="text-xs font-bold text-slate-600 tracking-tight">
                      We will be at your door!
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-3 w-full">
                    <a
                      href={AMBIGO_PLAY_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ambigo-btn-primary ambigo-btn-glow w-full text-sm py-3 gap-2.5"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.48-.71 1.58.04 2.82.72 3.54 1.83-3.02 1.68-2.51 5.37.49 6.64-.72 1.82-1.61 3.56-2.59 4.41zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                      </svg>
                      Download App
                    </a>

                    <a
                      href="tel:+918985138102"
                      className="ambigo-btn-outline w-full py-3 px-6 text-xs justify-center gap-2.5"
                    >
                      <span className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center text-[#ff8c42] shrink-0">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </span>
                      CALL: +91 8985138102
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .hero-fade-up {
            animation: heroFadeUp 0.82s cubic-bezier(0.22, 1, 0.36, 1) both;
          }

          .hero-fade-delay-1 {
            animation-delay: 0.12s;
          }

          .hero-fade-delay-2 {
            animation-delay: 0.22s;
          }

          .hero-benefit-card {
            isolation: isolate;
          }

          .hero-benefit-card::before {
            content: "";
            position: absolute;
            inset: -34px -42px;
            z-index: -1;
            border-radius: 36px;
            background:
              radial-gradient(circle at 55% 30%, rgba(88, 183, 238, 0.26), transparent 58%),
              radial-gradient(circle at 65% 72%, rgba(255, 107, 44, 0.24), transparent 62%);
            filter: blur(18px);
            opacity: 0.95;
          }

          @keyframes heroFadeUp {
            from {
              transform: translate3d(0, 12px, 0);
            }
            to {
              transform: translate3d(0, 0, 0);
            }
          }

          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-15px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-fade-up {
              animation: none !important;
              transform: none !important;
            }
            .animate-float {
              animation: none !important;
              transform: none !important;
            }
          }
        `}</style>
      </section>
      <AppShowcase />
      <AmbulanceServices />
      <WhyChooseAmbigo />
      {/* --- APP FEATURES --- */}
      <section className="ambigo-section px-6 lg:px-12 relative z-20 overflow-hidden">
        {/* Section Wavy Background */}
        <div className="absolute top-0 left-0 w-[100vw] h-[min(100%,420px)] -z-10 overflow-hidden pointer-events-none left-1/2 -translate-x-1/2">
          <svg
            className="absolute top-0 left-0 w-full h-full drop-shadow-sm opacity-50"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#e0f2fe"
              d="M1440,220 C1120,380 1020,50 600,150 C320,220 160,120 0,80 L0,0 L1440,0 Z"
            ></path>
            <path
              fill="#ffedd5"
              d="M1440,120 C1160,280 940,20 540,120 C240,190 90,90 0,40 L0,0 L1440,0 Z"
            ></path>
          </svg>
        </div>
        <div className="ambigo-container max-w-7xl mx-auto">
          <div className="ambigo-section-header">
            <span className="ambigo-eyebrow">App</span>
            <h2 className="ambigo-section-title">App Features</h2>
            <p className="ambigo-section-lead">
              Book ambulances in emergency or in advance. Experience our
              seamless platform.
            </p>
          </div>
          <div
            ref={appFeaturesRef}
            onScroll={() =>
              handleCarouselScroll(appFeaturesRef, setAppFeaturesIdx, 6, 16)
            }
            className="flex flex-row flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 md:pb-0 hide-scrollbar cursor-grab active:cursor-grabbing"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {/* Feature 1 */}
            <div className="ambigo-card p-6 flex gap-5 flex-shrink-0 snap-center w-10/12 max-w-[320px] md:w-full md:max-w-none">
              <div className="w-14 h-14 shrink-0 bg-orange-50 rounded-2xl p-3 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Instant Medical Assistance
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Get immediate access to trusted ambulance services for any
                  medical emergency.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="ambigo-card p-6 flex gap-5 flex-shrink-0 snap-center w-10/12 max-w-[320px] md:w-full md:max-w-none">
              <div className="w-14 h-14 shrink-0 bg-orange-50 rounded-2xl p-3 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Schedule a Ride
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Book ambulances in advance to ensure timely transportation for
                  hospital visits.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="ambigo-card p-6 flex gap-5 flex-shrink-0 snap-center w-10/12 max-w-[320px] md:w-full md:max-w-none">
              <div className="w-14 h-14 shrink-0 bg-orange-50 rounded-2xl p-3 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Affordable Pricing
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Enjoy transparent and competitive rates with flexible payment
                  options.
                </p>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="ambigo-card p-6 flex gap-5 flex-shrink-0 snap-center w-10/12 max-w-[320px] md:w-full md:max-w-none">
              <div className="w-14 h-14 shrink-0 bg-orange-50 rounded-2xl p-3 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Emergency Helpline
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Reach out to our 24/7 helpline for quick responses in critical
                  situations.
                </p>
              </div>
            </div>
            {/* Feature 5 */}
            <div className="ambigo-card p-6 flex gap-5 flex-shrink-0 snap-center w-[calc(100vw-4rem)] md:w-auto md:max-w-none">
              <div className="w-14 h-14 shrink-0 bg-orange-50 rounded-2xl p-3 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Health & Safety
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Learn vital tips and safety measures to handle emergencies
                  effectively.
                </p>
              </div>
            </div>
            {/* Feature 6 */}
            <div className="ambigo-card p-6 flex gap-5 flex-shrink-0 snap-center w-[85vw] max-w-[300px] md:w-auto md:max-w-none">
              <div className="w-14 h-14 shrink-0 bg-orange-50 rounded-2xl p-3 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">
                  Real-Time Updates
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Stay informed with live tracking and direct communication with
                  staff.
                </p>
              </div>
            </div>
          </div>

          {/* Dots Navigation for Mobile */}
          <div className="flex flex-row justify-center items-center gap-[6px] mt-3 mb-6 md:hidden">
            {Array.from({ length: 6 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollCarouselTo(appFeaturesRef, idx, 16)}
                className={`h-[7px] rounded-full border-0 p-0 cursor-pointer transition-all duration-300 ${
                  appFeaturesIdx === idx
                    ? "w-5 bg-[#ff8c42] shadow-[0_0_10px_rgba(255,140,66,0.5)]"
                    : "w-[7px] bg-slate-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      {/* --- APP PROMO / QR CODES --- */}
      <section className="ambigo-section ambigo-section--wash px-6 lg:px-12">
        <div className="ambigo-container max-w-6xl mx-auto">
          <div className="ambigo-section-header">
            <span className="ambigo-eyebrow">Download</span>
            <h2 className="ambigo-section-title">Get more in the app</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* User App */}
            <div className="ambigo-card p-8 flex flex-col sm:flex-row items-center sm:items-start gap-8">
              <div className="w-32 h-32 p-2 bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.08)]">
                <img
                  src="/user_app_link.png"
                  alt="QR Code"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
                  <img
                    src="/userapplogo.webp"
                    alt="Ambigo Logo"
                    className="w-10 h-10 rounded-xl"
                  />
                  <h3 className="text-xl font-bold text-slate-900">
                    Download Ambigo App
                  </h3>
                </div>
                <p className="text-slate-500 text-sm mb-6">
                  Scan the QR code to install the app and ride immediately.
                </p>
                <a
                  href={AMBIGO_PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ambigo-link-arrow mx-auto sm:mx-0"
                >
                  Download Now
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>

            {/* Partner App */}
            <div className="ambigo-card p-8 flex flex-col sm:flex-row items-center sm:items-start gap-8">
              <div className="w-32 h-32 p-2 bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.08)]">
                <img
                  src="/partner_link.png"
                  alt="QR Code"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
                  <img
                    src="/partnerlogo.webp"
                    alt="Partner Logo"
                    className="w-10 h-10 rounded-xl"
                  />
                  <h3 className="text-xl font-bold text-slate-900">
                    Ambigo Partner App
                  </h3>
                </div>
                <p className="text-slate-500 text-sm mb-6">
                  Scan to download the partner app to drive and earn.
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=in.ambigo.driver&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ambigo-link-arrow mx-auto sm:mx-0"
                >
                  Become a Partner
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- REAL-TIME TRACKING --- */}
      <section className="ambigo-section px-6 lg:px-12 bg-white relative overflow-hidden">
        {/* Decorative background cutouts matching design */}
        <div className="absolute right-0 top-0 w-[40%] h-full bg-orange-50/50 rounded-tl-[100px] -z-10"></div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative">
          <div className="w-full md:w-[40%] flex flex-col items-start">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Real-Time
              <br />
              Tracking
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
              Map view, ambulance with destination and marked onar destination.
            </p>
            <a
              href={AMBIGO_PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ambigo-btn-primary px-10 py-4"
            >
              Download App
            </a>
          </div>

          <div className="w-full md:w-[60%] relative">
            <div className="w-full bg-[#f8fafc] rounded-[40px] p-4 lg:p-8 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              {/* Map Illustration Placeholder */}
              <div className="w-full h-[350px] bg-[#fff4eb] rounded-[30px] relative overflow-hidden">
                {/* Fake map roads */}
                <div
                  className="absolute inset-0 opacity-[0.15]"
                  style={{
                    backgroundImage:
                      "linear-gradient(45deg, transparent 48%, #94a3b8 48%, #94a3b8 52%, transparent 52%), linear-gradient(-45deg, transparent 48%, #94a3b8 48%, #94a3b8 52%, transparent 52%)",
                    backgroundSize: "80px 80px",
                  }}
                ></div>

                {/* Fake route line */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 400 200"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M50,150 L150,150 L350,50"
                    fill="none"
                    stroke="#ff8c42"
                    strokeWidth="6"
                    strokeDasharray="10 10"
                  />
                </svg>

                {/* Ambulance icon on map */}
                <div className="absolute bottom-[20%] left-[10%] bg-white p-3 rounded-2xl shadow-xl">
                  <img
                    src="/patientTransportAmbi.png"
                    className="w-10 h-10 object-contain transform -scale-x-100"
                    alt="Ambulance marker"
                  />
                </div>

                {/* Destination Pin */}
                <div className="absolute top-[20%] right-[10%]">
                  <svg
                    className="w-14 h-14 text-orange-500 drop-shadow-xl"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- HEALTH TIPS --- */}
      <section className="home-health-tips ambigo-section px-6 lg:px-12 bg-white">
        <div className="ambigo-container max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-12 text-center md:text-left">
            <div className="ambigo-section-header mb-0 md:text-left md:items-start">
              <span className="ambigo-eyebrow">Wellness</span>
              <h2 className="ambigo-section-title md:text-left">Health Tips</h2>
              <p className="ambigo-section-lead md:mx-0 md:text-left">
                Daily habits for a healthier lifestyle.
              </p>
            </div>
            <button
              type="button"
              className="ambigo-link-arrow hidden md:inline-flex shrink-0"
            >
              View All <span aria-hidden>→</span>
            </button>
          </div>

          <div
            ref={healthTipsRef}
            onScroll={() =>
              handleCarouselScroll(healthTipsRef, setHealthTipsIdx, 4, 16)
            }
            className="flex flex-row flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:overflow-visible md:px-0 md:pb-0 hide-scrollbar cursor-grab active:cursor-grabbing"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {/* Tip 1 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:-translate-y-2 transition-transform group flex-shrink-0 snap-center w-10/12 max-w-[320px] md:w-full md:max-w-none">
              <div className="h-48 overflow-hidden">
                <img
                  src="/fruits.jpg"
                  alt="Nutrition"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ambigo-glow-image"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-orange-50 text-orange-600 text-xs font-bold rounded-full mb-4">
                  Nutrition
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  Healthy Eating Habits for a Stronger Heart
                </h3>
                <p className="text-slate-500 text-sm line-clamp-2">
                  Discover how the right food choices can significantly improve
                  your cardiovascular health.
                </p>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:-translate-y-2 transition-transform group flex-shrink-0 snap-center w-10/12 max-w-[320px] md:w-full md:max-w-none">
              <div className="h-48 overflow-hidden">
                <img
                  src="/exercise.jpg"
                  alt="Fitness"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ambigo-glow-image"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-4">
                  Fitness
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  The Importance of Regular Exercise
                </h3>
                <p className="text-slate-500 text-sm line-clamp-2">
                  Discover how just 30 minutes of daily exercise can transform
                  your health and energy levels.
                </p>
              </div>
            </div>

            {/* Tip 3 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:-translate-y-2 transition-transform group flex-shrink-0 snap-center w-[calc(100vw-4rem)] md:w-auto md:max-w-none">
              <div className="h-48 overflow-hidden">
                <img
                  src="/meditating.jpg"
                  alt="Mental Health"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ambigo-glow-image"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full mb-4">
                  Mental Health
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  Mindfulness Techniques for Stress Relief
                </h3>
                <p className="text-slate-500 text-sm line-clamp-2">
                  Learn simple daily practices to reduce anxiety and improve
                  your mental wellbeing.
                </p>
              </div>
            </div>

            {/* Tip 4 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:-translate-y-2 transition-transform group flex-shrink-0 snap-center w-[80vw] max-w-[280px] md:w-auto md:max-w-none">
              <div className="h-48 overflow-hidden">
                <img
                  src="/sleeping.jpg"
                  alt="Sleep"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ambigo-glow-image"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-purple-50 text-purple-600 text-xs font-bold rounded-full mb-4">
                  Sleep
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  Better Sleep Habits for Optimal Health
                </h3>
                <p className="text-slate-500 text-sm line-clamp-2">
                  Discover the science-backed strategies to improve your sleep
                  quality for better health.
                </p>
              </div>
            </div>
          </div>

          {/* Dots Navigation for Mobile */}
          <div className="flex flex-row justify-center items-center gap-[6px] mt-3 mb-6 md:hidden">
            {Array.from({ length: 4 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollCarouselTo(healthTipsRef, idx, 16)}
                className={`h-[7px] rounded-full border-0 p-0 cursor-pointer transition-all duration-300 ${
                  healthTipsIdx === idx
                    ? "w-5 bg-[#ff8c42] shadow-[0_0_10px_rgba(255,140,66,0.5)]"
                    : "w-[7px] bg-slate-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      {/* --- YOUR HEALTH OUR PRIORITY --- */}
      <section className="ambigo-section px-6 lg:px-12 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 font-bold rounded-full text-sm mb-6 animate-pulse uppercase tracking-wider">
              Launching Soon
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
              Your Health, Our Priority
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Experience comprehensive healthcare services designed for your
              convenience and well-being.
            </p>
          </div>

          <div
            ref={priorityRef}
            onScroll={() =>
              handleCarouselScroll(priorityRef, setPriorityIdx, 4, 16)
            }
            className="flex flex-row flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:overflow-visible md:px-0 md:pb-0 hide-scrollbar cursor-grab active:cursor-grabbing"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {/* Service 1 */}
            <div className="bg-white rounded-[40px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-50 hover:-translate-y-2 transition-transform flex flex-col h-full flex-shrink-0 snap-center w-10/12 max-w-[320px] md:w-full md:max-w-none">
              <div className="w-full h-40 mb-8 flex items-center justify-center">
                <img
                  src="/online_consultance.png"
                  className="max-h-full object-contain drop-shadow-xl"
                  alt="Consultation"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                Doctor Consultation
              </h3>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm text-slate-500">
                  <svg
                    className="w-5 h-5 text-green-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>{" "}
                  24/7 Availability
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-500">
                  <svg
                    className="w-5 h-5 text-green-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>{" "}
                  Instant Prescriptions
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-500">
                  <svg
                    className="w-5 h-5 text-green-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>{" "}
                  Secure & Private
                </li>
              </ul>
              <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-orange-500 transition-colors mt-auto">
                Get Notified
              </button>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-[40px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-50 hover:-translate-y-2 transition-transform flex flex-col h-full flex-shrink-0 snap-center w-10/12 max-w-[320px] md:w-full md:max-w-none">
              <div className="w-full h-40 mb-8 flex items-center justify-center">
                <img
                  src="/pharma_delivery.png"
                  className="max-h-full object-contain drop-shadow-xl"
                  alt="Pharma"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                Pharma Delivery
              </h3>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm text-slate-500">
                  <svg
                    className="w-5 h-5 text-green-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>{" "}
                  Same-Day Delivery
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-500">
                  <svg
                    className="w-5 h-5 text-green-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>{" "}
                  Genuine Medicines
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-500">
                  <svg
                    className="w-5 h-5 text-green-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>{" "}
                  Easy Reordering
                </li>
              </ul>
              <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-orange-500 transition-colors mt-auto">
                Get Notified
              </button>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-[40px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-50 hover:-translate-y-2 transition-transform flex flex-col h-full flex-shrink-0 snap-center w-[calc(100vw-4rem)] md:w-auto md:max-w-none">
              <div className="w-full h-40 mb-8 flex items-center justify-center">
                <img
                  src="/lab_test.png"
                  className="max-h-full object-contain drop-shadow-xl"
                  alt="Lab Tests"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                Lab Tests at Home
              </h3>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm text-slate-500">
                  <svg
                    className="w-5 h-5 text-green-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>{" "}
                  Certified Labs
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-500">
                  <svg
                    className="w-5 h-5 text-green-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>{" "}
                  Home Collection
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-500">
                  <svg
                    className="w-5 h-5 text-green-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>{" "}
                  Digital Reports
                </li>
              </ul>
              <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-orange-500 transition-colors mt-auto">
                Get Notified
              </button>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-[40px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-50 hover:-translate-y-2 transition-transform flex flex-col h-full flex-shrink-0 snap-center w-[80vw] max-w-[280px] md:w-auto md:max-w-none">
              <div className="w-full h-40 mb-8 flex items-center justify-center">
                <img
                  src="/hospital_token.png"
                  className="max-h-full object-contain drop-shadow-xl"
                  alt="Tokens"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                Visiting Tokens
              </h3>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm text-slate-500">
                  <svg
                    className="w-5 h-5 text-green-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>{" "}
                  Queue Management
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-500">
                  <svg
                    className="w-5 h-5 text-green-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>{" "}
                  Flexible Timing
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-500">
                  <svg
                    className="w-5 h-5 text-green-500 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>{" "}
                  Easy Rescheduling
                </li>
              </ul>
              <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-orange-500 transition-colors mt-auto">
                Get Notified
              </button>
            </div>
          </div>

          {/* Dots Navigation for Mobile */}
          <div className="flex flex-row justify-center items-center gap-[6px] mt-3 mb-6 md:hidden">
            {Array.from({ length: 4 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollCarouselTo(priorityRef, idx, 16)}
                className={`h-[7px] rounded-full border-0 p-0 cursor-pointer transition-all duration-300 ${
                  priorityIdx === idx
                    ? "w-5 bg-[#ff8c42] shadow-[0_0_10px_rgba(255,140,66,0.5)]"
                    : "w-[7px] bg-slate-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      <TrustedPartners />
      {/* --- AWARDS & ACHIEVEMENTS --- */}
      <div className="bg-slate-50 w-full relative overflow-hidden flex flex-col items-center">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="py-4 text-center font-extrabold tracking-tight text-slate-900 mb-4"
            style={{
              fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
              marginTop: "2rem",
            }}
          >
            Prestigious Awards <br /> & Achievements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-slate-600 text-center mb-16"
            style={{
              fontSize: "clamp(0.9rem, 2vw, 1.125rem)",
              maxWidth: "48rem",
              paddingInline: "16px",
            }}
          >
            Recognized by the most esteemed organizations for our outstanding
            contribution to the healthcare sector.
          </motion.p>
        </LampContainer>

        <div className="bg-slate-50 pt-12 pb-20 mt-0 relative z-10 w-full flex flex-col items-center">
          {/* Wide Award Card - Light Theme with Glow */}
          <div className="relative mb-20 max-w-3xl mx-auto group w-full px-4 md:px-8 perspective-1000">
            {/* 3D Glow Effect Background */}
            <div className="absolute inset-0 md:inset-4 bg-orange-500 rounded-[44px] blur-2xl opacity-10 group-hover:opacity-60 transition-all duration-700 ease-out group-hover:scale-105 group-hover:translate-y-4"></div>

            <div
              className="bg-white/90 backdrop-blur-md relative overflow-hidden border border-orange-100 z-10 w-full awards-main-card transition-all duration-500 ease-out group-hover:-translate-y-4 group-hover:shadow-[0_40px_80px_rgba(249,115,22,0.2)]"
              style={{
                padding: "24px",
                borderRadius: "24px",
                display: "flex",
                alignItems: "center",
                gap: "24px",
                boxShadow: "0 15px 40px rgba(0,0,0,0.06)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Decorative background cutouts */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

              <div className="relative z-10 awards-main-card__text">
                <div
                  className="bg-slate-50 border border-slate-100 inline-flex items-center justify-center shadow-sm"
                  style={{
                    padding: "12px",
                    borderRadius: "16px",
                    marginBottom: "16px",
                  }}
                >
                  <img
                    src="/apdts26.png"
                    alt="Logo"
                    style={{ height: "40px", objectFit: "contain" }}
                  />
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#64748b",
                    marginBottom: "12px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  We are honored to be a
                </p>
                <h3
                  style={{
                    fontSize: "clamp(1.5rem, 4vw, 2.75rem)",
                    fontWeight: 800,
                    marginBottom: "14px",
                    lineHeight: 1.15,
                    color: "#0f172a",
                  }}
                >
                  Student Innovator /<br />
                  Campus Startup Award
                </h3>
                <p
                  style={{
                    color: "#f97316",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    fontSize: "1.1rem",
                  }}
                >
                  #techpioneers25
                </p>
              </div>

              <div
                className="relative z-10 awards-main-card__images"
                style={{ display: "flex", gap: "12px" }}
              >
                <img
                  src="/summit_ap.png"
                  alt="Award 1"
                  style={{ borderRadius: "16px" }}
                />
                <img
                  src="/summit_ap2.png"
                  alt="Award 2"
                  style={{ borderRadius: "16px" }}
                />
              </div>
            </div>
          </div>

          {/* Scrolling Gallery of Cards - Full Width */}
          <div className="relative w-full group/gallery pb-12">
            <AchievementsMarquee />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Home;
