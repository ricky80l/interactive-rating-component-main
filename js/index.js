var voted = [];
var attID = 0;


$(".vote").click(function(e) {
    attID = e.target.id;
    voted.push(attID);
    e.preventDefault();
    $("#" + attID).addClass("selected");
    if (voted.length >= 1) {
        if (voted[voted.length - 2] != attID) {
            $("#" + voted[voted.length - 2]).removeClass("selected");
        }
    }
})

$(".bottone").click(function(e) {
    if (voted.length >= 1) {
        $(".point").text("You selected " + attID + " out of 5");
        thank_you();
    } else {
        console.log("none");
    }
})

function thank_you() {
    $("#rating").css("display", "none");
    $("#results").css("display", "block");
}