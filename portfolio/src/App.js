import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navibar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
      <Navibar />
      </div>
    </Router>
  );
}

export default App;