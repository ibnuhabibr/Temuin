# 🗺️ SITEMAP WEBSITE TEMUIN

## 📊 Struktur Website

Berikut adalah sitemap lengkap dari website **Temuin** - Platform Direktori UMKM Lokal Indonesia:

---

## 🏠 Halaman Utama

### 1. **Beranda (Homepage)**

- **URL:** `/`
- **Priority:** 1.0 (Highest)
- **Update Frequency:** Daily
- **Deskripsi:** Halaman landing utama dengan hero section, featured UMKM, dan story carousel
- **Komponen:**
  - Hero Section dengan CTA
  - Featured UMKM Section
  - UMKM Wow Minggu Ini
  - Story Carousel
  - Kategori UMKM

### 2. **Jelajahi (Explore Page)**

- **URL:** `/jelajahi`
- **Priority:** 0.9
- **Update Frequency:** Daily
- **Deskripsi:** Halaman untuk menjelajahi semua UMKM dengan fitur pencarian dan filter
- **Fitur:**
  - Search Bar (Real-time search)
  - Filter Kategori (Semua, Makanan, Minuman, Fashion, Kerajinan Tangan, Jasa)
  - Advanced Filters Modal (Status buka/tutup, Fasilitas)
  - Toggle View (Grid / Map)
  - UMKM Cards Grid
  - Interactive Map dengan Markers

### 3. **Tentang (About Page)**

- **URL:** `/tentang`
- **Priority:** 0.7
- **Update Frequency:** Monthly
- **Deskripsi:** Informasi tentang platform Temuin, visi, misi, dan nilai-nilai
- **Konten:**
  - Apa itu Temuin
  - Visi dan Misi
  - Nilai-nilai yang dijunjung
  - Tim dan Cerita

### 4. **Kontak (Contact Page)**

- **URL:** `/kontak`
- **Priority:** 0.7
- **Update Frequency:** Monthly
- **Deskripsi:** Halaman untuk menghubungi tim Temuin
- **Fitur:**
  - Form Kontak dengan validasi
  - Informasi kontak (Email, Telepon, Alamat)
  - Social Media Links
  - Map lokasi kantor

---

## 📄 Halaman Detail UMKM

### Dynamic Route: `/umkm/:id`

**Priority:** 0.8 | **Update Frequency:** Weekly

Setiap UMKM memiliki halaman detail tersendiri dengan URL pattern: `/umkm/[id]`

#### Daftar Halaman Detail UMKM:

| ID  | Nama UMKM                  | Kategori         | URL        |
| --- | -------------------------- | ---------------- | ---------- |
| 1   | Warung Kopi 'Senja'        | Minuman          | `/umkm/1`  |
| 2   | Bakso Pak Kumis            | Makanan          | `/umkm/2`  |
| 3   | Batik Nusantara            | Fashion          | `/umkm/3`  |
| 4   | Kerajinan Kayu 'Jati Asli' | Kerajinan Tangan | `/umkm/4`  |
| 5   | Laundry Express            | Jasa             | `/umkm/5`  |
| 6   | Teh Tarik Aceh             | Minuman          | `/umkm/6`  |
| 7   | Soto Ayam Bu Darmi         | Makanan          | `/umkm/7`  |
| 8   | Fashion 'Kece Badai'       | Fashion          | `/umkm/8`  |
| 9   | Kerajinan Anyaman Bambu    | Kerajinan Tangan | `/umkm/9`  |
| 10  | Salon Cantik 'Anggun'      | Jasa             | `/umkm/10` |

#### Konten Halaman Detail:

- **Header:** Nama, Kategori, Rating, Badge (Featured/Weekly Wow)
- **Gallery Carousel:** Foto tempat dan menu
- **Informasi Lengkap:**
  - Alamat lengkap
  - Jam operasional
  - Status buka/tutup
  - Fasilitas yang tersedia
- **Rating & Review:** Display rating bintang
- **Produk & Harga:** Daftar produk/layanan dengan harga
- **Cerita UMKM:** Story/background UMKM
- **Maps:** Embed Google Maps untuk navigasi
- **Tombol Navigasi:** Kembali ke halaman sebelumnya

---

## 🗂️ Kategori UMKM

Website Temuin mengorganisir UMKM dalam 5 kategori utama:

1. **Makanan** 🍜

   - Contoh: Bakso Pak Kumis, Soto Ayam Bu Darmi

2. **Minuman** ☕

   - Contoh: Warung Kopi 'Senja', Teh Tarik Aceh

3. **Fashion** 👔

   - Contoh: Batik Nusantara, Fashion 'Kece Badai'

4. **Kerajinan Tangan** 🎨

   - Contoh: Kerajinan Kayu 'Jati Asli', Kerajinan Anyaman Bambu

5. **Jasa** 🛠️
   - Contoh: Laundry Express, Salon Cantik 'Anggun'

---

## 🧭 Navigasi Website

### Primary Navigation (Navbar)

Navbar muncul di semua halaman dengan menu:

- **Beranda** → `/`
- **Jelajahi** → `/jelajahi`
- **Tentang** → `/tentang`
- **Kontak** → `/kontak`

### Mobile Navigation

- Hamburger menu untuk mobile devices
- Slide-in menu dengan animasi
- Responsive design

---

## 🎯 User Journey

### Journey 1: Menemukan UMKM

```
Beranda → Jelajahi → [Filter/Search] → Detail UMKM → Navigasi ke Lokasi
```

