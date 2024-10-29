import { useState } from 'react';
import UserChoice from './UserChoice';
import ComputerChoice from './ComputerChoice';
import Result from './Result';

const Game = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [showComputerChoice, setShowComputerChoice] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    setShowComputerChoice(true);
  };

  const handleComputerChoice = (choice) => {
    setComputerChoice(choice);
    setShowResult(true);
  };

  const handlePlayAgain = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setShowComputerChoice(false);
    setShowResult(false);
  };

  return (
    <div>
      {showComputerChoice ? (
        <ComputerChoice onComputerChoose={handleComputerChoice} />
      ) : (
        <h2 className="pickOne">Pick one</h2>
      )}
      <UserChoice onChoose={handleUserChoice} selectedChoice={userChoice} />
      {showResult ? (
        <Result
          userChoice={userChoice}
          computerChoice={computerChoice}
          playAgain={handlePlayAgain}
        />
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Game;
