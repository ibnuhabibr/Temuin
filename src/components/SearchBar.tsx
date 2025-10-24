import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX } from 'react-icons/fi';
import { SearchHandler } from '../types/umkm';

interface SearchBarProps {
  onSearch: SearchHandler;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = "Cari UMKM, makanan, atau layanan..." }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Debounce search functionality
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(searchTerm);
    }, 300); // 300ms debounce delay

    return () => clearTimeout(timeoutId);
  }, [searchTerm, onSearch]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClear = useCallback(() => {
    setSearchTerm('');
    onSearch('');
  }, [onSearch]);

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="relative w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <FiSearch className="h-5 w-5 text-slate-400" />
        </div>
        <motion.input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder={placeholder}
          whileFocus={{ 
            scale: 1.01,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
          transition={{ duration: 0.2 }}
          className="w-full pl-12 pr-24 py-5 text-slate-900 placeholder-slate-500 bg-white rounded-2xl shadow-soft border border-slate-200/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:shadow-soft-lg transition-all duration-300"
        />
        
        {/* Clear Button */}
        <AnimatePresence>
          {searchTerm.length > 0 && (
            <motion.button
              type="button"
              onClick={handleClear}
              initial={{ opacity: 0, scale: 0.8, x: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 10 }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 4px 8px -2px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20,
                boxShadow: { duration: 0.2 }
              }}
              className="absolute inset-y-0 right-16 flex items-center pr-2"
            >
              <div className="bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800 p-2 rounded-lg transition-all duration-200 relative overflow-hidden group">
                <motion.div
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX className="h-4 w-4" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-red-50"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Search Button */}
        <motion.button
          type="submit"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 8px 25px -5px rgba(16, 185, 129, 0.3)"
          }}
          whileTap={{ 
            scale: 0.95,
            boxShadow: "0 4px 15px -5px rgba(16, 185, 129, 0.2)"
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20,
            boxShadow: { duration: 0.2 }
          }}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          <div className="bg-gradient-primary text-white p-3 rounded-xl shadow-soft hover:shadow-soft-lg transition-all duration-300 relative overflow-hidden group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <FiSearch className="h-5 w-5 relative z-10" />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </motion.button>
      </div>
    </motion.form>
  );
};

export default SearchBar;