import '../App.css'; // Stylesheet for the solitaire game
import '../solitaire.css';

const Tableau = () => {
    // Placeholder data for tableau columns and cards
    const tableauData = [
      [ { suit: 'hearts', rank: 'A', isFaceUp: true }, { suit: 'clubs', rank: '6', isFaceUp: true } ],
      [ { suit: 'diamonds', rank: 'K', isFaceUp: true }, { suit: 'hearts', rank: '5', isFaceUp: true } ],
      [ { suit: 'spades', rank: 'Q', isFaceUp: true }, { suit: 'diamonds', rank: '4', isFaceUp: true } ],
      [ { suit: 'hearts', rank: 'J', isFaceUp: true }, { suit: 'spades', rank: '3', isFaceUp: true } ],
      [ { suit: 'clubs', rank: '10', isFaceUp: true }, { suit: 'hearts', rank: '2', isFaceUp: true } ],
      [ { suit: 'diamonds', rank: '9', isFaceUp: true }, { suit: 'clubs', rank: '7', isFaceUp: true } ],
      [ { suit: 'spades', rank: '8', isFaceUp: true } ]
    ];
  
    return (
      <div className="tableau">
        {tableauData.map((column, columnIndex) => (
          <TableauColumn key={columnIndex} cards={column} />
        ))}
      </div>
    );
  };
  
  const TableauColumn = ({ cards }) => {
    return (
      <div className="tableau-column">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    );
  };
  
  const Card = ({ suit, rank, isFaceUp }) => {
    const cardClassName = `card ${isFaceUp ? 'face-up' : 'face-down'}`;
    const cardLabel = isFaceUp ? `${rank} of ${suit}` : 'Card Back';
  
    return <div className={cardClassName}>{cardLabel}</div>;
  };
  
  export default Tableau;