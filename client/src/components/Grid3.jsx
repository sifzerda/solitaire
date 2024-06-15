import React from 'react';
import '../App.css'; // Assuming you have a CSS file for styling

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: this.initializeGrid(10, 10), // Initialize grid with 10 rows and 10 columns
    };
  }

  // Function to initialize the grid with empty values
  initializeGrid(rows, cols) {
    let grid = [];
    for (let i = 0; i < rows; i++) {
      grid.push(Array(cols).fill(false)); // Initially setting all cells to false (or any initial value you prefer)
    }
    return grid;
  }

  render() {
    return (
      <div className="grid-container">
        {this.state.grid.map((row, rowIndex) => (
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
}

export default Grid;