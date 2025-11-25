import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import StartScreen from './StartScreen';
import Highscores from './Highscores';
import FinalScore from './FinalScore';
// facedown card image
import cardBack from '../assets/cardBack.jpg';
import heartA from '../assets/heartA.jpg';
import heart2 from '../assets/heart2.jpg';
import heart3 from '../assets/heart3.jpg';
import heart4 from '../assets/heart4.jpg';
import heart5 from '../assets/heart5.jpg';
import heart6 from '../assets/heart6.jpg';
import heart7 from '../assets/heart7.jpg';
import heart8 from '../assets/heart8.jpg';
import heart9 from '../assets/heart9.jpg';
import heart10 from '../assets/heart10.jpg';
import heartJ from '../assets/heartJ.jpg';
import heartQ from '../assets/heartQ.jpg';
import heartK from '../assets/heartK.jpg';

import diamondA from '../assets/diamondA.jpg';
import diamond2 from '../assets/diamond2.jpg';
import diamond3 from '../assets/diamond3.jpg';
import diamond4 from '../assets/diamond4.jpg';
import diamond5 from '../assets/diamond5.jpg';
import diamond6 from '../assets/diamond6.jpg';
import diamond7 from '../assets/diamond7.jpg';
import diamond8 from '../assets/diamond8.jpg';
import diamond9 from '../assets/diamond9.jpg';
import diamond10 from '../assets/diamond10.jpg';
import diamondJ from '../assets/diamondJ.jpg';
import diamondQ from '../assets/diamondQ.jpg';
import diamondK from '../assets/diamondK.jpg';

import clubA from '../assets/clubA.jpg';
import club2 from '../assets/club2.jpg';
import club3 from '../assets/club3.jpg';
import club4 from '../assets/club4.jpg';
import club5 from '../assets/club5.jpg';
import club6 from '../assets/club6.jpg';
import club7 from '../assets/club7.jpg';
import club8 from '../assets/club8.jpg';
import club9 from '../assets/club9.jpg';
import club10 from '../assets/club10.jpg';
import clubJ from '../assets/clubJ.jpg';
import clubQ from '../assets/clubQ.jpg';
import clubK from '../assets/clubK.jpg';

import spadeA from '../assets/spadeA.jpg';
import spade2 from '../assets/spade2.jpg';
import spade3 from '../assets/spade3.jpg';
import spade4 from '../assets/spade4.jpg';
import spade5 from '../assets/spade5.jpg';
import spade6 from '../assets/spade6.jpg';
import spade7 from '../assets/spade7.jpg';
import spade8 from '../assets/spade8.jpg';
import spade9 from '../assets/spade9.jpg';
import spade10 from '../assets/spade10.jpg';
import spadeJ from '../assets/spadeJ.jpg';
import spadeQ from '../assets/spadeQ.jpg';
import spadeK from '../assets/spadeK.jpg';

