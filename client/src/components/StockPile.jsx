import { useState } from 'react';
import '../App.css'; // Assuming these are global stylesheets
import '../solitaire.css'; // Additional stylesheet if needed

import cardBack from '../../public/images/cardBack.jpg';
import heartA from '../../public/images/heartA.jpg';
import clubA from '../../public/images/clubA.jpg';
import diamondA from '../../public/images/diamondA.jpg';
import spadeA from '../../public/images/spadeA.jpg';

const StockPile = () => {
  const numberOfCards = 20;
  const topCardIndex = numberOfCards - 1;

  const [boxClicked, setBoxClicked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Index to track the current image
  const handleClickBox1 = () => {
    setBoxClicked(true);
  };
  const handleClickBox2 = () => {
    setCurrentImageIndex((currentImageIndex + 1) % 4); // Cycle through 0, 1, 2, 3 (indices of images)
  };

  const getImageForBox2 = () => {
    switch (currentImageIndex) {
      case 0:
        return heartA;
      case 1:
        return clubA;
      case 2:
        return diamondA;
      case 3:
        return spadeA;
      default:
        return heartA; // Default to heartA.jpg if index is out of range (though it shouldn't happen)
    }
  };

  return (
    <div className="card-stack-container">
      <div className="card-stack" onClick={handleClickBox1}>
        {Array.from({ length: numberOfCards }, (_, index) => (
          <div
            key={index}
            className="card"
            style={{
              zIndex: numberOfCards - index,
              transform: index === topCardIndex ? `translate(-5px, -5px)` : `none`,
            }}
          >
            <img src={cardBack} alt="Card Back" className="card-image" />
            <div className="card-index">{index + 1}</div>
          </div>
        ))}
      </div>

              {/* image for Box 1 
      <div className="card-shaped-box">
        Box 2
      </div>*/}


      {boxClicked && (
        <div className="card-shaped-box" onClick={handleClickBox2}>
          {/* Dynamic image for Box 2 styled like a playing card */}
          <img src={getImageForBox2()} alt="Box 2 Image" className="card-image" />
        </div>
      )}



    </div>
  );
};

export default StockPile;