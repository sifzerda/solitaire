import { useState } from 'react';
import '../App.css'; // Assuming these are global stylesheets
import '../solitaire.css'; // Additional stylesheet if needed

import cardBack from '../../public/images/cardBack.jpg';

import heartA from '../../public/images/heartA.jpg';
import heart2 from '../../public/images/heart2.jpg';
import heart3 from '../../public/images/heart3.jpg';
import heart4 from '../../public/images/heart4.jpg';
import heart5 from '../../public/images/heart5.jpg';
import heart6 from '../../public/images/heart6.jpg';
import heart7 from '../../public/images/heart7.jpg';
import heart8 from '../../public/images/heart8.jpg';
import heart9 from '../../public/images/heart9.jpg';
import heart10 from '../../public/images/heart10.jpg';
import heartJ from '../../public/images/heartJ.jpg';
import heartQ from '../../public/images/heartQ.jpg';
import heartK from '../../public/images/heartK.jpg';

import clubA from '../../public/images/clubA.jpg';
import club2 from '../../public/images/club2.jpg';
import club3 from '../../public/images/club3.jpg';
import club4 from '../../public/images/club4.jpg';
import club5 from '../../public/images/club5.jpg';
import club6 from '../../public/images/club6.jpg';
import club7 from '../../public/images/club7.jpg';
import club8 from '../../public/images/club8.jpg';
import club9 from '../../public/images/club9.jpg';
import club10 from '../../public/images/club10.jpg';
import clubJ from '../../public/images/clubJ.jpg';
import clubQ from '../../public/images/clubQ.jpg';
import clubK from '../../public/images/clubK.jpg';

import diamondA from '../../public/images/diamondA.jpg';
import diamond2 from '../../public/images/diamond2.jpg';
import diamond3 from '../../public/images/diamond3.jpg';
import diamond4 from '../../public/images/diamond4.jpg';
import diamond5 from '../../public/images/diamond5.jpg';
import diamond6 from '../../public/images/diamond6.jpg';
import diamond7 from '../../public/images/diamond7.jpg';
import diamond8 from '../../public/images/diamond8.jpg';
import diamond9 from '../../public/images/diamond9.jpg';
import diamond10 from '../../public/images/diamond10.jpg';
import diamondJ from '../../public/images/diamondJ.jpg';
import diamondQ from '../../public/images/diamondQ.jpg';
import diamondK from '../../public/images/diamondK.jpg';

import spadeA from '../../public/images/spadeA.jpg';
import space2 from '../../public/images/spade2.jpg';
import spade3 from '../../public/images/spade3.jpg';
import spade4 from '../../public/images/spade4.jpg';
import spade5 from '../../public/images/spade5.jpg';
import spade6 from '../../public/images/spade6.jpg';
import spade7 from '../../public/images/spade7.jpg';
import spade8 from '../../public/images/spade8.jpg';
import spade9 from '../../public/images/spade9.jpg';
import spade10 from '../../public/images/spade10.jpg';
import spadeJ from '../../public/images/spadeJ.jpg';
import spadeQ from '../../public/images/spadeQ.jpg';
import spadeK from '../../public/images/spadeK.jpg';

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
            <h5>Stock Pile</h5>
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