### Journey 2: Eksplorasi Kategori

```
Beranda → Featured UMKM → Detail UMKM
```

### Journey 3: Informasi Platform

```
Beranda → Tentang → Kontak
```

### Journey 4: Pencarian Spesifik

```
Jelajahi → Search Bar → Detail UMKM
```

---

## 🔗 URL Structure

### Base URL

```
https://temuin-seven.vercel.app
```

### URL Patterns

#### Static Pages

```
/                    → Beranda
/jelajahi            → Halaman Jelajahi
/tentang             → Halaman Tentang
/kontak              → Halaman Kontak
```

#### Dynamic Pages

```
/umkm/:id            → Detail UMKM (id: 1-10+)
```

### Future Routes (Planned)

```
/kategori/:category  → Filter by category
/auth/login          → Login page
/auth/register       → Register page
/profile             → User profile
/dashboard           → Admin dashboard
/favorites           → User favorites
```

---

## 📊 Sitemap Hierarchy

```
📁 Website Root (/)
│
├── 🏠 Beranda (/)
│   ├── Hero Section
│   ├── Featured UMKM
│   ├── UMKM Wow Minggu Ini
│   └── Story Carousel
│
├── 🔍 Jelajahi (/jelajahi)
│   ├── Search Bar
│   ├── Filter Dropdown
│   ├── Advanced Filters Modal
│   ├── View Toggle (Grid/Map)
│   ├── UMKM Grid
│   └── Map View
│
├── ℹ️ Tentang (/tentang)
│   ├── About Section
│   ├── Mission & Vision
│   └── Values
│
├── 📧 Kontak (/kontak)
│   ├── Contact Form
│   ├── Contact Info
│   └── Social Links
│
└── 📄 Detail UMKM (/umkm/:id)
    ├── UMKM 1: Warung Kopi 'Senja' (/umkm/1)
    ├── UMKM 2: Bakso Pak Kumis (/umkm/2)
    ├── UMKM 3: Batik Nusantara (/umkm/3)
    ├── UMKM 4: Kerajinan Kayu 'Jati Asli' (/umkm/4)
    ├── UMKM 5: Laundry Express (/umkm/5)
    ├── UMKM 6: Teh Tarik Aceh (/umkm/6)
    ├── UMKM 7: Soto Ayam Bu Darmi (/umkm/7)
    ├── UMKM 8: Fashion 'Kece Badai' (/umkm/8)
    ├── UMKM 9: Kerajinan Anyaman Bambu (/umkm/9)
    └── UMKM 10: Salon Cantik 'Anggun' (/umkm/10)
```

---

## 🎨 Visual Sitemap

```
                              TEMUIN
                                |
                    ┌───────────┼───────────┐
                    │           │           │
                 BERANDA     JELAJAHI    TENTANG
                    │           │           │
            ┌───────┼───────┐   │        KONTAK
            │       │       │   │
         Hero   Featured Story  │
        Section   UMKM  Carousel│
                                │
                        ┌───────┼───────┐
                        │       │       │
                    Search   Filter   Map
                     Bar    Options   View
                        │
                        │
                  ┌─────┴─────┐
                  │           │
              UMKM Grid   Detail Page
                          (/umkm/:id)
                              │
                    ┌─────────┼─────────┐
                    │         │         │
                Gallery   Info    Products
                  View    & Map   & Rating
```

---

## 🔍 SEO & Indexing

### Sitemap XML

File: `public/sitemap.xml`

- Format: XML Sitemap Protocol
- Submitted to: Google Search Console
- Update: Automatic on build

### Robots.txt

```
User-agent: *
Allow: /
Sitemap: https://temuin-seven.vercel.app/sitemap.xml
```

### Meta Tags

Setiap halaman dilengkapi dengan:

- Title tag yang descriptive
- Meta description
- Open Graph tags (untuk social media)
- Canonical URLs

---

## 📱 Responsive Breakpoints

Website Temuin responsive di semua device:

- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px+

Semua halaman di sitemap dioptimasi untuk semua breakpoint.

---

## 🚀 Performance

### Page Load Priority

1. **Critical:** Beranda, Jelajahi
2. **High:** Detail UMKM
3. **Medium:** Tentang, Kontak

### Lazy Loading

- Images di-lazy load
- Components di-code split
- Maps di-load on demand

---

## 📝 Notes untuk Developer

- Semua route menggunakan React Router DOM v7.9.4
- Dynamic routes untuk detail UMKM: `/umkm/:id`
- Page transitions menggunakan Framer Motion
- ScrollToTop component aktif di semua route
- Navbar persistent di semua halaman

---

## 📄 File Locations

```
project-root/
├── public/
│   └── sitemap.xml          ← Sitemap XML
├── src/
│   ├── App.tsx              ← Route definitions
│   ├── pages/
│   │   ├── HomePage.tsx     ← Beranda
│   │   ├── ExplorePage.tsx  ← Jelajahi
│   │   ├── DetailPage.tsx   ← Detail UMKM
│   │   ├── AboutPage.tsx    ← Tentang
│   │   └── ContactPage.tsx  ← Kontak
│   └── components/
│       └── Navbar.tsx       ← Navigation menu
└── SITEMAP.md               ← This file
```

---

<div align="center">

**TEMUIN - Platform Direktori UMKM Lokal Indonesia**

_Last Updated: November 2, 2025_

</div>
