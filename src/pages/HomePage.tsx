import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import AnimatedWrapper from '../components/AnimatedWrapper';
import UmkmCard from '../components/UmkmCard';
import { Umkm } from '../types/umkm';
import umkmData from '../data/umkm.json';

const HomePage: React.FC = () => {
  // Filter all UMKM with stories (length > 50 characters)
  const storyUmkms = useMemo(() => 
    umkmData.filter(umkm => umkm.story && umkm.story.length > 50), 
    []
  );

  // State for current slide index
  const [currentStoryIndex, setCurrentStoryIndex] = useState<number>(0);

  // Navigation handlers
  const handleNextStory = () => {
    if (storyUmkms.length > 0) {
      setCurrentStoryIndex((prevIndex) => (prevIndex + 1) % storyUmkms.length);
    }
  };

  const handlePrevStory = () => {
    if (storyUmkms.length > 0) {
      setCurrentStoryIndex((prevIndex) => (prevIndex - 1 + storyUmkms.length) % storyUmkms.length);
    }
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

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="max-w-2xl mx-auto"
            >
              <Link to="/jelajahi">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-700 px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 border border-white/20 backdrop-blur-sm"
                >
                  Jelajahi Semua UMKM
                </motion.button>
              </Link>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                UMKM Paling Wow Minggu Ini
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

        {/* Highlight Cerita UMKM Carousel Section */}
        {storyUmkms && storyUmkms.length > 0 && (
          <section className="py-16 px-4 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2 block">
                  Cerita Lokal
                </span>
                <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-slate-900 mb-4 leading-tight">
                  Highlight Cerita UMKM
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Temukan kisah inspiratif di balik setiap UMKM lokal yang telah berjuang membangun usahanya
                </p>
              </motion.div>

              {/* Carousel Container */}
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Image Column */}
                  <div className="relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`image-${currentStoryIndex}`}
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -300 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <img 
                          src={storyUmkms[currentStoryIndex].placeGallery[0]} 
                          alt={`Foto ${storyUmkms[currentStoryIndex].name}`} 
                          className="rounded-2xl shadow-soft object-cover aspect-video w-full" 
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Text Column */}
                  <div className="relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`content-${currentStoryIndex}`}
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -300 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <h3 className="font-poppins font-bold text-3xl lg:text-4xl text-slate-900 mb-4 leading-tight">
                          {storyUmkms[currentStoryIndex].name}
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-6 line-clamp-4">
                          "{storyUmkms[currentStoryIndex].story}"
                        </p>
                        <Link to={`/umkm/${storyUmkms[currentStoryIndex].id}`}>
                          <motion.button 
                            whileHover={{ scale: 1.05 }} 
                            whileTap={{ scale: 0.95 }} 
                            className="inline-flex items-center space-x-2 bg-gradient-primary text-white px-6 py-3 rounded-full font-medium shadow-soft hover:shadow-soft-lg transition-shadow duration-200"
                          >
                            <span>Baca Kisah Lengkap</span>
                            <FiChevronRight className="h-4 w-4" />
                          </motion.button>
                        </Link>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Navigation Buttons */}
                {storyUmkms.length > 1 && (
                  <>
                    {/* Previous Button */}
                    <motion.button
                      onClick={handlePrevStory}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-700 hover:text-primary-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/20 z-10"
                      aria-label="Previous story"
                    >
                      <FiChevronLeft className="h-6 w-6" />
                    </motion.button>

                    {/* Next Button */}
                    <motion.button
                      onClick={handleNextStory}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-700 hover:text-primary-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/20 z-10"
                      aria-label="Next story"
                    >
                      <FiChevronRight className="h-6 w-6" />
                    </motion.button>
                  </>
                )}

                {/* Carousel Indicators */}
                {storyUmkms.length > 1 && (
                  <div className="flex justify-center mt-8 space-x-2">
                    {storyUmkms.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentStoryIndex(index)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentStoryIndex 
                            ? 'bg-primary-600 shadow-lg' 
                            : 'bg-slate-300 hover:bg-slate-400'
                        }`}
                        aria-label={`Go to story ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Thematic Sections */}
        <section className="bg-gradient-to-b from-white via-slate-50/50 to-slate-100/30 py-20 px-6">
          <div className="max-w-7xl mx-auto space-y-20">
            {/* Kopi Pilihan Section */}
            {umkmData.filter((umkm: Umkm) => umkm.category === 'Minuman').length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800">
                    Kopi Pilihan ☕
                  </h3>
                  <div className="text-sm text-slate-600">
                    Swipe untuk melihat lebih banyak →
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <div className="flex space-x-6 pb-4">
                    {umkmData
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
            {umkmData.filter((umkm: Umkm) => umkm.category === 'Makanan').length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800">
                    Jajanan Populer 🍜
                  </h3>
                  <div className="text-sm text-slate-600">
                    Swipe untuk melihat lebih banyak →
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <div className="flex space-x-6 pb-4">
                    {umkmData
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


    </AnimatedWrapper>
  );
};

export default HomePage;