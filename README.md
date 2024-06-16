# gamestack





## Steps to creating Minesweeper:

1. <u>'const Grid'</u>: Create 5 x 5 grid
2. <u>'const generateInitialGrid'</u>: Give every cell a unique numerical id (in 5x5 from 1 - 25) displayed on each cell
3. <u>'const handleClick'</u>: Make every cell an event listener/clickable
4. <u>'const generateNewGrid'</u>: Make 3 random cells display 'X' instead of their numerical id (these will be the bombs)
5. <u>'const updateAdjacentCells'</u>: Iterate through cell array again, check which # cell ids contain 'X's and attach an 'a' to cells that are X+1 or X-1 (e.g. if X is 15, then cells 14 and 16 will become 14a and 16a) these will be numerical 'proximity cells' 
   1. If cell is adjacent to two X/bombs it will get two 'a's, i.e. 3 becomes 3aa
6. <u>'const updateAdjacentCells'</u>: For diagonal proximity cells
   1. Create diagonal relations between cells and modify cell id based on diagonal link
7. <u>'const handleClick'</u>: check which cells hold 'X's (bombs) and switch the X to a 💣 if clicked
8. d
9.  d
10. hh
11. h
12. h
13. h
14. 