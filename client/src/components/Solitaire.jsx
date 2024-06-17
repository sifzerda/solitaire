import '../App.css';  

function Solitaire() {
  // Assuming a simple 7-column layout for classic solitaire
  const columns = Array.from({ length: 7 }, (_, index) => index + 1);

  return (
    <div className="solitaire-board">
      {columns.map(column => (
        <div key={column} className="scolumn">
          {/* You can customize the cards and layout within each column */}
          {/* Example: */}
          <div className="scard">Card 1</div> 
          <div className="scard">Card 2</div>
        </div>
      ))}
    </div>
  );
}

export default Solitaire;