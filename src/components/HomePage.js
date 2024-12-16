import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/HomePage.css"; 
import { creatures } from "../data/creatures";
import OceanCreature from "./OceanCreature";

const HomePage = () => {
  const navigate = useNavigate(); 

  const handleClick = (id) => {
    navigate(`/details/${id}`);  
  };

  return (
    <div className="home-page">
      <h1 className="title">Explore the Ocean</h1>
      <div className="creatures-grid">
        {creatures.map((creature) => (
          <OceanCreature
            key={creature.id}
            creature={creature}
            onClick={() => handleClick(creature.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
