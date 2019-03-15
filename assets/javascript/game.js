// Global Variables

// Random number between 19-120
var randomNumber =Math.floor(Math.random()*101 + 19)
console.log(randomNumber);



//============================================================================

// Game code

// // Function to reset game
// resetGame()

// Generates a random number between 19-120 at start of game
$(document).ready(function(){
    var randomNumber =Math.floor(Math.random()*101 + 19)

// Appends random number to randomnumber id in HTML
$('#randomnumber').text(randomNumber);

console.log(randomNumber);

}
)


// .click Function to set up onclick event for crystals


// Makes sure key pressed is number


// Resets game once user's total score matches random number OR user goes over random number and loses
function resetGame() {
    randomNumber = totalScore
    pauseGame = false

// Gets a new random number


// Resets crystal numbers
    crystals = [];
    crystalValues = [];

    // For loop to reset crystal values
    

// Function to update the DOM
    updateDisplay()
}

// Updates HTML to show random number, wins, loses, and total score

//This is the setter of the innerHTML property in jQuery
$('#regTitle').html('Hello World');

//This is the getter of the innerHTML property in jQuery
var helloWorld = $('#regTitle').html();

