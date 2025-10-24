import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { Umkm } from '../types/umkm';
import RatingStars from './RatingStars';

// Import marker icons
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icons with webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

interface MapViewProps {
  umkmList: Umkm[];
}

const MapView: React.FC<MapViewProps> = ({ umkmList }) => {
  // Calculate center point based on all UMKM locations
  const centerLat = umkmList.length > 0 
    ? umkmList.reduce((sum, umkm) => sum + umkm.latitude, 0) / umkmList.length
    : -6.2088;
  
  const centerLng = umkmList.length > 0
    ? umkmList.reduce((sum, umkm) => sum + umkm.longitude, 0) / umkmList.length
    : 106.8456;

  return (
    <div className="h-[500px] w-full rounded-xl shadow-soft overflow-hidden">
      <MapContainer
        center={[centerLat, centerLng]}
        zoom={12}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {umkmList.map((umkm) => (
          <Marker
            key={umkm.id}
            position={[umkm.latitude, umkm.longitude]}
          >
            <Popup className="custom-popup">
              <div className="p-2 min-w-[200px]">
                <h3 className="font-bold text-lg text-gray-800 mb-1">
                  {umkm.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {umkm.category}
                </p>
                <div className="flex items-center mb-2">
                  <RatingStars rating={umkm.rating} size="sm" />
                  <span className="ml-1 text-sm text-gray-600">
                    ({umkm.rating})
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                  {umkm.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    umkm.isOpen 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {umkm.isOpen ? 'Buka' : 'Tutup'}
                  </span>
                  <Link
                    to={`/umkm/${umkm.id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-medium transition-colors duration-200"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;