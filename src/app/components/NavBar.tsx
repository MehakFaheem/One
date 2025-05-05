'use client'
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { div } from 'three/tsl';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-transparent z-50 py-4 px-8">  
    <div className="flex justify-between items-center max-w-6xl mx-auto">  
    {/* Logo */}  
    <span className="text-2xl font-serif text-amber-500">ONE</span>  

    {/* Nav Links */}  
    <div className="hidden md:flex gap-8 font-medium">  
      <a href="#" className="text-black relative px-3 py-1 pointer-events-auto no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full hover:text-cyan-950">Home</a>  
      <a href="#" className="text-black relative px-3 py-1 pointer-events-auto no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full hover:text-cyan-950">About</a>  
      <a href="#" className="text-black relative px-3 py-1 pointer-events-auto no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full hover:text-cyan-950">Destinations</a>  
      <a href="#" className="text-black relative px-3 py-1 pointer-events-auto no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full hover:text-cyan-950">Contact</a>  
    </div>  

    {/* CTA Button */}  
    <button className="hidden md:flex bg-amber-500 hover:bg-amber-600 text-black px-6 py-2 rounded-full font-medium">  
      Find your escape  
    </button>  

    {/* hamburger icon */}
    <button className='md:hidden lg:hidden text-amber-500 text-2xl'
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      ☰
    </button>
    </div>  
    {/* Mobile menu */}
    {
      isMenuOpen && (
        <div className='md:hidden lg:hidden fixed top-0 right-0 h-screen w-64 bg-gray-900/95 backdrop-blur-lg p-8 z-40'>
          <button
          className='absolute top-4 right-4 text-white text-2xl'
          onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>
          <div className="flex flex-col gap-6 mt-16">
            <a href="#" className="text-white hover:text-amber-500 text-xl">Home</a>
            <a href="#" className="text-white hover:text-amber-500 text-xl">About</a>
            <a href="#" className="text-white hover:text-amber-500 text-xl">Destinations</a>
            <a href="#" className="text-white hover:text-amber-500 text-xl">Contact</a>
            <button className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-2 rounded-full font-medium mt-4">
              Find your escape
            </button>
          </div>
        </div>
      )
    }
</nav>  
  );
};

export default Navbar;
