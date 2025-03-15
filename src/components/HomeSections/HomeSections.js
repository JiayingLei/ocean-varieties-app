import React, { useState } from "react";
import "./HomeSections.css"; 
import OceanCreature from "../OceanCreature/OceanCreature";
import SideBar from "../SideBar/SideBar";
import { creatures } from "../../contants/creatures";

// 首 - 1
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

// 首 - 2
export const SectionTwo = ({ onWheel }) => {
  return (
    <section
      className="page-section"
      id="section-two"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/homepage/section-2-bg.png')`,
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

// 首 - 3
export const SectionThree = ({ onWheel }) => {
  return (
    <section
      className="page-section"
      id="section-three"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/homepage/section-3-bg.png')`,
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
              alt="Area Ratio Chart"
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
              alt="Biology Ratio Chart"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// 首 - 7（原 - 4）
export const SectionSeven = ({ onWheel }) => {
  return (
    <section
      className="page-section"
      id="section-four"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/homepage/section-4-bg.png')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onWheel={onWheel}
    >
      <div className="s4-page-container">
        {/* 海错图濒危占比 */}
        <div className="data-section">
          <div className="text-container">
            <div className="text-chinese" style={{ fontFamily: "'FZLanTing', serif" }}>
              聂璜的《海错图》不仅是一幅幅海洋生物的图谱，更是一扇通往过去的窗口，<br />
              让我们得以窥见古人眼中的海洋世界。<br />
            </div>
            <div className="text-english">
              Nie Huang's &lt;HaiCuo Map&gt; is more than just a collection of marine life illustrations-it is a<br />
              window into the past, offering us a glimpse of the ocean as seen by the ancients.<br />
            </div>
          </div>
          <div className="data-chart">
            <img
              src={`${process.env.PUBLIC_URL}/homepage/data_charts/endangered-ratio-chart.png`}
              alt="Endangered Ratio Chart"
            />
          </div>
          <div className="text-container">
            <div className="text-chinese" style={{ fontFamily: "'FZLanTing', serif" }}>
              “海错遗影”，这是一个关于《海错图》中已经逝去或是濒临危机的生物的记忆网站。<br />
            </div>
            <div className="text-english">
              "&lt;HaiCuo Map&gt; Memorization" — a memorial website to the creatures that have passed away or<br />
              are endangered, as illustrated in the ancient Chinese marine life map: &lt;HaiCuo Map&gt;."<br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 首 - 8（原 - 5）
export const SectionEight = ({ onWheel }) => {
  return (
    <section
      className="page-section"
      id="section-five"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/homepage/section-5-bg.png')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onWheel={onWheel}
    >
      <div className="s5-page-container">
        {/* Book Logo */}
        <div className="book-logo">
          <img
            src={`${process.env.PUBLIC_URL}/homepage/book-logo.png`}
            alt="Book Logo"
          />
        </div>
        {/* First Text Container */}
        <div className="text-container">
          <div className="text-title">记住它们</div>
          <div className="text-content"  style={{ fontFamily: "'FZLanTing', serif" }}>
            你好，考察古老生命的旅人，欢迎来到本站！<br />
            请你通过拼图还原28种濒危生物的信息，<br />
            濒危情况越是严峻的生物，拼图的块数也越多，还原难度也越大。<br />
            让我们一起从拼图开始，还原海错生物们濒危的真相......<br />
          </div>
        </div>
        {/* Second Text Container */}
        <div className="text-container">
          <div className="text-title">Remember Them</div>
          <div className="text-content">
            Greetings, traveler of archaeological traveler, and welcome to this site!<br />
            Here, please piecing together the stories of 28 endangered species.<br />
            The more critical their status, the more puzzle pieces you must fit together,<br />
            and the greater the challenge of reconstruction.<br />
            Let's start with a puzzle and piece together the hidden truth of the endangered<br />
            &lt;HaiCuo Map&gt; creatures...
          </div>
        </div>
      </div>
    </section>
  );
};

// 中 - 9（原 - 6）
export const SectionNine = ({ onClick, selectedType, showSideBar, onTypeSelect }) => {
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

// 尾 - 10（原 - 7）
export const SectionTen = ({ onWheel }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (isModalOpen) {
      setIsHovered(false);
    }
  };

  return (
    <section 
      className="page-section" 
      id="section-seven" 
      style={{ 
        backgroundImage: `url('${process.env.PUBLIC_URL}/homepage/section-7-bg.png')`, 
        backgroundSize: "100% 100%", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat" 
      }} 
      onWheel={onWheel}
    >
      <div className="s5-page-container" style={{ bottom: "30vh" }}>
        {/* First Text Container */}
        <div className="text-container">
          <div className="text-content">
            亲爱的旅人，<br />
            感谢你在这里为这些生命驻足。<br />
            每一个海洋生物都是一片让世界更多样的拼图，<br />
            让我们承继古人崇尚自然、记录自然的精神，<br />
            以行动守护这片蔚蓝的家园。<br />
            让古人笔下的海洋图景不再只是历史的记忆，而是永恒的现实。<br />
          </div>
          <div className="text-title">记住它们</div>
        </div>
        {/* Second Text Container */}
        <div className="text-container">
          <div className="text-content" style={{ lineHeight: "1.5", fontWeight: "600" }}>
            Dear traveler,<br />
            Thank you for pausing here to honor these lives.<br />
            Each marine creature is a piece of the puzzle that makes our world more diverse.<br />
            Let us honor the ancients' spirit of documenting nature,<br />
            and take action to protect our blue home,<br />
            so their vision of the ocean remains not just history, but a living reality.<br />
          </div>
          <div className="text-title">Remember Them</div>
        </div>
        {/* Book Logo */}
        <div className="book-logo">
          <img src={`${process.env.PUBLIC_URL}/homepage/book-logo.png`} alt="Book Logo" />
        </div>
      </div>

      {/* Citation Logo */}
      <div 
        className="citation-logo-container"
        onMouseEnter={() => !isModalOpen && setIsHovered(true)}
        onMouseLeave={() => !isModalOpen && setIsHovered(false)}
      >
        <div 
          className={`citation-logo ${isModalOpen || isHovered ? "focus-state" : ""}`}
          onClick={!isModalOpen ? toggleModal : undefined}
          style={{ cursor: isModalOpen ? 'default' : 'pointer' }}
          title={!isModalOpen ? "Click here to view the cited data sources" : ""}
        >
          <img 
            src={`${process.env.PUBLIC_URL}/homepage/citation-logo.png`} 
            alt="Citation Logo" 
            style={{ display: isModalOpen || isHovered ? 'none' : 'block' }}
          />
          <img 
            src={`${process.env.PUBLIC_URL}/homepage/citation-logo-fs.png`} 
            alt="Citation Logo Focus State" 
            style={{ display: isModalOpen || isHovered ? 'block' : 'none' }}
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close-button" onClick={toggleModal}>×</button>
            <div className="text-container">
              {/* <div className="text-title">Reference</div> */}
              <div className="text-content">
                <div className="text-title">Data Sources</div>
                [1] 故宫博物院.清宫海错图[M].故宫出版社,2014.<br />
                [2] 张辰亮.海错图笔记[M].中信出版集团股份有限公司,2020.<br />
                [3] 中华人民共和国国务院新闻办公室. 中国的海洋生态环境保护[Z]. 北京: 中华人民共和国国务院新闻办公室, 2024.7.<br />
                [4] 联合国环境规划署. (2011年8月24日). “环境署最新研究报告：地球上有多少物种？870万种”. 联合国新闻. https://news.un.org/zh/story/2011/08/157582<br />
                [5] https://baike.baidu.com/item/棱皮龟<br />
                [6] https://baike.baidu.com/item/中国鲎<br />
                [7] https://baike.baidu.com/item/黄花鱼<br />
                [8] https://baike.baidu.com/item/松江鲈<br />
                [9] https://baike.baidu.com/item/带鱼<br />
                [10] https://baike.baidu.com/item/儒艮<br />
                [11] https://baike.baidu.com/item/海蛇<br />
                [12] https://baike.baidu.com/item/石磺<br />
                [13] https://baike.baidu.com/item/海笔<br />
                [14] https://baike.baidu.com/item/弓形革囊星虫<br />
                [15] https://baike.baidu.com/item/柳珊瑚<br />
                [16] https://baike.baidu.com/item/沙蚕<br />
                [17] https://baike.baidu.com/item/玳瑁<br />
                [18] https://baike.baidu.com/item/锯鳐科<br />
                [19] https://baike.baidu.com/item/柳叶鳗<br />
                [20] https://baike.baidu.com/item/鲥鱼<br />
                [21] https://baike.baidu.com/item/花鳗鲡<br />
                [22] https://baike.baidu.com/item/海马<br />
                [23] https://baike.baidu.com/item/海龙<br />
                [24] https://baike.baidu.com/item/斑海豹<br />
                [25] https://baike.baidu.com/item/水獺<br />
                [26] https://baike.baidu.com/item/露脊鲸<br />
                [27] baike.sogou.com/m/fullLemma?lid=461711<br />
                [28] https://baike.baidu.com/item/锤头双髻鲨<br />
                [29] https://baike.baidu.com/item/无沟双髻鲨<br />
                [30] https://baike.baidu.com/item/路氏双髻鲨<br />
                [31] https://baike.baidu.com/item/刀鲚<br />
                [32] https://baike.baidu.com/item/牡蛎礁<br />

                <div className="text-title">Image Sources</div>
                [33] en.namu.wiki<br />
                [34] loachloachap.hatenablog.com<br />
                [35] www.divessi.com<br />
                [36] aninu.de<br />
                [37] www.linkedin.com<br />
                [38] www.ifaw.org<br />
                [39] www.flickr.com<br />
                [40] k.sina.cn<br />
                [41] oceanomics.blogspot.com<br />
                [42] www.sohu.com<br />
                [43] www.disl.edu/<br />
                [44] sdg.iisd.org<br />
                [45] https://kknews.cc/<br />
                [46] http://www.eslitech.com/<br />
                [47] zh.wikipedia.org<br />
                [48] www.shutterstock.com<br />
                [49] lasaisonbleue.com<br />
                [50] www.chinapress.com.my<br />
                [51] http://aquaria.palo-alto.ca.us/<br />
                [52] www.enanyang.my<br />
                [53] wapbaike.baidu.com<br />
                [54] baike.baidu.com<br />
                [55] www.ifaw.org<br />
                [56] www.zooborns.com<br />
                [57] baike.baidu.com<br />
                [58] conchology.be<br />
                [59] en.yna.co.kr<br />
                [60] bk.chimelong.com<br />

                <div className="text-title">Audio Sources</div>
                The audio in this project was created using Suno.
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// 尾 - 11（原 - 8）
export const SectionEleven = ({ onWheel }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (isModalOpen) {
      setIsHovered(false);
    }
  };

  return (
    <section 
      className="page-section" 
      id="section-eight" 
      style={{ 
        backgroundImage: `url('${process.env.PUBLIC_URL}/homepage/section-8-bg.png')`, 
        backgroundSize: "100% 100%", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat" 
      }} 
      onWheel={onWheel}
    >
      <div className="s8-page-container">
        {/* Text Container */}
        <div className="text-container">
          <div className="text-content">
            Remember Me:<br />
            &lt;HaiCuo Map&gt; Memorization<br />
          </div>
        </div>
      </div>

      {/* Citation Logo */}
      <div 
        className="citation-logo-container"
        onMouseEnter={() => !isModalOpen && setIsHovered(true)}
        onMouseLeave={() => !isModalOpen && setIsHovered(false)}
      >
        <div 
          className={`citation-logo ${isModalOpen || isHovered ? "focus-state" : ""}`}
          onClick={!isModalOpen ? toggleModal : undefined}
          style={{ cursor: isModalOpen ? 'default' : 'pointer' }}
          title={!isModalOpen ? "Click here to view the cited data sources" : ""}
        >
          <img 
            src={`${process.env.PUBLIC_URL}/homepage/citation-logo.png`} 
            alt="Citation Logo" 
            style={{ display: isModalOpen || isHovered ? 'none' : 'block' }}
          />
          <img 
            src={`${process.env.PUBLIC_URL}/homepage/citation-logo-fs.png`} 
            alt="Citation Logo Focus State" 
            style={{ display: isModalOpen || isHovered ? 'block' : 'none' }}
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close-button" onClick={toggleModal}>×</button>
            <div className="text-container">
              {/* <div className="text-title">Reference</div> */}
              <div className="text-content">
                <div className="text-title">Data Sources</div>
                [1] 故宫博物院.清宫海错图[M].故宫出版社,2014.<br />
                [2] 张辰亮.海错图笔记[M].中信出版集团股份有限公司,2020.<br />
                [3] 中华人民共和国国务院新闻办公室. 中国的海洋生态环境保护[Z]. 北京: 中华人民共和国国务院新闻办公室, 2024.7.<br />
                [4] 联合国环境规划署. (2011年8月24日). “环境署最新研究报告：地球上有多少物种？870万种”. 联合国新闻. https://news.un.org/zh/story/2011/08/157582<br />
                [5] https://baike.baidu.com/item/棱皮龟<br />
                [6] https://baike.baidu.com/item/中国鲎<br />
                [7] https://baike.baidu.com/item/黄花鱼<br />
                [8] https://baike.baidu.com/item/松江鲈<br />
                [9] https://baike.baidu.com/item/带鱼<br />
                [10] https://baike.baidu.com/item/儒艮<br />
                [11] https://baike.baidu.com/item/海蛇<br />
                [12] https://baike.baidu.com/item/石磺<br />
                [13] https://baike.baidu.com/item/海笔<br />
                [14] https://baike.baidu.com/item/弓形革囊星虫<br />
                [15] https://baike.baidu.com/item/柳珊瑚<br />
                [16] https://baike.baidu.com/item/沙蚕<br />
                [17] https://baike.baidu.com/item/玳瑁<br />
                [18] https://baike.baidu.com/item/锯鳐科<br />
                [19] https://baike.baidu.com/item/柳叶鳗<br />
                [20] https://baike.baidu.com/item/鲥鱼<br />
                [21] https://baike.baidu.com/item/花鳗鲡<br />
                [22] https://baike.baidu.com/item/海马<br />
                [23] https://baike.baidu.com/item/海龙<br />
                [24] https://baike.baidu.com/item/斑海豹<br />
                [25] https://baike.baidu.com/item/水獺<br />
                [26] https://baike.baidu.com/item/露脊鲸<br />
                [27] baike.sogou.com/m/fullLemma?lid=461711<br />
                [28] https://baike.baidu.com/item/锤头双髻鲨<br />
                [29] https://baike.baidu.com/item/无沟双髻鲨<br />
                [30] https://baike.baidu.com/item/路氏双髻鲨<br />
                [31] https://baike.baidu.com/item/刀鲚<br />
                [32] https://baike.baidu.com/item/牡蛎礁<br />

                <div className="text-title">Image Sources</div>
                [33] en.namu.wiki<br />
                [34] loachloachap.hatenablog.com<br />
                [35] www.divessi.com<br />
                [36] aninu.de<br />
                [37] www.linkedin.com<br />
                [38] www.ifaw.org<br />
                [39] www.flickr.com<br />
                [40] k.sina.cn<br />
                [41] oceanomics.blogspot.com<br />
                [42] www.sohu.com<br />
                [43] www.disl.edu/<br />
                [44] sdg.iisd.org<br />
                [45] https://kknews.cc/<br />
                [46] http://www.eslitech.com/<br />
                [47] zh.wikipedia.org<br />
                [48] www.shutterstock.com<br />
                [49] lasaisonbleue.com<br />
                [50] www.chinapress.com.my<br />
                [51] http://aquaria.palo-alto.ca.us/<br />
                [52] www.enanyang.my<br />
                [53] wapbaike.baidu.com<br />
                [54] baike.baidu.com<br />
                [55] www.ifaw.org<br />
                [56] www.zooborns.com<br />
                [57] baike.baidu.com<br />
                [58] conchology.be<br />
                [59] en.yna.co.kr<br />
                [60] bk.chimelong.com<br />

                <div className="text-title">Audio Sources</div>
                The audio in this project was created using Suno.
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// 新增首页
// 首 - ex4
export const SectionFour = ({ onWheel }) => {
  return (
    <section 
      className="page-section" 
      id="section-ex-four" 
      style={{ 
        backgroundImage: `url('${process.env.PUBLIC_URL}/homepage/section-ex4-bg.png')`, 
        backgroundSize: "100% 100%", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat" 
      }} 
      onWheel={onWheel}
    >
      <div className="s8-page-container">
        {/* Text Container */}
        <div className="text-container" style={{ position: 'absolute', top: '8vh' }}>
          <div 
            className="text-content" 
            style={{ fontFamily: "'FZLanTing', serif", fontSize: '1.6vw', lineHeight: '1.2', fontWeight: '600' }}
          >
            古人眼中的海洋，与我们今日所见的，是否相同？<br />
          </div>
          <div 
            className="text-content" 
            style={{ fontFamily: "'Poppins', serif", fontSize: '1.6vw', lineHeight: '1.2', fontWeight: '600' }}
          >
            Is the ocean seen by the ancients the same as what we see today?<br />
          </div>
        </div>
      </div>
    </section>
  );
};

// 首 - ex5
export const SectionFive = ({ onWheel }) => {
  return (
    <section 
      className="page-section" 
      id="section-ex-five" 
      style={{ 
        backgroundImage: `url('${process.env.PUBLIC_URL}/homepage/section-ex5-bg.png')`, 
        backgroundSize: "100% 100%", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat" 
      }} 
      onWheel={onWheel}
    >
      <div className="s8-page-container">
        {/* Text Container */}
        <div className="text-container" style={{ position: 'absolute', top: '5vh' }}>
          <div 
            className="text-content" 
            style={{ fontFamily: "'FZLanTing', serif", fontSize: '1.6vw', lineHeight: '1.2', fontWeight: '600' }}
          >
            清代画家兼博物学家聂璜，将海洋生物的瑰丽与奇异凝结于《海错图》中。<br />
          </div>
          <div 
            className="text-content" 
            style={{ fontFamily: "'Poppins', serif", fontSize: '1.6vw', lineHeight: '1.2', fontWeight: '600' }}
          >
            Qing Dynasty painter and naturalist Nie Huang captured the splendor and<br />
            peculiarity of marine life in The &lt;HaiCuo Map&gt; .<br />
          </div>
        </div>
      </div>
    </section>
  );
};

// 首 - ex6
export const SectionSix = ({ onWheel }) => {
  return (
    <section 
      className="page-section" 
      id="section-ex-six" 
      style={{ 
        backgroundImage: `url('${process.env.PUBLIC_URL}/homepage/section-ex6-bg.png')`, 
        backgroundSize: "100% 100%", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat" 
      }} 
      onWheel={onWheel}
    >
      <div className="s8-page-container" style={{ height: '100vh' }}>
        {/* Text Container */}
        <div className="text-container" style={{ position: 'absolute', bottom: '5vh' }}>
          <div 
            className="text-content" 
            style={{ fontFamily: "'FZLanTing', serif", fontSize: '1.6vw', lineHeight: '1.2', fontWeight: '600', color: 'white' }}
          >
            时光流转，沧海桑田，我们是否还能在今日的海洋中，寻找到那些曾被古人描绘的奇异生物？<br />
          </div>
          <div 
            className="text-content" 
            style={{ fontFamily: "'Poppins', serif", fontSize: '1.6vw', lineHeight: '1.2', fontWeight: '600', color: 'white' }}
          >
            As time passes and the world changes, can we still find the extraordinary creatures<br />
            once depicted by the ancients in today's oceans?<br />
          </div>
        </div>
      </div>
    </section>
  );
};