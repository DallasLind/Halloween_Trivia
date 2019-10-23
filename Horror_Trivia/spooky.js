//All questions with their respective answers
class Question {
	constructor(question, possibleAnswers, correctAnswer){
		this.question = question;
		this.possibleAnswers = possibleAnswers;
		this.correctAnswer = correctAnswer;
	}

	correct(selection){
		if(selection === this.correctAnswer){
			return true;
		}
	} else return false;
}


const questions = [
		new quizQuestion("Which movie was early career Joel Coen an assistant editor for?",["Halloween 2", "The Evil Dead", "An American Werewolf in London"], 1),
	
		new quizQuestion("True or False - Tony Todd in The Candyman put real bees in his mouth for the movie's climax",["True", "False"], 0),
		
		new quizQuestion("How many days did it take to film the Blair Witch Project?", ["8 days", "14 days", "5 days"], 0),

		new quizQuestion("What kind of mask is Michael Meyer's mask in Halloween?", ["A Generic Mask", "A modified William Shatner mask", "A modified Leonard Nimoy mask"], 1),

		new quizQuestion("Which show had a rejected episode that went on to become Final Destination?", ["The Twilight Zone", "Tales from the Crypt", "The X-Files"], 2),
		
		new quizQuestion("Which installment of the Friday the 13th franchise saw Jason in space?", ["Jason X", "Friday the 13th Part VI: Jason Lives", "Freddy vs. Jason"], 0),
		
		new quizQuestion("Where are the infamous Exorcist stairs located?", ["Los Angeles", "New York City", "Georgetown"], 2),

		new quizQuestion("What classic teen comedy did the Texas Chainsaw Massacre 2 poster spoof?", ["Ferris Bueller's Day Off", "Sixteen Candles", "The Breakfast Club"], 2),

		new quizQuestion("Where did House of 1000 Corpses' Captain Spaulding get his name from?", ["Trick question, it's an original name", "Groucho Marx character", "A famous vaudeville performer"], 1),

		new quizQuestion("Which of these movies were directed by a woman?", ["Carrie", "The Babadook", "Ginger Snaps"], 1)
];


//Organize my variables for the function to create my Quiz
//Create the quiz itself
function quiz(questions){
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}

function quizQuestion(question, possibleAnswers, correctAnswer){
	this.question = question;
	this.possibleAnswers = possibleAnswers;
	this.correctAnswer = correctAnswer;
}


quiz.prototype.getQuestionIndex = function(){
	return this.question[this.questionIndex];
}

quiz.prototype.guess = function(answer){
	if(this.getQuestionIndex().isCorrectAnswer(possibleAnswer)){
		this.score++;
	}
}

this.questionIndex++;


quiz.prototype.done = function(){
	return this.questionIndex === this.questions.length;
}

function makeQuiz(){
	if(quiz.done()){
		showScore();
	} else {
		//For Qs
		let element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		//For As
		let answers = quiz.getQuestionIndex().possibleAnswer;
		for(let i = 0; i < possibleAnswer.length; i++){
			let element = document.getElementById("possibleAnswer" + i);
			element.innerHTML = possibleAnswer[i];
			guess("button" + i, possibleAnswer[i]);
		}
		showProgress();
	}
};

function guess(id, guess) {
	let button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		makeQuiz();
	}
};

function showScore(){
	let gameEnd = "<h1>Result</h1>";
	gameEnd += "<h2 id='score'>Correct: " + quiz.score + "</h2>";
	let element = document.getElementById("quiz");
	element.innerHTML = gameEnd;
};

let newQuiz = new quiz(questions);

makeQuiz();

//Make the scoring

//Results Page

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