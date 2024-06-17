import React, { useState } from 'react';
import '../App.css'; // Assuming these are global stylesheets
import '../solitaire.css'; // Additional stylesheet if needed

const StockPile = () => {
  const [boxClicked, setBoxClicked] = useState(false);
  const [currentNumber, setCurrentNumber] = useState(1);

  const handleClickBox1 = () => {
    setBoxClicked(true);
  };

  const handleClickBox2 = () => {
    if (currentNumber === 52) {
      setCurrentNumber(1); // Reset to 1 if it reaches 52
    } else {
      setCurrentNumber(currentNumber + 1); // Increment the current number
    }
  };

  return (
    <div className="stockpile-container">
      <div className="sp box1" onClick={handleClickBox1}>
        Box 1
      </div>
      {boxClicked && (
        <div className="sp box2" onClick={handleClickBox2}>
          {currentNumber}
        </div>
      )}
    </div>
  );
}

export default StockPile;