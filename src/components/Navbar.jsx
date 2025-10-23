import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoSrc from '../assets/logo-temuin.svg';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
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

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="font-medium text-slate-700 hover:text-emerald-500 transition-colors duration-200 px-3 py-2 rounded-md text-sm"
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
              className="text-slate-700 hover:text-emerald-500 transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;