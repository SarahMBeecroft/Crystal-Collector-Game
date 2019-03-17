// Global Variables

// Selects random number between 19-120
var randomNumber = Math.floor(Math.random()*101 + 19);
console.log(randomNumber);

// Selects random number for crystals between 1-12
var crystal1 = Math.floor(Math.random()*11 + 1);
var crystal2 = Math.floor(Math.random()*11 + 1);
var crystal3 = Math.floor(Math.random()*11 + 1);
var crystal4 = Math.floor(Math.random()*11 + 1);

// User's wins
var wins = 0;

// User's losses
var losses = 0;

//============================================================================

// Game code

// Function to reset the game
function reset(){
    // Resets random number
    randomNumber=Math.floor(Math.random()*101+19);
    
    // Resets random crystal numbers
    $('#randomnumber').html(Random);
    crystal1= Math.floor(Math.random()*11+1);
    crystal2= Math.floor(Math.random()*11+1);
    crystal3= Math.floor(Math.random()*11+1);
    crystal4= Math.floor(Math.random()*11+1);

    // Resets total score
    totalScore= 0;
    $('#finalTotal').text(userTotal);
    } 

// Generates a random number between 19-120 at start of game
$(document).ready(function(){
    var randomNumber = Math.floor(Math.random()*101 + 19);

// Appends random number to randomnumber id in HTML
    $('#randomnumber').html(randomNumber); 

// Function to updates user's wins and losses
// Adds plus 1 to wins
function winner(){
    alert("You won!");
      wins++; 
      $('#wins').html(wins);
      reset();
    }
// Adds plus 1 to losses
function loser(){
    alert ("You lose!");
      losses++;
      $('#losses').html(losses);
      reset()
    }


// Sets up on.click function for each crystal
// Crystal 1 
$('#crystal1').on ('click', function(){
    totalScore = totalScore + crystal1;
   
    $('#totalscore').text(totalScore); 

        // Sets win and lose conditions
        if (totalScore == randomNumber){
          winner();
        }
        else if (totalScore > randomNumber){
          loser();
        }   
  })  

// Crystal 2
$('#crystal2').on ('click', function(){
    totalScore = totalScore + crystal1;
   
    $('#totalscore').text(totalScore); 

        // Sets win and lose conditions
        if (totalScore == randomNumber){
          winner();
        }
        else if (totalScore > randomNumber){
          loser();
        }   
  })  

// Crystal 3 
$('#crystal3').on ('click', function(){
    totalScore = totalScore + crystal1;
   
    $('#totalscore').text(totalScore); 

        // Sets win and lose conditions
        if (totalScore == randomNumber){
          winner();
        }
        else if (totalScore > randomNumber){
          loser();
        }   
  })  

// Crystal 4
$('#crystal4').on ('click', function(){
    totalScore = totalScore + crystal1;
   
    $('#totalscore').text(totalScore); 

        // Sets win and lose conditions
        if (totalScore == randomNumber){
          winner();
        }
        else if (totalScore > randomNumber){
          loser();
        }   
  })  


  // User's total scare
var totalScore = 0;
// Appends total score to totalscore id in HTML
$('#totalscore').text(totalScore); 






// end of game function 
}
)


// .click Function to set up onclick event for crystals


// Makes sure key pressed is number


// Resets game once user's total score matches random number OR user goes over random number and loses
// function resetGame() {
//     randomNumber = totalScore
//     pauseGame = false

// Gets a new random number


// Resets crystal numbers
    crystals = [];
    crystalValues = [];

    // For loop to reset crystal values
    

// Function to update the DOM
    // updateDisplay()


// Updates HTML to show random number, wins, loses, and total score

//This is the setter of the innerHTML property in jQuery
$('#regTitle').html('Hello World');

//This is the getter of the innerHTML property in jQuery
var helloWorld = $('#regTitle').html();

// Resets game once user reaches max guesses (change for crystal game)
// function resetGame() {
//     numGuess = maxGuess
//     pauseGame = false