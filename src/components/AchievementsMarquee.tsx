import { useState } from 'react';

const achievements = [
  {
    type: 'INCUBATED AT AIC-SKU',
    title: 'Selected and incubated at the Atal Incubation Centre (AIC)',
    description: 'Gaining expert mentorship, guidance, and ecosystem support to grow faster.',
    imgSrc: '/aic_sku.png',
    imgAlt: 'AIC SKU',
    theme: 'orange'
  },
  {
    type: 'RECOGNIZED AS',
    title: 'RTIH - TATA Innovation Hub, Anantapur',
    description: 'Office space at RTIH - TATA Innovation Hub, Anantapur.',
    imgSrc: '/rtih.jpg',
    imgAlt: 'RTIH',
    theme: 'orange'
  },
  {
    type: 'RECOGNITION FOR INNOVATION',
    title: 'ETV Bharath',
    description: "Andhra Student Develops 'Ambigo', One Stop Healthcare App For Ambulance, Cabs, And Medical Help.",
    imgSrc: '/etv_bharath.png',
    imgAlt: 'ETV Bharath',
    theme: 'blue',
    coverImage: true
  },
  {
    type: 'INNOVATION CELL (IIC) RECOGNITION',
    title: 'Ambigo by IIC-Ministry of Education Institute',
    description: "Ambigo has secured 02 in the Jntua IIC Startup competition conducted on 17 september 2025, organized by the Institution's Innovation Council (IIC).",
    imgSrc: '/acheive1.jpg',
    imgAlt: 'IIC Award',
    theme: 'blue',
    coverImage: true
  },
  {
    type: 'RECOGNITION FOR STARTUP',
    title: 'Surya News',
    description: "The Surya News highlighted Ambigo's innovative healthcare solutions, recognizing its impact on improving access to medical services and emergency response in the region.",
    imgSrc: '/surya_news.png',
    imgAlt: 'Surya News',
    theme: 'blue',
    coverImage: true
  },
  {
    type: 'STARTUP CREDITS FROM GOOGLE CLOUD',
    title: 'Worth USD $2,000',
    description: 'Enabling Ambigo to build, test, and scale its technology infrastructure with enterprise-grade cloud services.',
    imgSrc: '/google_cloud.jpg',
    imgAlt: 'Google Cloud',
    theme: 'orange'
  },
  {
    type: 'RECOGNIZED BY',
    title: 'Recognized by Startup India',
    description: 'Successfully registered and certified under the Startup India initiative.',
    imgSrc: '/dpiit.png',
    imgAlt: 'DPIIT',
    theme: 'orange'
  },
  {
    type: 'TIMES BUSINESS AWARDS',
    title: 'Udayam / MSME Registration',
    description: 'Officially registered under the Udyam MSME framework, giving us credibility, government recognition, and access to support schemes.',
    imgSrc: '/msme_logo.jpeg',
    imgAlt: 'MSME Logo',
    theme: 'blue',
    coverImage: true
  },
  {
    type: 'RECOGNITION BY JNTUA OFFICIALS',
    title: 'Appreciation for Excellence',
    description: 'Receiving top-tier recognition and appreciation from the esteemed officials of Jawaharlal Nehru Technological University Anantapur.',
    imgSrc: '/jntu_sakshi.png',
    imgAlt: 'JNTU Sakshi',
    theme: 'blue',
    coverImage: true
  },
  {
    type: 'NEWS COVERAGE',
    title: 'Featured in Local Media',
    description: "Ambigo's innovative ambulance service and recent achievements featured in local news.",
    imgSrc: '/images/achievements/achieve_1.jpg',
    imgAlt: 'News Coverage',
    theme: 'blue',
    coverImage: true
  },
  {
    type: 'NEWS COVERAGE',
    title: 'Press Recognition',
    description: "Ambigo's innovative ambulance service and recent achievements featured in local news.",
    imgSrc: '/images/achievements/achieve_2.png',
    imgAlt: 'Press Recognition',
    theme: 'orange',
    coverImage: true
  },
  {
    type: 'NEWS COVERAGE',
    title: 'Featured in Local Media',
    description: "Ambigo's innovative ambulance service and recent achievements featured in local news.",
    imgSrc: '/images/achievements/achieve_3.jpg',
    imgAlt: 'News Coverage',
    theme: 'blue',
    coverImage: true,
    containImage: true
  },
  {
    type: 'NEWS COVERAGE',
    title: 'Press Recognition',
    description: "Ambigo's innovative ambulance service and recent achievements featured in local news.",
    imgSrc: '/images/achievements/achieve_4.jpg',
    imgAlt: 'Press Recognition',
    theme: 'orange',
    coverImage: true,
    containImage: true
  },
  {
    type: 'NEWS COVERAGE',
    title: 'Featured in Local Media',
    description: "Ambigo's innovative ambulance service and recent achievements featured in local news.",
    imgSrc: '/images/achievements/achieve_5.jpg',
    imgAlt: 'News Coverage',
    theme: 'blue',
    coverImage: true,
    containImage: true
  },
  {
    type: 'NEWS COVERAGE',
    title: 'Press Recognition',
    description: "Ambigo's innovative ambulance service and recent achievements featured in local news.",
    imgSrc: '/images/achievements/achieve_6.jpg',
    imgAlt: 'Press Recognition',
    theme: 'orange',
    coverImage: true,
    containImage: true
  },
  {
    type: 'NEWS COVERAGE',
    title: 'Featured in Local Media',
    description: "Ambigo's innovative ambulance service and recent achievements featured in local news.",
    imgSrc: '/images/achievements/achieve_7.jpg',
    imgAlt: 'News Coverage',
    theme: 'blue',
    coverImage: true,
    containImage: true
  }
];

