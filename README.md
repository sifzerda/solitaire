Consider making solitaire with Vue or Angular, or GUI with help of Canvas API
Vue may be easiest, apparently Angular has a bigger learning curve

# SOLITAIRE 🂡

#2 in gamestack.

## Table of Contents

- [SOLITAIRE 🂡](#solitaire-)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Badges](#badges)
  - [Visuals](#visuals)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Building:](#building)
  - [To do:](#to-do)
  - [To do for all games](#to-do-for-all-games)

## Description

This is a personal project to create a react MERN stack app which has a number of simple games. I did not use online instructions, only trial and error and ChatGPT prompting.

As with minesweeper the game had to be divided up into the smallest working components/units. It began as a simple dnd interface where one of 52 boxes (cards) could be dragged and dropped onto 4 rectangles (foundations). Then the dnd dynamic was configured to operate according to Solitaire rules, preventing dnd unless there was a match of card suit and rank.

Lessons learned from building this project:

- How to implement a Drag and Drop package (react beautiful dnd)
- Make the game fully generally, rather than specifically partially
- Create basic working dnd structures and build the game around them, rather than try to make a conditional click-based display/game, and implement the dnd dynamic later. The more moving parts, the harder it is to get dnd in;
- Create all game display parts (stockpile, foundations, tableau) first, and then give them operational logic, rather than create one fully working part one at a time;
- Make all possible moves legal and then impose conditions later, rather than build on priori rules.

<u>Generally: Build God mode, then limit. </u>
 
Games:

- [ ] Minesweeper
- [x] Solitaire
- [ ] Chess - would need an AI PC opponent
- [ ] Poker
- [ ] Slot Machine
- [ ] Pacman (similar to snake)
- [ ] Frogger
- [ ] Flyswatting game
- [ ] Bad Toys 
- [ ] SideShow shooting gallery
- [ ] Go Fish, Uno, etc (would need AI PC opponent)
- [ ] snake (snake eats and gets bigger)

Others:

- chess
- poker
- slot machine
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

 The game executes a typical game of solitaire with traditional rules. There is also a landing screen to start game, a high scores page, win and loss screens, and score submission page. Registered users can also view the number of games they've won and best play times on their profile page.

## Building:

1. <u>Initial dnd:</u> Create 4 boxes (initial card stockpile) which can be dragged and dropped into 4 bordered areas (the Foundations)
2. <u>'const initialCards':</u> Creates the full playing card deck of 52 cards.  
3. <u>'const initialDecks':</u> Splits the deck into 4 suits and initializes empty.
4. <u>'const initialTableau':</u> Creates Tableau into 7 cols, each col contains the number of cards as it's id (e.g. col 7 contains 7 cards). Initializes empty. Originally tableau sliced off cards from the stockpile, but the 'card sharing' caused issues and had to be reworked.
5. 8. <u>'const updatedCards', 'const updatedDecks'</u> The state of each foundation suit deck is trackable separately and updated per card dropped.
6. <u>'const [currentCardIndex, setCurrentCardIndex] = useState(0)', 'const nextCard' + onClick={nextCard}:</u> Actions the Stockpile cycle. Conflict between nextCard button and droppable StockPile: Had to rework Stockpile into a one-card display on nextCard click, rather than a pre-formed pile. Now you click 'next card' and get one droppable card displayed per click (rather than cycling through a facedown pile with top card faceup)
7. <u>'const shuffleArray':</u> Fisher-Yates algorithm shuffles cards in stockpile and tableau after distribution.
8. <u>'const onDragEnd':</u> covers dnd from stockpile and tableau to foundations; dragging card from source->destination, + adding card to destination, removing card from source.
9. <u>'const isMoveAllowed':</u> if conditional ensures foundations stack per rank and suit.
10. <u>'return':</u> renders stockpile ('cards'), tableau, and foundations and contains in dnd areas.
11. <u>'if (source.droppableId === 'revealed-cards') '':</u> covers dragging stockpile, dropping to tableau.
12. <u>'else if (source.droppableId.startsWith('tableau') && destination.droppableId.startsWith('tableau'))':</u> covers DnD within tableau. 



13. <u>'const onDragEnd':</u> 
14. <u></u>
15. <u></u>
16. <u></u>
17. <u></u>
18. <u></u>
19. <u></u>
20. <u></u>
21. <u></u>
22. <u></u>
23. <u></u>

## To do: 

- make tableau card piles draggable
- stockpile -> tableau dnd rules
- tableau -> tableau dnd rules



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
  - [ ] refine dropping to obey solitaire rules conditions
- [x] Drag n Drop between tableau columns
  - [ ] refine dropping to obey solitaire rules conditions
- [x] Drag n Drop of entire tableau groups of cards between cols
- [ ] Facedown all tableau cards except top
- [ ] Change 'next card' button to a facedown stack of cards
  - [ ] I.e. make the stockpile a stack (or show all cards) and style like foundation and tableau stacks (but increase neg margin)
- [x] Style cards in tablau to layer
- [x] Style cards in foundation to layer
  - [ ] After testing/debugging, change -150 to -170 of CSS: .card-in-deck + .card-in-deck
- [ ] BEFORE FINAL STYLING: Once game works fine, save a copy of the Notableau file and .scss to the 'Backups' folder, so if there's an unforseen issue in future, you can debug using God Mode all moves legal (instead of having to play through the game)
- [ ] x
- [ ]  

Stuff to do once main game functioning (i.e. easy implementable latter tasks):

- [ ] import card images - prob do this last
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