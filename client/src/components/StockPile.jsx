import { useState } from 'react';
import '../App.css'; // Global stylesheets
import '../solitaire.css'; // Additional stylesheet if needed

import cardBack from '../../public/images/cardBack.jpg';
import heartA from '../../public/images/heartA.jpg';
import clubA from '../../public/images/clubA.jpg';
import diamondA from '../../public/images/diamondA.jpg';
import spadeA from '../../public/images/spadeA.jpg';

const StockPile = () => {
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
    <div className="stockpile-container">
      <div className="sp box1 card-shaped" onClick={handleClickBox1}>
        {/* Example image for Box 1 */}
        <img src={cardBack} alt="Box 1 Image" />
      </div>
      {boxClicked && (
        <div className="sp box2 card-shaped" onClick={handleClickBox2}>
          {/* Dynamic image for Box 2 styled like a playing card */}
          <img src={getImageForBox2()} alt="Box 2 Image" className="playing-card" />
        </div>
      )}
    </div>
  );
};

export default StockPile;