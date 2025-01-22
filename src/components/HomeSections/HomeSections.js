import React from 'react';
import "./HomeSections.css"; 
import OceanCreature from "../OceanCreature/OceanCreature";
import SideBar from "../SideBar/SideBar";
import { creatures } from "../../contants/creatures";

// Section 1
export const SectionOne = ({ onWheel, scrollToNextSection }) => {
  return (
    <section
      className="page-section"
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
      className="page-section"
      id="section-two"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/homepage/section-two-bg.png')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onWheel={onWheel}
    >
      <div className="s2-text-container">
        <div className="text-chinese">你见过什么样的中国海洋？</div>
        <div className="text-english">What kind of ocean have you seen in China?</div>
      </div>
    </section>
  );
};

// Section 3
export const SectionThree = ({ onWheel }) => {
  return (
    <section
      className="page-section"
      id="section-three"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/homepage/section-three-bg.png')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onWheel={onWheel}
    >
      <div className="s3-page-container">
        {/* 海域面积占比 */}
        <div className="data-section">
          <div className="data-chart">
            <img
              src={`${process.env.PUBLIC_URL}/homepage/data_charts/area-ratio-chart.png`}
              alt="area-ratio-chart"
            />
          </div>
          <div className="text-container">
            <div className="text-chinese">是300万平方公里的澎湃？</div>
            <div className="text-english">Is it the vast expanse of 3,000,000 k㎡?</div>
          </div>
        </div>
        {/* 海洋生物占比 */}
        <div className="data-section">
          <div className="text-container">
            <div className="text-chinese">还是2.8万余种生物的蓬勃？</div>
            <div className="text-english">Or the thriving life of over 28,000 species?</div>
          </div>
          <div className="data-chart">
            <img
              src={`${process.env.PUBLIC_URL}/homepage/data_charts/biology-ratio-chart.png`}
              alt="biology-ratio-chart"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 4
export const SectionFour = ({ onWheel }) => {
  return (
    <section
      className="page-section"
      id="section-four"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/homepage/section-four-bg.png')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onWheel={onWheel}
    >
      <div className="s4-page-container">
        {/* 海错图濒危占比 */}
        <div className="data-section">
          <div className="data-chart">
            <img
              src={`${process.env.PUBLIC_URL}/homepage/data_charts/endangered-ratio-chart.png`}
              alt="area-ratio-chart"
            />
          </div>
          <div className="text-container">
            <div className="text-chinese">“海错遗影”，这是一个关于《海错图》中已经逝去或是濒临危机的生物的记忆网站。</div>
            <div className="text-english">"&lt;Haicuo Map&gt; Memorization" — a memorial website to the creatures that have passed away or are endangered, as illustrated in the ancient Chinese marine life map: &lt;Haicuo Map&gt;."</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 5
export const SectionFive = ({ onWheel }) => {
  return (
    <section
      className="page-section"
      id="section-five"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/homepage/section-five-bg.png')`,
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
      className="long-section"
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
      className="page-section"
      id="section-seven"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/homepage/section-seven-bg.png')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onWheel={onWheel}
    >
    </section>
  );
};