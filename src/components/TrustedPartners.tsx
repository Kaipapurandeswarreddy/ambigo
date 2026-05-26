import { useState, useEffect, useRef, type CSSProperties } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Ambulance, Building2, Stethoscope, Users } from 'lucide-react';

const partners: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: 'Ambulance Drivers',
    description: 'Verified operators delivering fast, reliable emergency transport.',
    icon: Ambulance,
  },
  {
    title: 'Doctors',
    description: 'Specialists and physicians supporting coordinated patient care.',
    icon: Stethoscope,
  },
  {
    title: 'Hospitals',
    description: 'Healthcare facilities integrated for seamless handoffs and admissions.',
    icon: Building2,
  },
  {
    title: 'Medical Persons',
    description: 'Paramedics, nurses, and allied staff on our trusted care network.',
    icon: Users,
  },
];

function PartnerCard({
  partner,
  index,
}: {
  partner: (typeof partners)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const Icon = partner.icon;

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
      { threshold: 0.05, rootMargin: '0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className="amb-saas-card amb-partner-card amb-saas-card--visible flex-shrink-0 snap-center w-10/12 max-w-[320px] md:w-full md:max-w-none"
      style={{ '--reveal-i': index } as CSSProperties}
    >
      <div className="amb-partner-card__glow" aria-hidden="true" />
      <div className="amb-partner-card__icon-wrap">
        <Icon className="amb-partner-card__icon" strokeWidth={1.75} aria-hidden="true" />
      </div>
      <h3 className="amb-partner-card__title">{partner.title}</h3>
      <p className="amb-partner-card__desc">{partner.description}</p>
    </article>
  );
}

const TrustedPartners = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const card = scrollRef.current.querySelector('.amb-partner-card') as HTMLElement;
      if (card) {
        const cardWidth = card.clientWidth;
        const gap = 16;
        const index = Math.round(scrollLeft / (cardWidth + gap));
        if (index !== activeIndex && index >= 0 && index < partners.length) {
          setActiveIndex(index);
        }
      }
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('.amb-partner-card') as HTMLElement;
      if (card) {
        const cardWidth = card.clientWidth;
        const gap = 16;
        scrollRef.current.scrollTo({ left: (cardWidth + gap) * index, behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      className="amb-saas-section amb-partners-section"
      aria-labelledby="trusted-partners-title"
    >
      <div className="amb-saas-blob amb-saas-blob--left" aria-hidden="true" />
      <div className="amb-saas-blob amb-saas-blob--right" aria-hidden="true" />

      <div className="amb-saas-inner">
        <header className="amb-saas-header">
          <span className="amb-saas-eyebrow">Partners</span>
          <h2 id="trusted-partners-title" className="amb-saas-title">
            Our Trusted Partners
          </h2>
          <p className="amb-saas-lead amb-partners-lead">
            Collaborating with healthcare professionals to ensure quality service. Partner with
            Ambigo — whether you&apos;re a hospital, corporate team, or individual — and join our
            mission to deliver exceptional ambulance care tailored to your needs.
          </p>
        </header>

        <div className="w-full relative">
          {/* Mobile: horizontal scroll. Desktop: grid */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex flex-row flex-nowrap overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible md:px-0 md:pb-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
            role="list"
          >
            <style>{`.amb-partners-section .flex::-webkit-scrollbar { display: none; }`}</style>
            {partners.map((partner, index) => (
              <PartnerCard key={partner.title} partner={partner} index={index} />
            ))}
          </div>

          {/* Dots Navigation for Mobile */}
          <div className="flex flex-row justify-center items-center gap-[6px] mt-3 mb-6 md:hidden">
            {partners.map((_, idx) => (
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

export default TrustedPartners;