const AchievementsMarquee = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Duplicate array to create a seamless infinite loop
  const marqueeItems = [...achievements, ...achievements];

  return (
    <div className="w-full relative py-12" style={{ overflowX: 'clip' }}>
      <style>
        {`
          @keyframes scroll-marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            width: max-content;
            gap: 16px;
            padding-left: 16px;
            animation: scroll-marquee 40s linear infinite;
          }
          .marquee-track:hover, .marquee-track.is-paused {
            animation-play-state: paused !important;
          }
        `}
      </style>
      <div className={`marquee-track ${selectedImage ? 'is-paused' : ''}`}>
        {marqueeItems.map((item, index) => (
          <div
            key={index}
            className={`marquee-card relative shrink-0 flex flex-col group transition-all duration-500 ease-out hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(249,115,22,0.2)] bg-white hover:border-orange-500 transition-colors border border-orange-100 shadow-sm overflow-hidden ${
              item.coverImage ? '' : 'items-start text-left'
            }`}
            style={{ 
              width: '280px', 
              height: '360px', 
              borderRadius: '20px',
              padding: item.coverImage ? '0px' : '20px',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            {/* 3D Glow Behind Card removed as per request */}

            {item.coverImage ? (
              <>
                <div className="marquee-cover-img relative overflow-hidden shrink-0" style={{ height: '160px' }}>
                  <img 
                    src={item.imgSrc} 
                    alt={item.imgAlt} 
                    title="Click to view full image"
                    onClick={() => setSelectedImage(item.imgSrc)}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      objectPosition: 'top center',
                      borderRadius: '14px 14px 2px 2px',
                      cursor: 'pointer'
                    }} 
                    className="mobile-fit-image group-hover:scale-105 transition-transform duration-700 shadow-lg shadow-black/40" 
                  />
                  <div className="absolute bg-white/90 backdrop-blur-sm text-slate-800 font-bold tracking-widest uppercase border border-slate-200 shadow-sm" style={{ top: '20px', right: '20px', fontSize: '9px', padding: '4px 10px', borderRadius: '9999px', pointerEvents: 'none' }}>
                    FEATURED
                  </div>
                </div>
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h4 className="font-extrabold text-slate-900 transition-colors" style={{ fontSize: '15px', marginBottom: '4px', lineHeight: 1.3 }}>{item.title}</h4>
                  <p className="text-orange-500 text-[9px] font-bold uppercase tracking-widest mb-3 transition-colors">{item.type}</p>
                  <p className="text-slate-500 leading-relaxed text-xs line-clamp-4 transition-colors">{item.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className="w-full flex justify-center items-center rounded-xl bg-slate-50/80 group-hover:bg-white group-active:bg-white transition-colors border border-slate-100 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] shrink-0" style={{ height: '140px', marginBottom: '16px', padding: '20px' }}>
                  <img 
                    src={item.imgSrc} 
                    alt={item.imgAlt} 
                    title="Click to view full image"
                    onClick={() => setSelectedImage(item.imgSrc)}
                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', cursor: 'pointer' }} 
                    className="group-hover:scale-105 transition-transform duration-500 drop-shadow-sm" 
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h4 className="font-extrabold text-slate-900 transition-colors" style={{ fontSize: '15px', marginBottom: '4px', lineHeight: 1.3 }}>{item.title}</h4>
                  <p className="text-orange-500 text-[9px] font-bold uppercase tracking-widest mb-3 transition-colors">{item.type}</p>
                  <p className="text-slate-500 leading-relaxed text-xs line-clamp-4 transition-colors">{item.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/85 backdrop-blur-sm cursor-pointer transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative inline-block max-w-2xl max-h-[75vh] w-auto h-auto" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Maximized achievement" 
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl bg-white"
            />
            <button 
              className="absolute top-3 right-3 text-white hover:text-orange-400 bg-black/50 hover:bg-black/90 rounded-full p-2 transition-colors z-50 shadow-md"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AchievementsMarquee;
