import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PreFooterCta from '../components/PreFooterCta';

const MainLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div className={`ambigo-vl min-h-screen bg-white font-sans text-gray-900 flex flex-col ${isHome ? 'journey-shell' : 'ambigo-subpage-shell'}`}>
      <Navbar />
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
      <PreFooterCta />
      <Footer />
    </div>
  );
};

export default MainLayout;
