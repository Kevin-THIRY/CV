import React from 'react';
import Onglet1 from "../components/Onglet/onglet";
import HeaderTabs from '../components/Header/header';
import Footer from '../components/Footer/footer';
import './CV.css'

const Home = () => {
  return (
    <div>
      <HeaderTabs />

      <Onglet1/>

      <Footer />
    </div>
  );
};

export default Home;
