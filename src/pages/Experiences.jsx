import React from 'react';
import './Experiences.css';

const Experiences = () => {
  return (
    <div className="second-page-container">
      <div className="block-left">
        <div className="sub-block-top">
          <img src="/asset/photo.png" alt="Illustration" className="sub-block-top-image" />
          <div className="sub-block-top-text">
            <h3>Expériences profesionnels</h3>
          </div>
        </div>
        <div className="sub-block-bottom">
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-point"></span>
              <div className="timeline-content">
                <h4>2023</h4>
                <p>Description de l'événement ou étape.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-point"></span>
              <div className="timeline-content">
                <h4>2022</h4>
                <p>Description de l'événement ou étape.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-point"></span>
              <div className="timeline-content">
                <h4>2022</h4>
                <p>Description de l'événement ou étape.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-point"></span>
              <div className="timeline-content">
                <h4>2022</h4>
                <p>Description de l'événement ou étape.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-point"></span>
              <div className="timeline-content">
                <h4>2022</h4>
                <p>Description de l'événement ou étape.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-point"></span>
              <div className="timeline-content">
                <h4>2022</h4>
                <p>Description de l'événement ou étape.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-point"></span>
              <div className="timeline-content">
                <h4>2022</h4>
                <p>Description de l'événement ou étape.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-right">
        <div className="right-subblock top">
          <div className="vertical-block">Bloc 1</div>
          <div className="vertical-block">Bloc 2</div>
          <div className="vertical-block">Bloc 3</div>
        </div>

        <div className="right-subblock bottom">
          <div className="vertical-block">Bloc 1</div>
          <div className="vertical-block">Bloc 2</div>
          <div className="vertical-block">Bloc 3</div>
          <div className="vertical-block">Bloc 4</div>
        </div>
      </div>
    </div>
  );
};


export default Experiences;