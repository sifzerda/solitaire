// CardStack.js

import cardBack from '../../public/images/cardBack.jpg';

const Tableau = () => {
  const numberOfCards = 20;

  return (
    <div className="card-stack">
      {Array.from({ length: numberOfCards }, (_, index) => (
        <div key={index} className="card" style={{ zIndex: numberOfCards - index }}>
          <img src={cardBack} alt="Card Back" className="card-image" />
          <div className="card-index">{index + 1}</div>
        </div>
      ))}
    </div>
  );
};

export default Tableau;