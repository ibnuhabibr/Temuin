import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiFilter } from 'react-icons/fi';
import { FilterHandler, UmkmCategory } from '../types/umkm';

interface Category {
  value: UmkmCategory;
  label: string;
}

interface FilterDropdownProps {
  onFilter: FilterHandler;
  selectedCategory?: UmkmCategory;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ onFilter, selectedCategory = "Semua" }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const categories: Category[] = [
    { value: "Semua", label: "Semua Kategori" },
    { value: "Makanan", label: "Makanan" },
    { value: "Minuman", label: "Minuman" },
    { value: "Jasa", label: "Jasa" }
  ];

  const handleCategorySelect = (category: Category) => {
    onFilter(category.value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center space-x-3 bg-white px-6 py-4 rounded-xl shadow-soft border border-slate-200/50 hover:shadow-soft-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
      >
        <FiFilter className="h-4 w-4 text-slate-600" />
        <span className="text-slate-700 font-medium">
          {categories.find(cat => cat.value === selectedCategory)?.label || "Semua Kategori"}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FiChevronDown className="h-4 w-4 text-slate-600" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-3 w-52 bg-white rounded-xl shadow-soft-lg border border-slate-200/50 py-3 z-50"
          >
            {categories.map((category) => (
              <motion.button
                key={category.value}
                onClick={() => handleCategorySelect(category)}
                whileHover={{ backgroundColor: "#f1f5f9" }}
                className={`w-full text-left px-5 py-3 text-slate-700 hover:text-primary-600 transition-colors duration-200 rounded-lg mx-2 ${
                  selectedCategory === category.value ? 'bg-primary-50 text-primary-600 font-medium' : ''
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default FilterDropdown;