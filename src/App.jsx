import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [playerChoice, setPlayerChoice] = useState("✊");
  const [computerChoice, setComputerChoice] = useState("✊");
  const [playerPoints, setPlayerPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState("currently draw");

  const choices = ["✊", "✋", "✌️"];

  const handleOnClick = (choice) => {
    setPlayerChoice(choice);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  useEffect(() => {
    const comboMoves = computerChoice + playerChoice;
    if (
      comboMoves === "✊✌️" ||
      comboMoves === "✋✊" ||
      comboMoves === "✌️✋"
    ) {
      const updatedPlayerPoints = playerPoints + 1;
      setPlayerPoints(updatedPlayerPoints);
      setTurnResult("player wins");
    }

    if (
      comboMoves === "✋✌️" ||
      comboMoves === "✌️✊" ||
      comboMoves === "✊✋"
    ) {
      const updatedComputerPoints = computerPoints + 1;
      setComputerPoints(updatedComputerPoints);
      setTurnResult("computer wins");
    }

    if (
      comboMoves === "✋✋" ||
      comboMoves === "✌️✌️" ||
      comboMoves === "✊✊"
    ) {
      setTurnResult("draw");
    }
  }, [playerChoice, computerChoice]);

  return (
    <>
      <div className="my-container">
        <h1 className="heading">rock paper scissors</h1>
        <div className="scores">
          <h1>player score :{playerPoints}</h1>
          <h1>computer score :{computerPoints}</h1>
        </div>
        <div className="computerDisplay">player</div>
        <h2 className="computer">{computerChoice}</h2>
        <div className="resultDisplay">
          <h2 className="result">{turnResult}</h2>
        </div>
        <div className="playerDisplay">computer</div>
        <h2 className="player">{playerChoice}</h2>

        <div children="button-div">
          {choices.map((choice, index) => (
            <button
              className="button"
              key={index}
              onClick={() => handleOnClick(choice)}
            >
              {choice}
            </button>
          ))}
          ;
        </div>
      </div>
    </>
  );
}

export default App;
