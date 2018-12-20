let player1Name = "",
    player2Name = "",
    turn = "";
player = 1;
let grid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
let hasWinner = 0,
    moveCount = 0;


const boardMsg = function(X) {
    return $("#board").text(X);
}

$("#playButton").click(function() {

    if (hasWinner === 1) {
        boardMsg("Please reset the game!")
        reseting();
    }

    player1Name = $("#player-1").val();
    player2Name = $("#player-2").val();

    if (player1Name === "" || player2Name === "") {
        alert("Please set player all the names.");
        return;
    }

});

$('.square').on('click', function(event) {
    let squareSelected = $(this);
    if (player1Name == "" || player2Name == "") {
        alert("Please set player all the names.");
        return;
    }

    if (squareSelected.hasClass('X') || squareSelected.hasClass('Y')) {
        boardMsg("Please select another box.");
    } else {

        if (player === 1) {
            boardMsg(player2Name + "'s turn now!");
            squareSelected.addClass('X');
            squareSelected.text('X');
            if (winnerCheck('X')) {
                hasWinner = 1;
                boardMsg("Congrats! Player " + player1Name + " has won.");
            }
            player = 2;
        } else {
            boardMsg(player1Name + "'s turn now!");
            squareSelected.addClass('Y');
            squareSelected.text('Y');
            if (winnerCheck('Y')) {
                hasWinner = 1;
                boardMsg("Congrats! Player " + player2Name + " has won.");
            }
            player = 1;
        }
    }
});
const winnerCheck = function(symbol) {
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
    } else if (moveCount >= 9) {
        hasWinner = 1;
        boardMsg("Match Drawn");
        return false;
    } else {
        return false;
    }

};