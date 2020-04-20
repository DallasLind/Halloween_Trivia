const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const possibleAnswerA = document.getElementById("A");
const possibleAnswerB = document.getElementById("B");
const possibleAnswerC = document.getElementById("C");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

const questions = [
  {
    question: "Which movie was early career Joel Coen an assistant editor for?",
    possibleAnswerA: "Halloween 2",
    possibleAnswerB: "The Evil Dead",
    possibleAnswerC: "An American Werewolf in London",
    correctAnswer: "B",
  },
  {
    question: "What are the colors of Freddy Kreuger's famous sweater?",
    possibleAnswerA: "Red and Green",
    possibleAnswerB: "Red and Brown",
    possibleAnswerC: "Green and Brown",
    correctAnswer: "A",
  },
  {
    question: "How many days did it take to film the Blair Witch Project?",
    possibleAnswerA: "8 days",
    possibleAnswerB: "14 days",
    possibleAnswerC: "5 days",
    correctAnswer: "A",
  },
  {
    question: "What kind of mask is Michael Meyer's mask in Halloween?",
    possibleAnswerA: "A Generic Mask",
    possibleAnswerB: "A modified William Shatner mask",
    possibleAnswerC: "A modified Leonard Nimoy mask",
    correctAnswer: "B",
  },
  {
    question:
      "Which show had a rejected episode that went on to become Final Destination?",
    possibleAnswerA: "The Twilight Zone",
    possibleAnswerB: "Tales from the Crypt",
    possibleAnswerC: "The X-Files",
    correctAnswer: "C",
  },
  {
    question:
      "Which installment of the Friday the 13th franchise saw Jason in space?",
    possibleAnswerA: "Jason X",
    possibleAnswerB: "Friday the 13th Part VI: Jason Lives",
    possibleAnswerC: "Freddy vs. Jason",
    correctAnswer: "A",
  },
  {
    question: "Where are the infamous Exorcist stairs located?",
    possibleAnswerA: "Los Angeles",
    possibleAnswerB: "New York City",
    possibleAnswerC: "Georgetown",
    correctAnswer: "C",
  },
  {
    question:
      "What classic teen comedy did the Texas Chainsaw Massacre 2 poster spoof?",
    possibleAnswerA: "Ferris Bueller's Day Off",
    possibleAnswerB: "Sixteen Candles",
    possibleAnswerC: "The Breakfast Club",
    correctAnswer: "C",
  },
  {
    question:
      "Where did House of 1000 Corpses' Captain Spaulding get his name from?",
    possibleAnswerA: "Trick question, it's an original name",
    possibleAnswerB: "A Groucho Marx character",
    possibleAnswerC: "A famous vaudeville performer",
    correctAnswer: "B",
  },
  {
    question: "Which of these movies were directed by a woman?",
    possibleAnswerA: "Carrie",
    possibleAnswerB: "The Babadook",
    possibleAnswerC: "Ginger Snaps",
    correctAnswer: "B",
  },
];

const lastQ = questions.length - 1;
let currentQ = 0;
let count = 0;
let score = 0;

function makeQ() {
  let q = questions[currentQ];

  question.innerHTML = "<h3>" + q.question + "</h3>";
  possibleAnswerA.innerHTML = q.possibleAnswerA;
  possibleAnswerB.innerHTML = q.possibleAnswerB;
  possibleAnswerC.innerHTML = q.possibleAnswerC;
}

function shuffle(questions) {
  questions.sort(() => Math.random() - 0.5);
}

start.addEventListener("click", startQ);

function startQ() {
  makeQ();
  progressQ();
  let myMusic = new Audio("./Music/HalloweenTheme.mp3");
  myMusic.play();
  start.style.display = "none";
  quiz.style.display = "block";
}

function progressQ() {
  for (let qIndex = 0; qIndex <= lastQ; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

function checkA(answer) {
  if (answer == questions[currentQ].correctAnswer) {
    score++;
    correctA();
  } else {
    wrongA();
  }
  count = 0;
  if (currentQ < lastQ) {
    currentQ++;
    makeQ();
  } else {
    makeScore();
  }
}

function correctA() {
  modernAlert.alert("Correct...this time", "You're Right!");
}

function wrongA() {
  modernAlert.alert("DEAD WRONG", "Incorrect!");
}

modernAlert({
  overlayColor: "rgba(100, 0, 0, 0.5)",
  overlayBlur: 5,
  titleBackgroundColor: "black",
  titleColor: "#800000",
  defaultButtonsText: { ok: "Proceed" },
});

function makeScore() {
  document.getElementById("score").textContent = "Score: " + score;
  let audio = new Audio("./Music/heartbeat.WAV");
  audio.loop = true;
  audio.play();
  audio.volume = 1;
  question.style.display = "none";
  possibleAnswerA.style.display = "none";
  possibleAnswerB.style.display = "none";
  possibleAnswerC.style.display = "none";
}