// Define initial squares and boxes data
const initialCards = [
  // HEARTS 
  { id: 'card-1', suit: 'Hearts', rank: 'Ace', color: 'Red', image: heartA },
  { id: 'card-2', suit: 'Hearts', rank: '2', color: 'Red', image: heart2 },
  { id: 'card-3', suit: 'Hearts', rank: '3', color: 'Red', image: heart3 },
  { id: 'card-4', suit: 'Hearts', rank: '4', color: 'Red', image: heart4 },
  { id: 'card-5', suit: 'Hearts', rank: '5', color: 'Red', image: heart5 },
  { id: 'card-6', suit: 'Hearts', rank: '6', color: 'Red', image: heart6 },
  { id: 'card-7', suit: 'Hearts', rank: '7', color: 'Red', image: heart7 },
  { id: 'card-8', suit: 'Hearts', rank: '8', color: 'Red', image: heart8 },
  { id: 'card-9', suit: 'Hearts', rank: '9', color: 'Red', image: heart9 },
  { id: 'card-10', suit: 'Hearts', rank: '10', color: 'Red', image: heart10 },
  { id: 'card-11', suit: 'Hearts', rank: 'Jack', color: 'Red', image: heartJ },
  { id: 'card-12', suit: 'Hearts', rank: 'Queen', color: 'Red', image: heartQ },
  { id: 'card-13', suit: 'Hearts', rank: 'King', color: 'Red', image: heartK },

  // DIAMONDS
  { id: 'card-14', suit: 'Diamonds', rank: 'Ace', color: 'Red', image: diamondA },
  { id: 'card-15', suit: 'Diamonds', rank: '2', color: 'Red', image: diamond2 },
  { id: 'card-16', suit: 'Diamonds', rank: '3', color: 'Red', image: diamond3 },
  { id: 'card-17', suit: 'Diamonds', rank: '4', color: 'Red', image: diamond4 },
  { id: 'card-18', suit: 'Diamonds', rank: '5', color: 'Red', image: diamond5 },
  { id: 'card-19', suit: 'Diamonds', rank: '6', color: 'Red', image: diamond6 },
  { id: 'card-20', suit: 'Diamonds', rank: '7', color: 'Red', image: diamond7 },
  { id: 'card-21', suit: 'Diamonds', rank: '8', color: 'Red', image: diamond8 },
  { id: 'card-22', suit: 'Diamonds', rank: '9', color: 'Red', image: diamond9 },
  { id: 'card-23', suit: 'Diamonds', rank: '10', color: 'Red', image: diamond10 },
  { id: 'card-24', suit: 'Diamonds', rank: 'Jack', color: 'Red', image: diamondJ },
  { id: 'card-25', suit: 'Diamonds', rank: 'Queen', color: 'Red', image: diamondQ },
  { id: 'card-26', suit: 'Diamonds', rank: 'King', color: 'Red', image: diamondK },

  // CLUBS
  { id: 'card-27', suit: 'Clubs', rank: 'Ace', color: 'Black', image: clubA },
  { id: 'card-28', suit: 'Clubs', rank: '2', color: 'Black', image: club2 },
  { id: 'card-29', suit: 'Clubs', rank: '3', color: 'Black', image: club3 },
  { id: 'card-30', suit: 'Clubs', rank: '4', color: 'Black', image: club4 },
  { id: 'card-31', suit: 'Clubs', rank: '5', color: 'Black', image: club5 },
  { id: 'card-32', suit: 'Clubs', rank: '6', color: 'Black', image: club6 },
  { id: 'card-33', suit: 'Clubs', rank: '7', color: 'Black', image: club7 },
  { id: 'card-34', suit: 'Clubs', rank: '8', color: 'Black', image: club8 },
  { id: 'card-35', suit: 'Clubs', rank: '9', color: 'Black', image: club9 },
  { id: 'card-36', suit: 'Clubs', rank: '10', color: 'Black', image: club10 },
  { id: 'card-37', suit: 'Clubs', rank: 'Jack', color: 'Black', image: clubJ },
  { id: 'card-38', suit: 'Clubs', rank: 'Queen', color: 'Black', image: clubQ },
  { id: 'card-39', suit: 'Clubs', rank: 'King', color: 'Black', image: clubK },

  // SPADES
  { id: 'card-40', suit: 'Spades', rank: 'Ace', color: 'Black', image: spadeA },
  { id: 'card-41', suit: 'Spades', rank: '2', color: 'Black', image: spade2 },
  { id: 'card-42', suit: 'Spades', rank: '3', color: 'Black', image: spade3 },
  { id: 'card-43', suit: 'Spades', rank: '4', color: 'Black', image: spade4 },
  { id: 'card-44', suit: 'Spades', rank: '5', color: 'Black', image: spade5 },
  { id: 'card-45', suit: 'Spades', rank: '6', color: 'Black', image: spade6 },
  { id: 'card-46', suit: 'Spades', rank: '7', color: 'Black', image: spade7 },
  { id: 'card-47', suit: 'Spades', rank: '8', color: 'Black', image: spade8 },
  { id: 'card-48', suit: 'Spades', rank: '9', color: 'Black', image: spade9 },
  { id: 'card-49', suit: 'Spades', rank: '10', color: 'Black', image: spade10 },
  { id: 'card-50', suit: 'Spades', rank: 'Jack', color: 'Black', image: spadeJ },
  { id: 'card-51', suit: 'Spades', rank: 'Queen', color: 'Black', image: spadeQ },
  { id: 'card-52', suit: 'Spades', rank: 'King', color: 'Black', image: spadeK },
];

