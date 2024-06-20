Consider making solitaire with Vue or Angular, or with help of Canvas API
Vue may be easiest, apparently Angular has a bigger learning curve


# Gamestack

This is a personal project to create a react MERN stack app which has a number of simple games. These were built from scratch (i.e. no code derived from elsewhere) with ChatGPT help. 

Games:
- [x] Minesweeper
- [x] Solitaire
- [ ] Chess - would need an AI PC opponent
- [ ] Poker
- [ ] Slot Machine
- [ ] Pacman
- [ ] Frogger
- [ ] Flyswatting game
- [ ] Bad Toys 
- [ ] SideShow shooting gallery
- [ ] Go Fish, Uno, etc (would need AI PC opponent)


Others:

 
 
 
- slot machine:
  - This would require points from other games to pay to play
- 'bad toys' type simple shooting game with reticule/flashpoint, 
  - Or sideshow type shooting gallery
- fly swat type game, 'gun' is a flyswatter
- pacman
- frogger

- pool (?)
- pinball (?)

Optional:
- type of virtual reward shop where you trade points for virtual stuff, e.g. user avatars, 'trophies'

# INDEX

# Minesweeper 
# Solitaire
#
#
#

# SOLITAIRE ♤ ♡ ♢ ♧ 

Difficulty:

To change difficulty inside the game, you can change:
- GRID SIZE:
-         const rows = 10; const cols = 10 (change this to how big you want the grid to be)
- SAFE CELL REVEAL:
-         const maxReveal: default '3', change to alter how many blocks of cells get revealed when a safe cell is clicked
- MINE #:
- to edit number of mines change quantity in:
  -       const [nonBombCellsCount, setNonBombCellsCount] = useState(rows * cols - 5); <---- change the 5
  -       while (randomCells.length < 5) <----- change the 5


## Steps to creating Solitaire:

1. <u>Initial dnd</u>: Create 4 boxes (initial card stockpile) which can be dragged and dropped into 4 bordered areas (the foundations)
2. <u>'const initialCards'</u>: replace boxes with 52 cards of traditional playing deck, give each card id, rank and suit
3. <u>Card stack CSS</u>: Make cards stack when dropped into Foundations
4. <u>'const nextCard' + onClick={nextCard} </u>: Create button which cycles to next card in Card stock pile
5. <u>Conflict between nextCard button and droppable StockPile:</u> Had to rework Stockpile into a one-card display on nextCard click, rather than a pre-formed pile. Now you click 'next card' and get one droppable card per click (rather than cycling through a pile)

........up to here.........



7. <u>'const updateAdjacentCells'</u>: Iterate through cell array again, check which # cell ids contain 'X's and attach an 'a' to cells that are X+1 or X-1 (e.g. if X is 15, then cells 14 and 16 will become 14a and 16a) these will be numerical 'proximity cells' 
8. 
   1. If cell is adjacent to two X/mines it will get two 'a's, i.e. 3 becomes 3aa
9.  <u>'const updateAdjacentCells'</u>: For diagonal proximity cells
   1. Create diagonal relations  between cells and modify cell id based on diagonal link:
   -   ↖️ ⬆️ ↗️
   -   ⬅️ 💣 ➡️
   -   ↙️ ⬇️ ↘️
   -   All above directional cells will get update of proximity values once mines are randomly inserted into grid
10. <u>'const handleClick'</u>: check which cells hold 'X's (mines) and switch the X to a 💣 if clicked
11. 
12. <u>'const nonBombCells'</u>: Create a constant that holds all cells minus the X/mine cells 
13. 
14. <u>' setTimeout ' </u>: create an alert one clicking a mine creating 'game over screen' and game restarts
15. 
16. <u>'const handleClick'</u>: if one mine cell is clicked, all mine cells are revealed
17. <u>'generateInitialGrid' [...] content: '' revealed: false:</u>cells blank and unclicked at game start, <u>newGrid[rowIndex][colIndex].revealed = true:</u> once clicked, cell reveals proximity value

## TO DO: 

- [x] Create Foundation < /> area/boxes for cards to slot/stack into
- [x] Create Stockpile < /> of free cards
- [ ] Create Tableau < /> of 7 cols with incrementally more card rows
- [x] Drag n Drop mechanics between stockpile and foundation
- [ ] Drag n Drop mechanics between tableau and foundation
- [ ] Drag n Drop mechanics between stockpile and tableau
- [ ] Drag n Drop of entire tableau groups of cards between cols
- [ ] Foundation logic: accept cards in sequential order (A -> K)
- [ ]  
- [ ]  
- [ ] import card images
- [ ] reshuffle stockpile button, basically restarts game
- [ ] timer: restarts on game refresh
- [ ] add points system via timer, no points gained but leadership board based on quickest win (least time)
- [ ] Points system: add time to points so the less time, the more points you get, *** put this in minesweeper
- [ ] Handling upon: game win
- [ ] Handling upon: game loss, or no valid moves left that would allow game win
- [ ] highscores comp
- [ ] submit score/time if logged in
- [ ] user profile page shows how many games user has won, and quickest (least time) wins
- [ ] OPTIONAL: Some kind of animation upon winning game
- [ ] 


# SOLITAIRE ♤ ♡ ♢ ♧ 

Parts of the game:
- Tableau: Main game cards in 7 cols, card number = col number
- Stock Pile: Remainder cards not in Tableau, cycles
- Foundations: 4 places where cards stack by suit 

(ONE) STOCKPILE COMPONENT
- make twin boxes (box 1 = facedown card stack, box 2 = face up card cycle)
- make box 1 an event listener, on-click box 2 cycles through max 52 values (i.e. click counter reset at 52)
- 


(TWO) FOUNDATIONS COMPONENT

- create 4 boxes which cards will go into
- configure to only accept ace cards
  - configure to only accept a 1 card if an ace present
    - configure 1s to accept only 2s
      - " " 2s to only accept 3s
        - " " 3s to only accept 4s
          - ["..."] queens to only accept kings

(THREE) TABLEAU

- 



Components:

SolitaireGame (Main Component):

Manages the overall state of the game.
Renders the tableau, foundations, and stock pile.
Tableau:

Represents the main playing area where cards are laid out in columns.
Contains multiple TableauColumn components.
TableauColumn:

Represents a single column in the tableau.
Can contain multiple Card components.
Foundations:

Represents the foundation piles where cards are built up by suit.
FoundationPile:

Represents a single foundation pile.
Can contain multiple Card components.
StockPile:

Represents the stock pile from which cards are drawn.
Can be clicked to draw cards into the waste pile.
Card:

Represents a single playing card.
Displays the card's suit, rank, and face status (face up or face down).


## FOR ALL GAMES
- [ ] point accumulation system in-play, + calc points per safe cells revealed, 
- [ ] button to show high scores
- [ ] if user logged in, can save high score (post to user array)
- [ ] profile page where scores can be displayed
- [ ] create a 'start game' landing screen with 'new game', 'set difficulty' and 'high scores' buttons
- [ ] have 8-bit chiptune stylized music play during game (with button that starts and stops music, maybe a speaker pic that gets struck through)
- [ ] volume increase/decrease for music
- [ ] play through DL (self-titled, FN, RO) albums as 8-bit, and can play next song in list