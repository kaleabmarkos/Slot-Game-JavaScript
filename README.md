# Slot-Game-JavaScript
# Slot-Game-JavaScript

Slot Machine Game Documentation
Table of Contents
Introduction
How to Play
Game Logic
Functions
Running the Game
Introduction
Welcome to the Slot Machine Game! This Node.js console-based game simulates a slot machine where players can deposit money, place bets on multiple lines, spin the reels, and potentially win based on the combination of symbols.

How to Play
Follow these steps to play the game:

Deposit Money:

Enter a positive number as your initial deposit.
Place Bets:

Choose the number of lines you want to bet on (between 1 and 3).
Enter the total bet amount.
Spin the Reels:

The slot machine will randomly generate symbols for each reel.
Check for Winnings:

The game checks if the symbols on the selected lines match.
If all symbols on a line are the same, you win based on the symbol's value.
Receive Winnings:

Your winnings are calculated and added to your balance.
Play Again:

Decide if you want to play again by entering 'y' or 'n' when prompted.
Game Logic
The game uses a 3x3 matrix to represent the slot machine reels.
Symbols are randomly generated for each reel based on their respective counts.
Winning combinations are checked on the selected lines.
Winnings are calculated based on the value of the winning symbol.
Functions
deposite()
Prompts the user to enter an initial deposit amount.
Validates the input to ensure it is a positive number.
getnumberOfLines()
Prompts the user to enter the number of lines to bet on (1-3).
Validates the input to ensure it is a valid number of lines.
getbet(balance, lines)
Prompts the user to enter the total bet amount.
Validates the input to ensure it is a valid bet within the available balance.
spin()
Generates random symbols for each reel based on the counts defined in SYMBOL_COUNT.
transpose(reels)
Transposes the matrix of reels to rows for easier symbol checking.
printRows(rows)
Prints the rows of symbols for visualization.
getWinnings(rows, bet, lines)
Checks for winning combinations in the rows.
Calculates and returns the winnings based on the winning symbol's value.
game()
Main game loop that orchestrates the entire game flow.
Manages user interactions, balances, and game state.
Running the Game
Run the game by executing the script in a Node.js environment.
Follow the prompts to play the game and enjoy the slot machine experience!
Feel free to modify the game or add additional features to enhance the gameplay. Happy gaming!

