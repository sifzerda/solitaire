import { useState, useEffect } from 'react';
import '../App.css';

function Grid() {
  const [cellContent, setCellContent] = useState(Array(10).fill().map(() => Array(10).fill({ value: 0, revealed: false })));
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    initializeGrid();
  }, []);

  const initializeGrid = () => {
    const newCellContent = Array(10).fill().map(() => Array(10).fill({ value: 0, revealed: false }));

    // Place 10 bombs randomly
    let bombsPlaced = 0;
    while (bombsPlaced < 10) {
      const row = Math.floor(Math.random() * 10);
      const col = Math.floor(Math.random() * 10);

      if (newCellContent[row][col].value === 0) {
        newCellContent[row][col].value = '💣';
        bombsPlaced++;
      }
    }

    // Calculate numbers around bombs
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (newCellContent[i][j].value === '💣') {
          // Increment surrounding cells
          for (let di = -1; di <= 1; di++) {
            for (let dj = -1; dj <= 1; dj++) {
              const ni = i + di;
              const nj = j + dj;
              if (ni >= 0 && ni < 10 && nj >= 0 && nj < 10 && newCellContent[ni][nj].value !== '💣') {
                newCellContent[ni][nj].value++;
              }
            }
          }
        }
      }
    }

    setCellContent(newCellContent);
    setGameOver(false);
  };

  const handleCellClick = (row, col) => {
    if (gameOver || cellContent[row][col].revealed) return;

    const newCellContent = [...cellContent];

    // If cell contains a bomb, game over
    if (newCellContent[row][col].value === '💣') {
      setGameOver(true);
      revealAllCells(newCellContent); // Reveal all cells when game over
      return;
    }

    // Recursive function to reveal neighboring cells if they are empty
    const revealCells = (r, c) => {
      if (r < 0 || r >= 10 || c < 0 || c >= 10 || newCellContent[r][c].revealed || newCellContent[r][c].value === '💣') {
        return;
      }

      newCellContent[r][c].revealed = true;

      // If the cell is empty, recursively reveal neighboring cells
      if (newCellContent[r][c].value === 0) {
        revealCells(r - 1, c); // Top
        revealCells(r + 1, c); // Bottom
        revealCells(r, c - 1); // Left
        revealCells(r, c + 1); // Right
        revealCells(r - 1, c - 1); // Top Left
        revealCells(r - 1, c + 1); // Top Right
        revealCells(r + 1, c - 1); // Bottom Left
        revealCells(r + 1, c + 1); // Bottom Right
      }
    };

    revealCells(row, col);

    setCellContent(newCellContent);
  };

  const revealAllCells = (grid) => {
    const newCellContent = grid.map(row => row.map(cell => ({ ...cell, revealed: true })));
    setCellContent(newCellContent);
  };

  // Create the grid UI
  const gridUI = cellContent.map((row, rowIndex) => (
    <div key={rowIndex} className="row">
      {row.map((cell, colIndex) => (
        <button
          key={`${rowIndex}-${colIndex}`}
          className={`cell ${cell.revealed ? 'revealed' : ''} ${cell.value === '💣' && gameOver ? 'bomb' : ''}`}
          onClick={() => handleCellClick(rowIndex, colIndex)}
        >
          {cell.revealed ? (cell.value === '💣' ? '💣' : (cell.value === 0 ? '' : cell.value)) : ''}
        </button>
      ))}
    </div>
  ));

  return (
    <div className="grid">
      {gameOver && <div className="game-over">Game Over!</div>}
      {gridUI}
      <button className="restart-button" onClick={initializeGrid}>Restart Game</button>
    </div>
  );
}

export default Grid;