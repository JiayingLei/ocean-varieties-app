import React from 'react';
import "./Endangerment.css"; 
import {endangerReasons} from '../../contants/endangerReasons';  

export const EndangerReasons = ({ creature }) => {
  return (
    <div className="endanger-reasons">
      <div 
        style={{
          backgroundImage: `url(${creature.image})`,
          backgroundSize: 'auto 100%',
          backgroundPosition: 'left top',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3,  
          position: 'absolute',
          top: '10%',
          bottom: '0',
          left: '40%', 
          right: 0,
        }}
      />
      <div className="endanger-reasons-container">
        {creature.endangerment.reasons.zh.map((reasonZh, index) => {
          const matchedReason = endangerReasons.find(reason => reason.zh === reasonZh);
          
          if (matchedReason) {
            return (
              <div className="reason-container" key={index}>
                <img 
                  src={matchedReason.image} 
                  alt={reasonZh} 
                  className="reason-image" 
                />
                <div className="reason-name">
                  <div className="chinese">{matchedReason.zh}</div>
                  <div className="english">{matchedReason.en}</div>
                </div>
              </div>
            );
          }
          return null;  
        })}
      </div>
    </div>
  );
};


export const EndangerState = ({ creature }) => {
  return (
    <div className="endanger-state">
      <div className="state-container">
        <div className="state-chinese">{creature.endangerment.state.zh}</div>
        <div className="state-english">{creature.endangerment.state.en}</div>
      </div>
    </div>
  );
};
