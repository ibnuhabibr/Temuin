import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiMapPin
} from 'react-icons/fi';
import RatingStars from './RatingStars';
import { Umkm } from '../types/umkm';

interface UmkmCardProps {
  umkm: Umkm;
}

const UmkmCard: React.FC<UmkmCardProps> = ({ umkm }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    <Link to={`/umkm/${umkm.id}`} className="group block h-full">
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="card overflow-hidden h-full flex flex-col border border-slate-100/50 hover:border-slate-200/80"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          {/* Loading Placeholder */}
          {imageLoading && (
            <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 bg-slate-300 rounded-full"></div>
            </div>
          )}
          
          {/* Error State */}
          {imageError && (
            <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-8 h-8 text-slate-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-xs text-slate-500">Foto tidak tersedia</p>
              </div>
            </div>
          )}
          
          <img
            src={umkm.placeGallery[0] || '/placeholder-image.jpg'}
            alt={umkm.name}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out ${
              imageLoading ? 'opacity-0' : 'opacity-100'
            }`}
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
        <div className="p-6 flex flex-col flex-grow">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="bg-primary-100 text-primary-800 rounded-full px-3 py-1 text-sm font-medium">
              {umkm.category}
            </span>
          </div>

          {/* Title and Description - Fixed height area */}
          <div className="mb-4 flex-grow">
            <h3 className="text-lg font-semibold text-slate-900 mb-2 hover:text-primary-600 transition-colors line-clamp-2 min-h-[3.5rem]">
              {umkm.name}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 min-h-[4rem]">
              {umkm.description}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-3">
            <RatingStars rating={umkm.rating} />
            <span className="text-sm text-slate-500 ml-2">
              {umkm.rating}/5
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center text-slate-500 text-sm mb-4">
            <FiMapPin className="h-4 w-4 mr-2 flex-shrink-0 text-primary-500" />
            <span className="line-clamp-1">{umkm.address}</span>
          </div>

          {/* Price Range - Always at bottom */}
          <div className="mt-auto">
            {umkm.products && umkm.products.length > 0 && (
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="text-sm text-slate-500">
                  Mulai dari
                </div>
                <div className="font-semibold text-primary-600 text-lg">
                  Rp {Math.min(...umkm.products.map(p => p.price)).toLocaleString('id-ID')}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default UmkmCard;