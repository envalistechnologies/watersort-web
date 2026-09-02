import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/watershort_logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
            <img src={logo} alt="Water Sort Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold text-white tracking-wide">Water Sort Puzzle</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                  location.pathname === link.path ? 'text-cyan-400' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://play.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="glass-button px-5 py-2 rounded-full text-white font-medium text-sm flex items-center gap-2"
            >
              Play Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-200 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ocean-900/95 backdrop-blur-xl absolute top-full left-0 w-full border-t border-white/10 flex flex-col items-center py-6 gap-6 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={`text-lg font-medium ${
                location.pathname === link.path ? 'text-cyan-400' : 'text-slate-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://play.google.com" 
            target="_blank" 
            rel="noreferrer"
            className="bg-cyan-500 hover:bg-cyan-400 text-ocean-900 px-8 py-3 rounded-full font-bold mt-2"
          >
            Play Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
