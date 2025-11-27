import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CompanyTitle } from '../Database.js';

/*
  Reference image (design) available at:
  /mnt/data/website colors.jpg
  (If you need to use it as an <img>, you can reference that local path.)
*/

export default function Navbar({ NavContaint }) {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Add a small effect to toggle a subtle shadow or backdrop when user scrolls
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 10) setScrolled(true);
      else setScrolled(false);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: NavContaint.Home },
    { to: 'services', label: NavContaint.Services },
    { to: 'contact', label: NavContaint.Contact },
    { to: 'about', label: NavContaint.About },
  ];

  return (
    // Fixed header so it stays on scroll. z-50 ensures on top of other content.
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-200 ${scrolled ? 'backdrop-blur-sm bg-bone/90 shadow-md' : 'bg-bone/95'
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
        {/* Brand / logo */}
        <Link to="/" className="flex items-center gap-3">
          {/* If you want to use the uploaded image as logo, replace the svg with:
              <img src="/mnt/data/website colors.jpg" alt="logo" className="w-10 h-10 rounded-full object-cover" />
              (Dev note: we provided that local path above)
          */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            viewBox="0 0 24 24"
            className="w-10 h-10 text-white p-2 bg-primary rounded-full"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>

          <span className="text-title font-semibold text-lg md:text-xl">{CompanyTitle}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative py-1 px-1 text-sm font-medium transition-colors ${active ? 'text-primary' : 'text-muted hover:text-primary'
                  }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action buttons - desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/signin"
            className="px-4 py-2 rounded-md border border-primary text-primary text-sm hover:bg-primary/5 transition"
          >
            {NavContaint.Button1}
          </Link>

          <Link
            to="/trial"
            className="px-4 py-2 rounded-md bg-primary text-white text-sm hover:bg-primary-light transition"
          >
            {NavContaint.Button2}
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            <svg
              className="w-6 h-6 text-title"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden transition-max-height duration-300 overflow-hidden ${open ? 'max-h-[400px]' : 'max-h-0'
          }`}
      >
        <div className="px-4 pb-4 pt-2 border-t border-gray-200/60">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${active ? 'bg-primary/5 text-primary' : 'text-title hover:text-primary'
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-3 flex gap-3">
            <Link
              to="/signin"
              className="flex-1 text-center px-3 py-2 rounded-md border border-primary text-primary"
            >
              {NavContaint.Button1}
            </Link>
            <Link
              to="/trial"
              className="flex-1 text-center px-3 py-2 rounded-md bg-primary text-white"
            >
              {NavContaint.Button2}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}