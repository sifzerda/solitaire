import React, { useState, useEffect } from 'react';
import '../App.css'; // Assuming App.css is your stylesheet for styling

const Grid = () => {
  const rows = 5;
  const cols = 5;

  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], /* mine */ [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];

  const generateInitialGrid = () => {
    return Array(rows).fill().map((_, rowIndex) =>
      Array(cols).fill().map((_, colIndex) => ({
        id: rowIndex * cols + colIndex + 1,
        active: true,
        content: '',
        revealed: false, // Track if cell content has been revealed
        flagged: false // Track if cell has been flagged
      }))
    );
  };

  const [grid, setGrid] = useState(generateInitialGrid());
  const [nonBombCellsCount, setNonBombCellsCount] = useState(rows * cols - 3); // Total cells minus 3 bombs
  const [revealedNonBombCount, setRevealedNonBombCount] = useState(0);

  useEffect(() => {
    checkWinCondition();
  }, [revealedNonBombCount]);

  const handleClick = (row, col) => {
    const cell = grid[row][col];

    if (!cell.active || cell.revealed) {
      return; // Do nothing if cell is inactive or already revealed
    }

    const newGrid = [...grid];

    if (cell.content === 'X') {
      // Clicked on a bomb
      newGrid.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          if (cell.content === 'X') {
            newGrid[rowIndex][colIndex].content = '💣';
            newGrid[rowIndex][colIndex].active = false;
            newGrid[rowIndex][colIndex].revealed = true;
          }
        });
      });

      setGrid(newGrid);

      setTimeout(() => {
        alert('You clicked a bomb! Game over.');
        generateNewGrid();
      }, 500);
    } else {
      // Clicked on a non-bomb cell
      const revealEmptyCells = (r, c) => {
        if (newGrid[r][c].revealed) return;
        newGrid[r][c].revealed = true;
        setRevealedNonBombCount(prevCount => prevCount + 1); // Increment count of revealed non-bomb cells
        if (newGrid[r][c].content === '') {
          directions.forEach(([dRow, dCol]) => {
            const newRow = r + dRow;
            const newCol = c + dCol;
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
              revealEmptyCells(newRow, newCol);
            }
          });
        }
      };
      revealEmptyCells(row, col);
      setGrid(newGrid);
    }
  };

  const handleRightClick = (event, row, col) => {
    event.preventDefault(); // Prevent the context menu from showing up

    if (!grid[row][col].active || grid[row][col].revealed) {
      return; // Do nothing if cell is inactive or already revealed
    }

    const newGrid = [...grid];
    newGrid[row][col].flagged = !newGrid[row][col].flagged;
    setGrid(newGrid);
  };

  const generateNewGrid = () => {
    const newGrid = generateInitialGrid();

    const randomCells = [];
    while (randomCells.length < 3) {
      const randomRow = Math.floor(Math.random() * rows);
      const randomCol = Math.floor(Math.random() * cols);
      if (!randomCells.some(cell => cell.row === randomRow && cell.col === randomCol)) {
        randomCells.push({ row: randomRow, col: randomCol });
      }
    }

    randomCells.forEach(cell => {
      newGrid[cell.row][cell.col].content = 'X';
    });

    newGrid.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell.content !== 'X') {
          let bombCount = 0;
          directions.forEach(([dRow, dCol]) => {
            const newRow = rowIndex + dRow;
            const newCol = colIndex + dCol;
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
              if (newGrid[newRow][newCol].content === 'X') {
                bombCount++;
              }
            }
          });
          cell.content = bombCount > 0 ? bombCount.toString() : '';
        }
      });
    });

    setGrid(newGrid);
    setRevealedNonBombCount(0);
  };

  const checkWinCondition = () => {
    if (revealedNonBombCount === nonBombCellsCount) {
      alert('You won!');
    }
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
                onContextMenu={(event) => handleRightClick(event, rowIndex, colIndex)}
              >
                {cell.revealed ? cell.content : cell.flagged ? '🚩' : ''}
              </div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={generateNewGrid}>Restart</button>
    </div>
  );
};

export default Grid;