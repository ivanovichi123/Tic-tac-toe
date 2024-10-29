console.log("hey");

// First we make the game board 
//ATTENTION, in tie decide if you want it global or not 
// I need at least two functions, one function that makes the board ant he other that receive the return of the function
function gameBoard () {
    let row = 3;
    let column = 3;
    let board = [];
    for (let i = 0; i < row; i++) {  
        board[i] = [];
        for (let j = 0; j < column; j++) {
            board[i].push(0); 
        }
    }
    const putPiece = (row,column,playerValue) => {
        if (row > 2 || column > 2) {
            console.log("Not a possible move");
        }
        else {
            if (board[row][column] === 0) {
                board[row][column] = playerValue;
            }
            else {
                console.log("Not move");
            }
        }
    }
    const getBoard = () => {
        const theBoard = board;
        console.log(theBoard);
    }
    return {row,column,putPiece,getBoard}
}

function gameController () {
    const example2 = gameBoard();
    return {example2}
}

const game = gameBoard();








