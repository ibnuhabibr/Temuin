import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';
import RatingStars from './RatingStars';

const UmkmCard = ({ umkm }) => {
  return (
    <Link to={`/umkm/${umkm.id}`}>
      <motion.div
        whileHover={{ 
          scale: 1.03, 
          y: -5,
          boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)"
        }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="group bg-white rounded-xl shadow-soft hover:shadow-soft-lg overflow-hidden cursor-pointer transition-all duration-300"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={umkm.gallery[0]}
            alt={umkm.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          {umkm.isFeatured && (
            <div className="absolute top-3 left-3">
              <span className="bg-amber-400 text-white px-2 py-1 rounded-full text-xs font-medium">
                Featured
              </span>
            </div>
          )}
          <div className="absolute top-3 right-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              umkm.isOpen 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {umkm.isOpen ? 'Buka' : 'Tutup'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category Badge */}
          <div className="mb-3">
            <span className="bg-emerald-100 text-emerald-800 rounded-full px-3 py-1 text-sm font-medium">
              {umkm.category}
            </span>
          </div>

          {/* Name */}
          <h3 className="font-poppins font-bold text-slate-900 text-lg mb-2 line-clamp-1">
            {umkm.name}
          </h3>

          {/* Description */}
          <p className="text-slate-600 text-sm mb-3 line-clamp-2">
            {umkm.description}
          </p>

          {/* Rating */}
          <div className="mb-3">
            <RatingStars rating={umkm.rating} size="sm" />
          </div>

          {/* Address */}
          <div className="flex items-center text-slate-500 text-sm mb-3">
            <FiMapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="line-clamp-1">{umkm.address}</span>
          </div>

          {/* Facilities */}
          <div className="flex flex-wrap gap-1 mb-3">
            {umkm.facilities.slice(0, 3).map((facility, index) => (
              <span
                key={index}
                className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs"
              >
                {facility}
              </span>
            ))}
            {umkm.facilities.length > 3 && (
              <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs">
                +{umkm.facilities.length - 3}
              </span>
            )}
          </div>

          {/* Price Range */}
          {umkm.products && umkm.products.length > 0 && (
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-500">
                Mulai dari
              </div>
              <div className="font-semibold text-emerald-600">
                Rp {Math.min(...umkm.products.map(p => p.price)).toLocaleString('id-ID')}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  );
};

export default UmkmCard;