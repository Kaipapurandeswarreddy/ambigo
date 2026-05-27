import { type ReactNode, useEffect, useRef, useState } from 'react';

type Benefit = {
  title: string;
  description: string;
  icon: ReactNode;
};

const stats = [
  { value: '150+', label: 'Patients Served' },
  { value: '50+', label: 'Ambulances' },
  { value: '100+', label: 'Hospitals' },
  { value: '<10m', label: 'Avg. Response' },
];

const benefits: Benefit[] = [
  {
    title: '24/7 Response',
    description: 'Round-the-clock dispatch so help reaches you when every minute matters.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Verified Staff',
    description: 'Background-checked drivers and medics trained for safe, reliable transport.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Real-Time Tracking',
    description: 'Live map updates from booking to pickup so you always know where help is.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Affordable Pricing',
    description: 'Transparent base fares with no hidden charges on emergency bookings.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
];

const WhyChooseAmbigo = () => {
  const panelRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="ambigo-why ambigo-section ambigo-section-panel px-6 lg:px-12 relative z-20">
      <div className="ambigo-section-glow" aria-hidden="true" />

      <div className="ambigo-container max-w-6xl mx-auto">
        <div className="ambigo-section-header">
          <span className="ambigo-eyebrow">Why Ambigo</span>
          <h2 className="ambigo-section-title">Trusted by families across India</h2>
        </div>

        <div className="ambigo-bento">
          <div ref={panelRef} className={`ambigo-featured-panel ${isVisible ? 'is-visible' : ''}`}>
            <h3 className="ambigo-featured-panel__title">Trusted by India&apos;s families</h3>
            <p className="ambigo-featured-panel__lead">
              Every crew member is verified and trained before their first booking — so you get dependable
              ambulance support in emergencies.
            </p>
            <div className="ambigo-featured-panel__stats">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="ambigo-featured-stat"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <span className="ambigo-featured-stat__value">{stat.value}</span>
                  <span className="ambigo-featured-stat__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="ambigo-benefit-grid">
            {benefits.map((item) => (
              <article key={item.title} className="ambigo-benefit-card">
                <div className="ambigo-benefit-card__icon" aria-hidden="true">
                  {item.icon}
                </div>
                <h4 className="ambigo-benefit-card__title">{item.title}</h4>
                <p className="ambigo-benefit-card__text">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAmbigo;
