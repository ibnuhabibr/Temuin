import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiMapPin, FiClock, FiPhone, FiShare2 } from 'react-icons/fi';
import AnimatedWrapper from '../components/AnimatedWrapper';
import GalleryCarousel from '../components/GalleryCarousel';
import MapEmbed from '../components/MapEmbed';
import RatingStars from '../components/RatingStars';
import { Umkm } from '../types/umkm';
import umkmData from '../data/umkm.json';

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const umkm = (umkmData as Umkm[]).find(item => item.id === parseInt(id || '0'));

  if (!umkm) {
    return (
      <AnimatedWrapper>
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
          <div className="text-center bg-white rounded-2xl shadow-soft p-12 border border-slate-100/50">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">UMKM tidak ditemukan</h1>
            <Link 
              to="/" 
              className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
            >
              Kembali ke beranda
            </Link>
          </div>
        </div>
      </AnimatedWrapper>
    );
  }

  const shareUrl = () => {
    if (navigator.share) {
      navigator.share({
        title: umkm.name,
        text: umkm.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link telah disalin ke clipboard!');
    }
  };

  return (
    <AnimatedWrapper>
      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <div className="bg-white shadow-soft border-b border-slate-100/50">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <Link 
                to="/"
                aria-label="Kembali ke halaman utama"
                className="flex items-center text-slate-600 hover:text-primary-600 transition-colors duration-300"
              >
                <FiArrowLeft className="h-5 w-5 mr-2" />
                <span className="font-medium">Kembali</span>
              </Link>
              
              <motion.button
                onClick={shareUrl}
                aria-label="Bagikan halaman ini"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-slate-600 hover:text-primary-600 transition-colors duration-300"
              >
                <FiShare2 className="h-5 w-5" />
                <span className="font-medium">Bagikan</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Two-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Left Column - Visual Elements (2/3 width on large screens) */}
            <div className="lg:col-span-2 space-y-8 lg:space-y-12">
              
              {/* Galeri Tempat Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white rounded-2xl shadow-soft border border-slate-100/50 p-6 lg:p-8"
              >
                <h3 className="font-semibold text-xl lg:text-2xl text-slate-900 mb-6">
                  Galeri Tempat
                </h3>
                {umkm.placeGallery && umkm.placeGallery.length > 0 ? (
                  <GalleryCarousel images={umkm.placeGallery} businessName={umkm.name} />
                ) : (
                  <div className="bg-slate-100 rounded-xl p-8 text-center">
                    <p className="text-slate-600">Tidak ada foto tempat tersedia</p>
                  </div>
                )}
              </motion.div>

              {/* Galeri Menu Section */}
              {umkm.menuGallery && umkm.menuGallery.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-soft border border-slate-100/50 p-6 lg:p-8"
                >
                  <h3 className="font-semibold text-xl lg:text-2xl text-slate-900 mb-6">
                    Galeri Menu
                  </h3>
                  <GalleryCarousel images={umkm.menuGallery} businessName={umkm.name} />
                </motion.div>
              )}

              {/* Map Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-soft border border-slate-100/50 p-6 lg:p-8"
              >
                <h3 className="font-semibold text-xl lg:text-2xl text-slate-900 mb-6">
                  Lokasi
                </h3>
                <div className="rounded-xl overflow-hidden">
                  <MapEmbed 
                    embedUrl={umkm.googleMapsEmbedUrl}
                    address={umkm.address}
                    businessName={umkm.name}
                  />
                </div>
              </motion.div>
            </div>

            {/* Right Column - Textual Content & Actions (1/3 width, sticky on large screens) */}
            <div className="lg:col-span-1 lg:sticky lg:top-24 lg:self-start space-y-6">
              
              {/* Basic Info Block */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white rounded-2xl shadow-soft border border-slate-100/50 p-6"
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="bg-primary-100 text-primary-800 rounded-full px-4 py-2 text-sm font-medium">
                    {umkm.category}
                  </span>
                  {umkm.isFeatured && (
                    <span className="bg-amber-100 text-amber-800 rounded-full px-3 py-1 text-sm font-medium ml-2">
                      Featured
                    </span>
                  )}
                </div>

                {/* Name */}
                <h1 className="font-bold text-2xl lg:text-3xl text-slate-900 mb-4">
                  {umkm.name}
                </h1>

                {/* Rating */}
                <div className="mb-4">
                  <RatingStars rating={umkm.rating} size="md" />
                </div>

                {/* Status */}
                <div className="mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    umkm.isOpen 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    <FiClock className="h-4 w-4 mr-1" />
                    {umkm.isOpen ? 'Buka' : 'Tutup'}
                  </span>
                </div>

                {/* Address */}
                <div className="flex items-start text-slate-600">
                  <FiMapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{umkm.address}</span>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="space-y-3"
              >
                <motion.button
                  onClick={() => alert('Fitur "Hubungi" segera hadir!')}
                  aria-label="Hubungi UMKM ini"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-primary text-white px-6 py-3 rounded-xl font-medium shadow-soft hover:shadow-soft-lg transition-all duration-300"
                >
                  <FiPhone className="h-4 w-4" />
                  <span>Hubungi</span>
                </motion.button>
                
                <motion.button
                  onClick={shareUrl}
                  aria-label="Bagikan halaman ini"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center space-x-2 bg-white text-slate-700 px-6 py-3 rounded-xl font-medium border border-slate-200 hover:bg-slate-50 transition-all duration-300"
                >
                  <FiShare2 className="h-4 w-4" />
                  <span>Bagikan</span>
                </motion.button>
              </motion.div>

              {/* About Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-soft border border-slate-100/50 p-6"
              >
                <h3 className="font-semibold text-lg text-slate-900 mb-4">
                  Tentang
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {umkm.description}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {umkm.story}
                </p>
              </motion.div>

              {/* Facilities Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-soft border border-slate-100/50 p-6"
              >
                <h3 className="font-semibold text-lg text-slate-900 mb-4">
                  Fasilitas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {umkm.facilities.map((facility, index) => (
                    <span
                      key={index}
                      className="bg-slate-100/80 text-slate-700 px-3 py-1 rounded-lg text-xs font-medium border border-slate-200/50"
                    >
                      {facility}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Products/Services Section */}
              {umkm.products && umkm.products.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="bg-white rounded-2xl shadow-soft border border-slate-100/50 p-6"
                >
                  <h3 className="font-semibold text-lg text-slate-900 mb-4">
                    Produk & Layanan
                  </h3>
                  <div className="space-y-3">
                    {umkm.products.map((product, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <span className="font-medium text-slate-900 text-sm">{product.name}</span>
                        <span className="font-semibold text-primary-600 text-sm">
                          Rp {product.price.toLocaleString('id-ID')}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Related UMKM Section - Full Width Outside Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-12 lg:mt-16"
          >
            <h3 className="font-semibold text-2xl lg:text-3xl text-slate-900 mb-8">
              UMKM Serupa
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {umkmData
                .filter(item => item.category === umkm.category && item.id !== umkm.id)
                .slice(0, 3)
                .map((relatedUmkm, index) => (
                  <motion.div
                    key={relatedUmkm.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="bg-white rounded-2xl shadow-soft border border-slate-100/50 overflow-hidden hover:shadow-soft-lg transition-all duration-300 group"
                  >
                    <Link to={`/umkm/${relatedUmkm.id}`} className="block">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={relatedUmkm.placeGallery?.[0] || '/placeholder-image.jpg'}
                          alt={relatedUmkm.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-white/90 backdrop-blur-sm text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                            {relatedUmkm.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                          {relatedUmkm.name}
                        </h4>
                        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                          {relatedUmkm.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <RatingStars rating={relatedUmkm.rating} size="sm" />
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            relatedUmkm.isOpen 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {relatedUmkm.isOpen ? 'Buka' : 'Tutup'}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedWrapper>
  );
};

export default DetailPage;