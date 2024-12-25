import headbreaker from 'headbreaker';
import { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import "./Jigsaw.css";

function DemoPuzzle({ id, creature }) {
  const puzzleRef = useRef(null);
  const endangerment = creature.endangerment.level; // 根据濒危等级设置拼图难易程度（介于2~5）

  useEffect(() => {
    const puzzle = puzzleRef.current;
    const audio = new Audio('/detailspage/connect.wav');
    const creatureImage = new Image();
    creatureImage.src = creature.image;

    creatureImage.onload = () => {
      const keyboard = new headbreaker.Canvas(puzzle.id, {
        width: 1000,
        height: 500,
        pieceSize: 300 / endangerment,
        image: creatureImage,
        strokeWidth: 2.5, 
        strokeColor: '#F0F0F0',
        outline: new headbreaker.outline.Rounded(),
        preventOffstageDrag: true,
        fixed: true,
      });

      keyboard.adjustImagesToPuzzleHeight();
      keyboard.autogenerate({
        verticalPiecesCount: endangerment, 
        horizontalPiecesCount: Math.floor(creature.size.width / creature.size.height * endangerment),
        insertsGenerator: headbreaker.generators.random,
      });

      // Make canvas focusable and listen to ctrl and shift keys
      keyboard.registerKeyboardGestures();
      keyboard.shuffle(0.7); // TODO: 待更改打乱规则
      keyboard.draw();

      keyboard.onConnect((_piece, figure, _target, targetFigure) => {
        // Play sound
        audio.play();

        // Paint borders on click of connecting and connected figures
        figure.shape.stroke('yellow'); 
        targetFigure.shape.stroke('yellow');
        keyboard.redraw();

        setTimeout(() => {
          // Restore border colors later
          figure.shape.stroke(null);
          targetFigure.shape.stroke(null);
          keyboard.redraw();
        }, 200);
      });

      keyboard.onDisconnect(() => {
        audio.play();
      });
    };
  }, []);

  return <div ref={puzzleRef} id={id} className="puzzle-container"></div>
}

export default function Jigsaw({ creature }) {
  const navigate = useNavigate();

  return (
    <div className="jigsaw">
      {/* 学名容器 */}
      <div className="scientific-name-container">
        <div className="back-button-0" onClick={() => navigate("/")}>
          <img src={`${process.env.PUBLIC_URL}/detailspage/back-button.png`} alt="Back" />
        </div>
        <p className="scientific-name">
          {creature.name.zh}{creature.name.en} — {creature.scientificName.zh}{creature.scientificName.en}
        </p>
      </div>

      {/* 介绍容器 */}
      <div className="introduction-container">
        <div className="species-distribution">
          <p className="chinese">{creature.species.zh + "\n" + creature.distribution.zh}</p>
          <p className="english">{creature.species.en + "\n" + creature.distribution.en}</p>
        </div>
        <DemoPuzzle id="puzzle" creature={creature} />
      </div>
    </div>
  );
}