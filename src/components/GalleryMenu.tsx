import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface GalleryMenuProps {
  images: string[];
  businessName: string;
}

const GalleryMenu: React.FC<GalleryMenuProps> = ({ images, businessName }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState<"right" | "left">(
    "right"
  );

  // Auto-scroll bolak-balik (lebih cepat dan tetap berjalan)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollStep = () => {
      if (scrollDirection === "right") {
        container.scrollBy({ left: 3, behavior: "smooth" }); // Lebih cepat dari 2 ke 3
        if (
          Math.ceil(container.scrollLeft + container.clientWidth) >=
          container.scrollWidth
        ) {
          setScrollDirection("left");
        }
      } else {
        container.scrollBy({ left: -3, behavior: "smooth" }); // Lebih cepat dari -2 ke -3
        if (container.scrollLeft <= 0) {
          setScrollDirection("right");
        }
      }
    };

    const interval = setInterval(scrollStep, 15); // Lebih cepat dari 20ms ke 15ms
    return () => clearInterval(interval);
  }, [scrollDirection]);

  // User control untuk mengubah arah scroll
  const handleScroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    // User bisa mengubah arah auto-scroll
    setScrollDirection(direction);

    // Optional: Jump scroll untuk respons langsung
    const scrollAmount = direction === "right" ? 300 : -300;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-[400px] bg-slate-200 rounded-xl flex items-center justify-center">
        <span className="text-slate-500">Tidak ada menu tersedia</span>
      </div>
    );
  }

  return (
    <div className="relative w-full flex justify-center mt-6">
      <div
        className="relative rounded-lg"
        style={{
          width: "100%",
          maxWidth: "900px",
        }}
      >
        {/* Tombol geser kiri */}
        <motion.button
          onClick={() => handleScroll("left")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-2 md:p-2.5 rounded-full shadow-md hover:bg-white flex items-center justify-center"
        >
          <FiChevronLeft className="h-4 w-4 md:h-5 md:w-5 text-slate-700" />
        </motion.button>

        {/* Carousel container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-hidden px-10 py-2 scroll-smooth"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-shrink-0 bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden"
              style={{
                width: "250px",
                height: "420px",
              }}
            >
              <div className="w-full h-[75%]">
                <img
                  src={img}
                  alt={`${businessName} - Menu ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-sm font-semibold text-slate-700">
                  {businessName} Menu {index + 1}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tombol geser kanan */}
        <motion.button
          onClick={() => handleScroll("right")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-2 md:p-2.5 rounded-full shadow-md hover:bg-white flex items-center justify-center"
        >
          <FiChevronRight className="h-4 w-4 md:h-5 md:w-5 text-slate-700" />
        </motion.button>
      </div>
    </div>
  );
};

export default GalleryMenu;
