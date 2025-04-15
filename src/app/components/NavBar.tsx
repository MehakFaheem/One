'use client'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between z-[999] relative bg-zinc-700">
      {/* Logo */}
      <div className="text-sm ml-4 text-white hover:text-[#b9ac98]">One</div>
      
      {/* Links */}
      <div className="flex gap-4 mx-auto pl-10 text-sm">
        <Link 
          href="/" 
          className="text-white hover:text-[#b9ac98] px-3 py-1 transition-colors duration-200 pointer-events-auto"
        >
          Home
        </Link>
        <Link 
          href="/" 
          className="text-white hover:text-[#b9ac98] px-3 py-1 transition-colors duration-200 pointer-events-auto"
        >
          About
        </Link>
        <Link 
          href="/" 
          className="text-white hover:text-[#b9ac98]  px-3 py-1 transition-colors duration-200 pointer-events-auto"
        >
          Contact
        </Link>
        <Link 
          href="/" 
          className="text-white hover:text-[#b9ac98] px-3 py-1 duration-200 pointer-events-auto"
          onClick={(e) => console.log('Home clicked!', e)}
        >
          Sign up
        </Link>
      </div>

      {/* Spacer */}
      <div className="w-[100px]"></div>
    </nav>
  );
};

export default Navbar;