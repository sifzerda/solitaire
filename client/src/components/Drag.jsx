import  { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import  '../Drag.css'; // Import CSS for styling (create this file if necessary)

// Define initial squares and boxes data
const initialCards = [
  { id: 'card-1', suit: 'Hearts', rank: 'Ace' },
  { id: 'card-2', suit: 'Diamonds', rank: 'King' },
  { id: 'card-3', suit: 'Clubs', rank: 'Queen' },
  // Add more cards as needed
];

const initialDecks = [
  { id: 'deck-1', cards: [] },
  { id: 'deck-2', cards: [] },
  // Add more decks as needed
];

const DragAndDropComponent = () => {
  const [cards, setCards] = useState(initialCards);
  const [decks, setDecks] = useState(initialDecks);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // Dropped outside the list
    if (!destination) {
      return;
    }

    // Dropped in the same position
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    // Update cards state
    const updatedCards = [...cards];
    const [draggedCard] = updatedCards.splice(source.index, 1);
    updatedCards.splice(destination.index, 0, draggedCard);
    setCards(updatedCards);

    // Update decks state
    const updatedDecks = decks.map((deck) => {
      if (deck.id === destination.droppableId) {
        return {
          ...deck,
          cards: [...deck.cards, draggedCard],
        };
      } else if (deck.id === source.droppableId) {
        return {
          ...deck,
          cards: deck.cards.filter((card) => card.id !== draggedCard.id),
        };
      }
      return deck;
    });

    setDecks(updatedDecks);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="container">
        <div className="cards">
          <h2>Cards</h2>
          <Droppable droppableId="all-cards" direction="horizontal">
            {(provided) => (
              <div className="card-list" {...provided.droppableProps} ref={provided.innerRef}>
                {cards.map((card, index) => (
                  <Draggable key={card.id} draggableId={card.id} index={index}>
                    {(provided) => (
                      <div
                        className="card"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {card.rank} of {card.suit}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <div className="decks">
          <h2>Decks</h2>
          {decks.map((deck) => (
            <div key={deck.id} className="deck">
              <Droppable droppableId={deck.id}>
                {(provided, snapshot) => (
                  <div
                    className={`deck-content ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {deck.cards.map((card, index) => (
                      <div key={card.id} className="card-in-deck">
                        {card.rank} of {card.suit}
                      </div>
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
  );
};

export default DragAndDropComponent;