import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navibar from './components/Navbar';

import Homepage from './pages/homepage';

function App() {
  return (
    <Router>
      <div>
      <Navibar />
      <Routes>
      <Route path="/" element={<Homepage />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;