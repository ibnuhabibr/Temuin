import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiMapPin, FiClock, FiPhone, FiGlobe, FiShare2 } from 'react-icons/fi';
import AnimatedWrapper from '../components/AnimatedWrapper';
import GalleryCarousel from '../components/GalleryCarousel';
import MapEmbed from '../components/MapEmbed';
import RatingStars from '../components/RatingStars';
import umkmData from '../data/umkm.json';

const DetailPage = () => {
  const { id } = useParams();
  const umkm = umkmData.find(item => item.id === parseInt(id));

  if (!umkm) {
    return (
      <AnimatedWrapper>
        <div className="min-h-screen bg-slate-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">UMKM tidak ditemukan</h1>
            <Link 
              to="/" 
              className="text-emerald-600 hover:text-emerald-700 font-medium"
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
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link 
                to="/"
                className="flex items-center text-slate-600 hover:text-emerald-600 transition-colors duration-200"
              >
                <FiArrowLeft className="h-5 w-5 mr-2" />
                <span className="font-medium">Kembali</span>
              </Link>
              
              <motion.button
                onClick={shareUrl}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-slate-600 hover:text-emerald-600 transition-colors duration-200"
              >
                <FiShare2 className="h-5 w-5" />
                <span className="font-medium">Bagikan</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <GalleryCarousel images={umkm.gallery} businessName={umkm.name} />
            </motion.div>

            {/* Right Column - Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Basic Info */}
              <div>
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="bg-emerald-100 text-emerald-800 rounded-full px-3 py-1 text-sm font-medium">
                    {umkm.category}
                  </span>
                  {umkm.isFeatured && (
                    <span className="bg-amber-100 text-amber-800 rounded-full px-3 py-1 text-sm font-medium ml-2">
                      Featured
                    </span>
                  )}
                </div>

                {/* Name */}
                <h1 className="font-poppins font-bold text-3xl text-slate-900 mb-4">
                  {umkm.name}
                </h1>

                {/* Rating and Status */}
                <div className="flex items-center justify-between mb-4">
                  <RatingStars rating={umkm.rating} size="md" />
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    umkm.isOpen 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    <FiClock className="inline h-4 w-4 mr-1" />
                    {umkm.isOpen ? 'Buka' : 'Tutup'}
                  </span>
                </div>

                {/* Address */}
                <div className="flex items-start text-slate-600 mb-6">
                  <FiMapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{umkm.address}</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-poppins font-semibold text-lg text-slate-900 mb-3">
                  Tentang
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {umkm.description}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {umkm.story}
                </p>
              </div>

              {/* Facilities */}
              <div>
                <h3 className="font-poppins font-semibold text-lg text-slate-900 mb-3">
                  Fasilitas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {umkm.facilities.map((facility, index) => (
                    <span
                      key={index}
                      className="bg-slate-100 text-slate-700 px-3 py-2 rounded-lg text-sm font-medium"
                    >
                      {facility}
                    </span>
                  ))}
                </div>
              </div>

              {/* Products/Services */}
              {umkm.products && umkm.products.length > 0 && (
                <div>
                  <h3 className="font-poppins font-semibold text-lg text-slate-900 mb-3">
                    Produk & Layanan
                  </h3>
                  <div className="space-y-3">
                    {umkm.products.map((product, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                        <span className="font-medium text-slate-900">{product.name}</span>
                        <span className="font-semibold text-emerald-600">
                          Rp {product.price.toLocaleString('id-ID')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <FiPhone className="h-4 w-4" />
                  <span>Hubungi</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center space-x-2 bg-white text-emerald-600 border border-emerald-600 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors duration-200"
                >
                  <FiGlobe className="h-4 w-4" />
                  <span>Website</span>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <MapEmbed 
              embedUrl={umkm.googleMapsEmbedUrl}
              address={umkm.address}
              businessName={umkm.name}
            />
          </motion.div>

          {/* Related UMKM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
          >
            <h3 className="font-poppins font-semibold text-2xl text-slate-900 mb-6">
              UMKM Serupa
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {umkmData
                .filter(item => item.category === umkm.category && item.id !== umkm.id)
                .slice(0, 3)
                .map((relatedUmkm) => (
                  <Link key={relatedUmkm.id} to={`/umkm/${relatedUmkm.id}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <img
                        src={relatedUmkm.gallery[0]}
                        alt={relatedUmkm.name}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-semibold text-slate-900 mb-1">
                          {relatedUmkm.name}
                        </h4>
                        <p className="text-sm text-slate-600 mb-2">
                          {relatedUmkm.description.substring(0, 80)}...
                        </p>
                        <RatingStars rating={relatedUmkm.rating} size="sm" />
                      </div>
                    </motion.div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedWrapper>
  );
};

export default DetailPage;