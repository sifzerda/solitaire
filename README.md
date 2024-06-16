# Gamestack

This is a personal project to create a react MERN stack app which has a number of simple games. These were built from scratch (i.e. no code derived from elsewhere) with ChatGPT help. 

Currently has minesweeper.


Others:

- solitaire
- pacman
- frogger
- poker
- pool (?)
- pinball (?)


## Steps to creating Minesweeper:

1. <u>'const Grid'</u>: Create 5 x 5 grid
2. <u>'const generateInitialGrid'</u>: Give every cell a unique numerical id (in 5x5 from 1 - 25) displayed on each cell
3. <u>'const handleClick'</u>: Make every cell an event listener/clickable
4. <u>'const generateNewGrid'</u>: Make 3 random cells display 'X' instead of their numerical id (these will be the mines)
5. <u>'const updateAdjacentCells'</u>: Iterate through cell array again, check which # cell ids contain 'X's and attach an 'a' to cells that are X+1 or X-1 (e.g. if X is 15, then cells 14 and 16 will become 14a and 16a) these will be numerical 'proximity cells' 
   1. If cell is adjacent to two X/mines it will get two 'a's, i.e. 3 becomes 3aa
6. <u>'const updateAdjacentCells'</u>: For diagonal proximity cells
   1. Create diagonal relations  between cells and modify cell id based on diagonal link:
   -   ↖️ ⬆️ ↗️
   -   ⬅️ 💣 ➡️
   -   ↙️ ⬇️ ↘️
   -   All above directional cells will get update of proximity values once mines are randomly inserted into grid
7. <u>'const handleClick'</u>: check which cells hold 'X's (mines) and switch the X to a 💣 if clicked
8. <u>'const nonBombCells'</u>: Create a constant that holds all cells minus the X/mine cells 
9.  <u>' setTimeout ' </u>: create an alert one clicking a mine creating 'game over screen' and game restarts
10. <u>'const handleClick'</u>: if one mine cell is clicked, all mine cells are revealed
11. <u>'generateInitialGrid' [...] content: '' revealed: false:</u>cells blank and unclicked at game start, <u>newGrid[rowIndex][colIndex].revealed = true:</u> once clicked, cell reveals proximity value
12. h
13. h
14. h

## TO DO: 

[x] Grid
[x] Event listening
[x] Mines
[x] Proximity dynamic
[x] Remove Xs from mine cells
[x] Clicking a mine = game over
[x] Remove id visibility, switch to single number
[] non value cells (currently blank) update with styling change when clicked
[] blocks of non value cells get selected if one is 
[] CSS styling (bomb cell red, button depressed)
[] 3 difficulties, or difficulty options:
- mimic actual game difficulty options 
- grid size
- mine number
