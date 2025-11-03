import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface GalleryMenuProps {
  images: string[];
  businessName: string;
}

const GalleryMenu: React.FC<GalleryMenuProps> = ({ images, businessName }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState<"right" | "left">("right");

  // Auto-scroll bolak-balik
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollStep = () => {
      if (scrollDirection === "right") {
        container.scrollBy({ left: 2, behavior: "smooth" });
        if (
          Math.ceil(container.scrollLeft + container.clientWidth) >=
          container.scrollWidth
        ) {
          setScrollDirection("left");
        }
      } else {
        container.scrollBy({ left: -2, behavior: "smooth" });
        if (container.scrollLeft <= 0) {
          setScrollDirection("right");
        }
      }
    };

    const interval = setInterval(scrollStep, 20);
    return () => clearInterval(interval);
  }, [scrollDirection]);

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

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
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur p-2 rounded-full shadow-md hover:bg-white hidden md:flex"
        >
          <FiChevronLeft className="h-5 w-5 text-slate-700" />
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
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur p-2 rounded-full shadow-md hover:bg-white hidden md:flex"
        >
          <FiChevronRight className="h-5 w-5 text-slate-700" />
        </motion.button>
      </div>
    </div>
  );
};

export default GalleryMenu;
