import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiMenu, FiMapPin } from 'react-icons/fi';
import AnimatedWrapper from '../components/AnimatedWrapper';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import AdvancedFiltersModal from '../components/AdvancedFiltersModal';
import UmkmCard from '../components/UmkmCard';
import UmkmList from '../components/UmkmList';
import MapView from '../components/MapView';
import { Umkm, UmkmCategory } from '../types/umkm';
import umkmData from '../data/umkm.json';

interface AdvancedFilters {
  isOpenNow: boolean;
  facilities: string[];
}

const HomePage: React.FC = () => {
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
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-32 px-6 overflow-hidden">
          {/* Enhanced Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M60 60c16.569 0 30-13.431 30-30S76.569 0 60 0 30 13.431 30 30s13.431 30 30 30zm0-2c15.464 0 28-12.536 28-28S75.464 2 60 2 32 14.536 32 30s12.536 28 28 28z'/%3E%3Ccircle cx='60' cy='60' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-amber-300/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/3 rounded-full blur-lg"></div>

          <div className="relative max-w-7xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
            >
              Temukan Hidden Gems
              <br />
              <span className="bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent">
                di Sekitarmu
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Jelajahi UMKM lokal terbaik di sekitar Anda. Dari kuliner lezat hingga 
              layanan berkualitas, temukan semua kebutuhan Anda di satu tempat.
            </motion.p>

            {/* Enhanced Search Section */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20 shadow-2xl">
                <SearchBar onSearch={handleSearch} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* UMKM Wow Minggu Ini Section */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                UMKM Paling Wow Minggu Ini ✨
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Pilihan terbaik yang sedang trending dan mendapat rating tertinggi dari komunitas
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {umkmData
                .filter((umkm: Umkm) => umkm.isWeeklyWow)
                .map((umkm: Umkm, index: number) => (
                  <motion.div
                    key={umkm.id}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.6 + (index * 0.1),
                      ease: "easeOut"
                    }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="transform transition-all duration-300"
                  >
                    <div className="relative">
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-400 to-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg z-10">
                        ⭐ Wow!
                      </div>
                      <UmkmCard umkm={umkm} />
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </section>

        {/* Thematic Sections */}
        <section className="bg-slate-50 py-16 px-6">
          <div className="max-w-7xl mx-auto space-y-16">
            {/* Kopi Pilihan Section */}
            {filteredUmkm.filter((umkm: Umkm) => umkm.category === 'Minuman').length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                    Kopi Pilihan ☕
                  </h3>
                  <div className="text-sm text-slate-600">
                    Swipe untuk melihat lebih banyak →
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <div className="flex space-x-6 pb-4">
                    {filteredUmkm
                      .filter((umkm: Umkm) => umkm.category === 'Minuman')
                      .slice(0, 6)
                      .map((umkm: Umkm, index: number) => (
                        <motion.div
                          key={umkm.id}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="flex-shrink-0 w-80"
                        >
                          <UmkmCard umkm={umkm} />
                        </motion.div>
                      ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Jajanan Populer Section */}
            {filteredUmkm.filter((umkm: Umkm) => umkm.category === 'Makanan').length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                    Jajanan Populer 🍜
                  </h3>
                  <div className="text-sm text-slate-600">
                    Swipe untuk melihat lebih banyak →
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <div className="flex space-x-6 pb-4">
                    {filteredUmkm
                      .filter((umkm: Umkm) => umkm.category === 'Makanan')
                      .slice(0, 6)
                      .map((umkm: Umkm, index: number) => (
                        <motion.div
                          key={umkm.id}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="flex-shrink-0 w-80"
                        >
                          <UmkmCard umkm={umkm} />
                        </motion.div>
                      ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Main Content Area with Controls */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Controls Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12 p-6 bg-slate-50 rounded-2xl border border-slate-200"
            >
              {/* Title and View Toggle */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <h2 className="text-2xl font-bold text-slate-800">
                  Semua UMKM
                </h2>
                
                {/* View Mode Toggle */}
                <div className="flex bg-white rounded-xl p-1 shadow-sm border border-slate-200">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      viewMode === 'grid'
                        ? 'bg-primary-600 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <FiMenu className="h-[18px] w-[18px]" />
                    <span className="font-medium">Grid</span>
                  </button>
                  <button
                    onClick={() => setViewMode('map')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      viewMode === 'map'
                        ? 'bg-primary-600 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <FiMapPin className="h-[18px] w-[18px]" />
                    <span className="font-medium">Map</span>
                  </button>
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <FilterDropdown
                  selectedCategory={selectedCategory}
                  onFilter={setSelectedCategory}
                />
                <button
                   onClick={() => setIsFilterModalOpen(true)}
                   className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 rounded-lg transition-colors duration-200 border border-slate-200 shadow-sm"
                 >
                  <FiFilter className="h-[18px] w-[18px]" />
                  <span className="font-medium">Filter Lainnya</span>
                </button>
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
                  className="h-[600px] rounded-2xl overflow-hidden shadow-lg border border-slate-200"
                >
                  <MapView umkmList={filteredUmkm} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
            >
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {umkmData.length}+
                </div>
                <div className="text-slate-600">UMKM Terdaftar</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {new Set(umkmData.map(umkm => umkm.category)).size}
                </div>
                <div className="text-slate-600">Kategori Bisnis</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {umkmData.filter(umkm => umkm.isFeatured).length}
                </div>
                <div className="text-slate-600">UMKM Unggulan</div>
              </div>
            </motion.div>
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

export default HomePage;