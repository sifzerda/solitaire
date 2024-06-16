
import  '../App';  

const Grid = () => {
  // Create a 2D array to represent the grid
  const rows = 5;
  const cols = 5;
  const grid = Array(rows).fill().map(() => Array(cols).fill(false)); // Initialize with false (or any initial state)

  return (
    <div className="grid-container">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div key={colIndex} className="cell">
              {/* You can render content or styles inside each cell here */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;