import React, { useState, useEffect } from 'react';
 // You can define styles for the slider in this file

const HomePage = ({ images,text, interval = 3000 }) => {
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
    <div className="home-container">
        <h1>ggfggfgffffffffffffffffffffffffffffgf</h1>
      {images.map((image, index) => (
        <div
          key={index}
          className={index === currentIndex ? 'slide active' : 'slide'}
        >
            <div className="home-image">
            <div className='home-heading'> WELCOME TO OUR BEAUTIKO  HAIR SALON</div>
          <img src={image} alt={`Slide ${index}` }   />
          <div className="text-overlay"> {text} </div>
          
    

          </div>
         
        </div>
      ))}
    </div>
  );
};

export default HomePage;
