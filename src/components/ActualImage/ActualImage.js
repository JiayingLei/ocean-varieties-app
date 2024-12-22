import React from 'react';
import "./ActualImage.css";

const ActualImage = ({ creature }) => {
  return (
    <div className="actual-image">
      <h3>Actual Image</h3>
      {/* <img src={creature.actualImage} alt={`${creature.name.zh} actual habitat`} />
      <p>{creature.description}</p> */}
    </div>
  );
};

export default ActualImage;
