
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Visit Us', href: '#visit' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cafe-cream/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#home" className={`font-serif text-2xl font-bold tracking-tighter ${scrolled ? 'text-cafe-brown-dark' : 'text-white md:text-cafe-brown-dark lg:text-cafe-brown-dark'}`}>
              Cafe Resé
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-cafe-brown ${scrolled ? 'text-cafe-brown-dark' : 'text-cafe-brown-dark'}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#visit"
                className="bg-cafe-brown text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-cafe-brown-dark transition-all transform hover:scale-105"
              >
                Order Now
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-cafe-brown-dark' : 'text-cafe-brown-dark'} focus:outline-none`}
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cafe-cream shadow-xl border-t border-cafe-beige">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-cafe-brown-dark hover:bg-cafe-beige rounded-md"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#visit"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-3 text-center bg-cafe-brown text-white font-medium rounded-md mx-2 mt-4"
          >
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
