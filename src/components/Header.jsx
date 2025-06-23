import React from 'react';
import { FaCat } from 'react-icons/fa'; // make sure: npm install react-icons

const Header = () => {
  return (
    <header className="flex justify-center items-center mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-300 shadow-lg">
      <div className="flex items-center gap-3 py-6 px-4 text-center">
        <FaCat className="text-white text-4xl sm:text-5xl drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] animate-bounce" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-white drop-shadow">
          MeowGallery
        </h1>
      </div>
    </header>
  );
};

export default Header;
