import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './portfolio.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';
import Apprentissage from "./components/Apprentissage";

import Home from './pages/Home';
import VoteProject from './pages/VoteProject';
import KeyloggerProject from './pages/KeyloggerProject';
import StreamifyProject from "./pages/StreamifyProject";
import MimirProject from "./pages/MimirProject";
import MultiServicesPlatformProject from "./pages/SAEG3";
import CasseurProject from "./pages/CasseurProject";
import WebScrapingProject from "./pages/WebScrapingProject";

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const loader = document.getElementById('ftco-loader');
      if (loader) {
        loader.classList.remove('show');
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apprentissage" element={<Apprentissage/>}/>
        <Route path="/vote" element={<VoteProject />} />
        <Route path="/keylogger" element={<KeyloggerProject />} />
        <Route path="/streamify" element={<StreamifyProject />} />
        <Route path="/Mimir" element={<MimirProject />} />
        <Route path="/saeg3" element={<MultiServicesPlatformProject/>}/>
        <Route path="/casseur" element={<CasseurProject/>}/>
        <Route path="/webscrapping" element={<WebScrapingProject/>}/>
      </Routes>
      <Footer />
      <Loader />
    </Router>
  );
}

export default App;
