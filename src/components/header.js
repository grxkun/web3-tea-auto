// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          {/* Add more navigation links */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
