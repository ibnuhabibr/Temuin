<div align="center">

<img src="src/assets/logo-temuin.svg" alt="Temuin Logo" width="120" height="120">

# TEMUIN

### Platform Direktori UMKM Lokal Indonesia

<p>
<img src="https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
<img src="https://img.shields.io/badge/TypeScript-4.9.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
<img src="https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
<img src="https://img.shields.io/badge/Framer_Motion-12.23.24-FF0055?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion">
<img src="https://img.shields.io/badge/Leaflet-1.9.4-199900?style=for-the-badge&logo=leaflet&logoColor=white" alt="Leaflet">
</p>

**Temuin** adalah aplikasi web modern yang dirancang untuk membantu masyarakat menemukan dan mendukung UMKM (Usaha Mikro, Kecil, dan Menengah) lokal di sekitar mereka dengan mudah dan cepat. Platform ini menyediakan direktori lengkap UMKM dengan fitur pencarian cerdas, filter kategori, dan tampilan peta interaktif.

Jelajahi berbagai bisnis lokal, lihat detail produk lengkap, dan temukan UMKM favorit Anda!

</div>

---

## Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Fitur Utama](#fitur-utama)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Cara Menjalankan Proyek](#cara-menjalankan-proyek)
- [Struktur Proyek](#struktur-proyek)
- [Status Pengembangan](#status-pengembangan)
- [Tampilan Aplikasi](#tampilan-aplikasi)

---

## Tentang Proyek

**Temuin** hadir sebagai solusi digital untuk meningkatkan visibilitas dan aksesibilitas UMKM lokal Indonesia. Melalui platform ini, pengguna dapat dengan mudah menemukan berbagai jenis usaha lokal, mulai dari kuliner, fashion, kerajinan tangan, hingga jasa, lengkap dengan informasi detail seperti lokasi, rating, produk, dan galeri foto.

### Keunggulan Temuin:

- **Interface Modern & Intuitif**: Desain yang bersih dan mudah digunakan.
- **Responsif**: Optimal di semua perangkat (desktop, tablet, mobile).
- **Performa Cepat**: Dibangun dengan teknologi modern untuk kecepatan maksimal.
- **User Experience Terbaik**: Navigasi yang _smooth_ dengan animasi yang _engaging_.

---

## Fitur Utama

- **Pencarian & Filter Cerdas**

  - Pencarian _real-time_ berdasarkan nama UMKM.
  - Filter berdasarkan kategori (Makanan, Minuman, Fashion, Kerajinan, Jasa).
  - Filter lanjutan (_advanced filter_) berdasarkan status buka/tutup dan fasilitas (WiFi, parkir, dll.).

- **Tampilan Peta Interaktif**

  - Visualisasi lokasi UMKM menggunakan **Leaflet Maps**.
  - _Marker_ kustom untuk setiap UMKM dengan _popup_ informasi.
  - Kemampuan untuk beralih (_toggle_) antara tampilan _grid_ dan tampilan peta.

- **Halaman Detail Lengkap**

  - Informasi lengkap UMKM (nama, kategori, alamat, jam buka, fasilitas).
  - Carousel galeri foto untuk tempat dan menu.
  - Tampilan rating dan daftar produk beserta harga.
  - _Embed_ Google Maps untuk navigasi langsung ke lokasi.
  - Badge status seperti "Featured" atau "Weekly Wow".

- **Desain UI/UX Premium**

  - Desain yang sepenuhnya responsif dan _mobile-first_.
  - Animasi transisi halaman yang halus menggunakan **Framer Motion**.
  - _Micro-interactions_ pada setiap interaksi pengguna (tombol, _card hover_, dll.).
  - Palet warna yang konsisten dan tipografi yang mudah dibaca.

- **Performa Optimal**

  - Waktu muat yang cepat (_fast loading time_).
  - _Code splitting_ yang efisien.
  - Optimasi gambar.

---

## Teknologi yang Digunakan

### Frontend Framework & Library Utama

| Teknologi                                         | Versi    | Deskripsi                                                                 |
| :------------------------------------------------ | :------- | :------------------------------------------------------------------------ |
| **[React](https://reactjs.org/)**                 | `19.2.0` | Library JavaScript untuk membangun antarmuka pengguna yang interaktif.    |
| **[TypeScript](https://www.typescriptlang.org/)** | `4.9.5`  | Superset JavaScript yang menambahkan _static typing_ untuk kualitas kode. |
| **[React Router DOM](https://reactrouter.com/)**  | `7.9.4`  | Mengelola _routing_ dan navigasi antar halaman pada aplikasi.             |

### Styling & Animasi

| Teknologi                                                     | Versi      | Deskripsi                                                             |
| :------------------------------------------------------------ | :--------- | :-------------------------------------------------------------------- |
| **[Tailwind CSS](https://tailwindcss.com/)**                  | `3.x`      | _Utility-first_ CSS framework untuk _styling_ yang efisien dan cepat. |
| **[Framer Motion](https://www.framer.com/motion/)**           | `12.23.24` | Library animasi untuk transisi halaman dan _micro-interactions_.      |
| **[PostCSS](https://postcss.org/)**                           | `Latest`   | Tool untuk transformasi CSS modern.                                   |
| **[React Icons](https://react-icons.github.io/react-icons/)** | `5.5.0`    | Koleksi _icon library_ yang komprehensif sebagai komponen React.      |

### Maps & Geolokasi

| Teknologi                                          | Versi   | Deskripsi                                                             |
| :------------------------------------------------- | :------ | :-------------------------------------------------------------------- |
| **[Leaflet](https://leafletjs.com/)**              | `1.9.4` | Library peta interaktif _open-source_ yang ringan dan _powerful_.     |
| **[React Leaflet](https://react-leaflet.js.org/)** | `5.0.0` | _Wrapper_ komponen React untuk menggunakan Leaflet secara deklaratif. |

### Development & Testing Tools

| Teknologi                                           | Versi    | Deskripsi                                              |
| :-------------------------------------------------- | :------- | :----------------------------------------------------- |
| **[React Scripts](https://create-react-app.dev/)**  | `5.0.1`  | _Boilerplate_ dan _build tools_ dari Create React App. |
| **[Testing Library](https://testing-library.com/)** | `Latest` | Framework untuk _testing_ komponen React.              |
| **[Jest](https://jestjs.io/)**                      | `Latest` | _JavaScript testing framework_.                        |
| **[Web Vitals](https://web.dev/vitals/)**           | `2.1.4`  | Library untuk memonitor performa web.                  |

---

## Cara Menjalankan Proyek

### Prasyarat

Pastikan Anda telah menginstall perangkat lunak berikut di komputer Anda:

- **Node.js** (versi 16.x atau lebih tinggi)
- **npm** (termasuk dalam Node.js) atau **yarn**
- **Git**

### Instalasi & Menjalankan

1.  **Clone Repository**
    Clone proyek ini ke komputer lokal Anda:

    ```bash
    git clone https://github.com/ibnuhabibr/Temuin.git
    ```

2.  **Masuk ke Direktori Proyek**

    ```bash
    cd Temuin
    ```

3.  **Install Dependencies**
    Install semua _package_ yang diperlukan:

    Menggunakan **npm**:

    ```bash
    npm install
    ```

    Atau menggunakan **yarn**:

    ```bash
    yarn install
    ```

4.  **Jalankan Development Server**
    Jalankan aplikasi dalam mode _development_:

    Menggunakan **npm**:

    ```bash
    npm start
    ```

    Atau menggunakan **yarn**:

    ```bash
    yarn start
    ```

5.  **Buka di Browser**
    Aplikasi akan otomatis terbuka di browser pada alamat `http://localhost:3000`. Jika tidak, buka alamat tersebut secara manual.

### Perintah Lainnya

- **Membuat Build Produksi**
  Perintah ini akan membuat _bundle_ aplikasi yang teroptimasi di dalam folder `build/`:

  ```bash
  npm run build
  ```

- **Menjalankan Testing**
  Menjalankan _test suite_ dalam mode _interactive watch_:

  ```bash
  npm test
  ```

---

## Struktur Proyek

```
temuin/
│
├── 📁 public/                 # File statis publik (HTML, favicon, manifest)
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
│
├── 📁 src/                   # Source code utama aplikasi
│   │
│   ├── 📁 assets/            # Aset media (gambar, logo, dll)
│   │   └── logo-temuin.svg
│   │
│   ├── 📁 components/        # Komponen React yang reusable
│   │   ├── Navbar.tsx
│   │   ├── UmkmCard.tsx
│   │   ├── SearchBar.tsx
│   │   ├── FilterDropdown.tsx
│   │   ├── AdvancedFiltersModal.tsx
│   │   ├── MapView.tsx
│   │   ├── GalleryCarousel.tsx
│   │   ├── RatingStars.tsx
│   │   ├── AnimatedWrapper.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── ...
│   │
│   ├── 📁 pages/             # Komponen Halaman (views)
│   │   ├── HomePage.tsx
│   │   ├── ExplorePage.tsx
│   │   ├── DetailPage.tsx
│   │   ├── AboutPage.tsx
│   │   └── ContactPage.tsx
│   │
│   ├── 📁 data/              # Data statis (sample data)
│   │   └── umkm.json
│   │
│   ├── 📁 types/             # TypeScript type definitions
│   │   └── umkm.ts
│   │
│   ├── App.tsx              # Root component (mengatur routing)
│   ├── index.tsx            # Entry point aplikasi
│   ├── index.css            # Global styles
│   └── ...
│
├── 📁 build/                 # Output build produksi (dihasilkan)
├── package.json             # Daftar dependencies dan scripts
├── tailwind.config.js       # Konfigurasi Tailwind CSS
├── tsconfig.json            # Konfigurasi TypeScript
└── README.md                # Dokumentasi proyek (file ini)
```

### Penjelasan Folder Penting:

- **`src/components/`**: Berisi komponen-komponen React yang dapat digunakan kembali di berbagai halaman (contoh: `Navbar`, `UmkmCard`, `Button`).
- **`src/pages/`**: Berisi komponen yang merepresentasikan satu halaman penuh (contoh: `HomePage`, `DetailPage`).
- **`src/data/`**: Berisi data statis/dummy UMKM dalam format JSON. Nantinya akan diganti dengan data dari API.
- **`src/types/`**: Berisi definisi _interface_ dan _type_ TypeScript untuk memastikan _type safety_ di seluruh aplikasi.
- **`public/`**: Berisi file statis yang tidak diproses oleh Webpack, seperti `index.html` dan `favicon.ico`.

---

## Status Pengembangan

### Fitur yang Telah Selesai

#### Halaman Beranda (HomePage)

- [x] _Hero section_ dengan _gradient background_ dan animasi.
- [x] _Section_ "Featured UMKM" dengan desain _card_ yang menarik.
- [x] _Story carousel_ untuk menampilkan cerita UMKM.
- [x] _Showcase_ kategori UMKM.
- [x] _Call-to-action button_ yang _engaging_.
- [x] _Layout_ yang _fully responsive_.

#### Halaman Jelajahi (ExplorePage)

- [x] _Search bar_ dengan fungsionalitas pencarian _real-time_.
- [x] Filter kategori (Semua, Makanan, Minuman, Fashion, Kerajinan Tangan, Jasa).
- [x] Modal _advanced filters_ (status buka/tutup, fasilitas).
- [x] _Toggle view mode_ antara Grid dan Map.
- [x] Tampilan peta interaktif dengan _custom markers_.
- [x] _Grid layout_ untuk menampilkan _card_ UMKM.
- [x] _Empty state_ untuk hasil pencarian kosong.

#### Halaman Detail UMKM (DetailPage)

- [x] _Header_ dengan informasi utama (nama, kategori, rating).
- [x] _Gallery carousel_ untuk foto tempat dan menu.
- [x] _Badge_ status (Featured, Weekly Wow).
- [x] Informasi lengkap (alamat, jam buka, fasilitas).
- [x] Tampilan rating dengan komponen bintang.
- [x] Daftar produk dengan harga.
- [x] Cerita/story UMKM.
- [x] _Embed_ Google Maps untuk navigasi.

#### Halaman Lainnya

- [x] Halaman Tentang (AboutPage) dengan informasi platform.
- [x] Halaman Kontak (ContactPage) dengan form kontak dan info.

#### Komponen Reusable

- [x] **Navigasi & Layout**: `Navbar` (responsive), `ScrollToTop`, `AnimatedWrapper` (transisi halaman).
- [x] **Tampilan UMKM**: `UmkmCard`, `UmkmList`, `FeaturedSection`, `RatingStars`.
- [x] **Search & Filter**: `SearchBar`, `FilterDropdown`, `AdvancedFiltersModal`.
- [x] **Media & Maps**: `GalleryCarousel`, `MapView` (Leaflet), `MapEmbed` (Google).

#### Fitur UI/UX

- [x] Animasi _page transitions_ dengan Framer Motion.
- [x\*] Micro-interactions\* (hover effects, button animations).
- [x] _Loading states_ dan _skeleton screens_.
- [x] Desain responsif untuk mobile, tablet, dan desktop.
- [x] _Icon set_ lengkap dengan React Icons.

#### Data Management

- [x] Data UMKM dalam format JSON.
- [x] _TypeScript interfaces_ untuk _type safety_ data.
- [x] Sampel data mencakup 5 kategori UMKM (info dasar, lokasi, galeri, rating, produk, fasilitas).

### Fitur dalam Pengembangan

- [ ] **Integrasi Backend**: Setup API (Node.js/Express atau Firebase) dan koneksi ke _database_.
- [ ] **Autentikasi Pengguna**: Sistem registrasi dan _login_ untuk pengguna.
- [ ] **Sistem Review Interaktif**: Memungkinkan pengguna untuk memberi _rating_ dan _review_.
- [ ] **Fitur Favorit**: Memungkinkan pengguna menyimpan UMKM favorit.

### Rencana Ke Depan (Roadmap)

- [ ] **Dashboard Admin**: Panel untuk pemilik UMKM dan admin mengelola data.
- [a] **Progressive Web App (PWA)**: Dukungan PWA untuk fungsionalitas _offline_.
- [ ] **Multi-language**: Dukungan untuk Bahasa Indonesia dan Bahasa Inggris.
- [ ] **Dark Mode**: Opsi _toggle_ tema gelap dan terang.
- [ ] **Optimasi SEO**: Peningkatan SEO untuk visibilitas _search engine_.

---

## Tampilan Aplikasi

> _Catatan: Screenshot akan ditambahkan setelah finalisasi UI._
