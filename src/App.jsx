import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div style={{ maxWidth: '800px', margin: '0 auto', border: '2px dashed black' }}>
        <Header />
        <div style={{ padding: '2rem', borderTop: '2px dashed black' }}>
          <h3 style={{ textAlign: 'center' }}>Content</h3>
          <div style={{ paddingTop: '1rem' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
