import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import JourneyTerrain from '../components/JourneyTerrain';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div className={`min-h-screen bg-white font-sans text-gray-900 flex flex-col ${isHome ? 'journey-shell' : 'ambigo-subpage-shell'}`}>
      <JourneyTerrain active={isHome} />
      <Navbar />
      <main className="flex-grow pt-20 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
