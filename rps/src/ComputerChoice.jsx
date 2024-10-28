import { useState, useEffect } from 'react';

const ComputerChoice = ({ onComputerChoose }) => {
  const choices = ['rock', 'paper', 'scissors'];
  const [computerChoice, setComputerChoice] = useState();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const choice = choices[randomIndex];
    setComputerChoice(choice);
    onComputerChoose(choice);
  }, [onComputerChoose]);

  return (
    <div>
      <p>Computer chose: {computerChoice}</p>
    </div>
  );
};

export default ComputerChoice;
