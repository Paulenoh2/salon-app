import React, { useState, useEffect } from 'react';
 // You can define styles for the slider in this file

const Home = ({ images,text, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, [currentIndex,text, images.length, interval]);

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={index === currentIndex ? 'slide active' : 'slide'}
        >
            <div className="sliding-images">
        
          <img src={image} alt={`Slide ${index}` }   />
          <div className="text-overlay"> {text} </div>
        

          </div>
         
        </div>
      ))}
    </div>
  );
};

export default Home;
