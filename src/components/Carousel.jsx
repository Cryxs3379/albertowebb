import React, { useState, useEffect } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import './Carousel.css';

const images = [image1, image2];
const texts = [
  "Texto 1: Bienvenidos a Alberto Abogados",
  "Texto 2: Experiencia y Profesionalidad",
  "Texto 3: Comprometidos con la Justicia"
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 40000); // Cambiar de imagen cada 40 segundos

    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000); // Cambiar de texto cada 5 segundos

    return () => {
      clearInterval(imageInterval);
      clearInterval(textInterval);
    };
  }, []);

  useEffect(() => {
    setIsTitleVisible(true);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-inner">
        <img src={images[currentImageIndex]} alt="carousel" className="carousel-image" />
        <div className="carousel-content">
          <h1 className={`carousel-title ${isTitleVisible ? 'visible' : ''}`}>ALNEKO ABOGADOS</h1>
          <SwitchTransition>
            <CSSTransition
              key={currentTextIndex}
              addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
              classNames="fade"
            >
              <p className="carousel-text">{texts[currentTextIndex]}</p>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </div>
  );
};

export default Carousel;



