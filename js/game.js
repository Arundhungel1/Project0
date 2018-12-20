//Declaring variables to setup the game

let player1Name = "";
let player2Name = "";
let player = 1;
let hasWinner = 0;
let moveCount = 0;


const boardMsg = function(X) { //Setting up display board where game info is displayed
    return $("#board").text(X);
}


$("#btn").on("click", function() { //applying logic to reset button to restart the game
    $(".square").text("").removeClass("X Y");
    boardMsg("");
    moveCount = 0;
});

$("#playButton").click(function() { // function to  start the game

    if (hasWinner === 1) {
        boardMsg("Please reset the game!")

    }

    player1Name = $("#player-1").val(); //adding name of the players
    player2Name = $("#player-2").val();

    if (player1Name === "" || player2Name === "") { // logic to ask user to enter player name
        alert("Please set player all the names.");
        return;
    }

});

$('.square').on('click', function(event) {
    let squareSelected = $(this);
    if (player1Name == "" || player2Name == "") { //logic to ask user to set player name
        alert("Please set player all the names.");
        return;
    }

    if (squareSelected.hasClass('X') || squareSelected.hasClass('Y')) { //avoid playing same square
        boardMsg("Please select another box.");
    } else {

        if (player === 1) { // set up turn and enter symbol
            boardMsg(player2Name + "'s turn now!");
            squareSelected.addClass('X');
            squareSelected.text('X');
            if (winnerCheck('X')) { //check if player 1 is winner
                hasWinner = 1;
                boardMsg("Congrats! Player " + player1Name + " has won. Please reset the game!");
                return;
            }
            player = 2; // if not go to player 2
        } else {
            boardMsg(player1Name + "'s turn now!");
            squareSelected.addClass('Y');
            squareSelected.text('Y');
            if (winnerCheck('Y')) {
                hasWinner = 1;
                boardMsg("Congrats! Player " + player2Name + " has won. Please reset the game!");
                return;
            }
            player = 1;
        }
    }
});
const winnerCheck = function(symbol) { //winning conditions logic
    moveCount++;
    if ($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('.sq3').hasClass(symbol)) {
        return true;
    } else if ($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq6').hasClass(symbol)) {
        return true;
    } else if ($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
        return true;
    } else if ($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
        return true;
    } else if ($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)) {
        return true;
    } else if ($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
        return true;
    } else if ($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
        return true;
    } else if ($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
        return true;
    } else if (moveCount >= 9) { // logic to check if match is a draw
        hasWinner = 1;
        boardMsg("Match Drawn. Please reset the game!");
        return false;
    } else {
        return false;
    }

};