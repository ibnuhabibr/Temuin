import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiExternalLink } from 'react-icons/fi';

interface MapEmbedProps {
  embedUrl: string;
  address: string;
  businessName: string;
}

const MapEmbed: React.FC<MapEmbedProps> = ({ embedUrl, address, businessName }) => {
  const openInGoogleMaps = () => {
    const searchQuery = encodeURIComponent(`${businessName} ${address}`);
    const googleMapsUrl = `https://www.google.com/maps/search/${searchQuery}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <FiMapPin className="h-5 w-5 text-primary-600 mr-2" />
          <h3 className="font-semibold text-xl text-slate-900">
            Lokasi
          </h3>
        </div>
        <motion.button
          onClick={openInGoogleMaps}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 transition-colors duration-300"
        >
          <span className="text-sm font-medium">Buka di Maps</span>
          <FiExternalLink className="h-4 w-4" />
        </motion.button>
      </div>

      {/* Address */}
      <p className="text-slate-600 mb-4">{address}</p>

      {/* Map Embed */}
      <div className="rounded-2xl overflow-hidden shadow-soft-lg border border-slate-100/50">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Lokasi ${businessName}`}
            className="w-full h-72"
          />
        ) : (
          <div className="w-full h-72 bg-slate-200 flex items-center justify-center">
            <div className="text-center">
              <FiMapPin className="h-12 w-12 text-slate-400 mx-auto mb-2" />
              <p className="text-slate-500">Peta tidak tersedia</p>
              <motion.button
                onClick={openInGoogleMaps}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
              >
                Lihat di Google Maps
              </motion.button>
            </div>
          </div>
        )}
      </div>

      {/* Additional Info */}
      <div className="mt-6 p-5 bg-slate-50/80 rounded-xl border border-slate-100/50">
        <p className="text-sm text-slate-600">
          <strong>Tips:</strong> Klik "Buka di Maps" untuk mendapatkan petunjuk arah 
          dan informasi lalu lintas terkini.
        </p>
      </div>
    </div>
  );
};

export default MapEmbed;