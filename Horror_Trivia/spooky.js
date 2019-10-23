//All questions with their respective answers
function quizQuestion(question, answers, correctAnswer){
	this.question = question;
	this.answers = answers;
	this.correctAnswer = correctAnswer;
}

const allQuestions = [
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


//Scoring Variables
let currentQuestion = 0;
let scoring = 0;

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