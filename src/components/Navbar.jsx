import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 pt-6 transition-all duration-300 pointer-events-none`}
    >
      <nav className={`pointer-events-auto max-w-5xl mx-auto px-6 py-3 flex items-center justify-between rounded-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl border border-zinc-200/60 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)]' 
          : 'bg-white/40 backdrop-blur-md border border-zinc-200/40'
      }`}>
        <Link to="/" className="text-xl font-headline font-extrabold tracking-tighter text-zinc-900 flex items-center gap-2">
          <img src="/logo.png" alt="PlacementIQ Logo" className="w-8 h-8 rounded-lg object-contain mix-blend-multiply" />
          Mockmate
        </Link>
        
        <div className="hidden md:flex items-center gap-1">
          {['Home', 'Features', 'Methodology', 'Testimonials', 'Pricing'].map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="text-zinc-600 font-medium hover:text-zinc-900 transition-colors duration-200 text-sm px-3 py-1.5 rounded-full hover:bg-zinc-100"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login" className="hidden md:block px-4 py-2 text-zinc-600 font-medium hover:text-zinc-900 transition-colors text-sm hover:bg-zinc-100 rounded-full">
            Login
          </Link>
          <Link to="/signup" className="flex items-center gap-2 px-5 py-2 bg-white text-zinc-900 text-sm rounded-full font-bold transition-all border border-zinc-200 shadow-sm hover:shadow hover:-translate-y-0.5 active:scale-95 duration-200">
            Sign up
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
