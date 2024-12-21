import headbreaker from 'headbreaker';
import { useEffect, useRef } from 'react';
import "./Jigsaw.css";

function DemoPuzzle({ id, creature }) {
  const puzzleRef = useRef(null);

  useEffect(() => {
    const puzzle = puzzleRef.current;
    const audio = new Audio('/detailspage/connect.wav');
    const amaral = new Image();
    amaral.src = creature.image;

    amaral.onload = () => {
      const keyboard = new headbreaker.Canvas(puzzle.id, {
        width: 800,
        height: 650,
        pieceSize: 100,
        image: amaral,
        strokeWidth: 2.5,
        strokeColor: '#F0F0F0',
        outline: new headbreaker.outline.Rounded(),
      });

      keyboard.adjustImagesToPuzzleWidth();
      keyboard.autogenerate({
        horizontalPiecesCount: 3,
        verticalPiecesCount: 3,
        insertsGenerator: headbreaker.generators.random,
      });

      // Make canvas focusable and listen to ctrl and shift keys
      keyboard.registerKeyboardGestures();
      keyboard.shuffle(0.7);
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
  return (
    <div className='jigsaw'>
      <h1>{creature.name}</h1>
      <DemoPuzzle id="puzzle" creature={creature} />
    </div>
  );
}
