import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiMenu, FiMapPin } from 'react-icons/fi';
import AnimatedWrapper from '../components/AnimatedWrapper';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import AdvancedFiltersModal from '../components/AdvancedFiltersModal';
import FeaturedSection from '../components/FeaturedSection';
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

  const handleFilter = (category: UmkmCategory) => {
    setSelectedCategory(category);
  };

  const handleApplyAdvancedFilters = (filters: AdvancedFilters) => {
    setAdvancedFilters(filters);
    setIsFilterModalOpen(false);
  };

  const handleOpenFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  const handleCloseFilterModal = () => {
    setIsFilterModalOpen(false);
  };

  return (
    <AnimatedWrapper>
      <div className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-primary text-white py-24 px-6">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative max-w-7xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            >
              Temukan Hidden Gems
              <br />
              <span className="text-amber-300">di Sekitarmu</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Jelajahi UMKM lokal terbaik di sekitar Anda. Dari kuliner lezat hingga 
              layanan berkualitas, temukan semua kebutuhan Anda di satu tempat.
            </motion.p>

            {/* Search Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <SearchBar onSearch={handleSearch} />
            </motion.div>
          </div>
        </section>

        {/* Controls Section */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                  Jelajahi UMKM
                </h2>
                <p className="text-slate-600">
                  Gunakan filter untuk menemukan UMKM sesuai kebutuhan Anda
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex items-center gap-4"
              >
                {/* View Mode Toggle */}
                <div className="flex items-center bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex items-center gap-2 px-4 py-2 transition-all duration-200 font-medium ${
                      viewMode === 'grid'
                        ? 'bg-primary-500 text-white'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <FiMenu className="w-4 h-4" />
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode('map')}
                    className={`flex items-center gap-2 px-4 py-2 transition-all duration-200 font-medium ${
                      viewMode === 'map'
                        ? 'bg-primary-500 text-white'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <FiMapPin className="w-4 h-4" />
                    Peta
                  </button>
                </div>

                <FilterDropdown 
                  onFilter={handleFilter} 
                  selectedCategory={selectedCategory}
                />
                <button
                  onClick={handleOpenFilterModal}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 text-slate-700 font-medium shadow-sm"
                >
                  <FiFilter className="w-4 h-4" />
                  Filter Lainnya
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Featured Section */}
            {!searchTerm && selectedCategory === 'Semua' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <FeaturedSection umkmList={umkmData} />
              </motion.div>
            )}

            {/* UMKM List or Map View */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <AnimatePresence mode="wait">
                {viewMode === 'grid' ? (
                  <motion.div
                    key="grid-view"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <UmkmList 
                      umkmList={filteredUmkm}
                      title={
                        searchTerm 
                          ? `Hasil pencarian "${searchTerm}"` 
                          : selectedCategory === 'Semua' 
                            ? 'Semua UMKM' 
                            : `UMKM ${selectedCategory}`
                      }
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="map-view"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MapView umkmList={filteredUmkm} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
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