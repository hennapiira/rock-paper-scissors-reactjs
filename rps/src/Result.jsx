import { useEffect, useState } from 'react';

const Result = ({ userChoice, computerChoice, playAgain }) => {
  const [result, setResult] = useState('');

  useEffect(() => {
    if (userChoice && computerChoice) {
      calculateResult();
    }
  }, [userChoice, computerChoice]);

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

  const resultClass =
    result === "It's a draw!"
      ? 'result-draw'
      : result === 'You win!'
      ? 'result-win'
      : result === 'You lose!'
      ? 'result-lose'
      : '';

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
