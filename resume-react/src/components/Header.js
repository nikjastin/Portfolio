import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-400 text-white py-12 px-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="relative z-10">
        <img 
          src="https://via.placeholder.com/150" 
          alt="Nick Justin B. Magtuloy" 
          className="w-36 h-36 rounded-full border-4 border-white mx-auto mb-6 shadow-lg object-cover"
        />
        <h1 className="text-5xl font-bold mb-3 drop-shadow-lg">Nick Justin B. Magtuloy</h1>
        <p className="text-xl mb-2 opacity-95">Bachelor of Science in Information Systems</p>
        <p className="text-lg opacity-90">Santa Rita College of Pampanga</p>
      </div>
    </header>
  );
};

export default Header;
