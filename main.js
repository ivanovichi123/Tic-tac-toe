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

    //Reset the board every time someone wins
    const reset = () => {
        for (let i = 0;i < board.length;i++){
            for (let j = 0; j < board.length;j++) {
                board[i][j] = 0;
            }
        }
    }

    //The function of putting a piece in the Tic-tac-toe
    const putPiece = (row,column,playerValue) => {
        //If the input not match with the length of the array you cant put anything
        if (row > 2 || column > 2) {
            console.log("Not a possible move in the grid");
            return false;
        }
        else {
            //If the space is available you put the player token
            if (board[row][column] === 0) {
                board[row][column] = playerValue;
            }
            else {
                console.log(`There is already a token in ${row}, ${column}.`);
                return false;
            }
        }
    }
    //Function that renders the board in the console
    const getBoard = () => board;
        // console.log(theBoard);

    //Function that checks if there is three of the same tokens in a column
    const checkWinnerColumn = (activePlayer,switchPlayer) => {
        const theValues = board;
        for (let i = 0;i < theValues.length; i++) {
            let sum = "";
            for (let j = 0; j < theValues[i].length; j++) {
                sum += theValues[i][j];
                let checkWinner = getPossibilities(activePlayer,switchPlayer);
                if (sum === checkWinner[0].token) {
                    alert(`${checkWinner[0].name} is the winner!!!`);
                    return true;
                }
                else if (sum === checkWinner[1].token) {
                    alert(`${checkWinner[1].name} is the winner!!!`);
                    return true;
                }
            }
        }
    }

    //Function that checks if there is three of the same tokens in a row
    const checkWinnerRow = (activePlayer,switchPlayer) => {
        const theValues = board;
        for(let i = 0; i < theValues.length; i++) {
            let sum = "";
            for (let j = 0; j < theValues.length; j++) {
                sum += theValues[j][i];
                let checkWinner = getPossibilities(activePlayer,switchPlayer);
                if (sum === checkWinner[0].token) {
                    alert(`${checkWinner[0].name} is the winner!!!!`);
                    return true
                }
                else if (sum === checkWinner[1].token){
                    alert(`${checkWinner[1].name} is the winner!!!`);
                    return true;
                }
            }
        }
    }

    //Function that checks if there is three of the same tokens in a diagonal form
    const checkDiagonalWinner = (activePlayer, switchPlayer) => {
        const theValues = board;
        let sum = "";
        for (let i = 0; i < theValues.length; i++) {
            for (let j = 0; j < theValues.length; j++) {
                if (j === i) {
                    sum += theValues[i][j];
                    let checkWinner = getPossibilities(activePlayer,switchPlayer);
                if (sum === checkWinner[0].token) {
                    alert(`${checkWinner[0].name} is the winner!!!!`);
                    return true
                }
                else if (sum === checkWinner[1].token){
                    alert(`${checkWinner[1].name} is the winner!!!`);
                    return true;
                }
                }
            }
        }
    }

    //Function that checks if there is three of the same tokens in an inverse diagonal form
    const checkInverseDiagonalWinner = (activePlayer, switchPlayer) => {
        const theValues = board;
        let cont = 0;
        let i = 2;
        let j = 0;
        let sum = "";
        while(cont < theValues.length) {
            sum += theValues[i][j];
            i -= 1;
            j += 1;
            cont += 1
        }
        let checkWinner = getPossibilities(activePlayer,switchPlayer);
                if (sum === checkWinner[0].token) {
                    alert(`${checkWinner[0].name} is the winner!!!!`);
                    return true;
                }
                else if (sum === checkWinner[1].token){
                    alert(`${checkWinner[1].name} is the winner!!!`);
                    return true;
                }
    }

    //Function that gets the how a winner token should look (XXX or OOO)
    const getPossibilities = (activePlayer,switchPlayer) => {
        const proof1 = {
            name: activePlayer().name,
            token: activePlayer().token + activePlayer().token + activePlayer().token
        }
        switchPlayer();
        const proof2 = {
            name: activePlayer().name,
            token: activePlayer().token + activePlayer().token + activePlayer().token
        }
        switchPlayer();
        return [proof1,proof2]; 
    }
    //I return the functions
    return {putPiece,getBoard, checkWinnerColumn, checkWinnerRow, checkDiagonalWinner, checkInverseDiagonalWinner, reset}
}

