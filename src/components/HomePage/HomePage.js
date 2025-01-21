import React, { useState, useEffect, useRef } from "react"; 
import { useNavigate } from "react-router-dom"; 
import "./HomePage.css"; 
import { SectionOne, SectionTwo, SectionThree, SectionFour, SectionFive, SectionSix, SectionSeven } from "../HomeSections/HomeSections";

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(null); // 当前选中的类型
  const [showSideBar, setShowSideBar] = useState(false); // 控制 side-bar 显示与否
  const [currentSection, setCurrentSection] = useState(0);
  const sectionsRef = useRef([]);

  const handleClick = (id) => {
    navigate(`/details/${id}`);  
  };

  const scrollToNextSection = () => {
    sectionsRef.current[1].scrollIntoView({ behavior: "smooth" });
    setCurrentSection(1);
  }

  // 滚动跳转到对应的 section
  const scrollToSection = (index) => {
    console.log(index)
    if (sectionsRef.current[index]) {
      sectionsRef.current[index].scrollIntoView({
        behavior: 'smooth',
      });
      setCurrentSection(index);
    }
  };
 
  const handleMouseWheel = (event) => {
    // 获取窗口当前显示的 section
    let visibleSection = currentSection;
    sectionsRef.current.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) { // 至少一半可见
        visibleSection = index;
      }
    });
    setCurrentSection(visibleSection);

    if (event.deltaY > 0) {
      // 鼠标向下滚动
      if (visibleSection < sectionsRef.current.length - 2) {
        scrollToSection(visibleSection + 1); // 跳转到下一个 Section
      }
    } else {
      // 鼠标向上滚动
      if (visibleSection > 0 && visibleSection < sectionsRef.current.length - 2) {
        scrollToSection(visibleSection - 1); // 跳转到上一个 Section
      }
    }
  };  

  const handleTypeSelect = (type) => {
    setSelectedType(type); // 更新当前选中的类型
  };

  // 监听窗口滚动事件
  const handleScroll = () => {
    const sectionSix = document.getElementById("section-six");
    if (sectionSix) {
      const sectionSixPosition = sectionSix.getBoundingClientRect();
      // 判断 section-six 是否在可视区域中
      if (sectionSixPosition.top <= window.innerHeight && sectionSixPosition.bottom >= 0) {
        setShowSideBar(true); // 显示 SideBar
      } else {
        setShowSideBar(false); // 隐藏 SideBar
      }
    }
  };

  // 在组件加载时添加滚动监听
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 每个 Section 的内容
  const sections = [
    { title: "Section 1", content: <SectionOne onWheel={handleMouseWheel} scrollToNextSection={scrollToNextSection}/> },
    { title: "Section 2", content: <SectionTwo onWheel={handleMouseWheel} /> },
    { title: "Section 3", content: <SectionThree onWheel={handleMouseWheel} /> },
    { title: "Section 4", content: <SectionFour onWheel={handleMouseWheel} /> },
    { title: "Section 5", content: <SectionFive onWheel={handleMouseWheel} /> },
    { title: "Section 6", content: <SectionSix onClick={handleClick} selectedType={selectedType} showSideBar={showSideBar} onTypeSelect={handleTypeSelect} /> },
    { title: "Section 7", content: <SectionSeven onWheel={handleMouseWheel} /> },
  ];


  return (
    <div className="home-page">
      {/* 添加背景音乐 */}
      <audio autoPlay loop>
        <source src={`${process.env.PUBLIC_URL}/background-music.mp3`} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      {sections.map((section, index) => (
        <div key={index} ref={(el) => (sectionsRef.current[index] = el)}>{section.content}</div>
      ))}
    </div>
  );
};

export default HomePage;