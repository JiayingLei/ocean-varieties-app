import React from 'react';
import "./HomeSections.css"; 
import OceanCreature from "../OceanCreature/OceanCreature";
import SideBar from "../SideBar/SideBar";
import { creatures } from "../../contants/creatures";

// Section 1
export const SectionOne = ({ onWheel, scrollToNextSection }) => {
  return (
    <section
      className="section-one"
      id="section-one"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/homepage/section-one/background.png')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onWheel={onWheel}
    >
      <img
        src={`${process.env.PUBLIC_URL}/homepage/section-one/subtitle.png`}
        alt="Subtitle"
        className="s1-subtitle"
      />
      <div className="s1-titles-container">
        <img
          src={`${process.env.PUBLIC_URL}/homepage/section-one/title-1.png`}
          alt="Title 1"
          className="s1-title-1"
        />
        <img
          src={`${process.env.PUBLIC_URL}/homepage/section-one/title-2.png`}
          alt="Title 2"
          className="s1-title-2"
        />
      </div>
      <img 
        src={`${process.env.PUBLIC_URL}/homepage/section-one/arrow.png`} 
        alt="Arrow" 
        className="scroll-indicator" 
        onClick={scrollToNextSection}
      />
    </section>
  );
};

// Section 2
export const SectionTwo = ({ onWheel }) => {
  return (
    <section
      className="section-one"
      id="section-one"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/homepage/section-one/background.png')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onWheel={onWheel}
    >
    </section>
  );
};

// Section 3
export const SectionThree = ({ onWheel }) => {
  return (
    <section
      className="section-one"
      id="section-one"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/homepage/section-one/background.png')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onWheel={onWheel}
    >
    </section>
  );
};

// Section 4
export const SectionFour = ({ onWheel }) => {
  return (
    <section
      className="section-one"
      id="section-one"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/homepage/section-one/background.png')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onWheel={onWheel}
    >
    </section>
  );
};

// Section 5
export const SectionFive = ({ onWheel }) => {
  return (
    <section
      className="section-one"
      id="section-one"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/homepage/section-one/background.png')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onWheel={onWheel}
    >
    </section>
  );
};

// Section 6
export const SectionSix = ({ onClick, selectedType, showSideBar, onTypeSelect }) => {
  return (
    <section
      className="section-six"
      id="section-six"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/homepage/section-six/background.png')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="s6-titles-container">
        <img
          src={`${process.env.PUBLIC_URL}/homepage/section-six/title.png`}
          alt="Title" 
          className="s6-title" 
        />
        <img 
          src={`${process.env.PUBLIC_URL}/homepage/section-six/subtitle.png`}
          alt="Subtitle" 
          className="s6-subtitle" 
        />
      </div>
      {/* OceanCreature 组件 */}
      <div className="creatures-grid">
        {creatures.map((creature) => (
          <OceanCreature
            key={creature.id}
            creature={creature}
            onClick={() => onClick(creature.id)}
            isGrayedOut={selectedType && creature.type.zh !== selectedType} // 是否灰化
          />
        ))}
      </div>
      {/* SideBar 组件 */}
      {showSideBar && <SideBar onTypeSelect={onTypeSelect} />}
      <div className="bottom-text">
        <div className="bottom-chinese">“无穷的远方，无数的生命，都与我们有关。”</div>
        <div className="bottom-english">"Infinite distances, countless lives, all related to us."</div>
      </div>
    </section>
  );
};

// Section 7
export const SectionSeven = ({ onWheel }) => {
  return (
    <section
      className="section-one"
      id="section-one"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/homepage/section-one/background.png')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onWheel={onWheel}
    >
    </section>
  );
};