import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navibar from './components/Navbar';
import Footer from './components/Footer';

import Homepage from './pages/homepage';
import Contact from './pages/contact';
import Projects from './pages/projects';

export default function App() {
  return (
    <Router>
      <div>
      <Navibar />
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}
