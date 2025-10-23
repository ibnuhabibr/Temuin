// Core types for the Temuin application

export interface Product {
  name: string;
  price: number;
}

export interface Umkm {
  id: number;
  name: string;
  category: string;
  description: string;
  story: string;
  address: string;
  latitude: number;
  longitude: number;
  placeGallery: string[];
  menuGallery: string[];
  googleMapsEmbedUrl: string;
  rating: number;
  isOpen: boolean;
  isFeatured: boolean;
  isWeeklyWow?: boolean;
  facilities: string[];
  products: Product[];
  operationalHours?: Array<{ day: string; hours: string; isOpen?: boolean }>;
}

// Additional utility types
export type UmkmCategory = 'Semua' | 'Makanan' | 'Minuman' | 'Jasa' | 'Kerajinan';

export type RatingSize = 'sm' | 'md' | 'lg';

// Event handler types
export type SearchHandler = (searchTerm: string) => void;
export type FilterHandler = (category: UmkmCategory) => void;