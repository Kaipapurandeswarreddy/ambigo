import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/AboutUs', label: 'How It Works' },
  { to: '/individual', label: 'Features' },
  { to: '/contactus', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-slate-900 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-slate-900"
      : "text-slate-600 hover:text-slate-900 transition-colors";

  const logo = (
    <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
      <div className="w-8 h-8 relative">
        <div className="absolute top-0 left-2 w-3 h-3 bg-blue-500 rounded-full"></div>
        <div className="absolute top-2 left-0 w-3 h-3 bg-blue-500 rounded-full"></div>
        <div className="absolute top-4 left-2 w-3 h-3 bg-orange-400 rounded-full"></div>
        <div className="absolute top-2 left-4 w-3 h-3 bg-blue-500 rounded-full"></div>
      </div>
      <span className="font-poppins font-extrabold text-xl tracking-tight text-slate-900">Ambigo</span>
    </Link>
  );

  return (
    <nav className="ambigo-navbar absolute w-full z-50 bg-transparent">
      <div className="ambigo-navbar__inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-5 sm:py-6">
        <div className="ambigo-navbar__mobile">
          <button
            type="button"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="ambigo-navbar__menu-btn inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/70 text-slate-900 shadow-sm backdrop-blur"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <div className="ambigo-navbar__logo-wrap">{logo}</div>
        </div>

        <div className="ambigo-navbar__desktop items-center justify-between">
          {logo}
          <div className="flex items-center gap-10 font-inter text-sm font-semibold">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </div>
          <a
            href="tel:+918985138102"
            className="inline-flex border-2 border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-2.5 rounded-full font-inter font-bold transition-all shadow-sm"
          >
            Call Now
          </a>
        </div>
      </div>

      <div
        className={`md:hidden mx-4 overflow-hidden rounded-2xl border border-white/75 bg-white/88 shadow-xl backdrop-blur-xl transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2 border-transparent'
        }`}
      >
        <div className="flex flex-col gap-1 p-3 font-inter text-sm font-bold">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 transition-colors ${
                  isActive ? 'bg-slate-950 text-white' : 'text-slate-600 hover:bg-orange-50 hover:text-slate-950'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="tel:+918985138102"
            className="mt-2 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 px-4 py-3 text-center text-white shadow-sm"
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
