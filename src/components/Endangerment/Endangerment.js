import React from 'react';
import "./Endangerment.css";

export const EndangerReasons = ({ creature }) => {
  return (
    <div className="endanger-reasons">
      <h3>Reasons for Endangerment</h3>
      {/* <ul>
        {creature.endangerReasons.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul> */}
    </div>
  );
};

export const EndangerState = ({ creature }) => {
  return (
    <div className="endanger-state">
      <h3>Current Endangerment State</h3>
      {/* <p>{creature.endangerState.zh}</p> */}
    </div>
  );
};
