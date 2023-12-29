var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Mantosh",
    score: 4,
  },
 
]

// array of objects for APJ Abdul Kalam
var kalamQuestions = [
  {
    question: "What is APJ Abdul Kalam's full name? ",
    answer: "Avul Pakir Jainulabdeen Abdul Kalam"
  },
  {
    question: "In which year was APJ Abdul Kalam born? ",
    answer: "1931"
  },
  {
    question: "What was APJ Abdul Kalam's profession before he became the President of India? ",
    answer: "Scientist"
  },
  {
    question: "Which missile project is famously associated with APJ Abdul Kalam? ",
    answer: "Pokhran-II"
  },
  {
    question: "In which year did APJ Abdul Kalam become the President of India? ",
    answer: "2002"
  }
];

function welcome() {
  var userName = readlineSync.question("What's your name? ");
  console.log("Welcome " + userName + " to DO YOU KNOW APJ Abdul Kalam?");
}

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("correct");
    score = score + 1;
  } else {
    console.log("wrong");
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < kalamQuestions.length; i++) {
    var currentQuestion = kalamQuestions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores:");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

// Run the game
welcome();
game();
showScores();
