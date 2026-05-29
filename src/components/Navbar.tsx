import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=in.ambigo.user';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/AboutUs', label: 'How It Works' },
  { to: '/individual', label: 'Features' },
  { to: '/contactus', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `ambigo-nav-link relative transition-colors ${
      isActive
        ? 'active text-slate-900 after:content-[\'\'] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5'
        : 'text-slate-600 hover:text-slate-900'
    }`;

  const logo = (
    <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
      <img src="/images/ambulance6.png" alt="Ambigo Logo" className="h-10 w-auto object-contain" />
      <span className="font-poppins font-extrabold text-xl tracking-tight text-slate-900">Ambigo</span>
    </Link>
  );

  return (
    <nav className="ambigo-navbar fixed top-0 left-0 w-full z-50">
      <div className="ambigo-navbar__inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-5">
        <div className="ambigo-navbar__mobile">
          <button
            type="button"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="ambigo-navbar__menu-btn inline-flex h-11 w-11 items-center justify-center rounded-full border border-orange-100 bg-white text-slate-900 shadow-sm"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <div className="ambigo-navbar__logo-wrap">{logo}</div>
        </div>

        <div className="ambigo-navbar__desktop items-center justify-between gap-6">
          {logo}
          <div className="flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a href="tel:+918985138102" className="ambigo-btn-outline hidden lg:inline-flex text-sm py-2.5 px-5">
              Call Now
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ambigo-btn-primary ambigo-btn-glow text-sm py-2.5 px-6"
            >
              Download App
            </a>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden mx-4 overflow-hidden rounded-2xl border border-orange-100/80 bg-white shadow-lg transition-all duration-300 ${
          isOpen ? 'max-h-[28rem] opacity-100 translate-y-0 mb-3' : 'max-h-0 opacity-0 -translate-y-2 border-transparent'
        }`}
      >
        <div className="flex flex-col gap-1 p-3 font-poppins text-sm font-semibold">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 transition-colors ${
                  isActive ? 'bg-[#ff8c42] text-white' : 'text-slate-600 hover:bg-orange-50 hover:text-slate-950'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-xl ambigo-btn-primary ambigo-btn-glow py-3 text-center"
            onClick={() => setIsOpen(false)}
          >
            Download App
          </a>
          <a
            href="tel:+918985138102"
            className="rounded-xl border border-orange-200 px-4 py-3 text-center text-[#ff6b21] font-bold"
            onClick={() => setIsOpen(false)}
          >
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
