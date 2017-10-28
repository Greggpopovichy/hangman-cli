//set up array to hold words
//require modules and packages
//import letter constructor which will build the users guesses
//import word constructor which will compare users guesses with randomly generated word from wordBank
//keep track of correct words and remaining guesses

//WIP - ran out of time on this.

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
        if (that.lettersGuessed.length > 0) {
            that.lettersGuessed = [];
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
            that.currentWord = that.wordBank[Math.floor(Math.random() * that.wordBank.length)];
            //splitting current word into an array to be able to compare with user guesses
            that.lettersInCurrentWord = that.currentWord.split("");
            console.log(that.lettersInCurrentWord);

                //Counting number of letters in word
                numBlanks = lettersInCurrentWord.length;
                //reset guess and success array after each round
                that.blanksAndSuccesses = [];
                //reset wrong guesses from previous round
                that.wrongGuesses = [];
            }
            for(var i = 0; i < numBlanks; i++){
                blanksAndSuccesses.push("_");
            }
            console.log(blanksAndSuccesses);
            that.startGame();
            that.promptUser();
    },
    //method that will ask user for their guess
    promptUser: function(){
        inquirer.prompt([{
            name: "getletter",
            type: "input",
            message: "Guess a letter!"
        }]).then(function(Word){
            var newWord = new Word;
            if(newWord === currentWord) {
                //console.log("")
            }
        })
    },
//if the user guesses the correct word or runs out of letter guesses, reset amount of remaining guesses.
    resetGuesses: function () {
        this.remainingGuesses = 10
    },
    roundFinished: function(){
        var that = this;
        //if the user guess the correct word increase winCounter
        if(lettersInChosenWord.toString() === blanksAndSuccesses.toString()){
            that.winCounter++;
            console.log("Nice guess!")
            //if the user fails to guess the correct word, increase lossCounter
        }else if(that.remainingGuesses === 0){
            that.lossCounter++;
            console.log("Close but no cigar.");
            that.resetGuesses();
        }
    }


};

HangmanGame.startGame();