//Now we make the movements of the game
function gameController (
    playerOneName = "PlayerOne",
    playerTwoName = "PlayerTwo"
) {
    //I store the functions of the gameBoard in another variable
    const board = gameBoard();

    //Define the players of the game
    const players = [
        {
            name: playerOneName,
            token: "X"
        },
        {
            name:playerTwoName,
            token: "O"
        }
    ];

    //The first player to play will be the player one who is in the index 0 of the players array
    let activePlayer = players[0];

    //Function that switches who is the active player
    const switchPlayerTurn = () => {
        if (activePlayer === players[0]) {
            activePlayer = players[1];
        }
        else {
            activePlayer = players[0];
        }
    };

    //Variable who storage the active player
    const getActivePlayer = () => activePlayer;

    //Render the board and states which player has to move
    const printNewRound = () => {
        board.getBoard();
        console.log(`${getActivePlayer().name}'s turn.`);
    }


    //Plays the round calling a function from the gameBoard
    const playRound = (row,column) => {
        console.log(`Putting ${getActivePlayer().name}'s token into the ${row},${column} section`);
        // I check if the move is available if not it does not continue the function
        if(board.putPiece(row,column,getActivePlayer().token) === false){
            return;
        } 
        

        // check if someone wins
        // let check1 = board.checkWinnerColumn(getActivePlayer,switchPlayerTurn);
        // let check2 = board.checkWinnerRow(getActivePlayer,switchPlayerTurn);
        // let check3 = board.checkDiagonalWinner(getActivePlayer, switchPlayerTurn);
        // let check4 = board.checkInverseDiagonalWinner(getActivePlayer,switchPlayerTurn);

        // //Resets the game if there is a winner
        // if (check1 === true || check2 === true || check3 === true ||  check4 === true) {
        //     alert("The game is restarting");
        //     board.reset();
        //     if (getActivePlayer() === players[1]) {
        //         switchPlayerTurn();
        //     }
        //     printNewRound();
        //     return;

        // }


        // switch player turn 
        switchPlayerTurn();
        printNewRound();

    }

    const checkWinner = () => {
        let check1 = board.checkWinnerColumn(getActivePlayer,switchPlayerTurn);
        let check2 = board.checkWinnerRow(getActivePlayer,switchPlayerTurn);
        let check3 = board.checkDiagonalWinner(getActivePlayer, switchPlayerTurn);
        let check4 = board.checkInverseDiagonalWinner(getActivePlayer,switchPlayerTurn);

        //Resets the game if there is a winner
        if (check1 === true || check2 === true || check3 === true ||  check4 === true) {
            alert("The game is restarting");
            board.reset();
            if (getActivePlayer() === players[1]) {
                switchPlayerTurn();
            }
            printNewRound();
            return;
        }
    }

    //Prints the round for the first play
    printNewRound();

    return {playRound, getActivePlayer, getBoard: board.getBoard, checkWinner};
}

function screenController () {
    const game = gameController();
    const playerTurnDiv = document.querySelector(".turn");
    const boardDiv = document.querySelector(".board");

    const updateScreen = () => {
        boardDiv.textContent = "";
    
    const board = game.getBoard();
    const activePlayer = game.getActivePlayer();
    playerTurnDiv.textContent = `${activePlayer.name}'s turn.....`;

    let i = 0
    board.forEach(row => {
        let j = 0;
        row.forEach ((cell, index)  => {
            const cellButton = document.createElement("button");
            cellButton.classList.add("cell");
            cellButton.dataset.column = index;
            cellButton.dataset.row = i;
            cellButton.textContent = game.getBoard()[i][j];
            boardDiv.appendChild(cellButton);
            j++
        })
        i += 1;
    })


}

    function clickHandlerBoard(e) {
        const selectedColumn = e.target.dataset.column;
        const selectedRow = e.target.dataset.row;
        if (!selectedColumn || !selectedRow) return;
        game.playRound(selectedRow,selectedColumn);
        updateScreen();
        setTimeout(() => {
            checkWinner();
          }, 1);
        console.log(game.getBoard());
}
boardDiv.addEventListener("click", clickHandlerBoard);

const checkWinner = () => {
    game.checkWinner();
    updateScreen();
}


updateScreen();




}

screenController();



// const game = gameController();




// Make comments: Check
// When you put a token that already exits just repeat the turn: Check
// Decide how they win: Check

// To do:

// change the for Each to affect also the column: uncheck;

