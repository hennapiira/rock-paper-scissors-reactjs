import { useState } from 'react';
import UserChoice from './UserChoice';
import ComputerChoice from './ComputerChoice';
import Result from './Result';

// Game component manages the main logic for the game

const Game = () => {
  // State to hold the user's choice
  const [userChoice, setUserChoice] = useState(null);
  // State to hold the computer's choice
  const [computerChoice, setComputerChoice] = useState(null);
  // State to control the visibility of the computer's choice
  const [showComputerChoice, setShowComputerChoice] = useState(false);
  // State to control the visibility of the result
  const [showResult, setShowResult] = useState(false);

  const handleUserChoice = (choice) => {
    setUserChoice(choice); // Update userChoice state
    setShowComputerChoice(true); // Show computer choice
  };

  const handleComputerChoice = (choice) => {
    setComputerChoice(choice); // Update computerChoice state
    setShowResult(true); // Show the result of the game
  };

  // Function to reset the game and states
  const handlePlayAgain = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setShowComputerChoice(false);
    setShowResult(false);
  };

  return (
    <div>
      {showComputerChoice ? (
        // If showComputerChoice's state is true, render the ComputerChoice component
        <ComputerChoice onComputerChoose={handleComputerChoice} />
      ) : (
        // If not, prompt the user to pick one
        <h2 className="pickOne">Pick one</h2>
      )}
      <UserChoice onChoose={handleUserChoice} selectedChoice={userChoice} />
      {showResult ? (
        // If showResult's state is true, render the Result component
        <Result
          userChoice={userChoice}
          computerChoice={computerChoice}
          playAgain={handlePlayAgain}
        />
      ) : // If not, render nothing
      null}
    </div>
  );
};

export default Game;
