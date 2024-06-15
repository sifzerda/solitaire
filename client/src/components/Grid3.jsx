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

  // Function to handle cell click and toggle its state
  function handleCellClick(rowIndex, colIndex) {
    const newGrid = [...grid]; // Create a copy of the grid
    newGrid[rowIndex][colIndex] = true; // Toggle the cell to true (clicked)
    setGrid(newGrid); // Update the state with the new grid
  }

  // Function to reset the grid to initial state (all cells unclicked)
  function resetGrid() {
    const newGrid = initializeGrid(10, 10); // Initialize a new grid
    setGrid(newGrid); // Update the state with the new grid
  }

  return (
    <div>
      <button className="reset-button" onClick={resetGrid}>Reset Grid</button>
      <div className="grid-container">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${cell ? 'alive' : 'dead'}`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
                {cell ? '💣' : ''}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;