"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Team", href: "/" },
    { name: "Events", href: "/" },
    { name: "Contact", href: "/" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-r bg-primary-purple/80 backdrop-blur-md border-b border-purple-400/50 shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-x-4 group">
              <div className="transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/ieeewie_logo.png"
                  alt="IEEE WIE Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto drop-shadow-sm"
                />
              </div>
              <div className="transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/ssn_logo.png"
                  alt="SSN College Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto drop-shadow-sm"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-white-700 font-medium text-xl transition-all duration-300 rounded-lg hover:text-white-600 group font-garamond"
              >
                <span className="relative z-10">{link.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </Link>
            ))}
            
            {/* CTA Button */}
            <button className="ml-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold text-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-purple-600 hover:to-pink-700 font-garamond">
              Join Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center transition-all duration-300 hover:from-purple-500/20 hover:to-pink-500/20"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <span
                  className={`absolute left-0 top-1 w-6 h-0.5 bg-gradient-to-r from-purple-500 to-pink-600 transition-all duration-300 ${
                    isOpen ? 'rotate-45 top-2.5' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-2.5 w-6 h-0.5 bg-gradient-to-r from-purple-500 to-pink-600 transition-all duration-300 ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-4 w-6 h-0.5 bg-gradient-to-r from-purple-500 to-pink-600 transition-all duration-300 ${
                    isOpen ? '-rotate-45 top-2.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100 pb-6' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`} id="mobile-menu">
          <div className="pt-4 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-white-700 font-medium rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 hover:text-purple-600 transform hover:translate-x-2 font-garamond ${
                  isOpen ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></div>
                  <span>{link.name}</span>
                </div>
              </Link>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="pt-4">
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-purple-600 hover:to-pink-700 font-garamond">
                Join WIE Community
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden -z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;