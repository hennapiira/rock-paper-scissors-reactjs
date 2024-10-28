import { useState } from 'react';

const UserChoice = ({ onChoose }) => {
  const choices = ['rock', 'paper', 'scissors'];
  const [choice, setChoice] = useState();

  const handleChoice = (choice) => {
    setChoice(choice);
    onChoose(choice);
  };

  return (
    <div>
      {choices.map((choice) => (
        <button key={choice} onClick={() => handleChoice(choice)}>
          {choice}
        </button>
      ))}
      <p>You choose {choice}</p>
    </div>
  );
};

export default UserChoice;
