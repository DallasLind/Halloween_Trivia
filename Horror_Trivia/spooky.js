const questionTitle = document.getElementById('questionTitle');
const submission = document.getElementById('submit');
const possibleAnswers = document.getElementById('possibleAnswers');
//All questions with their respective answers
const questions = [
		{
		question: "Which movie was early career Joel Coen an assistant editor for?",
		answers: ["Halloween 2", "The Evil Dead", "An American Werewolf in London"],
		correctAnswer: 1	
		},
		
		{
		question: "True or False - Tony Todd in The Candyman put real bees in his mouth for the movie's climax",
		answers: ["True", "False"],
		correctAnswer: 0
		},
		
		{
		question: "How many days did it take to film the Blair Witch Project?",
		answers: ["8 days", "14 days", "5 days"],
		correctAnswer: 0
		},
		
		{
		question: "What kind of mask is Michael Meyer's mask in Halloween?",
		answers: ["A Generic Mask", "A modified William Shatner mask", "A modified Leonard Nimoy mask"],
		correctAnswer: 1
		},

		{
		question: "Which show had a rejected episode that went on to become Final Destination?",
		answers: ["The Twilight Zone", "Tales from the Crypt", "The X-Files"],
		correctAnswer: 2
		},

		{
		question: "Which installment of the Friday the 13th franchise saw Jason in space?",
		answers: ["Jason X", "Friday the 13th Part VI: Jason Lives", "Freddy vs. Jason"],
		correctAnswer: 0
		},
	
		{
		question: "Where are the infamous Exorcist stairs located?",
		answers: ["Los Angeles", "New York City", "Georgetown"],
		correctAnswer: 2
		},

		{
		question: "What classic teen comedy did the Texas Chainsaw Massacre 2 poster spoof?",
		answers: ["Ferris Bueller's Day Off", "Sixteen Candles", "The Breakfast Club"],
		correctAnswer: 2
		},
	
		{
		question: "Where did House of 1000 Corpses' Captain Spaulding get his name from?",
		answers: ["Trick question, it's an original name", "Groucho Marx character", "A famous vaudeville performer"],
		correctAnswer: 1
		},
	
		{
		question: "Which of these movies were directed by a woman?",
		answers: ["Carrie", "The Babadook", "Ginger Snaps"],
		correctAnswer: 1
		}
];

//Organize my variables for the function to create my Quiz
let i = 0;
let qLength = questions.length;
let score = 0;
let currentQIndex = 0;
const lastQ = questions.length -1;

//Hahaha, forgot to actually make the button do anything
goBtn.onclick = function(){
	if(i >questions.length){
		i=0;
	}
	makeQuiz(i);
	i++;
};


//Make quiz and radio buttons appear in the HTML
function makeQuiz(qLength) {
	let q1 = questions[i];
	questionTitle.innerText = q1.question;

	possibleAnswers.innerHTML = ""; //reset answers
	for(key in q1.answers){
		let radioBtn = "question"+i+"_answers";
		let answerText = q1.answers[key];
		possibleAnswers.appendChild(list(radioBtn, answerText));
	}
}

//Create list for buttons to get through
function list(name, answerText) {
	let element = document.createElement('li');
	let btn = '<input type="radio" name="' + name + '"';
	btn += '/>';
	btn += answerText;
	element.innerHTML = btn;
	return element;
}

if(lastQ)

//Scoring
function checkAnswer(answer, correctAnswer){
	if(answer == questions[currentQIndex].correctAnswer){
		score++;
		alert("Correct!");
	} else {
		alert("DEAD WRONG");
	}
}

checkAnswer();
//Music
let myMusic = document.getElementById("music");
let isPlaying = false;

function togglePlay(){
	if(isPlaying) {
		music.pause()
	} else {
		music.play();
	}
};

music.onplaying = function(){
	isPlaying = true;
};

music.onpause = function(){
	isPlaying = false;
};