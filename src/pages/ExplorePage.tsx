import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiMenu, FiMapPin } from 'react-icons/fi';
import AnimatedWrapper from '../components/AnimatedWrapper';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import AdvancedFiltersModal from '../components/AdvancedFiltersModal';
import UmkmList from '../components/UmkmList';
import MapView from '../components/MapView';
import { Umkm, UmkmCategory } from '../types/umkm';
import umkmData from '../data/umkm.json';

interface AdvancedFilters {
  isOpenNow: boolean;
  facilities: string[];
}

const ExplorePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<UmkmCategory>('Semua');
  const [filteredUmkm, setFilteredUmkm] = useState<Umkm[]>(umkmData as Umkm[]);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [advancedFilters, setAdvancedFilters] = useState<AdvancedFilters>({
    isOpenNow: false,
    facilities: []
  });

  // Get unique facilities from all UMKM data
  const availableFacilities = useMemo(() => {
    const allFacilities = umkmData.flatMap(umkm => umkm.facilities);
    return Array.from(new Set(allFacilities)).sort();
  }, []);

  // Filter UMKM based on search term, category, and advanced filters
  useEffect(() => {
    let filtered = umkmData;

    // Filter by category
    if (selectedCategory !== 'Semua') {
      filtered = filtered.filter(umkm => umkm.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const searchLower = searchTerm.trim().toLowerCase();
      const searchWords = searchLower.split(/\s+/).filter(word => word.length > 0);
      
      filtered = filtered.filter(umkm => {
        // Create searchable text from all relevant fields
        const searchableText = [
          umkm.name,
          umkm.description,
          umkm.category,
          umkm.address,
          ...umkm.facilities,
          ...umkm.products.map(product => product.name)
        ].join(' ').toLowerCase();

        // Check if all search words are found in the searchable text
        // This provides basic typo tolerance by matching individual words
        return searchWords.every(word => searchableText.includes(word));
      });
    }

    // Filter by advanced filters
    if (advancedFilters.isOpenNow) {
      filtered = filtered.filter(umkm => umkm.isOpen);
    }

    if (advancedFilters.facilities.length > 0) {
      filtered = filtered.filter(umkm => 
        advancedFilters.facilities.every(facility => 
          umkm.facilities.includes(facility)
        )
      );
    }

    setFilteredUmkm(filtered);
  }, [searchTerm, selectedCategory, advancedFilters]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleApplyAdvancedFilters = (filters: AdvancedFilters) => {
    setAdvancedFilters(filters);
    setIsFilterModalOpen(false);
  };

  const handleCloseFilterModal = () => {
    setIsFilterModalOpen(false);
  };

  return (
    <AnimatedWrapper>
      <div className="min-h-screen bg-slate-50">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight"
            >
              Jelajahi Semua UMKM
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Temukan dan jelajahi semua UMKM lokal yang tersedia di platform kami
            </motion.p>

            {/* Search Section */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20 shadow-2xl">
                <SearchBar onSearch={handleSearch} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content Area with Controls */}
        <section className="bg-gradient-to-b from-slate-50/30 to-white py-8 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Controls Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12 p-6 bg-white rounded-2xl border border-slate-200 shadow-soft"
            >
              {/* Title and View Toggle */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800">
                  Semua UMKM ({filteredUmkm.length})
                </h2>
                
                {/* View Mode Toggle */}
                <div className="flex bg-slate-50 rounded-xl p-1 shadow-sm border border-slate-200">
                  <motion.button
                    onClick={() => setViewMode('grid')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 relative overflow-hidden ${
                      viewMode === 'grid'
                        ? 'bg-primary-600 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-800 hover:bg-white'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiMenu className="h-[18px] w-[18px]" />
                    </motion.div>
                    <span className="font-medium relative z-10">Grid</span>
                    {viewMode !== 'grid' && (
                      <motion.div
                        className="absolute inset-0 bg-white"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </motion.button>
                  <motion.button
                    onClick={() => setViewMode('map')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 relative overflow-hidden ${
                      viewMode === 'map'
                        ? 'bg-primary-600 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-800 hover:bg-white'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiMapPin className="h-[18px] w-[18px]" />
                    </motion.div>
                    <span className="font-medium relative z-10">Map</span>
                    {viewMode !== 'map' && (
                      <motion.div
                        className="absolute inset-0 bg-white"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </motion.button>
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <FilterDropdown
                  selectedCategory={selectedCategory}
                  onFilter={setSelectedCategory}
                />
                <motion.button
                   onClick={() => setIsFilterModalOpen(true)}
                   whileHover={{ 
                     scale: 1.02,
                     boxShadow: "0 4px 12px -2px rgba(0, 0, 0, 0.1)"
                   }}
                   whileTap={{ 
                     scale: 0.98,
                     boxShadow: "0 2px 8px -2px rgba(0, 0, 0, 0.1)"
                   }}
                   transition={{ 
                     type: "spring", 
                     stiffness: 300, 
                     damping: 20,
                     boxShadow: { duration: 0.2 }
                   }}
                   className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-800 rounded-lg transition-all duration-200 border border-slate-200 hover:border-slate-300 shadow-sm relative overflow-hidden group"
                 >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiFilter className="h-[18px] w-[18px]" />
                  </motion.div>
                  <span className="font-medium relative z-10">Filter Lainnya</span>
                  <motion.div
                    className="absolute inset-0 bg-slate-50"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              </div>
            </motion.div>

            {/* Main Content with Fixed Toggle */}
            <AnimatePresence mode="wait">
              {viewMode === 'grid' ? (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <UmkmList umkmList={filteredUmkm} />
                </motion.div>
              ) : (
                <motion.div
                  key="map"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="h-[600px] rounded-2xl overflow-hidden shadow-soft border border-slate-200"
                >
                  <MapView umkmList={filteredUmkm} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>

      {/* Advanced Filters Modal */}
      <AdvancedFiltersModal
        isOpen={isFilterModalOpen}
        onClose={handleCloseFilterModal}
        availableFacilities={availableFacilities}
        currentFilters={advancedFilters}
        onApplyFilters={handleApplyAdvancedFilters}
      />
    </AnimatedWrapper>
  );
};

export default ExplorePage;