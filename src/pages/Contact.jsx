import React from 'react';
import './Contact.css';
import Card from '../card/card.jsx';

const cardData = [
  {
    id: 1,
    photo: "/photo1.jpg",
    name: "Alice",
    profession: "Développeuse",
    text: "Texte 1",
    link: "https://www.example1.com"
  },
  {
    id: 2,
    photo: "/photo2.jpg",
    name: "Bob",
    profession: "Designer",
    text: "Texte 2",
    link: "https://www.example1.com"
  },
  {
    id: 3,
    photo: "/photo3.jpg",
    name: "Charlie",
    profession: "Chef de projet",
    text: "Texte 3",
    link: "https://www.example1.com"
  },
  {
    id: 4,
    photo: "/photo4.jpg",
    name: "David",
    profession: "Marketing",
    text: "Texte 4",
    link: "https://www.example1.com"
  },
  {
    id: 5,
    photo: "/photo4.jpg",
    name: "Franck",
    profession: "Cuisinier",
    text: "Texte 5",
    link: "https://www.example1.com"
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

          <div className="h-box">
            {/* Sous-bloc 1 : image + texte horizontal */}
            <div className="top-box">
              <img src="/asset/logo_fluppy.jpg" alt="Exemple" className="top-image" />
              <span className="top-text">Fluppy</span>
            </div>

            {/* Sous-bloc 2 : 2 textes verticaux */}
            <div className="bottom-box">
              <p>Ancien projet de jeu</p>
              <a href="https://github.com/Kevin-THIRY/FluppyProj.git" target="_blank" rel="noopener noreferrer" className="bottom-button">Repo git</a>
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
