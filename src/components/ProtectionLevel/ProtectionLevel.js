import React from 'react';
import "./ProtectionLevel.css";

const ProtectionLevel = ({ creature }) => {
  return (
    <div className="protection-level">
      <h3>Protection Level</h3>
      <p>
        {/* The protection level of <strong>{creature.name.zh}</strong> is classified as: 
        <span className="level">{creature.protectionLevel}</span>. */}
      </p>
    </div>
  );
};

export default ProtectionLevel;
