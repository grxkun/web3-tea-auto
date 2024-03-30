// src/views/About.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>About Us</h1>
        <p>
          Welcome to our Web3 project! We are passionate about blockchain technology and decentralized applications.
        </p>
        <p>
          Our mission is to build user-friendly interfaces for interacting with smart contracts on the Ethereum network.
        </p>
        <p>
          Feel free to explore our app and learn more about Web3 development!
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
