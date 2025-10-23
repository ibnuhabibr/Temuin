import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoSrc from '../assets/logo-temuin.svg';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-soft border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={logoSrc} alt="Temuin Logo" className="h-10 w-auto" />
            </motion.div>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="font-medium text-slate-700 hover:text-primary-600 transition-colors duration-300 px-3 py-2 rounded-lg text-sm"
              >
                Beranda
              </Link>
              {/* Temporarily disabled dead links */}
              {/* 
              <Link
                to="/kategori"
                className="font-medium text-slate-700 hover:text-emerald-500 transition-colors duration-200 px-3 py-2 rounded-md text-sm"
              >
                Kategori
              </Link>
              <Link
                to="/tentang"
                className="font-medium text-slate-700 hover:text-emerald-500 transition-colors duration-200 px-3 py-2 rounded-md text-sm"
              >
                Tentang
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                Daftar Bisnis
              </motion.button>
              */}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMobileMenu}
              className="text-slate-700 hover:text-primary-600 transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay and Container */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-30 md:hidden"
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-64 bg-white/95 backdrop-blur-lg shadow-soft-lg border-l border-white/20 z-40 md:hidden"
            >
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={closeMobileMenu}
                  className="text-slate-700 hover:text-primary-600 transition-colors duration-300"
                  aria-label="Close mobile menu"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Mobile Menu Items */}
              <div className="px-4 py-2 space-y-4">
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="block font-medium text-slate-700 hover:text-primary-600 transition-colors duration-300 px-4 py-3 rounded-lg text-base border-b border-slate-100/50"
                >
                  Beranda
                </Link>
                
                {/* Uncomment these when the routes are ready */}
                {/* 
                <Link
                  to="/kategori"
                  onClick={closeMobileMenu}
                  className="block font-medium text-slate-700 hover:text-emerald-500 transition-colors duration-200 px-3 py-3 rounded-md text-base border-b border-slate-100"
                >
                  Kategori
                </Link>
                <Link
                  to="/tentang"
                  onClick={closeMobileMenu}
                  className="block font-medium text-slate-700 hover:text-emerald-500 transition-colors duration-200 px-3 py-3 rounded-md text-base border-b border-slate-100"
                >
                  Tentang
                </Link>
                */}

                {/* Mobile CTA Button */}
                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={closeMobileMenu}
                    className="w-full bg-gradient-primary text-white px-6 py-3 rounded-xl text-base font-medium shadow-soft hover:shadow-soft-lg transition-all duration-300"
                  >
                    Daftar Bisnis
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;