// create and initialize Foundation decks with suit id, and empty 
const initialDecks = [
  { id: 'Spades', cards: [] },
  { id: 'Diamonds', cards: [] },
  { id: 'Clubs', cards: [] },
  { id: 'Hearts', cards: [] },
];

// Emoji on empty foundation decks
const suitEmojis = {
  Spades: '♤',
  Diamonds: '♢',
  Clubs: '♧',
  Hearts: '♡',
};

// Initial tableau cards with stacks (adjust as needed)
const initialTableau = Array.from({ length: 7 }, (_, index) => ({
  id: `tableau-${index + 1}`,
  cards: [],
  faceUp: [], // Array to track faceup cards
}));

const Solitaire = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [cards, setCards] = useState(initialCards);
  const [decks, setDecks] = useState(initialDecks);
  /* for next card display */
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [tableau, setTableau] = useState(initialTableau); // State for tableau cards
  const [viewHighscores, setViewHighscores] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [showFinalScore, setShowFinalScore] = useState(false);

    // Timer logic -------------------------------------------

    useEffect(() => {
      if (isActive) {
        const interval = setInterval(() => {
          setTimer(timer => timer + 1);
        }, 1000);
        return () => clearInterval(interval);
      }
    }, [isActive]);

    // Reset timer when game starts or restarts
    useEffect(() => {
      if (gameStarted) {
        setTimer(0);
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }, [gameStarted]);

    useEffect(() => {
      if (checkGameWon()) {
        alert('Congratulations! You have won the game!');
      }
    }, [decks]); // Listen for changes in the foundation decks

    // --------- -------------------------------------------

  useEffect(() => {
    const shuffledCards = shuffleArray([...initialCards]);

    // Distribute cards between tableau and stockpile
    let tableauCopy = initialTableau.map((pile) => ({ ...pile, cards: [] }));
    let stockpile = [];

    for (let i = 0; i < tableauCopy.length; i++) {
      for (let j = 0; j <= i; j++) {
        const card = shuffledCards.shift();
        tableauCopy[i].cards.push(card);
        tableauCopy[i].faceUp.push(j === i); // Set face-up only for the top card in each pile
      }
    }
    stockpile = shuffledCards;
    setTableau(tableauCopy);
    setCards(stockpile);
  }, []);

  // Function to shuffle array (Fisher-Yates algorithm)
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // cycling through cards in stockpile
  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  // from Start to Game
  const handleStartGame = () => {
    setGameStarted(true);
  };

// From Game to Start
const handleExitGame = () => {
  setGameStarted(false);
};

// reiterates the initial game state

const handleRestartGame = () => {
  // Reset cards
  const shuffledCards = shuffleArray([...initialCards]);
  let tableauCopy = initialTableau.map((pile) => ({ ...pile, cards: [], faceUp: pile.faceUp.map(() => false) }));
  let stockpile = [];
  for (let i = 0; i < tableauCopy.length; i++) {
    for (let j = 0; j <= i; j++) {
      const card = shuffledCards.shift();
      tableauCopy[i].cards.push(card);
      tableauCopy[i].faceUp[j] = (j === i); // Set face-up only for the top card in each pile
    }
  }
  stockpile = shuffledCards;
  setTableau(tableauCopy);
  setCards(stockpile);
  setDecks(initialDecks);
  setTimer(0); // Reset the timer
  setIsActive(true); // Start the timer
};

  // from Start to Highscores
  const handleHighscores = () => {
    setViewHighscores(true);
  };

  // from Start to FinalScore
  const handleFinalScore = () => {
    setShowFinalScore(true);
  };

  //-----------------------------------(F1) drag ANY TO FOUNDATION rules -------------------------------------------------

  // Check if the move is valid to the foundation
const handleFoundationDrop = (source, destination, draggedCard) => {
  const targetFoundation = decks.find(deck => deck.id === destination.droppableId);
  if (!targetFoundation) return;

  if (!isMoveAllowed(draggedCard, targetFoundation)) return;

  // Remove the card from source
  if (source.droppableId === "revealed-cards") {
    setCards(cards.filter(card => card.id !== draggedCard.id));
  } else if (source.droppableId.startsWith("tableau")) {
    const updatedTableau = tableau.map(pile => {
      if (pile.id !== source.droppableId) return pile;

      const cardIndex = pile.cards.findIndex(c => c.id === draggedCard.id);
      if (cardIndex === -1) return pile;

      return {
        ...pile,
        cards: pile.cards.filter((_, i) => i !== cardIndex),
        faceUp: pile.faceUp.filter((_, i) => i !== cardIndex),
      };
    });
    setTableau(updatedTableau);
  }

  // Add card to foundation
  const updatedDecks = decks.map(deck => ({
    ...deck,
    cards: deck.id === destination.droppableId ? [...deck.cards, draggedCard] : deck.cards,
  }));
  setDecks(updatedDecks);
};

  // Function to validate if card can be moved to foundation
  const isMoveAllowed = (card, foundationDeck) => {
    if (foundationDeck.cards.length === 0) {
      // Only Ace can be placed on an empty foundation
      return card.rank === 'Ace' && card.suit === foundationDeck.id;
    } else {
      const lastCard = foundationDeck.cards[foundationDeck.cards.length - 1];
      // Allow rank 2 of the same suit to be placed on Ace
      if (lastCard.rank === 'Ace' && card.rank === '2' && card.suit === foundationDeck.id) {
        return true;
      }
      // Check if ranks are in ascending order and same suit
      if (card.suit === foundationDeck.id && getNextRank(lastCard.rank) === card.rank) {
        return true;
      }

      // Allow cards to drop in sequence using parseInt
      const lastRankInt = parseInt(lastCard.rank, 10); // Parse the rank of the last card as an integer
      const currentRankInt = parseInt(card.rank, 10); // Parse the rank of the current card as an integer

      if (!isNaN(lastRankInt) && !isNaN(currentRankInt) && currentRankInt === lastRankInt + 1 && card.suit === foundationDeck.id) {
        return true;
      }

      return false;
    }
  };

  // Function to get the next rank in sequence
  const getNextRank = (rank) => {
    const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    const currentIndex = ranks.indexOf(rank);
    return ranks[currentIndex + 1];
  };

  //-----------------------------------(S1) drag STOCKPILE TO TABLEAU rules -------------------------------------------------

  const handleStockpileToTableauDrop = (draggedCard, destination) => {
    const updatedCards = cards.filter((card) => card.id !== draggedCard.id);
    setCards(updatedCards);

    console.log(`Dragging card ${draggedCard.rank} of ${draggedCard.suit} to destination: ${destination.droppableId}`);

    if (destination.droppableId.startsWith('tableau')) {
      const targetPileId = destination.droppableId;
      const targetPile = tableau.find((pile) => pile.id === targetPileId);

      if (!targetPile) {
        console.error(`Error: Tableau pile ${targetPileId} not found.`);
        return;
      }

      const topCard = targetPile.cards.length > 0 ? targetPile.cards[targetPile.cards.length - 1] : null;

      // Check if dragged card rank is valid
      const isValidRank = () => {
        const ranks = ['King', 'Queen', 'Jack', '10', '9', '8', '7', '6', '5', '4', '3', '2', 'Ace'];
        const draggedCardIndex = ranks.indexOf(draggedCard.rank);
        if (topCard === null) {
          // If the pile is empty, only a King can be dropped
          return draggedCard.rank === 'King';
        } else {
          const topCardIndex = ranks.indexOf(topCard.rank);
          return draggedCardIndex === topCardIndex + 1;
        }
      };

      // Check if dragged card color is valid (opposite color)
      const isValidColor = () => {
        if (!topCard) return true; // If no top card, any color is valid
        return (topCard.color === 'Red' && draggedCard.color === 'Black') || (topCard.color === 'Black' && draggedCard.color === 'Red');
      };

      if (isValidRank() && isValidColor()) {
        // Add the card to the tableau pile and mark it as faceup
        const updatedTableau = tableau.map((pile) => {
          if (pile.id === targetPileId) {
            // Mark the added card faceup and retain other cards' face-up state
            const updatedFaceUp = [...pile.faceUp, true];
            console.log(`Card ${draggedCard.rank} of ${draggedCard.suit} added to tableau ${targetPileId}. New faceup state: ${updatedFaceUp}`);
            return {
              ...pile,
              cards: [...pile.cards, draggedCard],
              faceUp: updatedFaceUp,
            };
          }
          return pile;
        });
        setTableau(updatedTableau);
      } else {
        console.log('Invalid move: Cannot drop this card on top of the current tableau pile.');
      }
    } else {
      console.log('Invalid destination: Destination must be a tableau pile.');
    }
  };

  const handleTableauToTableauDrop = (source, destination) => {
  const sourcePileIndex = tableau.findIndex(
    (pile) => pile.id === source.droppableId
  );
  const destinationPileIndex = tableau.findIndex(
    (pile) => pile.id === destination.droppableId
  );

  if (sourcePileIndex === -1 || destinationPileIndex === -1) return;

  // Copy tableau
  const updated = [...tableau];
  const sourcePile = { ...updated[sourcePileIndex] };
  const destinationPile = { ...updated[destinationPileIndex] };

  // Extract moving cards
  const draggedGroup = sourcePile.cards.slice(source.index);

  // Remove them from source
  sourcePile.cards = sourcePile.cards.slice(0, source.index);

  // --- VALIDATION LOGIC STAYS THE SAME ---
  const isValidMove = () => {
    const topCard =
      destinationPile.cards[destinationPile.cards.length - 1] || null;

    const draggedCard = draggedGroup[0];

    const ranks = [
      "King",
      "Queen",
      "Jack",
      "10",
      "9",
      "8",
      "7",
      "6",
      "5",
      "4",
      "3",
      "2",
      "Ace",
    ];

    const dcIndex = ranks.indexOf(draggedCard.rank);

    if (!topCard) return draggedCard.rank === "King";

    const tcIndex = ranks.indexOf(topCard.rank);

    const isRankValid = dcIndex === tcIndex + 1;
    const isColorValid =
      (topCard.color === "Red" && draggedCard.color === "Black") ||
      (topCard.color === "Black" && draggedCard.color === "Red");

    return isRankValid && isColorValid;
  };

  if (!isValidMove()) {
    // Put cards back if invalid
    sourcePile.cards = [
      ...sourcePile.cards,
      ...draggedGroup
    ];

    updated[sourcePileIndex] = sourcePile;
    setTableau(updated);
    console.log("Invalid tableau move");
    return;
  }

  // ----------------------------
  // **FIX for dropping on tableau top: Always insert at top**
  // ----------------------------
  const insertIndex = destinationPile.cards.length;

  destinationPile.cards = [
    ...destinationPile.cards,
    ...draggedGroup
  ];

  // update faceUp however you want — untouched
  destinationPile.faceUp = destinationPile.cards.map((_, i) =>
    i >= insertIndex ? true : destinationPile.faceUp?.[i] || false
  );

  updated[sourcePileIndex] = sourcePile;
  updated[destinationPileIndex] = destinationPile;

  setTableau(updated);
};

  // --------------------------- ON DRAG END (collective index for separate DnD functions) ------------------->

const onDragEnd = (result) => {
  const { source, destination } = result;

  // Dropped outside any droppable
  if (!destination) return;

  let draggedCard;

  // ----------------- DETERMINE DRAGGED CARD -----------------
  if (source.droppableId === "revealed-cards") {
    // Dragging from stockpile
    draggedCard = cards[currentCardIndex];
  } else if (source.droppableId.startsWith("tableau")) {
    // Dragging from a tableau pile
    const sourcePile = tableau.find((p) => p.id === source.droppableId);
    if (!sourcePile) return;

    const firstFaceUpIndex = sourcePile.faceUp.findIndex((v) => v === true);
    if (firstFaceUpIndex === -1) return; // nothing to drag

    draggedCard = sourcePile.cards[firstFaceUpIndex];
  } else {
    // Unknown source, do nothing
    return;
  }

  // ----------------- HANDLE FOUNDATION DROPS -----------------
  if (destination.droppableId.startsWith("foundation")) {
    handleFoundationDrop(source, destination, draggedCard);
    return; // stop here after handling foundation
  }

  // ----------------- STOCKPILE → TABLEAU -----------------
  if (
    source.droppableId === "revealed-cards" &&
    destination.droppableId.startsWith("tableau")
  ) {
    // Remove dragged card from stockpile
    setCards(cards.filter((c) => c.id !== draggedCard.id));

    handleStockpileToTableauDrop(draggedCard, destination);
    return;
  }

  // ----------------- TABLEAU → TABLEAU -----------------
  if (
    source.droppableId.startsWith("tableau") &&
    destination.droppableId.startsWith("tableau")
  ) {
    const sourcePile = tableau.find((p) => p.id === source.droppableId);
    if (!sourcePile) return;

    const firstFaceUpIndex = sourcePile.faceUp.findIndex((v) => v === true);
    if (firstFaceUpIndex === -1) return;

    const correctedSource = {
      ...source,
      index: firstFaceUpIndex, // start drag from first face-up card
    };

    handleTableauToTableauDrop(correctedSource, destination);
    return;
  }

  // ----------------- ANY → FOUNDATION -----------------
  handleFoundationDrop(source, destination, draggedCard);
};

/* -------------------------- check if game won -----------------------------------*/

const checkGameWon = () => {
  const requiredCards = ['King']; // Adjust if needed to include all ranks from 'Ace' to 'King'
  const foundationsComplete = decks.every((deck) => {
    const deckCards = deck.cards.map((card) => card.rank);
    return requiredCards.every((rank) => deckCards.includes(rank));
  });
  if (foundationsComplete) {
    setIsActive(false);
    alert(`You won! Time taken: ${timer} seconds`);
    setShowFinalScore(true);
  }
};

/* -------------------------- check if game won -----------------------------------*/

if (viewHighscores) {
  return <Highscores />;
}

if (showFinalScore) {
  return <FinalScore time={timer} onHighScores={handleHighscores} />;
}

/* -------------------------- RETURN/RENDERING -----------------------------------*/

  return (
<div className="s-container">
{ !gameStarted && <StartScreen onStartGame={handleStartGame} onHighScores={handleHighscores}  onFinalScore={handleFinalScore}  /> }

      {gameStarted && (
 
    <DragDropContext onDragEnd={onDragEnd}>

        {/* --------------- game exit and restart btns ----------------*/}
        <div className="button-wrapper">
  <div className="timer">Time: {timer}</div>
  <div className="button-container">
    <button className="game-button restart-game" onClick={handleRestartGame}>Restart</button>
    <button className="game-button exit-game" onClick={handleExitGame}>Exit</button>
  </div>
</div>

{/* Foundation decks section ---------------------------------------------------------------------*/}

        <div className="decks">

        <div className="cards">
{/* --------------- --------------------- -----------------------*/}

        {/* Facedown stockpile section */}
        <div className="facedown-stockpile">

          {cards.slice(currentCardIndex + 1).map((card, index) => (
            <div key={card.id} className="facedown-card">
              <img src={cardBack} alt="Facedown card" />
            </div>
          ))}
        </div>

        <Droppable droppableId="revealed-cards">
            {(provided) => (
              <div className="card-list" {...provided.droppableProps} ref={provided.innerRef}>
                {currentCardIndex < cards.length && (
                  <Draggable draggableId={cards[currentCardIndex].id} index={currentCardIndex}>
                    {(dragProvided) => (
                      <div
                        className="card"
                        {...dragProvided.draggableProps}
                        {...dragProvided.dragHandleProps}
                        ref={dragProvided.innerRef}
                      >
                        <img
                          src={cards[currentCardIndex].image}
                          alt={`${cards[currentCardIndex].rank} of ${cards[currentCardIndex].suit}`}
                        />
                      </div>
                    )}
                  </Draggable>
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>

{/* Visible only on final card ---------------------------------------*/}
<div className="last-card-container">
        {cards.slice(currentCardIndex + 1).length === 0 && (

            <p className="last-card-content">
              🔄
            </p>
        )}

<button className='next-card-btn' onClick={nextCard}>Next Card</button>

{/* ----------------------------------------------------------------*/}
</div>

          <div className="foundation-decks">
            {decks.map((deck) => (
              <div key={deck.id} className="foundation-deck">
                <Droppable droppableId={deck.id}>
                  {(provided, snapshot) => (
                    <div
                      className={`deck-content ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {deck.cards.length === 0 ? (
                        <div
                          className={`empty-deck-emoji ${deck.id === 'Hearts' || deck.id === 'Diamonds' ? 'emoji-red' : 'emoji-blue'
                            }`}
                        >
                          {suitEmojis[deck.id]}
                        </div>
                      ) : (
                        deck.cards.map((card, index) => (
                          <div key={card.id} className="card-in-deck">
                            <img src={card.image} alt={`${card.rank} of ${card.suit}`} />
                          </div>
                        ))
                      )}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
          </div>
        </div>

{/* Tableau decks section ---------------------------------------------------------------------*/}

        <div className="tableau">
          <div className="tableau-cards">
            {tableau.map((pile) => (
              <div key={pile.id} className="tableau-pile">
                <Droppable droppableId={pile.id}>
                  {(provided, snapshot) => (
                    <div
                      className={`tableau-inner ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {pile.cards.map((card, index) => (
                        <Draggable
                          key={card.id}
                          draggableId={card.id}
                          index={0}
                          isDragDisabled={!pile.faceUp[index]} // Disable dragging for face-down cards
                        >
                          {(dragProvided, dragSnapshot) => (
                            <div
                              className={`tableau-card ${dragSnapshot.isDragging ? 'group-dragging' : ''}`}
                              ref={dragProvided.innerRef}
                              {...dragProvided.draggableProps}
                              {...dragProvided.dragHandleProps}
                            >
                              {/* Render individual card when not dragging, group when dragging */}
                              {dragSnapshot.isDragging && pile.faceUp[index] ? (
                                // Render group of face-up cards being dragged
                                <div className='t-drag-card'>
                                  {pile.cards.slice(index).map((c, index) => (
                                    <div className='t-drag-card-group' key={c.id}>
                                      <img src={c.image} alt={`${c.rank} of ${c.suit}`} />
                                      {/*  {c.rank} of {c.suit} - ({c.color})  */}
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <div
                                  className="tableau-card-inner"
                                  onClick={() => {
                                    if (!pile.faceUp[index] && index === pile.cards.length - 1) {
                                      const updatedTableau = [...tableau];
                                      updatedTableau.forEach((p) => {
                                        if (p.id === pile.id) {
                                          p.faceUp[index] = true;
                                        }
                                      });
                                      setTableau(updatedTableau);
                                    }
                                  }}
                                >
                                  <img
                                    src={pile.faceUp[index] ? card.image : cardBack}
                                    alt={pile.faceUp[index] ? `${card.rank} of ${card.suit}` : 'Face-down card'}
                                  />
                                </div>
                              )}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
          </div>
        </div>
        

 
    </DragDropContext>
 
  )}

    </div>
  );
};

export default Solitaire;

