//set up array to hold words
//require modules and packages
//import letter constructor which will build the users guesses
//import word constructor which will compare users guesses with randomly generated word from wordBank
//keep track of correct words and remaining guesses
//

var inquirer = require("inquirer");
var Word = require("./word");
var Letter = require("./letter");

var HangmanGame = {
    //array to hold possible words
    wordBank:["atlanta", "providence", "boston", "oakland", "pittsburgh", "chicago", "austin", "denver"],
    //counter to keep track of correct words
    winCounter: 0,
    //counter to keep track of losses
    lossCounter: 0,
    //counter to keep track of how many remaining guesses
    remainingGuesses:10,
    //counter to keep track of incorrectly guessed words
    wrongGuesses: [],
    //array to keep track of all of the user's guesses
    lettersGuessed: [],
    //currentWord keeps track of what the current word is
    currentWord: "",
    //breaks the current word into different characters within an array
    lettersInCurrentWord: [],
    //method to start the game
    blanksAndSuccesses: [],


    startGame: function () {
        //that = this so we can use 'this' keyword in functions that are within methods on HangmanGame obj.
        var that = this;
        //clear everything to start game
        if (this.lettersGuessed.length > 0) {
            this.lettersGuessed = [];
        } else {
            inquirer.prompt([
                {
                    type: "confirm",
                    message: "I'm thinking of a city. Can you guess which one?",
                    name: "play"
                }
            ]).then(function(res) {
                // If the inquirerResponse confirms, we run startGame()
                if (res.play) {
                    console.log("Sweet. Let's play");
                    that.newGame();
                }
                else {
                    console.log("Okay, have a nice day");
                }
            })

        }
    },

    newGame: function(){
        var that = this;
        if(remainingGuesses === 10){
            //choosing random word from wordBank to start game
            this.currentWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
            //splitting current word into an array to be able to compare with user guesses
            this.lettersInCurrentWord = this.currentWord.split("");
            console.log(this.lettersInCurrentWord);
            //Counting number of letters in word
            numBlanks = lettersInCurrentWord.length;
            //reset guess and success array after each round
            this.blanksAndSuccesses = [];
            //reset wrong guesses from previous round
            this.wrongGuesses = [];

            for(var i = 0; i < numBlanks; i++){
                blanksAndSuccesses.push("_");
            }
            console.log(blanksAndSuccesses);
        }
    },
    //method that will ask user for their guess
    promptUser: function(){
        inquirer.prompt([{
            name: "getletter",
            type: "input",
            message: "Guess a letter!"
        }]).then(function(letter){
            var userLetter = (letter.getLetter).toLowerCase();
        })
    },
//if the user guesses the correct word or runs out of letter guesses, we reset amount of remaining guesses.
    resetGuesses: function () {
        this.remainingGuesses = 10
    },
    roundComplete: function(){
        if(lettersInChosenWord.toString() === blanksAndSuccesses.toString()){

        }
    }


};

HangmanGame.startGame();

