import { useEffect, useState } from 'react';

// Result component to display the outcome of the game

const Result = ({ userChoice, computerChoice, playAgain }) => {
  // State to hold the result of the game
  const [result, setResult] = useState('');

  useEffect(() => {
    if (userChoice && computerChoice) {
      calculateResult(); // Call function to calculate the result
    }
  }, [userChoice, computerChoice]);

  // Function to calculate the result of the game based on user and computer choices
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

  // Determine the CSS class for the result based on the outcome
  const resultClass =
    result === "It's a draw!"
      ? 'result-draw' // Class for draw result
      : result === 'You win!'
      ? 'result-win' // Class for win result
      : result === 'You lose!'
      ? 'result-lose' // Class for lose result
      : ''; // Default class if no result

  return (
    <div className="result-container">
      <h2 className={resultClass}>{result}</h2>
      <button onClick={playAgain} className="playAgainButton">
        Play again
      </button>
    </div>
  );
};

export default Result;
