import React, { useState, useEffect } from 'react';
import "./FishBonesExplorer.css";
import { endangerReasons } from '../../contants/endangerReasons';

export const FishBonesExplorer = ({ creature, scrollToNextSection }) => {
  const [clickedBones, setClickedBones] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      const highlightedBones = endangerReasons
        .filter(reason => creature.endangerment.reasons.zh.includes(reason.zh))
        .map(reason => reason.id);
      setClickedBones(highlightedBones);
    }
  }, [isSubmitted, creature]);

  const categorizedReasons = {
    "人为直接导致": endangerReasons.filter(reason => reason.category === "人为直接导致"),
    "人为间接导致": endangerReasons.filter(reason => reason.category === "人为间接导致"),
    "自然原因导致": endangerReasons.filter(reason => reason.category === "自然原因导致"),
  };

  const handleBoneClick = (boneId) => {
    if (isSubmitted) return;  // 禁止点击
    if (clickedBones.includes(boneId)) {
      setClickedBones(clickedBones.filter(id => id !== boneId));
    } else {
      setClickedBones([...clickedBones, boneId]);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setClickedBones([]); // 清空点击的鱼骨
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
                  {reasons.map((reason, index) => {
                    const isClicked = clickedBones.includes(reason.id);
                    return (
                      <div 
                        key={index} 
                        className="bone-container" 
                        data-tooltip={reason.description_zh + "\n" + reason.description_en}
                        onClick={() => handleBoneClick(reason.id)}
                      >
                        <img 
                          src={isClicked
                            ? reason.boneImageClicked 
                            : reason.boneImage} 
                          alt={`Bone representing ${reason.zh}`} 
                          className={`bone-image ${isClicked ? 'no-invert' : ''}`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        {isSubmitted ? (
          <img 
            src={`${process.env.PUBLIC_URL}/homepage/section-one/arrow.png`} 
            alt="Arrow" 
            className="new-scroll-indicator"  
            onClick={scrollToNextSection}
          />
        ) : (
          <div className="submit-button" onClick={handleSubmit}>
            <button>Submit</button>
          </div>
        )}
      </div>
    </div>
  );
};