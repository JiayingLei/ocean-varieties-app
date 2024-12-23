import React, { useState } from 'react';
import './ProtectionLevel.css';

const ProtectionLevel = ({ creature }) => {
  // 独立的状态管理，用于控制哪个container的level-container显示
  const [activeContainer, setActiveContainer] = useState(null);

  // 控制每个level-container的显示状态
  const handleLevelContainerClick = (containerName) => {
    // 如果点击的是已经展开的container，则关闭它，否则展开点击的container
    if (activeContainer === containerName) {
      setActiveContainer(null);  // 如果点击的是当前展开的container，则关闭它
    } else {
      setActiveContainer(containerName);  // 否则展开点击的container
    }
  };

  return (
    <div className="protection-level">
      <div 
        className={`cms-container ${activeContainer === 'cms' ? 'active' : ''}`} 
        style={{ backgroundImage: 'url("/detailspage/protection-level/waves-bg/wave-cms.png")' }}
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
                  src={`/detailspage/protection-level/icons/icon-cms.png`}
                  alt="icon"
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
          style={{ backgroundImage: 'url("/detailspage/protection-level/waves-bg/wave-cites.png")' }}
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
                    src={`/detailspage/protection-level/icons/icon-cites.png`}
                    alt="icon"
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
            style={{ backgroundImage: 'url("/detailspage/protection-level/waves-bg/wave-iucn.png")' }}
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
                      src={`/detailspage/protection-level/icons/icon-iucn.png`}
                      alt="icon"
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
              style={{ backgroundImage: 'url("/detailspage/protection-level/waves-bg/wave-china.png")' }}
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
                        src={`/detailspage/protection-level/icons/icon-china.png`} 
                        alt="china icon" 
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