import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Contactus = () => {
  return (
    <>
      <div style={{"marginTop":"80px"} as any}> </div><div className="concontact-page"><div className="conmain-heading"><h1>Please get in touch and our expert support team will answer all your <span className="conhighlight">Questions</span></h1><p className="consubtitle">Our aim is to assist you! Help us Help you!</p></div><div className="concontent-container"><div className="concontact-info-card"><h2>Contact Information</h2><ul className="concontact-list"><li className="conaddress" style={{display: 'flex', alignItems: 'flex-start', gap: '8px'}}><MapPin size={20} className="shrink-0 mt-1 text-orange-500" /><span>Ambigo health care private limited, JNTUA Old administrative block, Anantapur, AndhraPradesh 515002</span></li><li className="conphone" style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Phone size={20} className="shrink-0 text-orange-500" /><span>8985138102</span></li><li style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Mail size={20} className="shrink-0 text-orange-500" /><a href="mailto:ambigo.in@gmail.com" className="conemail">ambigo.in@gmail.com</a></li><li style={{display: 'flex', alignItems: 'center', gap: '8px'}}><Globe size={20} className="shrink-0 text-orange-500" /><a href="https://www.ambigo.in" className="conwebsite">www.ambigo.in</a></li></ul><button className="conlocation-btn" onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Old administrative block ,anantapur,andhrapradesh'), '_blank')}>Find Location</button></div><div className="conhelp-section"><h2>How Can We Help?</h2><p className="conhelp-text">Please select a topic below related to your inquiry. If you don't find what you need, fill out our contact form.</p><div className="conhelp-options"><p>Request a demo from one of our conversion specialists.</p><p>Discover the many ways in which our customers use Ambigo.</p></div></div></div></div><div className="conpartner-container"><div className="conpartner-header"><h2 className="consubtitle">Grow your business</h2><h1 className="contitle">Partner with Us</h1></div><div className="conpartnership-options"><div className="conpartner-card"><div className="concard-header">FOR AMBULANCE VENDORS</div><div className="concard-content"><p>Join our Partner Program and earn 25% recurring commissions.</p><button className="conpartner-button">Learn More</button></div></div><div className="conpartner-card"><div className="concard-header">FOR OTHER SERVICES</div><div className="concard-content"><p>Join our Partner Program and earn 25% recurring commissions.</p><button className="conpartner-button">Learn More</button></div></div></div></div><div className="app-promo-container"><div className="app-promo-content"><h1 className="app-promo-title">Get more in the app</h1><div className="promo-cards-container"><div className="promo-card group">
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

export default Contactus;
