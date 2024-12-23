import React, { useState } from 'react';
import './ProtectionLevel.css';

const ProtectionLevel = ({ creature }) => {
  // 状态管理，控制内容显示
  const [showLevelContainer, setShowLevelContainer] = useState(false);
  const [showChinaLevelContainer, setShowChinaLevelContainer] = useState(false);

  const handleLevelContainerClick = () => {
    setShowLevelContainer(!showLevelContainer);
  };

  const handleChinaLevelContainerClick = () => {
    setShowChinaLevelContainer(!showChinaLevelContainer);
  };

  return (
    <div className="protection-level" >
      <div className="cms-container" style={{ backgroundImage: 'url("/detailspage/waves-bg/wave-cms.png")' }}>
        {/* level-container 和 cites 容器 */}
        <div className="level-container" onClick={handleLevelContainerClick}>
          <div className="level-icon">
            <img src={`/detailspage/icons/icon-${creature.protectionLevel.cms}.png`} alt="icon" />
          </div>
          <div className="level-text">
            <div>{creature.protectionLevel.cms.zh}</div>
            <div>{creature.protectionLevel.cms.en}</div>
          </div>
          {showLevelContainer && (
            <div className="level-content">
              {/* level-content 显示内容 */}
              {/* 这里你可以根据需要添加具体的内容 */}
              <p>CMS Content</p>
            </div>
          )}
        </div>
        
        <div className="cites-container" style={{ backgroundImage: 'url("/detailspage/waves-bg/wave-cites.png")' }}>
          {/* level-container 和 iucn 容器 */}
          <div className="level-container" onClick={handleLevelContainerClick}>
            <div className="level-icon">
              <img src={`/detailspage/icons/icon-${creature.protectionLevel.sites}.png`} alt="icon" />
            </div>
            <div className="level-text">
              <div>{creature.protectionLevel.cites.zh}</div>
              <div>{creature.protectionLevel.cites.en}</div>
            </div>
            {showLevelContainer && (
              <div className="level-content">
                {/* level-content 显示内容 */}
                <p>Sites Content</p>
              </div>
            )}
          </div>
          
          <div className="iucn-container" style={{ backgroundImage: 'url("/detailspage/waves-bg/wave-iucn.png")' }}>
            {/* level-container 和 china 容器 */}
            <div className="level-container" onClick={handleLevelContainerClick}>
              <div className="level-icon">
                <img src={`/detailspage/icons/icon-${creature.protectionLevel.iucn}.png`} alt="icon" />
              </div>
              <div className="level-text">
                <div>{creature.protectionLevel.iucn.zh}</div>
                <div>{creature.protectionLevel.iucn.en}</div>
              </div>
              {showLevelContainer && (
                <div className="level-content">
                  {/* level-content 显示内容 */}
                  <p>IUCN Content</p>
                </div>
              )}
            </div>

            <div className="china-container" style={{ backgroundImage: 'url("/detailspage/waves-bg/wave-china.png")' }}>
              {/* china-level-container */}
              <div className="china-level-container" onClick={handleChinaLevelContainerClick}>
                <div className="china-level-icon">
                  <img src={`/detailspage/icons/icon-china.png`} alt="china icon" />
                </div>
                <div className="china-level-text">
                  <div>{creature.protectionLevel.china.zh}</div>
                  <div>{creature.protectionLevel.china.en}</div>
                </div>
                {showChinaLevelContainer && (
                  <div className="china-level-content">
                    {/* china-level-content 显示内容 */}
                    <p>China Content</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtectionLevel;
