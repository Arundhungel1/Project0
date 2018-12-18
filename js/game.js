let player = 1;

$('.square').on('click', function(event) {

    let squareSelected = $(this);
    if (squareSelected.hasClass('X') || squareSelected.hasClass('Y')) {
        alert("This box has already been played. Please select another box.")
    } else {
        if (player === 1) {
            squareSelected.addClass('X');
            squareSelected.text('X');
            if (winnerCheck('X')) {
                alert("Congrats! Player " + player + " has won.")
            }
            player = 2;
        } else {
            squareSelected.addClass('Y');
            squareSelected.text('Y');
            if (winnerCheck('Y')) {
                alert("Congrats! Player " + player + " has won.")
                player = 1;
            } else {

            }

        }
    }
});
const winnerCheck = function(symbol) {
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
    } else {
        return false;
    }

}