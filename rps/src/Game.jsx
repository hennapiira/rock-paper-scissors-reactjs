import { useState, useEffect } from 'react';
import UserChoice from './UserChoice';
import ComputerChoice from './ComputerChoice';

const Game = () => {
  const [result, setResult] = useState('');
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [showComputerChoice, setShowComputerChoice] = useState(false);

  const calculateResult = () => {
    if (userChoice === computerChoice) {
      setResult("It's a draw!");
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'scissors' && computerChoice === 'paper') ||
      (userChoice === 'paper' && computerChoice === 'rock')
    ) {
      setResult('You win!');
    } else {
      setResult('You lose!');
    }
  };

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    setShowComputerChoice(true);
  };

  const handleComputerChoice = (choice) => {
    setComputerChoice(choice);
    calculateResult();
  };

  return (
    <div>
      {showComputerChoice && (
        <ComputerChoice onComputerChoose={handleComputerChoice} />
      )}
      <UserChoice onChoose={handleUserChoice} />
      <p>Result: {result}</p>
    </div>
  );
};

export default Game;
