import React from "react";
import "../styles/OceanCreature.css";

const OceanCreature = ({ creature, onClick }) => {
  return (
    <div 
      className="creature-container"
      onClick={() => onClick(creature.id)}
      title={creature.name}
    >
      <img
        src={creature.image}
        alt={creature.name}
        className="creature-image"
      />
      <div className="creature-name">{creature.name}</div>
    </div>
  );
};

export default OceanCreature;
