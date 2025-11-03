import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import * as HiIcons from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import logoSrc from "../logo.png";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Beranda", icon: "HiHome", color: "primary" },
    {
      path: "/jelajahi",
      label: "Jelajahi",
      icon: "HiLocationMarker",
      color: "blue",
    },
    {
      path: "/tentang",
      label: "Tentang",
      icon: "HiInformationCircle",
      color: "emerald",
    },
    { path: "/kontak", label: "Kontak", icon: "HiMail", color: "purple" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-slate-200/50"
          : "bg-white/70 backdrop-blur-md border-b border-white/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with enhanced animation */}
          <Link to="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <img
                src={logoSrc}
                alt="Temuin Logo"
                className="h-12 w-auto relative z-10 drop-shadow-lg"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link, index) => {
              const IconComponent = HiIcons[
                link.icon as keyof typeof HiIcons
              ] as React.ComponentType<{ className?: string }>;
              const active = isActive(link.path);
              return (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`relative group px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                      active
                        ? `text-${link.color}-600 bg-${link.color}-50/80`
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <IconComponent
                      className={`h-4 w-4 ${active ? "animate-pulse" : ""}`}
                    />
                    <span className="relative z-10">{link.label}</span>

                    {/* Active indicator */}
                    {active && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className={`absolute inset-0 bg-gradient-to-br from-${link.color}-100 to-${link.color}-50 rounded-xl`}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Hover effect */}
                    {!active && (
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br from-${link.color}-50 to-${link.color}-100/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}

            {/* CTA Button with new design */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(16, 185, 129, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 relative px-6 py-2.5 bg-gradient-to-r from-primary-600 via-primary-500 to-emerald-500 text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                {React.createElement(
                  HiIcons.HiStar as React.ComponentType<{ className?: string }>,
                  { className: "h-4 w-4" }
                )}
                Daftar Bisnis
              </span>
              <motion.div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMobileMenu}
              className={`relative p-3 rounded-xl transition-all duration-300 ${
                isMobileMenuOpen
                  ? "bg-primary-100 text-primary-600"
                  : "bg-slate-100/80 text-slate-700 hover:bg-slate-200/80"
              }`}
              aria-label={
                isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
              }
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiX className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiMenu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={closeMobileMenu}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white shadow-xl z-50 md:hidden flex flex-col justify-between"
            >
              {/* Header */}
              <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
                <img src={logoSrc} alt="Temuin" className="h-8 w-auto" />
                <button
                  onClick={closeMobileMenu}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <FiX className="h-5 w-5 text-gray-700" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 py-4 flex flex-col justify-center bg-white">
                {navLinks.map((link) => {
                  const IconComponent = HiIcons[
                    link.icon as keyof typeof HiIcons
                  ] as React.ComponentType<{ className?: string }>;
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={closeMobileMenu}
                      className={`flex items-center gap-3 px-6 py-4 text-base font-medium ${
                        active
                          ? "bg-primary-50 text-primary-700 border-r-4 border-primary-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <IconComponent className="h-6 w-6" />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <button
                  onClick={closeMobileMenu}
                  className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white py-4 px-4 rounded-lg font-semibold text-base"
                >
                  {React.createElement(
                    HiIcons.HiStar as React.ComponentType<{
                      className?: string;
                    }>,
                    { className: "h-5 w-5" }
                  )}
                  <span>Daftar Bisnis</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
