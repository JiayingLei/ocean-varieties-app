import React, { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom"; 
import "./HomePage.css"; 
import { creatures } from "../../contants/creatures";
import OceanCreature from "../OceanCreature/OceanCreature";
import SideBar from "../SideBar/SideBar";

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(null); // 当前选中的类型
  const [showSideBar, setShowSideBar] = useState(false); // 控制 side-bar 显示与否

  const handleClick = (id) => {
    navigate(`/details/${id}`);  
  };

  const scrollToNextSection = () => {
    document.querySelector("#section-two").scrollIntoView({ behavior: "smooth" });
  };
 
  const handleMouseWheel = (event) => {
    if (event.deltaY > 0) {
      scrollToNextSection(); // 当用户向下滚动时，跳转到下一节
    }
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type); // 更新当前选中的类型
  };

  // 监听窗口滚动事件
  const handleScroll = () => {
    const sectionTwo = document.getElementById("section-two");
    if (sectionTwo) {
      const sectionTwoPosition = sectionTwo.getBoundingClientRect();
      // 判断 section-two 是否在可视区域中
      if (sectionTwoPosition.top <= window.innerHeight && sectionTwoPosition.bottom >= 0) {
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


  return (
    <div className="home-page">
      {/* Section 1 */}
      <section
        className="section-one"
        id="section-one"
        style={{
          backgroundImage: "url('/homepage/section-one/background.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        onWheel={handleMouseWheel}
      >
        <img
          src="/homepage/section-one/subtitle.png"
          alt="Subtitle"
          className="s1-subtitle"
        />
        <div className="s1-titles-container">
          <img
            src="/homepage/section-one/title-1.png"
            alt="Title 1"
            className="s1-title-1"
          />
          <img
            src="/homepage/section-one/title-2.png"
            alt="Title 2"
            className="s1-title-2"
          />
        </div>
        <img 
          src="/homepage/section-one/arrow.png" 
          alt="Arrow" 
          className="scroll-indicator" 
          onClick={scrollToNextSection}
        />
      </section>


      {/* Section 2 */}
      <section
        className="section-two"
        id="section-two"
        style={{
          backgroundImage: "url('/homepage/section-two/background.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="s2-titles-container">
          <img
            src={"/homepage/section-two/title.png"} 
            alt="Title" 
            className="s2-title" 
          />
          <img 
            src={"/homepage/section-two/subtitle.png"} 
            alt="Subtitle" 
            className="s2-subtitle" 
          />
        </div>
        {/* OceanCreature 组件 */}
        <div className="creatures-grid">
          {creatures.map((creature) => (
            <OceanCreature
              key={creature.id}
              creature={creature}
              onClick={() => handleClick(creature.id)}
              isGrayedOut={selectedType && creature.type.zh !== selectedType} // 是否灰化
            />
          ))}
        </div>
        {/* SideBar 组件 */}
        {showSideBar && <SideBar onTypeSelect={handleTypeSelect} />}
        <div className="bottom-text">
          <p>无穷的远方，无数的生命，都与我们有关。</p>
          <p>Infinite distances, countless lives, all related to us.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
