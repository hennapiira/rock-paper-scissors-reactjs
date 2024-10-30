import { useSpring, animated } from '@react-spring/web';
import rockImg from './images/rock.png';
import paperImg from './images/paper.png';
import scissorsImg from './images/scissors.png';

// UserChoice component allows users to select their choice for the game

const UserChoice = ({ onChoose, selectedChoice }) => {
  // Array of choices available in the game
  const choices = [
    { name: 'rock', image: rockImg },
    { name: 'paper', image: paperImg },
    { name: 'scissors', image: scissorsImg },
  ];

  const handleChoice = (chosen) => {
    onChoose(chosen.name); // Call onChoose function with the selected choice's name
  };

  return (
    <div className="choice-container">
      {choices.map((choice) => {
        // Setting up animation using react-spring based on user's selection
        const fadeAnimation = useSpring({
          opacity: selectedChoice && selectedChoice !== choice.name ? 0 : 1, // Fade out if not selected
          transform:
            selectedChoice && selectedChoice !== choice.name
              ? 'scale(0.5)' // Scale down if not selected
              : 'scale(1)', // Scale to original size if selected
          config: { tension: 220, friction: 20 }, // Animation configuration
        });

        return (
          <animated.button
            key={choice.name}
            onClick={() => handleChoice(choice)}
            style={fadeAnimation} // Apply animated styles
            className="choiceButton"
            disabled={selectedChoice && selectedChoice !== choice.name} // Disable button if another choice is selected
          >
            <img src={choice.image} alt={choice.name} />
          </animated.button>
        );
      })}
    </div>
  );
};

export default UserChoice;
