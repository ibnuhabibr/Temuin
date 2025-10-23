import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedWrapper from '../components/AnimatedWrapper';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import FeaturedSection from '../components/FeaturedSection';
import UmkmList from '../components/UmkmList';
import umkmData from '../data/umkm.json';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [filteredUmkm, setFilteredUmkm] = useState(umkmData);

  // Filter UMKM based on search term and category
  useEffect(() => {
    let filtered = umkmData;

    // Filter by category
    if (selectedCategory !== 'Semua') {
      filtered = filtered.filter(umkm => umkm.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(umkm =>
        umkm.name.toLowerCase().includes(searchLower) ||
        umkm.description.toLowerCase().includes(searchLower) ||
        umkm.category.toLowerCase().includes(searchLower) ||
        umkm.address.toLowerCase().includes(searchLower) ||
        umkm.facilities.some(facility => 
          facility.toLowerCase().includes(searchLower)
        ) ||
        umkm.products.some(product => 
          product.name.toLowerCase().includes(searchLower)
        )
      );
    }

    setFilteredUmkm(filtered);
  }, [searchTerm, selectedCategory]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  return (
    <AnimatedWrapper>
      <div className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-500 via-green-500 to-emerald-600 text-white py-20 px-4">
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
              className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-6"
            >
              Temukan Hidden Gems
              <br />
              <span className="text-amber-300">di Sekitarmu</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-inter text-lg md:text-xl text-emerald-50 mb-8 max-w-3xl mx-auto"
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

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-slate-50">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
            </svg>
          </div>
        </section>

        {/* Controls Section */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="font-poppins font-semibold text-2xl text-slate-900 mb-2">
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
              >
                <FilterDropdown 
                  onFilter={handleFilter} 
                  selectedCategory={selectedCategory}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-16 px-4">
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

            {/* All UMKM List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
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
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            >
              <div>
                <div className="font-poppins font-bold text-3xl text-emerald-600 mb-2">
                  {umkmData.length}+
                </div>
                <div className="text-slate-600">UMKM Terdaftar</div>
              </div>
              <div>
                <div className="font-poppins font-bold text-3xl text-emerald-600 mb-2">
                  {new Set(umkmData.map(umkm => umkm.category)).size}
                </div>
                <div className="text-slate-600">Kategori Bisnis</div>
              </div>
              <div>
                <div className="font-poppins font-bold text-3xl text-emerald-600 mb-2">
                  {umkmData.filter(umkm => umkm.isFeatured).length}
                </div>
                <div className="text-slate-600">UMKM Unggulan</div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </AnimatedWrapper>
  );
};

export default HomePage;