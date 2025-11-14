import React from 'react';
import { motion } from 'framer-motion';
import UmkmCard from './UmkmCard';
import { Umkm } from '../types/umkm';

interface UmkmListProps {
  umkmList: Umkm[];
  title?: string;
}

const UmkmList: React.FC<UmkmListProps> = ({ umkmList, title = "Datftar UMKM" }) => {
  const containerVariants = {
    hidden: { opacity: 1 }, // Keep opacity 1 for smooth container appearance
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2, // Small delay before first item starts
        staggerChildren: 0.07 // Time between each item animation
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  if (!umkmList || umkmList.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16"
      >
        <div className="bg-white rounded-2xl shadow-soft border border-slate-100/50 p-12 max-w-md mx-auto">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Tidak ada UMKM ditemukan</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Coba ubah kata kunci pencarian atau filter kategori untuk menemukan UMKM yang Anda cari
          </p>
          <div className="text-sm text-slate-500">
            💡 Tips: Gunakan kata kunci yang lebih umum atau coba kategori "Semua"
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="w-full">
      {/* Title */}
      <div className="mb-8">
        <h2 className="font-bold text-2xl text-slate-900 mb-2">
          {title}
        </h2>
        <p className="text-slate-600">
          Ditemukan {umkmList.length} UMKM
        </p>
      </div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {umkmList.map((umkm) => (
          <motion.div key={umkm.id} variants={itemVariants}>
            <UmkmCard umkm={umkm} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default UmkmList;