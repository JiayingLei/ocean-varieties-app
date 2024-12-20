import React, { useState } from "react";
import "../styles/SideBar.css";

const SideBar = ({ onTypeSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleMouseEnter = () => {
    setIsOpen(true); // 鼠标悬停时打开侧拉栏
  };

  const handleMouseLeave = () => {
    setIsOpen(false); // 鼠标离开时关闭侧拉栏
  };

  const handleIconClick = (type) => { 
    const newSelectedIcon = selectedIcon === type ? null : type; 
    setSelectedIcon(newSelectedIcon); // 更新当前选中的类型
    onTypeSelect(newSelectedIcon); // 通知父组件更新选中的类型
  };
  

  return (
    <div 
      className={`side-bar ${isOpen ? "open" : ""}`}
      style={{
        backgroundImage: "url('/homepage/section-two/side-bar-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onMouseEnter={handleMouseEnter} // 鼠标悬停事件
      onMouseLeave={handleMouseLeave} // 鼠标离开事件
    >
      <div className="icon-group">
        <div 
          className="icon" 
          onClick={() => handleIconClick("介部")}
          style={{ opacity: selectedIcon === "介部" ? 1 : 0.5 }}
          title={"介部"} 
        >
          <img src="/homepage/section-two/icons/icon-介.png" alt="Icon 介部" />
        </div>
        <div className="line">
          <img src="/homepage/section-two/icons/icon-line.png" alt="Line" />
        </div>
        <div 
          className="icon" 
          onClick={() => handleIconClick("鳞部")}
          style={{ opacity: selectedIcon === "鳞部" ? 1 : 0.5 }} 
          title={"鳞部"} 
        >
          <img src="/homepage/section-two/icons/icon-鳞.png" alt="Icon 鳞部" />
        </div>
        <div className="line">
          <img src="/homepage/section-two/icons/icon-line.png" alt="Line" />
        </div>
        <div 
          className="icon" 
          onClick={() => handleIconClick("兽部")}
          style={{ opacity: selectedIcon === "兽部" ? 1 : 0.5 }} 
          title={"兽部"} 
        >
          <img src="/homepage/section-two/icons/icon-兽.png" alt="Icon 兽部" />
        </div>
        <div className="line">
          <img src="/homepage/section-two/icons/icon-line.png" alt="Line" />
        </div>
        <div 
          className="icon" 
          onClick={() => handleIconClick("虫部")}
          style={{ opacity: selectedIcon === "虫部" ? 1 : 0.5 }} 
          title={"虫部"} 
        >
          <img src="/homepage/section-two/icons/icon-虫.png" alt="Icon 虫部" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;