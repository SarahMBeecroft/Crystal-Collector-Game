//Global variables

// Sets random number
var randomNumber = [];

// Resets game
var pauseGame = false

// Array for wins
var wins = [];

// Array for losses
var losses = [];

// Array for total score
var totalScore

// Crystals
var crystals = ["crystal1", "crystal2", "crystal3", "crystal4"];

// Assigns specific value to crystals
var crystalValues


//============================================================================

// Game code

// Function to reset game
resetGame()

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

