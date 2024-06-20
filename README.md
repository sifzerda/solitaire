Consider making solitaire with Vue or Angular, or GUI with help of Canvas API
Vue may be easiest, apparently Angular has a bigger learning curve

# SOLITAIRE ♤ ♡ ♢ ♧

#2 in gamestack.

## Table of Contents

- [SOLITAIRE ♤ ♡ ♢ ♧](#solitaire----)
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

This is a personal project to create a react MERN stack app which has a number of simple games. These were built with ChatGPT help only. 

Games:

- [ ] Minesweeper
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

- solitaire
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

INSERT SCREENSHOTS

[Visit App deployed to Heroku](https://minesweeper10-611b154e8013.herokuapp.com/)

## Installation

```bash
git clone https://github.com/yourusername/project.git
cd project
npm install
```

## Usage

A Solitaire gameboard has 3 main parts: the Stock Pile, the Foundations, and the Tableau.

Tableau: main game cards in 7 cols, card numbers = col number, e.g. col 7 contains 7 cards

Stockpile: Remainder cards not in Tableau, cycles

Foundations: 4 places where cards stack by suit. 

 Each of these form a separate component in the app. There is also a landing screen to start game, a high scores page, win and loss screens, and score submission page.

## Building:

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

## To do: 

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
- [ ] Make each part of the game a separate component
- [ ] OPTIONAL: Some kind of animation upon winning game
- [ ] 

## To do for all games
- [ ] point accumulation system in-play, + calc points per safe cells revealed, 
- [ ] button to show high scores
- [ ] if user logged in, can save high score (post to user array)
- [ ] profile page where scores can be displayed
- [ ] create a 'start game' landing screen with 'new game', 'set difficulty' and 'high scores' buttons
- [ ] have 8-bit chiptune stylized music play during game (with button that starts and stops music, maybe a speaker pic that gets struck through)
- [ ] volume increase/decrease for music
- [ ] play through DL (self-titled, FN, RO) albums as 8-bit, and can play next song in list