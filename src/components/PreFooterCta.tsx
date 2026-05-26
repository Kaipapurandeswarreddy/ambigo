const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=in.ambigo.user';


function StoreBadgeGoogle() {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="ambigo-store-badge"
      aria-label="Get it on Google Play"
    >
      <svg className="ambigo-store-badge__icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M3.609 1.814L13.792 12 3.61 22.186a1.203 1.203 0 01-1.22-1.91l8.37-8.37-8.37-8.37a1.203 1.203 0 011.22-1.91zm12.6 10.39l2.04 2.04-8.37 8.37a1.203 1.203 0 01-1.22-1.91l6.33-6.33 1.22-2.17zm3.78-2.17l2.17 1.22a1.203 1.203 0 010 2.17l-2.17 1.22-1.22-2.17 1.22-2.17 2.17 1.22zM17.4 3.61l-8.37 8.37-2.04-2.04 8.37-8.37a1.203 1.203 0 011.22 1.91z"
        />
      </svg>
      <span className="ambigo-store-badge__text">
        <span className="ambigo-store-badge__eyebrow">GET IT ON</span>
        <span className="ambigo-store-badge__name">Google Play</span>
      </span>
    </a>
  );
}

function StoreBadgeApple() {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="ambigo-store-badge"
      aria-label="Download on the App Store"
    >
      <svg className="ambigo-store-badge__icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17.2 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
        />
      </svg>
      <span className="ambigo-store-badge__text">
        <span className="ambigo-store-badge__eyebrow">Download on the</span>
        <span className="ambigo-store-badge__name">App Store</span>
      </span>
    </a>
  );
}

const PreFooterCta = () => {
  return (
    <section className="ambigo-prefooter-cta" aria-labelledby="prefooter-cta-title">
      <div className="ambigo-prefooter-cta__wash" aria-hidden="true" />
      <div className="ambigo-prefooter-cta__glow ambigo-prefooter-cta__glow--left" aria-hidden="true" />
      <div className="ambigo-prefooter-cta__glow ambigo-prefooter-cta__glow--right" aria-hidden="true" />

      <span className="ambigo-prefooter-cta__plus ambigo-prefooter-cta__plus--1" aria-hidden="true">
        +
      </span>
      <span className="ambigo-prefooter-cta__plus ambigo-prefooter-cta__plus--2" aria-hidden="true">
        +
      </span>
      <span className="ambigo-prefooter-cta__shape ambigo-prefooter-cta__shape--dot" aria-hidden="true" />
      <span className="ambigo-prefooter-cta__shape ambigo-prefooter-cta__shape--ring" aria-hidden="true" />

      <div className="ambigo-prefooter-cta__inner">
        <figure className="ambigo-prefooter-cta__art ambigo-prefooter-cta__art--left">
          <img
            src="/Ambulance-pana.svg"
            alt=""
            width={750}
            height={500}
            className="ambigo-prefooter-cta__illustration"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div className="ambigo-prefooter-cta__content">
          <h2 id="prefooter-cta-title" className="ambigo-prefooter-cta__title">
            India&apos;s First On-Demand Ambulance App
          </h2>
          <p className="ambigo-prefooter-cta__lead">
            Book emergency transport and connect with hospitals — fast, reliable care when it
            matters most.
          </p>

          <div className="ambigo-prefooter-cta__rating" aria-label="Highly rated by users">
            <div className="ambigo-prefooter-cta__stars" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} viewBox="0 0 20 20" className="ambigo-prefooter-cta__star">
                  <path
                    fill="currentColor"
                    d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.26 5.06 16.71l.94-5.5-4-3.9 5.53-.8L10 1.5z"
                  />
                </svg>
              ))}
            </div>
            <p className="ambigo-prefooter-cta__rating-text">
              <strong>4.8</strong>
              <span className="ambigo-prefooter-cta__rating-sep" aria-hidden="true">
                ·
              </span>
              Trusted by patients &amp; partners nationwide
            </p>
          </div>

          <div className="ambigo-prefooter-cta__stores">
            <StoreBadgeGoogle />
            <StoreBadgeApple />
          </div>
        </div>

        <figure className="ambigo-prefooter-cta__art ambigo-prefooter-cta__art--right">
          <img
            src="/Doctor-pana.svg"
            alt=""
            width={750}
            height={500}
            className="ambigo-prefooter-cta__illustration"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  );
};

export default PreFooterCta;
