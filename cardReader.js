
var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");



//Basic Card setup, pulling exported constructor from BasicCard.js
var deck = [];
var i = 0;

var card1 = new BasicCard("What was the penalty in ancient Egypt for killing a cat?", "Death");
var card2 = new BasicCard("Do cats have fewer teeth than dogs, or more?", "Fewer");
var card3 = new BasicCard("Which brain is the feline brain more similar to - canine, or human?", "Human");

deck.push(card1);
deck.push(card2);
deck.push(card3);



// Cloze Card setup, pulling exported constructor from ClozeCard.js
var clozeDeck = [];
var j = 0;

var cloze1 = new ClozeCard("A group of cats is called a clowder.","clowder");
var cloze2 = new ClozeCard("A group of kittens is called a kindle.","kindle");
var cloze3 = new ClozeCard("There are five categories of taste that the human tongue can detect. Cats, however, cannot taste sweet things.","sweet");

clozeDeck.push(cloze1);
clozeDeck.push(cloze2);
clozeDeck.push(cloze3);



function start(){
	inquirer.prompt([
			{
				name: "choice",
				type: "list",
				message: "Basic Cards or Cloze Cards?",
				choices: ["Basic", "Cloze"]
			}
		]).then(function(answer){
			if (answer.choice == "Basic"){
				basicReader();
			}
			else if (answer.choice == "Cloze"){
				clozeReader();
			}
		});		
};


function basicReader() {

	if (i < deck.length) {
		inquirer.prompt([
			{
				name: "question",
				message: deck[i].front
			}
		]).then(function(answer){
			if (answer.question == deck[i].back) {
				console.log("Correct!");
				i++;
				cardReader();	
			} else {
				console.log("WRONG! The answer is " + deck[i].back);
				i++;
				cardReader();
			}
		});
	}
};


function clozeReader(){
	if (j < clozeDeck.length){
		inquirer.prompt([
			{
				name: "question",
				type: "input",
				message: clozeDeck[j].partial
			}
		]).then(function(answer){
			if (answer.question == clozeDeck[j].cloze){
				console.log("Correct! " + clozeDeck[j].text);
				j++;
				clozeReader();
			} else {
				console.log("WRONG!" + clozeDeck[j].text);
				j++;
				clozeReader();
			}

		});
	}
};

start();