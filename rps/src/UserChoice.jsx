import { useSpring, animated } from '@react-spring/web';
import rockImg from './images/rock.png';
import paperImg from './images/paper.png';
import scissorsImg from './images/scissors.png';

const UserChoice = ({ onChoose, selectedChoice }) => {
  const choices = [
    { name: 'rock', image: rockImg },
    { name: 'paper', image: paperImg },
    { name: 'scissors', image: scissorsImg },
  ];

  const handleChoice = (chosen) => {
    onChoose(chosen.name);
  };

  return (
    <div className="choice-container">
      {choices.map((choice) => {
        const fadeAnimation = useSpring({
          opacity: selectedChoice && selectedChoice !== choice.name ? 0 : 1,
          transform:
            selectedChoice && selectedChoice !== choice.name
              ? 'scale(0.5)'
              : 'scale(1)',
          config: { tension: 220, friction: 20 },
        });

        return (
          <animated.button
            key={choice.name}
            onClick={() => handleChoice(choice)}
            style={fadeAnimation}
            className="choiceButton"
            disabled={selectedChoice && selectedChoice !== choice.name}
          >
            <img src={choice.image} alt={choice.name} />
          </animated.button>
        );
      })}
    </div>
  );
};

export default UserChoice;
