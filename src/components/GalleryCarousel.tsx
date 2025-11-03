import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface GalleryCarouselProps {
  images: string[];
  businessName: string;
}

const GalleryCarousel: React.FC<GalleryCarouselProps> = ({
  images,
  businessName,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide setiap 5 detik
  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, nextImage]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-[400px] bg-slate-200 rounded-xl flex items-center justify-center">
        <span className="text-slate-500">Tidak ada gambar tersedia</span>
      </div>
    );
  }

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* === Gambar Utama (Landscape) === */}
      <div
        className="relative rounded-2xl overflow-hidden shadow-md border border-slate-100/50"
        style={{
          width: "100%",
          maxWidth: "900px", // batas lebar maksimal
          aspectRatio: "16 / 9", // rasio landscape
        }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${businessName} - Gambar ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </AnimatePresence>

        {/* Tombol navigasi kiri-kanan */}
        {images.length > 1 && (
          <>
            <motion.button
              onClick={prevImage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Gambar sebelumnya"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur p-2 rounded-full shadow-md hover:bg-white transition-all duration-300"
            >
              <FiChevronLeft className="h-6 w-6 text-slate-700" />
            </motion.button>

            <motion.button
              onClick={nextImage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Gambar selanjutnya"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur p-2 rounded-full shadow-md hover:bg-white transition-all duration-300"
            >
              <FiChevronRight className="h-6 w-6 text-slate-700" />
            </motion.button>
          </>
        )}

        {/* Indikator posisi */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* === Carousel Card Menu (Portrait) === */}
      {images.length > 1 && (
        <div className="relative w-full flex justify-center mt-6">
          <div
            className="relative rounded-lg"
            style={{
              width: "100%",
              maxWidth: "900px", // sama seperti gambar utama
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default GalleryCarousel;
