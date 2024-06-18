import { useState } from 'react';
import '../App.css'; // Assuming these are global stylesheets
import '../solitaire.css'; // Additional stylesheet if needed

import cardBack from '../../public/images/cardBack.jpg';

const Tableau = ({ onClick }) => {
  const numberOfCards = 20;
  const [topCardIndex, setTopCardIndex] = useState(numberOfCards - 1);
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  const handleCardClick = () => {
    if (topCardIndex > 0) {
      setTopCardIndex(topCardIndex - 1);
      onClick(); // Trigger onClick function passed from parent
    }
  };

  return (
    <div className="card-stack-container">
      <div
        className="card-stack"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {Array.from({ length: numberOfCards }, (_, index) => (
          <div
            key={index}
            className="card"
            style={{
              zIndex: numberOfCards - index,
              transform: index === topCardIndex ? `translate(-5px, -5px)` : `none`,
            }}
            onClick={index === topCardIndex ? handleCardClick : null}
          >
            <img src={cardBack} alt="Card Back" className="card-image" />
            <div className="card-index">{index + 1}</div>
          </div>
        ))}
      </div>
      <div className={`card-shaped-box ${isHovered ? 'hovered' : ''}`}>
        Box 2
      </div>
    </div>
  );
};

export default Tableau;