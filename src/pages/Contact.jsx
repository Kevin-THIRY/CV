import React from 'react';
import './Contact.css';
import Card from '../card/card.jsx';

const cardData = [
  {
    id: 1,
    photo: "asset/Bernard.jpg",
    name: "Bernard",
    profession: "Développeur",
    text: "Kévin est un passionné de technique, et cela se ressent dans son travail. Il fait preuve de professionnalisme...",
    link: "https://www.linkedin.com/in/kevin-thiry-5720a4209/details/recommendations/?detailScreenTabIndex=0"
  },
  {
    id: 2,
    photo: "asset/Olivier.jpg",
    name: "Olivier",
    profession: "Directeur de production",
    text: "Kevin est un professionnel doté de grandes qualités humaines et relationnelles. Sa capacité...",
    link: "https://www.linkedin.com/in/kevin-thiry-5720a4209/details/recommendations/?detailScreenTabIndex=0"
  },
  {
    id: 3,
    photo: "asset/Ahmed.jpg",
    name: "Ahmed",
    profession: "Ingénieur SCADA",
    text: "J'ai eu l'occasion de travailler avec Kevin Thiry dans deux contextes différents. En 2024, quand Kevin était ingénieur logiciel...",
    link: "https://www.linkedin.com/in/kevin-thiry-5720a4209/details/recommendations/?detailScreenTabIndex=0"
  },
];

const Contact = () => {

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const rows = chunkArray(cardData, 3);

  return (
    <div className="page">
      <div className="main-box">

        {/* BOX 1 */}
        <div className="box box-1">
          <h1 className="title">Projets personnels et recommandations</h1>
        </div>

        {/* BOX 2 */}
        <div className="box box-2">
          <div className="h-box">
            {/* Sous-bloc 1 : image + texte horizontal */}
            <div className="top-box">
              <img src="/asset/logo_site.jpg" alt="Exemple" className="top-image" />
              <span className="top-text">Portfolio (ce site)</span>
            </div>

            {/* Sous-bloc 2 : 2 textes verticaux */}
            <div className="bottom-box">
              <p>Mon portfolio : mes projets et expériences en un coup d’œil.</p>
              <a href="https://github.com/Kevin-THIRY/CV.git" target="_blank" rel="noopener noreferrer" className="bottom-button">Repo git</a>
            </div>
          </div>

          <div className="h-box">
            {/* Sous-bloc 1 : image + texte horizontal */}
            <div className="top-box">
              <img src="/asset/logo_WOT.jpg" alt="Exemple" className="top-image" />
              <span className="top-text">War of Time</span>
            </div>

            {/* Sous-bloc 2 : 2 textes verticaux */}
            <div className="bottom-box">
              <p>Mon jeu vidéo en cours de développement.</p>
              <a href="https://github.com/Kevin-THIRY/WarOfTime.git" target="_blank" rel="noopener noreferrer" className="bottom-button">Repo git</a>
            </div>
          </div>
        </div>

        {/* BOX 3 */}
        <div className="box box-3">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="row-box">
              {row.map(card => (
                <Card
                  key={card.id}
                  photo={card.photo}
                  name={card.name}
                  profession={card.profession}
                  text={card.text}
                  link={card.link}
                />
              ))}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Contact;
