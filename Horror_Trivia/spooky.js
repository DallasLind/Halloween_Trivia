const quizzicle = document.getElementById('quiz');
const resultsicle = document.getElementById('results');
const submission = document.getElementById('submit');

const questions = [
	{
		question: "Which movie was early career Joel Coen an assistant editor for?",
		answers: {
			a: "Halloween 2",
			b: "The Evil Dead",
			c: "An American Werewolf in London"
		},
		correctAnswer: "b"
	},
	{
		question: "True or False - Tony Todd in The Candyman put real bees in his mouth for the movie's climax",
		answers: {
			a: "True",
			b: "False"
		},
		correctAnswer: "a"
	},
	{
		question: "How many days did it take to film the Blair Witch Project?",
		answers: {
			a: "8 days",
			b: "14 days",
			c: "5 days",
		},
		correctAnswer: "a"
	},
	{
		question: "What kind of mask is Michael Meyer's mask in Halloween?",
		answers: {
			a: "A Generic Mask",
			b: "A modified William Shatner mask",
			c: "A modified Leonard Nimoy mask",
		},
		correctAnswer: "b"
	},
	{
		question: "Which show had a rejected episode that went on to become Final Destination?",
		answers: {
			a: "The Twilight Zone",
			b: "Tales from the Crypt",
			c: "The X-Files",
		},
		correctAnswer: "c"
	},
	{
		question: "Which installment of the Friday the 13th franchise saw Jason in space?",
		answers: {
			a: "Jason X",
			b: "Friday the 13th Part VI: Jason Lives",
			c: "Freddy vs. Jason",
		},
		correctAnswer: "a"
	},
	{
		question: "Where are the infamous Exorcist stairs located?",
		answers: {
			a: "Los Angeles",
			b: "New York City",
			c: "Georgetown",
		},
		correctAnswer: "c"
	},
	{
		question: "What classic teen comedy did the Texas Chainsaw Massacre 2 poster spoof?",
		answers: {
			a: "Ferris Bueller's Day Off",
			b: "Sixteen Candles",
			c: "The Breakfast Club",
		},
		correctAnswer: "c"
	},
	{
		question: "Where did House of 1000 Corpses' Captain Spaulding get his name from?",
		answers: {
			a: "Trick question, it's an original name",
			b: "Groucho Marx character",
			c: "A famous vaudeville performer",
		},
		correctAnswer: "b"
	},
	{
		question: "Which of these movies were directed by a woman?",
		answers: {
			a: "Carrie",
			b: "The Babadook",
			c: "Ginger Snaps",
		},
		correctAnswer: "b"
	}
]