import { useState, useEffect } from 'react';
import rockImg from './images/rock.png';
import paperImg from './images/paper.png';
import scissorsImg from './images/scissors.png';

const ComputerChoice = ({ onComputerChoose }) => {
  const choices = [
    { name: 'rock', image: rockImg },
    { name: 'paper', image: paperImg },
    { name: 'scissors', image: scissorsImg },
  ];
  const [computerChoice, setComputerChoice] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const chosen = choices[randomIndex];
    setComputerChoice(chosen);
    onComputerChoose(chosen.name);
  }, [onComputerChoose]);

  return (
    <div id="ComputerContainer">
      <p>Computer chose:</p>
      {computerChoice ? (
        <img src={computerChoice.image} alt={computerChoice.name} />
      ) : (
        <p>Choosing...</p>
      )}
    </div>
  );
};

export default ComputerChoice;
