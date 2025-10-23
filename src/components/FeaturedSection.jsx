import { motion } from 'framer-motion';
import UmkmCard from './UmkmCard';
import { FiStar } from 'react-icons/fi';

const FeaturedSection = ({ umkmList }) => {
  const featuredUmkm = umkmList.filter(umkm => umkm.isFeatured);

  if (featuredUmkm.length === 0) {
    return null;
  }

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

  return (
    <section className="w-full mb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center mb-4">
          <FiStar className="h-6 w-6 text-amber-400 mr-2" />
          <h2 className="font-poppins font-bold text-3xl text-slate-900">
            UMKM Unggulan
          </h2>
          <FiStar className="h-6 w-6 text-amber-400 ml-2" />
        </div>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Temukan UMKM terbaik yang telah dipilih khusus untuk Anda. 
          Bisnis-bisnis unggulan dengan kualitas dan pelayanan terbaik.
        </p>
      </motion.div>

      {/* Featured Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {featuredUmkm.map((umkm) => (
          <motion.div key={umkm.id} variants={itemVariants}>
            <UmkmCard umkm={umkm} />
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative Elements */}
      <div className="relative mt-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-slate-50 text-slate-500">
            Jelajahi lebih banyak UMKM di bawah
          </span>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;