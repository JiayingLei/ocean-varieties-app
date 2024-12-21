import React from 'react';
import "./Jigsaw.css";

const Jigsaw = ({ creature }) => {
  return (
    <div className="jigsaw">
      <h2>{creature.name}</h2>
      <p>Discover the unique puzzle of {creature.name}!</p>
      <img src={creature.image} alt={creature.name} />
    </div>
  );
};

export default Jigsaw;
