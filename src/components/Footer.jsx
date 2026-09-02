import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import logo from '../assets/watershort_logo.png';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-ocean-900/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Water Sort Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold text-white tracking-wide">Water Sort Puzzle</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Sort, Relax, and Train Your Brain. The ultimate liquid sorting puzzle experience designed for pure relaxation.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold mb-2">Quick Links</h3>
            <Link to="/" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Home</Link>
            <Link to="/about" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">About</Link>
            <Link to="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Contact Support</Link>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold mb-2">Legal</h3>
            <Link to="/privacy" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Terms of Use</Link>
          </div>
          
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Water Sort Puzzle. All rights reserved.
          </p>
          <div className="text-slate-500 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-cyan-500" /> for puzzle lovers
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
