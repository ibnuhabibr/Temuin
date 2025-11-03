import { AnimatePresence, motion } from "framer-motion";
import React, { useMemo, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import AnimatedWrapper from "../components/AnimatedWrapper";
import UmkmCard from "../components/UmkmCard";
import umkmData from "../data/umkm.json";
import { Umkm } from "../types/umkm";

const HomePage: React.FC = () => {
  // Filter all UMKM with stories (length > 50 characters)
  const storyUmkms = useMemo(
    () => umkmData.filter((umkm) => umkm.story && umkm.story.length > 50),
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
      setCurrentStoryIndex(
        (prevIndex) => (prevIndex - 1 + storyUmkms.length) % storyUmkms.length
      );
    }
  };

  return (
    <AnimatedWrapper>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-20">
        {/* Enhanced Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-900 text-white pt-32 pb-40 px-6 overflow-hidden">
          {/* Animated Background Patterns */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Animated Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2],
              rotate: [0, 90],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1],
              rotate: [90, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, -20],
              scale: [1, 1.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"
          />

          {/* Floating Icons/Elements */}
          <motion.div
            animate={{ y: [-15, 0], rotate: [5, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute top-32 left-20 text-6xl opacity-10"
          >
            🍔
          </motion.div>
          <motion.div
            animate={{ y: [15, 0], rotate: [-5, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-40 right-32 text-5xl opacity-10"
          >
            ☕
          </motion.div>
          <motion.div
            animate={{ y: [-20, 0], rotate: [10, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-32 left-1/4 text-4xl opacity-10"
          >
            🛍️
          </motion.div>

          <div className="relative max-w-7xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight"
            >
              Temukan{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300 bg-clip-text text-transparent">
                  Hidden Gems
                </span>
                <motion.div
                  animate={{
                    scaleX: [0, 1],
                  }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute bottom-2 left-0 right-0 h-4 bg-amber-400/30 -z-10"
                />
              </span>
              <br />
              di Sekitarmu
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Jelajahi UMKM lokal terbaik di sekitarmu. Dari kuliner lezat
              hingga layanan berkualitas, temukan semua kebutuhan Anda di satu
              tempat.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/jelajahi">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-white text-primary-700 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Mulai Jelajahi
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    ></motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-amber-50 to-orange-50"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
            >
              {[
                { number: "10+", label: "UMKM Terdaftar" },
                { number: "5+", label: "Kategori Bisnis" },
                { number: "1000+", label: "Pengunjung/Bulan" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-black text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/70 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
            >
              <path
                d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
                fill="white"
              />
            </svg>
          </div>
        </section>

        {/* UMKM Wow Minggu Ini Section */}
        <section className="relative bg-gradient-to-br from-white via-slate-50 to-blue-50/20 py-24 px-6 overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-100/50 to-blue-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-100/50 to-orange-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full px-5 py-2 mb-6 shadow-lg"
              >
                <span className="text-xl">⭐</span>
                <span className="text-sm font-bold">PILIHAN TERBAIK</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                <span className="text-slate-900">UMKM Paling Wow</span>
                <br />
                <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                  Minggu Ini
                </span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Pilihan terbaik yang sedang trending dan mendapat rating
                tertinggi dari komunitas kami
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
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.6 + index * 0.15,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{ y: -12, scale: 1.03 }}
                    className="group relative"
                  >
                    {/* Glow Effect on Hover */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                    {/* Wow Badge */}
                    <motion.div
                      initial={{ rotate: -15, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.15, type: "spring" }}
                      className="absolute -top-4 -right-4 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl z-20 flex items-center gap-1"
                    >
                      <span className="text-lg">⭐</span>
                      <span>Wow!</span>
                    </motion.div>

                    <div className="relative">
                      <UmkmCard umkm={umkm} />
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </section>

        {/* Highlight Cerita UMKM Carousel Section */}
        {storyUmkms && storyUmkms.length > 0 && (
          <section className="relative py-24 px-4 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
              <motion.div
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: "60px 60px",
                }}
              />
            </div>

            <div className="relative max-w-7xl mx-auto">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="font-black text-4xl lg:text-5xl mb-4 leading-tight">
                  <span className="text-white">Highlight</span>{" "}
                  <span className="text-amber-400">Cerita UMKM</span>
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  Temukan kisah inspiratif di balik setiap UMKM lokal yang telah
                  berjuang membangun usahanya
                </p>
              </motion.div>

              {/* Carousel Container */}
              <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Image Column */}
                  <div className="relative overflow-hidden order-2 lg:order-1">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`image-${currentStoryIndex}`}
                        initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="relative"
                      >
                        {/* Image glow effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-amber-500 rounded-3xl blur-2xl opacity-30" />
                        <img
                          src={storyUmkms[currentStoryIndex].placeGallery[0]}
                          alt={`Foto ${storyUmkms[currentStoryIndex].name}`}
                          className="relative rounded-3xl shadow-2xl object-cover aspect-[4/3] w-full ring-4 ring-white/10"
                        />
                        {/* Decorative corner */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl blur-2xl opacity-50" />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Text Column */}
                  <div className="relative overflow-hidden order-1 lg:order-2">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`content-${currentStoryIndex}`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 lg:p-10 border border-white/10"
                      >
                        <h3 className="font-black text-3xl lg:text-4xl mb-4 leading-tight text-amber-400">
                          {storyUmkms[currentStoryIndex].name}
                        </h3>
                        <p className="text-white/90 text-lg leading-relaxed mb-8 line-clamp-5">
                          "{storyUmkms[currentStoryIndex].story}"
                        </p>
                        <Link to={`/umkm/${storyUmkms[currentStoryIndex].id}`}>
                          <motion.button
                            whileHover={{
                              scale: 1.05,
                              boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                          >
                            <span>Baca Kisah Lengkap</span>
                            <FiChevronRight className="h-5 w-5" />
                          </motion.button>
                        </Link>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Navigation Buttons - Enhanced */}
                {storyUmkms.length > 1 && (
                  <>
                    {/* Previous Button */}
                    <motion.button
                      onClick={handlePrevStory}
                      whileHover={{ scale: 1.15, x: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute left-0 lg:left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-xl hover:bg-white/30 text-white p-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-white/20 z-10 group"
                      aria-label="Previous story"
                    >
                      <FiChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    </motion.button>

                    {/* Next Button */}
                    <motion.button
                      onClick={handleNextStory}
                      whileHover={{ scale: 1.15, x: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-xl hover:bg-white/30 text-white p-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-white/20 z-10 group"
                      aria-label="Next story"
                    >
                      <FiChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    </motion.button>
                  </>
                )}

                {/* Carousel Indicators - Enhanced */}
                {storyUmkms.length > 1 && (
                  <div className="flex justify-center mt-12 gap-3">
                    {storyUmkms.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentStoryIndex(index)}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.8 }}
                        className={`transition-all duration-300 rounded-full ${
                          index === currentStoryIndex
                            ? "w-12 h-3 bg-gradient-to-r from-amber-400 to-orange-500 shadow-lg"
                            : "w-3 h-3 bg-white/30 hover:bg-white/50"
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
            {umkmData.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800">
                    Daftar UMKM
                  </h3>
                  <div className="text-sm text-slate-600">
                    Swipe untuk melihat lebih banyak →
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <div className="flex space-x-6 pb-4">
                    {umkmData.slice(0, 10).map((umkm: Umkm, index: number) => (
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
      </div>
    </AnimatedWrapper>
  );
};

export default HomePage;
