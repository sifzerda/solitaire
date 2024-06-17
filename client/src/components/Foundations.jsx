import '../App.css'; // Stylesheet for the solitaire game
import '../solitaire.css';

const Foundations = () => {
  // Placeholder data for foundation piles
  const foundationData = [
    [{ suit: 'hearts', rank: 'A', isFaceUp: true }],
    [],
    [],
    []
  ];

  return (
    <div className="foundations">
      {foundationData.map((pile, pileIndex) => (
        <FoundationPile key={pileIndex} cards={pile} />
      ))}
    </div>
  );
};

const FoundationPile = ({ cards }) => {
  return (
    <div className="foundation-pile">
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

export default Foundations;