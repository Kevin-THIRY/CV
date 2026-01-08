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
          {/* <p className="home-summary">
            Ingénieur développement logiciel avec expérience en industrie, robotique et data, intervenant sur des projets à forts enjeux techniques.
            Compétent sur l’ensemble du cycle de vie logiciel : analyse fonctionnelle, conception, développement, intégration, tests et mise en production.
            Expérience confirmée en Python, C/C++, C# .NET, SQL Server, ainsi qu’en vision industrielle, machine learning et systèmes industriels.
            Habitué aux environnements contraints (production, sécurité, systèmes critiques), au travail en équipe pluridisciplinaire et à l’autonomie technique.
            Capable de développer des solutions robustes, maintenables et orientées performance, en lien direct avec les besoins métier et industriels.
          </p> */}

          <p className="home-summary">
            <strong>Ingénieur développement logiciel</strong> avec expérience en <u>industrie</u>, <u>robotique</u> et <u>data</u>, intervenant sur des projets à <strong>forts enjeux techniques</strong>.
            <br /><br />

            Compétent sur l’ensemble du <u>cycle de vie logiciel</u> : <strong>analyse fonctionnelle</strong>, <strong>conception</strong>, <strong>développement</strong>, <strong>intégration</strong>, <strong>tests</strong> et <strong>mise en production</strong>.
            <br /><br />

            Expérience confirmée en <strong>Python</strong>, <strong>C/C++</strong>, <strong>C# .NET</strong>, <strong>SQL Server</strong>, ainsi qu’en <u>vision industrielle</u>, <u>machine learning</u> et <u>systèmes industriels</u>.
            <br /><br />

            Habitué aux environnements <strong>contraints</strong> (<u>production</u>, <u>sécurité</u>, <u>systèmes critiques</u>), au travail en <strong>équipe pluridisciplinaire</strong> et à l’<strong>autonomie technique</strong>.
            <br /><br />

            Capable de développer des solutions <strong>robustes</strong>, <strong>maintenables</strong> et <strong>orientées performance</strong>, en lien direct avec les <u>besoins métier</u> et <u>industriels</u>.
            <br /><br />
          </p>

          <div className="home-buttons">
            <a href="https://www.linkedin.com/in/kevin-thiry-5720a4209"><img src="/asset/LinkedIn.png" alt="Icon 1" /></a>
            <a href="https://github.com/Kevin-THIRY"><img src="/asset/logo_github.png" alt="Icon 2" /></a>
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
