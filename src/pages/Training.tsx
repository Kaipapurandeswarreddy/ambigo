const Training = () => {
  return (
    <>
      <div style={{"marginTop":"80px"} as any}> </div><h1 style={{"textAlign":"center","margin":"30px"} as any}>Comprehensive Ambulance Training</h1><h3 style={{"textAlign":"center"} as any}>Ambigo Provide Training to Drivers and Paramedics ,So that they can handle Patient Properly to Hospital.</h3><div className="training-container"><div className="training-section driver-section"><div className="training-image"><img src="paramedical_training.png" className="section-image" /></div><div className="training-content"><h2>Paramedical Training</h2><p>Ambigo provides specialized paramedical training for ambulance drivers, ensuring they are well-prepared to respond swiftly and effectively during emergencies. Our program equips drivers with essential life-saving skills, enabling them to support patients with confidence until professional medical care arrives.</p></div></div></div><div className="app-promo-container"><div className="app-promo-content"><h1 className="app-promo-title">Get more in the app</h1><div className="promo-cards-container"><div className="promo-card group">
<div className="promo-card-content"><div className="qr-code-wrapper"><img src="user_app_link.png" alt="QR code to download Ambigo app" className="qr-code" /></div><div className="promo-text"><h2>Download the Ambigo app</h2><p>Scan to download</p></div><div 
 onClick={() => window.open('https://play.google.com/store/apps/details?id=in.ambigo.user', '_blank')}
 style={{ cursor: 'pointer' }}
 className="text-orange-500 font-bold mx-auto md:ml-auto md:mr-0 mt-4 md:mt-0 whitespace-nowrap px-4 py-2 rounded-full border border-orange-200 text-sm md:text-base group-hover:bg-orange-500 group-hover:text-white transition-colors">
Download Now
</div>
</div>
</div><div className="promo-card group">
<div className="promo-card-content"><div className="app-logo-wrapper"><div className="app-logo-container"><img src="userapplogo.webp" alt="Ambigo logo" className="app-logo" /></div></div><div className="promo-text"><h2>Install The App to ride</h2></div><div 
 onClick={() => window.open('https://play.google.com/store/apps/details?id=in.ambigo.user', '_blank')}
 style={{ cursor: 'pointer' }}
 className="text-orange-500 font-bold mx-auto md:ml-auto md:mr-0 mt-4 md:mt-0 whitespace-nowrap px-4 py-2 rounded-full border border-orange-200 text-sm md:text-base group-hover:bg-orange-500 group-hover:text-white transition-colors">
Start Riding
</div>
</div>
</div></div><div className="promo-cards-container"><div className="promo-card group">
<div className="promo-card-content"><div className="qr-code-wrapper"><img src="partner_link.png" alt="QR code to download Ambigo app" className="qr-code" /></div><div className="promo-text"><h2>Download the Driver Ambigo app</h2><p>Scan to download</p></div><div 
 onClick={() => window.open('https://play.google.com/store/apps/details?id=in.ambigo.driver&pcampaignid=web_share', '_blank')}
 style={{ cursor: 'pointer' }}
 className="text-orange-500 font-bold mx-auto md:ml-auto md:mr-0 mt-4 md:mt-0 whitespace-nowrap px-4 py-2 rounded-full border border-orange-200 text-sm md:text-base group-hover:bg-orange-500 group-hover:text-white transition-colors">
Download Now
</div>
</div>
</div><div className="promo-card group">
<div className="promo-card-content"><div className="app-logo-wrapper"><div className="app-logo-container"><img src="partnerlogo.webp" alt="Ambigo logo" className="app-logo" /></div></div><div className="promo-text"><h2>Ambigo Partner app: To Drive and Earn</h2></div><div 
 onClick={() => window.open('https://play.google.com/store/apps/details?id=in.ambigo.driver&pcampaignid=web_share', '_blank')}
 style={{ cursor: 'pointer' }}
 className="text-orange-500 font-bold mx-auto md:ml-auto md:mr-0 mt-4 md:mt-0 whitespace-nowrap px-4 py-2 rounded-full border border-orange-200 text-sm md:text-base group-hover:bg-orange-500 group-hover:text-white transition-colors">
Start Earning
</div>
</div>
</div></div></div></div>
    </>
  );
};

export default Training;
