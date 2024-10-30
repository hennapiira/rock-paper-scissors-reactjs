import { useState, useEffect } from 'react';
import rockImg from './images/rock.png';
import paperImg from './images/paper.png';
import scissorsImg from './images/scissors.png';

// ComputerChoice component allows computer to select their choice for the game

const ComputerChoice = ({ onComputerChoose }) => {
  // State to hold the computer's choice
  const [computerChoice, setComputerChoice] = useState(null);

  // Array of possible choices with their corresponding images
  const choices = [
    { name: 'rock', image: rockImg },
    { name: 'paper', image: paperImg },
    { name: 'scissors', image: scissorsImg },
  ];

  useEffect(() => {
    /* Generate a random index based on the choices array length
     and select the computer's choice based on the random index */
    const randomIndex = Math.floor(Math.random() * choices.length);
    const chosen = choices[randomIndex];
    setComputerChoice(chosen);
    // Call the onComputerChoose callback function with the name of the chosen option
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
