import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="ambigo-footer ambigo-footer-vl bg-white pt-20 pb-10 border-t border-slate-100 font-poppins relative z-20">
      <div className="ambigo-footer__grid max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <img src="/images/ambulance6.png" alt="Ambigo Logo" className="h-10 w-auto object-contain" />
            <span className="font-poppins font-extrabold text-xl text-slate-900">Ambigo</span>
          </div>
        </div>
        
        <div>
          <h4 className="font-extrabold text-slate-900 mb-6">About & Services</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-500">
            <li><Link to="/AboutUs" className="hover:text-orange-500 transition-colors">About Us</Link></li>
            <li><Link to="/enterprise" className="hover:text-orange-500 transition-colors">Enterprise</Link></li>
            <li><Link to="/individual" className="hover:text-orange-500 transition-colors">Individual</Link></li>
            <li><Link to="/hospital" className="hover:text-orange-500 transition-colors">Hospital</Link></li>
            <li><Link to="/ourteam" className="hover:text-orange-500 transition-colors">Team & Careers</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-extrabold text-slate-900 mb-6">Legal & Reach Us</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-500">
            <li><Link to="/terms" className="hover:text-orange-500 transition-colors">Terms and Conditions</Link></li>
            <li><Link to="/contactus" className="hover:text-orange-500 transition-colors">Contact Support</Link></li>
            <li><Link to="/training" className="hover:text-orange-500 transition-colors">Paramedical Training</Link></li>
            <li><a href="https://maps.app.goo.gl/16ChfkbvnkGXw5ic7" target="_blank" rel="noreferrer" className="hover:text-orange-500 transition-colors">Location</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-extrabold text-slate-900 mb-6">Socials</h4>
          <div className="flex flex-row flex-nowrap items-center gap-4">
            <a href="https://www.instagram.com/ambigo.in?igsh=NGkyeTZtMnRyc3M%3D&utm_source=qr" target="_blank" rel="noreferrer" className="ambigo-social-btn w-10 h-10 rounded-full flex items-center justify-center !p-0 text-white transition-colors shadow-md">
              <svg className="w-4 h-4 m-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.20 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/ambigo-in-550251361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer" className="ambigo-social-btn w-10 h-10 rounded-full flex items-center justify-center !p-0 text-white transition-colors shadow-md">
              <svg className="w-4 h-4 m-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://wa.me/message/QV7OWKT2Y36NK1" target="_blank" rel="noreferrer" className="ambigo-social-btn w-10 h-10 rounded-full flex items-center justify-center !p-0 text-white transition-colors shadow-md">
              <svg className="w-4 h-4 m-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="ambigo-footer__bottom max-w-7xl mx-auto px-6 lg:px-12 pt-8 border-t border-slate-100 flex justify-between items-center text-sm font-medium text-slate-400">
        <p>© 2026 Ambigo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
