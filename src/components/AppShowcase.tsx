import { useState, useRef } from 'react';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=in.ambigo.user';

const screens = [
  {
    src: '/app-showcase-booking.jpg',
    alt: 'Ambigo app booking screen with route and ambulance options',
    caption: (
      <>
        Book your ride <strong>instantly</strong>
      </>
    ),
  },
  {
    src: '/app-showcase-hospitals.jpg',
    alt: 'Ambigo app hospital search and map view',
    featured: true,
    caption: (
      <>
        Find <strong>hospitals near you</strong>
      </>
    ),
  },
  {
    src: '/app-screenshot-3.jpg',
    alt: 'Ambigo app screenshot 3',
    caption: (
      <>
        Fast & <strong>Reliable</strong>
      </>
    ),
  },
  {
    src: '/app-screenshot-4.jpg',
    alt: 'Ambigo app screenshot 4',
    caption: (
      <>
        Seamless <strong>Experience</strong>
      </>
    ),
  },
];


const AppShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollPos(e.currentTarget.scrollLeft);
  };

  return (
    <section className="ambigo-app-showcase ambigo-section relative z-20" aria-labelledby="app-showcase-title">
      <div className="ambigo-glow-backdrop" aria-hidden="true" />
      <div className="ambigo-glow-backdrop ambigo-glow-backdrop--soft" aria-hidden="true" />

      <div className="ambigo-container max-w-5xl mx-auto relative z-[1]">
        <div className="ambigo-section-header">
          <span className="ambigo-eyebrow">How it works</span>
          <h2 id="app-showcase-title" className="ambigo-section-title">
            Book ambulance care in minutes
          </h2>
          <p className="ambigo-section-lead">
            Download the Ambigo app and get verified ambulance support — instant booking, live tracking, and 24/7 help.
          </p>
        </div>

        <div 
          className="ambigo-phone-showcase" 
          ref={scrollRef} 
          onScroll={handleScroll}
        >
          {screens.map((screen) => (
            <div
              key={screen.src}
              className={`ambigo-phone-showcase__item ${screen.featured ? 'ambigo-phone-showcase__item--featured' : ''}`}
            >
              <p className="ambigo-phone-showcase__caption">{screen.caption}</p>
              <figure className="ambigo-phone-mockup ambigo-phone-mockup--device">
                <img src={screen.src} alt={screen.alt} loading="lazy" decoding="async" />
              </figure>
            </div>
          ))}
        </div>

        {/* Mobile Dot Navigation */}
        <div className="flex flex-row flex-nowrap md:hidden justify-center items-center gap-[6px] mt-6">
          {screens.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                const container = scrollRef.current;
                if (container) {
                  const scrollAmount = container.clientWidth * 0.85 * idx;
                  container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
                }
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.round((scrollPos || 0) / (scrollRef.current?.clientWidth || 300)) === idx
                  ? 'bg-orange-500'
                  : 'bg-orange-200 hover:bg-orange-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-6 md:mt-8">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ambigo-btn-primary ambigo-btn-glow text-sm md:text-base py-3 px-8"
          >
            Download App
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
