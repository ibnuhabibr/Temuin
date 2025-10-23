import React from 'react';
import AnimatedWrapper from '../components/AnimatedWrapper';

const AboutPage: React.FC = () => {
  return (
    <AnimatedWrapper className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Tentang Temuin
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-soft p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">
              Apa itu Temuin?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Temuin adalah platform direktori UMKM (Usaha Mikro, Kecil, dan Menengah) lokal yang 
              dirancang untuk membantu masyarakat menemukan bisnis-bisnis lokal di sekitar mereka. 
              Kami percaya bahwa UMKM adalah tulang punggung ekonomi Indonesia, dan melalui platform 
              ini, kami ingin memberikan visibilitas yang lebih besar kepada para pelaku usaha lokal.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Dengan fitur pencarian yang mudah, filter kategori yang lengkap, dan informasi detail 
              tentang setiap UMKM, Temuin memudahkan Anda untuk menemukan produk dan layanan yang 
              Anda butuhkan sambil mendukung ekonomi lokal.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-soft p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">
              Misi Kami
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-slate-600">
                    Memberikan platform yang mudah digunakan untuk menemukan UMKM lokal
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-slate-600">
                    Meningkatkan visibilitas dan jangkauan bisnis UMKM
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-slate-600">
                    Mendukung pertumbuhan ekonomi lokal dan berkelanjutan
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-slate-600">
                    Membangun komunitas yang saling mendukung antara konsumen dan pelaku usaha
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-soft p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">
              Tentang Proyek Ini
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Temuin dikembangkan sebagai bagian dari kompetisi <strong>MIA 2025 Guidebook Web In Action</strong>. 
              Proyek ini merupakan implementasi dari visi untuk menciptakan ekosistem digital yang 
              mendukung UMKM Indonesia dalam era transformasi digital.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Dengan menggunakan teknologi web modern seperti React, TypeScript, dan Tailwind CSS, 
              kami berkomitmen untuk memberikan pengalaman pengguna yang optimal dan antarmuka yang 
              responsif di berbagai perangkat.
            </p>
          </div>
        </div>
      </div>
    </AnimatedWrapper>
  );
};

export default AboutPage;