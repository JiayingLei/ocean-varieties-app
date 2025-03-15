import React, { useState } from "react";
import "./SideNav.css";

const SideNav = ({ currentSection, onSectionSelect }) => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (sectionId) => {
    setSelectedIcon(sectionId); 
    onSectionSelect(sectionId); 
  };

  return (
    <div className="side-nav">
      <div className="nav-icon-group">
        {/* Icon 1 - 拼图 */}
        <div
          className={`nav-icon-1 ${currentSection === 0 ? 'active' : ''}`}
          onClick={() => handleIconClick(0)}
          data-tooltip={"拼图\n Jigsaw"}
        >
          <img src={`${process.env.PUBLIC_URL}/detailspage/icons/icon-1.png`} alt="Icon 1" />
        </div>
        <div className="nav-line">
          <img src={`${process.env.PUBLIC_URL}/detailspage/icons/icon-line.png`} alt="Line" />
        </div>

        {/* Icon 2 - 实际图像 */}
        <div
          className={`nav-icon-2 ${currentSection === 1 ? 'active' : ''}`}
          onClick={() => handleIconClick(1)}
          data-tooltip={"实际图像\n Actual Image"}
        >
          <img src={`${process.env.PUBLIC_URL}/detailspage/icons/icon-2.png`} alt="Icon 2" />
        </div>
        <div className="nav-line">
          <img src={`${process.env.PUBLIC_URL}/detailspage/icons/icon-line.png`} alt="Line" />
        </div>

        {/* Icon 3 - 濒危原因 */}
        <div
          className={`nav-icon-3 ${currentSection === 2 ? 'active' : ''}`}
          onClick={() => handleIconClick(2)} 
          data-tooltip={"濒危原因\n Endangerment Reasons"}
        >
          <img src={`${process.env.PUBLIC_URL}/detailspage/icons/icon-3.png`} alt="Icon 3" />
        </div>
        <div className="nav-line">
          <img src={`${process.env.PUBLIC_URL}/detailspage/icons/icon-line.png`} alt="Line" />
        </div>

        {/* Icon 4 - 保护级别 */}
        <div
          className={`nav-icon-4 ${currentSection === 3 ? 'active' : ''}`}
          onClick={() => handleIconClick(3)}
          data-tooltip={"保护级别\n Protection Level"}
        >
          <img src={`${process.env.PUBLIC_URL}/detailspage/icons/icon-4.png`} alt="Icon 4" />
        </div>
      </div>
    </div>
  );
};

export default SideNav;