import { useState, useEffect, useRef, type CSSProperties } from 'react';

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=in.ambigo.user';

const services = [
  {
    img: '/advance1.png',
    alt: 'Advance Life Support ambulance',
    title: 'Advance Life Support',
    fare: '₹250',
    badge: 'Critical Care',
  },
  {
    img: '/patientTran.png',
    alt: 'Basic Life Support ambulance',
    title: 'Basic Life Support',
    fare: '₹280',
    badge: 'Life Support',
  },
  {
    img: '/patientTransportAmbi.png',
    alt: 'Patient Transport ambulance',
    title: 'Patient Transport',
    fare: '₹600',
    badge: 'Transport',
  },
  {
    img: '/ambicab.png',
    alt: 'Car Cab',
    title: 'Car Cab',
    fare: '₹700',
    badge: 'Cab',
  },
  {
    img: '/ambigoAuto.png',
    alt: 'Auto Rikshaw',
    title: 'Auto Rikshaw',
    fare: '₹200',
    badge: 'Quick Ride',
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    el.classList.add('amb-saas-card--visible');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('amb-saas-card--visible');
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px 0px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={cardRef}
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="amb-saas-card amb-saas-card--visible flex-shrink-0 snap-center w-10/12 max-w-[320px] md:w-full md:max-w-none"
      style={{ '--reveal-i': index } as CSSProperties}
      role="listitem"
      aria-label={`Book ${service.title}, base fare ${service.fare}`}
    >
      <span className="amb-saas-card__badge">{service.badge}</span>

      <div className="amb-saas-card__media">
        <img src={service.img} alt={service.alt} loading="lazy" decoding="async" />
      </div>

      <div className="amb-saas-card__body">
        <h3 className="amb-saas-card__title">{service.title}</h3>
      </div>

      <span className="amb-saas-cta">
        <span className="amb-saas-cta__text">Book Now</span>
        <span className="amb-saas-cta__arrow" aria-hidden="true">
          →
        </span>
      </span>
    </a>
  );
}

const AmbulanceServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const card = scrollRef.current.querySelector('.amb-saas-card') as HTMLElement;
      if (card) {
        const cardWidth = card.clientWidth;
        const gap = 16;
        const index = Math.round(scrollLeft / (cardWidth + gap));
        if (index !== activeIndex && index >= 0 && index < services.length) {
          setActiveIndex(index);
        }
      }
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('.amb-saas-card') as HTMLElement;
      if (card) {
        const cardWidth = card.clientWidth;
        const gap = 16;
        scrollRef.current.scrollTo({ left: (cardWidth + gap) * index, behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      className="amb-saas-section"
      aria-labelledby="ambulance-types-title"
    >
      <div className="amb-saas-blob amb-saas-blob--left" aria-hidden="true" />
      <div className="amb-saas-blob amb-saas-blob--right" aria-hidden="true" />

      <div className="amb-saas-inner">
        <header className="amb-saas-header">
          <span className="amb-saas-eyebrow">Services</span>
          <h2 id="ambulance-types-title" className="amb-saas-title">
            Type of Ambulance
          </h2>
          <p className="amb-saas-lead">
            From advanced life support to patient transport and cab options — book the right
            vehicle for your emergency with transparent base fares.
          </p>
        </header>

        <div className="w-full relative">
          {/* Mobile: horizontal scroll row. Desktop: grid */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex flex-row flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-6 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-6 md:overflow-visible md:px-0 md:pb-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
            role="list"
          >
            <style>{`.w-full .flex::-webkit-scrollbar { display: none; }`}</style>
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>

          {/* Dots Navigation for Mobile */}
          <div className="flex flex-row justify-center items-center gap-[6px] mt-3 mb-6 md:hidden">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`h-[7px] rounded-full border-0 p-0 cursor-pointer transition-all duration-300 ${
                  activeIndex === idx
                    ? 'w-5 bg-[#ff8c42] shadow-[0_0_10px_rgba(255,140,66,0.5)]'
                    : 'w-[7px] bg-slate-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmbulanceServices;
