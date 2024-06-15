import { useState } from 'react';
import '../App.css'; // Assuming you have a CSS file for styling

function Grid() {
    // Initialize grid with 10 rows and 10 columns
    const [grid, setGrid] = useState(() => initializeGrid(10, 10));
  
    // Function to initialize the grid with empty values
    function initializeGrid(rows, cols) {
      let grid = [];
      for (let i = 0; i < rows; i++) {
        grid.push(Array(cols).fill(false)); // Initially setting all cells to false (or any initial value you prefer)
      }
      return grid;
    }
  
    return (
      <div className="grid-container">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div key={colIndex} className={`cell ${cell ? 'alive' : 'dead'}`}>
                {/* You can put content or additional components inside the cell */}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  
  export default Grid;