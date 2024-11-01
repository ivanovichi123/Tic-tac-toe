console.log("hey");

// First we make the game board 
function gameBoard () {
    //I define the rows, columns and the array of the board
    let row = 3;
    let column = 3;
    let board = [];
    //For every row and column I push the number zero in three arrays
    for (let i = 0; i < row; i++) {  
        board[i] = [];
        for (let j = 0; j < column; j++) {
            board[i].push(0); 
        }
    }
    //The function of putting a piece in the Tic-tac-toe
    const putPiece = (row,column,playerValue) => {
        //If the input not match with the length of the array you cant put anything
        if (row > 2 || column > 2) {
            console.log("Not a possible move");
        }
        else {
            //If the space is available you put the player token
            if (board[row][column] === 0) {
                board[row][column] = playerValue;
            }
            else {
                console.log("Not move");
            }
        }
    }
    //Function that renders the board in the console
    const getBoard = () => {
        const theBoard = board;
        console.log(theBoard);
    }
    //I return the functions
    return {putPiece,getBoard}
}

function gameController (
    playerOneName = "PlayerOne",
    playerTwoName = "PlayerTwo"
) {
    const board = gameBoard();
    const players = [
        {
            name: playerOneName,
            token: 1
        },
        {
            name:playerTwoName,
            token: 2
        }
    ];
    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        if (activePlayer === players[0]) {
            activePlayer = players[1];
        }
        else {
            activePlayer = players[0];
        }
    };
    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.getBoard();
        console.log(`${getActivePlayer().name}'s turn.`);
    }

    const playRound = (row,column) => {
        console.log(`Putting ${getActivePlayer().name}'s token into the ${row},${column} section`);
        board.putPiece(row,column,getActivePlayer().token);

        // check if someone wins

        // switch player turn 
        switchPlayerTurn();
        printNewRound();
    }

    printNewRound();




    return {playRound, getActivePlayer}
}


const game = gameController();




// Make comments
// When you put a token that already exits just repeat the turn
// Decide how they win


