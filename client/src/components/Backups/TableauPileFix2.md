THERE ARE TWO FILES HERE, SOLITAIRE, AND SOLITAIRE.CSS

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
      const destPile = tableau.find((p) => p.id === destination.droppableId);
      if (!sourcePile || !destPile) return;

      // Only allow dragging face-up cards
      if (!sourcePile.faceUp[source.index]) return;

      // Only allow dropping on top of destination pile
      const topIndex = destPile.cards.length; // top position
      if (destination.index !== topIndex) return; // ignore middle drops

      handleTableauToTableauDrop(source, destination);
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
      {!gameStarted && <StartScreen onStartGame={handleStartGame} onHighScores={handleHighscores} onFinalScore={handleFinalScore} />}

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

          {/* Tableau decks section ---------------------------------------------------------------------*/}

          <div className="tableau">
            <div className="tableau-cards">
              {tableau.map((pile) => (
                <div key={pile.id} className="tableau-pile">

                  <Droppable droppableId={pile.id}>
                    {(provided, snapshot) => (
                      <div
                        className={`tableau-inner ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >

                        {/* --- ALL CARDS --- */}
                        {pile.cards.map((card, index) => (
                          <Draggable
                            key={card.id}
                            draggableId={card.id}
                            index={index}
                            isDragDisabled={!pile.faceUp[index]}
                          >
                            {(dragProvided, dragSnapshot) => (
                              <div
                                className={`tableau-card
                                ${dragSnapshot.isDragging ? 'group-dragging' : ''}
                                ${snapshot.isDraggingOver && index === pile.cards.length - 1 ? 'tableau-drop-target' : ''}`}
                                ref={dragProvided.innerRef}
                                {...dragProvided.draggableProps}
                                {...dragProvided.dragHandleProps}
                              >

                                {/* Multi-card dragging visual */}
                                {dragSnapshot.isDragging && pile.faceUp[index] ? (
                                  <div className="t-drag-card">
                                    {pile.cards.slice(index).map((c) => (
                                      <div className='t-drag-card-group' key={c.id}>
                                        <img src={c.image} alt={`${c.rank} of ${c.suit}`} />
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <div
                                    className="tableau-card-inner"
                                    onClick={() => {
                                      // Flip last card when clicked
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

                        {/* 🔥 Only ONE drop slot = at the TOP of the pile */}
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








CSS:

@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');
/* ------------------------- solitaire -------------------------*/

.s-container {
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
  height: 1250px;
  width: 100%;
}

.solitaire-box {
  width: auto;
  display: flex;
  background-color: #2ecc71;
  border: 6px solid #229753;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  text-align: center;
  padding: 30px;
  margin: 20px;
}

.solitaire-section {
  flex: 1;
  min-width: 0;
  /* Ensure contents can shrink properly */
}

/* game win screen */

.grid-container {
  border-radius: 5px;
  padding: 20px;
  text-align: center;
}

.start {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: white;
}

.black-text {
  color: white;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

span.red {
  color: var(--light-red);
  /* user time and score*/
}

.submit-button-s {
  /* submit score button */
  background-color: #2da031;
  color: rgb(255, 255, 255);
  border: 2px solid rgb(255, 255, 255);
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: 0.5rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.submit-button-s:hover {
  background-color: var(--fluro);
  color: black;
  border: 2px solid rgb(169, 172, 1);
}

.success {
  color: var(--fluro);
  margin: 1rem 0;
  border: solid 2px var(--fluro);
  background: black;
  font-family: 'Orbitron', cursive;
  font-size: 1.2rem;
}

.submit-button-h {
  /* to highscores button */
  background-color: var(--light-red);
  color: rgb(255, 255, 255);
  border: 2px solid rgb(255, 255, 255);
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: 0.5rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.submit-button-h:hover {
  background-color: rgb(151, 23, 23);
  color: rgb(255, 255, 255);
  border: 2px solid rgb(255, 255, 255);
}

.submit-button-p {
  /* play again button */
  background-color: var(--lblue);
  color: rgb(255, 255, 255);
  border: 2px solid rgb(255, 255, 255);
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: 0.5rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.submit-button-p:hover {
  background-color: rgb(0, 64, 138);
  color: white;
  border: 2px solid white;
}

/* ----------------- */

.cards,
.decks,
.tableau {
  padding: 20px;
}

.decks {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
}

.deck {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  margin: auto;
}

.deck-content {
  min-height: 50px;
  /* Adjust height as needed */
  padding: 5px;
}

.deck-title {
  font-size: 24px;
  margin-bottom: 5px;
}

.cards {
  align-items: center;
  padding: 10px;
  margin: auto;
  flex: 1;
  display: flex;
  position: relative;
}

.decks {
  padding: 10px;
  display: flex;
  align-items: center;
}

.container {
  display: flex;
}

.empty-deck-emoji {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4em;
  /* Adjust size as needed */
  margin-bottom: 20px;
  /* Optional: Add margin for spacing */
  height: 100%;
  /* Ensure the emoji container fills its parent */
}

.emoji-red {
  color: var(--light-red);
}

.emoji-blue {
  color: var(--lblue);
}

/* TwoBoxes.css */
.card-shaped {
  width: 150px;
  /* Adjust width as needed */
  height: 200px;
  /* Adjust height as needed */
  border: 2px dashed #999;
  /* Dashed border */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
}

.stockpile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.sp {
  width: 50%;
  height: 200px;
  border: 1px solid #000;
  box-sizing: border-box;
}

.box1 {
  background-color: lightblue;
}

.box2 {
  background-color: lightgreen;
}

.card-stack-container {
  display: flex;
  padding: 10px;
  transition: border-color 0.3s ease;
}

.card-stack {
  position: relative;
  width: 150px;
  /* Adjust width as needed */
  height: 200px;
  /* Adjust height as needed */
}

.card-list {
  display: flex;
  justify-content: center;
  /* Center horizontally */
  align-items: center;
  /* Center vertically */
  width: 128px;
  height: 185px;
  /* Ensure it takes full height of its container */
}

.card {
  position: relative;
  width: 120px;
  height: 180px;
  background-color: white;
  border: 1px solid #7a7a7a;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  padding: 10px;
  margin: 5px;
  margin-bottom: 5px;
  cursor: grab;
}

.card-image {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  border: 1px solid black;
}

.card:hover {
  cursor: grab;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  /* Lift card slightly on hover */
  transform: translateY(-5px);
  border: 5px dashed var(--lblue);
}

/* Selector for hover effect on facedown cards */
.tableau-card.facedown:hover {
  border: none !important;
}

.card.dragging {
  opacity: 0.5;
  /* Reduced opacity while dragging */
}

.card-index {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #fff;
  padding: 3px 8px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: bold;
}

.card-shaped {
  width: 100px;
  /* Adjust card width as needed */
  height: 150px;
  /* Adjust card height as needed */
  border-radius: 8px;
  /* Rounded corners */
  display: inline-block;
  margin: 10px;
  /* Adjust margin as needed */
  position: relative;
  overflow: hidden;
}

.playing-card {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-shaped-box {
  width: 150px;
  /* Adjust width as needed */
  height: 200px;
  /* Adjust height as needed */
  margin-left: 20px;
  /* Adjust margin as needed */
  border: 2px dashed #999;
  /* Dashed border */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
}

.card-shaped-box.show {
  display: block;
}

/* Adjust these styles for the card stacking effect */
.card:nth-child(1) {
  transform: translate(0, 0);
}

.card:nth-child(2) {
  transform: translate(5px, -5px);
}

.card:nth-child(3) {
  transform: translate(10px, -10px);
}

/* Add more nth-child rules as needed for more cards */
.deck-content.dragging-over {
  border: 2px solid #0a0a0a;
}

.dragging-over {
 /* background-color: lightgreen;  */
  /* border: 3px solid #00a51b;  */
}


.foundation-deck {
  flex: 1;
  margin: 0 5px;
  padding: 10px;
}

/* STOCKPILE --------------------------------------------*/

.pile {
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 10px;
  margin-right: 10px;
  width: 80px;
  min-height: 120px;
}

.stockpile {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
 
}

.next-card-btn {
  width: 120px;
  height: 210px;
  font-size: 16px;
  background-color: transparent;
  color: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  bottom: 3px;  
  right: 3px;  
  z-index: 10;  
  position: absolute;
}

.next-card-btn:hover {
  background-color: transparent;
}

.next-card-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.facedown-stockpile {
  height: 200px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
 
}

.facedown-card {
  background-color: white;
  border: 1px solid #999;
  border-radius: 5px;
  width: 120px;
  height: 180px;
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  /* Optional: add a shadow effect */
  color: black;
}

.facedown-card img {
  max-width: 100%;
  max-height: 100%;
}

/* How much sub level layer of cards shows */
.facedown-card+.facedown-card {
  margin-top: -183px;
  /* Amount of overlap between cards */
}

.last-card-content {
  border: 3px dashed #606666;
  width: 100%;
  height: 100%;
  box-sizing: border-box; /* Ensure padding and border are included in width and height */
  padding: 10px; /* Adjust padding as needed */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  display: flex;
  font-size: 60px;
}

.last-card-container {
  border-radius: 5px;
  width: 120px;
  height: 180px;
  color: white;
  transform: translateX(-250%) translateY(-06%);
}

img.refresh {
  margin-top: 30px;
  width: 85%;
  height: 100%;
  object-fit: cover;
}

/* FOUNDATION --------------------------------------------*/

/* Foundation deck container */
.foundation-decks {
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
  margin-left: 200px;
}

/* Individual foundation deck */
.foundation-deck {
  width: 120px;
  /* Adjust card width */
  height: 180px;
  /* Adjust card height */
  border: 3px dashed #606666;
  border-radius: 5px;
  padding: 10px;
  background-color: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: 20px;
}

/* Cards dropped into foundation deck */
.card-in-deck {
  width: 120px;
  /* Adjust card width */
  height: 180px;
  /* Adjust card height */
  background-color: white;
  /* Card background color */
  border: 1px solid #ccc;
  /* Card border */
  border-radius: 5px;
  /* Rounded corners for card */
  position: relative;
  /* Positioning context for overlap */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: black;
}

/* How much sub level layer of cards shows */
.card-in-deck+.card-in-deck {
  margin-top: -174px;
  /* Amount of overlap between cards */
}

/* Adjust card styles as needed */
.card-in-deck:last-child {
  margin-bottom: 0;
}

.card-in-deck img {
  max-width: 100%;
  max-height: 100%;
  display: block;
  transition: transform 0.3s ease;
}

img.refresh {
  margin-top: 30px;
  width: 85%;
  height: 100%;
  object-fit: cover;
}

/* TABLEAU ------------------------------------------------*/

.tableau {
  display: flex;
  justify-content: flex-end;
  margin-top: 70px;
}

.tableau-cards {
  display: flex;
  gap: 27px;
}

.tableau-card img {
  max-width: 100%;
  max-height: 100%;
  display: block;
  transition: transform 0.3s ease;
}

.tableau-pile {
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
}

.tableau-inner {
  min-height: 100px;
  padding: 5px;
  border-radius: 3px;
}

.tableau-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 5px;
  background-color: white;
  border: 1px solid #9e9696;
  border-radius: 5px;
  width: 120px;
  height: 180px;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: black;
}

/* How much sub level layer of cards shows */
.tableau-card+.tableau-card {
  margin-top: -150px;
  /* Amount of overlap between cards */
}

/* Optional: Highlight when dragging */
.tableau-card.dragging {
  opacity: 0.5;
}

/* Optional: Hover effect */
.tableau-card:hover {
  cursor: grab;
  /* Change cursor on hover */
  transform: translateY(-5px);
  /* Lift card slightly on hover */
  border: 5px dashed var(--lblue);
}

/* Droppable area highlight */
.tableau-inner.dragging-over {
 background-color: lightgreen; 
}

.tableau-inner.dragging-over .tableau-card {
  transform: translateY(calc(-10px - 1px));
}

.tableau-card.dragging {
  opacity: 0.7;
  /* Reduce opacity when dragging */
  background-color: #f0f0f0;
}

/* Dragging tableau piles/columns */

.tableau-card.group-dragging {
  transform: scale(1.2);
  /* Increase size of dragged group */
  z-index: 100;
  /* Ensure dragged cards appear above others */
}

/* topmost card of a tableau pile*/
.tableau-drop-target {
  border: 4px dashed red;
  border-radius: 6px;
  position: relative;
  z-index: 30;
}

.t-drag-card-group {
  border-left: 5px dashed #007bff;
  border-right: 5px dashed #007bff;
  border-bottom: 5px dashed #007bff;
  border-top: 5px dashed #007bff;
  background-color: rgb(255, 255, 255);
  padding: 5px;
  margin: -11px;
  height: 180px;
  margin-bottom: -145px;
}

.t-drag-card-group img {
  max-width: 100%;
  max-height: 100%;
  display: block;
}

/* hover of facedown cards*/
.tableau-card.facedown:hover {
  border: none;
  transition: none;
  transform: none;
}

@media (max-width: 768px) {
  .solitaire-container {
    flex-direction: column;
    /* Stack cards vertically on smaller screens */
  }
}