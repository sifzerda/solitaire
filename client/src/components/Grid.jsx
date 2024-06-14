import { useState } from 'react';
import '../App.css';

function Grid() {
    // State to store the content of each cell
    const [cellContent, setCellContent] = useState(Array(10).fill().map(() => Array(10).fill(null)));
  
    // Function to handle click event on a cell button
    const handleCellClick = (row, col) => {
      // Generate a random number between 1 and 5
      const randomNumber = Math.floor(Math.random() * 5) + 1;
  
      // Generate a random number between 1 and 10
      const randomBomb = Math.floor(Math.random() * 10) + 1;
  
      // Determine whether to display a number or a bomb based on the random number
      const content = randomBomb === 1 ? '💣' : randomNumber;
  
      // Update the state to set the content in the clicked cell
      const newCellContent = [...cellContent];
      newCellContent[row][col] = content;
      setCellContent(newCellContent);
    };
  
    // Create an array to represent each row of the grid
    const rows = [];
    for (let i = 0; i < 10; i++) {
      // Create an array to represent each column of the grid
      const columns = [];
      for (let j = 0; j < 10; j++) {
        // Push a button with a unique key into the columns array
        columns.push(
          <button key={`${i}-${j}`} className="cell" onClick={() => handleCellClick(i, j)}>
            {cellContent[i][j]}
          </button>
        );
      }
      // Push each row of buttons into the rows array
      rows.push(<div key={i} className="row">{columns}</div>);
    }
  
    return <div className="grid">{rows}</div>; // Return the grid containing rows of buttons
  }
  
  export default Grid;