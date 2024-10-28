import { useState } from 'react';
import rockImg from './images/rock.png';
import paperImg from './images/paper.png';
import scissorsImg from './images/scissors.png';

const UserChoice = ({ onChoose }) => {
  const choices = [
    { name: 'rock', image: rockImg },
    { name: 'paper', image: paperImg },
    { name: 'scissors', image: scissorsImg },
  ];

  const handleChoice = (chosen) => {
    onChoose(chosen.name);
  };

  return (
    <div id="choiceContainer">
      {choices.map((choice) => (
        <button
          key={choice.name}
          onClick={() => handleChoice(choice)}
          className="choiceButton"
        >
          <img src={choice.image} alt={choice.name} />
        </button>
      ))}
    </div>
  );
};

export default UserChoice;
