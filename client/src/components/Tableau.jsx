import { useState } from 'react';
import '../App.css'; // Assuming these are global stylesheets
import '../solitaire.css'; // Additional stylesheet if needed

import cardBack from '../../public/images/cardBack.jpg';
import heartA from '../../public/images/heartA.jpg';

const Tableau = ({ onClick }) => {
  const numberOfCards = 20;
  const [topCardIndex, setTopCardIndex] = useState(numberOfCards - 1);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null); // State to track selected card index

  const handleCardClick = (index) => {
    if (index === topCardIndex) {
      setTopCardIndex(topCardIndex - 1);
      setSelectedCardIndex(index); // Set selected card index
      onClick(); // Trigger onClick function passed from parent
    }
  };

  return (
    <div className="card-stack-container">
      <div className="card-stack">
        {Array.from({ length: numberOfCards }, (_, index) => (
          <div
            key={index}
            className="card"
            style={{
              zIndex: numberOfCards - index,
              transform: index === topCardIndex ? `translate(-5px, -5px)` : `none`,
            }}
            onClick={() => handleCardClick(index)}
          >
            <img src={cardBack} alt="Card Back" className="card-image" />
            <div className="card-index">{index + 1}</div>
          </div>
        ))}
      </div>
      <div className="card-shaped-box">
        {selectedCardIndex !== null && (
          <img
            src={heartA}
            alt={`Card ${selectedCardIndex + 1}`}
            className="card-image"
          />
        )}
        Box 2
      </div>
    </div>
  );
};

export default Tableau;