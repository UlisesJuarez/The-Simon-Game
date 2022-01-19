var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []

//user button clicked
$(".btn").click(function () {
    var userChosenColour = $(this).attr("id")
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});


function nextSequence() {
    var randomNumber = Math.round((Math.random() * 3));
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour)

    //adding sounds to buttons
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function () {$("#"+currentColour).removeClass("pressed");}, 100);
}