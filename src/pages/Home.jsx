import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-left">
          <div className="home-welcome">Bonjour !</div>
          <img src="/asset/Tete.jpg" alt="Moi" className="home-photo" />
        </div>

        <div className="home-right">
          <p className="home-summary">
            Ingénieur développement logiciel avec expérience en industrie, robotique et data, intervenant sur des projets à forts enjeux techniques.
            Compétent sur l’ensemble du cycle de vie logiciel : analyse fonctionnelle, conception, développement, intégration, tests et mise en production.
            Expérience confirmée en Python, C/C++, C# .NET, SQL Server, ainsi qu’en vision industrielle, machine learning et systèmes industriels.
            Habitué aux environnements contraints (production, sécurité, systèmes critiques), au travail en équipe pluridisciplinaire et à l’autonomie technique.
            Capable de développer des solutions robustes, maintenables et orientées performance, en lien direct avec les besoins métier et industriels.
          </p>

          <div className="home-buttons">
            <a href="https://www.linkedin.com/in/kevin-thiry-5720a4209"><img src="/asset/LinkedIn.png" alt="Icon 1" /></a>
            <a href="#"><img src="/asset/icon2.png" alt="Icon 2" /></a>
            <a href="#"><img src="/asset/icon3.png" alt="Icon 3" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


// import Onglet1 from "../../components/Onglet/onglet";
// import '../pages.css';

// const Home = () => {
//   return (
//     <div className="page-container">
//       <Onglet1 />
//     </div>
//   );
// };

// export default Home;
