<div align="center"># Getting Started with Create React App

  <img src="src/assets/logo-temuin.svg" alt="Temuin Logo" width="120" height="120">

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# 🏪 Temuin

## Available Scripts

### _Platform Direktori UMKM Lokal Indonesia_

In the project directory, you can run:

  <p>

    <strong>Temuin</strong> adalah platform web yang membantu masyarakat menemukan dan mendukung UMKM lokal di sekitar mereka dengan mudah. Jelajahi berbagai bisnis lokal, lihat detail produk, dan temukan UMKM favorit Anda!### `npm start`

  </p>

Runs the app in the development mode.\

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)The page will reload if you make edits.\

You will also see any lint errors in the console.

---

### `npm test`

</div>

Launches the test runner in the interactive watch mode.\

## ✨ Fitur UtamaSee the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- 🔍 **Pencarian & Filter Cerdas** - Temukan UMKM berdasarkan nama, kategori, atau lokasi### `npm run build`

- 🗺️ **Tampilan Peta Interaktif** - Lihat lokasi UMKM di peta menggunakan Leaflet

- 📱 **Responsive Design** - Tampilan optimal di semua perangkat (desktop, tablet, mobile)Builds the app for production to the `build` folder.\

- 🎨 **UI Modern & Menarik** - Desain yang clean dengan animasi halus menggunakan Framer MotionIt correctly bundles React in production mode and optimizes the build for the best performance.

- ⭐ **Rating & Review** - Lihat rating dan ulasan dari pengguna lain

- 🖼️ **Galeri Foto** - Carousel galeri tempat dan menu UMKMThe build is minified and the filenames include the hashes.\

- 📍 **Integrasi Google Maps** - Navigasi langsung ke lokasi UMKMYour app is ready to be deployed!

## 🛠️ Tech StackSee the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Frontend Framework & Libraries### `npm run eject`

- **[React](https://reactjs.org/)** `v19.2.0` - Library JavaScript untuk membangun UI

- **[TypeScript](https://www.typescriptlang.org/)** `v4.9.5` - Superset JavaScript dengan type safety**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

- **[React Router DOM](https://reactrouter.com/)** `v7.9.4` - Routing dan navigasi

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

### Styling & UI

- **[Tailwind CSS](https://tailwindcss.com/)** `v3.x` - Utility-first CSS frameworkInstead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

- **[Framer Motion](https://www.framer.com/motion/)** `v12.23.24` - Animasi dan transisi halus

- **[React Icons](https://react-icons.github.io/react-icons/)** `v5.5.0` - Icon libraryYou don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Maps & Location## Learn More

- **[Leaflet](https://leafletjs.com/)** `v1.9.4` - Library peta interaktif open-source

- **[React Leaflet](https://react-leaflet.js.org/)** `v5.0.0` - Komponen React untuk LeafletYou can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

### Development ToolsTo learn React, check out the [React documentation](https://reactjs.org/).

- **[React Scripts](https://create-react-app.dev/)** `v5.0.1` - Tooling untuk Create React App
- **[Testing Library](https://testing-library.com/)** - Unit testing dan integration testing

## 🚀 Cara Menjalankan Project

### Prerequisites

Pastikan Anda sudah menginstall:

- **Node.js** (versi 16.x atau lebih tinggi)
- **npm** atau **yarn** package manager

### Instalasi

1. **Clone Repository**

   ```bash
   git clone https://github.com/ibnuhabibr/Temuin.git
   cd Temuin
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

   atau jika menggunakan yarn:

   ```bash
   yarn install
   ```

3. **Jalankan Development Server**

   ```bash
   npm start
   ```

   atau:

   ```bash
   yarn start
   ```

4. **Buka di Browser**

   Aplikasi akan otomatis terbuka di browser pada alamat:

   ```
   http://localhost:3000
   ```

### 🏗️ Build untuk Production

Untuk membuat build production-ready:

```bash
npm run build
```

Hasil build akan tersimpan di folder `build/` dan siap untuk di-deploy.

### 🧪 Menjalankan Tests

```bash
npm test
```

## 📂 Struktur Project

```
temuin/
├── src/
│   ├── assets/           # Logo dan gambar
│   ├── components/       # Reusable React components
│   │   ├── Navbar.tsx
│   │   ├── UmkmCard.tsx
│   │   ├── SearchBar.tsx
│   │   ├── FilterDropdown.tsx
│   │   ├── MapView.tsx
│   │   └── ...
│   ├── pages/            # Halaman-halaman aplikasi
│   │   ├── HomePage.tsx
│   │   ├── ExplorePage.tsx
│   │   ├── DetailPage.tsx
│   │   ├── AboutPage.tsx
│   │   └── ContactPage.tsx
│   ├── data/             # Data UMKM (JSON)
│   │   └── umkm.json
│   ├── types/            # TypeScript type definitions
│   │   └── umkm.ts
│   ├── App.tsx           # Root component
│   └── index.tsx         # Entry point
├── public/               # Static assets
├── build/                # Production build output
└── package.json          # Dependencies dan scripts
```

## 📊 Progress Development

### ✅ Sudah Selesai

- [x] **Landing Page (HomePage)** - Hero section, featured UMKM, dan story carousel
- [x] **Halaman Jelajahi (ExplorePage)** - Pencarian, filter kategori, advanced filters, dan tampilan peta
- [x] **Halaman Detail UMKM (DetailPage)** - Informasi lengkap, galeri foto, rating, produk, dan maps
- [x] **Halaman Tentang (AboutPage)** - Informasi tentang platform Temuin
- [x] **Halaman Kontak (ContactPage)** - Form kontak dan informasi kontak
- [x] **Navbar Responsive** - Navigasi yang adaptif untuk mobile dan desktop
- [x] **Komponen Reusable** - Card, SearchBar, FilterDropdown, MapView, dll.
- [x] **Animasi & Transisi** - Page transitions dan micro-interactions dengan Framer Motion
- [x] **Responsive Design** - Optimasi tampilan untuk berbagai ukuran layar
- [x] **Integrasi Peta** - Leaflet maps untuk menampilkan lokasi UMKM
- [x] **Data UMKM** - Sample data dengan kategori: Minuman, Makanan, Fashion, Kerajinan Tangan, Jasa

### 🔄 Dalam Pengembangan

- [ ] Backend API integration
- [ ] User authentication & authorization
- [ ] Database implementation
- [ ] Admin dashboard untuk mengelola UMKM
- [ ] Fitur review dan rating interaktif
- [ ] Fitur favorit/bookmark UMKM
- [ ] Push notifications

### 📋 Rencana Ke Depan

- [ ] Progressive Web App (PWA) support
- [ ] Multi-language support (ID/EN)
- [ ] Dark mode
- [ ] Advanced analytics untuk UMKM owners
- [ ] Payment gateway integration
- [ ] Social media sharing features

## 🎨 Screenshots

_Coming soon - Screenshots akan ditambahkan setelah UI finalisasi_

## 👥 Kontribusi

Kontribusi sangat welcome! Jika Anda ingin berkontribusi:

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan Anda (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 License

Project ini dibuat untuk tujuan pembelajaran dan pengembangan portfolio.

## 📧 Kontak

- **GitHub**: [@ibnuhabibr](https://github.com/ibnuhabibr)
- **Repository**: [Temuin](https://github.com/ibnuhabibr/Temuin)

---

<div align="center">
  <p>Dibuat dengan ❤️ untuk mendukung UMKM Indonesia</p>
  <p><strong>Temuin</strong> - Temukan UMKM Lokal Favoritmu!</p>
</div>
