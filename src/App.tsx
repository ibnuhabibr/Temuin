import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import DetailPage from './pages/DetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <ScrollToTop />
      {/* Navbar outside AnimatePresence for persistent navigation */}
      <Navbar />
      
      {/* Main content with page transitions */}
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/jelajahi" element={<ExplorePage />} />
          <Route path="/umkm/:id" element={<DetailPage />} />
          <Route path="/tentang" element={<AboutPage />} />
          <Route path="/kontak" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
