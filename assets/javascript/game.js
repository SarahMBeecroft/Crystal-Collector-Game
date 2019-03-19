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

// User's total scare
var totalScore = 0;

// Audio for crystal noises and win/lose
var crystalSound1 = document.createElement("audio")
var crystalSound2 = document.createElement("audio")
var crystalSound3 = document.createElement("audio")
var crystalSound4 = document.createElement("audio")
var winningSound = document.createElement("audio")
var losingSound = document.createElement("audio")
crystalSound1.setAttribute("src", "assets/audio/crystal1.wav")
crystalSound2.setAttribute("src", "assets/audio/crystal2.wav")
crystalSound3.setAttribute("src", "assets/audio/crystal3.wav")
crystalSound4.setAttribute("src", "assets/audio/crystal4.wav")
winningSound.setAttribute("src", "assets/audio/winningsound.wav")
losingSound.setAttribute("src", "assets/audio/losingsound.wav")


//============================================================================

// Game code

// Game functions

// Function to reset the game
function reset(){
    // Resets random number
    randomNumber=Math.floor(Math.random()*101+19);
    
    // Resets random crystal numbers
    $('#randomnumber').html(randomNumber);
    crystal1= Math.floor(Math.random()*11+1);
    crystal2= Math.floor(Math.random()*11+1);
    crystal3= Math.floor(Math.random()*11+1);
    crystal4= Math.floor(Math.random()*11+1);

    // Resets total score
    totalScore= 0;
    $('#totalscore').text(totalScore);
    } 

// Function to updates user's wins and losses
// Adds plus 1 to wins
function winner(){
    $(winningSound).trigger('play');
      wins++; 
      $('#wins').html(wins);
      reset();
    }

// Adds plus 1 to losses
function loser(){
    $(losingSound).trigger('play');
      losses++;
      $('#losses').html(losses);
      reset();
    }


// Game begins      
// Generates a random number between 19-120 at start of game
$(document).ready(function(){

// Appends random number to randomnumber id in HTML
$('#randomnumber').html(randomNumber); 


// Sets up on.click function for each crystal
// Crystal 1 
$('#crystal1').on ('click', function(){

    // Plays audio for crystal click
    $(crystalSound1).trigger('play');
    // Adds flash effect
    $('#crystal1').fadeOut(100).fadeIn(100).delay(100);

    // Adds crystal score to total score
    totalScore = totalScore + crystal1;
   
    $('#totalscore').text(totalScore); 

        // Sets win and lose conditions
        if (totalScore === randomNumber){
          winner();
        }
        else if (totalScore > randomNumber){
          loser();
        }   
  })  

// Crystal 2
$('#crystal2').on ('click', function(){

    // Plays audio for crystal click
    $(crystalSound2).trigger('play');
    // Adds flash effect
    $('#crystal2').fadeOut(100).fadeIn(100).delay(100);

    // Adds crystal score to total score
    totalScore = totalScore + crystal2;
   
    $('#totalscore').text(totalScore); 

        // Sets win and lose conditions
        if (totalScore === randomNumber){
          winner();
        }
        else if (totalScore > randomNumber){
          loser();
        }   
  })  

// Crystal 3 
$('#crystal3').on ('click', function(){

    // Plays audio for crystal click
    $(crystalSound3).trigger('play');
    // Adds flash effect
    $('#crystal3').fadeOut(100).fadeIn(100).delay(100);

    // Adds crystal score to total score
    totalScore = totalScore + crystal3;
   
    $('#totalscore').text(totalScore); 

        // Sets win and lose conditions
        if (totalScore === randomNumber){
          winner();
        }
        else if (totalScore > randomNumber){
          loser();
        }   
  })  

// Crystal 4
$('#crystal4').on ('click', function(){

    // Plays audio for crystal click
    $(crystalSound4).trigger('play');
    // Adds flash effect
    $('#crystal4').fadeOut(100).fadeIn(100).delay(100);

    // Adds crystal score to total score
    totalScore = totalScore + crystal4;
   
    $('#totalscore').text(totalScore); 

        // Sets win and lose conditions
        if (totalScore === randomNumber){
          winner();
        }
        else if (totalScore > randomNumber){
          loser();
        }   
  })  

}
)
