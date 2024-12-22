import React from 'react';
import "./ActualImage.css";

const ActualImage = ({ creature }) => {
  return (
    <div 
      className="actual-image" 
      style={{ backgroundImage: `url(${creature.actualImage})` }}
    ></div>
  );
};

export default ActualImage;