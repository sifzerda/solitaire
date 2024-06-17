import { useState } from 'react';
import '../App.css'; // Stylesheet for the solitaire game
import '../solitaire.css';


const StockPile = () => {
    const [boxClicked, setBoxClicked] = useState(false);

    const handleClick = () => {
      setBoxClicked(true);
    };
  
    return (
      <div className="stockpile-container">
        <div className="sp box1" onClick={handleClick}>
          Box 1
        </div>
        {boxClicked && (
          <div className="sp box2">
            Box 2
          </div>
        )}
      </div>
    );
  }

export default StockPile;