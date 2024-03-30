// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Header from './components/Header';
import Footer from './components/Footer';
import { initializeWeb3 } from './utils/web3helpers'; // Import your Web3 utility functions

const App = () => {
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    // Initialize Web3 when the component mounts
    const providerUrl = 'https://cloudflare-eth.com'; // Use your preferred Ethereum node URL
    const web3Instance = initializeWeb3(providerUrl);
    setWeb3(web3Instance);
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home web3={web3} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* Add more routes for other views */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
