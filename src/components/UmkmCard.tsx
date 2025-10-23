import React from 'react';
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
  // Function to map facility names to icons
  const getFacilityIcon = (facilityName: string): React.JSX.Element | null => {
    const lowerCaseName = facilityName.toLowerCase();
    
    if (lowerCaseName.includes('wifi')) return <div className="h-3 w-3 rounded-full bg-blue-500"></div>;
    if (lowerCaseName.includes('parkir')) return <div className="h-3 w-3 rounded-full bg-green-500"></div>;
    if (lowerCaseName.includes('ac')) return <div className="h-3 w-3 rounded-full bg-cyan-500"></div>;
    if (lowerCaseName.includes('merokok')) return <div className="h-3 w-3 rounded-full bg-orange-500"></div>;
    if (lowerCaseName.includes('tempat duduk')) return <div className="h-3 w-3 rounded-full bg-purple-500"></div>;
    if (lowerCaseName.includes('takeaway')) return <div className="h-3 w-3 rounded-full bg-red-500"></div>;
    if (lowerCaseName.includes('delivery')) return <div className="h-3 w-3 rounded-full bg-yellow-500"></div>;
    if (lowerCaseName.includes('pickup')) return <div className="h-3 w-3 rounded-full bg-yellow-600"></div>;
    if (lowerCaseName.includes('24 jam')) return <div className="h-3 w-3 rounded-full bg-indigo-500"></div>;
    if (lowerCaseName.includes('express')) return <div className="h-3 w-3 rounded-full bg-pink-500"></div>;
    if (lowerCaseName.includes('spare part')) return <div className="h-3 w-3 rounded-full bg-gray-500"></div>;
    if (lowerCaseName.includes('ruang tunggu')) return <div className="h-3 w-3 rounded-full bg-teal-500"></div>;
    if (lowerCaseName.includes('custom')) return <div className="h-3 w-3 rounded-full bg-slate-500"></div>;
    
    return null; // Return null for unmapped facilities
  };

  return (
    <Link to={`/umkm/${umkm.id}`} className="group block h-full">
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="card overflow-hidden h-full flex flex-col"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden flex-shrink-0">
          <img
            src={umkm.placeGallery[0] || '/placeholder-image.jpg'}
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

          {/* Facilities */}
          <div className="flex items-center gap-2 mb-4 min-h-[1.5rem]">
            {umkm.facilities.slice(0, 4).map((facility, index) => {
              const icon = getFacilityIcon(facility);
              return icon ? (
                <div key={index} className="flex items-center" title={facility}>
                  {icon}
                </div>
              ) : null;
            }).filter(Boolean)}
            {umkm.facilities.length > 4 && (
              <div className="flex items-center justify-center h-4 w-4 bg-slate-200 text-slate-600 rounded-full text-xs font-medium" title={`+${umkm.facilities.length - 4} fasilitas lainnya`}>
                +{umkm.facilities.length - 4}
              </div>
            )}
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