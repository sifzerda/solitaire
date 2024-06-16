import React, { useState } from 'react';
import '../App.css';

const Grid = () => {
  const rows = 5;
  const cols = 5;
  const totalCells = rows * cols;
  const totalBombs = 3;

  const generateInitialGrid = () => {
    return Array(rows).fill().map((row, rowIndex) =>
      Array(cols).fill().map((cell, colIndex) => ({
        id: rowIndex * cols + colIndex + 1,
        active: true,
        isBomb: false,
        bombsAround: 0,
        content: null
      }))
    );
  };

  const [grid, setGrid] = useState(generateInitialGrid());
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (row, col) => {
    if (!grid[row][col].active || gameOver) return;
  
    const newGrid = [...grid];
    if (newGrid[row][col].isBomb) {
      newGrid[row][col].content = '💣';
      setGrid(newGrid);
      setGameOver(true);
      setTimeout(() => {
        alert('You clicked a bomb! Game over.');
        generateNewGrid();
        setGameOver(false);
      }, 500);
    } else {
      uncoverCell(newGrid, row, col);
      setGrid(newGrid);
  
      // Check win condition
      const remainingActiveCells = newGrid.reduce((count, row) => {
        return count + row.filter(cell => cell.active && !cell.isBomb).length;
      }, 0);
  
      if (remainingActiveCells === 0) {
        setTimeout(() => {
          alert('Congratulations! You win!');
          generateNewGrid(); // Regenerate the grid for the next game
        }, 500);
      }
    }
  };

  const generateNewGrid = () => {
    const newGrid = generateInitialGrid();

    let bombsPlaced = 0;
    while (bombsPlaced < totalBombs) {
      const randomRow = Math.floor(Math.random() * rows);
      const randomCol = Math.floor(Math.random() * cols);
      if (!newGrid[randomRow][randomCol].isBomb) {
        newGrid[randomRow][randomCol].isBomb = true;
        bombsPlaced++;
      }
    }

    newGrid.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (!cell.isBomb) {
          cell.bombsAround = countBombsAround(newGrid, rowIndex, colIndex);
          if (cell.bombsAround > 0) {
            cell.content = cell.bombsAround.toString();
          }
        }
      });
    });

    setGrid(newGrid);
  };

  const countBombsAround = (grid, row, col) => {
    let count = 0;
    for (let i = Math.max(0, row - 1); i <= Math.min(rows - 1, row + 1); i++) {
      for (let j = Math.max(0, col - 1); j <= Math.min(cols - 1, col + 1); j++) {
        if (grid[i][j].isBomb) {
          count++;
        }
      }
    }
    return count;
  };

  const uncoverCell = (grid, row, col) => {
    if (!grid[row][col].active) return;

    grid[row][col].active = false;

    if (grid[row][col].bombsAround === 0) {
      for (let i = Math.max(0, row - 1); i <= Math.min(rows - 1, row + 1); i++) {
        for (let j = Math.max(0, col - 1); j <= Math.min(cols - 1, col + 1); j++) {
          if (grid[i][j].active && !grid[i][j].isBomb) {
            uncoverCell(grid, i, j);
          }
        }
      }
    }
  };

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className="grid-container">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${!cell.active ? 'inactive' : ''}`}
                onClick={() => handleClick(rowIndex, colIndex)}
              >
                {cell.content}
              </div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default Grid;