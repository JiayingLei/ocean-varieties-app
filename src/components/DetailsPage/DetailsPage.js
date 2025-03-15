import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { creatures } from "../../contants/creatures";
import "./DetailsPage.css";
import SideNav from "../SideNav/SideNav";
import Jigsaw from "../Jigsaw/Jigsaw";
import ProtectionLevel from "../ProtectionLevel/ProtectionLevel";
import { EndangerReasons, EndangerState } from "../Endangerment/Endangerment";
import ActualImage from "../ActualImage/ActualImage";
import { FishBonesExplorer } from '../FishBonesExplorer/FishBonesExplorer';

const DetailsPage = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const creature = creatures.find((c) => c.id === parseInt(id));

  const [currentSection, setCurrentSection] = useState(0);
  const [currentSubSection, setCurrentSubSection] = useState(null);
  const sectionsRef = useRef([]);

  const handleSectionSelect = (section, subSection = null) => {
    setCurrentSection(section); // 更新当前选中的 Section
    setCurrentSubSection(subSection); // 更新当前选中的 subSection
    scrollToSection(section, subSection);
  };

  // 滚动跳转到对应的 section & subsection
  const scrollToSection = (index, subIndex = null) => {
    if (sectionsRef.current[index]) {
      sectionsRef.current[index].scrollIntoView({
        behavior: 'smooth',
      });
      setCurrentSection(index);
      setCurrentSubSection(subIndex);
    }
  };

  // 每个 Section 的内容
  const sections = [
    { title: 'Section 1', content: <Jigsaw creature={creature} /> },
    { title: 'Section 2', content: <ActualImage creature={creature} /> },
    { title: 'Section 3', 
      content: <FishBonesExplorer creature={creature} scrollToNextSection={() => scrollToSection(2, 0)} />, 
      subSections: [
        { title: 'Section 3A', content: <EndangerReasons creature={creature} />}
      ]
    },
    { 
      title: 'Section 4', 
      content: <ProtectionLevel creature={creature} />,
      subSections: [
        { title: 'Section 4A', content: <EndangerState creature={creature} /> },
      ]
    },
  ];

  // 监听滚动事件
  const sectionTransitions = {
    down: {
      2: { 
        null: { section: 2, sub: 0 },  
        0:    { section: 3, sub: null } 
      },
      3: {  
        null: { section: 3, sub: 0 }  
      }
    },
    up: {
      3: {  
        0:    { section: 3, sub: null }, 
        null: { section: 2, sub: 0 }     
      },
      2: { 
        0:    { section: 2, sub: null },
        null: { section: 1, sub: null }  
      }
    }
  };
  
  // 统一处理滚动事件
  const handleScroll = (event) => {
    const direction = event.deltaY > 0 ? 'down' : 'up';
    const transition = sectionTransitions[direction];
    const subKey = currentSubSection === null ? 'null' : currentSubSection.toString();
    if (transition[currentSection]?.[subKey]) {
      const { section, sub } = transition[currentSection][subKey];
      scrollToSection(section, sub);
      return;
    }
    const sectionChange = direction === 'down' ? 1 : -1;
    const newSection = currentSection + sectionChange;
    if (newSection >= 0 && newSection < sections.length) {
      scrollToSection(newSection);
    }
  };


  return (
    <div className="details-page" onWheel={handleScroll}>
      {/* 添加背景音乐 */}
      <audio autoPlay loop>
        <source src={`${process.env.PUBLIC_URL}/background-music.mp3`} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      {currentSection > 0 && (
        <div className="back-button" onClick={() => navigate("/")}>
          <img src={`${process.env.PUBLIC_URL}/detailspage/back-button.png`} alt="Back" />
        </div>
      )}
      <SideNav currentSection={currentSection} onSectionSelect={handleSectionSelect} />
      <div className="content">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className={`section ${currentSection === index ? 'active' : ''}`}
          >
            {/* 渲染父 Section 内容 */}
            {(!section.subSections || currentSubSection === null) && section.content}

            {/* 渲染子 Section 内容 */}
            {section.subSections && currentSection === index && currentSubSection !== null && section.subSections[currentSubSection].content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsPage;