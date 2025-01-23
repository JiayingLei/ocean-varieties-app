import React, { useState } from 'react';
import './ProtectionLevel.css';

const ProtectionLevel = ({ creature }) => {
  const [activeContainer, setActiveContainer] = useState(null);

  // 控制每个 level-container 的显示状态
  const handleLevelContainerClick = (containerName) => {
    if (activeContainer === containerName) {
      setActiveContainer(null);  
    } else {
      setActiveContainer(containerName); 
    }
  };

  return (
    <div className="protection-level">
      <div 
        className={`cms-container ${activeContainer === 'cms' ? 'active' : ''}`} 
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/detailspage/protection-level/waves-bg/wave-cms.png)` }}
      >
        {activeContainer === 'cms' && (
          <div className="overlay"></div> /* 新增叠加背景层 */
        )}
        <div
          className="level-container"
          onClick={() => handleLevelContainerClick('cms')}
        >
          {activeContainer === 'cms' && creature?.protectionLevel?.cms && (
            <>
              <div className="level-icon">
                <img
                  src={`${process.env.PUBLIC_URL}/detailspage/protection-level/icons/icon-cms.png`}
                  alt="Icon CMS"
                />
              </div>
              <div className="level-text">
                <div>{creature?.protectionLevel?.cms?.zh}</div>
                <div>{creature?.protectionLevel?.cms?.en}</div>
              </div>
            </>
          )}
        </div>

        <div 
          className={`cites-container ${activeContainer === 'cites' ? 'active' : ''}`} 
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/detailspage/protection-level/waves-bg/wave-cites.png)` }}
        >
          {activeContainer === 'cites' && (
            <div className="overlay"></div> /* 新增叠加背景层 */
          )}
          <div
            className="level-container"
            onClick={() => handleLevelContainerClick('cites')}
          >
            {activeContainer === 'cites' && creature?.protectionLevel?.cites && (
              <>
                <div className="level-icon">
                  <img
                    src={`${process.env.PUBLIC_URL}/detailspage/protection-level/icons/icon-cites.png`}
                    alt="Icon CITES"
                  />
                </div>
                <div className="level-text">
                  <div>{creature?.protectionLevel?.cites?.zh}</div>
                  <div>{creature?.protectionLevel?.cites?.en}</div>
                </div>
              </>
            )}
          </div>
          <div 
            className={`iucn-container ${activeContainer === 'iucn' ? 'active' : ''}`}
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/detailspage/protection-level/waves-bg/wave-iucn.png)` }}
          >
            {activeContainer === 'iucn' && (
              <div className="overlay"></div> /* 新增叠加背景层 */
            )}
            <div
              className="level-container" 
              onClick={() => handleLevelContainerClick('iucn')}
            >
              {activeContainer === 'iucn' && creature?.protectionLevel?.iucn && (
                <>
                  <div className="level-icon">
                    <img
                      src={`${process.env.PUBLIC_URL}/detailspage/protection-level/icons/icon-iucn.png`}
                      alt="Icon IUCN"
                    />
                  </div>
                  <div className="level-text">
                    <div>{creature?.protectionLevel?.iucn?.zh}</div>
                    <div>{creature?.protectionLevel?.iucn?.en}</div>
                  </div>
                </>
              )}
            </div>
            <div 
              className={`china-container ${activeContainer === 'china' ? 'active' : ''}`} 
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/detailspage/protection-level/waves-bg/wave-china.png)` }}
            >
              {activeContainer === 'china' && (
                <div className="overlay"></div> /* 新增叠加背景层 */
              )}
              <div
                className="china-level-container"
                onClick={() => handleLevelContainerClick('china')}
              >
                {activeContainer === 'china' && creature?.protectionLevel?.china && (
                  <>
                    <div className="china-level-icon">
                      <img 
                        src={`${process.env.PUBLIC_URL}/detailspage/protection-level/icons/icon-china.png`}
                        alt="Icon China" 
                      />
                    </div>
                    <div className="china-level-text">
                      <div>{creature?.protectionLevel?.china?.zh}</div>
                      <div>{creature?.protectionLevel?.china?.en}</div>
                    </div>
                  </>
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