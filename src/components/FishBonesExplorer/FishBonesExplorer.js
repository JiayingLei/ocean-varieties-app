import React from 'react';
import "./FishBonesExplorer.css";
import { endangerReasons } from '../../contants/endangerReasons';

export const FishBonesExplorer = ({ creature }) => {
  const categorizedReasons = {
    "人为直接导致": endangerReasons.filter(reason => reason.category === "人为直接导致"),
    "人为间接导致": endangerReasons.filter(reason => reason.category === "人为间接导致"),
    "自然原因导致": endangerReasons.filter(reason => reason.category === "自然原因导致"),
  };

  return (
    <div className="fish-bones-explorer">
      <div className="explorer-container">
        {/* Header Section */}
        <div className="explorer-header">
          <h1>EXPLORE!</h1>
          <p>
            从鱼骨中解码海洋生物濒危的原因...<br />
            Decoding the causes of marine species endangerment from fish bones...
          </p>
        </div>

        {/* Fish Bone Container */}
        <div className="fish-bone-container">
          {/* Spine Container */}
          <div className="spine-container">
            <img 
              src={`${process.env.PUBLIC_URL}/detailspage/fish-bones-explorer/Spine.svg`} 
              alt="Fish Spine"
            />
          </div>
          {/* Bones Container */}
          <div className="bones-container">
            {Object.entries(categorizedReasons).map(([category, reasons]) => (
              <div key={category} className="bones-category-container">
                <div className="bones-list">
                  {reasons.map((reason, index) => (
                    <img 
                      key={index} 
                      src={reason.boneImage} 
                      alt={`Bone representing ${reason.zh}`} 
                      className="fish-bone"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="submit-button">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};