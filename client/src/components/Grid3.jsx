import { useState } from 'react';
import '../App.css'; // Assuming you have a CSS file for styling

function Grid() {
  const numRows = 10;
  const numCols = 10;
  const numCheckmarks = 50;
  const numBombs = numRows * numCols - numCheckmarks; // Calculate number of bombs

  // Initialize grid with 10 rows and 10 columns
  const [grid, setGrid] = useState(() => initializeGrid(numRows, numCols));

  // Function to initialize the grid with checkmarks and bombs
  function initializeGrid(rows, cols) {
    let grid = [];
    for (let i = 0; i < rows; i++) {
      grid.push(Array(cols).fill(false)); // Initially setting all cells to false (or any initial value you prefer)
    }
    placeCheckmarksAndBombs(grid, rows, cols);
    return grid;
  }

  // Function to randomly place checkmarks and bombs in the grid
  function placeCheckmarksAndBombs(grid, rows, cols) {
    let checkmarkCount = 0;
    let bombCount = 0;
    while (checkmarkCount < numCheckmarks) {
      const randomRow = Math.floor(Math.random() * rows);
      const randomCol = Math.floor(Math.random() * cols);
      if (!grid[randomRow][randomCol]) {
        grid[randomRow][randomCol] = true; // Place a checkmark
        checkmarkCount++;
      }
    }
    while (bombCount < numBombs) {
      const randomRow = Math.floor(Math.random() * rows);
      const randomCol = Math.floor(Math.random() * cols);
      if (!grid[randomRow][randomCol]) {
        grid[randomRow][randomCol] = 'bomb'; // Place a bomb
        bombCount++;
      }
    }
  }

  // Function to handle cell click and toggle its state
  function handleCellClick(rowIndex, colIndex) {
    if (grid[rowIndex][colIndex] === 'bomb') {
      const newGrid = [...grid]; // Create a copy of the grid
      newGrid[rowIndex][colIndex] = 'clickedBomb'; // Set state to show bomb emoji
      setGrid(newGrid); // Update the state with the new grid
      setTimeout(() => {
        alert('You clicked a bomb! Game over.'); // Alert after displaying bomb emoji
        resetGrid(); // Reset the grid after game over
      }, 500);
    } else {
      const newGrid = [...grid]; // Create a copy of the grid
      newGrid[rowIndex][colIndex] = !newGrid[rowIndex][colIndex]; // Toggle the cell state
      setGrid(newGrid); // Update the state with the new grid
    }
  }

  // Function to reset the grid to initial state (all cells unclicked)
  function resetGrid() {
    const newGrid = initializeGrid(numRows, numCols); // Initialize a new grid with checkmarks and bombs in new positions
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
                className={`cell ${cell === true ? 'checked' : cell === 'bomb' ? 'bomb' : cell === 'clickedBomb' ? 'clicked-bomb' : ''}`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              >
                {cell === true ? '✔️' : cell === 'clickedBomb' ? '💣' : ''}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;