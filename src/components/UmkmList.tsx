import React from 'react';
import { motion } from 'framer-motion';
import UmkmCard from './UmkmCard';
import { Umkm } from '../types/umkm';

interface UmkmListProps {
  umkmList: Umkm[];
  title?: string;
}

const UmkmList: React.FC<UmkmListProps> = ({ umkmList, title = "Semua UMKM" }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  if (!umkmList || umkmList.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-slate-400 text-lg mb-2">Tidak ada UMKM ditemukan</div>
        <p className="text-slate-500">Coba ubah kata kunci pencarian atau filter kategori</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Title */}
      <div className="mb-8">
        <h2 className="font-poppins font-bold text-2xl text-slate-900 mb-2">
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