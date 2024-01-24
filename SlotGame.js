// Steps to follow
/*-------------------*/
// Deposit Money
// Collect a bet amount
// Spin the slot machine
// Check if the user has won
// Give the user their winnings
// Play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOL_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8,
};

const SYMBOL_VALUE = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
};

// Function to get the initial deposit amount
const deposite = () => {
    while (true) {
        const depositenumber = prompt("Enter a number: ");
        const numberdepositeamount = parseFloat(depositenumber);
        if (isNaN(numberdepositeamount) || numberdepositeamount <= 0) {
            console.log("Invalid number, Try again");
        } else {
            return numberdepositeamount;
        }
    }
};

// Function to get the number of lines to bet on
const getnumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter a number of lines to bet on (1-3): ");
        const numberoflines = parseFloat(lines);

        if (isNaN(numberoflines) || numberoflines > 3 || numberoflines <= 0) {
            console.log("Invalid number line, Try again");
        } else {
            return numberoflines;
        }
    }
};

// Function to get the bet amount
const getbet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the total bet: ");
        const numberbet = parseFloat(bet);

        if (isNaN(numberbet) || numberbet <= 0 || numberbet > balance / lines) {
            console.log("Invalid bet, Try again");
        } else {
            return numberbet;
        }
    }
};

// Function to simulate spinning the slot machine and generating random symbols
const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOL_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [];
    for (let i = 0; i < COLS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
};

// Function to transpose the matrix of reels to rows
const transpose = (reels) => {
    const rows = [];

    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i]);
        }
    }

    return rows;
};

// Function to print the rows
const printRows = (rows) => {
    for (const row of rows) {
        let rowString = "";
        for (const [i, symbol] of row.entries()) {
            rowString += symbol;
            if (i !== row.length - 1) {
                rowString += "|";
            }
        }
        console.log(rowString);
    }
};

// Function to calculate winnings based on symbols
const getWinnings = (rows, bet, lines) => {
    let winnings = 0;

    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;

        for (const symbol of symbols) {
            if (symbol !== symbols[0]) {
                allSame = false;
                break;
            }
        }
        if (allSame) {
            winnings += bet * SYMBOL_VALUE[symbols[0]];
        }
    }
    return winnings;
};

// Main game function
const game = () => {
    let balance = deposite();

    while (true) {
        console.log("You have a balance of $" + balance);
        const numberoflines = getnumberOfLines();
        const bet = getbet(balance, numberoflines);
        balance -= bet * numberoflines;
        const reels = spin();
        const rows = transpose(reels);
        printRows(rows);
        const winnings = getWinnings(rows, bet, numberoflines);
        balance += winnings;
        console.log("You won, $" + winnings.toString());

        if (balance <= 0) {
            console.log("You ran out of Money!");
            break;
        }

        const playAgain = prompt("Do you want to play again? (y/n)? ");
        if (playAgain.toLowerCase() !== 'y') break;
    }
};

// Start the game
game();
