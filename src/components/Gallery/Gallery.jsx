import React, { useState } from "react";
import imagen2 from './assets/imagen 2.jpg';
import imagen3 from './assets/imagen 3.jpg';
import imagen4 from './assets/imagen 4.jpg';
import imagen5 from './assets/imagen 5.jpg';
import imagen6 from './assets/imagen 6.jpg';
import imagen7 from './assets/imagen 7.jpg';
import imagen8 from './assets/imagen 8.jpg';
import imagen9 from './assets/imagen 9.jpg';
import imagen10 from './assets/imagen 10.jpg';
import imagen11 from './assets/imagen 11.jpg';
import './Gallery.css'

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  // Array de imágenes
  const images = [
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    imagen6,
    imagen7,
    imagen8,
    imagen9,
    imagen10,
    imagen11
  ];

  // Función para abrir la imagen en el lightbox
  const openImage = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  // Función para cerrar el lightbox
  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div className="gallery-container" id='proyectos'>
      <h2>Galería de Imágenes</h2>
      <div className="gallery-grid">
        {/* Mapea sobre las imágenes y las renderiza */}
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img
              src={image}
              alt={`Imagen ${index + 1}`}
              className="gallery-img"
              onClick={() => openImage(image)} // Abre la imagen al hacer clic
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={currentImage} alt="Imagen Ampliada" className="lightbox-img" />
        </div>
      )}
    </div>
  );
};

export default Gallery;