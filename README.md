# SOLITAIRE 🂡

Current games in gamestack:

- [ ] Minesweeper
- [x] Solitaire

## Table of Contents

- [SOLITAIRE 🂡](#solitaire-)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Badges](#badges)
  - [Visuals](#visuals)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Dev Stuff: Building:](#dev-stuff-building)
  - [To do:](#to-do)
  - [To do for all games](#to-do-for-all-games)

## Description

A personal project to create a react MERN stack app which has a number of simple games. I used trial and error and ChatGPT prompting. This was more challenging to make than minesweeper and took some experimentation, and a lot of debugging.

As with minesweeper the game had to be divided up into the smallest working components/units. It began as a simple DnD interface where one of 52 boxes (cards) could be dragged and dropped onto 4 rectangles (foundations). Then the DnD dynamic was configured to operate according to Solitaire rules, preventing DnD unless there was a match of card suit and rank.

Lessons learned from building this project:

- How to implement a Drag and Drop package (react beautiful dnd);
  - The dnd packages don't allow dragging of group items. I had to combine grouped cards into one object and style it like multiple cards. Apparently you can drag multiple objects using 'react-beautiful-dnd multi drag pattern'.
- Make the game full generally, rather than specific and partially;
- Create basic working dnd structures and build the game around them, rather than try to make a conditional click-based display/game, and implement the dnd dynamic later. The more moving parts, the harder it is to get dnd in;
- Create all game display parts (stockpile, foundations, tableau) first, and then give them operational logic, rather than create one fully working part one at a time;
- Make all possible moves legal and then impose conditions later, rather than build on priori rules.
- Try to keep all code together for context, but where necessary, make backup copies with partial code for debugging.
- Save all/extra code in backup files.

<u>Generally: Build God mode basic, expand, then limit. </u>

## Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) 
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) 
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) 
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) 
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
![FontAwesome](https://img.shields.io/badge/Font%20Awesome-538DD7.svg?style=for-the-badge&logo=Font-Awesome&logoColor=white) 
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## Visuals

[Visit App deployed to Heroku](https://minesweeper10-611b154e8013.herokuapp.com/)

![minescreen3](https://github.com/sifzerda/minesweeper/assets/139626561/0d09ac37-ce4f-480c-ad35-8a1c61b1464c)
![minesweeper 5](https://github.com/sifzerda/minesweeper/assets/139626561/e1d21645-ff92-44ed-8bc4-57f8eb47ef13)

## Installation

```bash
git clone https://github.com/sifzerda/solitaire.git
cd solitaire
npm install
npm run start
```

## Usage

 The game executes a game of solitaire with traditional rules. Parts:
 
 - Start screen
 - Game
 - Final score page + score submission
 - High scores page
 - If logged on: profile page with User scores.

## Dev Stuff: Building:

The main/mother function is 'onDragEnd' which indexes and executes all other major DnD functions. 

1. <u>'const initialCards':</u> Creates full playing card deck data.  
2. <u>'const initialDecks':</u> Splits the deck into 4 suits and initializes empty.
3. <u>'const initialTableau':</u> Creates Tableau into 7 cols, each col contains the number of cards as it's id (e.g. col 7 contains 7 cards). Initializes empty. Originally tableau sliced off cards from the stockpile, but the 'card sharing' caused issues and had to be reworked.
4. <u>'const Solitaire':</u> Runs main game code (i.e. covers user activity).
5. <u>'const updatedCards', 'const updatedDecks'</u> The state of each foundation suit deck is trackable separately and updated per card dropped.
6. <u>'const [currentCardIndex, setCurrentCardIndex] = useState(0)', 'const nextCard' + onClick={nextCard}:</u> Actions the Stockpile click cycle. 
7. <u>'const shuffleArray':</u> shuffles cards in stockpile and tableau after distribution.
8. <u>'const onDragEnd':</u> Collects and Executes all DnD functions for stockpile, tableau and foundations:
   - <u>'const handleStockpileToTableauDrop':</u> DnD from Stockpile to Tableau;
   - <u>'const handleTableauToTableauDrop':</u> DnD from Tableau to Tableau;
   - <u>'handleFoundationDrop':</u> DnD from any to Foundations.
9.  <u>'return':</u> renders stockpile ('cards'), tableau, and foundations and contains in DnD areas.
Other:
1.  <u>'else if (source.droppableId.startsWith('tableau')...)':</u> Enables tableau cards to be dragged in stacks (piles), from source.index -> last-item. 
2.  <u>'return {... t-drag-card-group}':</u> this targets a tableau -> tableau pile of cards and applies a class selector which allowed me to modify appearance of dragging card pile as a single object/stack. React Beautiful DnD didn't seem to have a 'group/multiple object/s' dragging graphic, so I had to make it manually with CSS.
3.  <u>return {...}</u> conditionally renders tableau card as faceup or facedown depending on card's array index.
4.  <u>'index === pile.cards.length - 1 ? ...'</u> Conditional rendering of card DnD based on whether card is faceup or facedown. Facedown cards are not draggable. Tableau.pile array -1 is facedown (i.e. everything but top card).
5.  <u>'const initialTableau': </u>'faceUp' property tracks faceup cards. 

## To do: 

- [x] Create Foundation area/boxes for cards to slot/stack into
- [x] Create Stockpile of free cards
- [x] Drag n Drop mechanics between stockpile and foundation
- [x] Foundation logic: accept cards in sequential order (A -> K)
  - [x] Will accept Ace per suit
  - [x] Will accept Ace - > 2 per suit
  - [x] Will accept Ace - > 3 per suit
  - [x] Will accept Ace -> K (all) per suit 
- [x] Create Tableau of 7 cols with incrementally more card rows
- [x] Drag n Drop mechanics between tableau and foundation
- [x] Drag n Drop mechanics between stockpile and tableau
  - [x] refine dropping to obey solitaire rules conditions
- [x] Drag n Drop between tableau columns
  - [x] refine dropping to obey solitaire rules conditions
- [x] Drag n Drop of entire tableau groups of cards between cols
- [x] Facedown all tableau cards except top
- [x] Change 'next card' button to a facedown stack of cards
  - [x] I.e. make the stockpile a stack (or show all cards) and style like foundation and tableau stacks (but increase neg margin)
- [x] Style cards in tableau to layer
- [x] Style cards in foundation to layer
- [x] recover tableau group drag animation (group drag works it's just lost the in-between animation)
  - [x] After testing/debugging, change -150 to -170 of CSS: .card-in-deck + .card-in-deck

Stuff to do once main game functioning (i.e. easier implementable latter tasks):

- [] double clicking a card in stockpile; if there's a valid move to foundations (but not other areas), will automatically make that move 
- [] double clicking a card in tableau; if there's a valid move to foundations (but not other areas), will automatically make that move 
- [x] import card images - prob do this last
- [ ] reshuffle stockpile button, basically restarts game
- [ ] timer: restarts on game refresh
- [ ] Points system, each time a card is placed on foundation, it adds points (if cards can be removed from foundation, don't forget to subtract points for that)
-  Points system: add time to points so the less time, the more points you get, *** put this in minesweeper
- [ ] Handling upon: game win
- [ ] Handling upon: game loss, or no valid moves left that would allow game win
- [ ] add points system via timer, no points gained but leadership board based on quickest win (least time)
- [ ] highscores comp
- [ ] submit score/time if logged in
- [ ] user profile page shows how many games user has won, and quickest (least time) wins
- [ ] Make each part of the game a separate component
- [ ] OPTIONAL: Some kind of animation upon winning game
- [ ] switch content into solitaire git repo once finished and ready to deploy

## To do for all games
- [ ] create start game landing screen: + start game btn; + high scores btn
- [ ] end game/win game screen, + view score, + submit score, + see high scores, + restart game
- [ ] if user logged in, can save high score (post to user array)
- [ ] profile page where scores can be displayed
- [ ] create a 'start game' landing screen with 'new game', 'set difficulty' and 'high scores' buttons
- [ ] have 8-bit chiptune stylized music play during game (with button that starts and stops music, maybe a speaker pic that gets struck through)
- [ ] volume increase/decrease for music
- [ ] play through albums as 8-bit, and can play next song in list