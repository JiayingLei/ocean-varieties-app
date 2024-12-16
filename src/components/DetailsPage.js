import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { creatures } from "../data/creatures";
import "../styles/DetailsPage.css";

const DetailsPage = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const creature = creatures.find((c) => c.id === parseInt(id));

  if (!creature) {
    return <div className="details-page">Creature not found!</div>;
  }

  return (
    <div className="details-page">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back
      </button>
      <h1>{creature.name}</h1>
      <img src={creature.image} alt={creature.name} className="details-image" />
      <p>{creature.description}</p>
    </div>
  );
};

export default DetailsPage;

