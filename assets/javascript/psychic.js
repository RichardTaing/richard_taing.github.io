/* BASICS FOR THE GAME:
1. Computer makes a random letter choice
2. User selects a letter
3. Make sure user selection is a letter
4. Capture the computer's choice and the user's guess
5. Compare the choice and the guess
7. Determine Wins & Losses
9. Count the attempts made by user
10. Record all guesses made by user
11. When user wins, reset game, but not the stats
12. When user runs out of guesses, reset game, but not the stats
13. Display all game stats to the user */

// Created an Array of alphabetical options s for both computer and user to choose from
var alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

//  Created variables for stats
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var pyschicChoice = null;

// Randomly creating pyschic choice.
pyschicChoiceFunc = function() {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
};
pyschicChoice = pyschicChoiceFunc();
console.log("The Psychic has choosen: " + pyschicChoice);
// Starts the script every time a key is pressed; on the key release (onekeyup)
document.onkeyup = function(event) {
  // User presses a letter key, then recorded under var userGuess and converts to UpperCase
  var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
  console.log(userGuess);

  //Letter keys pressed by the user are pushed into the guessesSoFar empty array.
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    //65 to 90 is the range for Capital alphabates (A-Z)
    guessesSoFar.push(userGuess);
  }

  if (event.keyCode >= 65 && event.keyCode <= 90) {
    //If user guesses right, increase the wins count, reset guesses left, reset so far, pick a new letter:
    if (userGuess == pyschicChoice) {
      wins++;
      guessesLeft--;
      guessesSoFar = [];
      guessesLeft = 10;

      //Alerts the user when they guessed correctly
      alert("CORRECT!\n" + "Have you thought about being a Psychic?");
      alert("Want to try out your new psychic abilities again?");

      // Choose another letter
      pyschicChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    } else {
      //If user guesses wrong this will increase the losses count, and decrease number of guesses left.
      // losses++;
      guessesLeft--;
    }
  }
  //An alert will be displayed if the users presses keys other than letters
  else {
    alert("Please be sure to select a letter from the Alphabet (from A to Z)");
  }
  // When the users runs out of guesses this will reset the counter back to 0. If guessesLeft = 0, reset guessesLeft back to 10
  if (guessesLeft == 0) {
    guessesLeft = 10;
    losses++;
    guessesSoFar = [];

    alert("GAME OVER!");
    alert(
      "Looks like you suck at this!\nYou have ZERO psychic abilities!!\nProbably best not to try again!!!"
    );

    // Choose another letter
    pyschicChoice = pyschicChoiceFunc();
    console.log("The Psychic has choosen: " + pyschicChoice);
  }
  // Dispays the results on the screen for the user
  var winloss =
    "<h3> Wins: " +
    wins +
    "</h3>" +
    "<br>" +
    "<h3> Losses: " +
    losses +
    "</h3>" +
    "<br>" +
    "<h3> Guesses remaining: " +
    guessesLeft +
    "</h3>" +
    "<br>" +
    "<h3> Guesses so far: " +
    guessesSoFar +
    "</h3>" +
    "<br>" +
    "<h3> You chose: " +
    userGuess +
    "</h3>";

  document.querySelector("#winloss").innerHTML = winloss;
};
