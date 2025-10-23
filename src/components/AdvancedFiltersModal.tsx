import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

interface AdvancedFilters {
  isOpenNow: boolean;
  facilities: string[];
}

interface AdvancedFiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
  availableFacilities: string[];
  currentFilters: AdvancedFilters;
  onApplyFilters: (filters: AdvancedFilters) => void;
}

const AdvancedFiltersModal: React.FC<AdvancedFiltersModalProps> = ({
  isOpen,
  onClose,
  availableFacilities,
  currentFilters,
  onApplyFilters,
}) => {
  const [localFilters, setLocalFilters] = useState<AdvancedFilters>(currentFilters);

  // Update local state when currentFilters change
  useEffect(() => {
    setLocalFilters(currentFilters);
  }, [currentFilters]);

  const handleToggleOpenNow = () => {
    setLocalFilters(prev => ({
      ...prev,
      isOpenNow: !prev.isOpenNow
    }));
  };

  const handleToggleFacility = (facility: string) => {
    setLocalFilters(prev => ({
      ...prev,
      facilities: prev.facilities.includes(facility)
        ? prev.facilities.filter(f => f !== facility)
        : [...prev.facilities, facility]
    }));
  };

  const handleApply = () => {
    onApplyFilters(localFilters);
    onClose();
  };

  const handleReset = () => {
    const resetFilters = { isOpenNow: false, facilities: [] };
    setLocalFilters(resetFilters);
    onApplyFilters(resetFilters);
  };

  const handleClose = () => {
    setLocalFilters(currentFilters); // Reset to current filters on close
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={handleClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative bg-white rounded-2xl shadow-soft-lg max-w-md w-full max-h-[90vh] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200/50">
            <h2 className="text-xl font-semibold text-slate-900">Filter Lanjutan</h2>
            <button
              onClick={handleClose}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all duration-200"
            >
              <FiX className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
            {/* Open Now Toggle */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-slate-900 mb-4">Status Operasional</h3>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                <div>
                  <div className="font-medium text-slate-900">Sedang Buka Sekarang</div>
                  <div className="text-sm text-slate-600">Tampilkan hanya UMKM yang sedang buka</div>
                </div>
                <button
                  onClick={handleToggleOpenNow}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                    localFilters.isOpenNow ? 'bg-primary-600' : 'bg-slate-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                      localFilters.isOpenNow ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Facilities */}
            <div>
              <h3 className="text-lg font-medium text-slate-900 mb-4">Fasilitas</h3>
              <div className="space-y-3">
                {availableFacilities.map((facility) => (
                  <div key={facility} className="flex items-center">
                    <button
                      onClick={() => handleToggleFacility(facility)}
                      className={`flex items-center justify-center w-5 h-5 rounded border-2 transition-all duration-200 ${
                        localFilters.facilities.includes(facility)
                          ? 'bg-primary-600 border-primary-600 text-white'
                          : 'border-slate-300 hover:border-primary-400'
                      }`}
                    >
                      {localFilters.facilities.includes(facility) && (
                        <span className="text-xs font-bold">✓</span>
                      )}
                    </button>
                    <label
                      onClick={() => handleToggleFacility(facility)}
                      className="ml-3 text-slate-700 cursor-pointer select-none"
                    >
                      {facility}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-6 border-t border-slate-200/50 bg-slate-50/50">
            <button
              onClick={handleReset}
              className="px-4 py-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-all duration-200"
            >
              Reset Filter
            </button>
            <div className="flex space-x-3">
              <button
                onClick={handleClose}
                className="px-4 py-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-all duration-200"
              >
                Batal
              </button>
              <button
                onClick={handleApply}
                className="px-6 py-2 bg-gradient-primary text-white rounded-lg hover:shadow-soft-lg transition-all duration-200"
              >
                Terapkan Filter
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AdvancedFiltersModal;