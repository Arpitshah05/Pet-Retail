import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-white/80 backdrop-blur shadow-md sticky top-0 z-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <Link href="/" className="flex items-center group">
            <div className="bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 border-2 border-dashed rounded-xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
              <img src="/logo.png" alt="Pet Retail Hub Logo" className="h-6 w-6 sm:h-8 sm:w-8 object-contain" onError={e => (e.target.style.display = 'none')} />
            </div>
            <div className="ml-2 sm:ml-3">
              <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-gray-800 tracking-tight group-hover:text-blue-700 transition-colors duration-200">Pet Retail Hub</h1>
              <p className="text-xs md:text-sm text-gray-500 font-medium">Inventory Management</p>
            </div>
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 lg:space-x-10">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/analytics" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">
                  Analytics
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">
                  About
                </a>
              </li>
            </ul>
          </nav>
          {/* Mobile Hamburger */}
          <button className="md:hidden flex items-center px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            <svg className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 8h16M4 16h16'} />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-white rounded-xl shadow-lg py-4 px-6 mt-2 animate-fade-in">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1" onClick={() => setMenuOpen(false)}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/analytics" className="text-gray-600 hover:text-blue-600 font-medium" onClick={() => setMenuOpen(false)}>
                  Analytics
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 font-medium" onClick={() => setMenuOpen(false)}>
                  About
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
} 