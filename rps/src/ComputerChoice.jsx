import { useState, useEffect } from 'react';
import rockImg from './images/rock.png';
import paperImg from './images/paper.png';
import scissorsImg from './images/scissors.png';

const ComputerChoice = ({ onComputerChoose }) => {
  const [computerChoice, setComputerChoice] = useState(null);
  const choices = [
    { name: 'rock', image: rockImg },
    { name: 'paper', image: paperImg },
    { name: 'scissors', image: scissorsImg },
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const chosen = choices[randomIndex];
    setComputerChoice(chosen);
    onComputerChoose(chosen.name);
  }, [onComputerChoose]);

  return (
    <div className="computer-container">
      {computerChoice ? (
        <img src={computerChoice.image} alt={computerChoice.name} />
      ) : (
        <h2>choosing...</h2>
      )}
    </div>
  );
};

export default ComputerChoice;
