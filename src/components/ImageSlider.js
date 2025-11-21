import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Défilement automatique toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="image-slider">
      <div className="slider-container">
        {/* Bouton précédent */}
        {images.length > 1 && (
          <button className="slider-arrow slider-arrow-left" onClick={goToPrevious}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        {/* Images avec effet de fondu */}
        <div className="slider-image-wrapper">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`slider-image ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>

        {/* Bouton suivant */}
        {images.length > 1 && (
          <button className="slider-arrow slider-arrow-right" onClick={goToNext}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>

      {/* Indicateurs (dots) */}
      {images.length > 1 && (
        <div className="slider-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}

      {/* Compteur */}
      {images.length > 1 && (
        <div className="slider-counter">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
