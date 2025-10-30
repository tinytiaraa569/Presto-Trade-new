import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen  flex flex-col bg-white text-gray-900">
      <Header />
      
      {/* Outlet section with dynamic margin-bottom */}
      <main className={`flex-1 min-h-screen ${scrolled ? 'mt-28' : 'mb-0'}`}>
      {/* <main className='flex-1 mt-32'> */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
