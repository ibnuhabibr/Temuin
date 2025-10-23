import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* Navbar outside AnimatePresence for persistent navigation */}
      <Navbar />
      
      {/* Main content with page transitions */}
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/umkm/:id" element={<DetailPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
