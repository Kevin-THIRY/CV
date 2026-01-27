import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderTabs from '../components/Header/header';
import HeaderTabsSecondary from '../components/HeaderSecondary/headerSecondary';
import Footer from '../components/Footer/footer';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Contact from './pages/Contact';
import Passions from './pages/Passions';
import './CV.css'

const App = () => {
  return (
    <Router>
      <div>
        <HeaderTabs />
        <HeaderTabsSecondary />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/passions" element={<Passions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
