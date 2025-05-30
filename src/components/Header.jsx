import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ borderBottom: '2px dashed black', padding: '1rem' }}>
      <h2 style={{ textAlign: 'center' }}>Header</h2>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <Link to="/">[Home]</Link>
        <Link to="/about">[About]</Link>
        <Link to="/services">[Services]</Link>
        <Link to="/contact">[Contact]</Link>
      </nav>
    </header>
  );
};

export default Header;