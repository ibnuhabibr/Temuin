import React from "react";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-gray-300 py-8 mt-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold text-white mb-3">Temuin</h2>
                    <p className="text-sm leading-relaxed">
                        Temuin adalah platform direktori UMKM (Usaha Mikro, Kecil, dan Menengah) lokal yang dirancang untuk membantu masyarakat menemukan bisnis-bisnis lokal di sekitar mereka. Kami percaya bahwa UMKM adalah tulang punggung ekonomi Indonesia, dan melalui platform ini, kami ingin memberikan visibilitas yang lebih besar kepada para pelaku usaha lokal..
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Navigasi</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-white">Beranda</a></li>
                        <li><a href="/jelajahi" className="hover:text-white">Jelajahi</a></li>
                        <li><a href="/tentang" className="hover:text-white">Tentang</a></li>
                        <li><a href="/kontak" className="hover:text-white">Kontak</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Kontak</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Email: kontak@temuin.app</li>
                        <li>Telepon: +62 812-3456-7890</li>
                        <li>Alamat: Surabaya, Indonesia</li>
                    </ul>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Temuin. All rights reserved.
            </div>
        </footer>
    );
}