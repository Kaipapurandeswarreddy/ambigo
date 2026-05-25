
const AMBIGO_PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=in.ambigo.user';

const bookNowButtonClass =
  'w-full py-3 bg-blue-50 hover:bg-blue-100 text-blue-600 font-bold rounded-xl transition-colors text-sm inline-block text-center';

const Home = () => {
  return (
    <div className="journey-home font-poppins text-slate-800 overflow-x-hidden relative min-h-screen bg-transparent">

      {/* --- HERO SECTION — Scene-based illustrated composition --- */}
      <section className="relative min-h-[92vh] overflow-hidden">

        {/* ═══ ATMOSPHERIC DECORATION ═══ */}
        <div className="absolute -top-16 -left-24 w-[520px] h-[420px] rounded-[60%_40%_55%_45%] bg-gradient-to-br from-[#fdd5b1]/20 to-[#fbb68a]/8 blur-[50px] pointer-events-none" style={{ zIndex: 0 }}></div>
        <div className="absolute -top-8 right-[-60px] w-[450px] h-[380px] bg-gradient-to-bl from-[#d4e8fb]/25 to-transparent rounded-full blur-[60px] pointer-events-none" style={{ zIndex: 0 }}></div>
        <div className="absolute top-[28%] right-[5%] w-[300px] h-[250px] bg-[#fdecd2]/15 rounded-full blur-[50px] pointer-events-none" style={{ zIndex: 0 }}></div>

        {/* ═══ TOP HALF — Content: heading left, card right ═══ */}
        <div className="relative max-w-[1300px] mx-auto px-6 lg:px-16" style={{ zIndex: 20 }}>
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 pt-8 lg:pt-4">

            {/* ── LEFT: heading + subtitle ── */}
            <div className="hero-fade-up w-full lg:w-[44%] flex flex-col items-start justify-start pt-0 relative z-20">

              {/* Main Heading */}
              <h1 className="
                text-[42px]
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
              ">
                Fast, Reliable
                <br />
                <span className="whitespace-nowrap">Ambulance Booking.</span>
              </h1>

              {/* Subtitle */}
              <p className="
                mt-2
                text-[15px]
                lg:text-[16px]
                font-medium
                text-[#1f2937]
                leading-relaxed
                text-left
                max-w-[520px]
              ">
                Emergency? Book medical transport instantly, 24/7.
              </p>

            </div>

            {/* ── RIGHT: card — overlaps upper terrain boundary ── */}
            <div className="hero-fade-up hero-fade-delay-2 w-full lg:w-[48%] flex flex-col items-center lg:items-end justify-start lg:-mt-12">
              <div className="hero-benefit-card bg-white/82 backdrop-blur-xl border border-white/60 px-6 py-6 lg:px-7 lg:py-7 rounded-[24px] shadow-[0_8px_28px_rgba(26,35,64,0.045),0_2px_8px_rgba(26,35,64,0.025)] w-full max-w-[420px] relative">

                {/* Card Header */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold text-[#ff8c42] uppercase tracking-widest block mb-1.5">Ambigo Benefits</span>
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
                    In emergency situations, help or rescue is just a click away. Our certified staff ensures timely medical transportation.
                  </p>
                </div>

                {/* Badge */}
                <div className="flex items-center gap-2.5 bg-amber-50/60 border border-amber-200/30 rounded-xl px-4 py-2 mb-5 w-full">
                  <span className="text-amber-500 text-base">⚡</span>
                  <span className="text-xs font-bold text-slate-600 tracking-tight">We will be at your door!</span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3 w-full">
                  <button className="w-full bg-gradient-to-r from-[#ff8c42] to-[#ff6b21] text-white font-bold tracking-wide py-3 px-6 rounded-full shadow-[0_8px_20px_rgba(255,140,66,0.18)] hover:shadow-[0_12px_28px_rgba(255,140,66,0.28)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 text-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.48-.71 1.58.04 2.82.72 3.54 1.83-3.02 1.68-2.51 5.37.49 6.64-.72 1.82-1.61 3.56-2.59 4.41zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
                    DOWNLOAD AMBIGO
                  </button>

                  <button className="w-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/80 font-bold tracking-wide py-3 px-6 rounded-full hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 text-xs">
                    <span className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center text-[#ff8c42] shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </span>
                    CALL: +91 8985138102
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ═══ BOTTOM HALF — Illustrated landscape scene (48% of hero) ═══ */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none" style={{ height: '48%', zIndex: 5 }}>

          {/* DEPTH LAYER 1 (back): Soft peach terrain — broad gentle rolling hills */}
          <svg className="hero-terrain-layer hero-terrain-back absolute inset-0 w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="terrainPeach" x1="0" y1="0" x2="1440" y2="600" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ff7a2f" stopOpacity="0.58" />
                <stop offset="48%" stopColor="#ffb47c" stopOpacity="0.38" />
                <stop offset="100%" stopColor="#f7d2b5" stopOpacity="0.26" />
              </linearGradient>
            </defs>
            <path d="M0,270 C120,210 220,178 350,170 C505,160 610,226 760,210 C930,192 1010,130 1165,118 C1285,108 1370,138 1440,112 L1440,600 L0,600 Z" fill="url(#terrainPeach)" />
          </svg>

          {/* DEPTH LAYER 2 (middle): Main blue terrain — dramatic landscape ridge */}
          <svg className="hero-terrain-layer hero-terrain-mid absolute inset-0 w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none" style={{ zIndex: 2 }}>
            <defs>
              <linearGradient id="terrainBlue" x1="0" y1="0" x2="1440" y2="600" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#58b7ee" stopOpacity="0.56" />
                <stop offset="46%" stopColor="#9dcaec" stopOpacity="0.48" />
                <stop offset="100%" stopColor="#c9dde9" stopOpacity="0.36" />
              </linearGradient>
              <linearGradient id="terrainOrange" x1="0" y1="170" x2="1440" y2="420" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ff5f2d" stopOpacity="0.28" />
                <stop offset="50%" stopColor="#ff8a3d" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#ffb27a" stopOpacity="0.24" />
              </linearGradient>
            </defs>
            <path d="M0,250 C115,165 250,108 410,132 C565,158 655,248 815,256 C960,264 1055,202 1195,192 C1310,184 1375,214 1440,190 L1440,600 L0,600 Z" fill="url(#terrainBlue)" />
            <path d="M0,302 C155,235 285,202 430,214 C595,228 690,296 850,306 C1020,316 1130,272 1275,260 C1358,253 1405,264 1440,248 L1440,600 L0,600 Z" fill="url(#terrainOrange)" />
          </svg>

          {/* ═══ AMBULANCE — embedded on blue terrain ridge (between layers 2 & 3) ═══ */}
          <div className="hidden hero-fade-up hero-fade-delay-1 hero-ambulance-float absolute left-[6%] lg:left-[10%] select-none" style={{ zIndex: 4, bottom: '69.5%' }}>
            <img
              src="/images/ambulance6.png"
              alt="Ambigo Ambulance"
              className="w-[180px] lg:w-[280px] h-auto object-contain relative z-10 drop-shadow-[0_16px_20px_rgba(15,23,42,0.12)]"
            />
            {/* Ground contact shadow — premium soft illustration feel, short, soft, directly under wheels */}
            <div className="absolute bottom-[2px] left-[15%] right-[15%] h-[6px] bg-[#1a2340]/[0.10] rounded-[50%] blur-[2.5px] z-0"></div>
          </div>

          {/* DEPTH LAYER 3 (front): Translucent foreground wash — cinematic depth */}
          <svg className="hero-terrain-layer hero-terrain-front absolute inset-0 w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none" style={{ zIndex: 3 }}>
            <defs>
              <linearGradient id="terrainWash" x1="0" y1="250" x2="0" y2="600" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#d7dde2" stopOpacity="0.76" />
                <stop offset="100%" stopColor="#f5f8fb" stopOpacity="0.96" />
              </linearGradient>
            </defs>
            <path d="M0,372 C150,318 285,292 445,304 C610,318 715,382 875,390 C1035,398 1180,356 1440,334 L1440,600 L0,600 Z" fill="url(#terrainWash)" />
          </svg>

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

          .hero-ambulance-float {
            animation:
              heroFadeUp 0.82s cubic-bezier(0.22, 1, 0.36, 1) 0.12s both,
              ambulanceFloat 5.6s ease-in-out 1.05s infinite;
            transform-origin: 50% 82%;
          }

          .hero-terrain-layer {
            will-change: transform;
            transform-origin: center bottom;
          }

          @keyframes heroFadeUp {
            from {
              opacity: 0;
              transform: translate3d(0, 18px, 0);
            }
            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }

          @keyframes ambulanceFloat {
            0%, 100% {
              transform: translate3d(0, 0, 0);
            }
            50% {
              transform: translate3d(0, -7px, 0);
            }
          }

          @keyframes terrainScrollBack {
            from { transform: translate3d(0, 10px, 0) scaleY(1.02); }
            to { transform: translate3d(0, -16px, 0) scaleY(1.08); }
          }

          @keyframes terrainScrollMid {
            from { transform: translate3d(0, 7px, 0) scaleY(1.01); }
            to { transform: translate3d(0, -24px, 0) scaleY(1.1); }
          }

          @keyframes terrainScrollFront {
            from { transform: translate3d(0, 4px, 0) scaleY(1.01); }
            to { transform: translate3d(0, -12px, 0) scaleY(1.06); }
          }

          @supports (animation-timeline: scroll()) {
            .hero-terrain-back {
              animation: terrainScrollBack linear both;
              animation-timeline: scroll(root block);
              animation-range: 0 760px;
            }

            .hero-terrain-mid {
              animation: terrainScrollMid linear both;
              animation-timeline: scroll(root block);
              animation-range: 0 760px;
            }

            .hero-terrain-front {
              animation: terrainScrollFront linear both;
              animation-timeline: scroll(root block);
              animation-range: 0 760px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-fade-up,
            .hero-ambulance-float,
            .hero-terrain-layer {
              animation: none !important;
              transform: none !important;
            }
          }
        `}</style>

      </section>

      {/* --- TYPES OF AMBULANCE --- */}
      <section className="home-ambulance-types py-32 px-6 lg:px-12 max-w-7xl mx-auto z-20 relative">
        {/* Section Wavy Background */}
        <div className="absolute top-0 left-0 w-[100vw] h-full -z-10 overflow-hidden pointer-events-none left-1/2 -translate-x-1/2">
          <svg className="absolute top-0 left-0 w-full h-full drop-shadow-sm opacity-60" viewBox="0 0 1440 600" preserveAspectRatio="none">
            <path fill="#e0f2fe" d="M1440,220 C1120,380 1020,50 600,150 C320,220 160,120 0,80 L0,0 L1440,0 Z"></path>
            <path fill="#ffedd5" d="M1440,120 C1160,280 940,20 540,120 C240,190 90,90 0,40 L0,0 L1440,0 Z"></path>
          </svg>
        </div>
        <div className="home-ambulance-types__intro text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Type of Ambulance</h2>
          <p className="text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Ambigo provides a comprehensive range of ambulance services designed to meet the diverse needs of our customers. From standard ambulance services to advanced options like patient transport, advance transport and basic life support, we cater to every possible requirement with utmost care and professionalism.
          </p>
        </div>

        <div className="home-ambulance-type-grid grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">

          {/* Card 1 */}
          <div className="bg-white rounded-[30px] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-50 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-full h-32 mb-6 flex items-center justify-center">
              <img src="/advance1.png" alt="Advance Life Support" className="max-h-full object-contain" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Advance Life Support</h3>
            <p className="text-slate-500 text-sm font-medium mb-6">Base Fare: ₹250</p>
            <a
              href={AMBIGO_PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={bookNowButtonClass}
            >
              Book Now
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[30px] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-50 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-full h-32 mb-6 flex items-center justify-center">
              <img src="/patientTran.png" alt="Basic Life Support" className="max-h-full object-contain" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Basic Life Support</h3>
            <p className="text-slate-500 text-sm font-medium mb-6">Base Fare: ₹280</p>
            <a
              href={AMBIGO_PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={bookNowButtonClass}
            >
              Book Now
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[30px] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-50 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-full h-32 mb-6 flex items-center justify-center">
              <img src="/patientTransportAmbi.png" alt="Patient Transport" className="max-h-full object-contain" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Patient Transport</h3>
            <p className="text-slate-500 text-sm font-medium mb-6">Base Fare: ₹600</p>
            <a
              href={AMBIGO_PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={bookNowButtonClass}
            >
              Book Now
            </a>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-[30px] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-50 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-full h-32 mb-6 flex items-center justify-center">
              <img src="/ambicab.png" alt="Car Cab" className="max-h-full object-contain" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Car Cab</h3>
            <p className="text-slate-500 text-sm font-medium mb-6">Base Fare: ₹700</p>
            <a
              href={AMBIGO_PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={bookNowButtonClass}
            >
              Book Now
            </a>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-[30px] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-50 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
            <div className="w-full h-32 mb-6 flex items-center justify-center">
              <img src="/ambigoAuto.png" alt="Auto Rikshaw" className="max-h-full object-contain" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Auto Rikshaw</h3>
            <p className="text-slate-500 text-sm font-medium mb-6">Base Fare: ₹200</p>
            <a
              href={AMBIGO_PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={bookNowButtonClass}
            >
              Book Now
            </a>
          </div>

        </div>
      </section>

      {/* --- WHY CHOOSE AMBIGO --- */}
      <section className="py-24 px-6 lg:px-12 relative z-20">
        {/* Section Wavy Background */}
        <div className="absolute top-0 left-0 w-[100vw] h-full -z-10 overflow-hidden pointer-events-none left-1/2 -translate-x-1/2">
          <svg className="absolute top-0 left-0 w-full h-full drop-shadow-sm opacity-60" viewBox="0 0 1440 600" preserveAspectRatio="none">
            <path fill="#ffedd5" d="M0,220 C320,380 420,50 840,150 C1120,220 1280,120 1440,80 L1440,0 L0,0 Z"></path>
            <path fill="#e0f2fe" d="M0,120 C280,280 500,20 900,120 C1200,190 1350,90 1440,40 L1440,0 L0,0 Z"></path>
          </svg>
        </div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-20 text-slate-900">Why Choose Ambigo?</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {/* Item 1 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-50 transform rotate-3 hover:rotate-0 transition-transform">
                <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">24/7 Response</h3>
              <p className="text-sm text-slate-500 font-medium px-4">24/7 in response. Clock and reanden simes.</p>
            </div>
            {/* Item 2 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-50 transform -rotate-3 hover:rotate-0 transition-transform">
                <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Verified Staff</h3>
              <p className="text-sm text-slate-500 font-medium px-4">We helps rsomotly verified verified Staff.</p>
            </div>
            {/* Item 3 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-50 transform rotate-3 hover:rotate-0 transition-transform">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Real-Time Tracking</h3>
              <p className="text-sm text-slate-500 font-medium px-4">Real-Time modern tracking Map.</p>
            </div>
            {/* Item 4 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-50 transform -rotate-3 hover:rotate-0 transition-transform">
                <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Affordable Pricing</h3>
              <p className="text-sm text-slate-500 font-medium px-4">Affordable pricing is raquirament.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- INSIGHTS / STATS --- */}
      <section className="py-16 px-6 lg:px-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-12 bg-orange-300"></div>
            <h2 className="text-2xl font-bold text-slate-800 tracking-wider uppercase">Insights</h2>
            <div className="h-px w-12 bg-orange-300"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 w-full text-center">
            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-extrabold text-orange-500 mb-2">150+</h3>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Patients Served</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-extrabold text-orange-500 mb-2">50+</h3>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Ambulances</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-extrabold text-orange-500 mb-2">5</h3>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Cities</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-extrabold text-orange-500 mb-2">100+</h3>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Hospitals</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-extrabold text-orange-500 mb-2">120+</h3>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Corporate</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-extrabold text-orange-500 mb-2">123+</h3>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Doctors</p>
            </div>
          </div>

          <div className="mt-12 inline-flex items-center gap-3 bg-white px-8 py-3 rounded-full shadow-sm border border-slate-100">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-slate-600 font-medium">Response Time: <span className="font-bold text-slate-900">Less than 10 mins</span></p>
          </div>
        </div>
      </section>

      {/* --- APP FEATURES --- */}
      <section className="py-32 px-6 lg:px-12 relative z-20">
        {/* Section Wavy Background */}
        <div className="absolute top-0 left-0 w-[100vw] h-full -z-10 overflow-hidden pointer-events-none left-1/2 -translate-x-1/2">
          <svg className="absolute top-0 left-0 w-full h-full drop-shadow-sm opacity-60" viewBox="0 0 1440 600" preserveAspectRatio="none">
            <path fill="#e0f2fe" d="M1440,220 C1120,380 1020,50 600,150 C320,220 160,120 0,80 L0,0 L1440,0 Z"></path>
            <path fill="#ffedd5" d="M1440,120 C1160,280 940,20 540,120 C240,190 90,90 0,40 L0,0 L1440,0 Z"></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">App Features</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Book ambulances in emergency or in advance. Experience our seamless platform.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all flex gap-6">
              <div className="w-14 h-14 shrink-0 bg-orange-50 rounded-2xl p-3 flex items-center justify-center">
                <img src="/instant_medical.png" className="w-full h-full object-contain" alt="" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Instant Medical Assistance</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Get immediate access to trusted ambulance services for any medical emergency.</p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all flex gap-6">
              <div className="w-14 h-14 shrink-0 bg-blue-50 rounded-2xl p-3 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Schedule a Ride</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Book ambulances in advance to ensure timely transportation for hospital visits.</p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all flex gap-6">
              <div className="w-14 h-14 shrink-0 bg-green-50 rounded-2xl p-3 flex items-center justify-center">
                <img src="/affordable_pricing.png" className="w-full h-full object-contain" alt="" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Affordable Pricing</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Enjoy transparent and competitive rates with flexible payment options.</p>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all flex gap-6">
              <div className="w-14 h-14 shrink-0 bg-red-50 rounded-2xl p-3 flex items-center justify-center">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Emergency Helpline</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Reach out to our 24/7 helpline for quick responses in critical situations.</p>
              </div>
            </div>
            {/* Feature 5 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all flex gap-6">
              <div className="w-14 h-14 shrink-0 bg-teal-50 rounded-2xl p-3 flex items-center justify-center">
                <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Health & Safety</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Learn vital tips and safety measures to handle emergencies effectively.</p>
              </div>
            </div>
            {/* Feature 6 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all flex gap-6">
              <div className="w-14 h-14 shrink-0 bg-purple-50 rounded-2xl p-3 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Real-Time Updates</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Stay informed with live tracking and direct communication with staff.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- APP PROMO / QR CODES --- */}
      <section className="py-20 px-6 lg:px-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">Get more in the app</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* User App */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-8 hover:-translate-y-1 transition-transform">
              <div className="w-32 h-32 p-2 bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.08)]">
                <img src="/user_app_link.png" alt="QR Code" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
                  <img src="/userapplogo.webp" alt="Ambigo Logo" className="w-10 h-10 rounded-xl" />
                  <h3 className="text-xl font-bold text-slate-900">Download Ambigo App</h3>
                </div>
                <p className="text-slate-500 text-sm mb-6">Scan the QR code to install the app and ride immediately.</p>
                <button className="flex items-center gap-2 text-orange-500 font-bold mx-auto sm:mx-0 group">
                  Download Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </div>
            </div>

            {/* Partner App */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-8 hover:-translate-y-1 transition-transform">
              <div className="w-32 h-32 p-2 bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.08)]">
                <img src="/partner_link.png" alt="QR Code" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
                  <img src="/partnerlogo.webp" alt="Partner Logo" className="w-10 h-10 rounded-xl" />
                  <h3 className="text-xl font-bold text-slate-900">Ambigo Partner App</h3>
                </div>
                <p className="text-slate-500 text-sm mb-6">Scan to download the partner app to drive and earn.</p>
                <button className="flex items-center gap-2 text-blue-500 font-bold mx-auto sm:mx-0 group">
                  Become a Partner
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- REAL-TIME TRACKING --- */}
      <section className="py-24 px-6 lg:px-12 bg-white relative overflow-hidden">
        {/* Decorative background cutouts matching design */}
        <div className="absolute right-0 top-0 w-[40%] h-full bg-orange-50/50 rounded-tl-[100px] -z-10"></div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative">

          <div className="w-full md:w-[40%] flex flex-col items-start">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">Real-Time<br />Tracking</h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">Map view, ambulance with destination and marked onar destination.</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-10 py-4 transition-all shadow-[0_10px_20px_rgba(249,115,22,0.3)] hover:-translate-y-1">
              Learn More
            </button>
          </div>

          <div className="w-full md:w-[60%] relative">
            <div className="w-full bg-[#f8fafc] rounded-[40px] p-4 lg:p-8 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              {/* Map Illustration Placeholder */}
              <div className="w-full h-[350px] bg-[#eef2ff] rounded-[30px] relative overflow-hidden">
                {/* Fake map roads */}
                <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'linear-gradient(45deg, transparent 48%, #94a3b8 48%, #94a3b8 52%, transparent 52%), linear-gradient(-45deg, transparent 48%, #94a3b8 48%, #94a3b8 52%, transparent 52%)', backgroundSize: '80px 80px' }}></div>

                {/* Fake route line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 200" preserveAspectRatio="none">
                  <path d="M50,150 L150,150 L350,50" fill="none" stroke="#2563EB" strokeWidth="6" strokeDasharray="10 10" />
                </svg>

                {/* Ambulance icon on map */}
                <div className="absolute bottom-[20%] left-[10%] bg-white p-3 rounded-2xl shadow-xl">
                  <img src="/patientTransportAmbi.png" className="w-10 h-10 object-contain transform -scale-x-100" alt="Ambulance marker" />
                </div>

                {/* Destination Pin */}
                <div className="absolute top-[20%] right-[10%]">
                  <svg className="w-14 h-14 text-orange-500 drop-shadow-xl" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HEALTH TIPS --- */}
      <section className="home-health-tips py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Health Tips</h2>
              <p className="text-slate-500 text-lg">Daily habits for a healthier lifestyle.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-orange-500 font-bold hover:text-orange-600 transition-colors">
              View All <span className="text-xl">›</span>
            </button>
          </div>

          <div className="home-health-tip-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tip 1 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:-translate-y-2 transition-transform group">
              <div className="h-48 overflow-hidden">
                <img src="/fruits.jpg" alt="Nutrition" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-orange-50 text-orange-600 text-xs font-bold rounded-full mb-4">Nutrition</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">Healthy Eating Habits for a Stronger Heart</h3>
                <p className="text-slate-500 text-sm line-clamp-2">Discover how the right food choices can significantly improve your cardiovascular health.</p>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:-translate-y-2 transition-transform group">
              <div className="h-48 overflow-hidden">
                <img src="/exercise.jpg" alt="Fitness" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-4">Fitness</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">The Importance of Regular Exercise</h3>
                <p className="text-slate-500 text-sm line-clamp-2">Discover how just 30 minutes of daily exercise can transform your health and energy levels.</p>
              </div>
            </div>

            {/* Tip 3 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:-translate-y-2 transition-transform group">
              <div className="h-48 overflow-hidden">
                <img src="/meditating.jpg" alt="Mental Health" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full mb-4">Mental Health</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">Mindfulness Techniques for Stress Relief</h3>
                <p className="text-slate-500 text-sm line-clamp-2">Learn simple daily practices to reduce anxiety and improve your mental wellbeing.</p>
              </div>
            </div>

            {/* Tip 4 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:-translate-y-2 transition-transform group">
              <div className="h-48 overflow-hidden">
                <img src="/sleeping.jpg" alt="Sleep" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-purple-50 text-purple-600 text-xs font-bold rounded-full mb-4">Sleep</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">Better Sleep Habits for Optimal Health</h3>
                <p className="text-slate-500 text-sm line-clamp-2">Discover the science-backed strategies to improve your sleep quality for better health.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- YOUR HEALTH OUR PRIORITY --- */}
      <section className="py-24 px-6 lg:px-12 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 font-bold rounded-full text-sm mb-6 animate-pulse uppercase tracking-wider">Launching Soon</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Your Health, Our Priority</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Experience comprehensive healthcare services designed for your convenience and well-being.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-[40px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-50 hover:-translate-y-2 transition-transform flex flex-col h-full">
              <div className="w-full h-40 mb-8 flex items-center justify-center">
                <img src="/online_consultance.png" className="max-h-full object-contain drop-shadow-xl" alt="Consultation" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Doctor Consultation</h3>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm text-slate-500"><svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> 24/7 Availability</li>
                <li className="flex items-start gap-2 text-sm text-slate-500"><svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Instant Prescriptions</li>
                <li className="flex items-start gap-2 text-sm text-slate-500"><svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Secure & Private</li>
              </ul>
              <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-orange-500 transition-colors mt-auto">Get Notified</button>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-[40px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-50 hover:-translate-y-2 transition-transform flex flex-col h-full">
              <div className="w-full h-40 mb-8 flex items-center justify-center">
                <img src="/pharma_delivery.png" className="max-h-full object-contain drop-shadow-xl" alt="Pharma" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Pharma Delivery</h3>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm text-slate-500"><svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Same-Day Delivery</li>
                <li className="flex items-start gap-2 text-sm text-slate-500"><svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Genuine Medicines</li>
                <li className="flex items-start gap-2 text-sm text-slate-500"><svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Easy Reordering</li>
              </ul>
              <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-orange-500 transition-colors mt-auto">Get Notified</button>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-[40px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-50 hover:-translate-y-2 transition-transform flex flex-col h-full">
              <div className="w-full h-40 mb-8 flex items-center justify-center">
                <img src="/lab_test.png" className="max-h-full object-contain drop-shadow-xl" alt="Lab Tests" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Lab Tests at Home</h3>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm text-slate-500"><svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Certified Labs</li>
                <li className="flex items-start gap-2 text-sm text-slate-500"><svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Home Collection</li>
                <li className="flex items-start gap-2 text-sm text-slate-500"><svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Digital Reports</li>
              </ul>
              <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-orange-500 transition-colors mt-auto">Get Notified</button>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-[40px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-50 hover:-translate-y-2 transition-transform flex flex-col h-full">
              <div className="w-full h-40 mb-8 flex items-center justify-center">
                <img src="/hospital_token.png" className="max-h-full object-contain drop-shadow-xl" alt="Tokens" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Visiting Tokens</h3>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2 text-sm text-slate-500"><svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Queue Management</li>
                <li className="flex items-start gap-2 text-sm text-slate-500"><svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Flexible Timing</li>
                <li className="flex items-start gap-2 text-sm text-slate-500"><svg className="w-5 h-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Easy Rescheduling</li>
              </ul>
              <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-orange-500 transition-colors mt-auto">Get Notified</button>
            </div>
          </div>
        </div>
      </section>


      {/* --- OUR TRUSTED PARTNERS --- */}
      <section className="py-24 px-6 lg:px-12 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Our Trusted Partners</h2>
          <p className="text-slate-700 font-extrabold text-xl mb-6">Collaborating with healthcare professionals to ensure quality service.</p>
          <p className="text-slate-500 mb-16 max-w-5xl mx-auto text-lg leading-relaxed">
            Partner with Us. Partner with Ambigo and join our mission to deliver exceptional ambulance services and medical care. Whether you're a hospital, a corporate entity, or an individual, we provide diverse partnership opportunities tailored to your needs. Together, we can create a meaningful impact in delivering timely and reliable emergency medical assistance. Let's collaborate to save lives and make a difference!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
              <div className="text-7xl mb-6 transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">🚑</div>
              <h4 className="font-extrabold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">Ambulance Drivers</h4>
            </div>
            <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
              <div className="text-7xl mb-6 transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">👨‍⚕️</div>
              <h4 className="font-extrabold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">Doctors</h4>
            </div>
            <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
              <div className="text-7xl mb-6 transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">🏥</div>
              <h4 className="font-extrabold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">Hospitals</h4>
            </div>
            <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
              <div className="text-7xl mb-6 transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">🩺</div>
              <h4 className="font-extrabold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">Medical Persons</h4>
            </div>
          </div>
        </div>
      </section>


      {/* --- AWARDS & ACHIEVEMENTS --- */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Prestigious Awards & Achievements</h2>
            <p className="text-slate-500 text-lg">Recognized by the most esteemed organizations for our outstanding contribution to the healthcare sector.</p>
          </div>

          {/* Top 4 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

            {/* Card 1 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col items-start text-left hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
              <div className="h-16 w-full flex justify-start items-center mb-6">
                <img src="/aic_sku.png" alt="AIC SKU" className="h-full max-w-[120px] object-contain" />
              </div>
              <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-3">INCUBATED AT AIC-SKU</p>
              <h4 className="font-extrabold text-slate-900 text-lg mb-3 leading-tight group-hover:text-blue-600 transition-colors">Selected and incubated at the Atal Incubation Centre (AIC)</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Gaining expert mentorship, guidance, and ecosystem support to grow faster</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col items-start text-left hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
              <div className="h-16 w-full flex justify-start items-center mb-6">
                <img src="/rtih.jpg" alt="RTIH" className="h-full max-w-[120px] object-contain" />
              </div>
              <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-3">RECOGNIZED AS</p>
              <h4 className="font-extrabold text-slate-900 text-lg mb-3 leading-tight group-hover:text-blue-600 transition-colors">RTIH - TATA Innovation Hub, Anantapur</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Office space at RTIH - TATA Innovation Hub, Anantapur</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col items-start text-left hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
              <div className="h-16 w-full flex justify-start items-center mb-6">
                <img src="/google_cloud.jpg" alt="Google Cloud" className="h-full max-w-[120px] object-contain" />
              </div>
              <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-3">STARTUP CREDITS FROM GOOGLE CLOUD</p>
              <h4 className="font-extrabold text-slate-900 text-lg mb-3 leading-tight group-hover:text-blue-600 transition-colors">Worth USD $2,000</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Enabling Ambigo to build, test, and scale its technology infrastructure with enterprise-grade cloud services.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col items-start text-left hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
              <div className="h-16 w-full flex justify-start items-center mb-6">
                <img src="/dpiit.png" alt="DPIIT" className="h-full max-w-[120px] object-contain" />
              </div>
              <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-3">RECOGNIZED BY</p>
              <h4 className="font-extrabold text-slate-900 text-lg mb-3 leading-tight group-hover:text-blue-600 transition-colors">Recognized by Startup India</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Successfully registered and certified under the Startup India initiative.</p>
            </div>

          </div>

          {/* Wide Award Card */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 md:p-12 rounded-[40px] shadow-xl mb-12 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

            <div className="flex-1 relative z-10 text-white">
              <div className="bg-white rounded-2xl inline-flex items-center justify-center p-3 mb-6 shadow-sm">
                <img src="/apdts26.png" alt="Logo" className="h-10 object-contain" />
              </div>
              <p className="text-orange-100 text-sm mb-3 font-medium">We are honored to be a</p>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">Student Innovator /<br />Campus Startup Award</h3>
              <p className="text-orange-200 font-bold tracking-wide">#techpioneers25</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <img src="/summit_ap.png" alt="Award 1" className="h-48 w-64 object-cover rounded-[16px] shadow-lg border-4 border-white/20 transition-transform duration-500 hover:scale-105 hover:border-white/40" />
              <img src="/summit_ap2.png" alt="Award 2" className="h-48 w-64 object-cover rounded-[16px] shadow-lg border-4 border-white/20 transition-transform duration-500 hover:scale-105 hover:border-white/40" />
            </div>
          </div>

          {/* Bottom 3 Cards (Gallery / Media) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] overflow-hidden hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col group">
              <div className="relative overflow-hidden h-56 p-4 pb-0">
                <img src="/etv_bharath.png" alt="ETV Bharath" className="w-full h-full object-cover rounded-t-[24px] rounded-b-md group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-8 right-8 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-widest uppercase">
                  RECOGNITION
                </div>
              </div>
              <div className="p-8">
                <h4 className="font-extrabold text-slate-900 text-xl mb-1 group-hover:text-blue-600 transition-colors">ETV Bharath</h4>
                <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-4">RECOGNITION FOR INNOVATION</p>
                <p className="text-slate-500 leading-relaxed text-sm">Andhra Student Develops 'Ambigo', One Stop Healthcare App For Ambulance, Cabs, And Medical Help.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] overflow-hidden hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col group">
              <div className="relative overflow-hidden h-56 p-4 pb-0">
                <img src="/acheive1.jpg" alt="IIC Award" className="w-full h-full object-cover rounded-t-[24px] rounded-b-md group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-8 right-8 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-widest uppercase">
                  AWARD
                </div>
              </div>
              <div className="p-8">
                <h4 className="font-extrabold text-slate-900 text-xl mb-1 group-hover:text-blue-600 transition-colors">Ambigo by IIC-Ministry of Education Institute</h4>
                <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-4">INNOVATION CELL (IIC) RECOGNITION</p>
                <p className="text-slate-500 leading-relaxed text-sm">Ambigo has secured 02 in the Jntua IIC Startup competition conducted on 17 september 2025, organized by the Institution's Innovation Council (IIC).</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] overflow-hidden hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col group">
              <div className="relative overflow-hidden h-56 p-4 pb-0">
                <img src="/surya_news.png" alt="Surya News" className="w-full h-full object-cover rounded-t-[24px] rounded-b-md group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-8 right-8 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-widest uppercase">
                  AWARD
                </div>
              </div>
              <div className="p-8">
                <h4 className="font-extrabold text-slate-900 text-xl mb-1 group-hover:text-blue-600 transition-colors">Surya News</h4>
                <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-4">RECOGNITION FOR STARTUP</p>
                <p className="text-slate-500 leading-relaxed text-sm">The Surya News highlighted Ambigo's innovative healthcare solutions, recognizing its impact on improving access to medical services and emergency response in the region.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] overflow-hidden hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col group">
              <div className="relative overflow-hidden h-56 p-4 pb-0 flex items-center justify-center">
                <img src="/msme_logo.jpeg" alt="MSME Logo" className="h-full object-contain group-hover:scale-105 transition-transform duration-700 p-4" />
                <div className="absolute top-8 right-8 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-widest uppercase">
                  RECOGNITION
                </div>
              </div>
              <div className="p-8 border-t border-slate-50">
                <h4 className="font-extrabold text-slate-900 text-xl mb-1 group-hover:text-blue-600 transition-colors">Udayam / MSME Registration</h4>
                <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-4">TIMES BUSINESS AWARDS</p>
                <p className="text-slate-500 leading-relaxed text-sm">Officially registered under the Udyam MSME framework, giving us credibility, government recognition, and access to support schemes.</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] overflow-hidden hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col group">
              <div className="relative overflow-hidden h-56 p-4 pb-0">
                <img src="/jntu_sakshi.png" alt="JNTU Sakshi" className="w-full h-full object-cover object-top rounded-t-[24px] rounded-b-md group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-8 right-8 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-widest uppercase">
                  AWARD
                </div>
              </div>
              <div className="p-8">
                <h4 className="font-extrabold text-slate-900 text-xl mb-1 group-hover:text-blue-600 transition-colors">Appreciation for Excellence</h4>
                <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-4">RECOGNITION BY JNTUA OFFICIALS</p>
                <p className="text-slate-500 leading-relaxed text-sm">Receiving top-tier recognition and appreciation from the esteemed officials of Jawaharlal Nehru Technological University Anantapur.</p>
              </div>
            </div>

          </div>

        </div>
      </section>    </div>
  );
};

export default Home;
