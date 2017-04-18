//function for temperature coverter
var t = 0;
function convertTemp (t, u) {
  if (u==="C") {
    t = (t-32)*5/9;
    console.log(t + "C");
  } else if (u==="F") {
    t = t * 9/5 + 32;
    console.log(t + "F");
  }
}
convertTemp(212, "C"); // > 100
convertTemp(32, "C");  // > 0
convertTemp(65, "C"); // > 18.333
convertTemp(0, "F"); // > 32

//function for guessing game
function guessGame(){
  number = Math.floor(Math.random()*10);
  document.write(number);
  var guess = prompt("Guess a number: ");
  while (guess != number) {
    if (number < guess) {
      guess = prompt("You've guessed too high! Guess again!");
    } else {
      guess = prompt("You've guessed too low! Guess again!");
    }
  }
  document.write("Good Job!");
}
guessGame();
