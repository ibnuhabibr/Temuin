import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
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
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/"
                  className="font-medium text-slate-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 px-3 py-2 rounded-lg text-sm relative overflow-hidden group"
                >
                  <span className="relative z-10">Beranda</span>
                  <motion.div
                    className="absolute inset-0 bg-primary-50 rounded-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/jelajahi"
                  className="font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 px-3 py-2 rounded-lg text-sm relative overflow-hidden group"
                >
                  <span className="relative z-10">Jelajahi</span>
                  <motion.div
                    className="absolute inset-0 bg-blue-50 rounded-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/tentang"
                  className="font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300 px-3 py-2 rounded-lg text-sm relative overflow-hidden group"
                >
                  <span className="relative z-10">Tentang</span>
                  <motion.div
                    className="absolute inset-0 bg-emerald-50 rounded-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/kontak"
                  className="font-medium text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300 px-3 py-2 rounded-lg text-sm relative overflow-hidden group"
                >
                  <span className="relative z-10">Kontak</span>
                  <motion.div
                    className="absolute inset-0 bg-emerald-50 rounded-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.4)"
                }}
                whileTap={{ 
                  scale: 0.95,
                  boxShadow: "0 4px 15px -3px rgba(16, 185, 129, 0.3)"
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20,
                  boxShadow: { duration: 0.2 }
                }}
                className="bg-gradient-primary hover:from-primary-700 hover:to-primary-600 text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Daftar Bisnis</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMobileMenu}
              className="relative p-2 text-slate-700 hover:text-primary-600 transition-colors duration-300 rounded-lg hover:bg-slate-100/50"
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiX className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMenu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
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
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 bg-black/50 z-30 md:hidden"
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu Container */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 30,
                opacity: { duration: 0.2 }
              }}
              className="fixed top-0 right-0 h-full w-72 bg-white shadow-soft-lg border-l border-slate-200 z-40 md:hidden"
            >
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={closeMobileMenu}
                  className="p-2 text-slate-700 hover:text-primary-600 transition-colors duration-300 rounded-lg hover:bg-slate-100/50"
                  aria-label="Close mobile menu"
                >
                  <FiX className="h-6 w-6" />
                </motion.button>
              </div>

              {/* Mobile Menu Items */}
              <div className="px-6 py-2 space-y-1">
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/"
                    onClick={closeMobileMenu}
                    className="block text-slate-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 py-3 px-4 rounded-lg font-medium relative overflow-hidden group"
                  >
                    <span className="relative z-10">Beranda</span>
                    <motion.div
                      className="absolute inset-0 bg-primary-50 rounded-lg"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/jelajahi"
                    onClick={closeMobileMenu}
                    className="block text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 py-3 px-4 rounded-lg font-medium relative overflow-hidden group"
                  >
                    <span className="relative z-10">Jelajahi</span>
                    <motion.div
                      className="absolute inset-0 bg-blue-50 rounded-lg"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/tentang"
                    onClick={closeMobileMenu}
                    className="block text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300 py-3 px-4 rounded-lg font-medium relative overflow-hidden group"
                  >
                    <span className="relative z-10">Tentang</span>
                    <motion.div
                      className="absolute inset-0 bg-emerald-50 rounded-lg"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/kontak"
                    onClick={closeMobileMenu}
                    className="block text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300 py-3 px-4 rounded-lg font-medium relative overflow-hidden group"
                  >
                    <span className="relative z-10">Kontak</span>
                    <motion.div
                      className="absolute inset-0 bg-emerald-50 rounded-lg"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              </div>

              {/* Mobile CTA Button */}
              <div className="px-6 py-6 mt-auto">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <motion.button
                    onClick={closeMobileMenu}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.4)"
                    }}
                    whileTap={{ 
                      scale: 0.98,
                      boxShadow: "0 4px 15px -3px rgba(16, 185, 129, 0.3)"
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20,
                      boxShadow: { duration: 0.2 }
                    }}
                    className="block w-full bg-gradient-primary hover:from-primary-700 hover:to-primary-600 text-white text-center py-3 px-6 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl relative overflow-hidden group"
                  >
                    <span className="relative z-10">Daftar Bisnis</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;